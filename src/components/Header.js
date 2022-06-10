import logo from "../source/App_logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 shadow">
      <div className="h-20 w-20 md:h-30 md:w-30">
        <img src={logo} alt="" srcset="" />
      </div>
      <div className="flex gap-4 md:gap-6">
        <button className="text-black text-sm md:text-md hover:text-green-500 px-4 py-2 cursor-pointer">
          Sign Up
        </button>
        <button className="border border-green-500 bg-white text-sm md:text-md px-4 py-2 text-green-500  hover:bg-green-300 hover:text-black cursor-pointer">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
