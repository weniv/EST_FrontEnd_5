// Set
// ES6에 추가된 컬렉션 객체
// 배열과 유사, 중복되는 값이 존재하지 않는 집합

// Set 생성
const set1 = new Set();
console.log(set1);

const set2 = new Set([1, 2, 3, 4, 5]);
console.log(set2);

const set3 = new Set([1, 1, 1, 1, 1, 2, 3]);
console.log(set3);

// 초기값으로 가능한 값: 배열, 문자열, Map, Set
const stringSet = new Set("Hello World");
console.log(stringSet);

// Set에 값 추가
const mySet = new Set();
mySet.add(1); // 중복되는 값은 추가되지 않음
mySet.add(6);
mySet.add(7);

mySet.add("hello");
mySet.add(true);
mySet.add([1, 2, 3]);
// set은 add를 통해서 다양한 타입의 값을 추가할 수 있다.

// set 크기 확인하기
console.log("mySet", mySet.size); // 6

// 인덱스 사용 불가 -> 배열로 변환해서 사용
// 값을 포함하는지 여부 반환
console.log(mySet.has("hello")); // true
console.log(mySet.has(10)); // false

// set 값을 삭제
mySet.delete("hello");
mySet.delete(7);

// set 모든 값을 삭제
// mySet.clear();

// set의 값 순회
// for of, forEach
console.log("---- for of ----");
for (const element of mySet) {
  console.log(element);
}
console.log("//---- for of ----");

// forEach
console.log("---- forEach ----");
mySet.forEach((value, value2, set) => {
  // value와 value2는 동일한 값
  console.log(value, value2);
});
console.log("//---- forEach ----");
console.log("mySet", mySet);

// 배열 -> set
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7];
const setFromArr = new Set(arr);
console.log(setFromArr);

// set -> 배열
const arrFromSet = Array.from(mySet);
console.log(arrFromSet);

console.log("전개연사자", [...mySet]);

// 배열의 중복 요소를 제거한 배열
// 배열 -> set -> 배열
const duplicate = [1, 1, 1, 2, 2, 2, 3, 3, 3];
const unique = [...new Set(duplicate)];
console.log("중복이 제거된 배열:", unique);

// set을 이용한 집합 연산
const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([3, 4, 5, 6, 7]);
console.log(setA);
console.log(setB);

// 합집합
const unionSet = new Set([...setA, ...setB]);
[1, 2, 3, 4, 5, 3, 4, 5, 6, 7];
console.log(unionSet);

// 교집합
// console.log([...setA].filter((el) => setB.has(el)));
const intersectionSet = new Set([...setA].filter((el) => setB.has(el)));
console.log(intersectionSet);

// 차집합 (setA - setB)
// setA에는 있지만 setB에는 없는 요소
const diffAB = new Set([...setA].filter((el) => !setB.has(el)));
console.log(diffAB);

// setB에는 있지만 setA에는 없는 요소
const diffBA = new Set([...setB].filter((el) => !setA.has(el)));
console.log(diffBA);

// [실습] 회사 게시판에 글을 작성한 작성자 데이터를 뽑은 배열
const 회사게시판 = ["라이캣", "라이캣", "라이캣", "빙키", "소울곰", "뮤라"];

// 1. 몇 명이 게시판에 게시글을 작성을 했는지?
const set = new Set(회사게시판);
console.log(set.size);

// 2. 각각 몇 개의 게시글을 작성했는지
// 2-1. 비어있는 map
// 2-2 회사게시판 배열을 순회 -> map의 값을 업데이트
const map = new Map();
for (const element of 회사게시판) {
  // map.has(element) -> 1로 설정
  // map.get(element) + 1
  map.set(element, (map.get(element) || 0) + 1);
}
console.log(map);

// ["라이캣", "라이캣", "라이캣", "빙키", "소울곰", "뮤라"];
// map.set("라이캣", (map.get("라이캣") || 0) + 1); // map.set('라이캣', 1)
// map.set("라이캣", (map.get("라이캣") || 0) + 1); // map.set('라이캣', 2)
// map.set("라이캣", (map.get("라이캣") || 0) + 1); // map.set('라이캣', 3)
// map.set("빙키", (map.get("빙키") || 0) + 1); // map.set('빙키', 1);
