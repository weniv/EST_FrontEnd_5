import React, { useState, useActionState } from 'react'

export default function LoginComponent() {

    const [state, formAction, isPending] = useActionState(

        // const [userName, setUserId] = useState('');
        // const [password, setPassword] = useState('');

        async (previousState, formData) => {

            const userName = formData.get('userName');
            const password = formData.get('password');

            // e.preventDefault();
            if (!userName || !password) {
                alert('아이디와 비밀번호를 모두 입력해주세요!');
            }

            try {
                const response = await fetch('http://localhost:3001/login', {
                    method: 'POST',
                    body: JSON.stringify({
                        userName,
                        password
                    }),
                    headers: { 'Content-Type': 'application/json' }
                });

                const result = await response.json();

                if (response.ok) {
                    alert(`로그인 성공! ${result.user.userName}님 환영합니다~!!`);
                    return {
                        success: result.success,
                        message: result.message,
                        user: result.user
                    }

                } else {
                    alert(`로그인에 실패했습니다!! ${result.message}`);
                    return {
                        success: result.success,
                        message: result.message,
                        user: result.user
                    }
                }

            } catch (error) {
                console.error(error);
            }
        }

    );

    // const handleReset = () => {
    //     setUserId('');
    //     setPassword('');
    // }


    return (
        <div>
            <h2>로그인</h2>
            <form action={formAction}>
                <label>
                    아이디:
                    <input type="text" name='userName' />
                </label>
                <label>
                    비밀번호:
                    <input type="password" name='password' />
                </label>
                <div>
                    <button type='submit' disabled={isPending}>{!isPending ? '로그인' : '잠시만 기다려 주세요...'}</button>
                    <button type='reset'>초기화</button>
                </div>
            </form>
        </div>
    )
}
