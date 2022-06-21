# _**walkabout**_ **Travel Planner**

https://travellersapp.herokuapp.com/

## Introduction
Travel Planner App is Udacity Capstone Project for Front-End Developer. Struggles on this project are really promising.  It helps me a lot as a novice programmer.  It develops my skills, knowledge, understanding as well as patience.  Read, check, research & test more to stay alive and keep kicking . . . 😄 Furthermore, I encourage you to love what you do and STAY motivated all the time.

>This quote from Laozi, Tao Te Ching states like Asynchronous Programming and a programmer itself. "Who can wait quietly while the mud settles?  Who can remain still until the moment of action?".

>Patience is the key for everything on this project.  It is not the ability to wait but to calm down no matter what happens, continue doing the action, push and push . . . until YES YOU GOT IT!

Like the other travel app, this **TRAVEL APP** shows you a form where you can enter the place of your trip and check for the travel & return date. Travel details card will be shown with the popular image of the city as well as the weather forecast of your travel.  For future reference, you can **save** it otherwise **delete**.

## The Details  . . .
**What made up the whole project?**

- APIs, Webpack, Styling, Testing, Offline Capabilities, Code Quality, Usability (Desktop & Phone), HTML Structure & its Documentation.

**How does it work?**

- The city must be entered correctly, if it is unknown to GeoNamess it will throw an error.  Once the travel date has been entered, past dates will be blocked accordingly so the return date will be entered only after the travel date. If one wish to enter the return date first and it is the current date or earlier before the travel date, it will not proceed or search won't process until it is corrected.

- When it get through, travel details will be presented in another card.  It shows the famous image of the city using Pixabay.  Pixabay retrieves the image according to search city location.

- Location of the trip (city) is as per input of the client and simoultaneously the country will be retrieve through GeoNamess API. Date details is as per input of the client. For the days difference before the trip is calculated which shows the countdown.

- For travel forecast, I used WeatherBit API.  It shows the temperature data, the icon and it's description.

- Note: If the location / city is unknown or the Pixabay doesn't have known image for it, trip details card will be still shown however, image will be empty. Also, it will throw an error if the one entered wrong city name.

## The preview . . .
![request-form](https://user-images.githubusercontent.com/67271950/174588085-d69790ed-d082-4b30-8987-889229849081.png)

https://user-images.githubusercontent.com/67271950/174584154-91aa7dec-a6e4-4b4d-87eb-7df6c03a2815.mp4

![trvl-wetr-details](https://user-images.githubusercontent.com/67271950/174588038-16cdd313-81d3-42f3-ba82-c602a6e68e61.png)

## Modules & Packages
These are the modules / packages installed through npm.

- webpack - a module bundler to bundle JavaScript files for usage in a browser
- webpack plugin - a JS object that has apply method being called by the webpack compiler.
- webpack devserver - a webpack supported CLI-based tool for starting a static server for the assets.
- html webpack - used to simplify creation of HTML files to serve the webpack bundles.
- express body parser - used to expose express middlewares for parsing text, JSON and raw data.
- node fetch - enables to use the fetch() function.
- express - extensible framework that provides a set of common utilities for building servers
- jest - used to test the framework built on JavaScript.
- dotenv - used to load environment variables from a .env file into the process. .env used to keep the keys of the APIs.
- Babel - a javascript compiler.
- css-loader - used to collect CSS from all the CSS files referenced.
- sass - used for the stylesheets.
- sass-loader - a loader that uses Sass's custom importer feature to pass all queries to the Webpack resolving engine.
- jsdom - used to parse and interacts with assembled HTML just like a browser.

## APIs (Application Programming Interface)
The following software intermediary were used:

**1. Geonames API** - a geographical database used to locate the specified city and via latitude and longtide, pull it's respective country.

**2. WeatherBit API** - a weather information or database used to pull the city place weather temperature, icon(code) and it's description.

**3. Pixabay API** - a RESTful interface used to search and retrieve free and popular city images.  Though some of the cities known images are not available, still the rest of the details of the trip will be shown in the card.

## Building Instructions

1. Clone the previous project *(Weather App Project No. 3)*
```
git clone https://github.com/eloi700/Udacity-Proj-3-FEND-Weather-App.git
```

2. Install additional dependencies / devDependencies.
```
see above modules and packages part
```

3. Build the framework (HTML & CSS).
```
html framework and sass for the stylesheet
```

4. Add other functionalities (JavaScript on both client and server side).
```
app.js, index.js etc.
```

5. Setup the development server (build-dev) and build files for production (build-prod).
```
webpack.dev.js, webpack.prod.js
```

6. Check for the development, production and start the server.
```
npm run build-dev, npm run build-prod and npm run start
```

7. Add unit test for both app and server using Jest.
```
__test__ folder, dataHandlerTest.spec.js, setInfoTest.spec.js
```

8. Perform the test.
```
npm run test
```

## The testing . . .

One is made for the app/client part (setInfo) and the other one is for the server part (dataHandlers).
![test_jest](https://user-images.githubusercontent.com/67271950/174622205-8ff04012-5bfa-4127-822e-22334685e153.png)

## The Deployment . . .
For better visualization, I deployed this project in Heroku.
Heroku website:  https://heroku.com/

walkabout Travel App link: https://travellersapp.herokuapp.com/

