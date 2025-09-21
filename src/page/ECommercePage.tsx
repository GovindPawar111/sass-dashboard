import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    CartesianGrid,
} from 'recharts'

// Type definitions
interface StatsCardProps {
    title: string
    value: string
    change: string
    changeType: 'positive' | 'negative'
    bgColor?: string
}

interface RevenueDataPoint {
    month: string
    currentWeek: number
    previousWeek: number
}

interface ProjectionsDataPoint {
    month: string
    projections: number
    actuals: number
}

interface LocationData {
    id: number
    city: string
    value: string
    color: string
}

interface SalesDataPoint {
    [key: string]: string | number
    name: string
    value: number
    percentage: number
    color: string
}

interface Product {
    name: string
    price: string
    quantity: number
    amount: string
}

interface PieChartLabelProps {
    cx?: string | number
    cy?: string | number
    midAngle?: number
    innerRadius?: number
    outerRadius?: number
    index?: number
    [key: string]: unknown
}

// Revenue by location data
const revenueLocationData: LocationData[] = [
    {
        id: 1,
        city: 'New York',
        value: '72K',
        color: 'bg-blue-500',
    },
    {
        id: 2,
        city: 'San Francisco',
        value: '39K',
        color: 'bg-green-500',
    },
    {
        id: 3,
        city: 'Sydney',
        value: '25K',
        color: 'bg-purple-500',
    },
    {
        id: 4,
        city: 'Singapore',
        value: '61K',
        color: 'bg-orange-500',
    },
]

