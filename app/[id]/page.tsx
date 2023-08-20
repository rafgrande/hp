import ICharacter from "../interfaces/ICharacter";

import styles from './Character.module.scss'

interface IProps {
    params: IParams;
}

interface IParams {
    id: string
}

interface IPropsAttr {
    name: string;
    value: any
}

export function Attr({name, value}: IPropsAttr) {
    if(name === "id" || name === "name" || name === "image") return null

    if(typeof value === "object" && Array.isArray(value)) {
        return (
        <div className={styles.character__info__attrArr}>
            <div>{name}</div>
            <div className={styles.character__info__attrArr__values}>
                {value.map(v => (
                    <span>{v}</span>
                ))}
            </div>
        </div>
    )};

    if(typeof value === "object") return null

    return (
        <div className={styles.character__info__attr}>
            <span className={styles.character__info__attr__key}>{name}</span>
            <span  className={styles.character__info__attr__value}>{value}</span>
        </div>
    )
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

    const attributes = Object.entries(character);

    return (
        <section className={styles.character}>
            <div className={styles.character__header}>
                <img className={styles.character__header__image} src={character.image || '/user.png'}/>
                <div className={styles.character__header__name}>
                    <span>{character.name}</span>
                </div>
            </div>
            <div className={styles.character__info}>
                <span className={styles.character__info__title}>Bio</span>
                {
                    attributes.map((attribute) => {
                        const [key, value] = attribute
                        return (
                            <Attr key={key} name={key} value={value}/>
                        )
                    }

                    )
                }
                
                
            </div>
            
        </section>
    )
}