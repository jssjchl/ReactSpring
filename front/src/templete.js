var cart = {name : 'book', price : '4000'};
var getTotal =function(cart){
    return `${cart.price} won`;
};
var string = `안녕라세요`;
var string2 = `안녕히세요`;

var multi = `${string}
string2`
var mycart = `장바구니에 ${cart.name}이 있습니다. 총 금액은 ${getTotal(cart)} 입니다`;

console.log(mycart);
console.log(multi);