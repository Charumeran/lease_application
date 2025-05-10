'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Plus, Search, Filter, ArrowDownUp, Settings, 
  ArrowDown, ArrowUp, Download, Upload, MoreHorizontal
} from 'lucide-react';

// モックデータ
const inventoryMockData = [
  { id: 1, name: '単管パイプ 1.5m', category: '足場材', quantity: 120, available: 80, status: 'AVAILABLE', lastUpdated: '2024-05-01' },
  { id: 2, name: '単管パイプ 2.0m', category: '足場材', quantity: 200, available: 150, status: 'AVAILABLE', lastUpdated: '2024-05-01' },
  { id: 3, name: 'クランプ 直交', category: '足場材', quantity: 300, available: 250, status: 'AVAILABLE', lastUpdated: '2024-04-28' },
  { id: 4, name: 'クランプ 自在', category: '足場材', quantity: 250, available: 200, status: 'AVAILABLE', lastUpdated: '2024-04-28' },
  { id: 5, name: '建わく', category: '足場材', quantity: 100, available: 30, status: 'AVAILABLE', lastUpdated: '2024-04-25' },
  { id: 6, name: '交差筋かい', category: '足場材', quantity: 150, available: 120, status: 'AVAILABLE', lastUpdated: '2024-04-25' },
  { id: 7, name: 'ブラケット', category: '足場材', quantity: 200, available: 180, status: 'AVAILABLE', lastUpdated: '2024-04-20' },
  { id: 8, name: '手すり', category: '足場材', quantity: 180, available: 150, status: 'AVAILABLE', lastUpdated: '2024-04-20' },
  { id: 9, name: '養生シート', category: '仮設資材', quantity: 50, available: 30, status: 'AVAILABLE', lastUpdated: '2024-04-15' },
  { id: 10, name: 'メッシュシート', category: '仮設資材', quantity: 40, available: 25, status: 'AVAILABLE', lastUpdated: '2024-04-15' },
  { id: 11, name: 'コンクリートバケット', category: '荷役機器', quantity: 10, available: 5, status: 'AVAILABLE', lastUpdated: '2024-04-10' },
  { id: 12, name: 'バイブレーター', category: '荷役機器', quantity: 8, available: 3, status: 'AVAILABLE', lastUpdated: '2024-04-10' },
  { id: 13, name: '発電機', category: '電気機器', quantity: 5, available: 2, status: 'AVAILABLE', lastUpdated: '2024-04-05' },
  { id: 14, name: '投光器', category: '電気機器', quantity: 15, available: 10, status: 'AVAILABLE', lastUpdated: '2024-04-05' },
  { id: 15, name: '高圧洗浄機', category: '清掃機器', quantity: 3, available: 1, status: 'AVAILABLE', lastUpdated: '2024-04-01' },
];

const categories = [
  '足場材',
  '仮設資材',
  '荷役機器',
  '電気機器',
  '清掃機器',
];

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [showFilters, setShowFilters] = useState(false);

  // フィルタリングと並び替え
  const filteredInventory = inventoryMockData
    .filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      const fieldA = a[sortField];
      const fieldB = b[sortField];
      
      if (typeof fieldA === 'string' && typeof fieldB === 'string') {
        return sortDirection === 'asc' 
          ? fieldA.localeCompare(fieldB) 
          : fieldB.localeCompare(fieldA);
      } else {
        return sortDirection === 'asc' 
          ? fieldA - fieldB 
          : fieldB - fieldA;
      }
    });

  // ソート切り替え
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // ソート表示用のアイコン
  const renderSortIcon = (field) => {
    if (sortField !== field) return <ArrowDownUp className="ml-1 h-4 w-4 text-gray-400" />;
    return sortDirection === 'asc' 
      ? <ArrowDown className="ml-1 h-4 w-4 text-blue-500" />
      : <ArrowUp className="ml-1 h-4 w-4 text-blue-500" />;
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">在庫管理</h1>
        <div className="flex space-x-2">
          <Link
            href="/inventory/add"
            className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            <Plus className="mr-1.5 h-5 w-5" />
            新規登録
          </Link>
          <div className="relative">
            <button 
              className="flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Settings className="mr-1.5 h-4 w-4" />
              操作
            </button>
            {showFilters && (
              <div className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <Download className="mr-2 h-4 w-4" />
                  CSVエクスポート
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <Upload className="mr-2 h-4 w-4" />
                  CSVインポート
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 検索とフィルター */}
      <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-lg border-0 py-2 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
              placeholder="資材名で検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block w-full rounded-lg border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
            >
              <option value="">すべてのカテゴリ</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 在庫一覧テーブル */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    className="flex items-center"
                    onClick={() => handleSort('name')}
                  >
                    資材名
                    {renderSortIcon('name')}
                  </button>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    className="flex items-center"
                    onClick={() => handleSort('category')}
                  >
                    カテゴリ
                    {renderSortIcon('category')}
                  </button>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    className="flex items-center"
                    onClick={() => handleSort('quantity')}
                  >
                    総数量
                    {renderSortIcon('quantity')}
                  </button>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    className="flex items-center"
                    onClick={() => handleSort('available')}
                  >
                    利用可能
                    {renderSortIcon('available')}
                  </button>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    className="flex items-center"
                    onClick={() => handleSort('lastUpdated')}
                  >
                    最終更新日
                    {renderSortIcon('lastUpdated')}
                  </button>
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  アクション
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {filteredInventory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{item.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.quantity}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {item.available}
                      <span className="ml-1 text-xs text-gray-500">
                        ({Math.round((item.available / item.quantity) * 100)}%)
                      </span>
                    </div>
                    <div className="mt-1 h-1.5 w-24 rounded-full bg-gray-200">
                      <div 
                        className="h-1.5 rounded-full bg-blue-600" 
                        style={{ width: `${(item.available / item.quantity) * 100}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{item.lastUpdated}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <Link href={`/inventory/${item.id}`} className="text-blue-600 hover:text-blue-900">
                        詳細
                      </Link>
                      <div className="relative">
                        <button className="text-gray-400 hover:text-gray-500">
                          <MoreHorizontal className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* ページネーション（シンプルなバージョン） */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              前へ
            </a>
            <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              次へ
            </a>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                <span className="font-medium">全 {filteredInventory.length}</span> 件
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">前へ</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" aria-current="page" className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  1
                </a>
                <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                  2
                </a>
                <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                  3
                </a>
                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">次へ</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 