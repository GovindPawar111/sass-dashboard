import React, { useState } from 'react'
import {
    Plus,
    FunnelSimple,
    ArrowsDownUp,
    MagnifyingGlass,
    DotsThree,
    CalendarBlank,
    CaretLeft,
    CaretRight,
} from 'phosphor-react'

// Type definitions
interface OrderItem {
    id: string
    user: {
        name: string
        imgSrc: string
        imgAlt: string
    }
    project: string
    address: string
    date: string
    status: {
        text: string
        color: string
        bgColor: string
        dotColor: string
    }
    selected?: boolean
}

// Sample order data
const orderData: OrderItem[] = [
    {
        id: '#CM9801',
        user: {
            name: 'Natali Craig',
            imgSrc: './images/1.png',
            imgAlt: 'person1',
        },
        project: 'Landing Page',
        address: 'Meadow Lane Oakland',
        date: 'Just now',
        status: {
            text: 'In Progress',
            color: 'text-blue-600 dark:text-blue-400',
            bgColor: 'bg-blue-50 dark:bg-blue-900/20',
            dotColor: 'bg-blue-600',
        },
    },
    {
        id: '#CM9802',
        user: {
            name: 'Kate Morrison',
            imgSrc: './images/2.png',
            imgAlt: 'person2',
        },
        project: 'CRM Admin pages',
        address: 'Larry San Francisco',
        date: 'A minute ago',
        status: {
            text: 'Complete',
            color: 'text-green-600 dark:text-green-400',
            bgColor: 'bg-green-50 dark:bg-green-900/20',
            dotColor: 'bg-green-600',
        },
    },
    {
        id: '#CM9803',
        user: {
            name: 'Drew Cano',
            imgSrc: './images/3.png',
            imgAlt: 'person3',
        },
        project: 'Client Project',
        address: 'Bagwell Avenue Ocala',
        date: '1 hour ago',
        status: {
            text: 'Pending',
            color: 'text-blue-400 dark:text-blue-300',
            bgColor: 'bg-blue-50 dark:bg-blue-900/10',
            dotColor: 'bg-blue-400',
        },
    },
    {
        id: '#CM9804',
        user: {
            name: 'Orlando Diggs',
            imgSrc: './images/4.png',
            imgAlt: 'person4',
        },
        project: 'Admin Dashboard',
        address: 'Washburn Baton Rouge',
        date: 'Yesterday',
        status: {
            text: 'Approved',
            color: 'text-yellow-600 dark:text-yellow-400',
            bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
            dotColor: 'bg-yellow-600',
        },
        selected: true,
    },
    {
        id: '#CM9805',
        user: {
            name: 'Andi Lane',
            imgSrc: './images/5.png',
            imgAlt: 'person5',
        },
        project: 'App Landing Page',
        address: 'Nest Lane Olivette',
        date: 'Feb 2, 2023',
        status: {
            text: 'Rejected',
            color: 'text-neutral-500 dark:text-neutral-400',
            bgColor: 'bg-neutral-100 dark:bg-neutral-700/50',
            dotColor: 'bg-neutral-500',
        },
    },
    // Duplicate entries to show more data
    {
        id: '#CM9801',
        user: {
            name: 'Natali Craig',
            imgSrc: './images/6.png',
            imgAlt: 'person6',
        },
        project: 'Landing Page',
        address: 'Meadow Lane Oakland',
        date: 'Just now',
        status: {
            text: 'In Progress',
            color: 'text-blue-600 dark:text-blue-400',
            bgColor: 'bg-blue-50 dark:bg-blue-900/20',
            dotColor: 'bg-blue-600',
        },
    },
    {
        id: '#CM9802',
        user: {
            name: 'Kate Morrison',
            imgSrc: './images/7.png',
            imgAlt: 'person7',
        },
        project: 'CRM Admin pages',
        address: 'Larry San Francisco',
        date: 'A minute ago',
        status: {
            text: 'Complete',
            color: 'text-green-600 dark:text-green-400',
            bgColor: 'bg-green-50 dark:bg-green-900/20',
            dotColor: 'bg-green-600',
        },
    },
    {
        id: '#CM9803',
        user: {
            name: 'Drew Cano',
            imgSrc: './images/8.png',
            imgAlt: 'person8',
        },
        project: 'Client Project',
        address: 'Bagwell Avenue Ocala',
        date: '1 hour ago',
        status: {
            text: 'Pending',
            color: 'text-blue-400 dark:text-blue-300',
            bgColor: 'bg-blue-50 dark:bg-blue-900/10',
            dotColor: 'bg-blue-400',
        },
    },
    {
        id: '#CM9804',
        user: {
            name: 'Orlando Diggs',
            imgSrc: './images/9.png',
            imgAlt: 'person9',
        },
        project: 'Admin Dashboard',
        address: 'Washburn Baton Rouge',
        date: 'Yesterday',
        status: {
            text: 'Approved',
            color: 'text-yellow-600 dark:text-yellow-400',
            bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
            dotColor: 'bg-yellow-600',
        },
    },
    {
        id: '#CM9805',
        user: {
            name: 'Andi Lane',
            imgSrc: './images/10.png',
            imgAlt: 'person10',
        },
        project: 'App Landing Page',
        address: 'Nest Lane Olivette',
        date: 'Feb 2, 2023',
        status: {
            text: 'Rejected',
            color: 'text-neutral-500 dark:text-neutral-400',
            bgColor: 'bg-neutral-100 dark:bg-neutral-700/50',
            dotColor: 'bg-neutral-500',
        },
    },
]

