import React from "react";
import { BrowserRouter } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <TaskProvider>
        <Routes />
      </TaskProvider>
    </BrowserRouter>
  );
};

export default App;
