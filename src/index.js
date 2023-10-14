import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Title from './components/title';
import Card from './components/Card';
import "bootstrap/dist/css/bootstrap.min.css";

const data = JSON.parse(require('./output.json'));
const title1 = data["articles"];


const cards = title1.slice(0, 10).map((item) => (
  <Card dat={item["title"]} style={{position: "absolute", left: 0.5*window.innerWidth }} />
));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Title/>
    <div className="p-3">
    {cards}
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
