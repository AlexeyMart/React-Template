import { FC } from 'react';

// Styles
import './styles.css';

// Images
import ReactImage from './assets/images/favicon.png';

// Svg
import ReactLogo from './assets/svg/react-logo.svg';

const App: FC = () => {
  return (
    <div className="main">
      <h1 className="main__title">React Typescript Webpack Template</h1>

      {/* <div>
        Process is {process.env.NODE_ENV} {process.env.name}
      </div> */}

      <img src={ReactImage} alt="logo" className="main__image" />

      <img src={ReactLogo} alt="logo" className="main__image" />
    </div>
  );
};

export default App;
