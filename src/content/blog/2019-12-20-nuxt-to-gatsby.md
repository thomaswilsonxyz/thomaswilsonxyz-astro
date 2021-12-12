---

title: "Moving my personal site to Gatsby"
author: "Thomas Wilson"
date: 2019-12-31
draft: false
slug: "moving-from-nuxt-to-gatsbyjs"
tags:
  - javascript
  - gatsby
  - vue
  - react
---

A few weeks ago I was having a conversation with someone about modern web design, and we spoke about web fonts and variable fonts. In my experience, people who work in software development have a couple of hills that they will die on, if so required. For this person - the idea of not using system fonts (i.e. typefaces which are already installed on a user’s device) was completely baffling. Why are we increasing the time-to-load and packet size required to display a web page - just for a typeface. What about that horrible (re)appearing text, or worse, shifting text which happens when the browser finally loads the typeface.

System fonts, I had argued to me, are designed and considered specifically for the device viewing the page. They’re curated in a way that we, as site authors, cannot easily curate.

Ever since they introduced that tiny bit of doubt into my mind, I couldn’t help thinking that maybe I should just be using system fonts. Long story short, I rewrote my entire personal site (https://thomaswilson.xyz) from [Nuxt](https://nuxtjs.org) (a Vue.JS application framework) into [Gatsby](https://www.gatsbyjs.org) (a React.JS static site generator). It took me like to evenings and I’m happy with my decision.

Look, there were a couple of other factors in this. Like, I had just taken the jump to go freelance so I needed to move my increasing portfolio over to my professional site. I wanted to move some of my older pieces of writing from Medium onto pages on this site. I was creating a beautiful list of my [favourite albums of 2019](/albums-2019). There was a lot going on, and I was finding a lot of friction in the process of writing blog posts for this site.

## Why React, not Vue ?

Fundamentally, I have more personal and professional experience with React. I have created a lot of static sites and dynamic apps with React, I’ve used a lot of styling solutions, state management libraries, application architectures, and third-party packages. I know my way around the ecosystem, around React-ive thinking. We should be careful of using tech _just_ because we’re comfortable with it, but when it’s your personal website which no one else will see or touch - familiarity is a major benefit.

It definitely didn’t help that I was having _big_ problems getting my codebase to build on a new Laptop (a 2019 MacBook Pro, not even something obscure). It couldn’t get the Nuxt -> TypeScript build chain to work, despite hours of debugging. I’m not a dev-ops or build-chain kind of developer, but really this shouldn’t have happened, and should not have been so obscure to solve.

Additionally, at the time of writing, the proposed [V3 of Vue.JS](https://medium.com/the-vue-point/plans-for-the-next-iteration-of-vue-js-777ffea6fabf?ref=madewithvuejs.com) will contain a lot of changes to the library and recommended practices. I am excited to see these changes, and I think Vue.JS is a better web application framework out-of-the-box than React and Angular - I believe V3 will bring a lot of hard-learned lessons about web apps into the framework. However, right now I didn’t fancy re-writing most of a failing Vue app to have to re-write it again in a few months. _A la_ AngularJS vibes.

## Why Gatsby?

I’ve used Gatsby a few times to build quick/simple sites for friends. It’s very fast, both in development process, build process, and then loading times. I was looking for something I could be productive in quickly, at Gatsby was that.

I want to give a special shoutout here to the `gastby-image` package for lazy-loading images (alongside the GraphQL support and `image-sharp` library for image processing. This kind of support for blur-up images, and an easy ability to control image size at build time are incredible, and a great step forward for the modern web.

Speaking of GraphQL (smooth, I know) - I think GraphQL is going to play a big part in web development in the next 3-5 years. No, not everything is going to be re-written to be GraphQL endpoints, obviously. That would be a bad idea, obviously. Yet, as a front-leaning full-stack developer, GraphQL is powerful and expressive enough to make me take notice. Gatsby gives you a GraphQL layer to query for all your data (local files, site metadata) - the chance to get familiar with this tech is something I am appreciative of.

Recently the core-team has been pushing [Gatsby Themes](https://www.gatsbyjs.org/docs/themes/what-are-gatsby-themes/) (as I heard about on [here](http://www.fullstackradio.com/115), [here](https://syntax.fm/show/150/gatsby-themes), and [here](https://syntax.fm/show/150/gatsby-themes)). I love web design (have I mentioned that yet?) - and I love seeing the core-team take such an interesting, systematic approach to design as a core part of their framework’s architecture. It looks like I’ll be able to learn a lot about systemised design through Gatsby.

Lastly, I wanted to quickly/easily deploy my personal site on [Netflify](https://www.netlify.com) - a service which can build, deploy, and host static sites incredibly easy. It took, and I am not exaggerating, about 120 seconds to go from creating a git repo to having this website available on the World Wide Web.
