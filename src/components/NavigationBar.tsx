import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
    ShoppingBagOpen,
    Notebook,
    Folder,
    IdentificationBadge,
    BookOpen,
    IdentificationCard,
    ChatsTeardrop,
    UsersThree,
    CaretRight,
    CaretDown,
    ChartPieSlice,
} from 'phosphor-react'

export interface NavigationItem {
    id: string
    label: string
    path: string
    icon?: React.ReactNode
    category?: string
    hasDotOnly?: boolean
    hasChildren?: boolean
    children?: NavigationItem[]
}

const navigationItems: NavigationItem[] = [
    // Favorites (Overview and Projects only have dots)
    {
        id: 'overview',
        label: 'Overview',
        path: '/overview',
        category: 'Favorites',
        hasDotOnly: true,
    },
    {
        id: 'projects',
        label: 'Projects',
        path: '/projects',
        category: 'Favorites',
        hasDotOnly: true,
    },

    // Recently (same items with dots only)
    {
        id: 'overview-recent',
        label: 'Overview',
        path: '/overview',
        category: 'Recently',
        hasDotOnly: true,
    },
    {
        id: 'projects-recent',
        label: 'Projects',
        path: '/projects',
        category: 'Recently',
        hasDotOnly: true,
    },

    // Dashboards
    {
        id: 'default',
        label: 'Default',
        path: '/',
        icon: <ChartPieSlice size={20} weight="duotone" />,
        category: 'Dashboards',
    },
    {
        id: 'ecommerce',
        label: 'eCommerce',
        path: '/ecommerce',
        icon: <ShoppingBagOpen size={20} weight="duotone" />,
        category: 'Dashboards',
        hasChildren: true,
        children: [
            {
                id: 'ecommerce-overview',
                label: 'Overview',
                path: '/ecommerce/overview',
                category: 'Dashboards',
            },
            {
                id: 'ecommerce-analytics',
                label: 'Analytics',
                path: '/ecommerce/analytics',
                category: 'Dashboards',
            },
        ],
    },
    {
        id: 'projects-dash',
        label: 'Projects',
        path: '/projects-dashboard',
        icon: <Folder size={20} weight="duotone" />,
        category: 'Dashboards',
        hasChildren: true,
        children: [
            {
                id: 'projects-overview',
                label: 'Overview',
                path: '/projects-dashboard/overview',
                category: 'Dashboards',
            },
            {
                id: 'projects-tasks',
                label: 'Tasks',
                path: '/projects-dashboard/tasks',
                category: 'Dashboards',
            },
        ],
    },
    {
        id: 'courses',
        label: 'Online Courses',
        path: '/courses',
        icon: <BookOpen size={20} weight="duotone" />,
        category: 'Dashboards',
        hasChildren: true,
        children: [
            {
                id: 'courses-overview',
                label: 'Overview',
                path: '/courses/overview',
                category: 'Dashboards',
            },
            {
                id: 'courses-catalog',
                label: 'Catalog',
                path: '/courses/catalog',
                category: 'Dashboards',
            },
        ],
    },

    // Pages
    {
        id: 'user-profile',
        label: 'User Profile',
        path: '/user-profile',
        icon: <IdentificationBadge size={20} weight="duotone" />,
        category: 'Pages',
        hasChildren: true,
        children: [
            {
                id: 'user-overview',
                label: 'Overview',
                path: '/user-profile/overview',
                category: 'Pages',
            },
            {
                id: 'user-projects',
                label: 'Projects',
                path: '/user-profile/projects',
                category: 'Pages',
            },
            {
                id: 'user-campaigns',
                label: 'Campaigns',
                path: '/user-profile/campaigns',
                category: 'Pages',
            },
            {
                id: 'user-documents',
                label: 'Documents',
                path: '/user-profile/documents',
                category: 'Pages',
            },
            {
                id: 'user-followers',
                label: 'Followers',
                path: '/user-profile/followers',
                category: 'Pages',
            },
        ],
    },
    {
        id: 'account',
        label: 'Account',
        path: '/account',
        icon: <IdentificationCard size={20} weight="duotone" />,
        category: 'Pages',
        hasChildren: true,
        children: [
            {
                id: 'account-settings',
                label: 'Settings',
                path: '/account/settings',
                category: 'Pages',
            },
            {
                id: 'account-preferences',
                label: 'Preferences',
                path: '/account/preferences',
                category: 'Pages',
            },
        ],
    },
    {
        id: 'corporate',
        label: 'Corporate',
        path: '/corporate',
        icon: <UsersThree size={20} weight="duotone" />,
        category: 'Pages',
        hasChildren: true,
        children: [
            {
                id: 'corporate-overview',
                label: 'Overview',
                path: '/corporate/overview',
                category: 'Pages',
            },
            {
                id: 'corporate-team',
                label: 'Team',
                path: '/corporate/team',
                category: 'Pages',
            },
        ],
    },
    {
        id: 'blog',
        label: 'Blog',
        path: '/blog',
        icon: <Notebook size={20} weight="duotone" />,
        category: 'Pages',
        hasChildren: true,
        children: [
            {
                id: 'blog-posts',
                label: 'Posts',
                path: '/blog/posts',
                category: 'Pages',
            },
            {
                id: 'blog-drafts',
                label: 'Drafts',
                path: '/blog/drafts',
                category: 'Pages',
            },
        ],
    },
    {
        id: 'social',
        label: 'Social',
        path: '/social',
        icon: <ChatsTeardrop size={20} weight="duotone" />,
        category: 'Pages',
        hasChildren: true,
        children: [
            {
                id: 'social-feed',
                label: 'Feed',
                path: '/social/feed',
                category: 'Pages',
            },
            {
                id: 'social-connections',
                label: 'Connections',
                path: '/social/connections',
                category: 'Pages',
            },
        ],
    },
]

