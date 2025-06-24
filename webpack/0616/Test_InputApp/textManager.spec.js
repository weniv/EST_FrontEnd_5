describe('textManager 클래스 테스트입니다.', () => {

    const textManager = new TextManager();


    it('텍스트 값을 가져옵니다.', () => {
        const initValue = textManager.getValue();
        expect(textManager.getValue()).toBe(initValue);
    });

    it('텍스트 값을 설정합니다.', () => {
        const testValue = { data: 'hello Zebra' };
        textManager.setValue(testValue);


        expect(textManager.getValue()).toBe(testValue.data);
    });
});