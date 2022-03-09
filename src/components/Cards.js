import styles from '../styles/Cards.module.css'
import Card from './Card';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import WeatherDetail from './WeatherDetails';

export default function Cards() {
    const weatherData = useSelector(store => store.data);
    const [selectedCard, setSelectedCard] = useState(null)

    return (
        <>
            <div className={styles.grid}>
                {
                    weatherData.map((weather, index) => {
                        if (index % 8 - 1 === 0) {
                            return <Card weather={weather} key={index} setSelectedCard={setSelectedCard} />
                        }
                    })
                }
            </div>
            <div className={styles.detailsGrid}>
                {
                 selectedCard ?  <WeatherDetail data={selectedCard} /> : ''
                }
            </div>
        </>
    )
}