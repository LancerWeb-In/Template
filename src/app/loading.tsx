// ================================================================================
import { Spinner } from "@/components/ui/spinner";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
// ================================================================================
export default function Loading() {
	return (
		<main className="flex min-h-[calc(100dvh-3.5rem)] items-center justify-center bg-background px-4 py-6 sm:px-6 lg:px-8">
			<Card className="w-full max-w-sm sm:max-w-md">
				<CardHeader className="px-4 pt-6 sm:px-6 sm:pt-8">
					<div className="flex items-center gap-3">
						<Spinner className="size-4 text-primary sm:size-5" />
						<Skeleton className="h-5 w-32 sm:h-6 sm:w-40" />
					</div>
				</CardHeader>
				<CardContent className="space-y-3 px-4 pb-6 sm:px-6 sm:pb-8">
					<Skeleton className="h-3 w-full sm:h-4" />
					<Skeleton className="h-3 w-3/4 sm:h-4" />
					<Skeleton className="h-3 w-1/2 sm:h-4" />
				</CardContent>
			</Card>
		</main>
	);
}
// ================================================================================
