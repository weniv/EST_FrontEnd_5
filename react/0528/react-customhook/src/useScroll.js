import { useEffect, useState } from "react";

export function useScroll() {
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            // window.innerHeight : 뷰포트의 높이
            // document.documentElement.scrollTop : 타겟요소가 상단으로부터 스크롤된 길이
            // document.documentElement.offsetHeight : 페이지의 전체 높이

            setIsBottom(window.innerHeight + document.documentElement.scrollTop + 10 >= document.documentElement.offsetHeight);

        });
    }, []);

    return isBottom
}