console.log("-----------Stack------------");
let testArr = [];
let lastEle = testArr.length - 1;

function checking(input) {
  for (let x = 0; x < input.length; x++) {
    if (input[x] == "[" || input[x] == "{" || input[x] == "(") {
      testArr.push(input[x]);
    }
  }
  for (let x = 0; x < input.length; x++) {
    if (input[x] == "]" || input[x] == "}" || input[x] == ")") {
      testArr.pop();
    }
  }
  if (testArr.length == 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}
checking("ab(cd{ef}gh)");
console.log(testArr); //true
console.log("------------------------");
checking("ab(cd{ef)");
console.log(testArr); // false
// ---------------------------------------------------------7:30-10:00
// queue
console.log("-----------Queue------------");
function queue(input) {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  let tempArray = [];
  console.log(array);
  for (let i = 0; i < input; i++) {
    tempArray.push(array.shift());
  }
  for (let i = 0; i < input; i++) {
    array.unshift(tempArray.shift());
  }
  console.log(array);
}
queue(12);
// --------------------------------------10:00 - 10:15
// LinkedList
console.log("-----------Link list------------");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertHead(value) {
    this.length++;
    let node = new Node(value);
    this.head = this.tail = node;
    return node;
  }

  insert(value) {
    this.length++;
    let node = new Node(value);

    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
      return node;
    } else {
      this.head = this.tail = node;
      return node;
    }
  }
}

function insertTheWord(theWord) {
  let input = new LinkedList();
  input.insertHead(theWord[0]);
  for (let x = 1; x < theWord.length; x++) {
    input.insert(theWord[x]);
  }
  return input;
}

function isPalindrome(ll) {
  let head = ll.head;
  let valuesFound = [];
  while (head) {
    valuesFound.push(head.value);
    head = head.next;
  }
  // R A C  C A R
  //   .       .
  let left = 0;
  let right = valuesFound.length - 1;
  while (left <= right) {
    if (valuesFound[left] !== valuesFound[right]) {
      return false;
    }
    left++, right--;
  }

  return true;
}

console.log(isPalindrome(insertTheWord("moom")));
// -------------------------------------------------- 10:30 - 12:40
// recursion part 1
console.log("-----------recursion part 1------------");

function fibonacci(number) {
  if (number <= 1) {
    return 1;
  }
  return fibonacci(number - 1) + fibonacci(number - 2);
}
function show(times) {
  let result = [];
  let crr;
  for (let x = 0; x < times; x++) {
    crr = fibonacci(x);
    result.push(crr);
  }
  console.log(result);
}
show(8);
// -------------------------------------------------- 12:40 - 01:55
// recursion part 2
console.log("-----------recursion part 2------------");

function factorial(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}
console.log("factorial (5): " + factorial(5));
// ------------------------------ Stolen --------------- 01:55 - 02:05
