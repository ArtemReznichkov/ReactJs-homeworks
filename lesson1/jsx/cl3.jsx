// Задача 3

// Создайте React компонент, который принимает два числа в качестве свойств (props). 
// Компонент должен выводить на экран сумму своих свойств.

var React = require('react'); 
var ReactDOM = require('react-dom'); 

        var p = {
            prop1: 7,
            prop2: 5
        }

        var PropsDemo = React.createClass({
             render: function() {
                return (
            <h1>{this.props.prop1 + this.props.prop2}</h1>
            )}
        })

        var container = document.getElementById('example');  
        
        ReactDOM.render(<PropsDemo {...p} />, container); 