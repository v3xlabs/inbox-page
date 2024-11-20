import { useLocation, useRouter } from '@tanstack/react-router';
import { useEffect } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type InstanceConfig = {
    instance_url: string;
    setInstanceUrl: (_instance_url: string) => void;
};

const useInstanceConfigStore = create<InstanceConfig>()(
    persist(
        (set, _get) => ({
            instance_url: '',
            setInstanceUrl: (instance_url: string) => set({ instance_url }),
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
    const { instance_url, setInstanceUrl } = useInstanceConfigStore();

    useEffect(() => {
        // load from VITE_INSTANCE_URL if available
        const instanceUrl = (import.meta as any).env.VITE_INSTANCE_URL;

        if (instanceUrl && instanceUrl !== instance_url) {
            setInstanceUrl(instanceUrl);
        }

        if (shouldRedirect && !instance_url) {
            const currentPath = location.href;

            router.navigate({
                to: '/configure/instance',
                search: {
                    to: currentPath,
                },
            });
        }
    }, [shouldRedirect, instance_url, router]);

    return { instance_url, setInstanceUrl };
};
