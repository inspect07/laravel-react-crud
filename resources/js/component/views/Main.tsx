import React from "react";
import TaskForm from "./forms/TaskForm";
import TaskList from "./tasks/TaskList";

const Main = () => {
  return (
    <div className="m-40">
      <div className="flex gap-20 justify-evenly">
        <div className="w-6/12 ">
          <div className="mb-4">
            <div className="text-4xl font-semmibold tracking-wider text-gray-300 mb-1">
              Hi INSPECT
            </div>
            <div className="text-sm tracking-wider leading-5 text-gray-300/50 font-lighter">
              Welcome back to the workspace. We miss you! ❤️
            </div>
          </div>
          <TaskForm />
        </div>
        <div className="w-6/12">
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default Main;
