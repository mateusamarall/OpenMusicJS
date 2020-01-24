const Sequelize = require('sequelize');
const dbConfig = require('../config/sql/config');
const UserModel = require('../app/models/user');
const ArtistModel = require('../app/models/artist');
const MusicModel = require('../app/models/music');

const connection = new Sequelize(dbConfig);
UserModel.init(connection);
ArtistModel.init(connection);
MusicModel.init(connection);

MusicModel.belongsTo(ArtistModel, { foreignKey: 'singer' });

module.exports = connection;
