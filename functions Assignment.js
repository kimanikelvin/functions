//Create a function that takes two arguments and returns the sum of those arguments.

function sumOfTwoNumbers (num1, num2) {
    return num1 + num2 ;
};
console.log(sumOfTwoNumbers(2,3)); // 5


// function that takes two arguments and checks if the first argument is greater than the second argument.

function greaterThan (num1, num2) {
    return num1 > num2;
}

console.log(greaterThan(50, 40)); // Yes
console.log(greaterThan(15, 30));//No


//Create a function that takes a number and returns the square of that number.

function square(number) {
    return number * number;
}

console.log(square(7));  // 49


//Create a function that takes a number and returns the cube of that number.

function cube(number) {
    return number * number * number;
}

console.log(cube(2));   // 8


//Create a function that takes a number and returns the factorial of that number.

function factorial(n) {
    if (n < 0) {
        return "Invalid command.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(0));  // 1
console.log(factorial(-8)); // "Invalid command."


//Create a function that takes a number and returns the Fibonacci series up to that number.

function fibonacci(n) {
    if (n <= 0) {
      return [];
    }
  
    const series = [0, 1];
  
    for (let i = 2; i <= n; i++) {
      const nextNumber = series[i - 1] + series[i - 2];
      series.push(nextNumber);
    }
  
    return series;
  }
  
  const result = fibonacci(10);
  console.log(result); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


  //Create a function that takes a number and returns the reverse of that number.

  function reverseNumber(num) {
    const reversed = num.toString().split('').reverse().join('');
    return Number(reversed) * Math.sign(num);
}

console.log(reverseNumber(12345));  // 54321
console.log(reverseNumber(1000));   // Output: 1
