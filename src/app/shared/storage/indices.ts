import PouchDB from "pouchdb";

export default [
  {
    index: {
      ddoc: "idx_entityType",
      fields: ["$entityType"],
      name: "idx_entityType",
    },
  },
  {
    index: {
      ddoc: "idx_title",
      fields: ["title"],
      name: "idx_title",
    },
  },
] as PouchDB.Find.CreateIndexOptions[];
