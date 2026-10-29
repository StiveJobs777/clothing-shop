const { sequelize, Collection, Product } = require("./models");

(async () => {
  await sequelize.sync({ force: true }); // создаёт таблицы

  const [summer, winter, basic] = await Collection.bulkCreate([
    { name: "Summer 2026", season: "summer" },
    { name: "Winter 2026", season: "winter" },
    { name: "Basic", season: "all" },
  ]);

  await Product.bulkCreate([
    {
      title: "Футболка",
      price: 1500,
      size: "M",
      color: "white",
      collectionId: summer.id,
    },
    {
      title: "Шорты",
      price: 2200,
      size: "L",
      color: "blue",
      collectionId: summer.id,
    },
    {
      title: "Пуховик",
      price: 9900,
      size: "M",
      color: "black",
      collectionId: winter.id,
    },
    {
      title: "Свитер",
      price: 4500,
      size: "S",
      color: "grey",
      collectionId: winter.id,
    },
    {
      title: "Джинсы",
      price: 3800,
      size: "L",
      color: "blue",
      collectionId: basic.id,
    },
  ]);

  console.log("Готово");
})();
