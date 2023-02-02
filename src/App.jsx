import { useSelector } from 'react-redux';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Section from './App.styled';
import { useEffect } from 'react';
import {TODO_LIST_STORAGE_KEY, FILTER_STORAGE_KEY} from './service/service';


const App = () => {

  const data = useSelector(fullStore => fullStore.data.data);

  const filter = useSelector(fullStore => fullStore.data.filter);

  useEffect(() => {
    const setStoredData = JSON.stringify(data);
    localStorage.setItem(TODO_LIST_STORAGE_KEY, setStoredData);
  }, [data]);

  useEffect(() => {
    localStorage.setItem(FILTER_STORAGE_KEY, filter);
  }, [filter])

  return (
    <Section >
      <Header />
      <Main />
      {data.length > 0 && <Footer />}
    </Section>
  );
}

export default App;
