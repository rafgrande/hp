import styles from './Card.module.scss'

const Card = () => {
    return (
        <section className={styles.container}>
            <div>H</div>
            <img src="https://ik.imagekit.io/hpapi/ron.jpg"/>
            <div className={styles.container__name}>
                <span className={styles.container__name__person}>Name</span>
                <span className={styles.container__name__actor}>(Actor)</span>
            </div>
            <span>00/00/1010</span>

        </section>
    )
}

export default Card;