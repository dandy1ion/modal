'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//will only select first matching element
//const btnsOpenModal = document.querySelector('.show-modal');
//list like an array = nodeList
const btnsOpenModal = document.querySelectorAll('.show-modal');
//close modal
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
//open modal
const openModal = function() {
    //console.log('Button clicked');
    //can remove multiple classes separated by commas (no dot with class) (able to add, remove, or check if element contains a class or not)
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
//for loop
//with one line of code don't need {} for code block
for(let i = 0; i < btnsOpenModal.length; i++) btnsOpenModal[i].addEventListener('click', openModal);
//close modal with x-button
btnCloseModal.addEventListener('click', closeModal);
//close modal when click off of modal
overlay.addEventListener('click', closeModal);
//ESC Keypress Event (global event, list on the whole document)
document.addEventListener('keydown', function(e) {
    //show which key was pressed down
    //console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });