---

title: "Why I chose React Native to build a new app in 2020"
author: Thomas Wilson
date: 2020-03-22
slug: "2020-03-22-why-i-chose-react-native-for-app-in-2020"
draft: false
tags:
  - react-native
  - react
---

I am currently in the process of building herabouts - an app that’s like a tour guide, only cooler. Most of my previous engineering work has been web-based (react and vue) because the internet is an accessible and very capable system for building modern applications. However hereabouts needed certain native functionality - like location, reliable offline data access, battery status, and access to the camera. Yes some of these things are _possible_ on the web, but they’re much more native functionality.

I’ve made the decision to write the app in [React Native](https://reactnative.dev) - a library for creating applications for native platforms (like iOS and Android) using React and JavaScript.

I wanted to share the reasons I made this decision because despite having worked with React Native for clients in the past, I was cautious about adopting it for a personal project. AirBNB famously [abandoned React Native in 2018](https://medium.com/airbnb-engineering/sunsetting-react-native-1868ba28e30a) citing a couple of pretty damning reasons: long initialisation and first-render times; lack of code-sharing between platforms; mixed developer experience.

In the same post, however, they say that most (80%) of their devs found the experience at least slightly ‘positive’ (subjective as that is), and acknowledged that a lot of their problems may relate to the the size and complexity of their team and product, alongside the early nature of React Native at the time. In the years since that was published, React Native and the surrounding ecosystem (like [expo](https://expo.io/)) have made the development experience of making a native app a _lot_ better. Big tech companies, like [Shopify, have also adopted](https://www.theregister.co.uk/2020/01/30/shopify_shifts_its_mobile_development_to_react_native/) React Native.

It’s never a clear choice what tech to use, and it’s especially difficult when you’re starting something new and have no constraints. So I wanted to make sure I was making an informed decision, and this article outlines that process.

## Why not native-native?

I initially started working on hereabouts as a native iOS application, written in Swift. At present (March 2020) Apple are transitioning the way UIs are written in Swift to use [SwiftUI](https://developer.apple.com/xcode/swiftui/). The API for SwiftUI is still in beta (currently beta 4) and still has a few quirks (e.g. see [this Reddit post](https://www.reddit.com/r/iOSProgramming/comments/fd7mpz/holy_shit_how_the_hell_do_i_use_swiftui_its_the/)) that made the process of building an app cumbersome and awkward. I was unsure of the relationship and split of responsibilities between the existing UIKit, storyboard, and SwiftUI. Given how SwiftUI is largely [seen as the future](https://www.macrumors.com/2019/06/03/apple-unveils-swiftui-framework/) of iOS development (and its declarative philosophy shared by react), I didn’t want to tie myself to supporting an app written without it, nor did I like the possibility of having to maintain a hybrid UIKit/SwiftUI app where the roles and responsibilities of both parts were changing regularly.

This opened up the possibility of creating my app using a cross-platform library - not because I wanted a cross-platform app, but because I wasn’t happy with the native tooling. This just happened to open up the Android market. Previously I made the decision to focus on iOS over Android because a) I am personally all in on the Apple ecosystem, and b) [more money](https://www.businessofapps.com/data/app-revenues/) [is spent](https://sensortower.com/blog/average-publisher-revenue) in Apple’s App Store and in the Google Play store. Although I’m not making hereabouts to get rich, I’d certainly like some gin money.

## Reason #0: I already know React

The simplest reason for me choosing React Native, over say [NativeScript](https://www.nativescript.org/) or [Flutter](https://flutter.dev/), is that I already know React. I’ve got experience writing production and personal static websites and enterprise apps in it. The declarative and data-bound nature of writing React, especially with [TypeScript](https://www.typescriptlang.org/), comes quite naturally to me now.

NativeScript supports Angular and Vue as first class citizens, which I simply don’t use as much as React. I started off my Frontend Engineering career writing apps in Angular, and I’ve written a couple of fast and easy websites in Vue. They’re good frameworks, but right now I think React has a large (if not consistently _good_) community. I know how to handle complexity in React, and I have opinions about styling and architecture that React doesn’t fight.

Additionally, Google has a reputation for sunsetting projects with little notice, which makes me a little apprehensive about Flutter.

## Reason #1: React Native isn’t a hybrid WebView app

Many people’s gut reaction to creating a cross-platform app is to think of something laggy, and distinctly _un-native_. One of the simple and earliest approaches to adopting cross-platform mobile development was to use web technologies, which are famously cross-platform and system agonistic, and have the native app render the web app (in its own HTML, CSS, JS) through a WebView. This is how platforms like [Ionic](https://ionicframework.com/) and [Cordova](https://cordova.apache.org/) work - and they’re great for very simple apps, but they’re notoriously [not very performant](https://www.netguru.com/blog/why-you-should-migrate-your-app-from-ionic-cordova-or-phonegap-to-react-native).

Native apps are better than, and distinguished from, websites by how “snappy” they feel - how responsive the app is to a button being pressed, giving haptic feedback, and then navigating somewhere. It’s hardly noticeable when done right, but when there’s a 400ms delay between pressing a button and seeing something happen - you _will_ notice.

However, React Native works differently: you write your views using JSX, and these are then bridged to native code for iOS and Android - meaning, at some point, it becomes native, and is not just a DOM.

Let’s just take a second to clarify some of these words: first **[JSX](https://facebook.github.io/jsx/)** is an extension to JavaScript (or to give it its full title: ECMAScript) that introduces XML-like syntax for creating structured data. It looks an awful lot like HTML, but with a few syntactic differences, and the ability to include data in the structure:

```
import React from ‘react’

const Message = () => {
	return (
		<div style={{colour: ‘blue’}}>
			<h1>Hello!</h1>
			<p className=“message__text”>Welcome, friend</p>
		</div>
	)
}

export default Message
```

**JSX** is [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar) - its goal is to makes the code easier to write and parse by the humans who have to read and write it. It’s also a separate library from React and React Native, but is used by both libraries by default as a way to construct a virtual representation of view elements, like HTML Elements or DOM Nodes. It compiles down to something different, and instructs React to do React-y things like `createElement()` but we’re not talking about that here.

The second term I want to bring out and talk about is **bridging**. For an application to run natively, it has to be able to talk to the system in a language and API it understands: e.g. UIKit and Objective-C/Swift for iOS, and android.View with Java/Kotlin for Android. This is a distinguishing factor between cross platform apps (like those in React Native) and the hybrid WebView Apps - we can use a cross platform application to communicate with native APIs, like maps or device orientation.

The part of the architecture that lets a JS thread, where a React Native application runs, talk to the native Threads, [is called the Bridge](https://hackernoon.com/understanding-react-native-bridge-concept-e9526066ddb8). The details of how this works are covered for both [iOS](https://reactnative.dev/docs/communication-ios) and [Android](https://reactnative.dev/docs/native-modules-android) in the React Native docs and aren’t really relevant for this discussion - just know they happen.

This article isn’t an explainer about JSX (but JSX is a interesting idea, regardless of what you think about React itself) or Bridges - but they’re two big technological differences between React Native and other libraries that let you use web technologies to write apps.

## Reason #3: The performance and benchmarking discussions are nuanced

One of my core beliefs (read: something I work very hard at, but am not necessarily always good at) is only releasing/selling products that I would be happy for someone to pay for. Above all other things, I want hereabouts to have a native feel - to be responsive and feel intuitive to use. It needs to hit that magical 60fps bar, and _feel_ like a first class citizen on a mobile phone because that is what I would expect from an app that I paid for.

I’ve seen a couple of blog posts that (like [this one](https://medium.com/swlh/flutter-vs-native-vs-react-native-examining-performance-31338f081980) from inVerita, and [this one](https://thoughtbot.com/blog/examining-performance-differences-between-native-flutter-and-react-native-mobile-development) from Thoughtbot) about the performance of React Native that had me worried that I’d be fighting an uphill battle to get performance two where I wanted it.

Fundamentally, though, good performance in React Native _is_ possible. It requires a [thoughtful consideration around what you’re doing](https://reactnative.dev/docs/performance), and building with the tools that let you investigate and profile your app to let you know when there’s a problem.

It’s much easier to read an article and see how React Native (or any tech) “has bad performance” but this depends too much on what you’re doing and how you’re doing it. It’s a nuanced discussion and it also gets at the whole “software engineering is a skilled profession” thing. The research I did in this area was enough to assure me that I can code myself into a bad situation, but I can code my way (at least mostly) out of it.

So I’m not overly concerned about poor performance in hereabouts _just_ because it’s written in React Native. Of course I am concerned about it, but I don’t think this is a problem unique to the platform.
