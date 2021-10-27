import React from "react";
import { useTodoTask } from "../context/JiraContext";
import SingleTask from "./SingleTask";

const Todo = () => {
    const { taskList } = useTodoTask();

    return (
        <div>
            <h3>ToDo</h3>
            {taskList.map((task) => {
                return <SingleTask task={task} key={task.id} />;
            })}
        </div>
    );
};

export default Todo;
