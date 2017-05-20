// Задача 3

// Используя синтаксис ES6, создайте React компонент, содержащий кнопку и выводящий 
// на экран при клике по кнопке свои свойства(props) в виде списка.

var React = require('react');
var ReactDOM = require('react-dom');

class OwnPropsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showComponent: false };
    this.btnHandler = this.btnHandler.bind(this);
  }
  btnHandler(e){
    this.setState({showComponent: true});
  }
  render() {
    let ul = (
      <ul>
        {Object.keys(this.props).map(key=><li key={key}>{`${key}: ${this.props[key]}`}</li>)}
      </ul>
    );
    return (
      <div>
        <button onClick={this.btnHandler}>Show props</button>
          {this.state.showComponent ? ul : null}
      </div>
    );
  }
}

var container = document.getElementById("example")
ReactDOM.render(
  <OwnPropsList
  prop1="some prop1"
  prop2="some prop2"
  prop3="some prop3"/>,
container);