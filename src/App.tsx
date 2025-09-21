import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import { ECommerce, Projects, Overview } from './page/OtherPage'
import ECommercePage from './page/ECommercePage'
import OrderListPage from './page/OrderListPage'


const OnlineCourses = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Online Courses
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                Online Courses dashboard content will go here
            </p>
        </div>
    </div>
)

const UserProfile = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            User Profile
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                User Profile page content will go here
            </p>
        </div>
    </div>
)

const Campaigns = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Campaigns
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                Campaigns page content will go here
            </p>
        </div>
    </div>
)

const Documents = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Documents
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                Documents page content will go here
            </p>
        </div>
    </div>
)

const Followers = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Followers
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                Followers page content will go here
            </p>
        </div>
    </div>
)

const Account = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Account
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                Account settings page content will go here
            </p>
        </div>
    </div>
)

const Corporate = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Corporate
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                Corporate page content will go here
            </p>
        </div>
    </div>
)

const Blog = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Blog
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                Blog page content will go here
            </p>
        </div>
    </div>
)

const Social = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Social
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                Social page content will go here
            </p>
        </div>
    </div>
)

// Nested route components
const ECommerceOverview = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            eCommerce Overview
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                eCommerce Overview content will go here
            </p>
        </div>
    </div>
)

const ECommerceAnalytics = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            eCommerce Analytics
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                eCommerce Analytics content will go here
            </p>
        </div>
    </div>
)

const ProjectsOverview = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Projects Overview
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                Projects Overview content will go here
            </p>
        </div>
    </div>
)

const ProjectsTasks = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Projects Tasks
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                Projects Tasks content will go here
            </p>
        </div>
    </div>
)

const CoursesOverview = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Courses Overview
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                Courses Overview content will go here
            </p>
        </div>
    </div>
)

const CoursesCatalog = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Courses Catalog
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                Courses Catalog content will go here
            </p>
        </div>
    </div>
)

// User Profile nested components
const UserOverview = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            User Overview
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                User Overview content will go here
            </p>
        </div>
    </div>
)

const UserProjects = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            User Projects
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                User Projects content will go here
            </p>
        </div>
    </div>
)

// Account nested components
const AccountSettings = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Account Settings
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                Account Settings content will go here
            </p>
        </div>
    </div>
)

const AccountPreferences = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Account Preferences
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                Account Preferences content will go here
            </p>
        </div>
    </div>
)

// Corporate nested components
const CorporateOverview = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Corporate Overview
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                Corporate Overview content will go here
            </p>
        </div>
    </div>
)

const CorporateTeam = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Corporate Team
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                Corporate Team content will go here
            </p>
        </div>
    </div>
)

// Blog nested components
const BlogPosts = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Blog Posts
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                Blog Posts content will go here
            </p>
        </div>
    </div>
)

const BlogDrafts = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Blog Drafts
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                Blog Drafts content will go here
            </p>
        </div>
    </div>
)

// Social nested components
const SocialFeed = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Social Feed
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                Social Feed content will go here
            </p>
        </div>
    </div>
)

const SocialConnections = () => (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Social Connections
        </h1>
        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
                Social Connections content will go here
            </p>
        </div>
    </div>
)

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    {/* Default route - redirect to dashboard */}
                    <Route index element={<ECommercePage />} />

                    {/* Dashboard routes */}
                    <Route path="/overview" element={<Overview />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/ecommerce" element={<ECommerce />} />

                    {/* eCommerce nested routes */}
                    <Route
                        path="/ecommerce/overview"
                        element={<ECommerceOverview />}
                    />
                    <Route
                        path="/ecommerce/analytics"
                        element={<ECommerceAnalytics />}
                    />

                    {/* Projects Dashboard nested routes */}
                    <Route
                        path="/projects-dashboard"
                        element={<OrderListPage />}
                    />
                    <Route
                        path="/projects-dashboard/overview"
                        element={<ProjectsOverview />}
                    />
                    <Route
                        path="/projects-dashboard/tasks"
                        element={<ProjectsTasks />}
                    />

                    {/* Courses nested routes */}
                    <Route path="/courses" element={<OnlineCourses />} />
                    <Route
                        path="/courses/overview"
                        element={<CoursesOverview />}
                    />
                    <Route
                        path="/courses/catalog"
                        element={<CoursesCatalog />}
                    />

                    {/* User Profile nested routes */}
                    <Route path="/user-profile" element={<UserProfile />} />
                    <Route
                        path="/user-profile/overview"
                        element={<UserOverview />}
                    />
                    <Route
                        path="/user-profile/projects"
                        element={<UserProjects />}
                    />
                    <Route
                        path="/user-profile/campaigns"
                        element={<Campaigns />}
                    />
                    <Route
                        path="/user-profile/documents"
                        element={<Documents />}
                    />
                    <Route
                        path="/user-profile/followers"
                        element={<Followers />}
                    />

                    {/* Account nested routes */}
                    <Route path="/account" element={<Account />} />
                    <Route
                        path="/account/settings"
                        element={<AccountSettings />}
                    />
                    <Route
                        path="/account/preferences"
                        element={<AccountPreferences />}
                    />

                    {/* Corporate nested routes */}
                    <Route path="/corporate" element={<Corporate />} />
                    <Route
                        path="/corporate/overview"
                        element={<CorporateOverview />}
                    />
                    <Route path="/corporate/team" element={<CorporateTeam />} />

                    {/* Blog nested routes */}
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/posts" element={<BlogPosts />} />
                    <Route path="/blog/drafts" element={<BlogDrafts />} />

                    {/* Social nested routes */}
                    <Route path="/social" element={<Social />} />
                    <Route path="/social/feed" element={<SocialFeed />} />
                    <Route
                        path="/social/connections"
                        element={<SocialConnections />}
                    />

                    {/* Catch all - redirect to home */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
