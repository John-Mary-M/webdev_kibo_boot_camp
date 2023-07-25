
/* this will track the count */
var count = 1;

/* add your event listener here */
const button = document.querySelector('button')
button.addEventListener('click', function () {
        document.querySelector('h2').textContent = count
        count = count + 1
        // console.log("it works")
})