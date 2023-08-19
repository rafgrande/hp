import Card from "../Card"
import styles from './List.module.scss'

const List = () => {
    return (
        <section className={styles.list}>
            <Card />
            <Card />
            <Card />
            <Card />
        </section>
    )
}

export default List