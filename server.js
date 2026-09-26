import express from "express";
import userRoutes from "./routes/userRoutes.js"
import productsRoute from "./routes/productRoutes.js";
import recipeRoute from "./routes/recipeRoutes.js";
import commentsRoute from "./routes/commentsRoutes.js";



const app = express()

const PORT = 5000;



app.use(express.json())
app.use('/users', userRoutes);

app.use(express.json());
app.use('/recipes', recipeRoute)

app.use(express.json())
app.use('/products', productsRoute);


app.use(express.json());
app.use('/comments', commentsRoute);


















app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});