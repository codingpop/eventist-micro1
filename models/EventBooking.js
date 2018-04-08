import Sequelize from 'sequelize';

import sequelize from '../config/sequelize';

const EventBooking = sequelize.define('event-booking', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  userId: {
    type: Sequelize.UUID,
    allowNull: false,
  },
  eventId: {
    type: Sequelize.UUID,
    allowNull: false,
  },
});

export default EventBooking;
