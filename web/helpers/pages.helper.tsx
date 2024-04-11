import { setUser } from "../features/user/userSlice";


export function pageHelper(type: 'index' | 'other', router: any, dispatch: any, setIsAuth: (e: any) => void) {
	const loggedIn = localStorage.getItem('logged_in');

	if (loggedIn) {
		dispatch(setUser({
			username: loggedIn,
		}));
		setIsAuth(true);

		if (type === 'index') {
			router.push('/home');
		}
	} else {
		setIsAuth(false);

		if (type === 'other') {
			router.push('/');
		}
	}
}
