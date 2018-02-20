import React from 'react';
import './App.css';

// This is great!
// I can just write my html here, and let it sit and wait to be populated with data
// and work on the styling and layout and stuff.
const App = () => {
    return (
        <div className="App">
          <div className="container">
            <div className="header">HEADER</div>
            <div className="main">
              <div className="menu">
                <div>MENU</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
              </div>
              <div className="content">CONTENT</div>
            </div>
            <div className="footer">FOOTER</div>
          </div>
        </div>
    );
};

export default App;
