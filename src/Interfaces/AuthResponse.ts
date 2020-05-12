import { User, Business } from "../Models/Models";

interface AuthResponse extends Object {
    tokens: {
        access_token: String;
        refresh_token: String;
    };
    user: User;
    business?: Business;
}

export default AuthResponse;