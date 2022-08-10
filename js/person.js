'use strict';

defaultPerson = {firstname : 'John', lastname : 'Doe', age : 33}

const personDataLog = (person = {firstname : 'John', lastname : 'Doe', age : 33}) => {
    return `My name is ` + person.firstname + ` ` + person.lastname+`. I'm ` 
    + person.age + ` years old.`
};
