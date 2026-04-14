# Javascript Advanced Function Code Examples

In class code examples
* **Higher Order Functions**
  * definition: These are functions that treat other functions like data—they can take a function as an **argument** (input) or return a function as their **result** (output)
  * analogy:A **Chef** (HOF) who follows a **Recipe** (callback function) and uses **Ingredients** (data) to create a meal
* **Closures**
  * definition: A function that "remembers" and keeps access to variables from its parent's scope even after the parent function has finished running
  * analogy: A **Bank Account** that keeps track of your **Balance** (private variable) even after you leave the bank building (the function scope is closed)
* **IIFE (Immediately Invoked Function Expression)**
  * definition: A function that is executed the very moment it is created. It doesn't wait to be called later
  * analogy: A **Self-Destructing Message** that plays immediately upon opening and leaves no trace behind (no global variables are created)
* **Module Pattern**
  * definition:  A way to organize code that hides "secret" internal data (private) while only exposing the specific "buttons" (public functions) you want people to use
  * analogy:  A **Vending Machine**—the internal mechanics and money are hidden (private), but you can use the external buttons (public methods) to get a snack
* **Rest Parameters**
  * definition: The ... syntax that allows a function to accept any number of arguments and gather them into a single list
  * analogy: A "**Catch-all**" **Shopping Bag**—no matter how many items you buy, you toss them all into one bag to carry them home
* **Generator Functions**
  * definition: Special functions (defined with function*) that can pause their execution using the yield keyword and resume later when needed
  * analogy: A **Playlist** that allows you to "Pause" after each song and only play the next one when you hit the "Next" button
