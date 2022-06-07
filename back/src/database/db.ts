import * as mongoDB from "mongodb";

export class Database {
  static db: mongoDB.MongoClient;
  static con: mongoDB.Document;

  public static async connect() {
    this.db = await new mongoDB.MongoClient("mongodb://localhost:27017");
    this.con = await this.db.connect();

    return this.con;
  }

  public static async getDatabase() {
    let client = await this.connect();
    this.con = await client.db("jobsdb.jobsdb");
    return this.con;
  }

  public static async closeConnection() {
    await this.db.close();
  }
}
