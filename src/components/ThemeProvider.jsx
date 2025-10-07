import { useState,useEffect} from "react";

export const ThemeProvider = ()=>{

    const [darkMode, setDarkMode] = useState(false)
    const toggleTheme = () => setDarkMode(!darkMode);

   useEffect(() => {
      document.body.className = darkMode ? "dark" : "light";
    }, [darkMode]);

    return(
        <div className={darkMode ? "app dark" : "app light"}>
        <h1>{darkMode ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}</h1>
        <button onClick={toggleTheme}>
          Cambiar a {darkMode ? "modo claro" : "modo oscuro"}
        </button>
      </div>
    );

}


export default ThemeProvider

