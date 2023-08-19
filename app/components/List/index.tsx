import ICharacters from "@/app/interfaces/ICharacter"
import Card from "../Card"
import styles from './List.module.scss'

interface IProps {
    characters: ICharacters[]
}

const List = ({characters}: IProps) => {
    return (
        <section className={styles.list}>
            {
                characters.map((p: any) => (
                    <Card key={p.id} character={p}/>
                ))
            }
        </section>
    )
}

export default List