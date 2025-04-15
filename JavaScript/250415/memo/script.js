// 제목, 내용을 작성할 수 있는 메모
// 1. 로컬 스토리지를 이용해서 새로고침 데이터 유지
// 2. 메모 삭제하는 기능도 포함

const memoForm = document.getElementById("memo-form");
const titleInput = document.getElementById("title-input");
const contentInput = document.getElementById("content-input");
const memoList = document.getElementById("memo-list");

let memoData = [];
const MEMO_KEY = "memo";

// 1. 페이지가 로드되었을 때, 로컬 스토리지에 저장된 정보 가져오기, 화면 출력
function loadMemoStorage() {
  const stored = localStorage.getItem(MEMO_KEY);
  if (stored) {
    memoData = JSON.parse(stored);
  }
  renderMemo();
}
loadMemoStorage();

function renderMemo() {
  memoList.innerHTML = "";

  if (memoData.length === 0) {
    memoList.innerHTML = `<li>작성된 메모가 없습니다.</li>`;
    return;
  }

  memoData.forEach((memo, index) => {
    const memoItem = document.createElement("li");
    memoItem.innerHTML = `
    <h3>${memo.title}</h3>
    <p>${memo.content}</p>
    <button class="delete-button">삭제</button>
    `;

    memoItem
      .querySelector(".delete-button")
      .addEventListener("click", () => deleteMemo(index));
    // TODO: 삭제하기 이벤트 등록
    memoList.appendChild(memoItem);
  });
}

// 2. 메모가 추가될 때, 로컬 스토리지를 갱신, 화면 출력
function saveMemoStorage() {
  localStorage.setItem(MEMO_KEY, JSON.stringify(memoData));
}
memoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  if (!title) {
    alert("제목이 필요합니다!");
    return;
  }
  memoData.unshift({
    title: title,
    content: content,
  });
  saveMemoStorage();
  titleInput.value = "";
  contentInput.value = "";
  renderMemo();
});

// 3. 메모가 삭제될 때, 로컬 스토리지를 갱신, 화면 출력
function deleteMemo(index) {
  memoData.splice(index, 1); // 해당 인덱스 요소 제거
  saveMemoStorage();
  renderMemo();
}
