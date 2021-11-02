import React, { useState } from "react";
import CreateUpdateModel from "./CreateUpdateModel";
import { useTodoTask } from "../context/JiraContext";

const SingleTask = ({ task }) => {
    const [title, setTitle] = useState(task.task);
    const [isOpen, setIsOpen] = useState(false);
    const [isInputOpen, setIsInputOpen] = useState(false);
    const { taskManage } = useTodoTask();
    const closeModel = () => {
        setIsOpen(!isOpen);
    };
    const onHandleUpdateTitle = (e) => {
        if (e.code === "Enter") {
            taskManage({ ...task, task: title });
            setIsInputOpen(!isInputOpen);
        }
    };
    return (
        <>
            <div>
                <div className="singleTask">
                    {!isInputOpen && (
                        <p
                            className="todo"
                            onDoubleClick={() => setIsInputOpen(!isInputOpen)}
                        >
                            {task.task}
                        </p>
                    )}
                    {isInputOpen && (
                        <input
                            type="text"
                            value={title}
                            className="updateInput"
                            onKeyDown={onHandleUpdateTitle}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    )}
                    <i
                        className="fas fa-pen"
                        onClick={() => setIsOpen(!isOpen)}
                    ></i>
                </div>

                {isOpen && (
                    <CreateUpdateModel
                        updateTask={task}
                        closeModel={closeModel}
                    />
                )}
            </div>
        </>
    );
};

export default SingleTask;
