import React from 'react'
import styles from './Home.module.css'
import iconEdit from '../../img/icon-edit.svg'
import iconDelete from '../../img/icon-delete.svg'
import { useFirestore } from '../../hooks/useFirestore'

export default function DiaryList({ diaries }) {

    const { deleteDocument } = useFirestore('diary');

    function formattingTime(seconds) {
        const time = new Date(seconds * 1000);
        console.log(time);
        const year = time.getFullYear();
        const month = time.getMonth();
        const date = time.getDate();
        const day = time.getDay();

        const daysOfWeek = ['SUN', 'MON', 'TUE', "WED", 'THU', 'FRI', 'SAT'];

        return `${year}.${String(month + 1).padStart(2, '0')}.${String(date).padStart(2, '0')}.${daysOfWeek[day]}`
    }


    return (
        <>
            {
                diaries.map((item) => {

                    return (
                        <li key={item.id}>
                            <article className={styles["diary-article"]}>
                                <h3 className={styles["article-title"]}>{item.title}</h3>
                                <time className={styles["article-time"]} dateTime={formattingTime(item.createTime.seconds).replaceAll('.', '-').slice(0, -4)}>{formattingTime(item.createTime.seconds)}</time>
                                <p className={styles["article-content"]}>{item.text}</p>

                                <div className={styles["button-group"]}>
                                    <button type="button">
                                        <img src={iconEdit} alt="수정" />
                                    </button>
                                    <span></span>
                                    <button type="button" onClick={() => deleteDocument(item.id)}>
                                        <img src={iconDelete} alt="삭제" />
                                    </button>
                                </div>
                            </article>
                        </li>
                    )
                })
            }
        </>
    )
}