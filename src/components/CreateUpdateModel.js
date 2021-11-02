import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTodoTask } from "../context/JiraContext";

let initialValue = {
    task: "",
    description: "",
    status: "",
};

// reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case "CREATE":
            return { ...state, ...action.payload };
        default:
            throw new Error();
    }
};

const CreateUpdateModel = ({ updateTask, closeModel }) => {
    const [taskInputData, dispatch] = useReducer(
        reducer,
        updateTask ? updateTask : initialValue
    );
    const { taskManage } = useTodoTask();

    // set the task id
    const setTask = (task) => {
        return task.id ? { ...task } : { id: uuidv4(), ...task };
    };

    //Submit data
    const onhandleSubmit = (e) => {
        e.preventDefault();
        taskManage(setTask(taskInputData));
        closeModel();
    };

    // return react element
    return (
        <div className={`formModel ${updateTask ? "taskFormModel" : ""} `}>
            <form onSubmit={onhandleSubmit}>
                <div className="formGroup">
                    {!updateTask && (
                        <>
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
                        </>
                    )}
                    {/* <input
                        type="text"
                        name="task"
                        value={taskInputData.task}
                        onChange={(e) =>
                            dispatch({
                                type: "CREATE",
                                payload: { task: e.target.value },
                            })
                        }
                    /> */}
                </div>
                <div className="formGroup">
                    <label>Description</label>
                    <textarea
                        name="description"
                        rows={updateTask ? "4" : "6"}
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
                        <option value="hold">Hold</option>
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
