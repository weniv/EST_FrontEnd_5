import "./NormalCard.css";

function NormalCard({ type }) {
    // 카드 내용 설정
    let title, image, buttonText, tagText;

    switch (type) {
        case "product":
            title = "스마트워치";
            image = "https://picsum.photos/200/150";
            buttonText = "장바구니에 추가";
            tagText = "";
            break;
        case "user":
            title = "김개발";
            image = "https://picsum.photos/100";
            buttonText = "프로필 보기";
            tagText = "프론트엔드 개발자";
            break;
        case "blog":
            title = "CSS Modules 사용하기";
            image = "https://picsum.photos/300/150";
            buttonText = "자세히 보기";
            tagText = "React";
            break;
        default:
            title = "제목";
            image = "https://via.placeholder.com/150";
            buttonText = "버튼";
            tagText = "";
    }

    return (
        <div className="card">
            <div className="image">
                <img src={image} alt={title} />
            </div>
            <div className="content">
                {tagText && <div className="tag">{tagText}</div>}
                <h3 className="title">{title}</h3>
                {type === "blog" && <p className="excerpt">React에서 CSS Modules를 활용하는 방법을 알아봅니다.</p>}
                {type === "product" && <p className="price">129,000원</p>}
                <button className="button">{buttonText}</button>
            </div>
        </div>
    );
}

export default NormalCard;
