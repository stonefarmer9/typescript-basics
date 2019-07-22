# Type Script Basics

## Description & Goals

### Description

A repo for learning typeScript. This will include testing and be based around a simple single page messaging App. Similar to the chitter or messenger repos.

### Goals

#### Textbox

 - 1. A textbox which can take a message input and display it
 - 2. Ability to edit messages once they are in place.
 - 3. Ability to delete messages once posted.

#### User

  - 1. A user can sign up.
  - 2. A user can sign in & sign out
  - 3. A users messages are associated to them
  - 4. A user can only edit/delete their messages.


### Development notes
  - Need to remember to use scripts to assign variables to HTML elements using getElementbyID.innerHTML etc
  - Need to assign onclick events in a similar way.
  - REMEMBER MVC - I have been using react so much I am forgetting my architecture Basics
            - Keep you functions and their calls in your model
            - let your view simply handle renders!!!

### Learning notes

 - In typescript we should, according to the docs use loops NOT iterator functions (there are few built in)
 - This being said, an iterator exists called toString() which converts an entire array into a string.
 - Using event handlers is different, we have to declare the type by casting it using <>, e.g, <HTMLDivElement> or <HTMLInputElement> there are a few of these and complete lists are hard to come by. We should look for these frequently as needed.
 - The similarity to JS is of course high, as TS is a module/library in  a sense.
 - Declaring type does not seem to be affecting my program so far. But I need to explore the importance of setting a type to be returned and review my current fxns to see if they benefit from it.
 
