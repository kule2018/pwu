import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './component/app/app';

function init() {
  const a = 6;
  ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
}
init();
