import Hello from './scripts/Hello';
import { HelloEN, HelloFR } from './scripts/HelloWorld';
import './styles/app.scss';
import data from './data/user.json';
import logo from './images/wp-logo.png';

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

console.log(Hello('hello world'));
console.log(HelloEN());
console.log(HelloFR());

$('p').css('color', '#64829c');
