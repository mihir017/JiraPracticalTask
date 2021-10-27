import React from "react";
import { useTodoTask } from "../context/JiraContext";
import SingleTask from "./SingleTask";

const DoneTodo = () => {
    const { taskList } = useTodoTask();
    return (
        <div className="table">
            <h2 className="title">Done</h2>
            <div className="taskList">
                {taskList.map((task) => {
                    return task.status === "complete" ? (
                        <SingleTask key={task.id} task={task} />
                    ) : (
                        ""
                    );
                })}
            </div>
        </div>
    );
};

export default DoneTodo;
