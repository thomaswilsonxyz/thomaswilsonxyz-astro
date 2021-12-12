---
title: "Ship the product, build the platform"
author: "Thomas Wilson"
date: 2021-12-12T17:21:00
slug: "2021-12-12-build-the-platform-ship-the-product"
draft: false
---

Imagine you're part of a new-ish, in-house engineering team working with a legacy codebase.  How do you extend this codebase into new features while discovering and fixing Dark Patches on that same codebase's map?  I actually don't know, and myself and the rest of the engineering team at Oxwash have been working hard to think about solving this. 

My thinking about shaping and prioritising this work first coalesced around one phrase: **Build The Platform**.  This was shamelessly stolen from Steve Yegge's [Google Platforms Rant](https://gist.github.com/chitchcock/1281611).  It's long and very good, and if you're leading an engineering team I think you should read it.  

I think engineering teams should be building the platform, or operating system, that runs a business.  The platform should account for the objects/entities, and processes that comprise a business.  Things like Orders and Users.  A Platform can be thought of as a bunch of services, where each service has a single responsibility.  Like letting users register and sign up, or like recording revenue.  

Platforms help company and public users interact with the business.  We do laundry at Oxwash, so the platform is about helping us do more laundry, more efficiently.  You'll be shocked to learn running a laundry isn't as simple as it seems. 

While I've found this a fantastic tool in technical and strategic discussions, it's not great when you're talking with end-users, internal or external.  Computers and software are a means to an end for 95% of people.  To those people you can't say "this sounds like we need to alter our internal scheduling engine".  To these people you have to ask product-focused questions, like "what tools do you need to spread workload so that laundry can be done consistently without being overwhelmed?" 

This is product-level thinking.  Behind the scenes we're building a platform.  When we think about grouping, shaping, and prioritising work it's about choosing what's best for the platform.  Front-of-stage, we're shipping a product.  Many products, actually: internal and external tools, and even more if you think about tests and environments as features.

This way the engineering team can think about adding value to the business by building products which are demonstrably useful to the people who need them.  Separately, they can make the engineering team's life easier by helping more code be shipped faster and with more confidence that it's not going to go wrong. 

This addresses two core questions I find myself being asked a lot: the _what_ and the _how long_.  If you've got good answers to those questions, you're doing well (I think).

I'm currently having to re-evaluate this beautifully simple distinction.  That's caused where problems in the platform cause problems across products.  

A platform composed of separate, business-level services means that when something doesn't behave as expected, you don't always get clear and obvious signals.  You might get reports of minor unexpected behaviour here-and-there, or some weirdness occurring in some edge cases.

When these problems are in Platforms, not Products, it can make the _what_ and the _how long_ answers seem wildly disproportionate from a product perspective.  How long to fix this tiny bug?

And now you're relying on either a) engineering expertise, or b) trust to communicate the source of the problem.  You're also going to have to use Platform factors in the prioritisation of fixing these problems, which adds another layer of complexity when translating Work In Progress at the engineering-product interface.

Engineering is tough, yo.


