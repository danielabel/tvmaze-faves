# Dan Abel's **fave-Tv** web app 

##Technologies used
 - https://github.com/facebook/create-react-app
 - https://reactjs.org/docs/hooks-intro.html
 - https://react-bootstrap.github.io/
 - https://github.com/nock/nock 

## How to run the app

This project was generated with [Create React App](https://github.com/facebook/create-react-app).
I'm not totally a fan, but its a standard and I've left most patterns and tech in place, for easy of use and context. 

 `npm start` Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser if if doesn't open it for you.

`npm test` launches the test runner in the interactive watch mode. 
It's a little slow.

There is a `npm run build` command from Create React App but I've not used it.

## Narration 

### What's do we have
Avoided React classes in favour of functions and used a smattering of 
Aimed for Props rather than state
Kept it simple, and avoiding more advanced tooling and options that would suit 
a bigger app

#### design
- I've debated whether to use Nock or not. I like to not rely other services
  or networking in unit tests, however it does create a gap in the tested expectations 
  that rely on testing the app in integration. In a real app, I might consider some 
  Joi validation in the app and/or some CDC tests 

### What's not ideal

#### Test locations
Create-React-App and jest seem to want to focus tests in to the `src` directory and
near the files under test. I prefer a sibling `test` folder, but I've gone with the
build in standard here.

#### React choices
I've kept what's been built as simple as it needs to be. Its getting to the point of complextity that it might read better  

#### Test coverage
For something valuable and under change, I'd want more test coverage.
 - more of: I've written the components to use props so the behavoir can be tested via independent lightweight tests
- missing : ideally some sort of shakedown or smoke test of the app would be ideal 

### What's not been done
 - I've relied on bootstrap for all styling and defaulted to what's easily available in react-bootstrap
 - There's no use of routing (react-router etc ) to change the URL to reflect the state in the URL 
 - the data from the api is not always consistent 
