import { ParsedLocation, redirect } from '@tanstack/react-router';

import { useInboxAccount } from '../hooks/useInboxAccount';

export type AuthWallOptions = {
    forceLogin?: boolean;
};

const authWallDefault = {
    forceLogin: true,
};

export const authWall =
    (arguments_: Partial<AuthWallOptions> = authWallDefault) =>
    async ({ location }: { location: ParsedLocation }) => {
        const forceLogin = arguments_.forceLogin ?? true;

        console.log('ping');

        const { account_id, instance_url } = useInboxAccount.getState();

        console.log('authwall', account_id, instance_url);

        if ((!account_id || !instance_url) && forceLogin) {
            console.log('redirecting to login');
            throw redirect({
                to: '/login',
                search: {
                    redirect: location.href,
                },
            });
        }
    };
