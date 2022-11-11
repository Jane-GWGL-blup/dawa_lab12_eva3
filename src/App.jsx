import { useState, useEffect } from "react";
import theme from "./theme";
import { Header, CardMovies, Footer } from "./components";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import { get } from "./services";
import "./App.css";

function App() {
  
  console.log("1")
  
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    
    const movies = await get();
    console.log(movies.entries)
    setMovies(movies.entries);
  }


  useEffect(() => {
    // llamo a la funcion
    getMovies();
  }, []);

  return (
    <ThemeProvider theme={theme}>
        <Header/>    
        <CardMovies movies={movies}/>
        <Footer/>
    </ThemeProvider>
  );
}

export default App
