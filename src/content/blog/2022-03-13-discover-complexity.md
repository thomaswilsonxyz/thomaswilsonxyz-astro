---
title: "Discover Complexity"
author: "Thomas Wilson"
date: 2022-03-13T10:10
slug: "2022-03-13-discover-complexity"
draft: false
---

Code changes frequently, and good code is able to change easily.  That means that code must be both simple for other humans to interpret (so that the code is changed, not duplicated or added on to), and anti-brittle (so that changes don’t require rewrites, or re-considerations).

An (understandable) response to this need for change is to predict the need for change by forecasting changes to customer, business, or engineering requirements. 

Discover complexity, do not invent it. 

Discovered complexity is unearthed in the actual use of the software by the intended user, in the intended use case.  Do what you can to gather and distribute this feedback to everyone involved in designing, building, and releasing the product.

Alternatively, complexity is invented.  It does not come from real-world use.  It is a guess.  It is speculative.  Pay attention to solving problems which *could* happen, because it dilutes focus on solving the *actual* problem.  

Invented complexity takes time and attention away from solving real, demonstrated problems now.  It obscures the meaning or focus of the code you’re writing, so you’ll pay another cost when future engineers (inevitable) attempt to understand it. 

Solving for non-discovered complexity can lead to things like: 


- Adding a lot of flexibility to functions, even though they're only used in one case
- Creating a lot of indirection in layers of software, even though there’s only one actual path in use
- Naming things with less tangible names to accommodate future siblings, even though you’re building an only child.

