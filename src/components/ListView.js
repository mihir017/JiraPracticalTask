import React, { useState } from "react";
import CreateUpdateModel from "./CreateUpdateModel";
import DoneTodo from "./DoneTodo";
import Progress from "./Progress";
import Todo from "./Todo";

const ListView = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeModel = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="taskPage">
            <h2 className="logo">
                Day <span>Work</span>
            </h2>
            <button
                className="btn createBtn"
                onClick={() => setIsOpen(!isOpen)}
            >
                Create
            </button>
            {isOpen && <CreateUpdateModel closeModel={closeModel} />}
            <div className="listView">
                <Todo />
                <Progress />
                <DoneTodo />
            </div>
        </div>
    );
};

export default ListView;
