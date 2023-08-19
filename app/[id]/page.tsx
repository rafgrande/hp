import ICharacter from "../interfaces/ICharacter";

import styles from './Character.module.scss'

interface IProps {
    params: IParams;
}

interface IParams {
    id: string
}

async function getData(id: string): Promise<ICharacter[]> {
    const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`)
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

export default async function Category( {params}: IProps ) {

    const {id} = params;
    const data = await getData(id)

    const [character] = data;

    return (
        <section className={styles.character}>
            <div className={styles.character__header}>
                <img className={styles.character__header__image} src={character.image}/>
                <div className={styles.character__header__name}>
                    <span>{character.name}</span>
                </div>
                
            </div>
            
        </section>
    )
}