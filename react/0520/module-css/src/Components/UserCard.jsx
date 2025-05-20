// UserCard.jsx
import React from "react";
import styles from "./UserCard.module.css";

function UserCard() {
    return (
        <div className={styles.card}>
            <div className={styles.avatar}>
                <img src="https://picsum.photos/100/100" alt="User Avatar" />
            </div>
            <h3 className={styles.title}>김개발</h3>
            <p className={styles.role}>프론트엔드 개발자</p>
            <button className={styles.button}>프로필 보기</button>
        </div>
    );
}

export default UserCard;
