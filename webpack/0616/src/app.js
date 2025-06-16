import plus from "./plus";
import './app.css';
import tiger from './tiger.png';

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = `<img src="${tiger}"/>`;
})


console.log(plus(2, 3));