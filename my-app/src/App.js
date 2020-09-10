import React from "react";
import TaskListContextProvider from "../context/tasklistcontext";
import TaskList from "./tasklist";
import TaskForm from "./TaskForm";

import "../App.css";
import Header from "./header";

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
            <TaskForm />
            <TaskList />
           
          </div>
        </div>
      
    </TaskListContextProvider>
  );
};

export default App;