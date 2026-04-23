"use client";
import { Auth } from "firebase/auth";
import { Firestore } from "firebase/firestore";
import { createContext, useContext } from "react";
import { FirebaseStorage } from "firebase/storage";
import { auth, db, storage } from "@/lib/firebase-config";
interface FirebaseContextType {
	auth: Auth | undefined;
	db: Firestore | undefined;
	storage: FirebaseStorage | undefined;
}
const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);
export function FirebaseProvider({ children }: { children: React.ReactNode }) {
	return <FirebaseContext.Provider value={{ auth, db, storage }}>{children}</FirebaseContext.Provider>;
}
export const useFirebase = () => {
	const context = useContext(FirebaseContext);
	if (context === undefined) throw new Error("useFirebase must be used within a FirebaseProvider");
	return context;
};
