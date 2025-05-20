// ProductCard.jsx
import React from "react";
import styles from "./ProductCard.module.css";

function ProductCard() {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src="https://picsum.photos/300/200" alt="Product" />
            </div>
            <h3 className={styles.title}>스마트워치</h3>
            <p className={styles.price}>129,000원</p>
            <button className={styles.button}>장바구니에 추가</button>
        </div>
    );
}

export default ProductCard;
