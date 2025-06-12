import { useState } from 'react'
import { appAuth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {

    // 에러 정보를 저장합니다.
    const [error, setError] = useState(null);
    // 현재 서버와 통신중인 상태를 저장합니다.
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    // signup 훅을 만듭니다. email, password, displayName 세가지 매개변수를 갖습니다.
    const signup = (email, password, displayName) => {
        setError(null); // 아직 에러가 없으니 null 입니다.
        setIsPending(true); // 통신중이므로 true입니다.


        // 비밀번호 설정으로 유저 정보를 등록합니다. import 받아야합니다.
        createUserWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                // 회원 정보를 정상적으로 받지 못하면 실패입니다.
                if (!user) {
                    throw new Error('회원가입에 실패했습니다.');
                }

                // 회원가입이 완료되고 유저 정보에 닉네임을 업데이트합니다. import 받아야합니다.
                updateProfile(appAuth.currentUser, { displayName })
                    .then(() => {
                        dispatch({ type: 'login', payload: user });
                        setError(null);
                        setIsPending(false);
                    }).catch((err) => {
                        setError(err.message);
                        setIsPending(false)
                        console.log(err.message);
                    });
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
                console.log(err.message);
            });
    }

    return { error, isPending, signup }
}