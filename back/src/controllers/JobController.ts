import { Request, Response } from "express";
import { Database } from "../database/db";

export default class JobController {
  async findAll(request: Request, response: Response) {
    const dbConnection = await Database.getDatabase();

    const filter = request?.params?.filter;
    const query = filter ? { cargo: { $regex: filter, $options: "i" } } : {};

    const data = await dbConnection.collection("jobs").find(query).toArray();

    Database.closeConnection();

    response.status(200).json(data);
  }

  // async create(request: Request, response: Response) {
  //   const dbCon = database.getDatabase();
  // }
}
