import styles from '../styles/Cards.module.css'
import moment from 'moment'

function Card({weather, setSelectedCard}) {
  const toCelcius = (value) => {
    return (value - 273.15).toFixed(0);
  }
  
  return (
    <div className={styles.card} onClick={() => setSelectedCard(weather)}>
      <h2>{moment(new Date(weather.dt_txt)).format('dddd')}</h2>
      <p>{moment(new Date(weather.dt_txt)).format('D MMM yyyy')}</p>
      <img alt='icon' className={styles.logo} src={require('../images/' + weather.weather[0].main + '.svg')} width={60} height={60}/>
      <h1>{toCelcius(weather.main.temp)}&deg;C</h1>
      <span>{weather.weather[0].main}</span>
    </div>
  )
}

export default Card;
