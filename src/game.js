export default click;
let num_clicked = 0;

function win() {
    alert('You win!');
    reset();
}

function reset() {
    num_clicked = 0;
}

function click() {
    num_clicked++;
    console.log(`You've been clicked!`);
    if (num_clicked === 10) win();
}