import styles from './Card.module.scss'

const Card = () => {
    return (
        <section className={styles.card}>
            <div className={`${styles.card__house} ${styles.card__house__Slytherin}`}></div>
            <img src="https://ik.imagekit.io/hpapi/ron.jpg"/>
            <div className={styles.card__info}>
                <div className={styles.card__info__name}>
                    <span className={styles.card__info__name__person}>Name</span>
                    <span className={styles.card__info__name__actor}>(Actor)</span>
                </div>
                <span className={styles.card__info__dateOfBirth}>00/00/1010</span>
            </div>
        </section>
    )
}

export default Card;