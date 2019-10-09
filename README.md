# Created as part of the course on "REST API". 
# http://www.acloudfan.com/learn-REST-API
# Demonstrates the setting up of URI for the REST API

This is to demostrate the use of the Cache-Control header
To try it out, setup the application
> npm install

Run the application
> node server

Open http://localhost:3000 in a browser

Hit the "Call REST" button
Based on the max-age setup when you will hit the "Call REST"
      Browser will refresh by fetching new counter value
      *or* Get the data from the browser cache

In order to understand the behavior
1. Change the MAX_AGE in server.js to different values, keep in mind value is in seconds
2. Restart the server
3. Hit the "Call REST" on browser
