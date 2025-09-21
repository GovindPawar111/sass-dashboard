import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'
import MainLayout from './Layout/MainLayout'

import ProjectsPage from './page/ProjectsPage'
import OverviewPage from './page/OverviewPage'

import ECommercePage from './page/ECommerce/ECommercePage'
import ECommerceAnalyticsPage from './page/ECommerce/ECommerceAnalyticsPage'
import ECommerceOverviewPage from './page/ECommerce/ECommerceOverviewPage'

import OrderListPage from './page/Projects/OrderListPage'
import ProjectsOverviewPage from './page/Projects/ProjectsOverviewPage'
import ProjectsTasksPage from './page/Projects/ProjectsTasksPage'

import OnlineCoursesPage from './page/OnlineCourses/OnlineCoursesPage'
import OnlineCoursesOverviewPage from './page/OnlineCourses/OnlineCoursesOverviewPage'
import OnlineCoursesCatalogPage from './page/OnlineCourses/OnlineCoursesCatalogPage'

import UserPage from './page/UserProfile/UserProjectsPage'
import UserOverviewPage from './page/UserProfile/UserOverviewPage'
import UserProjectsPage from './page/UserProfile/UserProjectsPage'
import UserCampaignsPage from './page/UserProfile/UserCampaignsPage'
import UserDocumentsPage from './page/UserProfile/UserDocumentsPage'
import UserFollowersPage from './page/UserProfile/UserFollowersPage'

import AccountPage from './page/Account/AccountPage'
import AccountSettingsPage from './page/Account/AccountSettingsPage'
import AccountPreferencesPage from './page/Account/AccountPreferencesPage'

import CorporatePage from './page/Corporate/CorporatePage'
import CorporateOverviewPage from './page/Corporate/CorporateOverviewPage'
import CorporateTeamPage from './page/Corporate/CorporateTeamPage'

import BlogPage from './page/Blog/BlogPage'
import BlogPostsPage from './page/Blog/BlogPostsPage'
import BlogDraftsPage from './page/Blog/BlogDraftsPage'
import SocialPage from './page/Social/SocialPage'
import SocialFeedPage from './page/Social/SocialFeedPage'
import SocialConnectionsPage from './page/Social/SocialConnectionsPage'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    {/* Default route - redirect to dashboard */}
                    <Route index element={<ECommercePage />} />

                    {/* Dashboard routes */}
                    <Route path="/overview" element={<OverviewPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />

                    {/* eCommerce nested routes */}
                    <Route path="/ecommerce" element={<ECommercePage />} />
                    <Route
                        path="/ecommerce/overview"
                        element={<ECommerceOverviewPage />}
                    />
                    <Route
                        path="/ecommerce/analytics"
                        element={<ECommerceAnalyticsPage />}
                    />

                    {/* Projects Dashboard nested routes */}
                    <Route
                        path="/projects-dashboard"
                        element={<OrderListPage />}
                    />
                    <Route
                        path="/projects-dashboard/overview"
                        element={<ProjectsOverviewPage />}
                    />
                    <Route
                        path="/projects-dashboard/tasks"
                        element={<ProjectsTasksPage />}
                    />

                    {/* Courses nested routes */}
                    <Route path="/courses" element={<OnlineCoursesPage />} />
                    <Route
                        path="/courses/overview"
                        element={<OnlineCoursesOverviewPage />}
                    />
                    <Route
                        path="/courses/catalog"
                        element={<OnlineCoursesCatalogPage />}
                    />

                    {/* User Profile nested routes */}
                    <Route path="/user-profile" element={<UserPage />} />
                    <Route
                        path="/user-profile/overview"
                        element={<UserOverviewPage />}
                    />
                    <Route
                        path="/user-profile/projects"
                        element={<UserProjectsPage />}
                    />
                    <Route
                        path="/user-profile/campaigns"
                        element={<UserCampaignsPage />}
                    />
                    <Route
                        path="/user-profile/documents"
                        element={<UserDocumentsPage />}
                    />
                    <Route
                        path="/user-profile/followers"
                        element={<UserFollowersPage />}
                    />

                    {/* Account nested routes */}
                    <Route path="/account" element={<AccountPage />} />
                    <Route
                        path="/account/settings"
                        element={<AccountSettingsPage />}
                    />
                    <Route
                        path="/account/preferences"
                        element={<AccountPreferencesPage />}
                    />

                    {/* Corporate nested routes */}
                    <Route path="/corporate" element={<CorporatePage />} />
                    <Route
                        path="/corporate/overview"
                        element={<CorporateOverviewPage />}
                    />
                    <Route path="/corporate/team" element={<CorporateTeamPage />} />

                    {/* Blog nested routes */}
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blog/posts" element={<BlogPostsPage />} />
                    <Route path="/blog/drafts" element={<BlogDraftsPage />} />

                    {/* Social nested routes */}
                    <Route path="/social" element={<SocialPage />} />
                    <Route path="/social/feed" element={<SocialFeedPage />} />
                    <Route
                        path="/social/connections"
                        element={<SocialConnectionsPage />}
                    />

                    {/* Catch all - redirect to home */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
