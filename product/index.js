import express from "express";

const app = express();

const products = [
  {
    title: "Mobile",
    price: 20000,
  },
  {
    title: "Laptop",
    price: 30000,
  },
];

app.get("/get-products", (req, res) => {
  res.status(200).json(products);
});

app.post("/add-product", (req, res) => {
  const newProd = req.body;
  const allProds = [newProd, ...products];
  res.status(200).json({ products: allProds });
});

app.listen(8002, () => {
  console.log("User server listening in port 8002");
});