const NavigationBar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState<'Favorites' | 'Recently'>(
        'Favorites'
    )
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

    // Auto-expand parent when on child route
    useEffect(() => {
        const currentPath = location.pathname
        const newExpanded = new Set<string>()

        // Find which parent should be expanded based on current path
        navigationItems.forEach((item) => {
            if (item.children) {
                const hasActiveChild = item.children.some(
                    (child) => child.path === currentPath
                )
                if (hasActiveChild || item.path === currentPath) {
                    newExpanded.add(item.id)
                }
            }
        })

        setExpandedItems(newExpanded)
    }, [location.pathname])

    const toggleExpanded = (itemId: string, itemPath: string) => {
        const newExpanded = new Set<string>()

        // If the clicked item is already expanded, collapse all
        if (expandedItems.has(itemId)) {
            setExpandedItems(newExpanded)
        } else {
            // Close all other dropdowns and open only this one
            newExpanded.add(itemId)
            setExpandedItems(newExpanded)

            // Navigate to the parent route when expanding
            navigate(itemPath)
        }
    }

    // Check if current path matches parent or any child path
    const isActiveParent = (item: NavigationItem) => {
        if (location.pathname === item.path) return true
        if (item.children) {
            return item.children.some(
                (child) => location.pathname === child.path
            )
        }
        return false
    }

    // Filter items based on active tab and other categories
    const getFilteredItems = () => {
        if (activeTab === 'Favorites') {
            return navigationItems.filter(
                (item) => item.category === 'Favorites'
            )
        } else {
            return navigationItems.filter(
                (item) => item.category === 'Recently'
            )
        }
    }

    // Get other categories (Dashboards, Pages)
    const otherItems = navigationItems.filter(
        (item) => item.category !== 'Favorites' && item.category !== 'Recently'
    )

    // Group other items by category
    const groupedOtherItems = otherItems.reduce((groups, item) => {
        const category = item.category || 'Other'
        if (!groups[category]) {
            groups[category] = []
        }
        groups[category].push(item)
        return groups
    }, {} as Record<string, NavigationItem[]>)

    const renderNavigationItem = (item: NavigationItem, isChild = false) => {
        const isActive = location.pathname === item.path
        const isParentActive = isActiveParent(item)
        const isExpanded = expandedItems.has(item.id)

        return (
            <div key={item.id}>
                {/* Parent Item */}
                <div
                    className={`
                        flex items-center px-2 py-2 text-sm font-medium rounded-md transition-all duration-200 relative group
                        ${
                            isParentActive
                                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                                : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700/50 hover:text-neutral-900 dark:hover:text-white'
                        }
                        ${isChild ? 'ml-6 text-xs' : ''}
                    `}
                >
                    {/* Active Indicator */}
                    {isParentActive && !isChild && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-primary-600 rounded-r-full"></div>
                    )}

                    {/* Expand/Collapse Arrow - moved to front */}
                    {item.hasChildren && (
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                toggleExpanded(item.id, item.path)
                            }}
                            className="p-1 hover:bg-neutral-200 dark:hover:bg-neutral-600 rounded transition-colors mr-2"
                        >
                            {isExpanded ? (
                                <CaretDown size={12} className="text-current" />
                            ) : (
                                <CaretRight
                                    size={12}
                                    className="text-current"
                                />
                            )}
                        </button>
                    )}

                    <Link
                        to={item.path}
                        className="flex items-center gap-3 flex-1"
                    >
                        {/* Icon or Dot */}
                        {item.hasDotOnly ? (
                            <div
                                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                    isActive
                                        ? 'bg-primary-600 dark:bg-primary-400'
                                        : 'bg-neutral-400 dark:bg-neutral-500'
                                }`}
                            ></div>
                        ) : (
                            item.icon && (
                                <span
                                    className={`flex-shrink-0 ${
                                        isParentActive
                                            ? 'text-primary-600 dark:text-primary-400'
                                            : 'text-current'
                                    }`}
                                >
                                    {item.icon}
                                </span>
                            )
                        )}

                        {/* Label */}
                        <span className="truncate">{item.label}</span>
                    </Link>
                </div>

                {/* Children */}
                {item.children && isExpanded && (
                    <div className="ml-6 mt-1 space-y-1">
                        {item.children.map((child) => (
                            <Link
                                key={child.id}
                                to={child.path}
                                className={`
                                    block px-2 py-1.5 text-xs font-medium rounded-md transition-all duration-200
                                    ${
                                        location.pathname === child.path
                                            ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                                            : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700/50 hover:text-neutral-900 dark:hover:text-white'
                                    }
                                `}
                            >
                                {child.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        )
    }

    return (
        <aside className="w-60 bg-white dark:bg-neutral-800 border-r border-neutral-200 dark:border-neutral-700 flex flex-col h-full">
            {/* Logo Section */}
            <div className="flex items-center gap-2 px-4 py-5 border-b border-neutral-200 dark:border-neutral-700">
                <img
                    src="./images/byewind.png"
                    alt="user profile" 
                    className="w-7 h-7 rounded-md flex items-center justify-center"
                />
                <span className="font-semibold text-neutral-900 dark:text-white text-sm">
                    ByeWind
                </span>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 overflow-y-auto py-4 px-3">
                {/* Favorites/Recently Toggle */}
                <div className="mb-6">
                    <div className="flex items-center gap-1 px-2 mb-2">
                        <button
                            onClick={() => setActiveTab('Favorites')}
                            className={`text-xs font-medium uppercase tracking-wider px-2 py-1 rounded transition-colors ${
                                activeTab === 'Favorites'
                                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                                    : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'
                            }`}
                        >
                            Favorites
                        </button>
                        <button
                            onClick={() => setActiveTab('Recently')}
                            className={`text-xs font-medium uppercase tracking-wider px-2 py-1 rounded transition-colors ${
                                activeTab === 'Recently'
                                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                                    : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300'
                            }`}
                        >
                            Recently
                        </button>
                    </div>

                    {/* Dynamic Content - Overview and Projects with dots only */}
                    <ul className="space-y-1">
                        {getFilteredItems().map((item) => (
                            <li key={item.id}>{renderNavigationItem(item)}</li>
                        ))}
                    </ul>
                </div>

                {/* Other Categories */}
                {Object.entries(groupedOtherItems).map(([category, items]) => (
                    <div key={category} className="mb-6">
                        {/* Category Header */}
                        <div className="px-2 mb-2">
                            <h3 className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                                {category}
                            </h3>
                        </div>

                        {/* Navigation Items */}
                        <ul className="space-y-1">
                            {items.map((item) => (
                                <li key={item.id}>
                                    {renderNavigationItem(item)}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>
        </aside>
    )
}

export default NavigationBar
