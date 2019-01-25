"use strict";
//CLASSES
class AddressBook { // Creates a class with name of AddressBook
    constructor() { // Creates a constructor function
        this.contacts = []; //Creates a property with a value of an array
    }
    add(info) { // Creates a function that is scoped to AddressBook, can accept an argument when called
        this.contacts.push(info); // When called, this function pushes(info) into a created array with property of contacts
    }
    deleteAt(index) { //Creates a function that is scoped to AdBo, can accept an argument when called
        this.contacts.splice(index); //When called, this function removes(index) from a created array with property of contacts
    }
    print() { //Creates a function called print
        for (let i = 0; i < this.contacts.length; i++) { // A for loop that loops through an array with prop of contacts, for as long as the loop amount (i) is less than the amount of array items.
            console.log(this.contacts[i]); //Every loop iteration logs the array item [i] from the current indice
        }
    }
    deleteByName(contactName) {
        for (let i = 0; i < this.contacts.length; i++) {//A for loop that loops through contacts array
            if(this.contacts[i] === contactName) {
                this.contacts.splice(contactName);
            }
        }
    }
}
class Contact { //A class with the name of Contact
    constructor(name, email, phone, relation) { //Creates a constructor function that has 4 properties
        this.name = name; // The four properties below also have corresponding values
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}
//OBJECT CREATION
const rolodex = new AddressBook();//Initializes a new instance of class AddressBook, with the name rolodex
const cameron = new Contact("Cam", "cam@gmail.com", "1222", "brother"); //Initializes a new instance of class Contact
const kristen = new Contact("Kristen", "kristen@gmail.com", "123", "wife");

//FUNCTION CALLS
console.log(rolodex.deleteByName("Cam"));
rolodex.add(cameron);//invokes add() on rolodex WHICH pushes the cameron array into the AddressBook array
rolodex.add(kristen);//invokes ^^^


//LOOPS

while (true) { //starts the loop with a true statement (true is truthy)
    const choice = prompt("Would you like to Add, Print, Delete(by name/by index), or Quit?"); //declares a variable called choice that = a prompt that asks a user for one of 4 inputs
    if (choice === "add") { //Starts a conditional statement. If the types in choice is equal to add..
        const name = prompt("Enter your name: ");//Prompt 4 more times, one after the other. Ask for this information <<
        const email = prompt("Enter email: ");
        const phone = prompt("Enter your phone number: ");
        const relation = prompt("Enter relation: ");
        rolodex.add(new Contact(name, email, phone, relation));//Invokes add() on rolodex. Within add, we are creating a new instance of Contact with the accepted info.
    }
    else if (choice === "print") { //Else if the user inputs print at the original prompt
        rolodex.print(); // Invoke print() on rolodex, which will print the arrays within
    }
    else if (choice === "delete by index") {//Else if the user inputs delete at the original prompt
        const index = prompt("Enter index/name of contact to delete: ");//declare a variable called index, which prompts the user to delete an entry by index #
        rolodex.deleteAt(index);//Invokes deleteAt on rolodex, which splices the array element indicated by the user input 
    }
    else if (choice === "delete by name") {
        const contactName = prompt("Enter name of contact to delete: ");
        rolodex.deleteByName(contactName);
        console.log(contactName);
    }
    else if (choice === "quit") {//Else if the user presses cancel, or types in quit
        console.log("Reload the window if you want to add, delete, or print the address book");//Print this message
        break;//exit the loop
    }
}
