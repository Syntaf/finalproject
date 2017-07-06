

module.exports = function(sequelize, DataTypes) {

  var Burger = sequelize.define("Burger", {
    burger_name: {
    type: DataTypes.STRING,
    allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }

  // {
  //   classMethods: {
  //     associate: function(models) {

  //       Burger.belongsTo(models.Eater, {

  //         onDelete: "CASCADE",
  //         foreignKey: {
  //           allowNull: false
  //         }
  //       });
  //     }

  //   }
  // }
);

return Burger;

}

	



// var burger = {

//  selectAll: function(cb) {
//     orm.selectAll("burgers", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   insertOne: function(cols, vals, cb) {
//     orm.insertOne("burgers", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   updateOne: function(objColVals, condition, cb) {
//     orm.updateOne("burgers", objColVals, condition, function(res) {
//       cb(res);
//     });
//   }
// };

