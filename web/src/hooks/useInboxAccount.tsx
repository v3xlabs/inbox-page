/* eslint-disable no-undef */
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface InboxAccount {
    account_id?: string;
    instance_url?: string;
    setInstanceAndAccount: (_account_id: string, _instance_url: string) => void;
    logout: () => void;
}

export const useInboxAccount = create<InboxAccount>()(
    persist(
        (set, _get) => ({
            account_id: undefined,
            instance_url: undefined,
            setInstanceAndAccount: (account_id: string, instance_url: string) =>
                set({ account_id, instance_url }),
            logout: () =>
                set({ account_id: undefined, instance_url: undefined }),
        }),
        {
            name: 'inbox.page.instance',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
