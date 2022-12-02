# Dan Abel's **fave-Tv** web app 

##Technologies used
 - [create-react-app](https://github.com/facebook/create-react-app)
 - [React hooks](https://reactjs.org/docs/hooks-intro.html)
 - [react-bootstrap](https://react-bootstrap.github.io/)
 - [Nock](https://github.com/nock/nock)

## How to run the app

This project was generated with [Create React App](https://github.com/facebook/create-react-app).
I'm not totally a fan, but it seems to be a standard so I've left most patterns and tech in place, 
for ease of use / context. 

`npm start` Runs the app in the development mode.\
 Open [http://localhost:3000](http://localhost:3000) to view it in the browser if if doesn't open it for you.

`npm test` launches the test runner in the interactive watch mode.

There is a `npm run build` command from Create React App, but I've not used it.

## Narration 

### What do we have
React hasn't been my usual ballpark for the last few years, so I've tried to pick a simple set of libraries to get me going.  

I've avoided React classes in favour of functions aimed for `Props` rather than `State` where ever possible.
I've tried to keep it simple and avoided more advanced tooling and options that would suit a bigger app.

#### Test Design 

I debated whether to use Nock or not in my data fetching tests. I like to not rely other services
or networking in unit tests, however it does create a gap in the tested expectations
So I rely on testing the app in integration. In a real situation, I might consider some 
Joi validation in the app, some more realistic test data some tests, and/or some CDC tests 

In a real world app - I likely would have some more tests - here I've given a smample to get it
done and shipped

### What's not ideal

#### Test locations

Create-React-App and jest seem to want to focus tests in to the `src` directory and
near the files under test. I prefer a sibling `test` folder to a `src` folder, but I've gone with the
built-in standard here.

#### React choices

I've kept what's been built as simple as it needs to be. 
The `ShowDetails` component is the most complex. I wondered about a reducer or 
[custom hooks](https://www.smashingmagazine.com/2020/07/custom-react-hook-fetch-cache-data/), 
but I hope it got it to the level of complexity where it does not need one. 


### What's not been done
 - I've relied on bootstrap for all styling and defaulted to what's easily available in react-bootstrap - it could probably benifit from better use of that too :) 
 - There's no use of routing (react-router etc ) to change the URL to reflect the state in the URL 
 - the data from the api is not always consistent - and i'd love to do some managing of that in the 
   `data-gatherers` - perhaps using [joi](https://www.npmjs.com/package/joi)
- there are some console warnings that I'd love to spend some more time fixing
- I'd like to improve the navigation when there's a api call error
- [React Query](https://github.com/tannerlinsley/react-query) looks cool, I'd like to see if it simplifies and improves the app. 
