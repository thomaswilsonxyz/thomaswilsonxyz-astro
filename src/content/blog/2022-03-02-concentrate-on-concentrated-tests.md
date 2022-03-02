---
title: "Concentrate on Concentrated Tests"
author: "Thomas Wilson"
date: 2022-03-02T21:41:00
slug: "2022-03-02-concentrate-on-concentrated-tests"
draft: false
---

The flavour of a test block lies in the calling of application code, and the assertions on its behaviour.  Everything else (set-up, tear down, tidying, and side effects) dilutes a test.  Work to prevent tests from being watered down.

It should be as obvious to an incoming engineer exactly what part of the codebase is being tested, and exactly which parts of the testing-infrastructure (stubs, mocks, fixtures) are facilitating that.

By contrast: a diluted test makes it hard to point to the grain of truth or value.  Tests which are hard to understand are hard to change.  Code which is hard to change won't get changed.  

If it's easier for an engineer to add a new test, rather than alter an existing one, they will.  If it's unclear that a test already exists for something, that test will be duplicated.  

Diluted tests risk making your codebase bloated and brittle (too big and hard to change). 

Ask if you can make a test more concentrated by:

1. Creating multiple unit tests to test previously-grouped functionality
2. Removing tests which make no unique assertions on your application code
3. Herding your testing infrastructure out of individual test files to isolate repeated patterns or necessary magic