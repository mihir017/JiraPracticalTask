import React, { useState } from "react";
import CreateUpdateModel from "./CreateUpdateModel";
import DoneTodo from "./DoneTodo";
import Progress from "./Progress";
import Todo from "./Todo";
import { useTodoTask } from "../context/JiraContext";

const ListView = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const { taskList } = useTodoTask();
    // // console.log(taskList);
    const closeModel = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="taskPage">
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
