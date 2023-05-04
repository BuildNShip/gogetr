import React, { useState } from "react";
import "./Home.css";
import Footer from "../Footer/footer";

const Home = () => {
    const [showInput, setShowInput] = useState(false);
    const [taskName, setTaskName] = useState("");

    const handleCreateTask = () => {
        setShowInput(true);
    };

    const handleTaskNameChange = (event) => {
        setTaskName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the task name, like add it to a list of tasks
        setShowInput(false);
        setTaskName("");
    };

    const renderTaskInput = () => {
        return (
            <form onSubmit={handleSubmit}>
                <input className="create-task-input" type="text" value={taskName} onChange={handleTaskNameChange} />
                <button className="create-task-button" type="submit">Add Task</button>
            </form>
        );
    };

    return (
        <div className="background_container">
            <div className="first_view_container">
                <div className="first_view">
                    <div className="first_view_texts">
                        {showInput ? (
                            renderTaskInput()
                        ) : (
                            <>
                                <p className="fv_heading">
                                    Unlock project success with <span> Gogetr's </span> bite-sized approach!
                                </p>
                                <p className="fv_tagline">
                                    With Gogetr, you can say goodbye to overwhelming project steps and hello to a more manageable workflow. By breaking down your project into smaller, more achievable tasks, Gogetr helps you stay focused and motivated, one step at a time.
                                </p>
                                <div className="fv_buttons">
                                    <button className="start_button">Show Tasks</button>
                                    <button className="fv_button" onClick={handleCreateTask}>
                                        Create Tasks
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
