// Задача 2

// Создайте React компонент, который имеет два свойства(props) типа number и 
// свойство mode типа boolean. В зависимости от значения свойства mode(true/false) 
// компонент должен выводить на экран либо сумму свойств типа number, либо результат 
// их конкатенации.

var React = require('react');
var ReactDOM = require('react-dom');

var Component = React.createClass({
    propTypes: {
      value1: React.PropTypes.number.isRequired,
      value2: React.PropTypes.number.isRequired,
      mode: React.PropTypes.bool.isRequired,
    },

    render() {
        return <p>{(this.props.mode ? 0 : '') + this.props.value1 + this.props.value2}</p>
    }
});

ReactDOM.render(
  <div>
    <Component value1={5} value2={10} mode={true} />
    <Component value1={5} value2={10} mode={false} />
  </div>
, document.getElementById("example"));