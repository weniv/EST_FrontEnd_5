function ProductCard2({ image, name, price }) {
    return (
        <div className="product">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>가격: {price}원</p>
            <button>장바구니에 담기</button>
        </div>
    );
}

export default ProductCard2;
