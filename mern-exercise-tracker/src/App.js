import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


import Navbar from "./components/navBar/navBar";
import ExerciseList from "./components/listExercise/listExercise";
import EditExercise from "./components/editExercise/editExercise";
import CreateExercise from "./components/createExercise/createExercise";
import CreateUser from "./components/createUser/createUser";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        {/* Load corresponding compoennts for each endpoint */}
        <Route path="/" exact component={ExerciseList} />
        <Route path="/user" component={CreateUser} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
      </div>
    </Router>
  );
}

export default App;
