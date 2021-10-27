import React, { useReducer, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTodoTask } from "../context/JiraContext";

const initialValue = {
    task: "",
    description: "",
    status: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "CREATE":
            return { ...state, ...action.payload };
        default:
            return "null";
    }
};

const CreateUpdateModel = ({ updateTask, closeModel }) => {
    const afterModel = useRef();
    const [taskInputData, dispatch] = useReducer(
        reducer,
        updateTask ? updateTask : initialValue
    );
    const { taskManage } = useTodoTask();

    const setTask = (task) => {
        return task.id ? { ...task } : { id: uuidv4(), ...task };
    };

    const onhandleSubmit = (e) => {
        e.preventDefault();
        taskManage(setTask(taskInputData));
        closeModel();
    };
    const afterRef = () => {
        if (afterModel.current.localName === "div") {
            closeModel();
        }
        console.log(afterModel);
    };
    return (
        <div className="formModel" ref={afterModel} onClick={afterRef}>
            <form onSubmit={onhandleSubmit}>
                <div className="formGroup">
                    <label>Task</label>
                    <input
                        type="text"
                        name="task"
                        value={taskInputData.task}
                        onChange={(e) =>
                            dispatch({
                                type: "CREATE",
                                payload: { task: e.target.value },
                            })
                        }
                    />
                </div>
                <div className="formGroup">
                    <label>Description</label>
                    <textarea
                        name="description"
                        rows="6"
                        value={taskInputData.description}
                        onChange={(e) =>
                            dispatch({
                                type: "CREATE",
                                payload: { description: e.target.value },
                            })
                        }
                    />
                </div>
                <div className="formGroup">
                    <label>Status</label>
                    <select
                        name="status"
                        value={taskInputData.status}
                        onChange={(e) =>
                            dispatch({
                                type: "CREATE",
                                payload: { status: e.target.value },
                            })
                        }
                    >
                        <option value="">Select</option>
                        <option value="progress">Progress</option>
                        <option value="complete">Complete</option>
                    </select>
                </div>
                <button type="submit">
                    {updateTask ? "Update" : "Create"}
                </button>
            </form>
            <button className="close" onClick={() => closeModel()}>
                x
            </button>
        </div>
    );
};

export default CreateUpdateModel;
