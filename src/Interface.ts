interface Human {
    name: string;
    age: number;
    gender?: string;
}

const person = {
    name: "song",
    age: 20
}

const sayHi = (person: Human):void => {
    console.log(`HaHa, My name is ${person.name}. i'm ${person.age}, and i'am a ${person.gender? person.gender : "woman"}!`);
}

sayHi(person);
export {};
//typescript 법칙! export : 해당 파일은 모듈이다 라고 선언!