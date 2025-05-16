import Counter from "./Components/Counter";
import ProfileCard from "./Components/ProfileCard";

function App() {
    return (
        <div>
            <ProfileCard
                image="https://previews.123rf.com/images/mazikab/mazikab1312/mazikab131200012/26053008-%EA%B2%80%EC%9D%80-%ED%86%A0%EB%81%BC%EB%8A%94-%EC%A0%95%EC%9B%90%EC%97%90%EC%84%9C-%EB%A8%B9%EC%9D%B4%EC%9E%85%EB%8B%88%EB%8B%A4.jpg"
                name="로지"
                job="프론트엔드 개발자"
                isWorking={true}
                company="위니브"
            />
            <Counter />
        </div>
    );
}

export default App;
