import React from "react";

const SingleTask = ({ task }) => {
    return (
        <div>
            <p>{task.task}</p>
            <i className="fas fa-pen"></i>
        </div>
    );
};

export default SingleTask;
