const quizData = [
    // Interfaces
    {
        question: "Which keyword is used to declare an interface in TypeScript?",
        options: {
            a: "type",
            b: "interface",
            c: "class",
            d: "implements"
        },
        correct: "b"
    },
    {
        question: "Can an interface extend multiple other interfaces in TypeScript?",
        options: {
            a: "Yes",
            b: "No"
        },
        correct: "a"
    },
    {
        question: "What does the following TypeScript code define?\n\n interface Person {\n   name: string;\n   age: number;\n }",
        options: {
            a: "A function",
            b: "A class",
            c: "An object type",
            d: "A type literal"
        },
        correct: "c"
    },

    // Union Types
    {
        question: "What is a union type in TypeScript?",
        options: {
            a: "A type that allows multiple values",
            b: "A type that allows only one specific value",
            c: "A type that allows functions to be combined",
            d: "A type that represents an array of values"
        },
        correct: "a"
    },
    {
        question: "Which operator is used to define union types in TypeScript?",
        options: {
            a: "|",
            b: "&",
            c: "&&",
            d: "/"
        },
        correct: "a"
    },
    {
        question: "What will the following TypeScript code output?\n\n type Result = 'success' | 'failure';\n let res: Result = 'success';\n console.log(res);",
        options: {
            a: "failure",
            b: "success",
            c: "Compilation error",
            d: "Runtime error"
        },
        correct: "b"
    },

    // Type Literals
    {
        question: "What is a type literal in TypeScript?",
        options: {
            a: "A type that represents an object type",
            b: "A type that represents only one specific value",
            c: "A type that combines multiple types",
            d: "A type that represents a function"
        },
        correct: "b"
    },
    {
        question: "Which syntax is used to define a type literal in TypeScript?",
        options: {
            a: "type",
            b: "interface",
            c: "type literal",
            d: "literal"
        },
        correct: "d"
    },
    {
        question: "What will the following TypeScript code output?\n\n type Day = 'Monday' | 'Tuesday' | 'Wednesday';\n let today: Day = 'Monday';\n console.log(today);",
        options: {
            a: "Tuesday",
            b: "Monday",
            c: "Compilation error",
            d: "Runtime error"
        },
        correct: "b"
    },

    // Conditional Types
    {
        question: "What are conditional types used for in TypeScript?",
        options: {
            a: "To create unions of object types",
            b: "To create types that depend on other types",
            c: "To conditionally execute code blocks",
            d: "To handle asynchronous operations"
        },
        correct: "b"
    },
    {
        question: "Which keyword is used to define a conditional type in TypeScript?",
        options: {
            a: "type",
            b: "interface",
            c: "conditional",
            d: "conditional type"
        },
        correct: "a"
    },
    {
        question: "What will the following TypeScript code output?\n\n type Check<T> = T extends string ? 'yes' : 'no';\n let result: Check<number> = 'yes';\n console.log(result);",
        options: {
            a: "yes",
            b: "no",
            c: "Compilation error",
            d: "Runtime error"
        },
        correct: "b"
    },

    // Object Types
    {
        question: "What does an object type represent in TypeScript?",
        options: {
            a: "A type that represents a single value",
            b: "A type that represents a list of values",
            c: "A type that represents an array of objects",
            d: "A type that represents the structure of an object"
        },
        correct: "d"
    },
    {
        question: "Which syntax is used to define an object type in TypeScript?",
        options: {
            a: "type",
            b: "interface",
            c: "object",
            d: "type object"
        },
        correct: "b"
    },
    {
        question: "What will the following TypeScript code output?\n\n interface User {\n   name: string;\n   age: number;\n }\n let u: User = { name: 'John', age: 30 };\n console.log(u.age);",
        options: {
            a: "30",
            b: "'John'",
            c: "Compilation error",
            d: "Runtime error"
        },
        correct: "a"
    },

    // Modules
    {
        question: "Which keyword is used to export a module in TypeScript?",
        options: {
            a: "import",
            b: "use",
            c: "export",
            d: "require"
        },
        correct: "c"
    },
    {
        question: "How are TypeScript modules loaded at runtime?",
        options: {
            a: "By the TypeScript compiler",
            b: "By the browser's module loader",
            c: "By using a module bundler like Webpack",
            d: "By Node.js runtime"
        },
        correct: "c"
    },
    {
        question: "What is the purpose of TypeScript modules?",
        options: {
            a: "To manage memory efficiently",
            b: "To organize code into reusable components",
            c: "To enhance the performance of web applications",
            d: "To minimize JavaScript code"
        },
        correct: "b"
    },

    // Intersection Types
    {
        question: "What does an intersection type do in TypeScript?",
        options: {
            a: "Combines multiple types into one",
            b: "Selects one type from multiple choices",
            c: "Excludes certain properties from a type",
            d: "Represents an optional type"
        },
        correct: "a"
    },
    {
        question: "Which operator is used to define intersection types in TypeScript?",
        options: {
            a: "&",
            b: "|",
            c: "&&",
            d: "!"
        },
        correct: "a"
    },
    {
        question: "What will the following TypeScript code output?\n\n type A = { name: string };\n type B = { age: number };\n type C = A & B;\n let c: C = { name: 'Alice', age: 25 };\n console.log(c.age);",
        options: {
            a: "25",
            b: "'Alice'",
            c: "Compilation error",
            d: "Runtime error"
        },
        correct: "a"
    },

    // Enums
    {
        question: "What is an enum in TypeScript?",
        options: {
            a: "A new data type",
            b: "A list of named constant values",
            c: "An interface for handling errors",
            d: "A function that returns a value"
        },
        correct: "b"
    },
    {
        question: "How are enum values accessed in TypeScript?",
        options: {
            a: "By using enum.keys() method",
            b: "By using enum.get() method",
            c: "By using enum[index] syntax",
            d: "By using enum.value property"
        },
        correct: "c"
    },
    {
        question: "What will the following TypeScript code output?\n\n enum Direction {\n   Up = 'UP',\n   Down = 'DOWN',\n   Left = 'LEFT',\n   Right = 'RIGHT'\n }\n let dir: Direction = Direction.Left;\n console.log(dir);",
        options: {
            a: "'LEFT'",
            b: "'Left'",
            c: "Compilation error",
            d: "Runtime error"
        },
        correct: "a"
    },

    // Async Programming
    {
        question: "What does async/await do in TypeScript?",
        options: {
            a: "Allows asynchronous function calls to be written in a synchronous style",
            b: "Blocks the main thread until a function call completes",
            c: "Provides a way to create threads in TypeScript",
            d: "Ensures that functions return promises"
        },
        correct: "a"
    },
    {
        question: "Which keyword is used to define an async function in TypeScript?",
        options: {
            a: "async",
            b: "await",
            c: "function",
            d: "Promise"
        },
        correct: "a"
    },
    {
        question: "What will the following TypeScript code output?\n\n async function getData() {\n   let result = await fetch('https://jsonplaceholder.typicode.com/posts');\n   let data = await result.json();\n   return data;\n }\n getData().then(response => console.log(response));",
        options: {
            a: "The fetched data",
            b: "Promise object",
            c: "Compilation error",
            d: "Runtime error"
        },
        correct: "a"
    },

    // Additional TypeScript Concepts
    {
        question: "What is the purpose of 'readonly' in TypeScript?",
        options: {
            a: "To make a property writable",
            b: "To enforce immutability of a property",
            c: "To define a property as optional",
            d: "To define a property as required"
        },
        correct: "b"
    },
    {
        question: "What does the 'as' keyword do in TypeScript?",
        options: {
            a: "Converts one type to another type",
            b: "Defines an alias for a type",
            c: "Creates a new instance of an object",
            d: "Performs type checking"
        },
        correct: "a"
    },
    {
        question: "How are type assertions different from type conversions in TypeScript?",
        options: {
            a: "They are synonymous terms",
            b: "Type assertions are runtime checks, while type conversions are compile-time operations",
            c: "Type conversions are runtime checks, while type assertions are compile-time operations",
            d: "There is no difference between them"
        },
        correct: "b"
    },
    {
        question: "What does the 'unknown' type represent in TypeScript?",
        options: {
            a: "A type that can be any value",
            b: "A type that cannot be determined",
            c: "A type that must be explicitly cast",
            d: "A type that is only used for functions"
        },
        correct: "b"
    },
    {
        question: "Which operator is used for non-null assertion in TypeScript?",
        options: {
            a: "!",
            b: "?",
            c: ":",
            d: "&"
        },
        correct: "a"
    },
    {
        question: "What is the purpose of 'never' type in TypeScript?",
        options: {
            a: "To define functions that never return",
            b: "To define functions that always return undefined",
            c: "To indicate that a value will never be assigned",
            d: "To define a variable with an empty value"
        },
        correct: "a"
    },
    {
        question: "How are tuple types defined in TypeScript?",
        options: {
            a: "Using an array with predefined elements",
            b: "Using an object with key-value pairs",
            c: "Using a type keyword followed by square brackets",
            d: "Using the 'tuple' keyword followed by element types in brackets"
        },
        correct: "d"
    },
    {
        question: "What does the 'optional chaining' operator ('?.') do in TypeScript?",
        options: {
            a: "Allows optional method calls on objects",
            b: "Performs optional type checks",
            c: "Performs optional null checks",
            d: "Allows optional property access on objects"
        },
        correct: "d"
    },
    {
        question: "What is the purpose of using 'namespace' in TypeScript?",
        options: {
            a: "To organize code into logical groups",
            b: "To define private variables",
            c: "To encapsulate class methods",
            d: "To declare module dependencies"
        },
        correct: "a"
    },
    {
        question: "What is the output of the following TypeScript code?\n\n let num: number = 10;\n console.log(num.toFixed(2));",
        options: {
            a: "10",
            b: "10.0",
            c: "Error",
            d: "undefined"
        },
        correct: "b"
    }
];
let index = 0;
let correct = 0;
const total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']");

