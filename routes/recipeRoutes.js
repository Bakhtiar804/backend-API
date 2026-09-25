import express from "express"
import { Router } from "express"

const recipeRoute = Router();

const recipes = [
    {
        id: 1,
        name: "Classic Margherita Pizza",
        cuisine: "Italian",
        difficulty: "Easy",
        prepTime: 20,
        cookTime: 15,
        servings: 4
    },
    {
        id: 2,
        name: "Vegetarian Stir-Fry",
        cuisine: "Asian",
        difficulty: "Medium",
        prepTime: 15,
        cookTime: 20,
        servings: 3
    },
    {
        id: 3,
        name: "Chocolate Chip Cookies",
        cuisine: "American",
        difficulty: "Easy",
        prepTime: 15,
        cookTime: 10,
        servings: 24
    },
    {
        id: 4,
        name: "Chicken Alfredo Pasta",
        cuisine: "Italian",
        difficulty: "Medium",
        prepTime: 15,
        cookTime: 20,
        servings: 4
    },
    {
        id: 5,
        name: "Mango Salsa Chicken",
        cuisine: "Mexican",
        difficulty: "Easy",
        prepTime: 15,
        cookTime: 25,
        servings: 3
    },
    {
        id: 6,
        name: "Quinoa Salad",
        cuisine: "Mediterranean",
        difficulty: "Easy",
        prepTime: 20,
        cookTime: 15,
        servings: 4
    },
    {
        id: 7,
        name: "Tomato Basil Bruschetta",
        cuisine: "Italian",
        difficulty: "Easy",
        prepTime: 15,
        cookTime: 10,
        servings: 6
    },
    {
        id: 8,
        name: "Beef Broccoli Stir-Fry",
        cuisine: "Asian",
        difficulty: "Medium",
        prepTime: 20,
        cookTime: 15,
        servings: 4
    },
    {
        id: 9,
        name: "Caprese Salad",
        cuisine: "Italian",
        difficulty: "Easy",
        prepTime: 10,
        cookTime: 0,
        servings: 2
    },
    {
        id: 10,
        name: "Shrimp Scampi Pasta",
        cuisine: "Italian",
        difficulty: "Medium",
        prepTime: 15,
        cookTime: 20,
        servings: 3
    }
];


recipeRoute.get('/', (req, res) => {
    res.status(200).json(recipes);
})

recipeRoute.use(express.json());
recipeRoute.post('/', (req, res) => {
    const recipe = req.body;
    recipe.id = recipes.length + 1;
    recipes.push(recipe);
    res.status(200).send({status : 200 , message : "Recipe added successfully"})
})



recipeRoute.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const recipe = recipes.find(recipe => recipe.id === id);
    if(!recipe){
        return res.status(404).send({status : 404 , message : "Recipe Not Found"})
    }

    recipe.cookTime = req.body.cookTime ?? recipe.cookTime;
    recipe.cuisine = req.body.cuisine ?? recipe.cuisine;
    recipe.prepTime = req.body.prepTime ?? recipe.prepTime;
    recipe.name = req.body.name ?? recipe.name;
    recipe.servings = req.body.servings ?? recipe.servings;
    recipe.difficulty = req.body.difficulty ?? recipe.difficulty;

    res.status(200).send({status : 200 , message : "Recipe updated successfuly"})
});

recipeRoute.delete('/:id' , (req , res) => {
    const id = Number(req.params.id);
    const index = recipes.findIndex(recipe => recipe.id === id);
    if(index === -1){
        res.status(404).send({status : 404 , message : "User Not Found"})
    }
    recipes.splice(index , 1);
    res.status(200).send({status : 200 , message : "Recipe Deleted Successfully"})
})


export default recipeRoute