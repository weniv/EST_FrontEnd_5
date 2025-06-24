describe('클릭이벤처리 및 뷰를 담당하는 함수입니다.', () => {
    //dependency injection (의존 주입) 
    it('viewManager에 textManager 인자가 잘 전달됐는지 확인합니다.', () => {

        const textManager = null;
        const btnEl = document.createElement('button');
        const viewerEl = document.createElement('strong');
        const inpTxt = document.createElement('input');

        // 인자가 전달되는지 확인하는 함수
        const actual = () => new ViewManager(textManager, { btnEl, viewerEl, inpTxt });

        // toThrowError : 매쳐함수의 하나. throw Error가 잘 작동하는지 검증합니다.
        expect(actual).toThrowError();
    })

    it('viewManager 에 요소들이 인자로 잘 전달됐는지 확인합니다.', () => {
        const textManager = new TextManager();
        const btnEl = document.createElement('button');
        const viewerEl = null;
        const inpTxt = null;

        // 인자가 전달되는지 확인하는 함수
        const actual = () => new ViewManager(textManager, { btnEl, viewerEl, inpTxt });

        // toThrowError : 매쳐함수의 하나. throw Error가 잘 작동하는지 검증합니다.
        expect(actual).toThrowError();
    })


    const textManager = new TextManager(),
        viewerEl = document.createElement('strong'),
        btnEl = document.createElement('button'),
        inpTxt = document.createElement('input'),
        viewManager = new ViewManager(textManager, { viewerEl, btnEl, inpTxt });
    // 여기까지는 클릭 이벤트 체크할때 작성. 처음부터 작성하지 않기

    it('click 이벤트가 발생했을 경우 changeValue 함수를 실행합니다.', () => {
        // 특정한 모듈의 함수를 감시합니다.
        spyOn(viewManager, 'changeValue');
        btnEl.click();
        // toHaveBeenCalled : 함수가 호출이 된적이 있는지 판별합니다.
        expect(viewManager.changeValue).toHaveBeenCalled();
    })

    it('updateView 함수를 실행합니다.', () => {
        // 특정한 모듈의 함수를 감시합니다.
        spyOn(viewManager, 'updateView');
        viewManager.changeValue();
        // toHaveBeenCalled : 함수가 호출이 된적이 있는지 판별합니다.
        expect(viewManager.updateView).toHaveBeenCalled();
    })
})