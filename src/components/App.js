import React from "react";
import ListView from "./ListView";
import { TodoTaskProvider } from "../context/JiraContext";

const App = () => {
    return (
        <div>
            <TodoTaskProvider>
                <ListView />
            </TodoTaskProvider>
        </div>
    );
};

export default App;
