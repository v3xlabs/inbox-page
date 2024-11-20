import { createLazyFileRoute, Link } from '@tanstack/react-router';
import { FiChevronLeft } from 'react-icons/fi';

import { Button } from '../../components/ui/Button';

export const Route = createLazyFileRoute('/login/_layout/create')({
    component: () => (
        <>
            <h1 className="h2">Your Inbox Page</h1>
            <p>Welcome to the last inbox you'll ever need</p>
            <div className="flex flex-col gap-2">
                <Button>Create Account</Button>
            </div>
            <Button variant="ghost" asChild>
                <Link to="/login">
                    <FiChevronLeft />
                    Back
                </Link>
            </Button>
        </>
    ),
});
