class SmartCalculator {
  constructor(initialValue) {
    this.plus = ' + ';
    this.minus = ' - ';
    this.multiplication = ' * ';
    this.delimiter = ' / ';
    this.exponentiation = ' Math.pow(';
    this.expression = ' ' + initialValue;
  }

  valueOf() {
    return eval(this.expression);
  }

  add(number) {
    this.expression += this.plus + number;

    return this;
  }

  subtract(number) {
    this.expression += this.minus + number;

    return this;
  }

  multiply(number) {
    this.expression += this.multiplication + number;

    return this;
  }

  devide(number) {
    this.expression += this.delimiter + number;

    return this;
  }

  pow(number) {
    let end = ',' + number + ')';
    let matches = this.expression.match(/^(.*\D+)(\d+)(\)*)$/);

    if (matches[3]) {
      end += matches.pop();
    }

    this.expression = matches[1] + this.exponentiation + matches[2] + end;

    return this;
  }
}

module.exports = SmartCalculator;
