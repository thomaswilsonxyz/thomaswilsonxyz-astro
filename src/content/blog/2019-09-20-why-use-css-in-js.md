---
author: "Thomas Wilson"
title: "What is CSS-in-JS and why do people keep using it?"
date: 2019-09-20
slug: "what-and-why-use-css-in-js"
draft: false
tags:
  - css-in-js
  - javascript
  - frontend
---

The elders tell us of a time where you would build websites by literally writing your `.html` files. If you wanted to add some styles, you’d write them in a `.css` file and then `<link rel="stylesheet">` the two together. So you’d write your entire site in semantic HTML, about whatever it is people did back then (like mammoth hunting or pyramid building) and then you would `ftp` that onto your server, and other people could view it. At least as long as they could fight off polio or resist rebelling against the bourgeoisie. Maybe you’d go out and celebrate at the tavern afterwards, but actually that one sounds pretty relevant today.

## Component-orientated architectures arrive

In the modern (but still terrifying) world of 2019 - HTML, CSS, and JS remain three central tenants of the internet: HTML providing content, CSS styling it, and JS adding functionality on top of everything. The way we get the result of these technologies, HTTP, has remained pretty constant too.
However, at some point people started to realise that writing _just_ HTML could make it difficult to edit parts of their website. Say you have a navigation header, and you want to add a new page to your website. Well now you need to go through every `.html` file, find the navigation header, and add an item. And what happens if you miss one file by accident?
This is the problem which facilitated the evolution of component-centred architecture: a component being some pre-defined visual element, simply a “thing” on a website: a tweet in a list of tweets, a list of currently trending articles on BBC News, a user’s avatar image.  
This lead to building websites as a set of components which you compose together, as opposed to single monolithic pages. This practice evolved, and more responsibility was handed over to JS and other technologies. People started writing Single Page Applications (SPAs), and static-site generators increased in popularity - where we could define and update components in a single place, and see them updated across our site without having to delve into the nested HTML ourselves. It doesn’t matter if the site is actually just a single JS function or runtime which hooks into the browser’s URL (e.g. a SPA written in React or Vue) or if it generates a set of HTML files (a static site generator). Component-based architecture is the practice of breaking out our visual element by their role, not their location.
Pairing components with external data sources, like in a CMS or a databases, means that a website does not need to be rebuilt or re-made whenever a new product is added to a store, or the price of an item changes. It has given a lot of power to people in the business, but who weren’t developers. And it’s freed up developer time to focus on more developer-y things, like complaining about meetings and fixing their parents’ wi-fi.

## Where does CSS come into this?

Look, the point I’m making is that modern web development considers a web page as composed of many components, which can be shared across pages (and even sites). But the way we do styling with CSS didn’t immediately go through a similar revolution. In a lot of cases we were still left with one global CSS file, which we would simply `<style ref=“stylesheet>` into our application.
This isn’t to say it was still 1998 - we developed build chains and pre-processors - tools which would generate CSS, but gave us more advanced features - like inheritance and extension, and functions and variables. This made it much easier to update CSS, and quicker to write in general.
Despite this, these processes often output a single global stylesheet. In the past couple of years, some web developers have created technologies which remove this separation between components and styling - allowing developers to declare styles in the same way they declare components.

## Why not CSS-in-CSS?

(First off, let’s acknowledge the fact that it’s now completely valid to specify that I’m talking about CSS as in a `.css` file - how weird is web development?)
CSS is incredibly powerful, with a lot of nuance. It’s a great technology and some people really love it - it can make websites beautiful and fast and just joyful. Despite what I’m about to say, I really like CSS, and I’ll use it by default where it makes sense.
Despite this, there are very legitimate criticisms being levelled at CSS. Principally, these criticisms are due to the way that CSS is authored, managed, and generated - and the sprawling, dynamic, and unpredictable HTML content tree which is tightly coupled to it.
There are a couple of problems which emerge from these large, single, often append-only stylesheets. These problems become more apparent, and costly, as an application reaches a certain size, and exists in the real world, where maybe several developers are authoring styles and creating different bits of the website. Even as a solo dev on side projects, I’ve felt some of these negatives:

