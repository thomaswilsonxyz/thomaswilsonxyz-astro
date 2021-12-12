---

title: "Why are you like this JavaScript? JavaScript Runtimes and Engines"
author: Thomas Wilson
draft: false
book_review: false
date: 2020-11-01
slug: "2020-11-01-js-runtimes-and-engines"
tags:
  - javascript
  - why-are-you-like-this-js
---

Sometimes you keep hearing words but you're not actually sure what they mean, but you're too afraid to ask and keep forgetting to Google it. For me, two of those phrases have been "JavaScript runtime" and "JavaScript engine". I've never studied Comp Sci at uni, and I've never practically needed to be able to define either of them.

If that sounds similar to you, then buckle up cowboys and cowgirls because you're about to go "oh, yeah, cool" a lot at some pretty basic distinctions that you probably intuitively knew but didn't have the words for.

I think there's innate value in understanding more about where and how your code actually runs. It's rarely directly applicable, but at some point in writing a large-enough app in JS, especially if it's full-stack, you're going to need to know these things. It'll also help you understand why Node.JS and client-side JS are different, and appreciate the overall portability (if not the performance) of JS in the wider context of software engineering. Or throw it out there in your next engineering interview and sound smart and informed, and hope they don't ask any deeper questions 🤷‍♀️

## TL;DR

The JS runtime is the place where JS (or its machine-readable counterpart) is actually run. The browser is a runtime and it's how JS has access to things like the `window` object. Server-side JS runtimes also exist, like Node.JS.

Engines are the bit of software which take our source code, e.g. the human-readable JS code, and transform them to computer-executable instructions. There are a number of ways that engines can do this, some of them use Just in Time (JIT) compilation, but JS is an interpreted (i.e. non-compiled) language.

## JavaScript Runtimes

I just assumed that the JS runtime was the browser or server where the JS actually ran, i.e. where the commands (like `console.log('hello')`) were executed. And I was right, but there's a little more detail to this answer.

JS runtimes get a bit of flack for causing bad performance, whatever that generic term means. Take this [critique from Sebastian De Deyne](https://sebastiandedeyne.com/going-deep):

> We’re adding heavy runtimes to support multiple platforms instead of staying close to the metal, and we pay the price in performance.

This criticism brings us a little closer to a useful definition of a Runtime: it **includes the libraries and frameworks which act as the intermediary between the code you've written, and the operating system it is running on**. So if we take this mental model a little further, a runtime is the abstractions that sit between the bare metal and the running program ([StackOverflow source](https://softwareengineering.stackexchange.com/questions/304427/what-really-is-the-runtime-environment)).

Programming languages haven't always needed, or come with, a runtime. Some of the earlier languages, like FORTRAN and COBOL have such a limited set of features and syntax that the language _is_ the runtime (at least conceptually). The difference between the source code (i.e. the code written by an author) and the machine-executable compiled code which are created from the source code, is pretty minimal in these languages. The code you write details explicit manual control over memory allocation, garbage collection (and a bunch of other features) that the source code doesn't need to bring in anything else. The computer can run that file just fine by itself. Obviously this shifts the role of a program from not only its intended computation, to include also the memory allocation and logistics around these computations.

The C programming language is a good example of when we bought in runtimes. C came with the ability to call other libraries or functions to achieve certain things. For example, the `malloc` function allows an author to allocate memory and get a pointer to its location. `malloc` is defined in `stdlib` of C - in a separate C file to the one the author is currently writing. The `stdlib` library defines exactly _how_ memory is allocated through and the correct address is returned. This allows us, the authors, to focus on the logic of our code specifically, and not to have to re-write a memory allocation function in pretty much every bit of C code we write. This speeds us up, reduces errors, creates conventions... all good things in software engineering at scale.

That means that if we were to write a simple C script which invoked `malloc`, when we came to execute our code it would need to also have some way of gaining it access to the `stdlib`, as `malloc` is defined there, not in our code. The `malloc` function is _not_ syntax in the language, in the way that `if`, `char`, and `static` are. The runtime of our C script would include access to the `malloc` function. These libraries would need to be _linked_.

Subsequent languages, famously Java and C#, came with a very heavy runtime - their Virtual Machine (VM). This is what allows both languages to boast portability between architectures and OSs - the source code runs inside of a VM, and the VM abstracts away all the complexity of interacting with the bare metal.

To return to JavaScript briefly, this is how browser-executed JS has access to objects like `window` - which we never define, and which wouldn't be defined if we ran our JS in a non-browser like environment (e.g. Node.JS). **The runtimes of browser Javascript provide our source code with access to these APIs and libraries. They're not part of the core JS language**, like `Function` and `Object` are.

When we talk about JavaScript runtimes we're talking about the environment in which the executing code lives and works.

## Javascript Engines

A JS engine is what gets us from the human-readable JS code into a computer-interpretable set of instructions. E.g. `const name = 'Thomas'` isn't an instruction that an operating system or browser would understand. Instead, we need some way of letting our program find and manage memory, link things together, etc.

Let's take a moment to just cover some technical terms:

- **Source Code** is the original code in JS, e.g. written by a human author. It may also be valid JS which has been minified by a build step.
- **Machine Code** is a set of instructions for CPUs for loading memory, performing specific tasks etc. Machine code is not human readable ([wikipedia](https://en.wikipedia.org/wiki/Machine_code))

Different JS engines go from source code to machine code in different ways, which vary with their target environment and can affect the performance of a script. For examples, the [V8](https://v8.dev/) engine compiles to machine code, whereas [Rhino](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino) compiles JS to Java classes. Let's not talk about the implications of this - just assume that they're comparable but different... ya know?

**The JS engine is what lets our JS code just... run**. Engines are responsible for several low-level machine operations which are necessary on the journey from source code to machine code. They load the script into the computer's memory, link all the necessary libraries together so all parts of the program have access to each other (remember runtimes?), and then find the entry point (i.e. the instructions in the `index.js` file) and start executing those.

Unlike Java or C#, JavaScript is not a compiled language. Compiled languages are transformed to machine-readable code _before_ the program is started or executed. Instead, **JS is an interpreted language**. This means that the code isn't compiled or prepared ahead of execution. It's building the runway as it takes off. The role of the JS interpreter is to take the source code and call the instructions on the processors and CPU of the computer where the code is running.

This is the source of one of the most defining "features" for novice and experienced JS authors alike, the `cannot read property X of undefined` error, caused by the fact that we have tried to access a property (`X`) of something which does not exist (`undefined`). This is a classic kind of error which a compiled language may be able to catch - by checking for potentially undefined variables. But we're getting off track.

With that said, the highly performant V8 engine uses Just in Time (JIT) compilation of JS to machine code. This means the JS source code _is_ compiled, but as close to its execution as possible. I'm not going to go into JIT compilation here because it's a little long, but [Mozilla have a great summary on it](https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/).

So yeah - the engine is what takes our `.js` files, and allows a computer to do the relevant computer-y things with them. And here we all are, trying to remember which way round the Boolean logic works on `filter()`.
