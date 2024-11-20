import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/configure/instance/')({
    component: () => <div>Hello /configure/instance/!</div>,
});
