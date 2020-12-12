import React from 'react'
import ReactDOM from 'react-dom'

import './style/index.css'

class App extends React.Component {
    render() {
        return (
            <div id='app'>
                Hello World!
            </div>
        );
    }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
