function createElement(tag, props, ...children) {

    if (typeof tag === 'function') {
        // return tag(props, ...children);
        // 인자를 apply 통하여 1:1로 매칭해주는 역할을 합니다.
        return tag.apply(null, [props, ...children]);

    }

    return { tag, props, children }
}

function renderDom(vDom) {

    // 마지막 자식이 문자열일 경우
    if (typeof vDom === 'string') {
        return document.createTextNode(vDom);
    }

    const el = document.createElement(vDom.tag)

    // renderDom 함수를 재귀형 구조로 만들어서 가상돔 안에 계층화되어 있는 자식 요소들을 꺼내줍니다.
    vDom.children.map((element) =>
        renderDom(element)
    ).forEach((realEl) => {
        el.append(realEl);
    });

    return el
}

function render(element, container) {
    container.append(renderDom(element));
}

export { createElement, render }