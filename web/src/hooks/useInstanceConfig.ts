import { useLocation, useRouter } from '@tanstack/react-router';
import { useEffect } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type InstanceConfig = {
    instance_url: string;
};

const useInstanceConfigStore = create<InstanceConfig>()(
    persist(
        (set, _get) => ({
            instance_url: '',
        }),
        {
            name: 'instance-config',
        }
    )
);

type UseInstanceConfigProperties = {
    shouldRedirect?: boolean;
};

export const useInstanceConfig = ({
    shouldRedirect = false,
}: UseInstanceConfigProperties = {}) => {
    const router = useRouter();
    const location = useLocation();
    const instanceConfig = useInstanceConfigStore();

    useEffect(() => {
        if (shouldRedirect && !instanceConfig.instance_url) {
            const currentPath = location.href;

            router.navigate({
                to: '/configure/instance',
                search: {
                    to: currentPath,
                },
            });
        }
    }, [shouldRedirect, instanceConfig.instance_url, router]);

    return instanceConfig;
};
