import { useLocation } from 'react-router-dom'
import {
    Star,
    Sun,
    Moon,
    MagnifyingGlass,
    Bell,
    Gear,
    List,
} from 'phosphor-react'

interface HeaderProps {
    notificationsOpen: boolean
    setNotificationsOpen: (open: boolean) => void
    darkMode: boolean
    toggleDarkMode: () => void
}

// Route mapping for breadcrumb generation
const routeMap: Record<string, { category: string; section: string; subsection?: string }> = {
    '/': { category: 'Dashboards', section: 'Default' },
    '/overview': { category: 'Dashboards', section: 'Overview' },
    '/projects': { category: 'Dashboards', section: 'Projects' },
    '/ecommerce': { category: 'Dashboards', section: 'eCommerce' },
    '/ecommerce/overview': { category: 'Dashboards', section: 'eCommerce', subsection: 'Overview' },
    '/ecommerce/analytics': { category: 'Dashboards', section: 'eCommerce', subsection: 'Analytics' },
    '/projects-dashboard': { category: 'Dashboards', section: 'Projects Dashboard' },
    '/projects-dashboard/overview': { category: 'Dashboards', section: 'Projects Dashboard', subsection: 'Overview' },
    '/projects-dashboard/tasks': { category: 'Dashboards', section: 'Projects Dashboard', subsection: 'Tasks' },
    '/courses': { category: 'Dashboards', section: 'Online Courses' },
    '/courses/overview': { category: 'Dashboards', section: 'Online Courses', subsection: 'Overview' },
    '/courses/catalog': { category: 'Dashboards', section: 'Online Courses', subsection: 'Catalog' },
    '/user-profile': { category: 'Pages', section: 'User Profile' },
    '/user-profile/overview': { category: 'Pages', section: 'User Profile', subsection: 'Overview' },
    '/user-profile/projects': { category: 'Pages', section: 'User Profile', subsection: 'Projects' },
    '/user-profile/campaigns': { category: 'Pages', section: 'User Profile', subsection: 'Campaigns' },
    '/user-profile/documents': { category: 'Pages', section: 'User Profile', subsection: 'Documents' },
    '/user-profile/followers': { category: 'Pages', section: 'User Profile', subsection: 'Followers' },
    '/account': { category: 'Pages', section: 'Account' },
    '/account/settings': { category: 'Pages', section: 'Account', subsection: 'Settings' },
    '/account/preferences': { category: 'Pages', section: 'Account', subsection: 'Preferences' },
    '/corporate': { category: 'Pages', section: 'Corporate' },
    '/corporate/overview': { category: 'Pages', section: 'Corporate', subsection: 'Overview' },
    '/corporate/team': { category: 'Pages', section: 'Corporate', subsection: 'Team' },
    '/blog': { category: 'Pages', section: 'Blog' },
    '/blog/posts': { category: 'Pages', section: 'Blog', subsection: 'Posts' },
    '/blog/drafts': { category: 'Pages', section: 'Blog', subsection: 'Drafts' },
    '/social': { category: 'Pages', section: 'Social' },
    '/social/feed': { category: 'Pages', section: 'Social', subsection: 'Feed' },
    '/social/connections': { category: 'Pages', section: 'Social', subsection: 'Connections' },
}

const Header = ({
    notificationsOpen,
    setNotificationsOpen,
    darkMode,
    toggleDarkMode,
}: HeaderProps) => {
    const location = useLocation()
    
    // Get breadcrumb info based on current route
    const getBreadcrumbInfo = () => {
        const routeInfo = routeMap[location.pathname]
        if (!routeInfo) {
            return { category: 'Dashboards', section: 'Default', subsection: undefined }
        }
        return routeInfo
    }

    const { category, section, subsection } = getBreadcrumbInfo()

    const handleToggleNotifications = () => {
        setNotificationsOpen(!notificationsOpen)
    }

    return (
        <header className="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 px-6 py-4">
            <div className="flex items-center justify-between">
                {/* Left Section - Sidebar Toggle, Star, and Breadcrumbs */}
                <div className="flex items-center gap-4">
                    {/* Sidebar Toggle Button - No functionality */}
                    <button className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors">
                        <List
                            size={20}
                            className="text-neutral-600 dark:text-neutral-400"
                        />
                    </button>

                    {/* Star Button - No functionality */}
                    <button className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors">
                        <Star
                            size={20}
                            className="text-neutral-600 dark:text-neutral-400"
                        />
                    </button>

                    {/* Dynamic Breadcrumb */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-neutral-900 dark:text-white">
                            {category}
                        </span>
                        <span className="text-neutral-400 dark:text-neutral-500">
                            /
                        </span>
                        <span className="text-sm text-neutral-600 dark:text-neutral-400">
                            {section}
                        </span>
                        {subsection && (
                            <>
                                <span className="text-neutral-400 dark:text-neutral-500">
                                    /
                                </span>
                                <span className="text-sm text-neutral-500 dark:text-neutral-500">
                                    {subsection}
                                </span>
                            </>
                        )}
                    </div>
                </div>

                {/* Right Section - Search, Theme Toggle, and Notification Buttons */}
                <div className="flex items-center gap-4">
                    {/* Search */}
                    <div className="relative">
                        <MagnifyingGlass
                            size={16}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400"
                        />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-neutral-100 dark:bg-neutral-700 border-0 rounded-lg pl-10 pr-4 py-2 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 w-64"
                        />
                    </div>

                    {/* Dark Mode Toggle - Functional */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors"
                    >
                        {darkMode ? (
                            <Sun
                                size={20}
                                className="text-neutral-600 dark:text-neutral-400"
                            />
                        ) : (
                            <Moon
                                size={20}
                                className="text-neutral-600 dark:text-neutral-400"
                            />
                        )}
                    </button>

                    {/* Notifications Bell - Toggles Notification Bar */}
                    <div className="relative">
                        <button
                            onClick={handleToggleNotifications}
                            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors relative"
                        >
                            <Bell
                                size={20}
                                className="text-neutral-600 dark:text-neutral-400"
                            />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-error-500 rounded-full text-xs"></span>
                        </button>
                    </div>

                    {/* Settings - Toggles Notification Bar */}
                    <button 
                        onClick={handleToggleNotifications}
                        className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors"
                    >
                        <Gear
                            size={20}
                            className="text-neutral-600 dark:text-neutral-400"
                        />
                    </button>

                    {/* Menu/More Options - Toggles Notification Bar */}
                    <button 
                        onClick={handleToggleNotifications}
                        className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors"
                    >
                        <List
                            size={20}
                            className="text-neutral-600 dark:text-neutral-400"
                        />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header