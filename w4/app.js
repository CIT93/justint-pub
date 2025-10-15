const myText = document.getElementById('getText');

const init = function(){
    greetGen.addeventlistner('submit', handleFormSubmit)
    }

const handleFormSubmit = function(event){
    event.preventDefault();
    greetGen.reset();
    console.log('Clear Form');
};