- **Name collision:** Different parts of you application share the same logical name, like `.navigation-item` - but is that the nav item in your footer, side bar, or header ? All of a sudden, css is vying to apply the same styles to three three separate navigation items, which you might not necessarily want to look the same. This can lead to…
- **Over-specific selectors:** To combat the above, you might start chaining your selectors (e.g. `header > .navigation-item`) which is fine, until you have to chain 2, 3, 4 selectors - at which point re-structuring your HTML introduces visual regression and style changes, because your css nesting no-longer matches your HTML.
- **Keeping styles in just-in-case:** It can be surprisingly hard to know which styles in css you are using, especially when paired with the above: it’s easy to see if a single class name is being used, but much harder to know, reliably, at a glance, if you have `header > .navigation > .navigation-item > .navigation-icon`. Imagine the complexity you add in when you start dynamically rendering elements with a JS library, or just using JS to add or remove classes from elements. This can lead to bloated CSS files which no one wants to touch or modify, for fear of introducing unforeseen regressions. Which is basically…
- **Unpredictable side effects from modifying or deleting code**: This affects the developer experience and process - well-architected software presents a clear process for change, refactoring, or extension. When you cannot make changes with the knowledge of what you’re going to affect, or at least _where_ you’re going to affect - it is hard to maintain and extend software into the future. You end up with long, append-only style sheets, and worse, the cursed `!important` tag.
- **Source order specificity**: With more of our client-side applications being rendered, loaded, and managed by JS frameworks or libraries - we cannot reliably predict the order which CSS styles will be loaded into the DOM, because it may be loaded only for a specific page - either intentionally, or from automated code-splitting. Files which load later have higher _source order specificity_ and can override styles declared earlier. So styles can be unpredictably overridden by the way our users use the application.

## CSS-in-JS as a solution ?

As the name suggests, CSS-in-JS is the process of using JS to generate valid CSS style syntax. This is opposed to managing their styles by creating separate `.css` files (or `.less` and `.scss` for that matter). It is typically defined alongside a component, e.g. the JSX in a React component, or the template in VueJS. This is strongly related to the component-first architecture of modern web development - an extension of the idea that everything about the View of the application (capital V as in MVC) should be defined in one place - not two (a .js file and a .css)
It’s briefly worth mentioning here that CSS [can be scoped](https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e) to single files - meaning that not all of this functionality is specific to JS. However, the ability to generate and modify styles with the JS language offers a lot of the power of CSS to the hands of those without intimate knowledge of the CSS syntax. Dangerous indeed.
CSS-in-JS is _not_ a singly library or package, and it is not an agreed syntax. A number of approaches have emerged from the community to address this problem. Some example libraries include:

- [styled-components](https://www.styled-components.com)
- [JSS](https://cssinjs.org/?v=v10.0.0-alpha.25)
- [Emotion](https://emotion.sh/docs/introduction)
- [Styled-System](https://styled-system.com)

## Why do people keep using CSS-in-JS ?

Fundamentally: **It’s a component-first way of thinking**. it takes the way modern web development thinks about web pages, and the widgets on them - and applies that philosophy to way we write our styles. It gives us a one-to-one relationship between our components, and their styling declaration (as opposed to one global stylesheet and many components.) This means your selectors aren’t traversing the DOM to find the `.navigation-item` that they _really_ mean.
This makes it easy and familiar to think about, and it **centralises our visual code into one place**. This is a nice philosophical benefit, but it pragmatically helps us by constraining where a set of styles are used. This means **they could be edited or deleted with more certainty that we aren’t about to accidentally change styles across the DOM**.
For me, the strongest advantage of CSS-in-JS is the addition of functionality from a programming language, like JS. **This allows you to set styles based on global variables (e.g. a theme) or local state and props, and use functions and conditional statements.** This adds a huge range of flexibility and functionality, without having to manually add or remove class names from a DOM element. This drastically reduces the cost of creating complex or delightful user experiences (e.g. having cards hover when they’re under the cursor, or a button glow if it’s toggled on) without tightly coupling it to specific css classes or selectors. UI libraries and frameworks should abstract the author from the implementation details (i.e. managing the DOM), and CSS-in-JS fits this philosophy.
When we declare styles at author time, our library of choice (e.g. styled-components) handles the transformation into valid CSS, and inserts it into the DOM. As part of this, the library will likely generate a unique (hashed) classname, this means **developers don’t have to worry about creating unique, or strictly-structured class names for their css** - they can just declare styles, and assume they will be correctly scoped.
What’s more, **the build chain which does all of these is integrated into the existing build process for the website**. We can keep our JS project as purely JS, and don’t have to worry about building and bundling `.scss` or `.less` files.

## Articles I found useful

I came across a couple of really nicely written articles when I was researching this piece. I’d recommend them if you’re curious:

- [Why I Write CSS in JavaScript](https://mxstbr.com/thoughts/css-in-js/)
- [What actually is CSS in JS?](https://medium.com/dailyjs/what-is-actually-css-in-js-f2f529a2757)
- [The State of CSS 2019: CSS-in-JS](https://2019.stateofcss.com/technologies/css-in-js/) - Just pretty cool
