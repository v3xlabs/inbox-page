import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/configure/_layout/instance/')({
    component: () => <div>Hello /configure/instance/!</div>,
});
