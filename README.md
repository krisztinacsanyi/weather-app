# Weather app

This was a coding assignment to build a weather app using OpenWeatherMap API. The app was built using Vite and is built on React with Redux. The app consists of 3 pages:

- **City selector**: Choose a city from the previously selected capital cities
- **New City**: Choose a capital city and add it to the selected cities list
- **Dashboard**: Load weather, sunrise, sunset, and time data related to the currently chosen city

## Installation guide

1. Download the source code

2. Add a .env file to the root folder containing the following:  
   `VITE_API_KEY = "youropenweatherapikey"`

3. Run `npm install` to install the dependencies

4. Run `npm run dev` to start the app

## Suggestions to improve

There are a few things that I thought could be improved, but with the limited time I had I did not or partially implement:

- Design a theme with variables to overwrite some of the Material UI predefined elements
- More polished design and more "live" or interactive pages
- Write a complete documentation for the app
- Write test cases
- SEO, Accessibility
