import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/App.error";
import { ZodError } from "zod";

const handleError = (
  error: unknown,
  request: Request,
  response: Response,
  next: NextFunction
): Response => {
  if (error instanceof AppError) {
    return response.status(error.status).json({ message: error.message });
  }

  if (error instanceof ZodError) {
    return response.status(400).json(error.flatten().fieldErrors);
  }

  console.error(error);
  return response.status(500).json({ message: "internal server error" });
};

export default handleError;
