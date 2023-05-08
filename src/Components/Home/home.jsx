import React, { useState } from "react";
import "./Home.css";

const Home = () => {
    const [showInput, setShowInput] = useState(false);
    const [showProject, setShowProject]=useState(false)
    const [taskName, setTaskName] = useState("");
    const [projectName, setProjectName] = useState("");
    const [projectPassword, setProjectPassword] = useState("");

    // const handleCreateTask = () => {
    //     setShowInput(true);
    // };

    const handleCreateProject = () => {
        setShowProject(true);
    };

    const handleTaskNameChange = (event) => {
        setTaskName(event.target.value);
    };

    const handleProjectNameChange = (event) => {
        setProjectName(event.target.value);
    };

    const handleProjectPasswordChange = (event) => {
        setProjectPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the task name, like add it to a list of tasks
        setShowInput(false);
        setTaskName("");
    };

    const handleProject = (event) => {
        event.preventDefault();
        setShowProject(false);
        setProjectName("");
        setProjectPassword("");
        setShowInput(true);

    };


    const renderProjectInput = () => {
        return (
            <div className="box_container">
                <h2>Project</h2>
                  <form onSubmit={handleProject} className="form-container">
                    <input className="create-task-input" type="text" value={projectName} placeholder="Project name" onChange={handleProjectNameChange} />
                    <input className="create-task-input" type="text" value={projectPassword} placeholder="Password" onChange={handleProjectPasswordChange} />
                    <button className="create-task-button" type="submit">Add Project</button>
                 </form>
            </div>
        );
    };

    const renderTaskInput  = () => {
        return (
            <div className="box_container">
                <h2>Task</h2>
                  <form onSubmit={handleSubmit} className="form-container">
                    <input className="create-task-input" type="text" value={taskName} placeholder="Task Name" onChange={handleTaskNameChange} />
                    <button className="create-task-button" type="submit">Add Task</button>
                 </form>
            </div>
        );
    };

    return (
        <div className="background_container">
            <div className="first_view_container">
                <div className="first_view">
                    <div className="first_view_texts">
                        {showInput ? (
                            renderTaskInput()
                            
                        ) :showProject?(
                            renderProjectInput()
                        ) :(
                            <>
                                <p className="fv_heading">
                                    Unlock project success with <span> Gogetr's </span> bite-sized approach!
                                </p>
                                <p className="fv_tagline">
                                    With Gogetr, you can say goodbye to overwhelming project steps and hello to a more manageable workflow. By breaking down your project into smaller, more achievable tasks, Gogetr helps you stay focused and motivated, one step at a time.
                                </p>
                                <div className="fv_buttons">
                                    <button className="start_button">Show Tasks</button>
                                    <button className="fv_button" onClick={handleCreateProject}>
                                        Create Project
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
