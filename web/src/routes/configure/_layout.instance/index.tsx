import { createFileRoute } from '@tanstack/react-router';

import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';

export const Route = createFileRoute('/configure/_layout/instance/')({
    component: () => (
        <div className="space-y-2 flex flex-col">
            <Input
                placeholder="http://localhost:8000"
                aria-label="Instance URL"
            />
            <Button>Save</Button>
        </div>
    ),
});