// Stats Card Component
const StatsCard: React.FC<StatsCardProps> = ({
    title,
    value,
    change,
    changeType,
    bgColor = 'bg-white',
}) => (
    <div
        className={`${bgColor} dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm`}
    >
        <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">
            {title}
        </h3>
        <div className="flex items-end justify-between">
            <span className="text-3xl font-bold text-neutral-900 dark:text-white">
                {value}
            </span>
            <div
                className={`flex items-center text-sm font-medium ${
                    changeType === 'positive'
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-red-600 dark:text-red-400'
                }`}
            >
                <span>{change}</span>
                <svg
                    className={`ml-1 w-4 h-4 ${
                        changeType === 'positive' ? 'rotate-0' : 'rotate-180'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>
    </div>
)

// Projections vs Actuals Chart Component
const ProjectionsChart: React.FC = () => {
    const projectionsActualsData: ProjectionsDataPoint[] = [
        { month: 'Jan', projections: 20, actuals: 12 },
        { month: 'Feb', projections: 25, actuals: 15 },
        { month: 'Mar', projections: 22, actuals: 12 },
        { month: 'Apr', projections: 28, actuals: 18 },
        { month: 'May', projections: 18, actuals: 10 },
        { month: 'Jun', projections: 25, actuals: 15 },
    ]

    return (
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm h-full">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
                Projections vs Actuals
            </h3>

            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={projectionsActualsData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#e5e7eb"
                            vertical={false}
                        />
                        <XAxis
                            axisLine={false}
                            tickLine={false}
                            dataKey="month"
                            tick={{ fontSize: 12, fill: '#9ca3af' }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#9ca3af' }}
                            tickFormatter={(value: number) => `${value}M`}
                            domain={[0, 30]}
                        />
                        <Bar
                            dataKey="actuals"
                            stackId="a"
                            fill="#7dd3fc"
                            radius={[0, 0, 0, 0]}
                            barSize={40}
                        />
                        <Bar
                            dataKey="projections"
                            stackId="a"
                            fill="#bfdbfe"
                            radius={[4, 4, 0, 0]}
                            barSize={40}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

// Revenue Chart Component
const RevenueChart: React.FC = () => {
    const revenueData: RevenueDataPoint[] = [
        { month: 'Jan', currentWeek: 13, previousWeek: 8 },
        { month: 'Feb', currentWeek: 7, previousWeek: 17 },
        { month: 'Mar', currentWeek: 11, previousWeek: 17 },
        { month: 'Apr', currentWeek: 15, previousWeek: 10 },
        { month: 'May', currentWeek: 19, previousWeek: 13 },
        { month: 'Jun', currentWeek: 20, previousWeek: 23 },
    ]

    return (
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                    Revenue
                </h3>
                <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-neutral-900 dark:bg-white rounded-full"></div>
                        <span className="text-neutral-600 dark:text-neutral-400">
                            Current Week
                        </span>
                        <span className="font-semibold text-neutral-900 dark:text-white">
                            $58,211
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <span className="text-neutral-600 dark:text-neutral-400">
                            Previous Week
                        </span>
                        <span className="font-semibold text-neutral-900 dark:text-white">
                            $68,768
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={revenueData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#e5e7eb"
                            vertical={false}
                        />
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#9ca3af' }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#9ca3af' }}
                            tickFormatter={(value: number) => `${value}M`}
                            domain={[0, 30]}
                        />
                        <Line
                            type="monotone"
                            dataKey="currentWeek"
                            stroke="#000000"
                            strokeWidth={3}
                            strokeDasharray="5 5"
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="previousWeek"
                            stroke="#93c5fd"
                            strokeWidth={3}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

// Revenue by Location Component - Fixed to match Figma
const RevenueByLocation: React.FC = () => {
    return (
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm h-full">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
                Revenue by Location
            </h3>

            {/* World Map Representation */}
            <div className="relative h-48 mb-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-neutral-700 dark:to-neutral-600 rounded-lg p-6 flex items-center justify-center overflow-hidden">
                {/* Simplified world map background */}
                <div className="absolute inset-0 opacity-10">
                    <svg viewBox="0 0 400 200" className="w-full h-full">
                        {/* Simplified world continents */}
                        <path
                            d="M50,80 Q80,60 120,70 Q150,65 180,75 Q220,70 250,80 Q280,85 320,75 Q350,70 380,80 L380,120 Q350,130 320,125 Q280,135 250,120 Q220,130 180,125 Q150,135 120,130 Q80,140 50,120 Z"
                            fill="currentColor"
                        />
                        <path
                            d="M100,40 Q130,30 160,35 Q190,30 220,40 Q250,35 280,45 L280,70 Q250,60 220,65 Q190,55 160,60 Q130,55 100,65 Z"
                            fill="currentColor"
                        />
                        <ellipse
                            cx="320"
                            cy="130"
                            rx="40"
                            ry="25"
                            fill="currentColor"
                        />
                    </svg>
                </div>

                {/* Location pins */}
                <div className="relative w-full h-full">
                    {/* New York */}
                    <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                    </div>
                    {/* San Francisco */}
                    <div className="absolute top-2/5 left-1/6 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                    </div>
                    {/* Sydney */}
                    <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                    </div>
                    {/* Singapore */}
                    <div className="absolute top-2/3 right-1/3 transform translate-x-1/2 -translate-y-1/2">
                        <div className="w-3 h-3 bg-orange-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                    </div>
                </div>

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 dark:bg-neutral-800/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                        <svg
                            className="w-6 h-6 text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Location list */}
            <div className="space-y-3">
                {revenueLocationData.map((location) => (
                    <div
                        key={location.id}
                        className="flex items-center justify-between p-3 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 rounded-lg transition-colors border border-neutral-100 dark:border-neutral-700/50"
                    >
                        <div className="flex items-center space-x-3">
                            <div
                                className={`w-3 h-3 ${location.color} rounded-full shadow-sm`}
                            ></div>
                            <span className="text-sm text-neutral-900 dark:text-white font-medium">
                                {location.city}
                            </span>
                        </div>
                        <span className="text-sm font-bold text-neutral-900 dark:text-white">
                            {location.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

// Top Selling Products Component
const TopSellingProducts: React.FC = () => {
    const products: Product[] = [
        {
            name: 'ASOS Ridley High Waist',
            price: '$79.49',
            quantity: 82,
            amount: '$6,518.18',
        },
        {
            name: 'Marco Lightweight Shirt',
            price: '$128.50',
            quantity: 37,
            amount: '$4,754.50',
        },
        {
            name: 'Half Sleeve Shirt',
            price: '$39.99',
            quantity: 64,
            amount: '$2,559.36',
        },
        {
            name: 'Lightweight Jacket',
            price: '$20.00',
            quantity: 184,
            amount: '$3,680.00',
        },
        {
            name: 'Marco Shoes',
            price: '$79.49',
            quantity: 64,
            amount: '$1,965.81',
        },
    ]

    return (
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm h-full flex flex-col">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
                Top Selling Products
            </h3>

            <div className="overflow-x-auto flex-1">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-neutral-200 dark:border-neutral-700">
                            <th className="text-left text-sm font-medium text-neutral-600 dark:text-neutral-400 pb-3">
                                Name
                            </th>
                            <th className="text-left text-sm font-medium text-neutral-600 dark:text-neutral-400 pb-3">
                                Price
                            </th>
                            <th className="text-left text-sm font-medium text-neutral-600 dark:text-neutral-400 pb-3">
                                Quantity
                            </th>
                            <th className="text-right text-sm font-medium text-neutral-600 dark:text-neutral-400 pb-3">
                                Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr
                                key={index}
                                className="border-b border-neutral-100 dark:border-neutral-700/50 last:border-b-0 hover:bg-neutral-50 dark:hover:bg-neutral-700/30 transition-colors"
                            >
                                <td className="py-4 text-sm text-neutral-900 dark:text-white font-medium">
                                    {product.name}
                                </td>
                                <td className="py-4 text-sm text-neutral-600 dark:text-neutral-400">
                                    {product.price}
                                </td>
                                <td className="py-4 text-sm text-neutral-600 dark:text-neutral-400">
                                    {product.quantity}
                                </td>
                                <td className="py-4 text-sm text-neutral-900 dark:text-white text-right font-medium">
                                    {product.amount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

// Total Sales Pie Chart Component
const TotalSalesChart: React.FC = () => {
    const salesData: SalesDataPoint[] = [
        { name: 'Direct', value: 300.56, percentage: 38.6, color: '#1f2937' },
        {
            name: 'Affiliate',
            value: 135.18,
            percentage: 25.2,
            color: '#93c5fd',
        },
        {
            name: 'Sponsored',
            value: 154.02,
            percentage: 21.8,
            color: '#86efac',
        },
        { name: 'E-mail', value: 48.96, percentage: 14.4, color: '#fbbf24' },
    ]

    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        index,
    }: PieChartLabelProps) => {
        if (
            index === 0 &&
            cx !== undefined &&
            cy !== undefined &&
            midAngle !== undefined &&
            innerRadius !== undefined &&
            outerRadius !== undefined
        ) {
            const RADIAN = Math.PI / 180
            const centerX = typeof cx === 'string' ? parseFloat(cx) : cx
            const centerY = typeof cy === 'string' ? parseFloat(cy) : cy
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5
            const x = centerX + radius * Math.cos(-midAngle * RADIAN)
            const y = centerY + radius * Math.sin(-midAngle * RADIAN)

            return (
                <text
                    x={x}
                    y={y}
                    fill="white"
                    textAnchor={x > centerX ? 'start' : 'end'}
                    dominantBaseline="central"
                    className="text-sm font-bold"
                >
                    38.6%
                </text>
            )
        }
        return null
    }

    return (
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm h-full">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
                Total Sales
            </h3>

            <div className="flex items-center justify-center mb-6">
                <div className="w-48 h-48">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={salesData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={90}
                                innerRadius={50}
                                fill="#8884d8"
                                dataKey="percentage"
                                startAngle={90}
                                endAngle={450}
                            >
                                {salesData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="space-y-4">
                {salesData.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between"
                    >
                        <div className="flex items-center">
                            <div
                                className="w-3 h-3 rounded-full mr-3"
                                style={{ backgroundColor: item.color }}
                            ></div>
                            <span className="text-sm text-neutral-900 dark:text-white font-medium">
                                {item.name}
                            </span>
                        </div>
                        <span className="text-sm font-bold text-neutral-900 dark:text-white">
                            ${item.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

// Main Dashboard Component
const ECommercePage: React.FC = () => {
    return (
        <div className="p-6 bg-neutral-50 dark:bg-neutral-900 min-h-screen">
            <div className="mb-8">
                <h1 className="text-xl font-bold text-neutral-900 dark:text-white">
                    eCommerce
                </h1>
            </div>

            {/* Charts Row 1 - Projections and Revenue */}
            <div className="grid grid-cols-1 lg:grid-cols-8 gap-6 mb-8">
                {/* Top Stats Row */}
                <div className="lg:col-span-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <StatsCard
                        title="Customers"
                        value="3,781"
                        change="+11.01%"
                        changeType="positive"
                        bgColor="bg-blue-50 dark:bg-blue-900/20"
                    />
                    <StatsCard
                        title="Orders"
                        value="1,219"
                        change="-0.03%"
                        changeType="negative"
                    />
                    <StatsCard
                        title="Revenue"
                        value="$695"
                        change="+15.03%"
                        changeType="positive"
                        bgColor="bg-neutral-100 dark:bg-neutral-700/50"
                    />
                    <StatsCard
                        title="Growth"
                        value="30.1%"
                        change="+6.08%"
                        changeType="positive"
                        bgColor="bg-neutral-100 dark:bg-neutral-700/50"
                    />
                </div>
                <div className="lg:col-span-4">
                    <ProjectionsChart />
                </div>
            </div>

            {/* Charts Row 2 - Revenue and Location */}
            <div className="grid grid-cols-1 lg:grid-cols-8 gap-6 mb-8">
                <div className="lg:col-span-6">
                    <RevenueChart />
                </div>
                <div className="lg:col-span-2">
                    <RevenueByLocation />
                </div>
            </div>

            {/* Bottom Row - Products and Sales */}
            <div className="grid grid-cols-1 lg:grid-cols-8 gap-6 mb-8">
                <div className="lg:col-span-6">
                    <TopSellingProducts />
                </div>
                <div className="lg:col-span-2">
                    <TotalSalesChart />
                </div>
            </div>
        </div>
    )
}

export default ECommercePage
