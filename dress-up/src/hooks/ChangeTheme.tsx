import { useTheme } from "../contexts/ThemeContext";

const ChangeTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-row items-center">
      {theme === "light" ? (
        <img
          src="sun.png"
          className="border-[1px] border-pink-200 cursor-pointer"
          onClick={toggleTheme}
        ></img>
      ) : (
        <img
          src="moon.png"
          className="border-[1px] border-forth cursor-pointer"
          onClick={toggleTheme}
        ></img>
      )}

      <p
        className={`${
          theme === "dark" ? "text-forth" : "text-gray-400"
        } text-[15px] ml-[5px]`}
        onClick={toggleTheme}
      >
        Change theme
      </p>
    </div>
  );
};

export default ChangeTheme;
