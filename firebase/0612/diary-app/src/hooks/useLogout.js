import { useState } from 'react'
import { appAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'
import { signOut } from "firebase/auth";

export const useLogout = () => {
    // useSignup 에서 사용하는 것들을 여기서도 활용합니다.

    // 에러 정보를 저장합니다.
    const [error, setError] = useState(null);
    // 현재 서버와 통신중인 상태를 저장합니다.
    const [isPending, setIsPending] = useState(false);
    // 유저정보를 전역에서 활용할 수 있도록 dispatch 함수를 통해 업데이트합니다.
    // 여기서는 유저의 상태를 로그아웃으로 업데이트합니다.
    const { dispatch } = useAuthContext();

    // 로그아웃합니다.
    const logout = () => {
        setError(null); // 아직 에러가 없으니 null 입니다.
        setIsPending(true); // 통신중이므로 true입니다.

        signOut(appAuth).then(() => {
            // 로그아웃 성공!
            dispatch({ type: 'logout' });
            setError(null);
            setIsPending(false);
        }).catch((err) => {
            setError(err.message);
            setIsPending(false);
            console.log(err.message);
        });
    }
    return { error, isPending, logout }
}