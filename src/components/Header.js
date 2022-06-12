import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../source/App_logo.svg";
import { MdOutlineClose } from "react-icons/md";
import { CredentialContext } from "../App";

export const handleErrors = async (response) => {
  if (!response.ok) {
    const { message } = await response.json();
    console.log("message", message);
    throw Error(message);
  }
  return response.json();
};

const Header = () => {
  const [SignInModal, setSignInModal] = React.useState(false);
  const [SignUpModal, setSignUpModal] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [useremail, setUseremail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [credentials, setcredentials] = useContext(CredentialContext);

  // SIGN UP
  const Register = (e) => {
    // setSignUpModal(false);
    e.preventDefault();
    fetch("https://mern-to-api.herokuapp.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, useremail, password }),
    })
      .then(handleErrors)
      .catch((error) => {
        setError(error.message);
      })
      .then((error) =>
        !error
          ? null
          : navigate(
              "/welcome",
              setcredentials({ username, useremail, password }),
              setSignUpModal(false)
            )
      );
  };

  // SIGN IN
  const Login = (e) => {
    e.preventDefault();
    fetch("https://mern-to-api.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, useremail, password }),
    })
      .then(handleErrors)
      .catch((error) => {
        setError(error.message);
      })
      .then((error) =>
        !error
          ? null
          : navigate(
              "/welcome",
              setcredentials({ username, useremail, password }),
              setSignInModal(false)
            )
      );
  };

  // Logout
  const Logout = () => {
    setcredentials(null);
  };

  const signUpModal = () => {
    setSignInModal(false);
    setSignUpModal(true);
  };

  const signInModal = () => {
    setSignInModal(true);
    setSignUpModal(false);
  };

  return (
    <div class="bg-white">
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
                    <h3 className="text-md md:text-3xl md:w-96 font-semibold">
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
                      <form
                        onSubmit={Login}
                        className="flex flex-col gap-2 md:gap-4"
                      >
                        <label className="text-sm md:text-md font-semibold">
                          Username
                        </label>
                        <input
                          className="border rounded p-1 placeholder:text-sm md:p-2  outline-green-200"
                          placeholder="Jhon doe"
                          type="name"
                          name="name"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className="text-sm md:text-md font-semibold">
                          Password
                        </label>
                        <input
                          className="border rounded p-1 placeholder:text-sm md:p-2 outline-green-200"
                          placeholder="Password"
                          type="password"
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
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
                      {error ? (
                        <h1 className="text-sm text-red-500">{error}</h1>
                      ) : null}
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
                      type="submit"
                      onClick={Login}
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
                    <h3 className="text-md md:text-3xl md:w-96 font-semibold">
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
                      <form
                        onSubmit={Register}
                        className="flex flex-col gap-2 md:gap-4"
                      >
                        <label className="text-sm md:text-md font-semibold">
                          Name
                        </label>
                        <input
                          className="border rounded p-1 placeholder:text-sm md:p-2  outline-green-200"
                          placeholder="Jhon Doe"
                          type="name"
                          name="name"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className="text-sm md:text-md font-semibold">
                          Email
                        </label>
                        <input
                          className="border rounded p-1 placeholder:text-sm md:p-2  outline-green-200"
                          placeholder="User@mail.com"
                          type="email"
                          name="email"
                          onChange={(e) => setUseremail(e.target.value)}
                        />
                        <label className="text-sm md:text-md font-semibold">
                          Password
                        </label>
                        <input
                          className="border rounded p-1 placeholder:text-sm md:p-2  outline-green-200"
                          placeholder="Password"
                          type="password"
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
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
                      {error ? (
                        <h1 className="text-sm text-red-500">{error}</h1>
                      ) : null}
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
                      type="submit"
                      onClick={Register}
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
        <div class="h-20 w-20 md:h-30 md:w-30 cursor-pointer">
          <a href="/">
            <img src={logo} alt="" srcset="" />
          </a>
        </div>
        {!credentials ? (
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
        ) : (
          <a href="/">
            <button
              onClick={Logout}
              type="button"
              class="border rounded border-green-500 bg-white text-sm md:text-md px-4 py-2 text-green-500  hover:bg-green-300 hover:text-black cursor-pointer"
            >
              Logout
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Header;
