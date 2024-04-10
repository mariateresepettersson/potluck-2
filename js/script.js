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


addGuestButton.addEventListener("click", function () {
    const guest = guestInput.value;
    //console.log(guest);

    if (guest !== "") {
        // Create a variable called listItem and use document.createElement method to create a new list element
        const listItem = document.createElement("li");

        //Change the innerText of the listItem to the guest variable.
        listItem.innerText = guest;
        // Append the listItem to guestList so the new list element appears at the end of the list
         guestList.appendChild(listItem);
        
        // Clear the input field after adding the guest to the list
        guestInput.value = "";
    }

});