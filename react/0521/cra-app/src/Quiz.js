import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function Quiz() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="product/2">상품정보</Link></li>
                    <li><Link to="product/2/notice">상품공지사항</Link></li>
                    <li><Link to="cart">장바구니</Link></li>
                    <li><Link to="users">사용자</Link></li>
                    <li><Link to="users/coupon">사용자쿠폰</Link></li>
                    <li><Link to="users/question">사용자문의</Link></li>
                    <li><Link to="users/notice">사용자공지사항</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/products/:id" element={<ProductDetail />}></Route>
                <Route path="/products/:id/notice" element={<ProductDetailNotice />}></Route>
                <Route path="cart" element={<Cart />}></Route>
                <Route path="users" element={<UserPage />}>
                    <Route index element={<UserCoupon />}></Route>
                    <Route path="question" element={<UserQuestion />}></Route>
                    <Route path="notice" element={<UserNotice />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Quiz