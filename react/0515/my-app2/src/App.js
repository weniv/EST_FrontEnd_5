import { Hello } from "../src/Components/Hello";
import ProductCard2 from "./Components/ProductCard";

const products = [
    { id: 1, image: "product1.jpg", name: "캣타워", price: "50,000" },
    { id: 2, image: "product2.jpg", name: "고양이 간식", price: "15,000" },
    { id: 3, image: "product3.jpg", name: "장난감 쥐", price: "10,000" },
];

const userInfo = {
    name: "zeezee",
    age: 10,
};

function App() {
    return (
        <div>
            <h1>인기 상품</h1>
            {products.map((product) => (
                <ProductCard2 key={product.id} image={product.image} name={product.name} price={product.price} />
            ))}
            <Hello {...userInfo} />
        </div>
    );
}

export default App;
