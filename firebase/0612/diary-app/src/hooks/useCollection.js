import { appFireStore } from "../firebase/config"
import { useEffect, useState } from "react"
import { onSnapshot, collection, query, where, orderBy } from "firebase/firestore";

export const useCollection = (transaction, myQuery) => {

    // 문서들의 데이터를 관리합니다.
    const [documents, setDocuments] = useState(null);
    // 에러 상태를 관리합니다.
    const [error, setError] = useState(null);


    useEffect(() => {

        // onSnapshot 함수는 가장 최신의 컬랙션의 내용을 반환하는 함수입니다. 함수는 데이터 수신을 중단하기 위한 unsubscribe 함수를 반환합니다. 더 이상 데이터를 수신 대기할 필요가 없을때 사용합니다.
        let q;

        if (myQuery) {
            // 전개구문을 이용해 where("uid", "==", "user.uid") 을 작성하게 합니다.
            q = query(collection(appFireStore, transaction), where(...myQuery), orderBy("createTime", "desc"));
            // 오름차순은 ASC
        }

        const unsubscribe = onSnapshot(myQuery ? q : collection(appFireStore, transaction),

            // 응답받은 컬랙션이 snapshot에 저장됩니다.
            (snapshot) => {
                let result = [];

                // docs 는 문서를 배열로 저장하고 있습니다.
                snapshot.docs.forEach((doc) => {

                    // 전개구문을 이용해 문서의 데이터를 가져오는 data()함수의 반환값을 객체에 나열합니다. 그리고 나중에 사용할 수 있도록 문서 id 값을 추가합니다.
                    result.push({ ...doc.data(), id: doc.id });
                });

                console.log(result);

                setDocuments(result);
                setError(null);
            },
            (error) => {
                setError(error.message);
                console.error(error);
            });

        // useEffect 훅의 return 값에 함수를 반환하면 clean-up 함수가 됩니다. 외부에서 데이터를 구독하는 경우 clean-up 함수는 useEffect훅을 사용하는 컴포넌트가 마운트 해제될때 실행되어 구독을 종료하게 됩니다.
        // 참고 : https://ko.reactjs.org/docs/hooks-effect.html#example-using-hooks-1

        return () => {
            unsubscribe();
        };
    }, [])



    return { documents, error }
}