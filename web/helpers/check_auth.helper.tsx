import { setLocale } from "./locale.helper";
import { AuthDataInterface, AuthFormType, CheckAuthInterface } from "../interfaces/check_auth_interface";
import { ToastError, ToastSuccess } from "../components/Common/Toast/Toast";
import { forgotUser, loginUser, registerUser } from "./auth.helper";


export async function checkAuth(data: AuthDataInterface, router: any, setError: (e: any) => void,
    type: AuthFormType, setLoading: (e: any) => void, setType: (e: any) => void) {
    let isOk: boolean = false;
    setLoading(true);

    if (type === 'login') {
        isOk = await checkLogin(data, router, setError, setLoading);
    } else if (type === 'registration') {
        isOk = await checkRegistration(data, router, setError, setLoading);
    } else {
        isOk = await checkForgot(data, router, setError, setLoading, setType);
    }
}

export async function checkLogin(loginData: AuthDataInterface, router: any,
    setError: (e: any) => void, setLoading: (e: any) => void): Promise<boolean> {
    const checkLogin: CheckAuthInterface = {
        errUsername: false,
        errPassword: false,
    };

    setError(checkLogin);

    if (loginData.username?.length && loginData.username?.length >= 3
        &&loginData.password.length >= 8 && loginData.password.length <= 32) {
            if (!await loginUser(loginData)) {
                checkLogin.errUsername = true;
                checkLogin.errPassword = true;

                ToastError(setLocale(router.locale).incorrect_data);
                setLoading(false);
    
                return false;
            }
    
            ToastSuccess(setLocale(router.locale).cool + '!');
            setLoading(false);
            
            localStorage.setItem('_id', loginData.username);
            router.push('/home');
    
            return true;
    } else {
        if (!loginData.username || loginData.username && loginData.username?.length < 3) {
            checkLogin.errUsername = true;
            { ToastError(setLocale(router.locale).error_username); }
        }

        if (loginData.password.length < 8 || loginData.password.length > 32) {
            checkLogin.errPassword = true;
            { ToastError(setLocale(router.locale).error_password); }
        }

        setLoading(false);

        return false;
    }
}

export async function checkRegistration(registrationData: AuthDataInterface, router: any,
    setError: (e: any) => void, setLoading: (e: any) => void): Promise<boolean> {
    const checkRegistration: CheckAuthInterface = {
        errUsername: false,
        errPassword: false,
        errConfirmPassword: false,
    };

    setError(checkRegistration);

    if (registrationData.password.length >= 8 && registrationData.password.length <= 32
        && registrationData.password === registrationData.confirmPassword
        && registrationData.username?.length && registrationData.username?.length >= 3) {
        if (!await registerUser(registrationData)) {
            checkRegistration.errUsername = true;

            ToastError(setLocale(router.locale).username_taken);
            setLoading(false);

            return false;
        }

        ToastSuccess(setLocale(router.locale).cool + '!');
        setLoading(false);

        localStorage.setItem('_id', registrationData.username);
        router.push('/home');

        return true;
    } else {
        if (!registrationData.username || registrationData.username && registrationData.username?.length < 3) {
            checkRegistration.errUsername = true;
            { ToastError(setLocale(router.locale).error_username); }
        }

        if (registrationData.password.length < 8 || registrationData.password.length > 32) {
            checkRegistration.errPassword = true;
            { ToastError(setLocale(router.locale).error_password); }
        }

        if (registrationData.password !== registrationData.confirmPassword) {
            checkRegistration.errConfirmPassword = true;
            { ToastError(setLocale(router.locale).error_confirm); }
        }

        setLoading(false);
        
        return false;
    }
}

export async function checkForgot(forgotData: AuthDataInterface, router: any,
    setError: (e: any) => void, setLoading: (e: any) => void, setType: (e: any) => void): Promise<boolean> {
    const checkForgot: CheckAuthInterface = {
        errUsername: false,
        errPassword: false,
        errConfirmPassword: false,
    };

    setError(checkForgot);

    if (forgotData.password.length >= 8 && forgotData.password.length <= 32
        && forgotData.password === forgotData.confirmPassword
        && forgotData.username?.length && forgotData.username?.length >= 3) {
        if (!await forgotUser(forgotData)) {
            checkForgot.errUsername = true;

            ToastError(setLocale(router.locale).incorrect_data);
            setLoading(false);

            return false;
        }

        ToastSuccess(setLocale(router.locale).password_changed);
        setLoading(false);
        setType('login');

        return true;
    } else {
        if (!forgotData.username || forgotData.username && forgotData.username?.length < 3) {
            checkForgot.errUsername = true;
            { ToastError(setLocale(router.locale).error_username); }
        }

        if (forgotData.password.length < 8 || forgotData.password.length > 32) {
            checkForgot.errPassword = true;
            { ToastError(setLocale(router.locale).error_password); }
        }

        if (forgotData.password !== forgotData.confirmPassword) {
            checkForgot.errConfirmPassword = true;
            { ToastError(setLocale(router.locale).error_confirm); }
        }

        setLoading(false);
        
        return false;
    }
}
