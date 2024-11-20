import { useQuery } from '@tanstack/react-query';

export const useFetchAuthChallenge = () =>
    useQuery({
        queryKey: ['fetch-auth-challenge'],
        queryFn: async () => {
            const response = await fetch(
                'https://v3x-fighter.tail52a8.ts.net:5173/api/auth/challenge'
            );

            const {
                challenge,
                signature,
            }: {
                challenge: number[];
                signature: string;
            } = await response.json();

            return {
                challenge: new Uint8Array(challenge),
                signature,
            };
        },
    });
