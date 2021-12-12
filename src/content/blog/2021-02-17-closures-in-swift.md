---

title: "Swift Closures: Inline functions explained by a web developer"
author: "Thomas Wilson"
date: 2021-02-17
draft: false
slug: "2021-02-17-closures-in-swift"
tags:
  - swift
---

Hi, I'm Thomas. I'm a frontend engineer who's learning swift. Let's talk about _closures_ in Swift from a very (very) introductory level. I'm assuming you've got some familiarity with JavaScript. You should definitely check out [Apple's documentation on Closures](https://docs.swift.org/swift-book/LanguageGuide/Closures.html), it's _so_ much better than this page but also, like, less funny?

Closures are inline function definitions.

We have inline functions all over the place in JavaScript. Callback functions, including those in promises, are often declared in JavaScript:

```js
// Ever written an express routers?
router.use('/users', (req, res, next) => { .. })

// Ever write a promise?
fetch("https://www.google.com").then((res) => { .. })
```

Like JavaScript, Swift has functions as a first-class citizen. That means they can be passed around like any other variable. That's pretty cool, and if you come from a pure JS background you might not realise it. You might think it's pretty annoying. But it's not. Try filtering a dataframe into a subset in Python using Pandas without the `filter`-like function syntax (don't @ me).

We use closures in Swift in exactly the same use case: when we need to pass a function as an argument to a function. For example, if we are passing a custom `sort`, `map`, or `sorted` function on an array.

In the same mental model that React uses, a SwiftUI View is like a React component: it's fundamentally a function: `f(state) => ui` - UI is a function of state.

Understanding Closures in swift will help you write, and read, SwiftUI examples.

The name's a little confusing. In JavaScript a _closure_ is the scope at which a function is declared and its relationship to the surrounding variables. Coming from JS, I had a little trouble getting my head around them.

## Ground 0: Function Declarations

Defining inline, full-blooded functions in Swift is pretty standard, and could probably be intuited by any engineer with one or two languages under their hat:

```swift
func multiply(number: Int, by:Int) -> Int {
	return number * b
}
```

It would be perfectly valid syntax to pass this function around by simply referencing its identifier (`multiply`).

## Removing some syntax

But what if we don't want to have to declare named functions everywhere. Especially if we're literally just going to use it once?

In JavaScript you define the function inline with the same syntax as you would anywhere else. BUT NOT IN SWIFT. Why? I don't know, friend, by let's explore the _what_ not the _why_ first.

Swift comes with a set of **syntactical sugar** for declaring closures. Syntactical sugar is a way of making code shorter or more readable. Syntactical sugar often replaces boilerplate or verbose code, and results in identical functionality to its un-sugared sibling.

This syntactical sugar looks like:

```swift
	{ (parameters) -> ReturnType in
		// expression
	}
```

Let's give a _real_ simple example. We're going to take an array of `Int` and convert it to an `Array<String>`:

```swift
let strings: Array<String> = [1,2,3,4,5].map({ (n: Int) -> String in
	return "The number is \(n)"
})
```

## The `in` keyword

This syntax looked odd to me. The key (pun intended) to me grokking it was understanding the `in` keyword. Typically I have only seen this associated with iterators (in languages like python and JS):

```python
# This is Python code
for name in list_of_name:
	print(f"Hello, {name}")
```

In Closures, in Swift, **the `in` keyword signifies that we've reached the end of our parameter and return type. Everything after the `in` is the action function expression.**

## Implicit Types for Even Less Syntax

You better believe that's not all the syntactic sugar. There's still stuff we're going to get rid of.

Once we declare types in one place, e.g. in a variable, generic, parameter, then we don't need to duplicate that typing. We _can_ but we don't have to.

Swift is able to find the implied types elsewhere in the code, and therefore we can remove them in the closure.

In the following example the `boastfulString` variable is declared as the `Array<String>` type, so the map function doesn't need to be told twice:

```swift
let boastfulStrings: Array<String> = [10,20,30,40,50].map( { n in return "I have \(n) tacos!"})
```

By using implicit types we can get rid of two redundant parts of the closure declaration.

- **The surrounding parentheses for the parameters:** `(n: Int)` becomes `n`). We can do the same with multiple parameters: Say we had an argument that took three parameters: `(name: String, age: Int, averageScore: Float) ..` could become `name, age, averageScore ..`

- **The return type of the closure**: We know the function needs to return us a `String`, it's in the variable declaration. So `(n: Int) -> Int in ..` can become `n -> ..`

Swift is super ready for you to give it an `Array<String>` and will actually get pretty mad if you dont'. You'll run into compile-time errors with anything else.

## Implicit Returns

Man, talking of redundancies, that `return` doesn't look like it's doing much on that one line there. JS, Ruby, and Rust all have implicit return types - and so does Swift. That means you don't need to use the `return` keyword to tell Swift "this is the bed that the function should hand back".

This is more syntactic sugar: we're choosing conciseness and simplicity over explicit and verbose. Having `return` or omitting it in this example does exactly the same thing. You don't have to like this, or us it in your code. It's your choice, but you should definitely know about it. Also it's probably useful in those scenarios where you _just need something to work_:

```swift
let boastfulStrings: Array<String> = [100, 150, 200].map( { n in "I have \(n) taco!" })
```

Look how concise that statement is.

## Shorthand Argument Names: spend those \$

But we can be more concise.

What else can we get rid of?

That named parameter, `n`:

```swift
let regretfulStrings: Array<String> = [2,4,6,8].map( { "I ate \($0) too many tacos ):" })
```

These are **shorthand arguments**. Where `$0` refers to the first argument in the function. `$1` to the second argument, `$2` to the third...

Now we're _really_ favouring conciseness over explicitness.
