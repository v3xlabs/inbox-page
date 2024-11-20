/* eslint-disable sonarjs/no-duplicate-string */
import { useQuery } from '@tanstack/react-query';
import { createFileRoute, Link } from '@tanstack/react-router';

import { Button } from '../../components/ui/Button';
import { useInstanceConfig } from '../../hooks/useInstanceConfig';

const component = () => {
    const { instance_url } = useInstanceConfig();
    const { data: auth_url } = useQuery({
        queryKey: ['auth_url'],
        queryFn: async () => {
            const response = await fetch(instance_url + '/auth/oauth');

            return (await response.json()) as { url: string };
        },
    });

    console.log(auth_url);

    return (
        <>
            <h1 className="h2">Your Inbox Page</h1>
            <p>Welcome to the last inbox you'll ever need</p>
            <div className="flex flex-col gap-2">
                <Button asChild>
                    <Link to={auth_url?.url}>Authenticate</Link>
                </Button>
            </div>
            <input
                type="text"
                name="username"
                className="hidden"
                autoComplete="username webauthn"
            />
            <div>
                Developed by{' '}
                <a href="https://v3x.company" className="link" target="_blank">
                    V3X Labs
                </a>
            </div>
        </>
    );
};

export const Route = createFileRoute('/login/_layout/')({
    component,
});
