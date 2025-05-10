'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Plus, Search, Filter, Bell, Package, ArrowUpDown, 
  ArrowRight, Calendar, Truck, Clock 
} from 'lucide-react';

// モックデータ
const inventoryMockData = [
  { id: 1, name: '単管パイプ 1.5m', category: '足場材', quantity: 120, available: 80, status: 'AVAILABLE' },
  { id: 2, name: '単管パイプ 2.0m', category: '足場材', quantity: 200, available: 150, status: 'AVAILABLE' },
  { id: 3, name: 'クランプ 直交', category: '足場材', quantity: 300, available: 250, status: 'AVAILABLE' },
  { id: 4, name: 'クランプ 自在', category: '足場材', quantity: 250, available: 200, status: 'AVAILABLE' },
  { id: 5, name: '建わく', category: '足場材', quantity: 100, available: 30, status: 'AVAILABLE' },
];

const leasesMockData = [
  { 
    id: 1, 
    status: 'ACTIVE',
    equipment: '単管パイプ 1.5m', 
    quantity: 15,
    company: '山田建設株式会社',
    startDate: '2024-05-15',
    endDate: '2024-06-15',
    direction: 'lending' // 貸出中
  },
  { 
    id: 2, 
    status: 'ACTIVE',
    equipment: 'クランプ 直交', 
    quantity: 50,
    company: '佐藤工業株式会社',
    startDate: '2024-05-10',
    endDate: '2024-05-30',
    direction: 'lending' // 貸出中
  },
  { 
    id: 3, 
    status: 'ACTIVE',
    equipment: '建わく', 
    quantity: 10,
    company: '鈴木建設株式会社',
    startDate: '2024-05-05',
    endDate: '2024-05-25',
    direction: 'borrowing' // 借入中
  },
];

const notificationsMockData = [
  {
    id: 1,
    type: 'request',
    message: '山田建設株式会社から単管パイプ 1.5mのリースリクエストが届いています',
    date: '2024-05-14',
    isRead: false
  },
  {
    id: 2,
    type: 'return',
    message: '佐藤工業株式会社へのクランプ 直交の返却期限が近づいています',
    date: '2024-05-13',
    isRead: true
  },
  {
    id: 3,
    type: 'approval',
    message: '鈴木建設株式会社への建わくのリースリクエストが承認されました',
    date: '2024-05-10',
    isRead: true
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('inventory');

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">ダッシュボード</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <button className="flex items-center rounded-full bg-blue-50 p-2 text-blue-600 hover:bg-blue-100">
              <Bell className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {notificationsMockData.filter(n => !n.isRead).length}
              </span>
            </button>
          </div>
          <Link
            href="/inventory/add"
            className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            <Plus className="mr-2 h-5 w-5" />
            在庫を登録
          </Link>
        </div>
      </div>

      {/* 検索とフィルター */}
      <div className="mb-6 flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 sm:space-x-4">
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full rounded-lg border-0 py-2 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
            placeholder="資材名、カテゴリで検索..."
          />
        </div>
        <button className="flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          <Filter className="mr-2 h-5 w-5" />
          フィルター
        </button>
      </div>

      {/* タブナビゲーション */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('inventory')}
            className={`flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium ${
              activeTab === 'inventory'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            <Package className="mr-2 h-5 w-5" />
            在庫一覧
          </button>
          <button
            onClick={() => setActiveTab('leases')}
            className={`flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium ${
              activeTab === 'leases'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            <ArrowUpDown className="mr-2 h-5 w-5" />
            リース管理
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium ${
              activeTab === 'notifications'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            <Bell className="mr-2 h-5 w-5" />
            通知
            {notificationsMockData.filter(n => !n.isRead).length > 0 && (
              <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {notificationsMockData.filter(n => !n.isRead).length}
              </span>
            )}
          </button>
        </nav>
      </div>

      {/* タブコンテンツ */}
      <div className="mb-8">
        {activeTab === 'inventory' && (
          <div>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      資材名
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      カテゴリ
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      総数量
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      利用可能
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      ステータス
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                      アクション
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {inventoryMockData.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-500">{item.category}</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900">{item.quantity}</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900">{item.available}</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          利用可能
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                        <Link href={`/inventory/${item.id}`} className="text-blue-600 hover:text-blue-900">
                          詳細
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-center">
              <Link
                href="/inventory"
                className="flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
              >
                すべての在庫を見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'leases' && (
          <div>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      ステータス
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      種類
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      資材名
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      数量
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      相手企業
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      期間
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                      アクション
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {leasesMockData.map((lease) => (
                    <tr key={lease.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4">
                        <span className="inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-blue-800">
                          リース中
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center text-sm text-gray-900">
                          {lease.direction === 'lending' ? (
                            <>
                              <Truck className="mr-1 h-4 w-4 text-green-500" />
                              貸出
                            </>
                          ) : (
                            <>
                              <Truck className="mr-1 h-4 w-4 text-blue-500 transform rotate-180" />
                              借入
                            </>
                          )}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{lease.equipment}</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900">{lease.quantity}</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900">{lease.company}</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="mr-1 h-4 w-4" />
                          {lease.startDate} 〜 {lease.endDate}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                        <Link href={`/leases/${lease.id}`} className="text-blue-600 hover:text-blue-900">
                          詳細
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-center">
              <Link
                href="/inventory"
                className="flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
              >
                すべてのリースを見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="space-y-4">
            {notificationsMockData.map((notification) => (
              <div
                key={notification.id}
                className={`flex rounded-lg border p-4 ${
                  notification.isRead ? 'bg-white' : 'bg-blue-50'
                } ${
                  notification.type === 'request'
                    ? 'border-yellow-200'
                    : notification.type === 'return'
                    ? 'border-red-200'
                    : 'border-green-200'
                }`}
              >
                <div
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${
                    notification.type === 'request'
                      ? 'bg-yellow-100 text-yellow-500'
                      : notification.type === 'return'
                      ? 'bg-red-100 text-red-500'
                      : 'bg-green-100 text-green-500'
                  }`}
                >
                  {notification.type === 'request' ? (
                    <Bell className="h-6 w-6" />
                  ) : notification.type === 'return' ? (
                    <Clock className="h-6 w-6" />
                  ) : (
                    <Truck className="h-6 w-6" />
                  )}
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      {notification.message}
                    </p>
                    <span className="text-xs text-gray-500">{notification.date}</span>
                  </div>
                  <div className="mt-2 flex justify-end">
                    {notification.type === 'request' && (
                      <div className="space-x-2">
                        <button className="rounded bg-blue-600 px-3 py-1 text-xs font-medium text-white hover:bg-blue-700">
                          承認
                        </button>
                        <button className="rounded bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-300">
                          拒否
                        </button>
                      </div>
                    )}
                    {notification.type === 'return' && (
                      <button className="rounded bg-blue-600 px-3 py-1 text-xs font-medium text-white hover:bg-blue-700">
                        確認
                      </button>
                    )}
                    {notification.type === 'approval' && !notification.isRead && (
                      <button className="rounded bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-300">
                        既読にする
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4 flex justify-center">
              <Link
                href="/notifications"
                className="flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
              >
                すべての通知を見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 