/*Задача 3

Модифицируйте код предыдущей задачи. Добавьте на странцу три кнопки: сбросить 
счет (reset), start и stop, которые предоставя пользователю останавлтвать/возобновлять 
работу таймера и сбрасывать отсчитанное время.*/

var React = require('react');
var ReactDOM = require('react-dom');

var Timer = React.createClass({
  getInitialState(){
    return {
      seconds: 0,
      interval: 0
    };
  },
  componentDidMount(){
    var self = this;
    if(this.state.interval) return;
    this.state.interval = setInterval(function(){
      self.setState({seconds: self.state.seconds + 1});
    }, 1000);
  },
  
  start(){
      this.componentDidMount();
  },
  
  reset(){
      clearInterval(this.state.interval);
      this.setState({seconds: 0});
      this.setState({interval: 0});
  },
  stop(){
    clearInterval(this.state.interval); 
    this.setState({interval: 0});
  },
  
  
  render() {
    return (
        <div>
            <h1>{this.state.seconds}</h1>
            <button onClick={this.reset}>Reset</button>
            <button onClick={this.start}>Start</button>
            <button onClick={this.stop}>Stop</button>
        </div>
    );
}
});

var container = document.getElementById("example");
ReactDOM.render(<Timer/>, container);