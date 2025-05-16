import { useState } from "react";
import "./ProfileCard.css";

export default function ProfileCard({ image, name, job, isWorking, company }) {
    // let like = 0;
    const [like, setLike] = useState(0);

    // const useState = useState(0);
    // const like = useState[0];
    // const setLike = useState[1];

    // function clickLike() {
    //     like += 1;
    //     console.log(like);
    // }

    function clickLike() {
        setLike(like + 1);
    }
    return (
        <div className="profile-card">
            <img src={image} alt={`${name}의 프로필 사진`} />
            <h2>{name}</h2>
            <p>{job}</p>
            <p>{isWorking ? "재직중" : "구직중"}</p>
            {isWorking && <p>{company}에서 일하는 중입니다!</p>}
            <button onClick={clickLike}>좋아요 {like}</button>
        </div>
    );
}
