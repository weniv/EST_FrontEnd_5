// BlogCard.jsx
import React from "react";
import styles from "./BlogCard.module.css";

function BlogCard() {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src="https://picsum.photos/300/150" alt="Blog Cover" />
            </div>
            <div className={styles.content}>
                <div className={styles.tag}>React</div>
                <h3 className={styles.title}>CSS Modules 사용하기</h3>
                <p className={styles.excerpt}>React에서 CSS Modules를 활용하는 방법을 알아봅니다.</p>
                <button className={styles.button}>자세히 보기</button>
            </div>
        </div>
    );
}

export default BlogCard;
