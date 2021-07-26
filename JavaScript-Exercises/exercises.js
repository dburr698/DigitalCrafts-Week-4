
// Create a Palindrome app in Javascript which will print whether a string is a palindrome or not

console.log("Lets create a palindrome app!")

function checkPalindrome(str) {
    // Find length of the string
    const len = str.length
    // loop through half the string
    for (let i = 0; i < len / 2; i++) {
        // check if first half is same as last half
        if (str[i] !== str[len - 1 - i]){
            return "This is not a palindrome."
        }
        else {
            return "This is a palindrome."
        }
    }
}

const string1 = "racecar"
const string2 = "nascar"

const value1 = checkPalindrome(string1)
const value2 = checkPalindrome(string2)

console.log("Is " + string1 + " a palindrome?")
console.log(value1)

console.log("What about " + string2 + "?")
console.log(value2)

console.log("That was easy!")

// Create an app which removes duplicates from an array

console.log("Lets try creating an app that removes duplicates from and array!")

let numbers = [1, 2, 2, 3, 4, 3, 5, 6, 7, 4]

console.log("We will start with an array of numbers.")
console.log(numbers)

// function to remove duplicates
function removeDuplicate(array) {
    let newArray = []

    //loop through the array
    for (let i of array) {
        if (newArray.indexOf(i) === -1){
            newArray.push(i)
        }
    }
    console.log(newArray)
}

console.log("Lets see if our function works.")

removeDuplicate(numbers)

console.log("We did it!")

// Create an app which returns true/false depending on if the item is in the array

console.log("Now lets create a program that returns true/false depending on if an array has an object we are looking for.")

const fruit = ["apple", "bananas", "orange", "peach", "kiwi"]
const veggies = ["asparagus", "onion", "squash", "pepper", "peas"]

function findMatch(array, string) {
    // use a for loop to search through the array
    for (let i = 0; i < array.length; i++) {
        if (array[i] == string) {
            console.log(array[i])
            return true
        }
        else {
            return false
        }  
    }

}
console.log("Our arrays are fruit and veggies")
console.log(fruit)
console.log(veggies)

let snack = "orange"
console.log("Is " + snack + " in the fruit array?")
console.log(findMatch(fruit, snack))

console.log("Is " + snack + " in the veggies array?")
console.log(findMatch(veggies, snack))

console.log("Well, the function we wrote does not seem to work properly.")
console.log("Good thing javascript arrays have a built in method to do this.")

/*
The includes() method returns true if an array contains a specified element, 
otherwise false.
*/

console.log("Is " + snack + " in the fruit array?")
console.log(fruit.includes(snack))

console.log("Is " + snack + " in the veggies array?")
console.log(veggies.includes(snack))

// Create an app which finds the largest number in an array

console.log("Lets write a function to find the largest number in an array")

const moreNumbers = [42, 3, 18, 29, 85, 49, 94, 57, 61, 37]

console.log("Our array is:")
console.log(moreNumbers)

/*
 The Math.max() function returns the largest of the zero or more numbers 
 given as input parameters, or NaN if any parameter isn't a number and 
 can't be converted into one.
 */

 /*
 The following function uses Function.prototype.apply() to get the maximum 
 of an array. getMaxOfArray([1, 2, 3]) is equivalent to Math.max(1, 2, 3), 
 but you can use getMaxOfArray() on programmatically constructed arrays. 
 This should only be used for arrays with relatively few elements.
 */
 function getMax(array) {
    return Math.max.apply(null, array)
 }

 console.log("Lets try out our function.")

 let max = getMax(moreNumbers)

 console.log(max)

// Create an app which finds the smallest number in an array

console.log("Now lets do the same thing but with the smallest number.")

/*
The static function Math.min() returns the lowest-valued number passed 
into it, or NaN if any parameter isn't a number and can't be converted 
into one.
*/

function getMin(array) {
    return Math.min.apply(null, array)
 }

let min = getMin(moreNumbers)

console.log(min)

// Create FizzBuzz app

console.log("Lets try making a FizzBuzz app.")

function fizzBuzz(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("Fizz Buzz")
    }
    else if (number % 3 == 0) {
        console.log("Fizz")
    }
    else if (number % 5 == 0) {
        console.log("Buzz")
    }
}

console.log("Lets try out our fizzBuzz function with 20")
fizzBuzz(20)
console.log("Now lets try 18")
fizzBuzz(18)
console.log("And how about 15")
fizzBuzz(15)

console.log("It works!")

// Create an app which determines whether the number is even or odd.

console.log("Lets create an app to determine if a number is odd or even.")

function oddEven(number) {
    if (number % 2 == 0) {
        console.log("This number is even.")
    }
    else {
        console.log("This number is odd.")
    }
}

console.log("Lets check our function with the number 8")
oddEven(8)
console.log("Now lets try 13")
oddEven(13)

console.log("Another success!")

//Take the array [3,4,56,7,8,1] and sort them in ascending and descending order.

console.log("Now lets sort a given array of numbers in ascending and descending order.")

let givenArray = [3,4,56,7,8,1]

console.log("The array we are working with is:")
console.log(givenArray)

/*
The sort() method sorts the elements of an array.

The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).

By default, the sort() method sorts the values as strings in alphabetical and ascending order.

This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, 
"25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce an incorrect result when sorting numbers.

You can fix this by providing a "compare function"

The compare function defines an alternative sort order. The function should 
return a negative, zero, or positive value, depending on the arguments, like:

function(a, b){return a-b}

When the sort() method compares two values, it sends the values to the 
compare function, and sorts the values according to the returned (negative, 
zero, positive) value.
*/

let ascendOrder = givenArray.sort(function(a, b){return a-b})

console.log("Ascending order should be:")
console.log(ascendOrder)

let descendOrder = givenArray.sort(function(a, b){return b-a})

console.log("Descending order should be:")
console.log(descendOrder)

console.log("Well, that's all folks!")
