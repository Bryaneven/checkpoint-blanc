class Recette {
    preparationTime: number;
    type: string;
    name: string;
    instructions: string;
    ingredients: Ingredient [];
}
class Ingredient {
    name: string;
    pricePerKilo: number;
    image: string;
}