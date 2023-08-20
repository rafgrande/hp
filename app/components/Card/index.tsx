import ICharacter from '@/app/interfaces/ICharacter';
import styles from './Card.module.scss'

interface IProps {
    character: ICharacter
}

const getHouseStyle = (house: string) => {
    switch (house) {
        case 'Slytherin':
            return styles.card__house__Slytherin; 
            break;
        case 'Gryffindor':
            return styles.card__house__Gryffindor; 
            break;
        case 'Hufflepuff':
            return styles.card__house__Hufflepuff; 
            break;
        case 'Ravenclaw':
            return styles.card__house__Ravenclaw; 
            break;
        default:
            return styles.card__house__none;
            break;
    }
}

const Card = ({character} :IProps) => {
    return (
        <section className={styles.card}>
            <a href={`/${character.id}`}>
                <div className={`${styles.card__house} ${getHouseStyle(character.house)}`}></div>
                <div className={styles.card__image}>
                    <img src={character.image || '/user.png'} width={300} height={400}/>
                </div>
                
                <div className={styles.card__info}>
                        <span className={styles.card__info__name__person}>{character.name}</span>
                        <span className={styles.card__info__name__actor}>({character.actor})</span>

                    <span className={styles.card__info__dateOfBirth}>{character.dateOfBirth}</span>
                </div>
            </a>
        </section>
    )
}

export default Card;