module.exports = function(sequelize, DataTypes) {
  var Eater = sequelize.define("Eater", {
    // Giving the Eater model a name of type STRING
    name: DataTypes.STRING
  },

  {
    classMethods: {
      associate: function(models) {
        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Task.belongsTo(models.User);
        Eater.hasMany(models.Burger
        );
      }
    }
  }

  );
  return Eater;
};
