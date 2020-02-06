import { MongoClient, ObjectID } from 'mongodb';
const DATABASE_NAME = 'TeamTrip';
const DB_URL =
  'mongodb+srv://teamtrip_user:UserTeamTrip2020@danielrsantana-owxko.mongodb.net/TeamTrip?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';

export const TeamTripDb = {
  getDbCollection: collection => {
    return new Promise((resolve, reject) => {
      MongoClient.connect(DB_URL, { useUnifiedTopology: true })
        .then(client => resolve(client.db(DATABASE_NAME).collection(collection)))
        .catch(error => reject(error));
    });
  },

  mapToDbEntry: entry => {
    if (entry.id) {
      entry._id = ObjectID(entry.id);
      delete entry.id;
    }

    return entry;
  },

  validateToken: token => {
    if (!token || token.length !== 24) {
      TeamTripDb.throwUnautorizedException();
    }

    return TeamTripDb.getDbCollection('user').then(collection => {
      return collection.findOne({ _id: ObjectID(token) }).then(result => {
        if (result && result._id.toString() === token.toString()) {
          return true;
        } else {
          TeamTripDb.throwUnautorizedException();
        }
      });
    });
  },

  throwUnautorizedException: () => {
    throw 'Unautorized Request';
  },

  addToCollection: (collectionName, params) => {
    return TeamTripDb.validateToken(params.token).then(result => {
      return TeamTripDb.getDbCollection(collectionName).then(collection => {
        return collection.insertOne(TeamTripDb.mapToDbEntry(params.item)).then(result => {
          item.id = result.insertedId;
          return item;
        });
      });
    });
  },

  editOnCollection: (collectionName, params) => {
    return TeamTripDb.validateToken(params.token).then(result => {
      return TeamTripDb.getDbCollection(collectionName).then(collection => {
        return collection.updateOne(TeamTripDb.mapToDbEntry(params.filter), [{ $set: params.item }]).then(result => {
          return result.matchedCount === 1;
        });
      });
    });
  },

  deleteOnCollection: (collectionName, params) => {
    return TeamTripDb.validateToken(params.token).then(result => {
      return TeamTripDb.getDbCollection(collectionName).then(collection => {
        return collection.deleteOne(TeamTripDb.mapToDbEntry(params.item)).then(result => {
          return result.deletedCount === 1;
        });
      });
    });
  },

  findOnCollectionByIdBy: (collectionName, params) => {
    return TeamTripDb.validateToken(params.token).then(result => {
      return TeamTripDb.getDbCollection(collectionName).then(collection => {
        return collection.findOne(TeamTripDb.mapToDbEntry({ id: params.id }));
      });
    });
  },

  findOnCollection: (collectionName, params) => {
    return TeamTripDb.validateToken(params.token).then(result => {
      return TeamTripDb.getDbCollection(collectionName).then(collection => {
        return collection.findOne(TeamTripDb.mapToDbEntry(params.filter));
      });
    });
  },

  listOnCollection: (collectionName, params) => {
    return TeamTripDb.validateToken(params.token).then(result => {
      return TeamTripDb.getDbCollection(collectionName).then(collection => {
        return collection.find().toArray();
      });
    });
  },
};
