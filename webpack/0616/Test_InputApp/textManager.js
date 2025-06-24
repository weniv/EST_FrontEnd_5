class TextManager {
    constructor() {
        // 전달하는 데이터를 객체로 만드는 이유는 추후에 확장성을 위해서
        this.value = { data: "Hello Lions!" };
    }

    getValue() {
        return this.value.data;
    }

    setValue(newValue) {
        this.value = newValue;
    }
}