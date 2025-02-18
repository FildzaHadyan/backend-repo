import { Request, Response } from "express";
import {
  updateUserInFirestore,
  getUserFromFirestore,
} from "../repository/userCollection";

export const updateUserData = async (req: Request, res: Response) => {
  const userData = req.body;
  try {
    await updateUserInFirestore(userData);
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error updating user data" });
  }
};

export const fetchUserData = async (req: Request, res: Response) => {
  try {
    const data = await getUserFromFirestore();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user data" });
  }
};
