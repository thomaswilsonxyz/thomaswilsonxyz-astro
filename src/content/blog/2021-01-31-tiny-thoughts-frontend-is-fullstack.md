---

title: "Tiny Thought: Frontend Engineering is a Fullstack Problem"
author: "Thomas Wilson"
date: 2021-01-31
draft: false
slug: "2021-01-31-frontend-is-fullstack"
tags:
  - tinythought
  - essay
  - fullstack
---

_Tiny Thoughts_ are little (<500 word) essays. They're concise.

Hypothesis: Frontend engineering cannot exist in isolation from backend technologies.

What sparked this: Thinking about building the next generation of web software at [Oxwash](https://www.oxwash.com).

All software is either...

1. Used by a human for a human-scale (i.e. nebulous and larger) task like updating a status on social media, download a bank statement, or send a message.
2. Used by other software to complete some computer-scale (i.e. smaller and specific) task like upload a file to S3, compress an image, query a database.

Frontend software is, by definition, the bit used by humans. Good frontend software makes the human user aware of what they can(not) do, and what's going on in the system. How many unread messages do I have? What class do I have at 4pm this Thursday?

This information is communicated in the User Interface (UI). UIs are interpreted by humans. The metaphors and language developed during design then used in UI are intended solely to communicate and explain. Humans can bend, abstract, and change concepts or language. So although UIs _should_ be consistent, they can not be. You can present your blog page as a "recent articles" page, and as a list view for the `posts` table in your database. Both are true, but have different ideas about how "computery" an app is.

When a human tells the UI that they wish to _do_ something, the UI then has to talk to another bit of software. Software cannot bend, abstract, or change its ideas. A blog post _is_ a row in a database. Software has a pre-specified language of things it can do: the Application Programming Interface (API).

Frontend engineering is about working with both APIs and UIs. The skill of a frontend engineer can be proxied by their ability to design one or both. It's a skill because if you make these languages too similar, you risk a UI which is too technical or an API which is too inflexible.

A lot of engineers write code for engineers. I've seen (and written) "clean" code which prematurely optimised and abstracted. This does not guarantee a good Developer Experience (DX) when you actually _use_ the API. Nor does it make the user experience or product quality inherently better.

These are strong code smells if I'm building version 1, or the API only has one consumer.

As a frontend engineers, we have to advocate for users and software, situation depending. We should make better interfaces.

Recognising the need to design singular interfaces (APIs and UIs), and using a shared language is GraphQL's fundamental distinction from REST. GraphQL acknowledges that provider and consumer need to know about each other.

If your product _is_ an API you should think especially hard about clear concepts and language.
