import { createFileRoute } from '@tanstack/react-router';

import { authWall } from '../../utils/authwall';

export const Route = createFileRoute('/$mail/')({
    beforeLoad: authWall(),
    component: () => (
        <div className="w-full h-full">
            <div className="w-full border-b flex items-center justify-between py-1 px-2">
                <div>
                    <div className="text-md font-bold">inbox.page</div>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="text-sm">
                        <a href="https://v3x.company" className="link">
                            V3X Labs
                        </a>
                    </div>
                    <div className="text-sm">
                        <a
                            href="https://github.com/v3xlab/inbox.page"
                            className="link"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    ),
});
