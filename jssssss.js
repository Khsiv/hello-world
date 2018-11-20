'use strict';
'adasd';
class Element {
  constructor(prev = null, item = null, next = null) {
    this.prev = prev;
    this.item = item;
    this.next = next;
  }
}

class Dequeue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(...items) {
    for(const item of items) {
    const last = this.last;
    const elem = new Element(null, item, last);
    if (last) {
      last.prev = elem;
      this.last = elem;
    } else {
      this.first = elem;
      this.last = elem;
    }
    this.size++;
  }
}
  pop() {
    const last = this.last;
    this.last = last.next;
    this.last.prev = null;
    this.size--;
    return last.item;
  }

  unshift(item) {
    const first = this.first;
    const elem = new Element(first, item, null);
    this.first = elem;
    this.size++;
  }

  shift() {
    const first = this.first;
    if (!first) return;
    if (this.last === first) {
      this.last = null;
      this.first = null;
    } else {
      this.first = first.prev;
    }
    if (!(--this.size)) console.log('dequeue empty');
    return first.item;
  }

  compose() {
    
    const fns = [];
    for (const fn of this) fns.push(fn);
    return (arg) => fns.reduce((val, fn) => fn(val),arg);
  }

  partialPow(x) {
    return (y) => Math.pow(y, x);
  }

  [Symbol.iterator]() {
    return {
      next() {
        const first = this.first;
        if (!first) return { done: true };
        this.first = first.prev;
        return { value: first.item, done: false };
      },

       first: this.first
    };
  }
}

const s = new Dequeue();

s.push((n) => n + 1,(n)=> n + 2);
s.push((n) => n + 2);
s.push((n) => n + 3);
s.pop();
s.unshift((n) => n + 4);
s.unshift((n) => n + 5);
s.shift();
//console.log(s.compose(2));
const composed = s.compose();
const res = composed(2);
console.log(res);

const cube = s.partialPow(3);
const resul = cube(3);
console.log(resul);



console.log("DASD");
console.log("DASD");
console.log("DASD");
console.log("DASD");
// function compose(g, f) {
//   return n => g((fn));
// }
// const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

// var fn = compose(n => n * 2,n => n + 10);

// console.log(fn(2));
// 10
// JOOPPAA