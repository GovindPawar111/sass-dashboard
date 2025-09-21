import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '@/components/NavigationBar'
import NotificationBar from '@/components/NotificationBar'
import Header from '@/components/Header'

const MainLayout = () => {
    const [darkMode, setDarkMode] = useState(false)
    const [notificationsOpen, setNotificationsOpen] = useState(false)

    // Dark mode logic
    const toggleDarkMode = () => {
        const newMode = !darkMode
        setDarkMode(newMode)

        if (typeof document !== 'undefined') {
            const htmlElement = document.documentElement

            if (newMode) {
                htmlElement.classList.add('dark')
            } else {
                htmlElement.classList.remove('dark')
            }

            localStorage.setItem('theme', newMode ? 'dark' : 'light')
        }
    }

    // Initialize theme
    useEffect(() => {
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
            const savedTheme = localStorage.getItem('theme')
            const shouldBeDark = savedTheme === 'dark'

            setDarkMode(shouldBeDark)

            const htmlElement = document.documentElement
            if (shouldBeDark) {
                htmlElement.classList.add('dark')
            } else {
                htmlElement.classList.remove('dark')
            }
        }
    }, [])

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
            <div className="flex h-screen">
                {/* Sidebar Navigation - Full Height */}
                <NavigationBar />

                {/* Main Content Area - Takes remaining width */}
                <div className="flex-1 flex flex-col min-w-0">
                    {/* Header - Fixed height at top */}
                    <Header
                        notificationsOpen={notificationsOpen}
                        setNotificationsOpen={setNotificationsOpen}
                        darkMode={darkMode}
                        toggleDarkMode={toggleDarkMode}
                    />

                    {/* Content Area with Main Content and Notifications Panel */}
                    <div className="flex-1 flex min-h-0">
                        {/* Main Content - Takes remaining space */}
                        <main className="flex-1 overflow-auto min-w-0">
                            <Outlet />
                        </main>
                    </div>
                </div>

                {/* Notifications Panel - Only visible when open, takes width from main area */}
                {notificationsOpen && (
                    <NotificationBar notificationsOpen={notificationsOpen} />
                )}
            </div>
        </div>
    )
}

export default MainLayout
