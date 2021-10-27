import { createContext, useContext, useState } from "react";

const TodoTaskContext = createContext();

export const TodoTaskProvider = ({ children }) => {
    const [taskList, setTaskList] = useState([]);
    // console.log(taskList);

    //add Task into taskList
    const taskManage = (task) => {
        const alreadyExist = taskList.filter(
            (taskStore) => taskStore.id === task.id
        );
        if (alreadyExist.length === 0) {
            setTaskList([...taskList, task]);
        } else {
            const updatedTask = taskList.map((presentTask) => {
                return presentTask.id === task.id ? task : presentTask;
            });
            setTaskList([...updatedTask]);
        }
    };

    return (
        <TodoTaskContext.Provider value={{ taskList, taskManage }}>
            {children}
        </TodoTaskContext.Provider>
    );
};

export const useTodoTask = () => useContext(TodoTaskContext);
