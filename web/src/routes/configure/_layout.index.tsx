import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/configure/_layout/')({
    component: () => <div>Hello /configure/!</div>,
});
