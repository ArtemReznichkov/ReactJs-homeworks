// Задача 2

// Реализуйте задание задачи 1 с помощью создания React компонента

var React = require('react');
var ReactDOM = require('react-dom');

	 

        var Hello = React.createClass({
            render: function() {
               
                return (<h1>Hello, world!</h1>)
            }
        });

        var container = document.getElementById('example');

        ReactDOM.render(<Hello/>, container); 