/* eslint-disable sonarjs/no-duplicate-string */
import { createFileRoute, Link } from '@tanstack/react-router';

import { Button } from '../../components/ui/Button';
import { useInboxAccount } from '../../hooks/useInboxAccount';
import { useFetchAuthChallenge } from '../../utils/useFetchAuthChallenge';

const component = () => {
    const { account_id, instance_url } = useInboxAccount();
    const { data: challenge } = useFetchAuthChallenge();

    // useEffect(() => {
    //     (async () => {
    //         if (
    //             // eslint-disable-next-line no-undef
    //             window.PublicKeyCredential &&
    //             // eslint-disable-next-line no-undef
    //             PublicKeyCredential.isConditionalMediationAvailable
    //         ) {
    //             // Check if conditional mediation is available.
    //             const isCMA =
    //                 // eslint-disable-next-line no-undef
    //                 await PublicKeyCredential.isConditionalMediationAvailable();

    //             if (isCMA) {
    //                 // Call WebAuthn authentication
    //                 // eslint-disable-next-line no-undef
    //                 const credential = await navigator?.credentials.get({
    //                     publicKey: {
    //                         challenge: new Uint8Array([
    //                             117, 61, 252, 231, 191, 242,
    //                         ]),
    //                         // eslint-disable-next-line no-undef
    //                         rpId: location.hostname,
    //                         allowCredentials: [],
    //                     },
    //                     // signal: abortController.signal,
    //                     // Specify 'conditional' to activate conditional UI
    //                     mediation: 'conditional',
    //                 });

    //                 console.log({ credential });
    //             }
    //         }
    //     })();
    // }, []);

    return (
        <>
            <h1 className="h2">Your Inbox Page</h1>
            <p>Welcome to the last inbox you'll ever need</p>
            <div className="flex flex-col gap-2">
                <Button
                    onClick={async () => {
                        try {
                            // eslint-disable-next-line no-undef
                            const x = await navigator?.credentials.create({
                                publicKey: {
                                    challenge: new Uint8Array(
                                        challenge!.challenge
                                    ),
                                    rp: {
                                        // eslint-disable-next-line no-undef
                                        id: location.hostname,
                                        name: 'ACME Corporation',
                                    },
                                    user: {
                                        id: new Uint8Array([
                                            79, 252, 83, 72, 214, 7, 89, 26,
                                        ]),
                                        name: 'lucemans',
                                        displayName: 'Luc van Kampen',
                                    },
                                    pubKeyCredParams: [
                                        { type: 'public-key', alg: -7 },
                                    ],
                                },
                            });

                            console.log(x);
                        } catch (error) {
                            console.error(error);
                            // @ts-ignore
                            // eslint-disable-next-line no-undef
                            alert(error);
                        }
                    }}
                >
                    Create Account
                </Button>
                <Button asChild>
                    <Link to="/login/create">Create Account</Link>
                </Button>
                <Button
                    onClick={() => {
                        (async () => {
                            // eslint-disable-next-line no-undef
                            const cred = await navigator?.credentials?.get({
                                publicKey: {
                                    challenge: challenge!.challenge,
                                    // eslint-disable-next-line no-undef
                                    rpId: location.hostname,
                                    allowCredentials: [],
                                },
                                mediation: 'required',
                            });

                            console.log(cred);
                        })();
                    }}
                    variant="secondary"
                >
                    Go to my Inbox
                </Button>
            </div>
            <input
                type="text"
                name="username"
                className="hidden"
                autoComplete="username webauthn"
            />
            <div>
                Being developed by{' '}
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
