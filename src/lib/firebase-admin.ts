import { initializeApp, getApps, getApp, cert, type App } from "firebase-admin/app";
import { getAuth, type Auth } from "firebase-admin/auth";
let adminApp: App | undefined;
let adminAuth: Auth | undefined;
function getFirebaseAdmin(): Auth {
	if (!adminAuth) {
		if (!getApps().length) {
			adminApp = initializeApp({ credential: cert({ projectId: process.env.FIREBASE_PROJECT_ID, clientEmail: process.env.FIREBASE_CLIENT_EMAIL, privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n") }) });
		} else adminApp = getApp();
		adminAuth = getAuth(adminApp);
	}
	return adminAuth;
}
export { getFirebaseAdmin };
