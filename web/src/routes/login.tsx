/* eslint-disable sonarjs/no-duplicate-string */
import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';

import { Button } from '../components/ui/Button';

const component = () => {
    useEffect(() => {
        (async () => {
            if (
                // eslint-disable-next-line no-undef
                window.PublicKeyCredential &&
                // eslint-disable-next-line no-undef
                PublicKeyCredential.isConditionalMediationAvailable
            ) {
                // Check if conditional mediation is available.
                const isCMA =
                    // eslint-disable-next-line no-undef
                    await PublicKeyCredential.isConditionalMediationAvailable();

                if (isCMA) {
                    // Call WebAuthn authentication
                    // eslint-disable-next-line no-undef
                    const credential = await navigator?.credentials.get({
                        publicKey: {
                            challenge: new Uint8Array([
                                117, 61, 252, 231, 191, 242,
                            ]),
                            // eslint-disable-next-line no-undef
                            rpId: location.hostname,
                            allowCredentials: [],
                        },
                        // signal: abortController.signal,
                        // Specify 'conditional' to activate conditional UI
                        mediation: 'conditional',
                    });

                    console.log({ credential });
                }
            }
        })();
    }, []);

    return (
        <div className="p-2 w-full h-full flex items-center justify-center">
            <div className="border p-4 rounded-lg space-y-2 w-full max-w-md">
                <h1 className="h2">Your Inbox Page</h1>
                <p>Welcome to the last inbox you'll ever need</p>
                <div className="flex flex-col gap-2">
                    <Button
                        onClick={async () => {
                            // eslint-disable-next-line no-undef
                            await navigator?.credentials.create({
                                publicKey: {
                                    challenge: new Uint8Array([
                                        117, 61, 252, 231, 191, 241,
                                    ]),
                                    rp: {
                                        // eslint-disable-next-line no-undef
                                        id: location.hostname,
                                        name: 'ACME Corporation',
                                    },
                                    user: {
                                        id: new Uint8Array([
                                            79, 252, 83, 72, 214, 7, 89, 26,
                                        ]),
                                        name: 'jamiedoe',
                                        displayName: 'Jamie Doe',
                                    },
                                    pubKeyCredParams: [
                                        { type: 'public-key', alg: -7 },
                                    ],
                                },
                            });
                        }}
                    >
                        Create Account
                    </Button>
                    <Button
                        onClick={async () => {
                            // eslint-disable-next-line no-undef
                            await navigator?.credentials?.get({
                                publicKey: {
                                    challenge: new Uint8Array([
                                        117, 61, 252, 231, 191, 242,
                                    ]),
                                    // eslint-disable-next-line no-undef
                                    rpId: location.hostname,
                                    allowCredentials: [],
                                },
                                mediation: 'required',
                            });
                        }}
                        variant="secondary"
                    >
                        Go to my Inbox
                    </Button>
                </div>
                <input
                    type="text"
                    name="username"
                    autoComplete="username webauthn"
                />
                <div>
                    Being developed by{' '}
                    <a
                        href="https://v3x.company"
                        className="link"
                        target="_blank"
                    >
                        V3X Labs
                    </a>
                </div>
            </div>
        </div>
    );
};

export const Route = createFileRoute('/login')({
    component,
});
