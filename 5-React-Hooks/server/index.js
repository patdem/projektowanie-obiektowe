const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/products", (req, res) => {
  res.json([
    {
      id: 0,
      name: "Milk",
      description: "Cow's milk, 1.5% fat",
      category: 0,
    },
    {
      id: 1,
      name: "Apple",
      description: "Red Apple",
      category: 0,
    },
    {
      id: 2,
      name: "Socks",
      description: "Great socks",
      category: 1,
    },
  ]);
});

app.get("/categories", (req, res) => {
  res.json([
    {
      id: 0,
      name: "Food",
    },
    {
      id: 1,
      name: "Clothes",
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
