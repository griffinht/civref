import Plants from "./realisticbiomes/Plants.js";
import Calculator from "./calculator/Calculator.js";


let calculator = new Calculator()
calculator.addInput(Plants.WHEAT)
document.body.append(calculator.getElement())
