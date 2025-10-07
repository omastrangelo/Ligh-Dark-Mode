import Header from "./components/Header";
import ThemeProvider from "./components/ThemeProvider";
function App() {
  return (
    <ThemeProvider>

        <Header />
        <main>
          <p> Contenido de mi app</p>
        </main>

    </ThemeProvider>
  );
}

export default App;
