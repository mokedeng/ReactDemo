import React, { Component } from 'react';

class App extends Component {
    render() { 
        return ( 
            <ul className="my-list">
                <li>{true?'111':'222'}</li>
                <li>I Love React</li>
            </ul>
        );
    }
}
 
export default App;