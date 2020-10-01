---
path: flutter-githooks
date: 2020-09-26T00:51:56.845Z
title: Automate your Flutter environment with Git hooks
description: use git hooks and Flutter commands to automatically format, lint
  and test your code
---
### A Git hooks Briefer

An efficient developer automates as much of the development process as reasonably possible. Some of these efficiencies lie in the way we use the version control system Git.

Git executes scripts, called `git hooks`, before or after events. These scripts exist in the `.git/hooks` directory of a Git repository. Inspect the sample hooks provided here:

<img src="https://raw.githubusercontent.com/benjaminykim/benkim-assets/master/blog-githooks-flutter-0.png"
     alt=".git/hooks directory file contents" />

Remove any of the `.sample` suffixes and Git will execute the given script. We can use this technology to improve the way we develop, from running tests to sending emails or Slack notifications about events.

Can you think of any ways you could already integrate git hooks into your projects? Leave your ideas in the comments below.

### Git hooks and Flutter

In using Git hooks with Flutter, I start with reviewing the Flutter specific commands that I use on a regular basis:
- `flutter analyze` - check if code abides by the lint style guide
- `flutter format .` - autoformat the project code to abide by the Flutter style convention
- `flutter test`
- `flutter build apk`

Now let's review my most commonly used Git commands:
- `git commit`
- `git push`
- `git merge`
- `git rebase`

If I were to match any Flutter command to Git command, I would first ignore `flutter build apk` as it happens infrequently in the development or feature lifecycle. `git merge` and `git rebase` can be integrated better with automation in the CI pipeline. Instead, I'll focus on `git commit` and `git push`.

### `pre-commit`

For a `git commit`, we can use formatting and linting tools. So every commit will automatically format the codebase and check for style rule compliance. This maintains consistency in style and formatting across a codebase which provides immeasurable value with every collaborator added. Should developers contribute code that is inconsistent to a central style guide readability would decrease. Place:

```
flutter format .
flutter analyze
```
inside of the `pre-commit` file. For `flutter analyze`, we'll add some bash logic after the `flutter analyze` command to quit the commit execution if a lint rule breaks:
```
flutter format .
flutter analyze
if [ $? -ne 0 ]; then
    printf "LINT RULES FAILED"
    exit 1
fi
printf "LINT RULES PASSED"
```
This logic will break script execution if `flutter analyze` does not return a success code and block a commit from.

### `pre-push`

For `git push`, we can use linting, testing, and unchecked file changes check. We add linting for redundancy, testing to ensure that tests are run before each push to the remote repository, and unchecked changes check to ensure that all changes on the local repository are checked into version control.

```
#!/usr/bin/env bash

printf "START UNCHECKED TEST"
if [[ `git status --porcelain` ]]; then
  printf "UNCHECKED WORK IN REPOSITORY"
  exit 1
fi
printf "UNCHECKED TEST PASSED"

printf "START LINT"
flutter analyze
if [ $? -ne 0 ]; then
  printf "LINT FAILED"
  exit 1
fi
printf "LINT PASSED"

printf "START TESTS"
flutter test
if [ $? -ne 0 ]; then
  printf "TESTS FAILED"
  exit 1
fi
printf "TESTS PASSED"
```

### The Problem
The `.git` directory is not checked into version control! Obviously, if you are working with a team you'll have to figure out a way to distribute your git hooks so that everyone has access. However, if there are changes to the git hooks and they are manually distributed this practice becomes quickly unscalable and inconsistent across local copies of the repository.

The faster and more scalable solution is to configure git locally on every developer's machine to reference a separate directory for git hooks. Here's the script:

```
#!/bin/bash
git config core.hooksPath .githooks/
```

I store this in a `init.sh` file on the root level of the repository, and in the README.md I have a section for configuration that guides the contributor to run the `./init.sh` script.

This script requires each developer to run `./init.sh` once they clone the remote repository. This script also requires for the git hooks to reside in a `.githooks` directory at the root level of the repository instead of the `.git/hooks` directory.

### Conclusion
All in all, we have two scripts `pre-commit` and `pre-push` inside of a `.githooks` directory, along with a `init.sh` script that changes git's internal path for the hooks directory.

Obviously, these Flutter specific commands don't restrict the use of git hooks to this framework. Node.js, Django, Ruby on Rails, React... there are many ways to leverage the commands that the framework gives you and integrate them with prominent technological infrastructure (Git) in a way that is scalable, efficient, easy to configure, seamless, productive and valuable to the developer.

My next two blog posts will explain how to use Github Workflows for an automated CI pipeline and how to customize your style rules.