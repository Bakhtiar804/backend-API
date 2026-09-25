import express from "express";
import { Router } from "express";

const productsRoute = Router();

const products = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    category: "beauty",
    price: 9.99,
    stock: 99,
    brand: "Essence"
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    category: "beauty",
    price: 19.99,
    stock: 34,
    brand: "Glamour Beauty"
  },
  {
    id: 3,
    title: "Powder Canister",
    category: "beauty",
    price: 14.99,
    stock: 89,
    brand: "Velvet Touch"
  },
  {
    id: 4,
    title: "Red Lipstick",
    category: "beauty",
    price: 12.99,
    stock: 91,
    brand: "Chic Cosmetics"
  },
  {
    id: 5,
    title: "Red Nail Polish",
    category: "beauty",
    price: 8.99,
    stock: 79,
    brand: "Nail Couture"
  },
  {
    id: 6,
    title: "Calvin Klein CK One",
    category: "fragrances",
    price: 49.99,
    stock: 29,
    brand: "Calvin Klein"
  },
  {
    id: 7,
    title: "Chanel Coco Noir Eau De",
    category: "fragrances",
    price: 129.99,
    stock: 58,
    brand: "Chanel"
  },
  {
    id: 8,
    title: "Dior J'adore",
    category: "fragrances",
    price: 89.99,
    stock: 98,
    brand: "Dior"
  },
  {
    id: 9,
    title: "Dolce Shine Eau de",
    category: "fragrances",
    price: 69.99,
    stock: 4,
    brand: "Dolce & Gabbana"
  },
  {
    id: 10,
    title: "Gucci Bloom Eau de",
    category: "fragrances",
    price: 79.99,
    stock: 91,
    brand: "Gucci"
  }
];





productsRoute.get('/', (req, res) => {
    res.json(products)
  
})


productsRoute.use(express.json());
productsRoute.post('/', (req, res) => {
    const user = req.body
    user.id = products.length + 1;
    products.push(user);
    res.status(200).send({status : 200 , message : " User added successfully"})
})


productsRoute.put('/:id', (req, res) => {
    const index = Number(req.params.id);
    const product = products.find(product => product.id === index);
    if(product === undefined){
      return  res.status(404).send({status : 404 , message : "User Not Found"})
    }
    product.brand = req.body.brand ?? product.brand;
    product.category = req.body.category ?? product.category;
    product.price = req.body.price ?? product.price;
    product.stock = req.body.stock ?? product.stock;
    product.title = req.body.title ?? product.title;

    res.status(200).send({status : 200 , message :" User updated successfully"})
})


productsRoute.delete('/:id' , (req , res) => {
    const id = Number(req.params.id);
    const index = products?.findIndex(index => index.id === id);
    if (index === -1) {
    return res.status(404).send({status : 404 , message : "User Not FOund"});
}
    
    users.splice(index , 1);
    res.status(200).send({status : 200 , message : "Deleted Successfully"})
})



export default productsRoute