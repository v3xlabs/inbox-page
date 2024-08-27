import { createLazyFileRoute } from '@tanstack/react-router';

import { Button } from '../components/ui/Button';

const component = () => {
    return (
        <div className="p-2 space-y-4">
            <h1 className="h1">Debug Page</h1>
            <div>
                <h2 className="h2">Buttons</h2>
                <div className="flex gap-2">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="link">Link</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="ghostOutline">Ghost Outline</Button>
                </div>
            </div>
        </div>
    );
};

export const Route = createLazyFileRoute('/debug')({
    component,
});
