SunSafe is a web application that provides UV information based on the user's location and skin type. It utilizes Node.js, Express.js for the backend, and EJS for the frontend to create an interactive user interface. The application makes use of the MapQuest API to obtain latitude and longitude coordinates of a specified location and the OpenUV API to fetch UV data for that location.


## Features

UV Information: Get real-time UV index information for a given location and skin type.

Safe Exposure Time: Calculate the safe exposure time in minutes based on the user's skin type.

Informative Cards: Present UV information and additional details in visually appealing information cards.

Responsive Design: The web application is designed to be responsive and accessible across different devices.

## Technologies Used

Node.js: A JavaScript runtime for executing server-side code.

Express.js: A web application framework for Node.js, providing a robust set of features for web and mobile applications.

EJS (Embedded JavaScript): A templating engine for rendering dynamic content on the frontend.

Axios: A promise-based HTTP client for making requests to external APIs.

## APIs Used
MapQuest API: Provides geocoding services to convert location names into geographical coordinates.

OpenUV API: Offers UV index and ozone level data based on latitude, longitude, and altitude.


## Getting Started
1. Clone the repository:
git clone https://github.com/your-username/SunSafe-UV-Information.git


2. Navigate to the project directory:
cd SunSafe-UV-Information


3. Install dependencies:
npm install

4. Set up API keys:
Get a MapQuest API key: MapQuest Developer

Get an OpenUV API key: OpenUV API

MAPQUEST_API_KEY=your_mapquest_api_key

OPENUV_API_KEY=your_openuv_api_key

You can replace my openuv_api_key &  mapquest_api_key with yours in index.js file if you want.

5.Run the application:
npm start

The server will be accessible at http://localhost:3000.

## Contributors
If you'd like to contribute to the project, feel free to fork the repository and submit a pull request. Bug reports, feature requests, and feedback are also welcome!
