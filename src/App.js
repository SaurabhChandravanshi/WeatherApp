import Footer from "./components/Footer";
import Header from "./components/Header";
import './styles/globals.css'
import styles from './styles/Home.module.css'
import Cards from './components/Cards';
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {changeLocationName, addWeatherData} from './store/actions/index'

function App() {
  const location = useSelector(store => store.location)
  const dispatch = useDispatch();

  useEffect(async ()=> {
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=8f7b5a75a51ff28a018c566e1da35cff`);
    const data = await resp.json();
    if(data != null) {
        dispatch(addWeatherData(data.list))
        dispatch(changeLocationName(`${data.city.name}, ${data.city.country}`))
    }
}, [location])


  return (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <Cards/>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
