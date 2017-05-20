// Задача 3

// Создайте React-компонент, содержащий форму со следующими полями:

// Name
// Email
// Phone number
// Message Используя обработчики событий, реализуйте валидацию формы

var React = require('react');
var ReactDOM = require('react-dom');

var Form = React.createClass({
  getInitialState(){
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      nameErrorMsg: '',
      phoneErrorMsg: '',
      emailErrorMsg: '',
      isFormDirty: false
    }
  },
  handleInput(e){
    this
    var name = e.target.name;
    var value = e.target.value;
    var errorMessage = '';
    var validationData = {
      name: {pattern:/^.{6,30}$/, errorMsg:'Length between 6 and 30 characters', required: true},
      email: {pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i, errorMsg:'Email is incorrect!', required: true},
      phone: {pattern: /^\+380\d{9}$/, errorMsg:'Example: +380990001122!', required: true},
      message: {pattern: null, errorMsg:null, required: false},
    }
    var validationParams = validationData[name];
    if(validationParams.pattern){
      var isValid = value.match(validationParams.pattern);
      if(!isValid){
        errorMessage = validationParams.errorMsg;
      }
    }
    if(validationParams.required){
      if(value.length < 1){
        errorMessage = 'Field is required!';
      }
    }

    this.setState({
      [name]: value,
      [name+'ErrorMsg']: errorMessage,
      isFormDirty: true
    });
  },
  handleClick(e){
    e.preventDefault();
    var msg = 'name: '+this.state.name+
      '; phone: '+this.state.phone+
      '; email: '+this.state.email;
    alert(msg);
  },
  render() {
      return (
        <div>
          <form role="form" >
            <div>
              <label htmlFor="name">Name</label>
              <input name="name" value={this.state.name} onChange={this.handleInput}/>
              <p>{this.state.nameErrorMsg}</p>
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" value={this.state.email} onChange={this.handleInput}/>
              <p>{this.state.emailErrorMsg}</p>
            </div>

            <div>
              <label htmlFor="phone">Phone number</label>
              <input name="phone" value={this.state.phone} onChange={this.handleInput}/>
              <p>{this.state.phoneErrorMsg}</p>
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea name="message" rows="3" value={this.state.message} onChange={this.handleInput} />
            </div>

            <button type="submit"
              onClick={this.handleClick}
              disabled={
                !(this.state.isFormDirty
                && this.state.name != ''
                && this.state.email != ''
                && this.state.phone != ''
                && this.state.nameErrorMsg == ''
                && this.state.phoneErrorMsg == ''
                && this.state.emailErrorMsg == '')
              }>
              Submit</button>
          </form>
        </div>
      );
  }
});

var container = document.getElementById("example");
ReactDOM.render(<Form/>, container);