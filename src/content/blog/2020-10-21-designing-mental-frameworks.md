---

title: "Think in Frameworks, build with Libraries - Thinking about CSS in Web Development"
author: "Thomas Wilson"
date: 2020-10-21
draft: false
slug: "2020-10-20-mental-frameworks-in-design-engineering"
tags:
  - design
  - css
---

I'm a few weeks into starting a new job as a frontend software engineer, and I've been moving around our (Angular) codebases to make a few smaller changes, and bump a number of our core dependencies through a couple of major (e.g. `1.0.0` -> `2.0.0`) versions.

This caused a few visual changes, and in fixing, or at least understanding, what's happened I was rooting around a lot of the component-scoped style files (which are SASS files). I noticed that a lot of the selectors, including nested selectors, are using elements to create queries, for example:

```scss
// random-component.scss
main {
  h1 {
    font-size: 1.5em;
  }

  img {
    width: 100%;
  }

  p {
    font-size: 1.15em;
    line-height: 120%;
    padding: 12px;

    span {
      background-color: #f1f1f1;
      font-size: 1.1rem;
    }
  }
}
```

This is completely valid SCSS - it had done its job of styling `random-component`. There's a million ways to style a modern web app, plus [there's just a set amount of complexity in a design](https://daverupert.com/2020/06/tradeoffs-and-shifting-complexity/)... good CSS won't make it go away, it'll just help you manage it.

But I didn't like it. My gut feeling is that it feels very clinical - there's no notion of what exactly is _in_ `random-component`. It's easy for a computer to read, but not for a human. Sure, it's easy to know that `h1` is probably the page title, but what about that `<span>` nested in the `<p>` - is that an inline name of a product, a code sample, contact information? I wouldn't be comfortable changing this SCSS quickly - because I don't know how limited in scope that `p > span` styling is - is used _only_ for contact information, or for contact information _and_ inline code?

More technically speaking, is my concern that it ties our design specification and our DOM structure very tightly: we need a `main > p > span` in order to apply those styles. This might sound perfectly intentional, but what happens when you want to apply exactly the same styles in a `main > block quote > span` ? Do you copy-paste the code?. What happens if I add a wrapping `div`, `caption`, or another `span` before the actual for-real `span` that we want to give a background colour of `#f1f1f1`? Suddenly our implementation, i.e. our HTML/DOM structure, has changed, which has caused the need for our stylesheet to change.

At the root of these problems is a lack of abstraction between design, i.e. visual metaphors and language we're trying to show our users, and the implementation, i.e. the HTML code we're rendering into a web browser. When you're a small team, or when everyone has good functional knowledge of all the technologies involved, this is perhaps favourable - the code communicates to your audience. But what happens when someone more specialised in design, HTML accessibility, or responsive layouts comes in and starts changing things? The strict coupling of design and implementation could either a) slow down effective change, or b) cause unintended visual changes or regression.

This raises alarm bells in my little engineer brain: a change in HTML structure should not cause a breaking visual change. **The structure of the DOM is largely for computers**: to include the right information in the right format (an image, a header, a table) - and then let the browser render that out, allow accessibility tools to correctly understand it, and even allow other software to parse it to extract data.

**Design, however, is entirely and selfishly for humans**. We style on the web to make them clear and understandable to the human being who is viewing that document. There are, of course, a million other reasons why you'd style something: increase legibility, brand consistency, pure aesthetics, and so on. And when you look at some of the most widely used CSS philosophies, e.g. [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), [Block Element Modifier (BEM)](http://getbem.com/introduction/), or [Object Oriented CSS](https://github.com/stubbornella/oocss/wiki)... they're about creating opinionated names.

When I design, I am designing entirely for humans. I am creating visual metaphors, rhythm, conventions, and predictability which is linked to the content of the website, the structure of the page, the intended audience. The same applies to when I am writing CSS: I am trying to write verbally consistent, and mentally clear CSS. **But I have never designed or written CSS for HTML elements**.

When I design, I am asking questions like:

- What kind of data are we showing the user here?
- Do we show this data anywhere else in the application?
- How can the user interact with this screen, and how would I _like_ them to interact with the screen
- Where can the user go from this screen?

Things I am **not** thinking about include:

- How can I trim the user's name so there's minimal whitespace in this `a` tag?
- Will this `p` tag by `flex-grow: 1` ?
- Does this `div` tag need to inherit `display: none` from its parent?

I think of design more as a framework than a library. In technical terms, a library is smaller, focused, single-purpose bit of code or tech that does one thing. There is typically one way to do one thing. A framework, however, comes with more opinions and scope: it's possible to have a "right" and a "wrong" way of doing things (sometimes called the "blessed path").

There are definitely more framework-esque approaches to design. Tailwind CSS and other atomic- or utility-first CSS libraries are increasingly popular. And also incredibly useful or clear for a lot of people. However here we see the CSS classes bundled together into a single _component_ to encapsulate the complexity - you're making a framework based on Components, not CSS class names.

I see a lot of my role as a designer as taking various bits of tech and an understanding of a business context, and using both to create frameworks, and their associated mental models. **I think that in-house design benefits when it comes with its own mental models**. They're bigger, they're tied to a specific business/product - so they're not really sharable or useful to anybody else. But that's okay - because they're _very_ useful to the people who need them.

So that's what I've been thinking about this week: how some SCSS files made me realise that my role as an engineer and designer is to create mental models and frameworks, sometimes using tiny libraries.
