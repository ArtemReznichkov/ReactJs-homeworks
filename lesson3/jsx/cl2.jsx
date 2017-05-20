/*Задача 2

Создайте страницу-таймер, которая будет отображать количество секунд, прошедшее 
с момента ее открытия.*/


var React = require('react');
var ReactDOM = require('react-dom');

var Timer = React.createClass({
  getInitialState(){
    return {
      seconds: 0
    };
  },
  componentDidMount(){
    var self = this;
    setInterval(function(){
      self.setState({seconds: self.state.seconds + 1});
    }, 1000);
  },
  render() {
    return <h1>{this.state.seconds}</h1>;
}
});

var container = document.getElementById("example");
ReactDOM.render(<Timer />, container);