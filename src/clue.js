// ITERATION 1

/* Function
    function createSuspect(firstName, lastName, occupation, age, description, color) {
        return {
            firstName, lastName, occupation, age, description, color
        }
    }
    const suspectsArray = [
        createSuspect ("Anna", "Pear", "Designer", 31, "description", "color"),
        createSuspect ("Jakob", "Marinero", "Rower", 31, "description", "red")
    ]
    console.log(suspectsarray);
*/

const suspectsArray = [
    {firstName: "Jacob", lastName: "Green", occupation: "Entrepreneur", age: 45, description: "He has a lot of connections", image: "https: //66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg", color: "green"},
    {firstName: "Doctor", lastName: "Orchid", occupation: "Scientist", age: 26, description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy", image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg", color: "white"},
    {firstName: "Victor", lastName: "Plum", occupation: "Designer", age: 22, description: "Billionaire video game designer", image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg", color: "purple"},
    {firstName: "Kasandra", lastName: "Scarlet", occupation: "Actor", age: 31, description: "She is an A-list movie star with a dark past", image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg", color: "red"},
    {firstName: "Eleanor", lastName: "Peacock", occupation: "Socialité", age: 36, description: "She is from a wealthy family and uses her status and money to earn popularity", image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", color: "blue"},
    {firstName: "Jack", lastName: "Mustard", occupation: "Retired Football player", age: 62, description: "He is a former football player who tries to get by on his former glory", image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg", color: "yellow"},
];

console.log(suspectsArray[1].lastName);

// 

// Weapons Array

/* Function
    function createWeapons(name, weight) {
        return {
            name, weight
        }
    }
    const weaponsArray = [
        createWeapons ("rope", 10),
        createSuspect ("knife", 8)
    ]
    console.log(weaponsArray);
*/

const weaponsArray = [
    {name: "rope", weight: 10},
    {name: "knife", weight: 8},
    {name: "candleStick", weight: 2},
    {name: "dumbbell", weight: 30},
    {name: "poison", weight: 2},
    {name: "axe", weight: 15},
    {name: "bat", weight: 13},
    {name: "trophy", weight: 25},
    {name: "pistol", weight: 20},
];

// Rooms Array

const roomsArray = [
    {name: "Dining Room"},
    {name: "Conservatory"},
    {name: "Kitchen"},
    {name: "Study"},
    {name: "Library"},
    {name: "Billiard Room"},
    {name: "Lounge"},
    {name: "Ballroom"},
    {name: "Hall"},
    {name: "Spa"},
    {name: "Living Room"},
    {name: "Observatory"},
    {name: "Theater"},
    {name: "Guest House"},
    {name: "Patio"},
];


// ITERATION 2

// Returns random value of random element of the array
// Actually works, maybe small deviation of intended task somewhere

function selectRandom(min, max) {
    let i = Math.floor(Math.random() * (max - min) + min);
    let chosenValue = array[i].name;
    return chosenValue; 
  }
    let array = roomsArray;
    console.log (selectRandom(0, array.length));


// Returns suspect, weapon and room and a corresponding value
// Actually works, maybe small deviation of intended task somewhere

function pickMystery() {
    let min = 0;
    let max = suspectsArray.length-1;
    let x = Math.floor(Math.random() * (max - min) + min);
    let randomSuspect = suspectsArray[x].firstName + ` ` + suspectsArray[x].lastName;
    let randomWeapon = weaponsArray[x].name;
    let randomRoom = roomsArray[x].name;
    let mysterySolved = {suspect:randomSuspect, weapon:randomWeapon, room:randomRoom}
    return mysterySolved;
        }       

console.log (pickMystery());


// ITERATION 3

// Didn't manage to solve it...

function revealMystery(min, max) {
    let j = Math.floor(Math.random() * (max - min) + min);
    let sentence = `${suspectsArray[j].firstName} ${suspectsArray[i].lastName} killed Mr. Boddy using the ${weaponsArray[j].name} in the ${roomsArray[j].name}!`;
    return sentence;

  }
    
console.log (sentence);