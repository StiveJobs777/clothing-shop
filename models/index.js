const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "shop.db",
  logging: false,
});

const Collection = sequelize.define("Collection", {
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  season: { type: DataTypes.STRING },
});

const Product = sequelize.define("Product", {
  title: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  size: { type: DataTypes.STRING },
  color: { type: DataTypes.STRING },
});

Collection.hasMany(Product, { foreignKey: "collectionId" });
Product.belongsTo(Collection, { foreignKey: "collectionId" });

module.exports = { sequelize, Collection, Product };
