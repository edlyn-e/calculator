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

## My to-do list plan

Having a plan is key to achieving goals. In this section, I have broken down the project into smaller manageable tasks that are easier to digest and complete. This way, I can ensure the important things are covered, my thoughts are organized, and I know which tasks to allocate the most resources to minimize the risk of becoming too overwhelmed with the big picture. The project has been broken down into the 4 languages I will be using: HTML, SCSS/CSS and JavaScript. In each of these sections, a list has been compiled of the tasks I need to complete to meet the criteria.

### HTML

-   :white_square_button: Calculator should maintain it's form regardless of window size

-   :white_check_mark: Semantic coding

### SCSS/CSS

-   :white_check_mark: Keys to imitate keys being pressed in real life
-   :white_check_mark: Operator keys to have 'focus' element to communicate they have been pressed

### JavaScript

#### General:

-   :white_check_mark: calculator keys should do something when pressed (extras can wait - see below)
-   when a number key is pressed:
    -   :white_check_mark: number/s should display on the screen
    -   :white_check_mark: number/s should be saved in app's memory until 'ON/C' button is registered
    -   :white_check_mark: 0 (zero) should automatically be replaced when at the beginning of a whole number
-   :white_check_mark: there should be a 10 digit limit (11 character limit inclusive of decimal) for entries and solutions
-   :white_square_button: when the last digit on the entry is a zero (0), the zero should automatically be removed
    -   this is invalid as it would mean the user cannot enter numbers that need to end with a 0 i.e. 10, 100, etc.

#### Operator/Special Keys:

-   :white_check_mark: operator should render only once when entered regardless of how many times it is pressed.
    -   For example: " 10 ++++++++++ 20 " :arrow_right: " 10 + 20 "
-   :white_check_mark: the same applies for decimals
    -   For example: " 10 ....... 20 " :arrow_right: " 10.2 "
    -   :white_check_mark: Note: (see above) when the last digit is a zero, it should automatically be removed.
-   :white_check_mark: back arrow should backspace/delete one character at a time
-   :white_check_mark: CE (cancel entry) button should clear the current entry of numbers but not the whole equation
-   :white_check_mark: ON/C button should reset the entire entry/equation
-   :white_square_button: the app should store the last solution to the equation unless cleared or reset
    -   the app displays the solution to the equation until the user decides to chain operations or to clear display

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

## Improvements

-   Calculator starts to get a squishy height-wise when it reaches 670px high and it holds it's width so it doesn't deform regardless of width

Note: I had used a mixture of viewport height, pixels and percentages. At the time it seems like a good idea, however, in hindsight, it doesn't take into account all screen sizes. As such, if I were to do this project again, I would stick to one medium of measurement (e.g. pixels) with the exception of using percentage for my border radius to get my perfect circles.

## Resources

A tutorial that helped me further solidify my understanding of how Object Oriented Programming works in the context of JavaScript is from WebDevSimplified which can be found <a href="https://github.com/WebDevSimplified/Vanilla-JavaScript-Calculator">here</a>. Using this knowledge, I created some extra functions to meet my personal goals with the project such as preventing the user from entering more than one zero (0) if the whole number already starts with zero.

For example: "000000001" => "1"

Further to this, I had also created a limit on how many numbers the user can enter in the calculator preventing the user from entering more than 11 numbers per operand.

For example: "12345678901234567890" => "1234567890"

## Improvements

-   Currently if the user enters the decimal ( . ), it replaces the the zero. This doesn't effect the functionality of the application, however, it does create an odd interface.

    -   For example: instead of "0.123", the app displays ".123"
