# **Travel Planner**

## Introduction
Travel Planner App is the Capstone Project for Front-End Developer.  And in order to get a certificate, one must have to accomplish of course, from the beginning to end.  Struggles on this project are really promising.  It helps me a lot as a novice programmer.  It develops my skills, knowledge, understanding as well as patience.  Strive more to keep kicking . . . Furthermore, I encourage you to soar high or go beyond in every project you love to do.

>Asynchronous Programming. "Who can wait quietly while the mud settles?  Who can remain still until the moment of action?" - Laozi, Tao Te Ching.

Patience is the key for everything on this project.  It is not the ability to wait but to calm down no matter what happens, continue doing the action, push until the right time comes, it is worth to wait.

As like the other travel app, this shows you a form where you can enter the place of your trip and check for the travel & return date.  Details will be shown to you the popular image of the city as well as the weather forecast on your travel.  For your future reference, you can save it otherwise delete.

## The Details  . . .
**What makes up the whole project?**

- APIs, Webpack, Styling, Testing, Offline Capabilities, Code Quality, Usability (Desktop & Phone), HTML Structure & its Documentation.

**How does it work?**

- The city must be entered correctly, if it is unknown to geoNames it will throw an error.  The travel date once has been entered, past dates will be blocked accordingly so the return date will be entered only after the travel date. If one wish to enter the return date first and it is the current date or earlier before the travel date, it will not proceed or search won't process until it is corrected.

- Once it get through, Details of the travel will be presented in another card.  It shows the famous image of the city using Pixabay.  Pixabay retrieves the image according to search city location.

- Location of the trip (city) is as per input of the client and simoultaneously the country will be retrieve through geoNames API. Date details is as per input of the client. For the days difference before the trip is calculated which shows the countdown.

- For travel forecast, I used WeatherBit API.  It shows the temperature data, the icon as well as it's description.

- Note: If the location / city is unknown or the Pixabay doesn't have known image for it, trip details card will be still shown however, image will be empty. Also, it will throw an error if the one entered wrong city name.

## The preview . . .




https://user-images.githubusercontent.com/67271950/174584154-91aa7dec-a6e4-4b4d-87eb-7df6c03a2815.mp4

