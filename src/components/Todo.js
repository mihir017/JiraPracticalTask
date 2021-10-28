import React from "react";
import { useTodoTask } from "../context/JiraContext";
import SingleTask from "./SingleTask";

const Todo = () => {
    const { taskList } = useTodoTask();

    // const openWindow = () => {
    //     setIsOpen(!isOpen);
    // };

    return (
        <div className="table">
            <h3 className="title todoTask">ToDo</h3>
            <div className="taskList all">
                {taskList.map((task) => {
                    return <SingleTask task={task} key={task.id} />;
                })}
            </div>
        </div>
    );
};

export default Todo;
