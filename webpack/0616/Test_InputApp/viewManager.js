class ViewManager {
    constructor(textManager, options) {
        if (textManager.constructor !== TextManager) {
            // throw 사용자 정의 예외를 만들고 프로그램을 종료합니다.
            throw Error('textManager 객체가 전달되지 않았습니다.');
        }

        // 세 값중 false 가 하나라도 존재하면 에러 처리
        if (!options.btnEl || !options.viewerEl || !options.inpTxt) {
            // throw 사용자 정의 예외를 만들고 프로그램을 종료합니다.
            throw Error('전달 받는 요소중에 빈값이 존재합니다.');
        }

        this.inpTxt = options.inpTxt;
        this.viewerEl = options.viewerEl;
        this.textManager = textManager;

        options.btnEl.addEventListener('click', () => {
            this.changeValue();
        })
    }

    changeValue() {
        this.textManager.setValue({ data: this.inpTxt.value })
        this.updateView();
    }

    updateView() {
        this.viewerEl.textContent = this.textManager.getValue();
    }
}