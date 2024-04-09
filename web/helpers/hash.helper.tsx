export function hashPassword(password: string): string {
	let md5 = require('md5');
    
    return md5(password);
}