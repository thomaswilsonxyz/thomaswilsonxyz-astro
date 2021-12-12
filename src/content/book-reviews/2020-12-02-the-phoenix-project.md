---
title: "The Phoenix Project"
author: "Gene Kim, Kevin Behr, and George Spafford"
score: 4
image: "the-phoenix-project"
slug: "the-phoenix-project"
book_review: true
date: 2020-12-02
finished: 2020-11-29
draft: false
tags:
  - non-fiction
  - software
links:
  - country: "🇬🇧"
    store_name: "Amazon"
    link: "https://www.amazon.co.uk/Phoenix-Project-DevOps-Helping-Business-ebook/dp/B00AZRBLHO"

---

*The Phoenix Project*  (TPP) is a a fiction book for nerds (said the nerd, on his blog). It's a parable for people who design, build, or deploy software. I want this article to just be about the book itself, not its content. The things I, as an engineer, found interesting about  *The Phoenix Project* deserve their own post. Instead, this piece takes a more literary, or meta, look at The Phoenix Project.

TPP is set in *Parts Unlimited*, a (fictional) automobile parts manufacturing company in America. As a company, *Parts Unlimited* is carrying a great deal of technical debt and business pressures. So it's set in a very boring, but realistic, scenario - and follows some very boring (but interesting and important) discussions and events which transpire in the process of building software in *Parts Unlimited*.

TPP follows Bill, an middle-rung operations engineer - someone who is responsible for deploying software to become available to the end users (clients, stores, internal staff). Within the first chapter of the book, Bill is promoted from his comfortable job into a higher management role, which he does not want to take. The rest of the book follows Bill as he slowly realises just how bad the process of building and deploying software has gotten in his own company. The titular Project Phoenix is a long-overdue software product which the company planned and built for the last 12-24 months as a response to increased velocity from their competitors. Bill, with the help of his mysterious sensei (and potential board member) Erik, spends three hundred pages implementing solid working principles and protocols into Parts Unlimited, informed heavily by current manufacturing practices. 

It's actually quite a hard book to explain. While The Phoenix Project is *technically* fiction, in that the people and places are made up, its goal is to explain a certain (very real) way of building software - and similarly to explain the consequences of other approaches. Where other books may be concerned with exploring relationships, ideas, or language - this one wants you to understand that you *really*  need to be able to visualise work-in-progress in your engineering teams. It shows you how a lot of people in a business think about both their job in the business, and the job of the business to them.

Look, if you're a software person, this book has probably already crossed your radar. It's one of the cornerstones of modern Dev-Ops, at least in the last five years. It spawned a number of other influential books like *The Dev Ops Handbook*, *The Unicorn Project*, and *The Three Ways*. If you're not aware of this book, or what words like "Dev-Ops" and "Sofware" mean, then you probably stopped reading half way through the last paragraph (at the latest). 

My immediate reaction after finishing this book is that there should be more books like it. It is a fantastic way to introduce people to the forces and constraints in building and managing modern software. If you're inside of the software bubble, it showcases the nature and scale of business and financial forces; if you're in on the business front it introduces you to the pressures and complexities that software people are under. If you're both (like a CTO or CIO) then it will help you think about ways that communication and information flows between IT and other parts of the business. 

I build software for the web, an area famous for evolving quickly, for re-inventing the wheel with new technologies, and for being an engineer with a degree in an unrelated subject (like music production or... environmental science, for example), thick glasses, and a MacBook Pro. There's a certain culture, at least that I've experienced, that engineers should always be on the professional development hype. I don't think this is unique to web developers, or even to software engineers, but I do know it's pretty prolific in my field. This can make it very easy to jump from one project, language, framework, or trend to the next - and never stop to consider what you're building or why. It can mean reading sparse documentation, or just forging ahead and ignoring existing documentation. 

TPP brings a much more abstract level of thinking to the process of building software, and places both engineers and software within their wider contexts. Individuals are in teams, which are in departments, which are in businesses. Software projects are managed by teams, and linked to business objectives, etc. etc. TPP shows the value of thinking about these things, and introduces them without ever pointing them out.

