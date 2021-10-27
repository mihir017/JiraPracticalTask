import React from "react";
import ListView from "./ListView";
import { TodoTaskProvider } from "../context/JiraContext";
import "./app.css";

const App = () => {
    return (
        <div className="container">
            <TodoTaskProvider>
                <ListView />
            </TodoTaskProvider>
        </div>
    );
};

export default App;
