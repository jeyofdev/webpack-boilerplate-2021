import Hello from './scripts/Hello';
import { HelloEN, HelloFR } from './scripts/HelloWorld';
import './styles/app.scss';
import data from './data/user.json';
import iconSvg from './images/icon.svg';

class User {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

const newUser = new User(data.firstname, data.lastname);

// const element = document.createElement('div');
// element.classList.add('hello');
// element.innerHTML = 'Hello world !!!';
// document.body.appendChild(element);

const logo = document.createElement('img');
logo.classList.add('logo');
logo.src = iconSvg;
logo.setAttribute('width', 50);
logo.setAttribute('height', 50);
document.getElementsByClassName('navbar-brand')[0].appendChild(logo);

console.log(Hello('hello world'));
console.log(HelloEN());
console.log(HelloFR());

$('p').css('color', '#64829c');
