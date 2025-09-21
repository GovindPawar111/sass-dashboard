# SaaS Dashboard

A modern, responsive React dashboard with dark/light themes, interactive charts, and pixel-perfect UI components.

## 🚀 Live Demo

**Live Application:** [https://sass-dashboard-app.netlify.app/](https://sass-dashboard-app.netlify.app/)

## 📋 Features

- **Modern Dashboard UI** with eCommerce analytics
- **Dark/Light Theme** toggle with system preference detection
- **Interactive Charts** using Recharts library
- **Responsive Design** for desktop, tablet, and mobile
- **Order Management** with filtering and pagination
- **Navigation System** with breadcrumbs and route management
- **Notification Panel** with activities and contacts

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Recharts** for data visualization
- **Phosphor Icons** for consistent iconography
- **Vite** for build tooling

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn package manager

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/GovindPawar111/sass-dashboard.git
   cd sass-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Top navigation bar
│   ├── NavigationBar.tsx # Sidebar navigation
│   └── NotificationBar.tsx # Right panel notifications
├── Layout/
│   └── MainLayout.tsx  # Main app layout wrapper
├── page/               # Page components
│   ├── ECommercePage.tsx # Main dashboard with charts
│   ├── OrderListPage.tsx # Orders management
│   └── OtherPage.tsx   # Additional page components
├── App.tsx             # Main app component with routing
└── index.css           # Global styles and theme variables
```

## 🎨 Design System

- **Typography:** Inter font family
- **Colors:** Neutral palette with primary blue accent
- **Spacing:** 4px base unit system
- **Animations:** Smooth transitions with CSS transforms
- **Responsiveness:** Mobile-first approach with Tailwind breakpoints

## 🌟 Key Components

### Dashboard Features
- **Stats Cards** with trend indicators
- **Revenue Charts** (Line & Bar charts)
- **Sales Distribution** (Pie chart)
- **Geographic Revenue** mapping
- **Top Products** table

### Interactive Elements
- Theme switcher with localStorage persistence
- Expandable navigation with route-based highlighting
- Sortable/filterable order tables
- Responsive notification panel

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

---

**Repository:** [https://github.com/GovindPawar111/sass-dashboard](https://github.com/GovindPawar111/sass-dashboard)