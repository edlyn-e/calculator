## Project: Calculator

### Overview

Project: Calculator is a project with the goal of translating an idea into a functioning application. For this project, the goal is to create a calculator based on an image of choice capable of handling basic mathematical equations using HTML, SCSS, CSS and JavaScript. The aim of the project is apply learned knowledge on real applications and demonstrate understanding of JavaScript fundamentals.

<img src = "https://user-images.githubusercontent.com/107823538/176843409-54eec99e-6298-49e2-9e4b-74bc629679d1.png" height = 325px width = 308px  />

### Goals

-   Recreate displayed image using HTML & CSS languages.
-   Correct and accurate display of numbers and operations

## Criteria

Using HTML & CSS:

-   Create a calculator to be rendered to the html page
-   Number keys 0-9
-   Operator keys ( + - / x = )
-   Display of current calculation in the calculator display
-   Decimal key

Using JavaScript

-   Render current calculator in the calculator display
-   Does not need to support order of operations
-   Handle decimals
-   :x: Should not use eval() or Function() constructor

## The to-do list plan

Having a plan is key to achieving goals. In this section, I have broken down the project into smaller manageable tasks that are easier to digest and complete. This way, I can ensure the important things are covered, my thoughts are organised, and I know which tasks to allocate the most resources to minimise the risk of becoming too overwhelmed with the big picture. The project has been broken down into the 4 languages I will be using: HTML, SCSS/CSS and JavaScript. In each of these sections, a list has been compiled of the tasks I need to complete to meet the criteria.

### HTML

-   Calculator should maintain it's form regardless of window size
-   Semantic coding

### SCSS/CSS

-   Keys to imitate keys being pressed in real life
-   Operator keys to have 'focus' element to communicate they have been pressed

### JavaScript

#### General:

-   calculator keys should do something when pressed (extras can wait - see below)
-   when a number key is pressed:
    -   number/s should display on the screen
    -   number/s should be saved in app's memory until 'ON/C' button is registered
    -   0 (zero) should automatically be replaced when at the beginning of a whole number
-   there should be a 10 digit limit (11 character limit inclusive of decimal) for entries and solutions
-   when the last digit on the entry is a zero (0), the zero should automatically be removed

#### Operator/Special Keys:

-   operator should render only once when entered regardless of how many times it is pressed.
    -   For example: " 10 ++++++++++ 20 " :arrow_right: " 10 + 20 "
-   the same applies for decimals
    -   For example: " 10 ....... 20 " :arrow_right: " 10.2 "
    -   Note: (see above) when the last digit is a zero, it should automatically be removed.
-   back arrow should backspace/delete one character at a time
-   CE (cancel entry) button should clear the current entry of numbers but not the whole equation
-   ON/C button should reset the entire entry/equation
-   the app should store the last solution to the equation unless cleared or reset

#### Extras

-   functional GT to recall grand total memory
-   current entry of equation to appear on the upper-most part of the screen to improve user experience
-   equals button to automatically 're-enter' the last operation.
    -   For example: "10 + 20 = 30" :arrow_right: "30 + 20 = 50" :arrow_right: "50 + 20 = 70" etc.
    -   Another example: "50 - 20 = 30" :arrow_right: "30 - 20 = 10" :arrow_right: "10 - 20 = -10" etc.

#### Extras that are actually extras that I hope to add:

-   add sound to key press to bring closer to life experience
-   add 'clear' sound to "ON/C" button
-   add 'erase' sound to 'BKSP' button
