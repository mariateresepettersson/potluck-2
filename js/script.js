// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

const assignButton = document.querySelector(".assign");

const assignedItems = document.querySelector(".assigned-items");


addGuestButton.addEventListener("click", function () {
    const guest = guestInput.value;
    //console.log(guest);

    if (guest !== "") {
        addToList(guest);
        updateGuestCount();
        clearInput();
    }
});

//Clear the Input Box
const clearInput = function () {
    guestInput.value = "";
};

const addToList = function (guest) {
    // Create a variable called listItem and use document.createElement method to create a new list element
    const listItem = document.createElement("li");
    //Change the innerText of the listItem to the guest variable.
    listItem.innerText = guest;
    // Append the listItem to guestList so the new list element appears at the end of the list
    guestList.append(listItem);
};

//Check if invites = 8 and restrict 
const updateGuestCount = function () {
    const guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;

    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
    }
};

//Function for assigning potluck items
const assignItems = function () {
    const potluckItems = [
        "cheese",
        "crackers",
        "fresh fruit",
        "coleslaw",
        "apple cake",
        "gazpacho",
        "baguette",
        "egg salad",
        "potato salad",
        "summer rolls",
        "hummus",
        "cookies"
    ];

    const allGuests = document.querySelectorAll(".guest-list li");

    for (let guest of allGuests) {
        let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
        let randomPotluckItem = potluckItems[randomPotluckIndex];

        let listItem = document.createElement("li");
        listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
        assignedItems.append(listItem);
        //To avoid assigning same dish multiple times    
        potluckItems.splice(randomPotluckIndex, 1);
    };
}; 

assignButton.addEventListener("click", function () {
    assignItems();
    assignButton.disabled = true;
});
