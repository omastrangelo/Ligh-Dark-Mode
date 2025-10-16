import { useTheme } from "../components/UseTheme";

function Header() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header>
      <h1>{darkMode ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}</h1>
      <button onClick={toggleTheme}>
        Cambiar a {darkMode ? "modo claro" : "modo oscuro"}
      </button>
    </header>
  );
}

export default Header;
