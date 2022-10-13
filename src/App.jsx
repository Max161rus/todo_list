import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import style from './App.module.css';

const App = () => {
  return (
    <section className={style.todoapp}>
      <Header />
      <Main />
      <Footer />
    </section>
  );
}

export default App;
