import { use, Suspense, useState } from 'react';

// 가짜 API 함수 (실제 동작)
function fetchUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = {
                1: { id: 1, name: '김철수', age: 25, job: '개발자' },
                2: { id: 2, name: '이영희', age: 30, job: '디자이너' },
                3: { id: 3, name: '박민수', age: 28, job: '기획자' }
            };
            resolve(users[userId] || { id: userId, name: '알 수 없음', age: 0, job: '없음' });
        }, 1000); // 1초 지연
    });
}

// 사용자 프로필 컴포넌트
function UserProfile({ userPromise }) {
    // use 훅으로 Promise 처리
    const user = use(userPromise);

    // const [user, setUser] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     userPromise.then((userData) => {
    //         setUser(userData);
    //         setIsPending(false);

    //     })
    //         .catch((err) => {
    //             setError(err);
    //         })
    // }, [userPromise])
    return (
        <div>
            <h3>👤 사용자 정보</h3>
            <p><strong>이름:</strong> {user.name}</p>
            <p><strong>나이:</strong> {user.age}세</p>
            <p><strong>직업:</strong> {user.job}</p>
        </div>
    );
}

// 메인 앱 컴포넌트
function App() {
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [userPromise, setUserPromise] = useState(null);

    const handleUserSelect = (userId) => {
        setSelectedUserId(userId);
        // Promise 생성
        setUserPromise(fetchUser(userId));
    };

    const handleReset = () => {
        setSelectedUserId(null);
        setUserPromise(null);
    };

    return (
        <div>
            <h2>🔥 React use 훅 데모</h2>

            {/* 사용자 선택 버튼들 */}
            <div>
                <h3>사용자를 선택하세요:</h3>
                <button onClick={() => handleUserSelect(1)}>
                    김철수 (ID: 1)
                </button>
                <button onClick={() => handleUserSelect(2)}>
                    이영희 (ID: 2)
                </button>
                <button onClick={() => handleUserSelect(3)}>
                    박민수 (ID: 3)
                </button>
                <button onClick={handleReset}>
                    초기화
                </button>
            </div>

            {/* 선택된 사용자 ID 표시 */}
            <div>
                <p>선택된 사용자 ID: {selectedUserId || '없음'}</p>
            </div>

            {/* 사용자 프로필 표시 */}
            {userPromise ? (
                <Suspense fallback={<div>⏳ 사용자 정보 로딩 중...</div>}>
                    <UserProfile userPromise={userPromise} />
                </Suspense>
            ) : (
                <div>
                    <p>👆 위에서 사용자를 선택해주세요!</p>
                </div>
            )}
        </div>
    );
}

export default App;