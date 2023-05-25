const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  },
  bitwiseShiftLeft: function(a, b) {
    return a << b;
  },
  bitwiseShiftRight: function(a, b) {
    return a >> b;
  },
  runCalculator: function() {
    while (true) {
      const input = prompt("계산을 입력하세요 (예: 1+3):");
      if (input === "q") {
        break;
      }
      
      const operators = ['+', '-', '*', '/', '<<', '>>'];
      let operator, operands;
      
      for (const op of operators) {
        if (input.includes(op)) {
          operator = op;
          operands = input.split(operator).map(Number);
          break;
        }
      }
      
      let result;
      
      switch (operator) {
        case '+':
          result = this.add(operands[0], operands[1]);
          break;
        case '-':
          result = this.subtract(operands[0], operands[1]);
          break;
        case '*':
          result = this.multiply(operands[0], operands[1]);
          break;
        case '/':
          result = this.divide(operands[0], operands[1]);
          break;
        case '<<':
          result = this.bitwiseShiftLeft(operands[0], operands[1]);
          break;
        case '>>':
          result = this.bitwiseShiftRight(operands[0], operands[1]);
          break;
        default:
          result = "Invalid operator!";
          break;
      }
      
      console.log(`${operands[0]} ${operator} ${operands[1]} = ${result}`);
    }
  }
};

calculator.runCalculator();
