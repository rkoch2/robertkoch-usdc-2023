/**
 * RECOMMENDATION
 *
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 *
 * The Developer Tools in Chrome are available under the "..." menu,
 * futher hidden under the option "More Tools." In Firefox, they are
 * under the hamburger (three horizontal lines), also hidden under "More Tools."
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for.
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */
function findSearchTermInBooks(searchTerm, scannedTextObj) {
  /** You will need to implement your search and
   * return the appropriate object here. */

  // defining the result object, which will be populated with the search results
  let result = {
    SearchTerm: searchTerm,
    Results: [],
  };

  // check that search term is not empty (return empty result object if it is)
  if (searchTerm === "") {
    return result;
  }

  // for each of the books in scannedTextObj, get the content and isbn
  for (const book of scannedTextObj) {
    let isbn = book.ISBN;
    let content = book.Content;

    // for each line book's content, get the page, line, and text
    for (const contentItem of content) {
      let page = contentItem.Page;
      let line = contentItem.Line;
      let text = contentItem.Text;

      // if the text contains the search term, add the search result to the result object
      if (text.includes(searchTerm)) {
        let searchResult = {
          ISBN: isbn,
          Page: page,
          Line: line,
        };
        result.Results.push(searchResult);
      }
    }
  }

  return result;
}

/** Example input object. */
const twentyLeaguesIn = [
  {
    Title: "Twenty Thousand Leagues Under the Sea",
    ISBN: "9780000528531",
    Content: [
      {
        Page: 31,
        Line: 8,
        Text: "now simply went on by her own momentum.  The dark-",
      },
      {
        Page: 31,
        Line: 9,
        Text: "ness was then profound; and however good the Canadian's",
      },
      {
        Page: 31,
        Line: 10,
        Text: "eyes were, I asked myself how he had managed to see, and",
      },
    ],
  },
];

/** Example output object */
const twentyLeaguesOut = {
  SearchTerm: "the",
  Results: [
    {
      ISBN: "9780000528531",
      Page: 31,
      Line: 9,
    },
  ],
};

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that
 * output to the console. We've provided two tests as examples, and
 * they should pass with a correct implementation of `findSearchTermInBooks`.
 *
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
  console.log("PASS: Test 1");
} else {
  console.log("FAIL: Test 1");
  console.log("Expected:", twentyLeaguesOut);
  console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn);
if (test2result.Results.length == 1) {
  console.log("PASS: Test 2");
} else {
  console.log("FAIL: Test 2");
  console.log("Expected:", twentyLeaguesOut.Results.length);
  console.log("Received:", test2result.Results.length);
}

// ----- Added Unit Tests -----

/** Checking that findSearchTermInBooks returns the correct result */
const test3result = findSearchTermInBooks("now", twentyLeaguesIn);
const test3expected = {
  SearchTerm: "now",
  Results: [
    {
      ISBN: "9780000528531",
      Page: 31,
      Line: 8,
    },
  ],
};
if (JSON.stringify(test3expected) === JSON.stringify(test3result)) {
  console.log("PASS: Test 3 (Single Result)");
} else {
  console.log("FAIL: Test 3 (Single Result)");
  console.log("Expected:", test3expected.Results);
  console.log("Received:", test3result.Results);
}

/** Checking that findSearchTermInBooks returns no results when there are no matches */
const test4result = findSearchTermInBooks("hello", twentyLeaguesIn);
const test4expected = {
  SearchTerm: "hello",
  Results: [],
};
if (JSON.stringify(test4expected) === JSON.stringify(test4result)) {
  console.log("PASS: Test 4 (No Results)");
} else {
  console.log("FAIL: Test 4 (No Results)");
  console.log("Expected:", test4expected.Results);
  console.log("Received:", test4result.Results);
}

/** Checking that findSearchTermInBooks is case sensitive */
const test5result = findSearchTermInBooks("THE", twentyLeaguesIn);
const test5expected = {
  SearchTerm: "THE",
  Results: [],
};
if (JSON.stringify(test5expected) === JSON.stringify(test5result)) {
  console.log("PASS: Test 5 (Case Sensitive)");
} else {
  console.log("FAIL: Test 5 (Case Sensitive)");
  console.log("Expected:", test5expected.Results);
  console.log("Received:", test5result.Results);
}

/** Checking that findSearchTermInBooks returns multiple results */
const test6result = findSearchTermInBooks("and", twentyLeaguesIn);
const test6expected = {
  SearchTerm: "and",
  Results: [
    {
      ISBN: "9780000528531",
      Page: 31,
      Line: 9,
    },
    {
      ISBN: "9780000528531",
      Page: 31,
      Line: 10,
    },
  ],
};
if (JSON.stringify(test6expected) === JSON.stringify(test6result)) {
  console.log("PASS: Test 6 (Multiple Results)");
} else {
  console.log("FAIL: Test 6 (Multiple Results)");
  console.log("Expected:", test6expected.Results);
  console.log("Received:", test6result.Results);
}

/** Checking that findSearchTermInBooks includes punctuation */
const test7result = findSearchTermInBooks("Canadian's", twentyLeaguesIn);
const test7expected = {
  SearchTerm: "Canadian's",
  Results: [
    {
      ISBN: "9780000528531",
      Page: 31,
      Line: 9,
    },
  ],
};
if (JSON.stringify(test7expected) === JSON.stringify(test7result)) {
  console.log("PASS: Test 7 (Punctuation)");
} else {
  console.log("FAIL: Test 7 (Punctuation)");
  console.log("Expected:", test7expected.Results);
  console.log("Received:", test7result.Results);
}

const test8result = findSearchTermInBooks("Canadians", twentyLeaguesIn);
const test8expected = {
  SearchTerm: "Canadians",
  Results: [],
};
if (JSON.stringify(test8expected) === JSON.stringify(test8result)) {
  console.log("PASS: Test 8 (Punctuation)");
} else {
  console.log("FAIL: Test 8 (Punctuation)");
  console.log("Expected:", test8expected.Results);
  console.log("Received:", test8result.Results);
}

/** Checking that findSearchTermInBooks returns results for multiple books */
const percyJacksonIn = [
  {
    Title: "The Lightning Thief",
    ISBN: "0786856297",
    Content: [
      {
        Page: 1,
        Line: 1,
        Text: "Look, I didn't want to be a half-blood.",
      },
      {
        Page: 1,
        Line: 2,
        Text: "If you're reading this because you think you might be one,",
      },
      {
        Page: 1,
        Line: 3,
        Text: " my advice is: close this book right now. Believe whatever lie",
      },
    ],
  },
  {
    Title: "The Sea of Monsters",
    ISBN: "0786856866",
    Content: [
      {
        Page: 1,
        Line: 1,
        Text: "My nightmare started like this.",
      },
      {
        Page: 1,
        Line: 2,
        Text: "I was standing on a deserted street in some little beach town.",
      },
      {
        Page: 1,
        Line: 3,
        Text: "It was the middle of the night. A storm was blowing. Wind and rain",
      },
    ],
  },
];

const percyJacksonOut = {
  SearchTerm: "this",
  Results: [
    {
      ISBN: "0786856297",
      Page: 1,
      Line: 2,
    },
    {
      ISBN: "0786856297",
      Page: 1,
      Line: 3,
    },
    {
      ISBN: "0786856866",
      Page: 1,
      Line: 1,
    },
  ],
};

const test9result = findSearchTermInBooks("this", percyJacksonIn);
if (JSON.stringify(percyJacksonOut) === JSON.stringify(test9result)) {
  console.log("PASS: Test 9 (Multiple Books)");
} else {
  console.log("FAIL: Test 9 (Multiple Books)");
  console.log("Expected:", percyJacksonOut.Results);
  console.log("Received:", test9result.Results);
}

/** Checking behavior when the search term is an empty string */
const test10result = findSearchTermInBooks("", percyJacksonIn);
const test10expected = {
  SearchTerm: "",
  Results: [],
};
if (JSON.stringify(test10expected) === JSON.stringify(test10result)) {
  console.log("PASS: Test 10 (Empty String)");
} else {
  console.log("FAIL: Test 10 (Empty String)");
  console.log("Expected:", test10expected.Results);
  console.log("Received:", test10result.Results);
}

/** Checking behavior when the book content is an empty array */
const emptyIn = [
  {
    Title: "Hi I'm empty book",
    ISBN: "1234567890",
    Content: [],
  },
];
const test11result = findSearchTermInBooks("hello", emptyIn);
const test11expected = {
  SearchTerm: "hello",
  Results: [],
};
if (JSON.stringify(test11expected) === JSON.stringify(test11result)) {
  console.log("PASS: Test 11 (Empty Content)");
} else {
  console.log("FAIL: Test 11 (Empty Content)");
  console.log("Expected:", test11expected.Results);
  console.log("Received:", test11result.Results);
}

/** Checking behavior when the book array is empty */
const emptyBookArray = [];
const test12result = findSearchTermInBooks("hello", emptyBookArray);
const test12expected = {
  SearchTerm: "hello",
  Results: [],
};
if (JSON.stringify(test12expected) === JSON.stringify(test12result)) {
  console.log("PASS: Test 12 (Empty Book Array)");
} else {
  console.log("FAIL: Test 12 (Empty Book Array)");
  console.log("Expected:", test12expected.Results);
  console.log("Received:", test12result.Results);
}

/** Checking behavior for Japanese text */
const kokoroIn = [
  {
    Title: "こゝろ",
    ISBN: "9780895267153",
    Content: [
      {
        Page: 1,
        Line: 1,
        Text: "私は其人を常に先生と呼んでゐた。",
      },
      {
        Page: 1,
        Line: 2,
        Text: "だから此處でもたゞ先生と書く丈で本名を打ち明けない。",
      },
    ],
  },
];
const kokoroOut = {
  SearchTerm: "私",
  Results: [
    {
      ISBN: "9780895267153",
      Page: 1,
      Line: 1,
    },
  ],
};
const test13result = findSearchTermInBooks("私", kokoroIn);
if (JSON.stringify(kokoroOut) === JSON.stringify(test13result)) {
  console.log("PASS: Test 13 (Japanese Text)");
} else {
  console.log("FAIL: Test 13 (Japanese Text)");
  console.log("Expected:", kokoroOut.Results);
  console.log("Received:", test13result.Results);
}
