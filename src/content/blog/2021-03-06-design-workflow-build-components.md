---

title: "The Frustrating Mismatch of Design by User Journey but Build with Components "
author: "Thomas Wilson"
date: 2021-03-06
draft: false
slug: "2021-03-06-design-workflow-build-components"
imageUrl: "preview-images/question-mark-exclamation.png"
tags:
  - design
  - ui
---

How do you design a good app?

It's a charmingly amateurish question, but I've spent the past five years primarily trying to design and build web apps and I don't know the answer.

I regularly get sick of looking at my current and old designs and ask "why don't these look like a competent adult made them, and can I make them actually good?". I'll typically then do two things:

1. Go to Dribbble and meander around until I find things that look vaguely like what I want and then get frustrated that these mockups are so simplified and informationally un-dense they're only partly applicable to my current situations, and
2. Do a web search for "how to design good UI", then get given countless "seven tips to improve your UIs" and "UX fundamentals for UI design" that will tell me that a UI is basically just colour, spacing, and typography which, yeah true, but is incredibly unhelpful in the abstract.

These are two vastly different types of data: one is a finished product for an often fictional or simplified use case, and the other are abstract design principles. Mushing those things together to understand, critique, and then be able to produce your own design _is_ the skill of becoming a better designer. It's not intuitive or easy and you can't just search for the answer on the internet.

## Build in Components

But as an engineer I want to, because that's how I find a _lot_ of my answers. That and doing it wrong the first time.

Being an engineer I build web, and more recently mobile, interfaces. Both of these technologies have been moving towards the component-model: building self-contained little _things_ or _widgets_ that are composed together to make bigger things, like screens and applications. React, Vue, Svelte, and Angular all use this model. SwiftUI introduced it for iOS and Swift, and Jetpack Compose (seems) to do the same for Android and Kotlin.

This component model is declarative. I'm not 100% convinced I actually know what _declarative_ means because I am not a clever man, but broadly I think of it as `f(state) => ui` - which is to say that the UI is a function of state. Given some data, this is what the UI will look like. You get to say "when the data looks like this, do that with it". For example if an item in a list is selected, make sure this text is underlined, or this string in the cart should be the total cost of every item in the cart with the `£` character put in front of it.

Components as a first class citizen in building UIs lends itself really well to encapsulation: a component should care only about the data that it needs to present information to the user, and contains the complexities of any internal interactions or logic. It doesn't need to be aware of anything else.

Let's illustrate this with a button (I'm sorry, I know it's tired and over-worked, but it's simple). Imagine we have a Button component that only takes two bits of data (like a prop, or an input, or an argument): a `label`, the text that goes in the button, and an `onClick` function to describe what happens when a user presses/clicks the button. The benefits of encapsulation work for everyone:

1. The button only has to do what it needs to do. It doesn't care if a label comes from an internationalisation (i18n) file, a database, or generated dynamically when the user does something (like added above £100 worth of products to their cart).
2. The page / larger component (like a molecule in Atomic Design) doesn't need to contain boilerplate code about rendering and event-handling for buttons. If I had four buttons on a screen (which, let's just be clear, _would_ be madness) the page they're on doesn't need to worry about anything but finding a label and an event handler.

These are really great benefits for the engineers building UIs and web software. They can make code easier to understand, more consistent throughout the codebase, and more separated. These are not guaranteed (I can make any code into spaghetti, honestly it's a super power) but they are easier to achieve with this component-first idea of software architecture.

## Design in User Journeys

But that's not how the user of a UI thinks about buttons at all. Nor is it helpful when you're trying to design your app. The buttons on a screen let our users, guests, customers, patients, staff, _whoever_ achieve something. And as a designer thinking about the specifics of the button is part of the job, but it can't be done in isolation to every other part of the web page.

It's so easy to find good advice on building components in code. There are tricky conversations to be had about them, about how to extend them and manage them as the complexity grows, but that advice is pretty specific and concrete. It is so much harder to get someone's opinion on figuring out how a button integrates with the Sign Up page, a "buy now" button on a product card, a "add two factor authentication" button, or a "request help" button. These are questions about the purpose and intention of the app you are building.

We are taught to build at the focused and specific level of components, but to design with with _so much more_ information in our working memory. What screen am I on, how did I get here, and where can I go? How do I know if my data is saved or (in)valid? What does it look like if I'm browsing versus editing? If these questions aren't answered properly it creates this weird jilted UI and UX experience as I move around a product. Seeing a mocked up screenshot from a single state of a single page on Dribbble is never going to help me answer these questions, no matter how pleasing the curves, shadow, and pastel colours.

## The Frustration

I have experienced (and witnessed) the bike shedding meets deer-in-the-headlights moment of designing a new app or website where you're terrified to make decisions about the label placement on your forms. It genuinely stops me from making decisions and moving forward, especially at the beginning, when your app is an idea and a mostly blank Figma file.

The form inputs aren't important, but they are when they represent 50% of the screens you have currently designed. I have been terrified to move on from designing my sign up screen until I have perfected the form and form input components. Because I was so aware that they're components: they'll be used everywhere. They are perfect lego blocks and if I get them wrong here _everything_ will look terrible.

My fixation (or obsession) with designing by components has limited my ability to focus on anything bigger. But as a user, my fixation on the flow through an application will stop me noticing anything smaller. Yeah, the onboarding was confusing, and I can't figure out how to access my profile page but _holy smokes_ have you seen the border radius on the cards and the top navigation? They match perfectly!

No matter how perfect your button is, it's not going to salvage an app with competing or confusing Calls to Action, with disjointed screen layouts, mixed metaphors, or obscured ideas. Similarly, the UX conventions of colour, spacing, and typography won't help you answer these questions. Yet if you don't build a system around these basic elements, the visual clarity and rhythm of your UI as a whole _will_ suffer.

Similarly, if you don't build your codebase with well encapsulated components, you're going to have a real hard time modifying and extending your app's code.

Designing an app demands that we ask questions about the app, not the components, that we see the entire blueprint. Building components demands we exclude all thoughts about the app at large and focus solely on this little corner, this one detail. This is the titular frustration of having to build in components, but design by user journey and flow.

That's it. That's the end of the article and I'm sorry I can't close with a unifying theory, or three step framework to build perfect UIs every time. I just want to build actually good apps, and it's difficult, ya know? The context switching between design and developer brain is hard.
