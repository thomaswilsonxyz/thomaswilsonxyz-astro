---

title: "Deploying an MVP Rails App with Render like it's 2020 "
author: Thomas Wilson
date: 2020-06-11
draft: false
slug: "2020-06-11-deploy-rails-in-render"
tags:
  - devops
---

📚tl;dr - I used [Render](https://render.com/) to deploy a Rails app and database. It was very easy, very fast, and very modern. Would recommend to everyone.

---

Way back before the pandemic I had the idea for [hereabouts](https://hereabouts.app/) - an app that people can use to explore the city they're visiting, or live in. After making a landing page, working hard to build a lot of UI and UX prototypes, and beginning the process of emerging from national and international lockdown from a pandemic, I've had to come to the part where I build out a backend API - to store data, largely.

I've decided to use [Ruby on Rails](https://rubyonrails.org/), a framework for web applications written in Ruby, to build out my backend. I don't want to talk too much about why I made this choice - but the short answer is it's reliable, boring, and I'm fast at building with it (or at least I was, back when I was using it every day). "But Wilson, why aren't you using Microservices™️" - I don't know fictional question answer, probably because I don't expect to run into the problems that people argue microservices can solve for you. If you're interested, I think [this panel discussion](https://www.infoq.com/presentations/microservices-panel-value/) gives a good primer.

After building out the very basics of my rails app, I wanted to get it hosted so I could start toying with integration to the mobile app I'm building. And I had an absolutely terrible time of it. I lost the best part of a weekend trying to solve this problem. Why? Why is the "deploy this app to a server" story so unclear, for one of the notorious and used web frameworks in the world.

## The Demands

I've spent the last few years mostly in FrontendLand, where all the cowboys and cowgirls have been absolutely _spoiled_ by the modern deploy process for websites.

You can set [Netlify](https://www.netlify.com/) to deploy a static website in probably under a minute, pay nothing, and it'll watch a git repo and re-build when it sees changes, provide you with immutable URLs for each version, and just... work. The list of integrated features from Netlify is impressive: split testing, cloud functions, a CMS, and some other. Netlify aren't event alone, [Vercel](https://vercel.com) (previously _Zeit_) are building out [NextJS](https://nextjs.org/) (a framework for building websites using React) and will host websites and cloud functions on [The Edge](https://www.cloudflare.com/learning/serverless/glossary/what-is-edge-computing/). It's like [GitHub pages](https://pages.github.com/), [GitLab pages](https://docs.gitlab.com/ee/user/project/pages/) - but taken one step further.

For better or worse - modern software needs more than just a stateless interface - we've got to put data somewhere. I don't want to have something beautiful and clean on the front, but disgusting and cumbersome on the back. Deploys should be frequent, which means they have to be easy and without friction for the developer.

I want to deploy my rails app...

- **Easily** - I want the app to build somewhere, and then be deployed. I am not a DevOps or infrastructure kinda-guy. I can ssh into servers but it makes me nervous, and fundamentally I'd rather use my time to learn things other than unix and server platforms.
- **Cheaply** - I want the server hosted somewhere, I can't just run it locally. But for the next 6-12 months _at least_ it's going to see very little traffic, and I do not want to pay more than I have to for the resources I am not using.
- **Alongside a database** - I'll happily throw up a Postgres database somewhere, and object storage somewhere else. I just want a server (real, or containerised) to run a ruby application, allow network traffic, support environment variables, and map between some ports.
- **Integrated with git** - Having tasted modern dev ops, where test suites run, and deployment happen automatically alongside the git activity, I don't want to go back. I want easy integration between hitting `git push` locally, and seeing something happen on a server.

## ❌ Create a Virtual Server

I've been a fan of [Digital Ocean](https://www.digitalocean.com/)'s no-nonsense pricing and interface since 2014 when I deployed my first Rails app. So I went to their site, spun up a PostgresSQL database and small Ubuntu droplet for a combined cost of \$25/month. An absolute steal, and enough power to probably go un-touched for the next 12 months.

What followed after was an entire day of figuring out how to configure rails to run as a daemon process on ubunutu, which rails-friendly web server to use (I tried _puma_, _passenger_, and _mina_), how to match that to the nginx configuration, and then how to re-deploy that.

I am at a loss as to why there are a) so many different ways to deploy a rails app on an unix system, and b) why trialling each of them in turn produced equally cryptic but entirely dissimilar errors.

For a framework who gives you Convention over Configuration (thank goodness) - why is there no simple, blessed, recommended path for deploying. Surely every rails app that gets spun up has dreams of one day being deployed in the big wide world, it's a basic use case. It is _the_ use case. Why is the advise and experience here so different. Why did it take me, an engineer with at least some experience managing server deploys, a whole day to get something to not work.

**Results:**

- ❌ **Easy:** Running the service wasn't always simple
- ✅ **Cheap**: \$25/month for server and database
- ✅ **Database**: Got a hosted/managed Postgres database
- ❌ **Integrated with git:** No native/simple git integration

## ❌ Deploy on the Cloud

I turned my eyes towards the promising metropolis of Cloud Providers. I've got a few other projects spun up on Google Cloud, so I gave them a go. It's worth noting that I'm using their Cloud Storage for blob/data storage in the app (like images). I could have used AWS, yes.

The platform had some some documentation on [how you could deploy a rails app](https://cloud.google.com/ruby/rails), which was useful. They suggested three possible pathways:

**Deploy on a virtual server with Computer Engine**: We've just been through this with Digital Ocean. Fool me once...

**Deploy with Kubernetes.** I've only got a passing familiarity with containerising apps, solely using Docker. I didn't much fancy having to learn a whole new set of technologies and terminologies to deploy an app, nor did I want to risk copy-pasting things from the internet. I've heard horror stories of resource provisioning getting out of hand, which would obviously affect pricing and cause it to spike. At present, I would rather have a predictable pricing model, and not be worried that it could spike without warning.

**Deploy as Backend As A Service on App Engine**. This is Google's own platform for containerising and distributing apps as serverless. This looked good at first glance, but after using their pricing calculator I could end up paying somewhere between £30-50 per month. This is a fine cost for a production environment, but but not compared to the \$10/mo Digital Ocean droplet I'm comparing it to.

**Results:**

- 🤷‍♀️ **Easy:** I didn't actually try any of them
- ❌ **Cheap**: At least £30/month _just_ for the server
- ❌ **Database**: Didn't come with a database included, would have to u
- ❓ **Integrated with git**: No, but it does integrate with the Google Cloud CLI so it could be easily configured with a hook

## ✅ Used Render.com

I can't remember how I found out about Render. I think they came to my attention when they [won Tech Crunch's Disrupt award](https://techcrunch.com/2019/10/07/daily-crunch-render-wins-the-startup-battlefield/). I think I also heard about them in a conversation about next generation cloud providers making a market by essentially taking a single service in the current cloud providers, and doing it really well. I think that might have been on [this episode of Software Engineering Daily](https://podcastgang.com/podcast/software-engineering-daily/322654317196215).

Using Render to deploy the app took me maybe 30 minutes, and it reminded me a lot of the FrontendLand experience that Netlify normalised. It... _just works_. They've got first-class support for Rails, and so I just connected the git repo and the Render built the container. It _was_ that simple.

Then I spun up a Postgres database, which also just worked.

**Result:**

- **✅ Easy:** Followed [their docs](https://render.com/docs/deploy-rails) on deploying a rails app
- **✅ Cheap**: \$14/month for server and database
- **✅ Database**: Yep, managed Postgres instance
- **✅ Integrated with git:** Yep, automated deploying, with logs
