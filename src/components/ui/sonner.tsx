"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";
import { LuCircleCheck as CircleCheck, LuInfo as Info, LuTriangleAlert as TriangleAlert, LuOctagonX as OctagonX, LuLoaderCircle as Loader2Icon } from "react-icons/lu";

const Toaster = ({ ...props }: ToasterProps) => {
	return (
		<Sonner
			theme="dark"
			className="toaster group"
			icons={{
				success: <CircleCheck className="size-4" />,
				info: <Info className="size-4" />,
				warning: <TriangleAlert className="size-4" />,
				error: <OctagonX className="size-4" />,
				loading: <Loader2Icon className="size-4 animate-spin" />,
			}}
			style={
				{
					"--normal-bg": "var(--popover)",
					"--normal-text": "var(--popover-foreground)",
					"--normal-border": "var(--border)",
					"--border-radius": "var(--radius)",
				} as React.CSSProperties
			}
			toastOptions={{
				classNames: {
					toast: "cn-toast",
				},
			}}
			{...props}
		/>
	);
};

export { Toaster };
