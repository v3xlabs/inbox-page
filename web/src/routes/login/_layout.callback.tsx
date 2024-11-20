import { createFileRoute } from '@tanstack/react-router';
import { useElapsedTime } from 'use-elapsed-time';

export const Route = createFileRoute('/login/_layout/callback')({
    component: () => {
        // extract the session_state, code, state from the url
        const url = new URL(window.location.href);
        const session_state = url.searchParams.get('session_state');
        const code = url.searchParams.get('code');
        const state = url.searchParams.get('state');

        const { elapsedTime } = useElapsedTime({
            isPlaying: true,
            updateInterval: 1,
            duration: 5,
        });

        return (
            <div className="space-y-4">
                <div>
                    {elapsedTime >= 5 ? 'Still processing' : 'Processing'} your
                    sign-in request...
                </div>
                {elapsedTime >= 5 && (
                    <>
                        <hr />
                        <h2 className="h2">Debug Information</h2>
                        <p>
                            The sign in process is taking longer than expected.
                            Here is some debug information:
                        </p>
                        <pre className="bg-gray-100 p-4 rounded-md overflow-x-scroll">
                            <div>session_state: {session_state}</div>
                            <div>code: {code}</div>
                            <div>state: {state}</div>
                        </pre>
                    </>
                )}
            </div>
        );
    },
});
