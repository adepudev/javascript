// function add(num1, num2) {
//     var result = num1 + num2;
//     console.log(result);
// }
// function mul(num1, num2) {
//     var result = num1 * num2;
//     console.log(result);
// }
// function div(num1, num2) {
//     var result = num1 / num2;
//     console.log(result);
// }
// function sub(num1, num2) {
//     var result = num1 - num2;
//     console.log(result);
// }

// switch (1) {
//     case 1:
//         add(10,20);
//         break;
//     case 2:
//         mul(10, 20);
//         break;
//     case 3:
//         div(10, 20);
//         break;
//     case 4:
//         sub(10, 20);
//         break;
//         default:
//             console.log("please enter  correct option");


// }//static way

//Dynamic output

function add(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}
function mul(num1, num2) {
    var result = num1 * num2;
    console.log(result);
}
function div(num1, num2) {
    var result = num1 / num2;
    console.log(result);
}
function sub(num1, num2) {
    var result = num1 - num2;
    console.log(result);
}
var Option = Number(prompt("1.Add,2.Mul 3.Div 4.Sub"));
var num1 = Number(prompt("Enter N1 value : "));
var num2 = Number(prompt("Enter N2 value : "));

switch (Option) {
    case 1:
        add(num1, num2);
        break;
    case 2:
        mul(num1, num2);
        break;
    case 3:
        div(num1, num2);
        break;
    case 4:
        sub(num1, num2);
        break;
    default:
        console.log("please enter  correct option");

break;
}