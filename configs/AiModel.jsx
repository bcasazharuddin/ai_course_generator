/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
    //   history: [
    //     {
    //       role: "user",
    //       parts: [
    //         {text: "generate a course tutotrail on following detail with field as course nams , description,alogn with chapter name , about , duration :catgory :\"programming\",topic:\"python\",level:\"basic \", duration :1 hours,noofchapters:5 , in json format\n"},
    //       ],
    //     },
    //     {
    //       role: "model",
    //       parts: [
    //         {text: "```json\n{\n  \"course_name\": \"Python Programming for Beginners\",\n  \"description\": \"This course provides a comprehensive introduction to Python programming, covering the fundamental concepts and techniques essential for building your first Python applications.\",\n  \"chapters\": [\n    {\n      \"name\": \"Introduction to Python\",\n      \"about\": \"Understanding what Python is, its applications, and how to set up your programming environment.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"name\": \"Basic Data Types and Variables\",\n      \"about\": \"Learning about different data types like integers, floats, strings, and how to work with variables.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"name\": \"Operators and Expressions\",\n      \"about\": \"Exploring arithmetic, comparison, logical operators, and how to build expressions.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"name\": \"Control Flow Statements\",\n      \"about\": \"Learning about conditional statements (if-else) and loops (for, while) to control program execution.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"name\": \"Functions and Modules\",\n      \"about\": \"Introducing the concept of functions to organize code and re-use functionality. Also, exploring built-in modules.\",\n      \"duration\": \"20 minutes\"\n    }\n  ],\n  \"category\": \"programming\",\n  \"topic\": \"python\",\n  \"level\": \"basic\",\n  \"duration\": \"1 hour\",\n  \"no_of_chapters\": 5\n}\n```\n"},
    //       ],
    //     },
    //   ],
    history: [
        {
          role: "user",
          parts: [
            {text: "Generate A Course Tutorial on Following Detail With field as Course Name,Description,Along with Chapter Name, about, Duration: Category: 'Programming' , Topic : Python , Level:Basic, Duration: 1 hours, NoOf Chapters:5 , in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course\": {\n    \"name\": \"Python Programming for Beginners\",\n    \"description\": \"This course provides a comprehensive introduction to Python programming, covering fundamental concepts and practical skills.\",\n    \"chapters\": [\n      {\n        \"name\": \"Introduction to Python\",\n        \"about\": \"This chapter covers the basics of Python programming, including its history, syntax, and data types.\",\n        \"duration\": \"20 minutes\"\n      },\n      {\n        \"name\": \"Variables and Operators\",\n        \"about\": \"Learn about variables, data types, operators, and how to perform calculations in Python.\",\n        \"duration\": \"20 minutes\"\n      },\n      {\n        \"name\": \"Conditional Statements and Loops\",\n        \"about\": \"Explore conditional statements (if, elif, else) and loops (for, while) to control program flow.\",\n        \"duration\": \"15 minutes\"\n      },\n      {\n        \"name\": \"Functions and Modules\",\n        \"about\": \"Understand how to create and use functions to organize code and reuse logic.\",\n        \"duration\": \"10 minutes\"\n      },\n      {\n        \"name\": \"Data Structures\",\n        \"about\": \"Learn about fundamental data structures like lists, tuples, dictionaries, and sets.\",\n        \"duration\": \"5 minutes\"\n      }\n    ],\n   \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"duration\": \"1 hour\",\n  \"numberOfChapters\": 5\n}}\n```\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());

    export const GenerateChapterContent_AI = model.startChat({
        generationConfig,
     // safetySettings: Adjust safety settings
     // See https://ai.google.dev/gemini-api/docs/safety-settings
        history: [
          {
            role: "user",
            parts: [
              {text: "Explain the concept in Detail on Topic:Python Basic, Chapter:Variables and Data Types, in JSON Format with list of array with field as title, explanation on give chapter in detail, Code Example(Code field in <precode> format) if applicable"},
            ],
          },
          {
            role: "model",
            parts: [
              {text: "```json\n[\n  {\n    \"title\": \"Variables\",\n    \"explanation\": \"Variables are containers for storing data in a program. They act like labeled boxes where you can put information and retrieve it later. In Python, you declare a variable by assigning a value to it using the assignment operator (=).\",\n    \"codeExample\": \"<precode>name = \\\"Alice\\\"  # Assign the string \\\"Alice\\\" to the variable 'name'\\nage = 25       # Assign the integer 25 to the variable 'age'\\n</precode>\"\n  },\n  {\n    \"title\": \"Data Types\",\n    \"explanation\": \"Data types define the kind of data a variable can hold. Python has several built-in data types, including:\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"Integers (int)\",\n    \"explanation\": \"Integers represent whole numbers without any decimal points.\",\n    \"codeExample\": \"<precode>age = 25  # An integer\\n</precode>\"\n  },\n  {\n    \"title\": \"Floats (float)\",\n    \"explanation\": \"Floats represent numbers with decimal points.\",\n    \"codeExample\": \"<precode>price = 19.99  # A float\\n</precode>\"\n  },\n  {\n    \"title\": \"Strings (str)\",\n    \"explanation\": \"Strings are sequences of characters enclosed in single quotes (' ') or double quotes (\\\" \\\").\",\n    \"codeExample\": \"<precode>message = \\\"Hello, world!\\\"  # A string\\n</precode>\"\n  },\n  {\n    \"title\": \"Booleans (bool)\",\n    \"explanation\": \"Booleans represent truth values, either True or False.\",\n    \"codeExample\": \"<precode>is_active = True  # A boolean\\n</precode>\"\n  },\n  {\n    \"title\": \"Lists (list)\",\n    \"explanation\": \"Lists are ordered collections of items enclosed in square brackets ([ ]). Items in a list can be of different data types.\",\n    \"codeExample\": \"<precode>fruits = [\\\"apple\\\", \\\"banana\\\", \\\"orange\\\"]  # A list of strings\\n</precode>\"\n  },\n  {\n    \"title\": \"Tuples (tuple)\",\n    \"explanation\": \"Tuples are similar to lists, but they are immutable, meaning their contents cannot be changed after creation. They are enclosed in parentheses (()).\",\n    \"codeExample\": \"<precode>coordinates = (10, 20)  # A tuple of integers\\n</precode>\"\n  },\n  {\n    \"title\": \"Dictionaries (dict)\",\n    \"explanation\": \"Dictionaries are unordered collections of key-value pairs enclosed in curly braces ({ }). Keys must be unique and immutable (like strings, numbers, or tuples). Values can be of any data type.\",\n    \"codeExample\": \"<precode>person = {  # A dictionary\\n    \\\"name\\\": \\\"John\\\",\\n    \\\"age\\\": 30,\\n    \\\"city\\\": \\\"New York\\\"\\n}\\n</precode>\"\n  },\n  {\n    \"title\": \"Variable Naming Conventions\",\n    \"explanation\": \"Python follows certain conventions for variable names:\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"Use descriptive names\",\n    \"explanation\": \"Choose names that clearly indicate the purpose of the variable.\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"Use lowercase with underscores\",\n    \"explanation\": \"For example: 'user_name', 'product_price'.\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"Avoid using reserved keywords\",\n    \"explanation\": \"Keywords like 'if', 'for', 'while', 'def', etc. are reserved for specific purposes.\",\n    \"codeExample\": \"\"\n  }\n]\n```"},
            ],
          },
        ],
      });