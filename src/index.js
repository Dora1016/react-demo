import React from 'react';
import ReactDOM from 'react-dom';

console.log(React)
console.log(ReactDOM)
console.log(React.createElement)
console.log(ReactDOM.render)

let n = 0
const App = () =>
  React.createElement("div", null, [
    n,
    React.createElement(
      "button",
      {
        onClick: () => {
          n += 1
          ReactDOM.render(App(), document.querySelector("#app")) 
        }
      },
      "+1"
    )
  ])

ReactDOM.render(App(), document.querySelector("#app"))