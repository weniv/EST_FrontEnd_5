import React from 'react'
import styles from './Home.module.css'
import DiaryForm from './DiaryForm'
import DiaryList from './DiaryList'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

export default function Home() {

    const { user } = useAuthContext();
    const { documents, error } = useCollection('diary', ["uid", "==", user.uid]);

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = currentDate.getDate();

    return (
        <div className={styles.container}>
            <main className={styles["diary-main"]}>
                <h2 className={styles.heart}>{`${year}.${String(month + 1).padStart(2, '0')}.${String(date).padStart(2, '0')}`}의 비밀일기</h2>
                <DiaryForm uid={user.uid}></DiaryForm>
            </main>
            <section>
                <h2 className="a11y-hidden">일기 목록</h2>
                <ul>
                    {documents && <DiaryList diaries={documents} />}
                    {error && <strong>{error}</strong>}
                </ul>
            </section>
        </div>
    )
}