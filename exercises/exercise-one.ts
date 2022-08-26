/** *
 *
 * Exercise 1: DOM Manipulation
 *
 * Demonstrate your understanding of event propagation within the DOM
 * by writing a snippet of plain javascript that displays an alert
 * when the green area is clicked but not when the red area is clicked.
 */

function notifyGreenClicked(event) {
  if (event.target.id === 'a') {
    alert('Green Clicked');
  }
}

document.getElementById('a').addEventListener('click', notifyGreenClicked);

// write your solution here
