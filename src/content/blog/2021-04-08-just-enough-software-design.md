---

title: "How much is just-enough system design for new apps and software?"
author: "Thomas Wilson"
date: 2021-04-08
slug: "2021-04-08-just-enough-software-design"
draft: false
tags:
  - software
  - software-architecture
---

I wrote this because of a paralysing problem in coding: how much should I design my new app’s architecture before I dive into code if I can only learn about my app’s architecture by coding it?

I’m building Dash Dot, an interval timer iOS app from scratch, and this is the problem I’ve been facing this month.

The temptation is to answer all possible questions about your app before you start coding it, but you have to resist. It’s good to have an awareness of what parts make up the whole of your system. If you don’t, you’re going to have to refactor and restructure your code frequently, especially at the beginning. But if you wait too long, if you _only_ answer questions, then you’ve got only theoretical answers.

The issue is keeping your code and your design in-step with each other. If your code gets ahead of your design, it’s a mess and you’ve got to refactor and wrangle chaos. If your design gets ahead of your code, you’ve got a monotonous boring slog to just implement (potentially over-engineering, or outdated) solutions to changing problems.

Code _is_ discovery.

Design _is_ discovery.

But they’re different kinds of learning, and you need them both. You can split the things you know about your software into two buckets:

- **Obvious**: These are properties that you can glean, or deduce relatively quickly, just by thinking through your code. Your core business entities need to be persisted, so you need a way of talking to a persistence layer, and you need a way of communicating data from your persistence layer (like a database) to your code’s logic (like an Entity). You need something to manage the publishers in your system, and you need a way for your other components to subscribe to these publishers.

- **Emergent:**: These things become clearer or more important as you start coding. You might notice that your Entity class has reached 400 lines in length, and realise you need a Factory class to take away some of that logic. You realise that you’re passing around data through a lot of initialisers - does it need to be centralised somewhere?

As you become a more experienced software engineer and architect, more things are in the Obvious bucket, and less things are in the Emergent.

The problem with Emergent Properties is that they are often Unknown Unknowns. Of course, this is a spectrum too. The more you deal with software architectures, the more you know the kinds of boundaries that become problematic.

Building the code means we learn more, but not knowing enough means the code we write is less useful. There are some lessons we can learn without coding. My advice? **Do just enough design so that you can maximise your learning by building**. How do you know how much is “just enough”? That’s the whole problem, mate.

I’ve been working on the meta skill of asking myself “is this enough design to get going?”, and then accurately answering myself. That’s what I want to share and talk about.

## The Takeaways

We’re all busy, here’s what I’d recommend:

- **Work over dogma**: Get the app building and working. Want to list restaurants near you: get that webpage running, that map rendering, and that database queried. It doesn’t matter how beautiful your abstraction if you can’t show your user a list of nearby taco vans.
- **Design and develop with your brain in mind**: I know that I like to do. I like to dive in and get started, so I have to train myself to wait and think things through for a bit before I start. You might be paralysed by the need to perfect the architecture before you even open your text editor. Whatever technique works for you, use that.
- **Good systems change fast**: The code you’re writing at the beginning of an app will either a) live forever, or b) live for the next three days. Make sure new code can be, refactored, renamed, extended, and divided easily. If it’s hard to change, you’ll do bad things or workarounds because it’s easier than doing the right thing.

## Swinging the pendulum

My thoughts and approaches to building a new codebase have swung quite a bit over the last two months. I have been developing _a la_

1. Test-driven development (TDD): build all code from the ground up with tests first. The satisfying red, green, refactor cycle is very rewarding.
2. Interpretive movement development: do what feels right in the moment, just validate with the UI, man.
3. UML-driven development: spent _literally_ hours creating classes, methods, and relationships to understand the system.

### TDD

TDD was my first approach. It’s how I learned Rails back in the day (or at least how I was encouraged to). I have often bemoaned a lack of _any_ testing in a lot of the professional projects I’ve worked on and I thought to myself “this app will have flawless testing. I will be the jealousy of the town”.  
Why was I doing TDD? Because I liked the idea of the finished product. I liked having a codebase which I _knew_ worked, it was inarguable. I had green ticks on my CLI, and the knowledge that a particular ticket or branch were complete.

I spent a couple of weeks heavily pursuing this goal. However it fell apart. When you’re building early systems and foundational code it is _highlly_ likely that things will change. In fact, I’d say it’s certain. If you’re writing perfect code on day 1 then bully for you but boy am I not that kind of engineer.

