export default (sequelize, DataTypes) => {
  const EventBooking = sequelize.define('EventBooking', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    eventId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  EventBooking.associate = function (models) {
    // associations can be defined here
  };
  return EventBooking;
};
