import Config from "../Config/Config";
import { MissingTokenError, ExpiredTokenError, InvalidTokenError } from "./Errors/Errors";
import HttpResponse from "../Interfaces/HttpResponse";

enum HTTP_METHODS {
    "delete" = "DELETE",
    "get" = "GET",
    "patch" = "PATCH",
    "post" = "POST",
    "put" = "PUT",
};

class Client {
    private config: Config;

    constructor(configuration: Config) {
        this.config = configuration;
    }

    async delete<T>(uri: string): Promise<HttpResponse<T>> {
        return this.request<T>(HTTP_METHODS.delete, uri);
    }

    async post<T>(uri: string, params: object = {}): Promise<HttpResponse<T>> {
        return this.request(HTTP_METHODS.post, uri, params);
    }

    async patch<T>(uri: string, params: object = {}): Promise<HttpResponse<T>> {
        return this.request<T>(HTTP_METHODS.patch, uri, params);
    }

    async request<T>(method: HTTP_METHODS, uri: string, params: object = {}, headers: HeadersInit = {}): Promise<HttpResponse<T>>
    {
        headers = new Headers(headers);
        if (headers.has('Accept') === null || /application\/json/gi.test(headers.get('Accept')!) === false) {
            headers.append('Accept', 'application/json');
        }

        headers.set('Authorization', `Bearer ${this.config.get('access_token')}`);

        const response: HttpResponse<T> = await fetch(
            (this.config.get('base_url') as string) + uri,
            {
                method,
                mode: "cors",
                credentials: "omit",
                headers,
                body: JSON.stringify(params),
            }
        );

        try {
            response.parsedBody = await response.json();
        } catch(error) {}

        if (response.ok !== true) {
            switch (response.status) {
                case 401:
                    if (response.headers.has('WWW-Authenticate')) {
                        let reason = response.headers.get('WWW-Authenticate')!;

                        if (/expired/gi.test(reason)) {
                            throw new ExpiredTokenError(response);
                        }

                        if (/Could not fine an access token/gi.test(reason)) {
                            throw new MissingTokenError(response);
                        }

                        if (/invalid/gi.test(reason)) {
                            throw new InvalidTokenError(response);
                        }
                    }
                    break;
                case 400:
                    if (response.headers.has('WWW-Authenticate')) {
                        let reason = response.headers.get('WWW-Authenticate')!;

                        if (/Could not fine an access token/gi.test(reason)) {
                            throw new MissingTokenError(response);
                        }
                    }
                    break;
            }
        }

        return response;
    }
}

export default Client;