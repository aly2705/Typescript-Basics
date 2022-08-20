function addNum(a, b) {
    return a + b;
}
var res = addNum(5, 2);
//Unintended behaviour: add('5', '2') would return 52
console.log(res);
