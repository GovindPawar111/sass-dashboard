import { House } from "phosphor-react"

export const OverviewPage = () => {
    return (
        <div className="p-6 space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">
                    Overview
                </h1>
                <p className="text-neutral-600 dark:text-neutral-400">
                    General overview of your workspace
                </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-sm p-8">
                <div className="text-center">
                    <House
                        size={48}
                        className="mx-auto mb-4 text-neutral-400"
                    />
                    <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">
                        Workspace Overview
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        A comprehensive view of your workspace activities.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OverviewPage