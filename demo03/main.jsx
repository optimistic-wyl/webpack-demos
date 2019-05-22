import "./main2.jsx";
const React = require('react');
const ReactDOM = require('react-dom');

function Test(){
  return <h1>Hello, test!!!</h1>
}

ReactDOM.render(
  <div>
    <h1>
      Hello, world!!!!!!!
    </h1>
    <Test></Test>
    <Test></Test>
  </div>,
  document.querySelector('#wrapper')
);

