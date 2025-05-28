const option = {
    root: null,
    threshold: 1
}

const callback = (entries) => {
    entries.forEach((entry) => {
        // entry.isintersecting
        // entry.intersectionRatio
    })
}

const observer = new IntersectionObserver(callback, option);

// 관찰 시작
// observer.observe(target);

// 옵저버 관찰 중지
// observer.unobserve(target);

// 모든 옵저버 관찰 중지
observer.disconnect();