/* eslint-disable unicorn/no-nested-ternary */
import { useQuery } from '@tanstack/react-query';

import { useInstanceConfig } from './useInstanceConfig';

export const useHealthchecks = () => {
    const { instance_url } = useInstanceConfig();
    const { data, isLoading } = useQuery({
        queryKey: ['health'],
        queryFn: () =>
            fetch(`${instance_url}/health`).then((response) => response.json()),
        enabled: !!instance_url,
        retry: false,
    });

    const instance_reachable = isLoading
        ? 'loading'
        : data
        ? 'healthy'
        : 'unhealthy';

    return {
        has_instance_url: !!instance_url,
        instance_reachable,
    };
};
