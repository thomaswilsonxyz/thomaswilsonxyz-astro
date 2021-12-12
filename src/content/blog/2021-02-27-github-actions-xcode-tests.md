---

title: "How to run Xcode tests for a SwiftUI iOS codebase with GitHub Actions"
author: "Thomas Wilson"
date: 2021-02-27
draft: false
slug: "2021-02-27-github-actions-xcode-tests"
tags:
  - swift
  - github-actions
---

Tl;dr

1. Make sure you've got a repo on GitHub.
2. Make sure you've got at least one set of tests in your Xcode codebase.
3. Create the file below in `yourproject/.github/workflows/main.yml`:
4. Replace the `yourproject`s and `YourProject`s with your file name
5. `git add .github/workflows/main.yml && git commit -m "Add test GitHub action" && git push`

```yml
# Run My App's tests whenever someone pushes to `main` or creates a PR into `main`

name: CI

on:
  # Triggers the workflow on push or pull request events but only for the main branch.
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

# We're only going to have one job, `test` but you can add this
jobs:
  test:
    runs-on: macOS-latest
    steps:
	    # Checkout the code to the working directory
      - uses: actions/checkout@v2
      # Install xcbeautify so the logs are human-friendly
      - name: install xcbeautify
        run: brew install xcbeautify
	    # Run the tests
      - name: Run the xcode tests
        run: xcodebuild clean test -project YourProject.xcodeproj -scheme YourProject -destination "platform=iOS Simulator,name=iPhone 12" | xcbeautify


```

## What are Github Actions

They're bits of code you write which are executed whenever _something_ happens on your GitHub repo. These bits of code can do whatever (they're just functions that run on a container), like:

1. Run the tests in your repo (what we'll be doing today)
2. Build an artefact from source code then publish that to a directory
3. Send out an e-mail or hit a web-hook whenever something happens
4. Build your static site and upload it to S3, GitHub pages, or wherever.

If you've used other tools, GitHub actions are like TeamCity, CircleCI, Jenkins, or any other CI/CD pipeline tool, but built right into GitHub. If you've not heard of, or used those tools, [I explain a bit more about it below](#do-it-locally).

## The working parts

We don't actually write "actions", we write **workflows**, which contain one or more **jobs**, which contain one or more **steps**.

The details for a single workflow is written in [yaml](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html), as common plaintext format used by a lot of DevOps tools.

We put the yaml file in `yourproject/.github/workflows/workflow-name.yml` where `yourproject` is the root directory of your project and `workflow-name` is the name you wish to give the workflow.

There are three root-level yaml properties we're going to set:

1. `name` Is the human-readable name for the entire workflow. Call this "CI" or "Run all tests" or "Send e-mail".
2. `on` configures what exactly needs to happen for this workflow to run. By default, every job and step will run on every event.
3. `jobs` Is a list of the jobs we'll be doing. In this example there's just one: running the tests

```yaml
name: CI
on:
  # Triggers the workflow on push or pull request events but only for the main branch.
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
test:
runs-on: macOS-latest
```

Not how we're telling the `test` job that we're going to run on `macOS-latest`. Github gets us a container running that environment, which is cool.

### Checking out the code so we can access it in our tests

By default, a job in a GitHub action just gives us an empty container, so we need to tell it to copy the code into our current working directory.

There's an easy way to do that: the `checkout` action is a third-party GitHub action that checks out our current working branch to the current working directory. [Here are the Checkout docs](https://github.com/actions/checkout).

By adding the following we make sure we have access to our code:

```yaml
jobs:
  test:
    runs-on: macOS-latest
    steps:
	    # Checkout the code to the working directory
      - uses: actions/checkout@v2
```

### Installing xcbeautify

The default Xcode logs are horrible: they're verbose and unintelligible. Xcbeautify is a CLI tool that formats them to give us more readable useful information.

Luckily the `macOS-latest` platform comes with homebrew, the MacOS package manager, already installed, so we just need to tell our `test` job to install it:

```yaml
jobs:
  test:
    runs-on: macOS-latest
    steps:
	    # Checkout the code to the working directory
      - uses: actions/checkout@v2
      - name: Install xcbeautify
	      run: brew install xcbeautify
```

This step in our job has two things:

1. `name` is a human-readable name, useful for us and the UI in GitHub
2. `run` is the thing you want to type onto the CLI. When that's done, the job will move on to the next step

### Run the Test

The last step in the job is to run the tests using the `xcodebuild` CLI tool. This is actually pretty easy and simple, just make sure you clean-up the names and details in the script below.

Node how we're **piping** (i.e. the `|` character) the results from `xcodebuild` through the `xcbeautiful` command. That's a unix-ism, it's pretty powerful (or so I'm told, I'm just a frontend engineer here).

```yaml
jobs:
  test:
    runs-on: macOS-latest
    steps:
	    # Checkout the code to the working directory
      - uses: actions/checkout@v2
      # Install xcbeautify so the logs are human-friendly
      - name: install xcbeautify
        run: brew install xcbeautify
	    # Run the tests
      - name: Run the xcode tests
        run: xcodebuild clean test -project YourProject.xcodeproj -scheme YourProject -destination "platform=iOS Simulator,name=iPhone 12" | xcbeautify
```

### Commit, baby

You're good to go, let's add the file we made to our git repo, make a single commit and push it up `git add .github/workflows/main.yml && git commit -m "Add test GitHub action" && git push`

(We're assuming the `main.yml` file is the one you made, if you called it something different, change that).

### Go check GitHub

Go to your GitHub repo, click the "Actions" tab, and watch with glee.

<h2 id="do-it-locally">Why can't I just run these things locally?</h2>

You can. If you already know why, you can skip this section.

I come from a frontend engineering background, where having test coverage has typically been difficult or different to the backend world. So answering this question is as much about learning facts/words as it is about understanding that the software design, development, and deploy process can be different. I know. I'm sure some engineers are tutting or shaking their heads at me. TUT AWAY, FRIENDS I'm standing in my truth here.

GitHub's actions are part of a broader practice of CI/CD (continuous integration and delivery) in software. The idea of CI/CD is to commit code frequently, and have automated processes in place to detect the introduction of errors to the codebase.

CI/CD can also automate any other previously manual processes, like building, deploying, or publishing software. The roles of CI/CD and automation can grow and expand as your team or product become more complicated. In this example we're just using it to run tests because **well written tests give you confidence that your code does what you think it does**.

As teams grow, having actions run automatically means that institutional and team policies (like having all tests pass before anything goes into `main`, formatting code, running a smoke-test before publish) are adhered to without manual intervention. This reduces the barrier to actually publishing code.

Integrating the CI/CD pipeline right where your code is hosted is different to having a third-party service watch your git repo. It's first-party and also probably cheaper (maybe).

GitHub actions are versatile "something" that triggers these bits of code to run can be:

1. Someone pushes to your `main` branch
2. Someone opens, closes, or comments on an issue
3. Someone creates a PR from any branch to any branch

For a full list, see Github's [full list of events](https://docs.github.com/en/actions/reference/events-that-trigger-workflows) that can trigger a workflow.
