import { setLocale } from "./locale.helper";
import axios, { AxiosResponse } from "axios";
import { hashPassword } from "./hash.helper";
import { User } from "../interfaces/user.interface";
import { AuthDataInterface } from "../interfaces/check_auth_interface";
import { ToastError, ToastSuccess } from "../components/Common/Toast/Toast";


export async function loginUser(data: AuthDataInterface, router: any) {
    const { data: response }: AxiosResponse<User[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
        '/get_user?type=email&information=' + data.email);

    ToastSuccess(setLocale(router.locale).cool + '!');
    localStorage.setItem('logged_in', 'true');
    localStorage.setItem('username', response[0].username);
    router.push('/content');
}

export async function registerUser(data: AuthDataInterface, router: any) {
    await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/register', {
        username: data.username,
        email: data.email,
        password: hashPassword(data.password),
    })
        .then(function () {
            ToastSuccess(setLocale(router.locale).cool + '!');
            localStorage.setItem('logged_in', 'true');
            router.push('/content');
        })
        .catch(function (error) {
            console.log("Registration error: " + error);
            ToastError(String(error));
        });
}
