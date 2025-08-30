# FLEET TRACKING DASHBOARD

## Live Preview Link
https://varun5482.github.io/fleet-tracking/


## GitHub Repository
- https://github.com/varun5482/fleet-tracking


## Instructions
1. Clone the repo from the above link
2. Go into the folder and run npm install / yarn
3. Run yarn start / npm start
4. Go to localhost:3000 to see the running of the applications

## Features

1. The vehicles are listed in tabluar format
2. There is a shimmer when the data is loading based on the api call
3. Filters applied will fetch the respective data from the UI
4. Clicking on a vehicle eg: FL-001 will open up the modal of vehicle details
5. For every detail, api call is made while loading shimmer is shown and then the data is given
6. Data from the websocket is being updated if live Update toggle is on and the update time is indicated from the message in the left panel at the bottom in blue box
7. You can turn off the live updates button on the left side 
    - Red indicates off
    - Green indicates on
8. The clickable items on the dashboard are signified by a pointer when you hover over that with your cursor.


## Note
1. It is only designed for desktop and it is not mobile responsive
2. Shimmer is being added for loading
3. Colors are not accurate to the given reference image have tried to keep it very close to the refernce picture
4. For data that is updated via websocket there is no loading or shimmer it is reflected automatically so the reference point can be checked as the notification at the left panel bottom blue message.