const loadQuestion = () => {
    if (index >= total) {
        return quizEnd();
    }
    reset();
    const data = quizData[index];
    questionBox.textContent = `${index + 1}) ${data.question}`;
    for (let option in data.options) {
        document.getElementById(`option${option.toUpperCase()}`).nextElementSibling.textContent = data.options[option];
    }
};

document.getElementById("submit").addEventListener("click", function() {
    const data = quizData[index];
    const selectedOption = getSelectedOption();
    if (selectedOption !== null) {
        highlightAnswers(data.correct, selectedOption);
        if (selectedOption === data.correct) {
            correct++;
        }
        index++;
        setTimeout(loadQuestion, 1000); // Load the next question after a short delay
    } else {
        alert("Please select an option before submitting.");
    }
});

const getSelectedOption = () => {
    for (let i = 0; i < allInputs.length; i++) {
        if (allInputs[i].checked) {
            return allInputs[i].value;
        }
    }
    return null;
};

const reset = () => {
    allInputs.forEach(input => {
        input.checked = false;
        input.nextElementSibling.classList.remove('correct', 'incorrect'); // Remove any previous highlighting
    });
};

const highlightAnswers = (correctAnswer, selectedAnswer) => {
    allInputs.forEach(input => {
        const label = input.nextElementSibling;
        if (input.value === correctAnswer) {
            label.classList.add('correct');
        }
        if (input.value === selectedAnswer && input.value !== correctAnswer) {
            label.classList.add('incorrect');
        }
    });
};

const quizEnd = () => {
    document.querySelector(".container").innerHTML = `
        <div class="col">
            <h3 class="w-100"> Congratulations! You scored ${correct} out of ${total} </h3>
            <h3 class="w-100"> BEST OF LUCK FOR YOUR QUIZ!!</h3>
        </div>
    `;
};

// Initial load of the first question
loadQuestion();