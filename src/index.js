import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReducerTutorial from './ReducerTutorial';
import EffectTutorial from './EffectTutorial';
import RefTutorial from './RefTutorial';
import LayoutEffectTutorial from './LayoutEffectTutorial';
import ImperativeHandle from './ButtonTutorial/ImperativeHandle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <ReducerTutorial />
    <EffectTutorial />
    <RefTutorial />
    <LayoutEffectTutorial /> */}
    <ImperativeHandle />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
