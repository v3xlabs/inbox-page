import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRootRoute, Outlet } from '@tanstack/react-router';

// import { Navbar } from '../components/Navbar';
// import { PackSidebar } from '../components/PackSidebar';

const queryClient = new QueryClient();

export const Route = createRootRoute({
    component: () => (
        <QueryClientProvider client={queryClient}>
            <div className="w-full h-screen flex flex-col overflow-y-hidden">
                {/* <Navbar /> */}
                <div className="flex-1 h-full flex">
                    {/* <PackSidebar /> */}
                    <div className="w-full overflow-y-auto">
                        <Outlet />
                    </div>
                </div>
                {/* <TanStackRouterDevtools /> */}
            </div>
        </QueryClientProvider>
    ),
});
