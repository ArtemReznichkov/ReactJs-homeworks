// Задача 1

// Создайте React компонент-счетчик. Он должен отображать на странице две кнопки 
// (+ и -) и элемент h1 для вывода текущего счета на экран

var React = require('react');
var ReactDOM = require('react-dom');

var Counter = React.createClass({
  getInitialState(){
    return {
      count: 0
    };
  },
  
  plus(){
    this.setState({count: this.state.count + 1});
  },
  diff(){
    this.setState({count: this.state.count - 1});
  },
  
  
  render() {
    return (
        <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.plus}>+</button>
            <button onClick={this.diff}>-</button>
        </div>
    );
}
});

var container = document.getElementById("example");
ReactDOM.render(<Counter />, container);