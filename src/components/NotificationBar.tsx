import { Broadcast, BugBeetle, ChatTeardrop, User } from 'phosphor-react'

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
        image: {
            src: './images/1.png',
            alt: 'person1',
        },
    },
    {
        id: '2',
        user: 'Released a new version',
        time: '59 minutes ago',
        image: {
            src: './images/2.png',
            alt: 'person2',
        },
    },
    {
        id: '3',
        user: 'Submitted a bug',
        time: '12 minutes ago',
        image: {
            src: './images/3.png',
            alt: 'person3',
        },
    },
    {
        id: '4',
        user: 'Modified A data in Page X',
        time: 'Today, 11:59 AM',
        image: {
            src: './images/4.png',
            alt: 'person4',
        },
    },
    {
        id: '5',
        user: 'Deleted a page in Project X',
        time: 'Feb 2, 2023',
        image: {
            src: './images/5.png',
            alt: 'person5',
        },
    },
]

const contacts = [
    {
        name: 'Natali Craig',
        image: {
            src: './images/6.png',
            alt: 'person6',
        },
    },
    {
        name: 'Drew Cano',
        image: {
            src: './images/7.png',
            alt: 'person7',
        },
    },
    {
        name: 'Orlando Diggs',
        image: {
            src: './images/8.png',
            alt: 'person8',
        },
    },
    {
        name: 'Andi Lane',
        image: {
            src: './images/9.png',
            alt: 'person9',
        },
    },
    {
        name: 'Kate Morrison',
        image: {
            src: './images/10.png',
            alt: 'person10',
        },
    },
    {
        name: 'Koray Okumus',
        image: {
            src: './images/11.png',
            alt: 'person11',
        },
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
                                            <BugBeetle
                                                size={16}
                                                className="w-4 h-4 text-neutral-600 dark:text-neutral-400"
                                            />
                                        </div>
                                    ) : notification.type === 'user' ? (
                                        <div className="w-8 h-8 bg-neutral-100 dark:bg-neutral-700 rounded-full flex items-center justify-center">
                                            <User
                                                size={16}
                                                className="w-4 h-4 text-neutral-600 dark:text-neutral-400"
                                            />
                                        </div>
                                    ) : notification.type === 'subscription' ? (
                                        <div className="w-8 h-8 bg-neutral-100 dark:bg-neutral-700 rounded-full flex items-center justify-center">
                                            <Broadcast
                                                size={16}
                                                className="w-4 h-4 text-neutral-600 dark:text-neutral-400"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-8 h-8 bg-neutral-100 dark:bg-neutral-700 rounded-full flex items-center justify-center">
                                            <ChatTeardrop
                                                size={16}
                                                className="w-4 h-4 text-neutral-600 dark:text-neutral-400"
                                            />
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
                                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0`}
                                >
                                    <img
                                        src={activity.image.src}
                                        alt={activity.image.alt}
                                        className=" rounded-full "
                                    />
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
                                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0`}
                                >
                                    <img
                                        src={contact.image.src}
                                        alt={contact.image.alt}
                                        className=" rounded-full "
                                    />
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
