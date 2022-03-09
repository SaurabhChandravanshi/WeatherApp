import React from 'react'
import styles from '../styles/Home.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <span> Made with React.js{' '} - fork or suggest edit on <a href='https://github.com/SaurabhChandravanshi/WeatherApp'>Github</a>.
            </span>
        </footer>
    )
}
