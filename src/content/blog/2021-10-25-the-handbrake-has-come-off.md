---

title: "It feels like the handbrake has come off"
author: "Thomas Wilson"
date: 2021-10-25T18:11:00
slug: "2021-10-25-the-handbrake-has-come-off"
draft: false
---


Over the past two months I have inherited leadership of an engineering team I have worked in for the last twelve months.  In the last two weeks I've seen the speed of development go from not-slow, to almost inarguably fast (given current resource constraints).

I've spent months slowly attempting to unpick the parts of the team and company which were bottlenecks.  There's actually some very interesting conversations around what makes a bottleneck, and how do you spot one.  But I want to talk about the feeling of not moving fast, and then all of a sudden moving quickly. 

The analogy I've been giving is that it's like I'm in a car facing down hill, and then the handbrake came off.  

At first I was like _ahhhhhh!_, but now I'm more like _ahhhh?_.  Ya know?

For the year before this I had been a member of a very small engineering team, where I had written or reviewed 90% of the code that went into production.  I, broadly, knew all of the projects, and what was happening. 

Now, with a larger team (six) and some well-experienced hands in and incoming, things are starting to happen that I don't _fully_ understand.  Sure, I understand the what and the why, but the how isn't as in focus.  I'm a frontend engineer by trade, dev-ops is... _hand-wavy_ it works?

This is the _ahhhhhhh!_ moment.  The fear that things are happening, decisions are being made, changes to passing, and I've had full visibility on the result but far less on the process.  And that scares me because what if things start going wrong? 

I trust all the engineers in my team implicitly, you have to, but it's still scary.  Things still go wrong.

And the _ahhhhh?_ ? That came when I saw the cadence of our releases going up, the quality and security of our software being cemented (test-driven development and refactoring), and both deeper and wider features being shipped.

Yes, it's terrifying and I feel a little out of control, but it's been about two years since I've felt like I'm part of such a productive engineering organisation.  It feels like the value proposition of engineering is apparent, not promised. 

There are lot of parts to this improvement, including but not limited to:

- **Test-driven development** at unit, functional, and integration level
- **A simple git workflow** for `main` -> `feature` -> PR -> `main`
- **Pair programming** for 10-50% of my day
- **Feature-driven tickets**, by moving to a monorepo and unifying development & deployment, engineers ship an entire (cross-cutting) feature all at once

I'd love to talk in detail on each of these, but for now I'll just say that I am confident each of these highly correlate to better developer productivity. 

