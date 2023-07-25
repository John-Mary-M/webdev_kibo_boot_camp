/* Write your solution here */

const like = document.querySelector('button');

like.addEventListener('click', () => {
        console.log('Clicked');
        document.querySelector('.like-count').innerHTML = 1024;
        document.querySelector('button').disabled = true;
})