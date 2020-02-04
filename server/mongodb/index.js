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

  addToCollection: (collectionName, item) => {
    return TeamTripDb.getDbCollection(collectionName).then(collection => {
      return collection.insertOne(TeamTripDb.mapToDbEntry(item)).then(result => {
        item.id = result.insertedId;
        return item;
      });
    });
  },

  editOnCollection: (collectionName, filter, item) => {
    return TeamTripDb.getDbCollection(collectionName).then(collection => {
      return collection.updateOne(TeamTripDb.mapToDbEntry(filter), [{ $set: item }]).then(result => {
        return result.matchedCount === 1;
      });
    });
  },

  deleteOnCollection: (collectionName, item) => {
    return TeamTripDb.getDbCollection(collectionName).then(collection => {
      return collection.deleteOne(TeamTripDb.mapToDbEntry(item)).then(result => {
        return result.deletedCount === 1;
      });
    });
  },

  findOnCollection: (collectionName, item) => {
    return TeamTripDb.getDbCollection(collectionName).then(collection => {
      return collection.findOne(TeamTripDb.mapToDbEntry(item));
    });
  },

  listOnCollection: collectionName => {
    return TeamTripDb.getDbCollection(collectionName).then(collection => {
      return collection.find().toArray();
    });
  },
};
