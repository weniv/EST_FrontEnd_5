import { useEffect, useState } from 'react';
import './productsList.css';

const ProductsList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/products');
                if (!response.ok) {
                    throw new Error('네트워크에 문제가 있습니다.');
                }
                const json = await response.json();
                console.log(json);
                setProducts(json);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);


    return (
        <div className="product-container">
            <h1>상품 목록</h1>
            <div className="product-controls">
                <select name="category" className="product-select">
                    <option value="all">전체 카테고리</option>
                    <option value="book">도서</option>
                    <option value="food">식품</option>
                    <option value="electronics">전자기기</option>
                    <option value="cloth">의류</option>
                </select>
                <label className="rating-toggle">
                    <input type="checkbox" />
                    평점순 정렬
                </label>
            </div>

            <ul className="product-list">
                <li className="product-item">
                    <div className="product-info">
                        <strong>자바스크립트 완벽가이드</strong>
                        <span>도서</span>
                    </div>
                    <div className="product-value">
                        <strong>45,000원</strong>
                        <em>★ 4.9</em>
                    </div>
                </li>
                <li className="product-item">
                    <div className="product-info">
                        <strong>자바스크립트 완벽가이드</strong>
                        <span>도서</span>
                    </div>
                    <div className="product-value">
                        <strong>45,000원</strong>
                        <em>★ 4.9</em>
                    </div>
                </li>
                <li className="product-item">
                    <div className="product-info">
                        <strong>자바스크립트 완벽가이드</strong>
                        <span>도서</span>
                    </div>
                    <div className="product-value">
                        <strong>45,000원</strong>
                        <em>★ 4.9</em>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ProductsList