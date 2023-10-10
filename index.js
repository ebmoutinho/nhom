//log from the package then it is FIRST loaded. This only runs ONCE
console.log("Nhom first log!");


//functions what are available inside the package
const sayHello = () => {
	console.log("Hello");
};

const logDescription = () => {
	console.log("Nhom is a library for reusable components!");
};

//export of those functions
module.exports = {
	sayHello,
	logDescription,
};
