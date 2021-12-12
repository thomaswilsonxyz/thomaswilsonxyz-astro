---

title: "Why are you like this, JavaScript? An introduction to Promises by using Fetch."
author: Thomas Wilson
date: 2020-09-06
slug: "2020-09-06-javascript-promises-introduction"
draft: false
tags:
  - javascript
  - why-are-you-like-this-js
---

Let's start with a correct, but pretty dense, definition: JavaScript Promises are a first-class abstraction for handling asynchronous actions, like:

- Fetching data from a remote API.
- Reading or writing (i.e. opening or saving) a file to the filesystem (in a server-side environment, not in a browser).
- Retrieving a [non-blurred-up](https://css-tricks.com/the-blur-up-technique-for-loading-background-images/) version of an image based on a page-scroll event.
- Using network or system utilities in native mobile frameworks like [react-native](https://reactnative.dev/) or [expo](https://expo.io).

First class? That's a programming term to say that this kind of value (i.e. Promise) can be stored in a variable or passed as an argument. Other first-class citizens in JavaScript include booleans, arrays, and functions. This means that JavaScript has an internal way of representing and understanding Promises, and we don't have to do any kind of coaxing, coercion, or pollyfilling to use them since ECMAScript2015.

Asynchronous actions? Promises represent the _eventual value_ returned from a function (or more broadly, an _action_). This means that when we ask for the value of a Promise, JavaScript can distinguish between what is the value at the time you requested, and is this the last, unchanging value of the Promise. In JavaScript Promises, we call these two states:

1. `pending` - where we've described and started the async operation, but it's not completed, or
2. `settled` - that async operation has completed (successfully or not) and the value we have isn't going to change again.

Let's take an example and show how we can use Promises. Actually, no, let's show how we can't/shouldn't use them. Imagine we own a taco truck, and we have a menu that changes every day. This means we don't want to build a fully static site, and we want to use JS to add a little dynamic behaviour. To make sure our website always shows us today's menu we:

1. Run a `fetch` function as soon as the page loads which retrieves today's Taco Menu as an array of tacos from an API end point,
2. Parse that data to extract the `id` and the `name` for each taco in that array, and
3. Iterate through this parsed list and insert new DOM Elements onto the page using any number of JavaScript libraries or frameworks.

Which in some code would look like[^1] :

[^1]: There are some problems with this example (namely that it's actually using Promises under the hood, but please ignore those)]:

```js
// ⚠️ Code is purposefully error-ful, don't run
// ⚠️ gollyilovetacos doesn't exist (yet) - this is illustrative

const menuItems = fetch("https://api.gollyilovetacos.com/v1/menu_items")
const parsedMenuItems = menuItems.data.menu_items.map(item => ({
  id: item.id,
  name: item.name,
}))
```

This is going to throw us an error (something like `Uncaught TypeError: can't access property "menu_items", fetch(...).data is undefined`). Why? No legit, it you genuinely don't know, please think about why.

It's because `fetch` returns us a Promise. The code above applies a synchronous way of thinking onto the Promise: we declare it, parse it and parse it (on those two last lines) exactly as if it was synchronous (i.e. the data would resolve immediately) - so on that last line we're looking to get the `data` attribute of the Promise, as if the Promise was an object representing the API response.

Promises are references to the _eventual values_, which is different to storing the value itself. We were trying to access the `data.menu_items` on the Promise which doesn't exist.

The only things that exist on a Promise are: `then` and `catch`. This is the most technical definition of a function: Promises are Objects in JavaScript which have a `then` function, [so says the spec](http://wiki.commonjs.org/wiki/Promises/A).

Before we dig more into promises, I think it's important to ask _why bother_? Especially when the JS community had a way of handling things like this before ECMAScript2015. Promises aren't technically anything new.

## Can't I already do that in JavaScript?

So what? Can't I just use event handlers or callback functions? Yeah, you absolutely can. In fact, these are two ways that we handled async processes in the land before promises. They're both a little bit problematic, however. Events, for example, [can fire before](https://web.dev/promises/#events-aren't-always-the-best-way) we (or rather, the control flow of our program) can assign event handlers to them. This means that can't always guarantee that an event will be handled using the event handler we define.

Alternatively you can use callback functions. Callbacks are kind of like events and handlers, only because you pass pass a function as an argument to a function (possible because functions are a first-class object in JavaScript btw, just like promises) - you don't run the risk of the event firing outside the scope of the event handler function. The problem with callback functions is they can easily get out of hand - as soon as you start chaining data through more than a couple of asynchronous functions, you can end up in [Callback Hell](http://callbackhell.com/): where you're calling callbacks in callbacks in callbacks.

Callback hell is actually a really good example of a particular kind of code smell: technically correct, but difficult for a human to parse, or interpret. We should always be thinking about how code reads to someone new, or even to ourselves if we context switch for five days or six months.

## Using somebody else's Promise: Fetch

I want to round off this introductory post by using the Fetch function: which is one of the more common ways that JS devs interact with promises.

Fetch is (browser[^2]) JavaScript's own in-built function for making HTTP requests, and it uses promises. If you've ever used `XMLHttpRequest` in browser JavaScript, it's a bit like that. If you've not, then you've not got anything to unlearn to alright, let's go.

For now, let's just get our hands on one, and not worry about what it looks like under the hood (as in, medieval fantasy hood not car hood, obviously).

This is one of the benefits of coding to an interface, and if you're really deep into JavaScript land and lost without a map I just want you to know how useful interfaces can be. If you're much newer to JavaScript Land or Software Continent, don't worry I'm just throwing some playful shade.

[^2]: The `fetch` function is [available in most browsers](https://caniuse.com/#feat=fetch). If you're going to do this in the Node /server environment, you'll probably need a package like `node-fetch` or some other polyfill.

### Sidenote: Emojis in code snippets

I like Emoji, I think they can quickly signify meaning. In the code snippets below I use the following emoji in code snippets to explain things:

- ✏️ to signify that you're about to write something, and this is what it is.
- ℹ️ to signify that I'm about to explain an output from the console.

### Back to the show

If you're on a Desktop, I want you to go to Chrome[^3] and open the dev tools (`⌘ + ⌥ + I` on a Mac, `Control + Shift + I` on Windows) and go to the Console tab. We're going to go ahead and get a random _Game of Thrones_ quote because the kind people of the internet have not only created, but made freely available, servers which will serve us wonderful data like this for free ([GitHub link](https://github.com/shevabam/game-of-thrones-quotes-api)).

[^3]: It does actually have to be Chrome, I tried on Firefox and some errors get thrown. Don't worry about them.

We're going to do all of this using Promises and I need to you shut your jaw, I know it's amazing but flies will get in there.

We'll be using an API endpoint to get a random Game of Thrones quote, it's a GET request to `https://game-of-thrones-quotes.herokuapp.com/v1/random`, and it'll return data that looks like:

```json
// ℹ️ An example quote from the Game of Thrones Quote API
{
  "sentence": "Fighting bravely for a losing cause is admirable. Fighting for a winning cause is far more rewarding.",
  "character": {
    "name": "Jaime Lannister",
    "house": {
      "name": "House Lannister of Casterly Rock",
      "slug": "lannister"
    }
  }
}
```

Actually, if you're really new here, go ahead and just copy-paste that URL into Chrome's address bar. Because it's a GET request, we don't need to worry about anything fancy. You'll get back a plain-old bit of (unformatted and un-syntax-highlighted) text with the data right there in your browser window. This is just like any other HTTP request (the same as going to `https://www.reddit.com`), it's nothing special.

## Calling Fetch

Let's crank the HackerMan dial up a notch and fetch that same data using the console in Chrome's dev tools. In the console type:

```js
// ✏️ Go to the Game of Thrones quotes server and get a random quote

fetch("https://game-of-thrones-quotes.herokuapp.com/v1/random")

// ℹ️ The console will log you something like:
// Promse {<pending>}
```

Oh.

That's actually a little disappointing, no?

So what have we done here? I'm being serious - read the gosh darn code and console output and think about what you did then try and explain it to yourself. I'm being serious, say it aloud or write it out - actually go through with the words that you would need to say.

If you did it, I'm proud of you. If you didn't then _gee golly,_ friend I wish I had your confidence in my knowledge. Here's what we did:

1. We instantiated the `fetch` function with a URL for the Game of Thrones quote API. By default, `fetch` knew that we wanted to make a `GET` HTTP request (and not a `POST` or `PUT`, etc.).
2. The console then logged out the implicit return value of our statement (which was to call `fetch`). From this log statement we can see that `fetch` returns us a Promise.

And that little `<pending>` sitting there? Why that just means it's not `fulfilled` - remember earlier where you learned about the possible states of Promises in JavaScript (`fulfilled` or `pending`. You know, like 500 words ago. That's that! An unfulfilled promise in the wild.

## Storing the Promise in a variable

So how do you actually get the quote in the response, when it comes back?. Well, we didn't store the Promise we generated in the above code-sample, which means we have no way to do anything with it - like check if it's back yet.

Let's fix this, and take a look at the settled promise value:

```js
// ✏️ Go to the Game of Thrones quotes server and get a random quote, and save it to the `quote` variable

const quote = fetch("https://game-of-thrones-quotes.herokuapp.com/v1/random")

// ℹ️ The console will log you something like:
// undefined

// ✏️ Wait a few seconds, then let's look at the value of `quote`
quote

// ℹ️ Will log
// Promise {<fulfilled>: Response}
```

Oh cool, we made the request and it returned... now what? How do we get the data out of it.

You know what's really cool about Promises? When you create them, you don't have to specify what to do on their success/failure right away. You can create the promise, then handle it later. So assuming you did the above, and you've got a variable called `quote`:

```js
// ✏️ Add the onFulfilled event handler to the promise

quote
  .then(response => response.json())
  .then(data => {
    console.log(data.sentence)
  })

// ℹ️ Will return something like:
// "Fighting bravely for a losing cause is admirable. Fighting for a winning cause is far more rewarding."
```

You know the drill: tell me what you did here. In a list, out loud, what's happening?

Oh, there's not inline list this time. There's a lot going on here that we've go to break down. Are you ready?

### 1: Call the `then` function

We take the Promise which has a _Game of Thrones_ quote in it (somewhere) and **we call the `then` function**. This is really important: `then` is a function on a Promise.

`then` is a function that takes one or two functions as arguments:

1. Argument #1 : The `onFulfilled` function - which runs when the async operation behind the promise is successfully completed.
2. Argument #2 : The `onRejected` function - which runs when (or if) there's a problem completing the async action.

Here, we're only giving it one argument, so we're only defining the `onFulfilled` part. JavaScript is cool with us leaving the `onRejected` argument as `undefined` so now everyone who didn't like that thing about Interfaces has smug little smiles on their joyous faces.

So we're calling the `then` function with one argument: an anonymous arrow function (i.e. a function that we've not assigned to a variable somewhere else) which takes one argument: which we've called `response` - which represents the HTTP Response that fetch returned to us.

### 2: The `json` function

We call the `json()` method, the return value from which is returned implicitly[^4]. The `json` function is defined on the `Body` of the `Response` object that `fetch` returned to us- so don't worry about where it's coming from.

`json()` essentially takes the HTTP response body that `fetch` got, and parses it like JSON, so that we can treat it like an Object in JavaScript.

One last thing: `json()` is an async function, so it returns another promise.

If you're curious about `json()`, [here's the MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Body/json)

[^4]: Implicit returns in arrow functions in JavaScript don't have the curly (`{ }`) braces. For example `() => 5` will return `5`, whereas `() => { 5 }` will return `undefined`

### 3: Promise Chaining

Because that first `then` function (implicitly) retuned a Promise (from the `json()` function), we can then call the `then` function on that _that_ Promise so that we can actually handle the data from the API. This is called **Promise Chaining** - because you are flowing the result of one async action into another async action handler.

All this work for a damned quote.

Promise chaining is an application of Functional Composition: the way we compose together individual functions into production lines, or conveyor belts, which take in raw data at one end, and produce formatted data at another.

So we take the result of the fulled Promise that the `json()` function invocation returned - which is a plain-old-javascript object. We refer to this as as `data` in that second `then` function - where we read and enjoy with humour or dread, or whatever it is that GRRM was going for.

This isn't the place to talk about functional composition, but if you're already familiar with JS, you can learn more about it [here](https://www.freecodecamp.org/news/function-composition-in-javascript/).

## Doing the same thing at author-time for Promises

Now that we've covered each of the individual parts of a promise, and you've either got confused and left or scrolled to the bottom, I just want to mention that normally you'll declare your `then` functions in the same place you create your Promise.

This will give you code which looks like:

```js
// ✏️ Go to the Game of Thrones quotes server and get a random quote, then process the data in-situ (so don't take it anywhere else)

fetch("https://github.com/shevabam/game-of-thrones-quotes-api")
  .then(response => response.json())
  .then(data => {
    console.log(`${data.character.name} says:`)
    console.log(data.sentence)
  })
```

## Footnotes
