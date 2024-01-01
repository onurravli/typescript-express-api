import { Request, Response } from "express";

class MainController {
  public async get(req: Request, res: Response) {
    return res.status(200).json({
      message: "Hello, world! Don't forget to change these methods.",
    });
  }
}

export default MainController;
