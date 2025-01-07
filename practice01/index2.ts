//type annotation
let message: string = "Hi Typescript";

console.log(message);

function add(x: number, y: number): number {
  return x + y;
}

add(10, 50);

//compile 과정에서 type주석은 모두 제거 된다

interface User {
  name: string;
  age: number;
}

const user = { name: "John", age: 30 };

//interface정의는 제거되고 객체리터럴만 남음
