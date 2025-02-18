import admin from "../config/firebaseConfig";
import { IUser } from "../entities/user";

const db = admin.firestore();

export const updateUserInFirestore = async (user: IUser) => {
  const userRef = db.collection("USERS").doc(user.id);
  await userRef.set(user, { merge: true });
};

export const getUserFromFirestore = async () => {
  const snapshot = await db.collection("USERS").get();
  const users: IUser[] = [];
  snapshot.forEach((doc) => {
    users.push({ id: doc.id, ...(doc.data() as Omit<IUser, "id">) });
  });
  return users;
};
