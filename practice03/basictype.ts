//문자열 (string) 타입
const a: string = "";
const b: string = "";
const c: string = ``; //탬플릿 리터럴

let myName: string = "steve";
let message: string = `Hello, ${myName}`;

myName.toLocaleUpperCase();

message = 123;

//숫자타입 (number) 소수점포함 숫자

let n: number = 100;

n = "100"; //문자열은 numvber타입에 할당될 수 없어서 오류
n.toUpperCase();

let count: number = 10;
let price: number = 9.99;
let temperature: number = -15;
let distance: number = 3.4e-5;
//양음정수, 소수점, 지수표현 숫자 모두 number타입으로 타입지정

let total: number = count * price; //number타입으로 연산가능
let average: number = total / 2;

//typescript는 숫자타입은 특수한 값들도 포함한다
let infinity: number = Infinity;
let minusinfinity: number = infinity; //음의 무한대 값
let iAmNotANember: number = NaN;
//자바스크립트에 존재하는 모든 숫자타입은 모두 number로 타이핑을 함

//불리언타입 (boolean) 참 또는 거짓를 가지는 데이터 타입 / 조건문,로직연산.flag변수 값들을 처리할 때 사영
let isOpen: boolean = true;
let isCompleted: boolean = false;

//조건문에서 사용

if (isOpen) {
  console.log("hello we are open!");
}

if (!isCompleted) {
  console.log("job not complere");
}

//논리연산자와 사용 && || !

let isAvailable: boolean = isOpen && !isCompleted;
//isOpen - true isCompleted - false 일 때만 true 가 된다.

// null 타입 - 객체가 존재하지 않음, 값이 없음을 나타냄 - 타입스크립트에서는 명시적으로 나타낼때 사용

let user: string | null = null;

function login(userName: string) {
  user = userName;
}

function logout() {
  user = null;
}

login("Joey"); //다시 문자열의 값을 가짐 - 사용자가 로그인하면 유저변수에 할당됨
logout(); //로그아웃 하면 다시 null이 됨

//any 타입 - 모든 타입 허용 문자열, 숫자, 객체, 함수 어떠한 값의 객체도 할당가능

let someValue: any; //사용의 유연성은 제공하지만, 코드의 안정성을 위해 사용하지 않는게 바람직함

someValue.toString();
someValue = false;
someValue.toFixed();
