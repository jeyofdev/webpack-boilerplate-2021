import './styles/app.css';
import user from './data/user.json';
import logo from './images/wp-logo.png';

console.log('hello world !!');

const hello = 'hello people';
console.log(hello);

const element = document.createElement('div');
element.classList.add('hello');
element.innerHTML = 'Hello world !!!';
document.body.appendChild(element);

const img = document.createElement('img');
img.src = logo;
document.body.append(img);

console.log(`Hello ${user.firstname} ${user.lastname}`);
