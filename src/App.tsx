import Counter from './Counter';
import './styles.css';
import image from './undraw.png';
import logo from './undraw_svg.svg';

const App = () => {
  const name = 'something';
  return (
    <div>
      <h1>React typescript webpack starter template</h1>
      <h2>{process.env.name}</h2>
      <div className="img__wrapper">
        <img src={image} alt="about us logo" />
        <img src={logo} alt="video call logo" />
      </div>
      <Counter />
    </div>
  );
};

export default App;
