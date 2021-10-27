import React from "react";
import CreateUpdateModel from "./CreateUpdateModel";
import DoneTodo from "./DoneTodo";
import Progress from "./Progress";
import Todo from "./Todo";
import { useTodoTask } from "../context/JiraContext";

const ListView = () => {
    const { taskList } = useTodoTask();
    console.log(taskList);
    return (
        <div>
            <button>Create</button>
            <CreateUpdateModel />
            <div
                style={{
                    display: "flex",
                    width: "80%",
                    justifyContent: "space-between",
                    margin: "auto",
                    marginTop: "2rem",
                }}
            >
                <Todo />
                <Progress />
                <DoneTodo />
            </div>
        </div>
    );
};

export default ListView;
