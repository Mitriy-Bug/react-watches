import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
window.onload = () => {
    let zone = 0
    let date = new Date(),
        hours = date.getHours() + zone,
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

    if (hours > 12) {
        hours -= 12;
    }

    let secondsStartDegree = 360 / 60 * seconds,
        minutesStartDegree = 360 / 60 * minutes + 6 / 60 * seconds,
        hoursStartDegree = 360 / 12 * hours + 30 / 60 * minutes + 0.5 / 60 * seconds;

    let style = document.createElement('style');

    style.typeName = 'text/css';
    style.innerHTML = '\
        @keyframes clock-hand-rotate--hour-' + zone + ' {\
            from {transform: rotate(' + hoursStartDegree + 'deg)}\
            to {transform: rotate(' + (hoursStartDegree + 360) + 'deg)}\
        }\
        @keyframes clock-hand-rotate--minute-' + zone + ' {\
            from {transform: rotate(' + minutesStartDegree + 'deg)}\
            to {transform: rotate(' + (minutesStartDegree + 360) + 'deg)}\
        }\
        @keyframes clock-hand-rotate--second-' + zone + ' {\
            from {transform: rotate(' + secondsStartDegree + 'deg)}\
            to {transform: rotate(' + (secondsStartDegree + 360) + 'deg)}\
        }\
        .clock-' + zone + ' .clock__hand--hour {\
            animation: clock-hand-rotate--hour-' + zone + ' 43200s linear infinite;\
        }\
        .clock-' + zone + ' .clock__hand--minute {\
            animation: clock-hand-rotate--minute-' + zone + ' 3600s linear infinite;\
        }\
        .clock-' + zone + ' .clock__hand--second {\
            animation: clock-hand-rotate--second-' + zone + ' 60s linear infinite;\
        }';

    document.querySelector('#root').appendChild(style);
}
