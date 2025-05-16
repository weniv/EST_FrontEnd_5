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

// function ProductCard1(props) {
//     return (
//         <div className="product">
//             <img src={props.image} alt={props.name} />
//             <h2>{props.name}</h2>
//             <p>가격: {props.price}원</p>
//             <button>장바구니에 담기</button>
//         </div>
//     );
// }

// 구조분해할당
// function ProductCard2({ image, name, price }) {
//     return (
//         <div className="product">
//             <img src={image} alt={name} />
//             <h2>{name}</h2>
//             <p>가격: {price}원</p>
//             <button>장바구니에 담기</button>
//         </div>
//     );
// }

function Hello({ name, age }) {
    return (
        <div>
            <h1>안녕하세요, {name}님!</h1>
            <p>당신의 나이는 {age}세입니다.</p>
        </div>
    );
}

function HelloProps(props) {
    return (
        <div>
            <p>
                my name is {props.name} and age is {props.age}
            </p>
            <strong>you are {props.someFunc()}</strong>
            <p>this is someArr {[...props.someArr]}</p>
            <p>this is someObj {props.someObj.one}</p>
            {props.someJSX}
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>인기 상품</h1>
            {products.map((product) => (
                <ProductCard2 key={product.id} image={product.image} name={product.name} price={product.price} />
            ))}
            <Hello {...userInfo} />
            <HelloProps name="jaehyun" age={25} someFunc={() => "awesome!!!"} someJSX={<img src="https://picsum.photos/id/237/200/300" />} someArr={[1, 2, 3]} someObj={{ one: 1 }} />
        </div>
    );
}

// function App() {
//   return (
//     <div>
//       <h1>인기 상품</h1>
//       <div className="product">
//         <img src="product1.jpg" alt="상품1" />
//         <h2>캣타워</h2>
//         <p>가격: 50,000원</p>
//         <button>장바구니에 담기</button>
//       </div>
//       <div className="product">
//         <img src="product2.jpg" alt="상품2" />
//         <h2>고양이 간식</h2>
//         <p>가격: 15,000원</p>
//         <button>장바구니에 담기</button>
//       </div>
//       <div className="product">
//         <img src="product3.jpg" alt="상품3" />
//         <h2>장난감 쥐</h2>
//         <p>가격: 10,000원</p>
//         <button>장바구니에 담기</button>
//       </div>
//     </div>
//   );
// }

export default App;
