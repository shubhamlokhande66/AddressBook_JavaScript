var prompt = require('prompt-sync')();
class Contact {

    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString() {
        return "First name: " + this.firstName + "\nLast name: " + this.lastName + "\nAddress: " + this.address + "\nCity: " + this.city + "\nState: " + this.state + "\nZip: " + this.zip + "\nPhone number: " + this.phoneNumber + "\nEmail: " + this.email;
    }
}

let contact = new Contact("Shubham","Lokhande","Shirdi","Ahmednagar","Maharashtra",413710,7083962843,"lokhandeshubham24@gmail.com");
console.log(contact.toString());