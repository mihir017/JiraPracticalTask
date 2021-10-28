import React, { useState } from "react";
import CreateUpdateModel from "./CreateUpdateModel";

const SingleTask = ({ task }) => {
    const [isOpen, setIsOpen] = useState(false);
    const closeModel = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div>
                <div className="singleTask" onClick={() => setIsOpen(!isOpen)}>
                    <p class="todo">{task.task}</p>
                    {/* <i
                        className="fas fa-pen"
                        onClick={() => setIsOpen(!isOpen)}
                    ></i> */}
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