const OrderListPage: React.FC = () => {
    const [selectedOrders, setSelectedOrders] = useState<Set<string>>(
        new Set(['#CM9804'])
    )

    const handleSelectAll = () => {
        if (selectedOrders.size === orderData.length) {
            setSelectedOrders(new Set())
        } else {
            setSelectedOrders(new Set(orderData.map((order) => order.id)))
        }
    }

    const handleSelectOrder = (orderId: string) => {
        const newSelected = new Set(selectedOrders)
        if (newSelected.has(orderId)) {
            newSelected.delete(orderId)
        } else {
            newSelected.add(orderId)
        }
        setSelectedOrders(newSelected)
    }

    return (
        <div className="p-6 bg-white dark:bg-neutral-900 min-h-screen">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                    Order List
                </h1>

                {/* Action Bar */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        {/* Add Button - Blue circular */}
                        <button className="w-10 h-10 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors flex items-center justify-center">
                            <Plus size={18} />
                        </button>

                        {/* Filter Button - Simple icon */}
                        <button className="w-10 h-10 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors flex items-center justify-center">
                            <FunnelSimple
                                size={18}
                                className="text-neutral-600 dark:text-neutral-400"
                            />
                        </button>

                        {/* Sort Button - Simple icon */}
                        <button className="w-10 h-10 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors flex items-center justify-center">
                            <ArrowsDownUp
                                size={18}
                                className="text-neutral-600 dark:text-neutral-400"
                            />
                        </button>
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <MagnifyingGlass
                            size={16}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400"
                        />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-neutral-50 dark:bg-neutral-800 border-0 rounded-lg pl-10 pr-4 py-2.5 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 w-64"
                        />
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white dark:bg-neutral-800 rounded-none border-0 shadow-none overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-neutral-200 dark:border-neutral-700">
                                <th className="text-left px-4 py-3 w-12">
                                    <input
                                        type="checkbox"
                                        checked={
                                            selectedOrders.size ===
                                                orderData.length &&
                                            orderData.length > 0
                                        }
                                        onChange={handleSelectAll}
                                        className="w-4 h-4 rounded border-neutral-300 dark:border-neutral-600 text-primary-600 focus:ring-primary-500 focus:ring-1"
                                    />
                                </th>
                                <th className="text-left text-sm font-medium text-neutral-600 dark:text-neutral-400 px-4 py-3">
                                    Order ID
                                </th>
                                <th className="text-left text-sm font-medium text-neutral-600 dark:text-neutral-400 px-4 py-3">
                                    User
                                </th>
                                <th className="text-left text-sm font-medium text-neutral-600 dark:text-neutral-400 px-4 py-3">
                                    Project
                                </th>
                                <th className="text-left text-sm font-medium text-neutral-600 dark:text-neutral-400 px-4 py-3">
                                    Address
                                </th>
                                <th className="text-left text-sm font-medium text-neutral-600 dark:text-neutral-400 px-4 py-3">
                                    Date
                                </th>
                                <th className="text-left text-sm font-medium text-neutral-600 dark:text-neutral-400 px-4 py-3">
                                    Status
                                </th>
                                <th className="text-center text-sm font-medium text-neutral-600 dark:text-neutral-400 px-4 py-3 w-12"></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-neutral-800">
                            {orderData.map((order, index) => (
                                <tr
                                    key={`${order.id}-${index}`}
                                    className="border-b border-neutral-100 dark:border-neutral-700/50 last:border-b-0 hover:bg-neutral-50 dark:hover:bg-neutral-700/30 transition-colors"
                                >
                                    <td className="px-4 py-4">
                                        <input
                                            type="checkbox"
                                            checked={selectedOrders.has(
                                                order.id
                                            )}
                                            onChange={() =>
                                                handleSelectOrder(order.id)
                                            }
                                            className="w-4 h-4 rounded border-neutral-300 dark:border-neutral-600 text-primary-600 focus:ring-primary-500 focus:ring-1"
                                        />
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className="text-sm font-medium text-neutral-900 dark:text-white">
                                            {order.id}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0`}
                                            >
                                                <img
                                                    src={order.user.imgSrc}
                                                    alt={order.user.imgAlt}
                                                    className=" rounded-full "
                                                />
                                            </div>
                                            <span className="text-sm font-medium text-neutral-900 dark:text-white">
                                                {order.user.name}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className="text-sm text-neutral-700 dark:text-neutral-300">
                                            {order.project}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <span className="text-sm text-neutral-700 dark:text-neutral-300">
                                            {order.address}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="flex items-center gap-2">
                                            <CalendarBlank size={16} />
                                            <span className="text-sm text-neutral-700 dark:text-neutral-300">
                                                {order.date}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="flex items-center gap-2">
                                            <div
                                                className={`w-2 h-2 ${order.status.dotColor} rounded-full`}
                                            ></div>
                                            <span
                                                className={`text-sm font-medium ${order.status.color}`}
                                            >
                                                {order.status.text}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-center">
                                        <button className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded transition-colors">
                                            <DotsThree
                                                size={16}
                                                className="text-neutral-400"
                                            />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between px-4 py-4 border-t border-neutral-200 dark:border-neutral-700">
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                        Showing 1-10 of 50 results
                    </div>
                    <div className="flex items-center gap-1">
                        <button className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                            <CaretLeft
                                size={14}
                                className="text-neutral-600 dark:text-neutral-400"
                            />
                        </button>

                        {[1, 2, 3, 4, 5].map((page) => (
                            <button
                                key={page}
                                className={`px-3 py-1.5 text-sm rounded-lg transition-colors min-w-[32px] ${
                                    page === 1
                                        ? 'bg-primary-600 text-white'
                                        : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                                }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors">
                            <CaretRight
                                size={14}
                                className="text-neutral-600 dark:text-neutral-400"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderListPage
