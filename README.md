# findSearchTermInBooks

## Documentation

### Part 1: Overall Process and Decision-Making

Before desinging my implementation of `findSearchTermInBooks`, it was important to evaluate and understand the structure of the `scannedTextObj` input, which represents the book content that we will be searching through. The `scannedTextObj` can contain zero or more "book" objects, where each book has a `content` property that can contain zero or more "line" objects (where these lines represent the actual text of the book). Based on this stucture, the `findSearchTermInBooks` function will need to go through each of the book objects one-by-one, and for each book object, it will go through each of the book's line objects to check if that line contains the search term. For each line, the function will do one of two things:

1. If the line contains the search term, it will be added to a collection of all lines that contain the search term. This collection, called `result`, will be returned by `findSearchTermInBooks` once it has gone through all of the books and lines.
2. If the line does _not_ contain the search term, it will be ignored and the function will move on to the next line in the book.

Once the function has gone through all of the lines in a given book, it will move on to the next book and repeat the process until it has gone through all of the books. Throughout this process, the `result` collection of lines will be maintained, and any new lines that contain the search term will be added to the collection. When the function has gone through all of the books, it will return the `result` collection of lines that contain the search term.

One of the key design decisions is how to approach the search term matching; given the `text` content of a line, how do we determine if that line contains the search term? After considering different approaches, such as those that split up the line into "words" by splitting on spaces and punctuation, I decided to use an approach that considers a search term to be in a line if the search term is a "substring" of the line. This approach allows for flexibility in the definition of the "search term," which can contain multiple words/a phrase (eg. "however good"), or can contain only part of a word (eg. "the" will match lines that contain the word "there"). One benefit of this approach is its applicability to other languages, where, for example, words may not be separated by spaces. Users can also use this flexibility to include punctuation in their search term. Of course, this approach may also result in unwanted matches, such as the previously-mentioned case of the term "the" matching lines that contain the word "there" (though there are some ways to mitigate this, such as defining the search term as "the " with a space after it). I'm hoping that this search approach may be familiar to some users who have used functions like `Ctrl-F`/`Cmd-F` to search for a term on a webpage. Overall, I chose this approach for its flexibility in application to different languages and contexts, though there are other approaches that may be more appropriate for certain use cases.

### Part 2: Testing and Iteration

My strategy for writing tests involved first addressing the three kinds of tests listed in the prompt (positive tests that return one or multiple results, negative tests that return no results, and tests that are case-sensitive). After this, I thought about some common edge cases surrounding strings, such as behavior around punctuation or behavior for an empty string. I also thought about common edge cases for lists -- for example, the `scannedTextObj` can contain zero or multiple books, so I added tests for both of those cases. Similarly, I also added a case where the `content` array of a given book was empty. Finally, since part of my motivation for using the substring approach was to make the function more flexible for different languages (see Part 1), I wanted to include at least one test that would demonstrate this flexibility, and added a test for the 私 ("watashi"/I) character in Japanese, which is not separated by spaces from the rest of the text. I'm proud of this element of lingustic flexibility in my solution, as it will hopefully make the function more applicable to texts written in different languages or multilingual texts, and does not enforce a specific definition of a "word" or "phrase". This aspect was also the most difficult to design, since I initally thought about solutions like splitting the text into words and then checking if the search term was in the list of words. There are benefits and drawbacks to each approach and not necessarily a "right" answer, so this aspect of the problem was difficult not in the complexity of its implementation (especially with JavaScript's handy `string.includes()`), but in the complexity of its design decisions. With more time, I would have liked to add more tests for different languages with diverse syntactic structures to further test and demonstrate the flexibility of the substring approach. I would also have liked to address cases where a word/term is split across multiple lines (often denoted in English by a hyphen at the end of a line), and cases where the search term is a phrase that is split across multiple lines.

---

## Original Content from Project README

Included in this repository are files to support candidates applying for software engineering roles through the GSA's U.S. Digital Corps program.

There are three files in this repository we would like you to focus on:

1. This README.
1. `tester.html`: An HTML file that will run your code.
1. `book_search.js`: A JavaScript source code file that you should edit for your assessment submission.

## Testing your code

You will need to open the file `tester.html` in a browser to run the code that is contained in `book_search.js`. The output from running that code will appear in the browser's web developer console. Here is documentation for opening the web developer tools for Firefox:

https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html#:~:text=You%20can%20open%20the%20Browser,%2B%20J%20on%20a%20Mac

And here are the instructions for Google Chrome:

https://developer.chrome.com/docs/devtools/open/

Either should work; we tested under both on Mac and Linux.

You will submit both the HTML and JavaScript files when you are done. You should not need to edit `tester.html`. We expect all of your work to appear in the file `book_search.js`.

## Submission

Directions for submission are in the prompt. As a reminder, you should commit your code to a repository called

_firstnamelastname_-usdc-2023

If you were remarkable technologists of years past, you might name your repository

`otisboykin-usdc-2023`

or

`mariebrown-usdc-2023`

You, of course, should name your repository for the remarkable technologist of civic tech's future that you are.
