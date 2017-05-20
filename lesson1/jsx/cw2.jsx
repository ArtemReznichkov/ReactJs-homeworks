// Задача 2

// Создайте React компонент, который отображает на странице форму с полями ‘name’ , 
// ‘login’ и кнопкой Submit
var React = require('react');
var ReactDOM = require('react-dom');

var MyForm = React.createClass({
  render: function () {
    return(
      <div className="container">
        <form role="form">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Please, enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Login</label>
            <input type="text" id="name" placeholder="Please, enter your login" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
});

var container = document.getElementById("example")
ReactDOM.render(<MyForm/>, container);