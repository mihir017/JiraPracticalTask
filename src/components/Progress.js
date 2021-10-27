import React from "react";
import { useTodoTask } from "../context/JiraContext";
import SingleTask from "./SingleTask";

const Progress = () => {
    const { taskList } = useTodoTask();
    return (
        <div className="table">
            <h2 className="title progress">Progress</h2>
            <div className="taskList allProgress">
                {taskList.map((task) => {
                    return task.status === "progress" ? (
                        <SingleTask key={task.id} task={task} />
                    ) : (
                        ""
                    );
                })}
            </div>
        </div>
    );
};

export default Progress;
