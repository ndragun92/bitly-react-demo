import React from 'react';
import './App.css';
const { useState } = React;

function App() {
    // Example with passing custom data in slots & props
    const [value, setValue] = useState('');
    const handleChange = (e) => setValue(e.target.value);
    React.useEffect(() => {
        const element = document.getElementById('wc-qrcg-content')
        if(element) {
            element.addEventListener('submit', () => {alert('Submitted');})
        }
    });
      return (
        <div className="App">
            <wc-qrcg-navbar>
                <ul>
                    <li>
                        <a href="#mytest">My test</a>
                    </li>
                </ul>
            </wc-qrcg-navbar>
            <wc-qrcg-content id='wc-qrcg-content' data-content={value} />
            <hr/>
            <input type="text" value={value} onChange={handleChange} />
        </div>
      );
    // Example when including whole layout
    // React.useEffect(() => {
    //     const element = document.getElementById('wc-qrcg-app')
    //     if(element) {
    //         element.addEventListener('submit', () => {alert('Submitted');})
    //     }
    // });
    // return (
    //     <div className="App">
    //         <wc-qrcg-app id='wc-qrcg-app' data-content='My static data content from react'>
    //             <div slot='content'>
    //                 Hello from React.js
    //             </div>
    //         </wc-qrcg-app>
    //     </div>
    // );
}

export default App;
