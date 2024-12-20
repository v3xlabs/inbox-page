import { createLazyFileRoute } from '@tanstack/react-router';

import { Button } from '../components/ui/Button';

const component = () => {
    return (
        <div className="p-2 w-full h-full flex items-center justify-center">
            <div className="border p-4 rounded-lg space-y-2 w-full max-w-md">
                <h1 className="h2">Your Inbox Page</h1>
                <p>Welcome to the last inbox you'll ever need</p>
                <div className="flex space-x-2 items-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex h-10 w-full rounded bg-[white] border px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[black]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[lightblue] disabled:opacity-50 focus-visible:border-none"
                    />
                    <Button>Subscribe</Button>
                </div>
                <div>
                    Being developed by{' '}
                    <a
                        href="https://v3x.company"
                        className="link"
                        target="_blank"
                    >
                        V3X Labs
                    </a>
                </div>
            </div>
        </div>
    );
};

export const Route = createLazyFileRoute('/')({
    component,
});
