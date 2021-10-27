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
            <h3 className="title">ToDo</h3>
            <div className="taskList">
                {taskList.map((task) => {
                    return (
                        <SingleTask
                            task={task}
                            key={task.id}
                            // openWindow={openWindow}
                        />
                    );
                })}
            </div>
            {/* {isOpen && <CreateUpdateModel />} */}
        </div>
    );
};

export default Todo;
