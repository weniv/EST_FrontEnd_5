import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext();

const CartProvider = ({ children }) => {
    // 카트의 상태값
    const [cart, setCart] = useState([]);

    // 카트에 테이터 추가하기
    const addToCart = (product) => {

        setCart((prevCart) => {

            // 카트에 이미 상품이 있는지 확인
            const existing = prevCart.find((item) => {
                return item.id === product.id
            })
            // prevCart.includes()

            // 카트에 이미 상품이 존재한다면 해당 상품을 배열에서 찾아서 수량을 증가시킵니다.
            if (existing) {
                return prevCart.map((item) => item.id === product.id ? { ...item, count: item.count + 1 } : item)
            }

            return [...prevCart, { ...product, count: 1 }]
        })
    }

    console.log(cart);

    // 카트에서 제거하기
    const removeFromCart = (productId) => {
        setCart((prevCart) =>
            prevCart.filter((item) => item.id !== productId)
        )
    }
    // 카트 상품의 총합
    const getCartTotal = () => {
        return cart.reduce((total, item) => total + item.count, 0)
    }


    // 프로바이더 컴포넌트 생성. 컨텍스트 초기화
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartTotal }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

const Header = () => {
    const { getCartTotal } = useCart();
    return (
        <header>
            <h1>쇼핑몰</h1>
            <p>카트에 있는 상품의 개수: {getCartTotal()}</p>
        </header>
    )
}

const ProductList = () => {
    const products = [
        { id: 1, name: "노트북", price: 1000 },
        { id: 2, name: "스마트폰", price: 500 },
        { id: 3, name: "태블릿", price: 300 },
    ];

    const { addToCart } = useCart();

    return (
        <section>
            <h2>상품 목록</h2>
            <ul>
                {
                    products.map((product) =>
                        <li key={product.id}>
                            {product.name} - ₩{product.price}
                            <button onClick={() => addToCart(product)}>장바구니에 추가</button>
                        </li>
                    )
                }
            </ul>
        </section>
    )
}

const Cart = () => {

    const { cart, removeFromCart } = useCart();

    return (
        <section>
            <h2>장바구니</h2>
            <p>장바구니가 비어있습니다.</p>
            <ul>
                {cart.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.name} - 수량: {item.count}
                            <button onClick={() => removeFromCart(item.id)}>제거</button>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}


export default function Shop() {
    return (
        <>
            <CartProvider>
                <Header />
                <ProductList />
                <Cart />
            </CartProvider>
        </>
    )
}
