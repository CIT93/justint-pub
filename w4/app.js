console.log('JS loaded')

const myText = document.getElementById('getText');

const greetGen = document.getElementById('greetGen');

const outputE1 = document.getElementById('output')

const init = function(){
    greetGen.addEventListener('submit', handleFormSubmit)
    }

const handleFormSubmit = function(event){
    console.log('Form Submitted')
    event.preventDefault();
    const name = myText.value.trim();
    const greeting = myText ? `Hello, ${name}! I'm catching up, I'm going to be a JS pro!`  : 'Hello';
    outputE1.textContent = greeting;
    // greetGen.reset();
    console.log('Input Value', myText.value);
    console.log('Clear Form');
};

document.addEventListener('DOMContentLoaded', init);



