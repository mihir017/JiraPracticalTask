import React from "react";
import { useTodoTask } from "../context/JiraContext";
import SingleTask from "./SingleTask";

const Progress = () => {
    const { taskList } = useTodoTask();
    return (
        <div>
            <h2>Progress</h2>
            {taskList.map((task) => {
                return task.status === "progress" ? (
                    <SingleTask key={task.id} task={task} />
                ) : (
                    ""
                );
            })}
        </div>
    );
};

export default Progress;
