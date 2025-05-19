import { useState } from "react";

export default function Login({ userInfo, setIsLogin }) {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLoginInput = (e) => {
        setId(e.target.value);
    };

    const handlePasswordInput = (e) => {
        setPw(e.target.value);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        if (id && pw) {
            if (id === userInfo.idUser && Number(pw) === userInfo.pwUser) {
                setIsLogin(true);
                // console.log("로그인 완료");
            } else {
                setErrorMessage("로그인에 실패하였습니다!");
            }
        } else {
            alert("아이디와 비밀번호를 입력해주세요.");
        }
    };
    return (
        <form onSubmit={handleLoginSubmit}>
            <label>
                아이디: <input type="text" onChange={handleLoginInput} value={id} />
            </label>
            <label>
                비밀번호: <input type="password" onChange={handlePasswordInput} value={pw} />
            </label>
            <button type="submit">로그인</button>
            {errorMessage && <p>{errorMessage}</p>}
        </form>
    );
}
