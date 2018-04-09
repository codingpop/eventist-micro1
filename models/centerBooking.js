export default (sequelize, DataTypes) => {
  const CenterBooking = sequelize.define('CenterBooking', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    eventId: {
      type: DataTypes.STRING,
      unique: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    centerId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  CenterBooking.associate = function (models) {
    // associations can be defined here
  };
  return CenterBooking;
};
