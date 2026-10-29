const { Collection, Product } = require("./models");

(async () => {
  console.log((await Product.findAll()).map((p) => p.toJSON()));

  console.log((await Product.findByPk(1)).toJSON());

  console.log(
    (await Product.findAll({ where: { color: "blue" } })).map((p) => p.title),
  );

  const cols = await Collection.findAll({ include: Product });
  cols.forEach((c) =>
    console.log(
      c.name,
      c.Products.map((p) => p.title),
    ),
  );

  const p = await Product.create({
    title: "Куртка",
    price: 7000,
    size: "XL",
    color: "green",
    collectionId: 3,
  });
  console.log("Создан:", p.id);
})();
