import { useQuery } from '@tanstack/react-query';

export const useFetchAuthChallenge = () =>
    useQuery({
        queryKey: ['fetch-auth-challenge'],
        queryFn: async () => {
            const response = await fetch(
                'https://localhost:8000/auth/challenge'
            );

            return response.json();
        },
    });
