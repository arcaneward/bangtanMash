function bts_lotto() {  
    var mash = ['Namjoon', 'Yoongi', 'Hobi', 'Taehyung', 'Jungkook', 'Jin', 'Jimin'];
    var randomNum = random_num(7);
    return mash[randomNum]; 
}
function mash_lotto() { 
    var mash = ['mansion', 'apartment', 'shack', 'house'];
    var randomNum = random_num(4); 
    return mash[randomNum];
}
function random_num(num) {  
    var num = num || 3;  
    return Math.floor(Math.random() * num); 
}
function get_answer(category) { 
    var choices = [];    
    var selector = 'input[name="' + category + '[]"]';   
    var inputs = document.querySelectorAll(selector);
    var answer;  

    for (var i = 0; i < inputs.length; i++) { 
        answer = inputs[i].value;  
        if (answer !== '') {  
            choices.push(answer); 
        }
    }
    return choices[random_num(choices.length)];   
}
function fill_answers(answers) {
    var home = document.querySelector('#home');  
    var job = document.querySelector('#job');
    var pet = document.querySelector('#pet');
    var location = document.querySelector('#location');
    var bts = document.querySelector('#bts');

    home.innerText = answers['mash'];
    bts.innerText = answers['bts'];
    job.innerText = answers['job'];
    pet.innerText = answers['pet'];
    location.innerText = answers['location'];
    home.innerHTML = answers.mash;  
    bts.innerHTML = answers.bts
    job.innerHTML = answers.job;  
    pet.innerHTML = answers.pet;
    location.innerHTML = answers.location;
}
function handle_submission(evt) {
    evt.preventDefault();  
    evt.stopPropagation();  

    var answers_object = {
        'mash': mash_lotto(),
        'bts': bts_lotto(),
        'job': get_answer('job'),
        'pet': get_answer('pet'),
        'location': get_answer('location')
    }
    fill_answers(answers_object);

    var answer_div = document.querySelector('#answers');
    answer_div.classList.add('show');
}
var form = document.querySelector('#mash');  
form.addEventListener('submit', handle_submission);
