
var value, a, h;

function getTriangleArea ( a, h ) {
	
	if ( a > 0 && h > 0) {
		value = a*h/2;
		return value;
	}
	
	else {
		return console.log('Podano nieprawidłowe dane!');
	}
}

var triangle1Area = getTriangleArea(5, 10);
var triangle2Area = getTriangleArea(10, 15);
var triangle3Area = getTriangleArea(2, 10);

console.log('Pole pierwszego trójkąta to: ' +triangle1Area);	
console.log('Pole drugiego trójkąta to: ' +triangle2Area);	
console.log('Pole trzeciego trójkąta to: ' +triangle3Area);	