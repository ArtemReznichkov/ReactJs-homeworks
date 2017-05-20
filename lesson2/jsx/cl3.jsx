// Задача 3

// Создайте React компонент, который содержит checkbox и элемент div. 
// При клике по checkbox элементу div присваиваиваются новые стили (выбор стиля призвольный).

var React = require('react'); 
var ReactDOM = require('react-dom'); 


        var CheckBox = React.createClass({ 
            getInitialState: function() {
                return {
                    checked: true 
                }
            }, 

            handler: function() { 
                
                this.setState({checked: !this.state.checked})
            }, 

            render: function() {
                var color; 

                if ( this.state.checked ) {
                    color = 'red'; 
                } 
                else {
                    color = 'blue'; 
                } 

                return (
                    <div>
                        <input type="checkbox" onChange={this.handler} defaultChecked ={this.state.checked}/> 
                        <div style={{"color": color, "fontSize":30 }}>Change text color</div>
                    </div>
                )}
        
        })

var container = document.getElementById('example'); 

ReactDOM.render(<CheckBox/>, container); 