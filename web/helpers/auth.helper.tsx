import axios from "axios";
import { hashPassword } from "./hash.helper";
import { AuthDataInterface } from "../interfaces/check_auth_interface";


export async function loginUser(data: AuthDataInterface): Promise<boolean> {
    let res : boolean = false;

    await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/api/users/login', {
        login: data.username,
        password: hashPassword(data.password)
    })
        .then(function () {                
            res = true;
        })
        .catch(function (error) {
            console.log("Login error: " + error);
    
            res = false;
        });
    
    return res;
}

export async function registerUser(data: AuthDataInterface): Promise<boolean> {
    let res : boolean = false;

    await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/api/users', {
        login: data.username,
        password: hashPassword(data.password),
        parameters: {}
    })
        .then(function () {           
            res = true;
        })
        .catch(function (error) {
            console.log("Registration error: " + error);

            res = false;
        });
    
    return res;
}

export async function forgotUser(data: AuthDataInterface): Promise<boolean> {
    let res : boolean = false;

    await axios.put(process.env.NEXT_PUBLIC_DOMAIN + '/api/users/' + data.username, {
        password: hashPassword(data.password),
    })
        .then(function () {           
            res = true;
        })
        .catch(function (error) {
            console.log("Forgot error: " + error);

            res = false;
        });
    
    return res;
}

export async function deleteUser(username: string) {
    await axios.delete(process.env.NEXT_PUBLIC_DOMAIN + '/api/users/' + username)
        .catch(function (error) {
            console.log("Deleting error: " + error);
        });
}
