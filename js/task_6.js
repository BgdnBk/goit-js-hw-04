const counter = {
  value: 0,
  increment(value) {
    console.log("this increment - ", this);
    this.value += value;
  },
  decrement(value) {
    console.log("this decrement - ", this);
    this.value -= value;
  },
};

const update = function (value, operation) {
  operation();
};

update(10, counter.increment);
update(5, counter.decrement);
