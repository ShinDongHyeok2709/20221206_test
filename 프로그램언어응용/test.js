//userList 안의 객체들 중 age 프로퍼티의 값이 30이상인 객체의 이름만 result 배열에 담기

//배열의 고차함수들을 이용 > 필터링과 데이터 변형

let userList = [
  { name: "Minsu", age: 20 },
  { name: "Seok", age: 30 },
  { name: "Yeji", age: 23 },
  { name: "Minseok", age: 43 },
];

userList.map((item, index) => {
  if (index >= 30) {
    console.log(item);
  }
});

let result = userList.filter;
for (let i = 0; i > 30; i++) console.log(userList);
