---

title: Why are you like this, JavaScript? Taking a look at JavaScript's single threaded nature.
author: Thomas Wilson
date: 2020-08-23
slug: "2020-08-23-why-are-you-like-this-javascript"
draft: false
tags:
  - javascript
  - why-are-you-like-this-js
---

Sometimes you hear something so often that you don't really hear it anymore. One of those things for me is words to the effect of "How does this JavaScript code even run?". I choose to interpret this generously as "How does JavaScript itself run", and not "how does this hot garbage code you wrote run?".[^I really hope I don't write as much hot garbage JavaScript as I used to]

There's a lot of ways we could describe JavaScript (including some really colourful adjectives), but objectively it is an asynchronous, single-threaded, dynamic programming language. These characteristics, which are deliberate design decisions, are responsible for a lot of the quirks, gotchas, and design patterns that make being JavaScript developer tricky for anyone just getting started. Luckily it's almost never tricky for anyone else (_he lied_).

For example, have you written and run JavaScript code which:

- Ran in the browser, got in an infinite loop somewhere, and prevented all interactions with the web page (including the ability to close a tab or the browser)?
- Fetched data from another server, tried to access the data, and got an `undefined` or `Promise` related error?
- Written server-side JS with a callback/promise chain for data processing/cleaning and had your code start, but not finish, its execution of this chain - leaving the request hanging for a response.

These are all common problems which I have encountered, realistically, hundreds of times by now. They're each a rough result of the design of the JS run time, i.e. how we go from JS you wrote to the commands being executed on the computer. I don't want to talk about JS run times / environments now, so don't worry about the details. Just know that the JS code you wrote is executed by the computer in a way that makes these kind of errors possible, and even likely, if you're not thinking like JS wants you to.

Over the past couple of weeks, I've been trying to understand why JS wants us to think in this way. I've been asking JS "why are you like this?" and "did I do something to upset you? I'm sorry if I did, but please, this really shouldn't be `undefined`".

## A brief aside: on JS's dynamic-ness

A brief side note before we get into the rabbit hole here: JavaScript will take an awful lot of mistreatment and still run. That's largely because it's a dynamic language (i.e. it isn't typed), and also partly because it'll try and do whatever it can with whatever types of data you give it. It's famous for it: (`false == 0` or `'30' + 10 === '3010'`).

But you better believe that you're renting this flexibility from JavaScript, because at some point it's going to `undefined is not a function` you and act like it did nothing wrong - largely because _it didn't_.

This is an entirely different type of problems and design decisions in the language, which I'm just not going to talk about in this article.

## JavaScript is Single Threaded

JavaScript is single threaded, that means that while something is on the [call stack](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack) - JavaScript is unable to run anything else. Any function that gets called by anything in our JS code is going into the call stack - it's how the internals of our app (specifically the interpreter) knows where it is, and what it needs to do now and next.

So if something long-running is being done on the call stack, like a really long iteration function, then no other functions can be called until that iteration has finished. Say that we have a list of 1 million movies as a massive array of objects, and we want to get all their titles:

```js
const movies = [{title: 'A Knights Tale', rating: 10}, ..]
const titles = movies.map((movie) => movie.title)
```

This `map` function will go into the call stack, it will start executing. So it'll go to our `movies` array, and for each item in it, run our little _anonymous function_ (i.e. function without a name), and then start populating the call stack with a million of these references:

```js
// THIS IS ALL PSEUDO CODE, PLEASE GOLLY PLEASE DON'T TAKE LITERALLY

// Find the specific `movie` from the `movies` array
const movie = {
  title:  "A Knights Tale",
  rating: 10,
}

// Get a reference to the anonymous function
function(movie) {
  return movie.title
}

// Then: Add the above function to the call stack

```

This operation will block everything else from running until it's finished. This might sound _sort of_ bad, but if we're often running JavaScript in the browser, that "everything else" can include like: rendering a web page, or allowing a user to interact with the page or browser tab.

At this point you'd want to ask why the lingua franca of the web would allow such a thing to happen. And that's a great question. Unfortunately, this objection doesn't do anything to dethrone JS and its utility in the web. The burden falls on us as engineers to design around this single-threaded ness.

## JavaScript is Asynchronous and Event-Based

So, if JavaScript is single threaded, and blocks everything else from running until it finishes a function - how does it handle asynchronous functions? For example: what happens when I fetch some data remotely (e.g. an updated list of movies) - will it stop everything else from rendering?

This is potentially a really bad design flaw. Especially as the modern web - which can't seem to help itself from making too many HTTP requests. Imagine if every time you wanted to read a BuzzFeed article you had to wait for bit of content, every external tracker, and every ad to load before anything appeared on the screen. It'd be a nightmare and you'd never find out which kind of Frappicino you are.

JS solves this problem, by having an internal understanding of [asynchronous actions](https://eloquentjavascript.net/11_async.html). In the previous example, where we wanted to get a million movie titles (for some reason) - our code is _synchronous_ - there is a simple [Control Flow](https://www.computerhope.com/jargon/c/contflow.htm): the code had a correct understanding that "here are a million items, I need to do this one thing to each of them, one at a time". And thus the single JS thread was occupied with those million and one tasks.

To give an async example similar to an example above, let's try and retrieve a list of movies across ten genres, from a single API:

```js
// NOTE: This code is illustrative, and not perfect, pls ignore edge-cases and separation of concerns problems

// Imaginary API
const MOVIE_URL = "https://www.mymovieservice.com/api";

// A list of genres
const apiEndPoints = [
  {
    label: "action",
    path: "/action-movies",
    movies: []
  },
  // Imagine 9 others
  ..
];

// Go and fetch remote data and update the array
const updatedEndPoints = apiEndPoints.map((endPoint) => {
  return fetch(`${MOVIE_URL}/${endPoint.path}`)
    .then((res) => res.json())
    .then((moviesData) => {
      return {...endPoint, movies: moviesData.movies}
    });
});


```

An intuitive understanding of asynchronous behaviour would be for JS to see a call to `fetch` and understand that it needs to:

1. Make an HTTP call to the specified endpoint;
2. Recognise that a response will come back _at some point_, so put this function aside, and get on with something else;
3. Recognise when the data from `fetch` returns, and then do something with it (in this case, format it with `.json()` then run the anonymous data handler function to add the movies

It's worth noting here that JS allows us to have this notion of asynchrony _without_ asking us to manage multiple threads. This is the trade-off we are making with JS's design: we can have asynchronous behaviour relatively simply in our code, without having to manually manage memory threads.

This post is already too long, I think, and I don't want to get into the specifics of how this works - but understanding that JS is able to make these kinds of decisions at run time, and when they're made - is an important part of writing faster, less blocking JavaScript.
