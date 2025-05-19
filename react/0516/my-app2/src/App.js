import Button from "./Components/Button";
import { Hello, Hi } from "./Components/Hello";
import ProductCard2 from "./Components/ProductCard";
import ProfileCard from "./Components/ProfileCard";
import { profileData } from "./data/profileData";
import { products } from "./data/productData";
import { userInfo } from "./data/userData";

function App() {
    return (
        <div>
            <h1>인기 상품</h1>
            {products.map((product) => (
                <ProductCard2 key={product.id} image={product.image} name={product.name} price={product.price} />
            ))}
            <Hello {...userInfo} />
            <Hi />
            <Button text="로그인" color="blue" size="large" onClick={() => alert("로그인 버튼 클릭!")} />
            <Button text="취소" color="red" size="small" onClick={() => alert("취소 버튼 클릭!")} />
            <Button text="취소" size="small" onClick={() => alert("취소 버튼 클릭!")} />
            <Button text="저장" color="green" disabled={true} />
            {profileData.map((profile) => (
                <ProfileCard key={profile.id} image={profile.image} name={profile.name} job={profile.job} isWorking={profile.isWorking} company={profile.company} />
            ))}
        </div>
    );
}

export default App;
