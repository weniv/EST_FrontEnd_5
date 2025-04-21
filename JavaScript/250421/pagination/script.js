const REST_API_KEY = "e50ce7c839747bde72a0c2260b78b6d8";
const BOOK_URL = "https://dapi.kakao.com/v3/search/book";

// page
let currentPage = 1;
let totalPages = 1;
let currentQuery = "";

const $bookList = document.getElementById("book-list");
const $pagination = document.getElementById("pagination");
const $searchForm = document.getElementById("search-form");

async function searchBook(page = 1) {
  const query = document.getElementById("search-input").value;

  if (query.trim() === "") return;

  if (page === 1) {
    currentQuery = query;
  }

  try {
    const response = await fetch(
      `${BOOK_URL}?query=${encodeURIComponent(
        currentQuery
      )}&page=${page}&size=10`,
      {
        headers: {
          Authorization: `KakaoAK ${REST_API_KEY}`,
        },
      }
    );
    if (!response.ok) throw new Error("HTTP 응답 오류");

    const data = await response.json();
    if (data.documents.length === 0) {
      $bookList.innerHTML = `<li>검색 결과가 없습니다.</li>`;
      $pagination.innerHTML = "";
      return;
    }
    // 책 검사 결과
    $bookList.innerHTML = "";
    renderBook(data.documents);
    window.scrollTo({ top: 0, behavior: "smooth" });

    // pagination
    totalPages = Math.min(50, Math.ceil(data.meta.pageable_count / 10));
    currentPage = page;
    renderPagination();
  } catch (error) {
    console.error("검색 실패:", error.message);
    $bookList.innerHTML = `<li>검색 중 오류가 발생했습니다.</li>`;
  }
}

$searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchBook(1);
});

function renderBook(bookList) {
  bookList.forEach((book) => {
    const $bookItem = document.createElement("li");
    $bookItem.className = "book-item";

    $bookItem.innerHTML = `
    <h3>${book.title}</h3>
    <img src="${book.thumbnail}" alt=""/>
    <p> 저자: ${book.authors.join(", ")}</p>
    `;
    $bookList.appendChild($bookItem);
  });
}

function renderPagination() {
  // currentPage, totalPage
  // 최대 5개씩 보여줌
  // 이전, 다음 버튼 -> 이전페이지, 다음페이지

  $pagination.innerHTML = "";

  if (currentPage > 1) {
    const $prevBtn = document.createElement("button");
    $prevBtn.innerText = "이전";
    $prevBtn.addEventListener("click", () => searchBook(currentPage - 1));
    $pagination.appendChild($prevBtn);
  }

  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);

  for (let i = startPage; i <= endPage; i++) {
    const $pageBtn = document.createElement("button");
    $pageBtn.innerText = i;
    $pageBtn.className = currentPage === i ? "active" : "";
    $pageBtn.addEventListener("click", () => {
      searchBook(i);
    });
    $pagination.appendChild($pageBtn);
  }

  if (currentPage < totalPages) {
    const $nextBtn = document.createElement("button");
    $nextBtn.innerText = "다음";
    $nextBtn.addEventListener("click", () => {
      searchBook(currentPage + 1);
    });
    $pagination.appendChild($nextBtn);
  }
}
