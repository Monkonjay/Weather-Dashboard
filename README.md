# Weather-Dashboard

## Table of contents

- [Overview](#overview)
 - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

This app uses CSS, HTML, and Javascript to create a password based on criteria the user specifies. The user can indicate the password length, characters types, such as alphanumeric or special characters. It also handles exception to prevent user errors during prompt input.

### User Story

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

### Acceptance Criteria

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

### Screenshot

![](./Assets/screenshot.png)

### Links

- Solution URL: [Prefessional README Generator](https://github.com/Monkonjay/Password-Generator.git)
- Live Site: [Test the Project](https://monkonjay.github.io/Password-Generator/)

## My process

### Built with

- Javascript
- CSS
- HTML5


### What I learned

I experimented with random numbers and creating/calling functions. I also worked with event listeners.  


```Javascript
generateBtn.addEventListener("click", writePassword);
```


## Author

- Website - [Robert M Greene]( https://monkonjay.github.io/Portforlio-Page/)
- Github - [Monkonjay](https://github.com/Monkonjay)
