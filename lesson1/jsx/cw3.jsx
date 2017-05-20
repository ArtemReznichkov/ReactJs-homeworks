// Задача 3

// Создайте React компонент, который отображает на странице произвольный текст. 
// Компонент должен иметь такие свойства: color и fontSize. Установите на основе 
// этих свойств стили для компонента.

var React = require('react');
var ReactDOM = require('react-dom');

var Component = React.createClass({
  render: function () {
      
    var style = {
      color: this.props.color,
      fontSize: this.props.fontSize
    };
    
    return(
      <p style={style}>
        some text
      </p>
    )
  }
});

var container = document.getElementById("example");

ReactDOM.render(<Component color="red" fontSize="1.3em"/>, container);