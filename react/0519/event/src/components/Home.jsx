export default function Home({ setIsLogin }) {
    return (
        <>
            <h2>홈 화면입니다!</h2>
            <button onClick={() => setIsLogin(false)}>로그아웃</button>
        </>
    );
}
