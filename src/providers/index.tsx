"use client";
import GSAPProvider from "./gsap";
import QueryProvider from "./query";
import AuthProvider from "./session";
import { ThemeProvider } from "./theme";
import { FirebaseProvider } from "./firebase";
export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<AuthProvider>
			<FirebaseProvider>
				<ThemeProvider>
					<QueryProvider>
						<GSAPProvider>{children}</GSAPProvider>
					</QueryProvider>
				</ThemeProvider>
			</FirebaseProvider>
		</AuthProvider>
	);
}
