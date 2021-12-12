---

title: "Apple, What are you doing?"
author: Thomas Wilson
date: 2020-08-29
draft: false
slug: "2020-08-29-apple-what-are-you-doing"
tags:
  - apple
  - news
---

I have loved Apple solidly for eight years, since I was 20 and gifted a Mac Mini for Christmas. I wrote my Masters thesis on that thing in a ground floor bedroom of a student house overlooking suburbia at 3am on a Tuesday night. I finished my Ph.D. thesis on a MacBook Air (which certainly didn't deserve to be put through what I asked it to do) as I sat, hunched over, on a rainy November afternoon, in a tiny flat in Paris that smelled like fresh lemon and ginger.

MacOS is the operating system is the vehicle I drove from environmental scientist to software engineer, and so changed my life trajectory inexplicably. I love the build quality of their machines, the UI aesthetic decisions, and the entire world of Open Source software which was opened up to me by its [POSIX](https://en.wikipedia.org/wiki/POSIX) compliance. This is helped by the fact that I moved into a Web Development: an argumentative ADHD-sort of community but one that really likes to share and discuss things openly.

This is the community which modelled to me "this is how a good engineer behaves" - looking around and seeing Kent C. Dodds, Sara Viera, MPJ, Chantastic, Dan Abramov, Sophie Alpert, and so many others just like... be chill patient folk who take the time to explain what they're doing and thinking and making.[^And surrounded, obviously, by so many other who are not chill or patient]

So to see one of the largest companies in the world ([2T\$ now](https://www.macrumors.com/2020/08/21/aapl-closing-in-on-500-mark/)) scrapping with developers and (multi-)national legal systems for using practices which look _an awful lot_ like monopolistic and anti-competitive practices seems wrong to me, and also a lot of other people in the dev and tech spaces.

## The Hey Drama

[Hey.com](https://hey.com/) is an e-mail service released by Indie Tech Darling _Basecamp_. They released Hey with admirable ethical (no tracking) and technological (no unnecessarily complex stacks) intentions to change some aspect of the e-mail domain. They priced their product at \$99/year, which you could only buy through their website.

They created desktop, web, iOS, and Android apps for people to access their Hey e-mail accounts - and before the public release they had their iOS version approved on Apple's App Store. In the lead up from beta to release, Basecamp made bug fixes to their iOS and submitted it for review (as every developer must), and had their app rejected because it did not provide a way for iOS users to create an account in the App.

To be clear - this functionality had never been in the Hey app. It had not been present and then suddenly removed.

Any in-app purchases (IAPs) result in a 30% cut going to Apple (or a 15% cut in the case of a recurring annual subscription after the first year). It's not hard to understand Apple's immediate concern: Apple are missing out on a potential \$30 each time a user downloads the Hey app and creates an account in app and signs up for a year's worth of service. Apple stated that until this IAP option was added, they won't approve any further changes to Hey's iOS app. This meant bugs would go unfixed, weeks-days before Hey was to be released to the world at large.

One can easily understand the outrage this caused in Basecamp, and then further afield. David Heinemeier Hansson (DHH), the CTO at Basecamp and general holder of strong opinions [tweeted](https://twitter.com/dhh/status/1272972718384623616):
\

> There is no chance in bloody hell that we're going to pay Apple's ransom. I will burn this house down myself, before I let gangsters like that spin it for spoils. This is profoundly, perversely abusive and unfair.

In the end, Basecamp offered users the chance to create a two week "trial" account in the app - so _technically_ users without an account could open the app for the first time and get started with sending/receiving e-mails.

This isn't even a satisfying conclusion or resolution - it feels more like Apple just wanted to do... _something_. Tim Cook's recent defence of the 30% cut included the argument that it's only included when a business "acquires a customer on an Apple" ([source](https://9to5mac.com/2020/07/29/tim-cook-antitrust-statement/)). But now you're demanding a way for an App to turn a new user into a customer - even if that process has historically only been done outside the iOS ecosystem (e.g. Netflix)?

If you want to see more about the Hey scandal, Basecamp covered the issue in an episode of their own podcast, [Rework](https://rework.fm/two-weeks/).

## The Fortnite Drama

In the weeks leading up to writing this article, a similar skirmish has started [between Epic Games and Apple](https://www.ft.com/content/a01807f8-606c-4444-8a27-398984e3bf3d). This time it's over Epic's Fortnite, an extremely popular Battle Royale-style game (last-person-standing).

Fortnite was [released](https://fortnite.gamepedia.com/Release_Timeline) on PC in September 2017, and later on iOS in March 2018. The app's in-game economy uses an in-game currency (V-Bucks) that lets people purchase cosmetic items, things that look fun but don't affect the core gameplay. Earlier this year, Epic updated the app to allow users to make IAPs using this in-game currency - as opposed to the system-level iOS integration.

In a similar argument they raised with Basecamp, Apple blocked updates to the App as these IAPs did not use Apple as the platform/payment provider, and so did not offer the 30% cut. As of 28th August 2020, Apple [removed the Developer Account](https://9to5mac.com/2020/08/28/apple-has-now-terminated-epic-games-app-store-account/) associated with Fortnite from the App Store. Users can no longer download the Fortnite App on iOS.

Similar to Basecamp, Epic's rejection of these terms has been very public. In fact, probably more spectacle-making than Hey's, with the release of a [riff](https://www.youtube.com/watch?v=euiSHuaw6Q4) on Apple's famous 1984 Macintosh advert. Additionally, the opening pages of Epic's lawsuit read well enough that one could argue they were written for non-lawyers.

Unlike Basecamp, Epic have so far been willing to create some kind of compromise, no matter how purely _technically_ correct that compromise is. Both Apple, and the US legal system have argued that Epic's repeated, intentional non-compliance with the rules mean that Apple are within their right to remove them from the App Store.

## It's not just Epic Games anymore

The twist in the Fortnite story came when Apple threatened to remove the both the developer accounts associated with Fortnite _and_ [Unreal Engine](https://www.unrealengine.com/en-US/) - a free-to-start video game engine owned by Epic.

In case it is unclear: Unreal Engine is a technology for building games other than Fortnite. It's used by developers across the world, including games in Apple's own _Apple Arcade_

If it went away on iOS anyone building games for iOS that used Unreal Engine just... couldn't. Quoting Kevin Gammill the General Manager of Gaming Developer Experiences at Microsoft:

> "_Unreal Engine's_ sudden loss of support for iOS and macOS would create significant costs and difficult decisions" for game creators, who "would have significant sunk costs and lost time using _Unreal Engine_ for game creation, and would have to choose between (a) starting development all over with a new game engine, (b) abandoning the iOS and macOS platforms, or (c) ceasing development entirely"... It is abundantly clear that Apple's retaliatory steps are intended to harm Epic and its licensees. ([court proceedings p.9](https://cdn2.unrealengine.com/epic-pi-tro-08-23-2020-819871195.pdf))

Luckily the courts swept in and prevented Apple from doing this. U.S. District Judge Yvonne Gonzalez Rogers commented:

> Apple has chosen to act severely, and by doing so, has impacted non-parties, and a third-party developer ecosystem. In this regard, the equities do weigh against Apple

## Creating a Developer Ecosystem

I am concerned that Apple's anti-competitive, monopolistic practices are harming the consumers of _and_ third-party developers for their own platform. So I suppose, actually, my concern is this: Apple aren't distinguishing between end-users and developers - they're both just consumers of a service.

Or perhaps they see little problem with applying pressure to the development community to stop others from raising such vocal fights against the conditions of the App Store and IAPs.

This from a company which famously celebrates quality and diversity of their platform. Every years at WWDC they give out awards for the third-party Apps and games which are well designed.

Equally, from a business perspective they profit from the diversity and quality. The fact that indie-devs, talented teams, and huge corporations can all publish something into the App Store gives the iPhone an appeal across demographic, generations, and personality. Just want e-mail, a PDF viewer, and a spreadsheet viewer? No worries. Want to cram your phone as full of bright-and-loud games, also fine, friend. Artistic type who wants to take and edit photos or videos, check.

Apple are acting acting as if they're irreplaceable, and as if there are no alternatives for developers, or as if this diversity and quality across the board is inevitable and without condition. This is _literally_ why they're on trial for anti-trust - they're abusing their market position, capitalising on a lack of viable alternatives, and influencing the ability of developers to speak out, or find alternative revenue streams.

In the recent antitrust hearings, Tim Cook [argued the 30% cut](https://9to5mac.com/2020/07/29/tim-cook-antitrust-statement/) is justified because the App Store is a trusted place for the discovery (user), distribution (developer), and payment (both) of Apps globally. A particularly pessimistic reading of this statement makes it sound as if the App Store is the _only_ platform for doing so. That without Apple, all businesses, talented designers, and savvy engineers would be unable to reach customers - or that end users would be paralysed by choice or stifled by lack of options. The Wild West of the internet, with its ample e-commerce and payment platforms stands as a blatant contradiction of this statement.

How many people rely, if not entirely then at least notably, on IAP revenue for food and rent? How many people have had to increase prices for IAPs, or to encourage more IAPs just to negotiate around this 30% cut? Epic Games won't go broke because of a 30% cut of purchases made on iOS devices, but an indie-dev easily could.

Apple aren't willing to budge on this 30% figure. PayPal [charges](https://www.paypal.com/us/webapps/mpp/paypal-fees) 2.9% + $0.3 for a transaction, [so does Stripe](https://stripe.com/pricing). Gumroad [charges](https://gumroad.com/features/pricing) 3.5% + $0.3. Shopify [charge](https://www.shopify.com/pricing) 2.4-2.9% + \$0.3. Apple are justifying a 10x increase on web payment providers, and then fight back these claims of injustice from developers who try and find ways around them (ignoring that Netflix, Amazon, and other big players seemingly get around this without problem).

Instead, this is... The Developers' fault? In a [statement made](https://techcrunch.com/2020/08/28/apple-terminates-epic-games/) on the Fortnite case, Apple said:

> Instead [Epic Games] repeatedly submit Fortnite updates designed to violate the guidelines of the App Store. This is not fair to all other developers on the App Store and is putting customers in the middle of their fight

There just seems too much irony, gaslighting, and hypocrisy in this statement. This cannot be an actual lack of self-awareness on Apple's part - someone must have raised these questions internally. Someone must have noticed.

As someone who builds software, it raises serious questions about the value that being on the iOS store adds, and the additional work that would need to be done to make a native app useful over, say, a web-based purchase. If I was building a new product, this would push me more towards web-only or a more read-only iOS experience. It makes me as a developer question how much Apple value my business, especially when they have global insights into the most valuable kinds of apps and could [build out their own](https://www.ft.com/content/a01807f8-606c-4444-8a27-398984e3bf3d) alternatives to crush my business if its part of a popular genre.

This is the environment that Apple are creating for consumers, developers, and businesses who want to use their platforms - and it doesn't seem right. This is bad PR, this seems damaging in the long run. It seems an awful lot like the company could maintain their standards of quality and security without a lot of these practices (he says, with literally no evidence to back it up). It worries me that one company can raise all these questions and concerns.
