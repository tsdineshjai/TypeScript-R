// types

type Footballer = {
	position: string,
	club: string,
	age?: number,
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
