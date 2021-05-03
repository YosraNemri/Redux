import React, { useState, useEffect } from "react";
import Task from "../Task/Task";
import "./ListTask.css";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function ListTask() {
    const todos = useSelector((state) => state.todosReducer.todos);
    const [filtred, setFiltred] = useState(todos);

    useEffect(() => {
        setFiltred(todos);
    }, [todos]);
    const handleClick = () => {
        setFiltred(todos.filter((task) => task.isDone === true));
    };
    const handleClick2 = () => {
        setFiltred(todos.filter((task) => task.isDone === false));
    };
    const handleClick3 = () => {
        setFiltred(todos);
    };

    return (
        <div className="listTask">
            <div className="filter_btns" style={{ marginBottom: "25px" }}>
                <Button variant="outline-success" onClick={handleClick}>
                    Show Done
                </Button>
                <Button variant="outline-danger" onClick={handleClick2}>
                    {" "}
                    Show Not Done
                </Button>
                <Button variant="info" onClick={handleClick3}>
                    Remove All Filters
                </Button>
            </div>
            {filtred.map((task, index) => (
                <Task toDo_task={task} key={index} index={index} />
            ))}
        </div>
    );
}

export default ListTask;
