import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../app/features/theme/themeSlice";

const ToggleTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    if (!theme) return;
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    return () => document.body.classList.remove(theme);
  }, [theme]);

  return (
    <div>
      <h3>Current theme: {theme}</h3>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
  );
};

export default ToggleTheme;
