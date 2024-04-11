import { ForgotBlockProps } from './ForgotBlock.props';
import { useRouter } from 'next/router';
import { Input } from '../../Common/Input/Input';
import { InputWithEye } from '../../Common/InputWithEye/InputWithEye';
import { setLocale } from '../../../helpers/locale.helper';


export const ForgotBlock = ({ username, newPassword, confirmNewPassword, pswdType, confPswdType, error, setUsername,
    setNewPassword, setConfirmNewPassword, setPswdType, setConfPswdType}: ForgotBlockProps): JSX.Element => {
    const router = useRouter();
    
    return (
        <>
            <Input type='text' text={setLocale(router.locale).username}
                value={username} error={error.errUsername} eye={false}
                onChange={(e) => setUsername(e.target.value)} />
            <InputWithEye onMouseEnter={() => setPswdType('text')}
                onMouseLeave={() => setPswdType('password')}>
                <Input type={pswdType} text={setLocale(router.locale).new_password}
                    value={newPassword} error={error.errPassword} eye={true}
                    onChange={(e) => setNewPassword(e.target.value)} />
            </InputWithEye>
            <InputWithEye onMouseEnter={() => setConfPswdType('text')}
                onMouseLeave={() => setPswdType('password')}>
                <Input type={confPswdType} text={setLocale(router.locale).confirm_new_password}
                    value={confirmNewPassword} error={error.errConfirmPassword} eye={true}
                    onChange={(e) => setConfirmNewPassword(e.target.value)} />
            </InputWithEye>
        </>
    );
};