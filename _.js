const _ = {
  clamp(number, lower, upper) {
    if(number <= lower) {
      return lower;
    } else if(number >= upper) {
      return upper;
    } else {
      return number;
    }
  },

  inRange(number, start, end) {
    if(!end) {
      end = start;
      start = 0;
    }

    if(start > end) {
      let temp = start;
      start = end;
      end = temp;
    }

    if(number < start || number >= end) {
      return false;
    } else {
      return true;
    }
  },

  words(string) {
    return string.split(' ');
  },

  pad(string, length) {
    let totalPad = length - string.length;
    let startPad = Math.floor(totalPad / 2);
    let endPad = totalPad - startPad;

    str1 = string.padStart(startPad + string.length);
    string = str1.padEnd(endPad + str1.length);

    return string;
  },

  has(object, key) {
    return object.hasOwnProperty(key);
  },

  invert(object) {
    let invertedObj = {};

    for(const prop in object) {
      let key = object[prop];
      let val = prop;
      Object.defineProperty(invertedObj, key, {
        value: val,
        writable: true
      });
    }

    return invertedObj;
  },

  findKey(object, predicate) {
    let result;
    for(let key in object) {
      let test = predicate(object[key]);
      if(test) {
        result = key;
        break;
      } else {
        result = undefined;
      }
    }
    return result;
  },

  drop(array, n) {
    let slicedArray;
    if(n) {
      slicedArray = array.slice(n);
    } else {
      slicedArray = array.slice(1);
    }
    return slicedArray;
  },

  dropWhile(array, predicate) {
    let dropNumber = array.findIndex((element, index) => {
      return !predicate(element, index, array);
    });

    let droppedArray = this.drop(array, dropNumber);

    return droppedArray;
  },

  chunk(array, size=1) {
    let slicedArray = array;
    let chunkedArrays = [];

    while(slicedArray.length >= size) {
      let chunk = slicedArray.slice(0, size);
      chunkedArrays.push(chunk);
      slicedArray = slicedArray.slice(size);
    }

    if(slicedArray.length > 0) {
      let chunk = slicedArray.slice(0);
      chunkedArrays.push(chunk);
    }
    return chunkedArrays;
  }
};


// Do not write or modify code below this line.
module.exports = _;