# MERN Stack CRUD - Exercise Tracker Application
 - Last Updated: Dec 5, 2020 
 - Tutorial Link: https://www.youtube.com/watch?v=7CqJlxBYj-M (2019)
   - the tutorial video is outdated and will have numerous errors as well as bugs.
   - It only covers how to connect the backend to the database and wire the backend with the frontend

## technology used
- React (frontend)
- Node/Express (backend)
- MongoDB (database)
- React Boostrap 

# To run this program
1. Go to "backend" folder and install npm packages by running "npm i"
2. Go to "mern-exercise-tracker" folder (frontend) and run "npm i" command to install npm packages
3. To run the node server, navigate to the backend folder and run "nodemon server"
4. You need to run the React server too. To do so, go to "mern-exercise-tracker" and run "npm start"
5. Check that app is running at localhost:3000

# Case Studies
- React supports two types of request methods for retrieving data: Axios and Fetch
 - Axios() uses the data property, data is automatically converted into JSON (easy to work with)
 - Axios() supports a wide range of browsers including IE11
 - Axios() can intercept HTTP requests
 - Fetch() uses the body property, data is stringified and needs to be parsed
 - Fetch() supports Chrome 42+, Firefox 39+, Edge 14+ and Safari 10.1+
- To learn more about these two methods: https://blog.logrocket.com/axios-or-fetch-api/
