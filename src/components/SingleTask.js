import React, { useState } from "react";
import CreateUpdateModel from "./CreateUpdateModel";

const SingleTask = ({ task, openWindow }) => {
    const [isOpen, setIsOpen] = useState(false);
    const closeModel = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="sT">
                <div className="singleTask">
                    <p class="todo">{task.task}</p>
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
