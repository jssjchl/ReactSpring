var array1 = ['one', ' two', `three`, `four`];
var array2 = ['three', ' four'];

var combinde = [array1[0], array1[1], array2[1]];

var combinde2 = array1.concat(array2);
 
var combined = [array1, array2];

const [first, two, three = `empty`, four] = array1;

console.log(array1);

// var a = array1[12] || `empty`;

// // console.log(combinde2);
// // console.log(combinde);

// //console.log(a);

// function func(){
//     var args = Array.prototype.slice.call(arguments);
//     var first = args[0];
//     var other = args.slice(1, args.length);
// }

// console.log(func(combinde));
