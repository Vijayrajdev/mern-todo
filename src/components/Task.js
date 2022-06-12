import React, { useContext, useEffect, useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import "animate.css";
import { CredentialContext } from "../App";

const Task = () => {
  const [credentials] = useContext(CredentialContext);
  const [TodoModal, setTodoModal] = React.useState(false);
  const [task, setTask] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [filter, setFilter] = useState("complete");

  const persist = (newTask) => {
    fetch("https://mern-to-api.herokuapp.com/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials.username}:${credentials.password}`,
      },
      body: JSON.stringify(newTask),
    }).then(() => {});
  };

  useEffect(() => {
    fetch("https://mern-to-api.herokuapp.com/task", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials.username}:${credentials.password}`,
      },
    })
      .then((res) => res.json())
      .then((tasks) => setTask(tasks));
  }, []);

  const addTask = (e) => {
    e.preventDefault();
    setTodoModal(false);
    const newTask = {
      checked: false,
      title: taskTitle,
      description: taskDesc,
    };
    const newTasks = [...task, newTask];
    setTask(newTasks);
    persist(newTasks);
  };

  const toggleTask = (id) => {
    const newTaskList = [...task];
    const taskItem = newTaskList.find((tasks) => tasks._id === id);
    taskItem.checked = !taskItem.checked;
    setTask(newTaskList);
    persist(newTaskList);
  };

  const getTask = () => {
    const Task = task.filter((tasks) =>
      filter === "complete" ? tasks.checked : !tasks.checked
    );
    return Task;
  };

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div>
      <div>
        <div className="flex animate__animated animate__jackInTheBox items-center justify-center my-6 text-xl md:text-3xl font-semibold ">
          <h1>Welcome {credentials && credentials.username}</h1>
        </div>
        <div className="border-b my-6" />
        <div class="flex items-center justify-between">
          <p class="text-2xl">Your tasks</p>
          <select
            className="px-4 py-2 border rounded outline-green-300"
            onChange={(e) => changeFilter(e.target.value)}
          >
            <option value="complete">Completed</option>
            <option value="uncomplete">Uncompleted</option>
          </select>
        </div>
      </div>
      <>
        {TodoModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-sm md:max-w-lg">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center justify-between p-5 md:m-4 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-md md:text-3xl md:w-96 font-semibold">
                      Add a task 💥
                    </h3>
                    <button
                      type="button"
                      onClick={() => setTodoModal(false)}
                      className=" text-slate-500 text-xl hover:text-red-400 cursor-pointer"
                    >
                      <MdOutlineClose />
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto md:m-2">
                    <div className="mb-6">
                      <form
                        onSubmit={addTask}
                        className="flex flex-col gap-2 md:gap-4"
                      >
                        <label className="text-sm md:text-md font-semibold">
                          Title
                        </label>
                        <input
                          className="border rounded p-1 placeholder:text-sm md:p-2  outline-green-200"
                          placeholder="Task title"
                          type="title"
                          name="title"
                          onChange={(e) => setTaskTitle(e.target.value)}
                        />
                        <label className="text-sm md:text-md font-semibold">
                          Description
                        </label>
                        <input
                          className="border rounded p-1 placeholder:text-sm md:p-2 outline-green-200"
                          placeholder="Description"
                          type="description"
                          name="description"
                          onChange={(e) => setTaskDesc(e.target.value)}
                        />
                      </form>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex gap-4 items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      class="border border-slate-100 rounded bg-slate-100 text-sm md:text-md px-4 py-2 text-black hover:text-red-400 cursor-pointer"
                      type="button"
                      onClick={() => setTodoModal(false)}
                    >
                      Close
                    </button>
                    <button
                      class="border rounded border-green-500 bg-white text-sm md:text-md px-4 py-2 text-green-500  hover:bg-green-300 hover:text-black cursor-pointer"
                      type="button"
                      onClick={addTask}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
      <button
        type="button"
        onClick={() => setTodoModal(true)}
        class="fixed bottom-10 right-10 text-5xl cursor-pointer text-green-300 hover:bg-green-200 hover:text-white rounded-full"
      >
        <BsPlusCircle />
      </button>
      <div class="flex flex-col gap-6 my-4">
        {task ? (
          getTask().map((task) => (
            <div class="flex items-center justify-start gap-8" key={task._id}>
              <input
                class="bg-green-400"
                checked={task.checked}
                id={task._id}
                type="checkbox"
                name=""
                onChange={() => toggleTask(task._id)}
              />
              <label class="flex flex-col gap-1" for={task._id}>
                <h1 class="text-lg font-semibold">{task.title}</h1>
                <p class="text-sm font-thin text-slate-500">
                  {task.description}
                </p>
              </label>
            </div>
          ))
        ) : (
          <p>You've no todos</p>
        )}
      </div>
    </div>
  );
};

export default Task;
