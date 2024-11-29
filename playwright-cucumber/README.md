A scaffolding created to "play" with cucumber and Playwright

# dependencies
## project node-vitest
run the backend
npm run server 

## project angular-front

run the front end
ng serve

1. npm install
2. npx playwright install
3. npm test


Output should be something like
> cucumber-playwright-jc@1.0.0 test
> cucumber-js

...

1 scenario (1 passed)
3 steps (3 passed)
0m13.461s (executing steps: 0m06.119s)

## to generate rport
npm run report

## to run only taged features
tag the feature (Example in code)
run 
npx cucumber-js --tags <tag> 