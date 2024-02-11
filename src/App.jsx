import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          //
          <Hero />
        </div>
        {/*Below is intro*/}
        <About />
        {/*Below is about*/}
        <Works />
        {/*Below is experiences */}
        <Experience />
        {/*Below is Contacts*/}
        <Feedbacks />
        {/*<Tech />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>*/}
      </div>
    </BrowserRouter>
  );
};

export default App;
