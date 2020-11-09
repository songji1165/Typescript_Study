"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const person = new Human("Song", 20);
const sayHi = (person) => {
    console.log(`HaHa, My name is ${person.name}. i'm ${person.age}, and i'am a ${person.gender ? person.gender : "woman"}!`);
};
sayHi(person);
//typescript 법칙! export : 해당 파일은 모듈이다 라고 선언!
//# sourceMappingURL=Class.js.map