import { useEffect, useState, useMemo } from 'react';
import './productsList.css';

const ProductsList = () => {

    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortByRating, setSortByRating] = useState(false);

    // 카테고리 필터함수
    const filteredByCategory = useMemo(() => {

        console.log('카테고리 변경');
        if (selectedCategory === 'all') return products;

        return products.filter(product => product.category === selectedCategory);

    }, [products, selectedCategory]);


    // 평점 정렬함수
    const sortedProduct = useMemo(() => {

        console.log('정렬 수행');
        const productToSort = [...filteredByCategory];

        if (sortByRating) {
            return productToSort.sort((a, b) => b.rating - a.rating);
        }

        return productToSort
    }, [filteredByCategory, sortByRating]);


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
                <select name="category" className="product-select" onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="all">전체 카테고리</option>
                    <option value="도서">도서</option>
                    <option value="식품">식품</option>
                    <option value="전자기기">전자기기</option>
                    <option value="의류">의류</option>
                </select>
                <label className="rating-toggle">
                    <input type="checkbox" checked={sortByRating} onChange={(e) => setSortByRating(e.target.checked)} />
                    평점순 정렬
                </label>
            </div>

            <ul className="product-list">
                {sortedProduct.map(product => {
                    return <li key={product.id} className="product-item">
                        <div className="product-info">
                            <strong>{product.name}</strong>
                            <span>{product.category}</span>
                        </div>
                        <div className="product-value">
                            <strong>{product.price.toLocaleString('ko-kr')}원</strong>
                            <em>★ {product.rating}</em>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ProductsList