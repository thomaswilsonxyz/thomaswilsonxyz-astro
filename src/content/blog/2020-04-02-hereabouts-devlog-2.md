---

title: "Hereabouts devblog #2 - March 2020"
author: Thomas Wilson
date: 2020-04-01
draft: false
slug: "2020-04-02-hereabouts-devblog-2"
tags:
  - hereabouts
---

Hi, I’m Thomas Wilson, I’m a web and mobile engineer building [Hereabouts](https://www.hereabouts.app) - an app that’s like a tour guide if the tour guide was like [Roman Mars](https://99percentinvisible.org) after three beers. This is a devblog where I talk about my progress building that app. Also I’m very sorry, Roman, you’re one of a handful of people who I genuinely aspire to be like please don’t take me seriously.

---

Well March 2020 has certainly turned out to be quite the introduction to working on a side project. It’s the month that the UK (and Europe, North America, etc.) started nationwide lockdowns to prevent and slow the spread of Covid-19. Social distancing, self isolation, and quarantine are all in full swing.

Imagine starting a side project based almost entirely on being able to travel somewhere new, or even just go outside and walk around. It’s a strange time, but everyone’s talking about it being a strange time, and honestly we’re all just trying to find a new temporary normal. So with that in mind, here’s an inconsequential update on Hereabouts.

I’m still pretty undecided on the format of a devblog, which makes this one a brain dump, but definitely the kind of brain dump that you should read.

## Notable things

- The Covid-19 Pandemic.
- By September-October, I want something that I would be happy for someone to download, and happy to ask them to pay for. Assuming there’s still an App Store to host on, a functioning economy, cities to visit, or people to buy it. Okay that was my last Coronajoke. And that, my last coronamonteau.
- Decided on running development in 4-6 week cycles. This is based off what I’ve read from Basecamp, but also a general understanding about how long things _actually_ take to design and build to a certain quality.
- Started building more formal documentation (in Notion and Figma) for use case + market summaries, user journeys, business entities, and visual design language.

* Purchased hereabouts.app domain, built a [simple landing page](https://www.hereabouts.app) (ReactJS on NextJS, hosted on Zeit’s Now), and created a mailing list that so far only my friends (and not even my parents (?!)) have signed up for (SendGrid, NowJS API routes, and CloudFlare worker).
* Started building the app. Started in Swift, moved to React Native. Enrolled in Apple Developer Programme (arguably too early - it’s a motivator)

## What an Emotional Rollercoaster, feat. The Covid-19 Pandemic

This past month has been one of the most varied emotional months I’ve had in a long time. I my emotions to be strong in number and force at the best of times, but imagine quitting your job to go freelance in what is possibly the worst time in 30 years.

I am not a stranger to self-doubt. I often think I am about to get fired, when in reality I have never been fired, or come close to being fired. Maybe I have and I’ve just instinctively played the “you can’t fire me I quit” card.

The big situation here is the SARS-COV-19 pandemic that’s needling through the globe right now, causing unnecessary loss of life and bringing an economic recession and a wake of social crises. What a time to be alive.

Can you imagine finally deciding on a side project you want to carry through to production/publication, and then a [global pandemic breaks out](https://www.who.int/dg/speeches/detail/who-director-general-s-opening-remarks-at-the-media-briefing-on-covid-19---11-march-2020). Not great for the global community or economy, or for an app specifically built around the idea of being outside. This comes at at time where most of the advice from European governments is to stay inside, with [increasing](https://www.bloomberg.com/news/articles/2020-03-14/spain-s-coronavirus-cases-jump-36-to-5-753-deaths-rise-to-136) policing and [enforcement](https://www.aljazeera.com/news/2020/03/europe-edging-total-coronavirus-lockdown-200316131203376.html).

I’ve had to seriously think if building this app remains a good idea, and I think it is. I really struggle with shiny-things-syndrome, where I flit between and around ideas and never commit fully to something. Hereabouts is the first side project in 3-4 years that I decided to see through seriously _and then did something about_. It’s the only one that made it past a line in a note on my iPhone. It’s not the only idea I’ve got rolling around in my phone’s notes, and it’s probably not even the best one. But it’s one that excites me: it’s an app I would like to have and use, and it’s something that I think can offer value to people. It’s also going to teach me a lot about launching an app in the real world.

Yes, a pandemic with strong government response _is_ a good mitigating factor - March 2020 has truly been wild, and I don’t think anyone would blame me if I let the idea go to find something more stable. Like a Zoom alternative or remote yoga teaching software. Or just a Zoom alternative without extremely concerning privacy policies. I’m sure video conferencing can’t be that hard, there’s no reason that all the alternatives are terrible to use.

What’s more, the current economic climate has seen travel and leisure industries basically tank out, and it’s looking a lot like many people this year won’t be able to take holidays. Some of those holidays will be honeymoons, or retirement cruises, or long-overdue personal relaxation time. This pandemic is making a lot of us suffer in a lot of ways, but I digress. There’s a [global recession](https://www.theguardian.com/business/2020/mar/15/prepare-for-the-coronavirus-global-recession) [threatening](https://www.economist.com/finance-and-economics/2020/03/05/a-recession-is-unlikely-but-not-impossible) and although central economic bodies are all trying to act to mitigate these factors, there’s a chance that people don’t have money to spend.

I am aware that I don’t want to continue under the guise of [hustle porn](https://www.inc.com/serhat-pala/alexis-ohanian-says-hustle-porn-is-most-dangerous-trend-in-silicon-valley-heres-how-to-eradicate-it.html) - I don’t want to see this hardship and fight against it _just_ because it’s a struggle and it makes a great narrative. I don’t want to think of myself as a company that was shaped by the COVID-19 quarantine and panic. I don’t really see that as an influential factor in what I’ve decided to do, or how. What’s more, I don’t think end users really care about how or when an app was made, especially as people will (hopefully) start to forget what things were like during these times within months of them ending.

The primary reasons I want to continue development of this idea, at least for now, is how early in development I am and how this remains a side-project. I have other full time work that lets me pay the bills and I don’t _need_ this to take off. I’ve given this project about 6 months, taking it to the end of summer (September-is) which was always going to be just off-peak for summer for tourism. But it looks like we’re not going to get peak tourism anyway on account of the global lockdown. I want Hereabouts to be an app that could be used by someone who already lives in a city, and as a cheap day activity for anyone. I think there remains a market for the app, and the possibility that I learn some interesting things from releasing it to a smaller audience.

In short: I’m going to continue with development. It’s just a weird part of the Hereabouts story - that the worst pandemic in literally 100 years strikes just as I get going with it. What impeccable timing.

## Thinking about development cycle and Topic Lock

I disagree with common practice of two-week sprints and an endless backlog as the best way to manage and drive software development. I think it’s short sighted and makes you feel comforted by how busy you are and how much work you have to do. If something’s important, it will keep raising itself as important, and I shouldn’t move on without it. If something _feels_ important but I forget about it quickly, and didn’t latch on and flesh it out - it probably wasn’t actually that important.

This is especially true for right now: creating the idea for a new product, and then putting that into concrete UIs and code. What _is_ Hereabouts, what does it do, and how is it used? These questions are the most rabbit-hole kinds of questions, because there’s a lot of edge-cases and what-ifs that can found or ruin a feature idea.

I want to feel I have the freedom to go down these rabbit holes because they are important and I don’t want to spend time and energy justifying that when I could spend that energy exploring them.

To counteract the (very real) chance that I spend all the time designing or thinking of possibilities, and no time actually building them, I am thinking about how I can integrate the [Double Diamond](https://www.designcouncil.org.uk/news-opinion/what-framework-innovation-design-councils-evolved-double-diamond) process which is a needlessly buzzword-y way of saying that I am consciously separating out the processes of a) generating as many ideas as I can, and b) paring these ideas down to find the useful or recurring ideas.

Alongside that, I am thinking about Topic Lock. This is something I first heard from CGP Grey said in the [Cortex podcast](https://www.relay.fm/cortex/95), in regards to his work as an independent content creator. It’s influenced from the way movie studios produce movies, and the Kanban project methodology: have a fixed number of things that are in progress.

I am striving to build a way of working that allows me to create and shape ideas, but also then critically examine the ideas individually and as a collective.

This is getting abstract and I’m only a month in, so I’m going to save this for another time. But look - I’ve been thinking about how to create a process and environment that works well for me, my brain, and the product.

## User Journeys, Internal Documentation, and Design Language

This is my party, I’ll do what I want, and I want to start by talking about the tools I used to do this work because I find that more interesting than the work itself. I’m not proud of this part of me, but I love well designed, cool, and hipster apps.

[Notion](https://www.notion.so) is hard to describe: it’s like a Google Doc meets a database. I actually wrote about [why I gave up using Notion](https://thomaswilson.xyz/blog/back-to-bear) back in August so this is a little embarrassing - but I stand by what I said: I cannot use Notion to write long form prose, like this. I am writing this blog post in [Bear](https://bear.app).

Notion does let me capture my thoughts in a much more organised way, compared to plain text and markdown. I’m not going to go into detail about how I use Notion specifically, but I am using it for:

- Writing that I don’t intend to share but need to refer back to, e.g. business models, elevator pitch. Like a classic Wiki.
- Articulating and formalising the goals I have for a particular development cycle.
- Keeping track of the business entities or key “things” in the code base, like what is a “Tour” and “Place”, etc.
- Noting down research for both the content of Hereabouts (like interesting places), and the meta research around running a business.

Notion gives me freedom but also constrains me a little more than free form text. This is useful when I just need to get my goals and intentions down, and not spend hours worrying about how it looks. Notion’s got great design by default, kudos.

They’ve also fixed the navigation by Smart Keyboard on the iPad THANK GOODNESS. Not being able to move around in a sensible way without using my slow meaty dumb fingers on the screen was infuriating. I didn’t spend dozens of hours of my life forcing vim’s philosophy into my own world view to have it ruined like this.

### User Journeys and Design Language - Another blog post (in Figma and Notion)

I’ve done a _lot_ of work this month doing visual and UX design. The results, and how I manage these parts of my thinking and planning can’t / shouldn’t be described here because this is a devblog. I’ve made a note to write about them in more detail later.

## React Native

I wrote a more in-depth post about [why I choose React Native](https://thomaswilson.xyz/blog/2020-03-22-why-i-chose-react-native-for-app-in-2020), also on my blog. So yeah, I’ll be writing this thing in TypeScript, using React Native, and the [Expo platform](https://expo.io).

Let’s take a whole paragraph to acknowledge how good a job the Expo team are doing. Honestly, such brilliant tooling.

I started working on this project in Swift: first with SwiftUI then moving to UIKit.As someone’s who’s more fluent in frontend engineering (3 years full-time professionally), having to debug some of the problems and limitations of the new SwiftUI API wasn’t productive. I simply don’t have the frontline experience of using Swift in a production environment that made debugging and interpreting documentation a viable option.

Moving to UIKit very briefly made sense, but SwiftUI is the future of development on Apple platforms so why waste time working through that.

I’d like to come back to SwiftUI in a couple of months/years, when it’s out of beta. I hear good things about it, and it sounds like they’re bringing in an opinionated declarative philosophy. I’m excited to see how this affects the UI development community at large.
