import Sequelize from 'sequelize';

import sequelize from '../config/sequelize';

const CenterBooking = sequelize.define('center-booking', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  eventId: {
    type: Sequelize.UUID,
    unique: true,
  },
  userId: {
    type: Sequelize.UUID,
    allowNull: false,
  },
  centerId: {
    type: Sequelize.UUID,
    allowNull: false,
  },
});

export default CenterBooking;
