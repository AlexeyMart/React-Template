import { FC } from "react";

// Styles
import "./styles.css";

// Images
import ReactImage from "./assets/images/favicon.png";

// Svg
import ReactLogo from "./assets/svg/react-logo.svg";

const App: FC = () => {
  return (
    <div className="main">
      <h1 className="main__title">React Typescript Webpack Template</h1>

      <img src={ReactImage} alt="main__logo" className="image" />

      <img src={ReactLogo} alt="main__logo" className="image" />
    </div>
  );
};

export default App;
