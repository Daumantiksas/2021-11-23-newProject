import accordion from "./accordion";
import books from "./data";
import students from "./students";
import demoStorages from "./scss/demoStorages";
require('bootstrap');

accordion(books);
demoStorages(books);


for(let btn of document.querySelectorAll('.btn')){
    btn.onclick = (e)=>{
        e.target.style.color = 'green';
    }}