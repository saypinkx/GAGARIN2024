import axios, { AxiosResponse } from "axios";
import { setUser } from "../features/user/userSlice";
import { User } from "../interfaces/user.interface";


export async function pageHelper(type: 'index' | 'other', router: any, dispatch: any, setIsAuth: (e: any) => void) {
	const _id = localStorage.getItem('_id');


	if (_id) {
		const { data: response }: AxiosResponse<User> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
			'/api/users/separatrix');

		dispatch(setUser(response));
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
