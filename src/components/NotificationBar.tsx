interface NotificationItem {
    id: string
    title: string
    description: string
    time: string
    type: 'bug' | 'user' | 'subscription' | 'activity'
    read: boolean
}

const notifications: NotificationItem[] = [
    {
        id: '1',
        title: 'You have a bug that needs...',
        description: 'Just now',
        time: 'Just now',
        type: 'bug',
        read: false,
    },
    {
        id: '2',
        title: 'New user registered',
        description: '59 minutes ago',
        time: '59 minutes ago',
        type: 'user',
        read: false,
    },
    {
        id: '3',
        title: 'You have a bug that needs...',
        description: '12 minutes ago',
        time: '12 minutes ago',
        type: 'bug',
        read: false,
    },
    {
        id: '4',
        title: 'Andi Lane subscribed to you',
        description: 'Today, 11:59 AM',
        time: 'Today, 11:59 AM',
        type: 'subscription',
        read: true,
    },
]

const activities = [
    {
        id: '1',
        user: 'You have a bug that needs...',
        time: 'Just now',
        avatar: {
            bg: 'bg-blue-100 dark:bg-blue-900/20',
            text: 'text-blue-700 dark:text-blue-300',
            icon: '🐛',
        },
    },
    {
        id: '2',
        user: 'Released a new version',
        time: '59 minutes ago',
        avatar: {
            bg: 'bg-purple-100 dark:bg-purple-900/20',
            text: 'text-purple-700 dark:text-purple-300',
            icon: '🚀',
        },
    },
    {
        id: '3',
        user: 'Submitted a bug',
        time: '12 minutes ago',
        avatar: {
            bg: 'bg-green-100 dark:bg-green-900/20',
            text: 'text-green-700 dark:text-green-300',
            icon: '📝',
        },
    },
    {
        id: '4',
        user: 'Modified A data in Page X',
        time: 'Today, 11:59 AM',
        avatar: {
            bg: 'bg-orange-100 dark:bg-orange-900/20',
            text: 'text-orange-700 dark:text-orange-300',
            icon: '✏️',
        },
    },
    {
        id: '5',
        user: 'Deleted a page in Project X',
        time: 'Feb 2, 2023',
        avatar: {
            bg: 'bg-red-100 dark:bg-red-900/20',
            text: 'text-red-700 dark:text-red-300',
            icon: '🗑️',
        },
    },
]

const contacts = [
    {
        name: 'Natali Craig',
        avatar: 'NC',
        color: 'bg-pink-100 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300',
    },
    {
        name: 'Drew Cano',
        avatar: 'DC',
        color: 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300',
    },
    {
        name: 'Orlando Diggs',
        avatar: 'OD',
        color: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300',
    },
    {
        name: 'Andi Lane',
        avatar: 'AL',
        color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300',
    },
    {
        name: 'Kate Morrison',
        avatar: 'KM',
        color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300',
    },
    {
        name: 'Koray Okumus',
        avatar: 'KO',
        color: 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300',
    },
]

interface NotificationBarProps {
    notificationsOpen: boolean
}

const NotificationBar = ({ notificationsOpen }: NotificationBarProps) => {
    return (
        <aside
            className={`w-80 bg-white dark:bg-neutral-800 border-l border-neutral-200 dark:border-neutral-700 flex flex-col h-full ${
                notificationsOpen ? 'block' : 'hidden'
            }`}
        >
            <div className="flex-1 overflow-y-auto">
                {/* Notifications List */}
                <div className="px-4 py-4 border-t border-neutral-200 dark:border-neutral-700 flex-shrink-0">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4 px-2">
                        Activities
                    </h3>
                    <div className="space-y-1">
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className="flex items-start gap-3 py-1 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors"
                            >
                                {/* Notification Icon - Avatar icons */}
                                <div className="flex-shrink-0 mt-1">
                                    {notification.type === 'bug' ? (
                                        <div className="w-8 h-8 bg-neutral-100 dark:bg-neutral-700 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 text-neutral-600 dark:text-neutral-400"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                            </svg>
                                        </div>
                                    ) : notification.type === 'user' ? (
                                        <div className="w-8 h-8 bg-neutral-100 dark:bg-neutral-700 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 text-neutral-600 dark:text-neutral-400"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                            </svg>
                                        </div>
                                    ) : notification.type === 'subscription' ? (
                                        <div className="w-8 h-8 bg-neutral-100 dark:bg-neutral-700 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 text-neutral-600 dark:text-neutral-400"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM12 13.5l3.5 2.5-3.5 2.5L8.5 16l3.5-2.5z" />
                                            </svg>
                                        </div>
                                    ) : (
                                        <div className="w-8 h-8 bg-neutral-100 dark:bg-neutral-700 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 text-neutral-600 dark:text-neutral-400"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                {/* Notification Content */}
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-neutral-900 dark:text-white mb-1">
                                        {notification.title}
                                    </p>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                        {notification.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Activities Section */}
                <div className="px-4 py-4 border-t border-neutral-200 dark:border-neutral-700 flex-shrink-0">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4 px-2">
                        Activities
                    </h3>
                    <div className="space-y-3">
                        {activities.slice(0, 5).map((activity) => (
                            <div
                                key={activity.id}
                                className="flex items-center gap-3 px-2"
                            >
                                <div
                                    className={`w-8 h-8 ${activity.avatar.bg} rounded-full flex items-center justify-center flex-shrink-0`}
                                >
                                    <span
                                        className={`text-sm font-medium ${activity.avatar.text}`}
                                    >
                                        {activity.avatar.icon}
                                    </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-neutral-900 dark:text-white font-medium truncate">
                                        {activity.user}
                                    </p>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                        {activity.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contacts Section */}
                <div className="px-4 py-4 border-t border-neutral-200 dark:border-neutral-700 flex-shrink-0">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4 px-2">
                        Contacts
                    </h3>
                    <div className="space-y-3">
                        {contacts.slice(0, 6).map((contact, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 px-2"
                            >
                                <div
                                    className={`w-8 h-8 ${contact.color} rounded-full flex items-center justify-center flex-shrink-0`}
                                >
                                    <span className="text-sm font-semibold">
                                        {contact.avatar}
                                    </span>
                                </div>
                                <span className="text-sm text-neutral-900 dark:text-white font-medium truncate">
                                    {contact.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default NotificationBar
