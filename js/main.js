'use strict';

const allButtons = document.querySelectorAll('.button');

function handleClick() {
    for (let i = 0; i < allButtons.length; i += 1) {
        allButtons[i].addEventListener('click', function () {
          console.log(allButtons[i].innerHTML);
        })
      }
};



