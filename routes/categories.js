import express from "express"

const categoriesRoute = express.Router();
const categories = [
  {
    id: 1,
    name: "Beauty"
  },
  {
    id: 2,
    name: "Fragrances"
  },
  {
    id: 3,
    name: "Furniture"
  },
  {
    id: 4,
    name: "Groceries"
  },
  {
    id: 5,
    name: "Laptops"
  },
  {
    id: 6,
    name: "Mens Shirts"
  },
  {
    id: 7,
    name: "Mens Shoes"
  },
  {
    id: 8,
    name: "Mobile Accessories"
  },
  {
    id: 9,
    name: "Motorcycle"
  },
  {
    id: 10,
    name: "Skin Care"
  }
];


categoriesRoute.get("/categories" , (req , res) =>{
    res.status(200).json(categories)
})


categoriesRoute.get("/categories" , (req , res) =>{
    const category = req.body;
    category.id = categories.length + 1;
    categories.push(category);

    res.status(200).send({status : 200 , message : "Category added successfully"})
})


categoriesRoute.put('/:id', (req, res) => {
    const index = Number(req.params.id);
    const category = categories.find(category => category.id === index);
    if(category === undefined){
      return  res.status(404).send({status : 404 , message : "Category Not Found"})
    }
    category.name = req.body.name ?? category.name;


    res.status(200).send({status : 200 , message :"Category updated successfully"})
})


categoriesRoute.delete('/categories:id' , (req , res) => {
    const id = Number(req.params.id);
    const index = categories?.findIndex(index => index.id === id);
    if (index === -1) {
    return res.status(404).send({status : 404 , message : "Category Not FOund"});
}
    
    categories.splice(index , 1);
    res.status(200).send({status : 200 , message : "Deleted Successfully"})
})



export default categoriesRoute