import {Ingredient } from './ingredient.model'
export class Recette {
    constructor(
    public  preparationTime: string,
    public  type: string,
    public name: string,
    public instructions: string,
    public ingredients: Ingredient [],
    ) {

    }
}

