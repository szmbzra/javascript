/* class Calculator{
constructor(){
    this.result = 10;
}
}
const c1 = new Calculator();
console.log(c1.result);   */

class Calculator{
    static result = 0;
    static add(number){
        // console.log("Add");
        Calculator.result += number;
    }
    static sub(number){
this.result -= number;
    }
    }
    console.log(Calculator.result);
    Calculator.add(5);
    console.log(Calculator.result);
    Calculator.sub(2);
    console.log(Calculator.result);