import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import Select from "react-select";
import makeAnimated from "react-select/animated";

// Select component
const animatedComponents = makeAnimated();

const options = [
  { value: "Completed", label: "complete" },
  { value: "Uncompleted", label: "uncomplete" },
];

const Main = () => {
  const [TodoModal, setTodoModal] = React.useState(false);
  return (
    <div class=" min-h-screen md:min-h-[80vh] p-4 md:max-w-5xl mx-auto">
      {/* TODO MODAL */}
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
                      <form className="flex flex-col gap-2 md:gap-4" action="">
                        <label className="text-sm md:text-md font-semibold">
                          Title
                        </label>
                        <input
                          className="border rounded p-1 placeholder:text-sm md:p-2  outline-green-200"
                          placeholder="Task title"
                          type="title"
                          name="title"
                        />
                        <label className="text-sm md:text-md font-semibold">
                          Description
                        </label>
                        <input
                          className="border rounded p-1 placeholder:text-sm md:p-2 outline-green-200"
                          placeholder="Description"
                          type="description"
                          name="description"
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
                      onClick={() => setTodoModal(false)}
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
      <div>
        <div className="flex items-center justify-center my-6 text-xl md:text-3xl font-semibold ">
          <h1>Welcome Username</h1>
        </div>
        <div className="border-b my-6" />
        <div class="flex items-center justify-between">
          <p class="text-xl">Your tasks</p>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={options[0]}
            isMulti
            options={options}
          />
        </div>
      </div>

      <div class="flex flex-col gap-6 my-4">
        <div class="flex items-center justify-start gap-8">
          <input class="bg-green-400" type="checkbox" name="" id="" />
          <div class="flex flex-col gap-1">
            <h1 class="text-lg font-semibold">Task 1</h1>
            <p class="text-sm font-thin text-slate-500">Description</p>
          </div>
        </div>
        <div class="flex items-center justify-start gap-8">
          <input type="checkbox" name="" id="" />
          <div class="flex flex-col gap-1">
            <h1 class="text-lg font-semibold">Task 1</h1>
            <p class="text-sm font-thin text-slate-500">Description</p>
          </div>
        </div>
        <div class="flex items-center justify-start gap-8">
          <input type="checkbox" name="" id="" />
          <div class="flex flex-col gap-1">
            <h1 class="text-lg font-semibold">Task 1</h1>
            <p class="text-sm font-thin text-slate-500">Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
