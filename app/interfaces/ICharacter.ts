import IWand from "./IWand";

export default interface ICharacters {
    id: string,
    name: string,
    alternate_names: string[],
    species: string,
    gender: string,
    house: string,
    dateOfBirth: string,
    yearOfBirth: number,
    wizard: boolean,
    ancestry: string,
    eyeColour: string,
    hairColour: string,
    wand: IWand,
    patronus: string,
    hogwartsStudent: boolean,
    hogwartsStaff: boolean,
    actor: string,
    alternate_actors: [],
    alive: boolean,
    image: string
}