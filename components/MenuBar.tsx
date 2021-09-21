import styles from "../styles/MenuBar.module.css"
import Link from 'next/link'

interface MenuBarProps {
    statusTitle: string 
    status: string
}

export default function MenuBar(props: MenuBarProps) {
    return (
        <div className={styles.bar}>
            <a href="#about">
                <button className={styles.button}>About Me</button>
            </a>
            <a href="#portifolio">
                <button className={styles.button}>Portfólio</button>
            </a>
            <a href="#formation">
                <button className={styles.button}>Formação</button>
            </a>
            <a href="#contact">
                <button className={styles.button}>Contato</button>
            </a>
        </div>
    )
}