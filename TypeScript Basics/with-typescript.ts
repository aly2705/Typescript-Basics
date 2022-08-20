function add(a: number, b: number) {
  return a + b;
}

const result = add(5, 2);

//Unintended behaviour: add('5', '2') would return 52
console.log(result);
