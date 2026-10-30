
let adjective1 = prompt("Enter an adjective.");
let creature = prompt("Enter the name of a spooky creature.");
let adjective2 = prompt("Enter an adjective.");
let friend = prompt("Enter the name of a friend.");
let adjective3 = prompt("Enter an adjective.");
let adjective4 = prompt("Enter an adjective.");
let creature2 = prompt("Enter another spooky creature.");
let place = prompt("Enter a spooky place.");
let verb = prompt("Enter a verb ending in -ing.");
let food = prompt("Enter a food.");
let number = prompt("Enter a number.");
let sound = prompt("Enter a spooky sound.");
let object = prompt("Enter an object.");
let color = prompt("Enter a color.");

let story =
`It was a dark and <u>${adjective1}</u> Halloween night when I decided to go trick-or-treating.
I put on my <u>${adjective2}</u> costume, which made me look like a <u>${creature}</u>.
My friend, <u>${friend}</u>, dressed up as a <u>${adjective3}</u> <u>${creature2}</u>.
We walked to a <u>${place}</u> while <u>${verb}</u> down the street.
Suddenly, we heard a loud "<u>${sound}</u>!" coming from behind a tree.
A mysterious <u>${color}</u> <u>${object}</u> appeared, and we ran away as fast as we could.
After running for <u>${number}</u> minutes, we stopped to eat some <u>${food}</u>.
Just when we thought we were safe, the <u>${creature}</u> appeared again!
We screamed and ran home, promising never to return to that <u>${adjective4}</u> place.
It was the strangest Halloween night we had ever experienced!`;

let madLibOutputDiv = document.getElementById("madLibOutput");

madLibOutputDiv.innerHTML = `<p>${story}</p>`;
