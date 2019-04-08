class BetterArray {
    constructor(arr) {
      this.arr = arr;
    }
    has(item) {
      return this.arr.includes(item);
    }
  }

  const myArray = new BetterArray([1, 2, 3]);

  console.log(myArray.has(2)); // true
  console.log(myArray.has(4)); // false