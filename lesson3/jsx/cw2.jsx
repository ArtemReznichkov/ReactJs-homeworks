/*Задача 2

Создайте страницу-калькулятор. На странице должно быть 4 кнопки(по кнопке на 
математическую операцию: сложение, вычитание, умножение, деление), 2 поля 
ввода и элемент для отображения результата. Сделайте так, чтобы в поля ввода 
разрешалось вводить только цифры.*/

var React = require('react');
var ReactDOM = require('react-dom');

var Calculator = React.createClass({
      getInitialState(){
           return {
              value1: 0,
              value2: 0,
              result: 0
            };
      },
      
      plus(){
        this.setState({result: this.state.value1 + this.state.value2});
      },
      degr(){
        this.setState({result: this.state.value1 / this.state.value2});
      },
      mul(){
        this.setState({result: this.state.value1 * this.state.value2});  
      },
      diff(){
        this.setState({result: this.state.value1 - this.state.value2});  
      },
  
      inputValue(e){
          var stateObj = {};
          stateObj[e.target.id] = +e.target.value;
          this.setState(stateObj);
      },
      
      keyPressOnlyNumbers(e){
        if([48,49,50,51,52,53,54,55,56,57].indexOf(e.charCode) == -1){
          e.preventDefault();
        }
      },
          

  render() {
    return (
        <div>
        <input placeholder="Enter value 1" id = "value1" value={this.state.value1} onChange={this.inputValue} onKeyPress={this.keyPressOnlyNumbers}></input>
        <input placeholder="Enter value 2" id = "value2" value={this.state.value2} onChange={this.inputValue} onKeyPress={this.keyPressOnlyNumbers}></input>
        <button onClick={this.plus}>+</button>
        <button onClick={this.diff}>-</button>
        <button onClick={this.mul}>*</button>
        <button onClick={this.degr}>/</button>
        <h1>{this.state.result}</h1>
        </div>
    );
}
});

var container = document.getElementById("example");
ReactDOM.render(<Calculator />, container);