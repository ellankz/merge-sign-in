import Slider from '../Slider/Slider';
import Header from '../Header/Header';
import SignIn from '../SignIn/SignIn';
import Footer from '../Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Slider />
      <main className="main">
        <Header />
        <SignIn />
        <Footer />
      </main>
    </div>
  );
}

export default App;
