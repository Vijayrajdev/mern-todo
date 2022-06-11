import React from "react";
import logo from "../source/App_logo.svg";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
  const [SignInModal, setSignInModal] = React.useState(false);
  const [SignUpModal, setSignUpModal] = React.useState(false);

  const signUpModal = () => {
    setSignInModal(false);
    setSignUpModal(true);
  };

  const signInModal = () => {
    setSignInModal(true);
    setSignUpModal(false);
  };

  return (
    <div>
      {/* SIGN IN MODAL */}
      <>
        {SignInModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-sm md:max-w-lg">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center justify-between p-5 md:m-4 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-md md:text-3xl font-semibold">
                      Login into your account🚀
                    </h3>
                    <button
                      type="button"
                      onClick={() => setSignInModal(false)}
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
                          Email
                        </label>
                        <input
                          className="border rounded p-1 placeholder:text-sm md:p-2  outline-green-200"
                          placeholder="User@mail.com"
                          type="email"
                          name="email"
                        />
                        <label className="text-sm md:text-md font-semibold">
                          Password
                        </label>
                        <input
                          className="border rounded p-1 placeholder:text-sm md:p-2 outline-green-200"
                          placeholder="Password"
                          type="password"
                          name="password"
                        />
                      </form>
                    </div>

                    <div>
                      <h1 class="text-sm md:text-base">
                        Don't have an account?
                      </h1>
                      <button
                        type="button"
                        onClick={signUpModal}
                        class="text-green-500 text-sm md:text-md hover:text-black py-2 cursor-pointer"
                      >
                        Create one
                      </button>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex gap-4 items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      class="border border-slate-100 rounded bg-slate-100 text-sm md:text-md px-4 py-2 text-black hover:text-red-400 cursor-pointer"
                      type="button"
                      onClick={() => setSignInModal(false)}
                    >
                      Close
                    </button>
                    <button
                      class="border rounded border-green-500 bg-white text-sm md:text-md px-4 py-2 text-green-500  hover:bg-green-300 hover:text-black cursor-pointer"
                      type="button"
                      onClick={() => setSignInModal(false)}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>

      {/* SIGNUPMODAL */}
      <>
        {SignUpModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-sm md:max-w-lg">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center justify-between p-4 md:m-4 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-md md:text-3xl font-semibold">
                      Register for new account⚡
                    </h3>
                    <button
                      type="button"
                      onClick={() => setSignUpModal(false)}
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
                          Name
                        </label>
                        <input
                          className="border rounded p-1 placeholder:text-sm md:p-2  outline-green-200"
                          placeholder="Jhon Doe"
                          type="name"
                          name="name"
                        />
                        <label className="text-sm md:text-md font-semibold">
                          Email
                        </label>
                        <input
                          className="border rounded p-1 placeholder:text-sm md:p-2  outline-green-200"
                          placeholder="User@mail.com"
                          type="email"
                          name="email"
                        />
                        <label className="text-sm md:text-md font-semibold">
                          Password
                        </label>
                        <input
                          className="border rounded p-1 placeholder:text-sm md:p-2  outline-green-200"
                          placeholder="Password"
                          type="password"
                          name="password"
                        />
                      </form>
                    </div>

                    <div>
                      <h1 className="text-sm md:text-base">
                        Already have an account?
                      </h1>
                      <button
                        type="button"
                        onClick={signInModal}
                        class="text-green-500 text-sm md:text-md hover:text-black py-2 cursor-pointer"
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex gap-4 items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      class="border border-slate-100 rounded bg-slate-100 text-sm md:text-md px-4 py-2 text-black hover:text-red-400 cursor-pointer"
                      type="button"
                      onClick={() => setSignUpModal(false)}
                    >
                      Close
                    </button>
                    <button
                      class="border rounded border-green-500 bg-white text-sm md:text-md px-4 py-2 text-green-500  hover:bg-green-300 hover:text-black cursor-pointer"
                      type="button"
                      onClick={() => setSignUpModal(false)}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>

      <div class="flex justify-between items-center px-4 shadow">
        <div class="h-20 w-20 md:h-30 md:w-30">
          <img src={logo} alt="" srcset="" />
        </div>
        <div class="flex gap-4 md:gap-6">
          <button
            type="button"
            onClick={() => setSignUpModal(true)}
            class="hidden md:flex border border-slate-100 rounded bg-slate-100 text-sm md:text-md px-4 py-2 text-black hover:text-green-400 cursor-pointer"
          >
            Sign Up
          </button>
          <button
            type="button"
            onClick={() => setSignInModal(true)}
            class="border rounded border-green-500 bg-white text-sm md:text-md px-4 py-2 text-green-500  hover:bg-green-300 hover:text-black cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
