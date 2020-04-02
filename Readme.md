# React Bootcamp TryOut

## Setting up the dev environment

Switching from Scrimba to local development requires to learn a lot about setting up react first before starting to develop.

[Guide](https://dev.to/theenadayalan/how-to-set-up-react-js-from-scratch-without-using-create-react-app-37mk)

Changes when setting up:

using npm instead of yarn see [this](https://gist.github.com/jonlabelle/c082700c1c249d986faecbd5abf7d65b) for command translation.

add package.json before running any npm command and add '{}' as content of that file.

yarn add [package] -D is equal to npm install --save-dev [package]

add loader for css to webpack config and install via npm

## Reuse code 

### Example showcase

In the class we did a Toggle for showcasing the different patterns for code reuse. For practice I want to practice code reuse 

- in a naive way
- using HOC
- using render props