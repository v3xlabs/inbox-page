import { createLazyFileRoute } from '@tanstack/react-router';

const component = () => {
    return (
        <div className="p-2 w-full h-full flex items-center justify-center">
            <div className="border p-4 rounded-lg space-y-2 w-full max-w-md">
                <h3 className="h3">Your Inbox Page</h3>
                <p>Welcome to the last inbox you'll ever need</p>
                <div className="flex space-x-2 items-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex h-10 w-full rounded bg-[white] border px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[black]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[lightblue] disabled:opacity-50 focus-visible:border-none"
                    />
                    <button className="btn">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export const Route = createLazyFileRoute('/')({
    component,
});
