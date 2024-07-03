import { ThemeProvider } from "@emotion/react";
import "./App.css";
import NavBar from "./components/navBar";
import {theme} from "./theme";
import Landing from "./pages/landing/Landing";
import About_us from "./pages/about-us/About-us";
import Signup_section from "./pages/signup_section/Signup_section";
import Cards from "./pages/cards/Cards";
import Steps from "./pages/Setps/Steps";
import ImgSection from "./pages/imgSection/imgSection";
import Questions from "./pages/Questions/Questions";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <Landing />
        <About_us />
        <Signup_section />
        <Cards />
        <Steps />
        <ImgSection />
        <Questions />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