“But Thomas, write your tests first to help design your API”. Yeah, actually good criticism. I agree - I think having code _and_ tests consume the API of a class forces you to think about abstraction early. It forces you to decouple things. However, **you don’t know everywhere your code is going to be consumed**, especially on day 1. You don’t know when certain parts of the codebase are going to grow in complexity and size (and reduce in readability) and need to be split out. And now you’ve doubled the work required in a refactor: you can’t quickly and easily move code about, chop it up, rename it, etc.

“But Thomas, the tests mean that your API surface remains stable so that even when you do that kind of refactoring, the end result still acts as expected”. Right again, in theory. This is great when there is other code in your project which already depends on the stuff you’re refactoring, and you want absolute certainty that what you’re doing won’t break a consumer. But that’s just not what’s happening here. This is the first step of whittling away the wood to let the sculpture emerge, I don’t have to be delicate everywhere. I really wanted TDD to work for me here, and maybe if I was more intelligent and could preemptively know my API it would work. Or, if I was further into the project, it would let me know that I’m doing okay with my refactor.  
As a tool for writing the first bits of a new project, TDD just did not work for me.

### Interpretive movement design

Talk about a kickback reaction. Freed of the expectations of TDD and of the need to really write atomic and comprehensive tests, I just went about doing the thing every engineer loves to do: write code.
I created classes, and modules and methods and functions and utilities and it was lovely. I named things in a way that made sense in the moment and things felt right. I wasn’t constrained by anything and could get my ideas onto the screen quickly.

This is a great example of where the “software engineering as a craft” argument gains credibility. This was a swing too far away from discipline and rigour, and towards creativity and reactive-ness. There was no structure to wrangle my code into readable, clear ideas.

It didn’t force me to notice similarities in my codebase. **It didn’t encourage me to make similar solutions for similar problems, and I ended up writing code which was tightly coupled to its context**. Code should be decoupled. The canonical example for this was when I found myself with three Entity classes (the ActiveRecord-like classes which wrapped several persisted entities, like a “timer”) and three drastically different approaches to similar behaviours. I had different APIs and implementations for how I validated, persisted, updated/deleted my data - I stored different bits of information about them and under different names.

This was a bad approach - I had let myself get too excited with the joy of writing code, and hadn’t taken a step back. “But Thomas, couldn’t you have exercised a little bit of self-restraint?”. Look. Yes. I have known for a _very_ long time that I, as a person and professional, would much rather learn and discover while and through doing, rather than plan and prepare beforehand. It’s mixed-blessing. Self-knowledge isn’t about trying to change these things but rather putting myself in positions where this isn’t a problem (wisdom to know the difference, and all that).

The interpretive-movement style of development was useful. It helped patterns emerged and it also helped me _do_ a lot more than I did with TDD. The result was always on the output: I want to see this data on the screen, I want to be able to have these kinds of interaction. Unlike TDD I was thinking a lot more as a real-life human user of my software, not like a software user of my software. But it needed to be paired with a little more forethought, and something which would help me anticipate similarities before they occurred.

### UML-driven development:

Does anything feel quite so engineer-y as drawing bloody giant UML diagrams. You know the ones, with the boxes and class names and methods and arrows. They’re great. I started drawing these when I came to the next logical part of my app (i.e. how do I, as a user of the app, _do_ a timer).  
I sat down with the fantastic (and free) [diagrams.net] (formerly draw.io) tool to draft up the parts of my system, what they would be called, how they would communicate, what was similar and unifying, and what were the distinct parts.

I immediately made the decision to use this diagram as a sketch or an outline. I didn’t want to specify every method, every relationship, every movement. It was about the high-level system design, and not about the specifics. UML diagrams may feel productive, but at the end of the day they’re not code.

For me, facing myself to write this broad-outline UML diagrams was _just enough_ design to make the code I was writing feel productive. It guided the direction and structure of the work I was doing, but it was vague enough that I could split things our and change implementation details. For example in a couple of places, I leaned heavily into the _Dependency Inversion_ or _Inversion of Control_ but these didn’t need to be specified in the diagram before hand

**I knew this approach was just-enough design because before I started writing code I noticed when too much responsibility was being put in one place, and when similarities between components started arising**. Just like the frustration of UI/UX design - it was impossible to design a good system by focusing wholly on the components. Components should serve the system and architecture as a whole.
