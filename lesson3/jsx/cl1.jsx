/*Задача 1

Создайте React компонент, отображающий кнопку и элемент div. Добавьте на 
страницу тег style с двумя классами – black и red, задающими соответствующий
background-color элементу. Реализуйте переключение этих классов для элемента 
div при клике по кнопке.*/

var React = require('react');
var ReactDOM = require('react-dom');

var Component = React.createClass({
    getInitialState(){
      return {
        class: 'black'
      }
    },
    changeClass(e){
      var newClass = this.state.class == 'black' ? 'red' : 'black';
      this.setState({class: newClass});
    },
    render() {
        return (
          <div>
            <div className={this.state.class}>some text</div>
            <button onClick={this.changeClass}>Change color</button>
          </div>
        );
    }
});


var container = document.getElementById("example")
ReactDOM.render(<Component />, container);