A lot of these benefits are emphasised strongly because the book only gives you an overview of the specific technologies used. It becomes almost impossible to get lost in the weeds, the book keeps you firmly out of the garden. In fact, to continue this analogy, the book sits you down with the head grounds-keeper and makes you follow them around for a few months while they do their job.  For engineers, especially those who are closer to the strategic or planning aspects (or who wish to progress there), this is a really good thing. 

Engineering tends to attract people who are problem solvers, and a lot of the problems which are presented in TPP are large and fuzzy. For example: how does the business decide what software gets built? When can we say software is "done" or requirements have been met? How do you know who needs to be aware of your planned actions and changes to hardware (real or virtualised)?. 

You could begin to optimise tiny parts of these specific questions, maybe increasing the efficiency or throughput by 5-10% on a single part; or you could examine the system as a whole. TPP encourages tackling these big questions, and doesn't assume that people will hear you say "we would like to completely redesign this from the ground up", and the respond with "sounds great, take all the money and time that you need". These decisions are messy, both personally and for the business. 

Something that works really well in the parable format is the introduction of archetypes: certain kinds of personalities or a certain kinds of jobs. Our tiny chimp brains find these things useful for understanding other people. For example it's why I actually enjoy hearing people talk about the star signs, and it's why we have so much fun arguing who's a Carrie, Samantha, or Miranda . TPP introduces us to a relatively small (maybe 10 person) cast of people who work at a company. This is a good number: it's enough to focus on each of them, their personalities, and the way they contribute to (or block) other people. Hopefully it's enough to help the reader think, at some point, "Ah, this guy's a bit like Brent" or "Ah, she's a Patty". This is a hugely useful generic human skill which we encourage in our personal lives, but which we often assume "you'll learn it on the job" when it comes to our working lives. This is a nice little helping hand, especially if you're newer in your career or come from a smaller or less diverse team. 

While I have praised TPP for not being too technical, this does come at the cost of giving us a *lot* of names and phrases to Google if we want to actually learn the details. This is good though, it gives you the vocabulary to go away and google things that are relevant, and the chance to ignore things which aren't. It means you can read this book in several sitting and get a good overview, but also to dig deep into anything you find particularly interesting. To this end, TPP knows its role is more of a gentle introduction than a technical primer - it assumes you don't know anything, and that you may not even be able to diagnose, let alone solve, any of the technical problems. Luckily, that's largely irrelevant.

With all this said, the book certainly wasn't one that I simply couldn't put down. In parts it was tough to read. Notably some of the characters and interactions were a little *too* caricature-ish, and some of the sections invoked horrible flashbacks of people who knew nothing about software asking something impossible or telling you how to do something in a bad way. I had quite a visceral reaction to these sections, and from conversations / online reviews, I know I am not the only one.  This speaks to the authors' experience in actual workplaces, and their ability to capture the practical difficulties that enterprises might be facing. 

I've also got some other questions, primary among them: why has everyone in this book served in the military? Bill, our protagonist, has. So has his boss. And so has his teacher. And so have a couple of other people he meets. Why are all these veterans working at this failing automobile parts manufacturing company? I guess that it's a good way to signal "get to know about your colleagues' lives before their current job", but also it could be seen as "assume everyone loves routine, command chains, and discipline" (which they don't). 

Perhaps a more serious critique would be to ask why this book adopts the mystery-thriller literary practice of leaving us out of problem solving. There are plenty of "I screwed my eyes tight and thought about it, I was so close to solving it" and "He was almost onto something". It felt a little staged, but also I guess you need something to stop this book descending into some kind of technical swamp.

All in all, The Phoenix Project is a good book, mainly because it knew what it wants to be: an introduction to modern IT practices in an enterprise setting for anyone remotely involved in IT within a business. It's not got stunning language, considered character work, or a suspenseful plot - but it has a lot of clarity and charm. If you work in software, especially in a position where you can affect change, I would really recommend picking this up and reading it the whole way through - there's a very high chance that you'll find something useful to you. 4⭐
