import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/configure/_layout')({
    component: () => (
        <div className="p-2 w-full h-full pt-4 md:pt-32">
            <div className="max-w-lg mx-auto space-y-4">
                <h1 className="text-2xl font-bold text-text-secondary">
                    Configuration
                </h1>
                <div className="border border-border bg-card-background p-4 rounded-lg h-fit space-y-2 w-full ">
                    <Outlet />
                </div>
            </div>
        </div>
    ),
});
