import moment from 'moment';
import React from 'react'
import styles from '../styles/WeatherDetail.module.css'

export default function WeatherDetail({ data }) {
    const toCelcius = (value) => {
        return (value - 273.15).toFixed(0);
    }
    return (
        <>
            <div className={styles.card}>
                <div className={styles.row}>
                    <div>
                        <div className={styles.small}>Humidity</div>
                        <div className={styles.medium}>{data.main.humidity}%</div>
                    </div>
                    <div>
                        <div className={styles.small}>Feels Like</div>
                        <div className={styles.medium}>{toCelcius(data.main.feels_like)}&deg; C</div>
                    </div>
                </div>
                <hr className={styles.hr} />
                <div className={styles.row}>
                    <div>
                        <div className={styles.small}>Min Temp.</div>
                        <div className={styles.medium}>{toCelcius(data.main.temp_min)}&deg; C</div>
                    </div>
                    <div>
                        <div className={styles.small}>Max Temp.</div>
                        <div className={styles.medium}>{toCelcius(data.main.temp_max)}&deg; C</div>
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.row}>
                    <div>
                        <div className={styles.small}>Sea Level</div>
                        <div className={styles.medium}>{data.main.sea_level}</div>
                    </div>
                    <div>
                        <div className={styles.small}>Ground Level</div>
                        <div className={styles.medium}>{data.main.grnd_level}</div>
                    </div>
                </div>
                <hr className={styles.hr} />
                <div className={styles.row}>
                    <div>
                        <div className={styles.small}>Pressure</div>
                        <div className={styles.medium}>{data.main.pressure}</div>
                    </div>
                    <div>
                        <div className={styles.small}>Wind Speed</div>
                        <div className={styles.medium}>{data.wind.speed} km/h</div>
                    </div>
                </div>
            </div>
        </>
    )
}
