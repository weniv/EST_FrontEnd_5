import plus from "./plus";
import './app.css';
import tiger from './tiger.png';

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = `<img src="${tiger}"/>`;
})

let env;

if (process.env.NODE_ENV === 'development') {
    env = dev
} else {
    env = pro
}

// console.log(process.env.NODE_ENV)

// console.log('env: ', env);