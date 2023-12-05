// types

type Footballer = {
	position: string;
	club: string;
	age?: number;
};
//you can mentiion optional proper by appending "?" at the end of the property

const arsenalWinger: Footballer = {
	position: "rw",
	club: "arsenal",
};

//interfaces
/* interfaces are almost similar to type expect there is a syntax difference -
it doesnt have a equal to sign
*/

interface AlphaMale {
	multiskills: boolean;
	highConfidence: boolean;
	faceAnyChallenge: boolean;
	noWoWeakness: boolean;
}

const jai: AlphaMale = {
	multiskills: true,
	highConfidence: true,
	faceAnyChallenge: true,
	noWoWeakness: true,
};

//arrays, array of strings, array of mixed

const arr: string[] = [
	"everydayTargetcompletin",
	"10hourChallenge",
	"highFocus",
	"moreLearning",
];

//union type : its means it will be mix of both data types
const mixedArr: (string | number | boolean)[] = ["success", 33, true];

//Using Functions
function sum(a: number, b: number) {
	return a + b;
}

/* class Implementations  */

interface Footballer {
	name: string;
	age: number;
	play(skill: string): string;
}

class Saka implements Footballer {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
	play(skills: string) {
		return `${skills}`;
	}
}

/* additional class Definitons using TS */

class Something {
	public dataset: string[];

	constructor() {
		this.dataset = [];
	}

	public get getDataArr(): string[] {
		return this.dataset;
	}

	public set setValArr(input: string[]) {
		if (Array.isArray(input) && input.every((ele) => typeof ele === "string")) {
			this.dataset = input;
			return;
		}
	}
}

// const footballerDetails = new Something();

// footballerDetails.dataset = ["eni", "amit"];
// console.log(footballerDetails.getDataArr);
// footballerDetails.dataset = ["markdon", "alpha", "sigma"];

// console.log(footballerDetails.getDataArr);
