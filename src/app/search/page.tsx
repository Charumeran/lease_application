'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Search, Filter, CalendarDays, MapPin, 
  ArrowUpDown, Building, Package, X, Truck, PlusCircle
} from 'lucide-react';

// モックデータ - リース可能な資材
const searchMockData = [
  { 
    id: 1, 
    name: '単管パイプ 1.5m', 
    category: '足場材',
    available: 80,
    company: '山田建設株式会社',
    location: '東京都新宿区',
    pricePerDay: 150,
    minPeriod: 7,
    rating: 4.8,
    reviews: 24,
    distance: 3.2,
  },
  { 
    id: 2, 
    name: '単管パイプ 2.0m', 
    category: '足場材',
    available: 150,
    company: '佐藤工業株式会社',
    location: '東京都渋谷区',
    pricePerDay: 180,
    minPeriod: 7,
    rating: 4.6,
    reviews: 32,
    distance: 5.1,
  },
  { 
    id: 3, 
    name: 'クランプ 直交', 
    category: '足場材',
    available: 250,
    company: '鈴木建設株式会社',
    location: '東京都中央区',
    pricePerDay: 100,
    minPeriod: 5,
    rating: 4.5,
    reviews: 18,
    distance: 7.5,
  },
  { 
    id: 4, 
    name: 'クランプ 自在', 
    category: '足場材',
    available: 200,
    company: '高橋建設株式会社',
    location: '東京都港区',
    pricePerDay: 120,
    minPeriod: 5,
    rating: 4.3,
    reviews: 15,
    distance: 8.2,
  },
  { 
    id: 5, 
    name: '建わく', 
    category: '足場材',
    available: 30,
    company: '田中工業株式会社',
    location: '東京都目黒区',
    pricePerDay: 300,
    minPeriod: 10,
    rating: 4.7,
    reviews: 21,
    distance: 4.8,
  },
  { 
    id: 6, 
    name: '足場板', 
    category: '足場材',
    available: 100,
    company: '渡辺建設株式会社',
    location: '東京都品川区',
    pricePerDay: 200,
    minPeriod: 7,
    rating: 4.4,
    reviews: 16,
    distance: 6.3,
  },
  { 
    id: 7, 
    name: '発電機 小型', 
    category: '電気機器',
    available: 5,
    company: '伊藤電気株式会社',
    location: '東京都大田区',
    pricePerDay: 2000,
    minPeriod: 3,
    rating: 4.9,
    reviews: 28,
    distance: 10.5,
  },
  { 
    id: 8, 
    name: 'バイブレーター', 
    category: '荷役機器',
    available: 8,
    company: '小林工業株式会社',
    location: '東京都江東区',
    pricePerDay: 1500,
    minPeriod: 3,
    rating: 4.6,
    reviews: 14,
    distance: 12.7,
  },
];

const categories = [
  '足場材',
  '仮設資材',
  '荷役機器',
  '電気機器',
  '清掃機器',
];

const prefectures = [
  '東京都',
  '神奈川県',
  '埼玉県',
  '千葉県',
  '茨城県',
  '栃木県',
  '群馬県',
];

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPrefecture, setSelectedPrefecture] = useState('');
  const [maxDistance, setMaxDistance] = useState(20);
  const [minAvailable, setMinAvailable] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('distance');

  // フィルタリングと並び替え
  const filteredResults = searchMockData
    .filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
      const matchesPrefecture = selectedPrefecture ? item.location.startsWith(selectedPrefecture) : true;
      const matchesDistance = item.distance <= maxDistance;
      const matchesAvailable = item.available >= minAvailable;
      return matchesSearch && matchesCategory && matchesPrefecture && matchesDistance && matchesAvailable;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.pricePerDay - b.pricePerDay;
        case 'rating':
          return b.rating - a.rating;
        case 'distance':
          return a.distance - b.distance;
        default:
          return a.distance - b.distance;
      }
    });

  const resetFilters = () => {
    setSelectedCategory('');
    setSelectedPrefecture('');
    setMaxDistance(20);
    setMinAvailable(1);
    setStartDate('');
    setEndDate('');
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">資材を探す</h1>
        <p className="mt-2 text-sm text-gray-600">
          条件に合う資材を検索して、リースの見積もりをリクエストできます
        </p>
      </div>

      {/* 検索ボックス */}
      <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col space-y-4 md:flex-row md:items-end md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700">
              検索キーワード
            </label>
            <div className="relative mt-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="search"
                className="block w-full rounded-lg border-0 py-2.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                placeholder="資材名で検索..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              カテゴリ
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="mt-1 block w-full rounded-lg border-0 py-2.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
            >
              <option value="">すべてのカテゴリ</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <button
              className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 md:w-auto"
              onClick={() => {}}
            >
              <Search className="mr-2 h-5 w-5" />
              検索
            </button>
          </div>

          <div>
            <button
              className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 md:w-auto"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="mr-2 h-5 w-5" />
              詳細条件
            </button>
          </div>
        </div>

        {/* 詳細検索フィルター */}
        {showFilters && (
          <div className="mt-4 border-t border-gray-200 pt-4">
            <div className="flex justify-between">
              <h3 className="text-sm font-medium text-gray-700">詳細検索</h3>
              <button
                className="text-sm text-blue-600 hover:text-blue-500"
                onClick={resetFilters}
              >
                条件をリセット
              </button>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <label htmlFor="prefecture" className="block text-sm font-medium text-gray-700">
                  都道府県
                </label>
                <select
                  id="prefecture"
                  value={selectedPrefecture}
                  onChange={(e) => setSelectedPrefecture(e.target.value)}
                  className="mt-1 block w-full rounded-lg border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                >
                  <option value="">すべての都道府県</option>
                  {prefectures.map((prefecture) => (
                    <option key={prefecture} value={prefecture}>
                      {prefecture}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="max-distance" className="block text-sm font-medium text-gray-700">
                  検索距離 (最大{maxDistance}km)
                </label>
                <input
                  type="range"
                  id="max-distance"
                  min="1"
                  max="50"
                  step="1"
                  value={maxDistance}
                  onChange={(e) => setMaxDistance(parseInt(e.target.value))}
                  className="mt-1 block w-full rounded-lg py-2"
                />
              </div>

              <div>
                <label htmlFor="min-available" className="block text-sm font-medium text-gray-700">
                  最小数量
                </label>
                <input
                  type="number"
                  id="min-available"
                  min="1"
                  value={minAvailable}
                  onChange={(e) => setMinAvailable(parseInt(e.target.value) || 1)}
                  className="mt-1 block w-full rounded-lg border-0 py-2 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">
                  開始日
                </label>
                <input
                  type="date"
                  id="start-date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="mt-1 block w-full rounded-lg border-0 py-2 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">
                  終了日
                </label>
                <input
                  type="date"
                  id="end-date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="mt-1 block w-full rounded-lg border-0 py-2 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 検索結果と並び替え */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">
            {filteredResults.length} 件の検索結果
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">並び替え:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="block rounded-lg border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
          >
            <option value="distance">距離が近い順</option>
            <option value="price">料金が安い順</option>
            <option value="rating">評価が高い順</option>
          </select>
        </div>
      </div>

      {/* 検索結果カード */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredResults.map((item) => (
          <div key={item.id} className="rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Package className="h-5 w-5 text-gray-400" />
                  <span className="ml-2 text-xs font-medium text-gray-500">{item.category}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="ml-1 text-xs text-gray-500">{item.distance}km</span>
                </div>
              </div>

              <h3 className="mt-2 text-lg font-medium text-gray-900">{item.name}</h3>

              <div className="mt-2 flex items-center">
                <Building className="h-4 w-4 text-gray-400" />
                <span className="ml-1 text-sm text-gray-600">{item.company}</span>
              </div>

              <div className="mt-1 flex items-center">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="ml-1 text-sm text-gray-600">{item.location}</span>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div>
                  <div className="flex items-center">
                    <Truck className="h-4 w-4 text-blue-500" />
                    <span className="ml-1 text-sm font-medium text-gray-700">利用可能数: {item.available}</span>
                  </div>
                  <div className="mt-1 flex items-center">
                    <CalendarDays className="h-4 w-4 text-blue-500" />
                    <span className="ml-1 text-sm font-medium text-gray-700">最低{item.minPeriod}日から</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-blue-600">{item.pricePerDay.toLocaleString()}円<span className="text-xs text-gray-500">/日</span></p>
                  <div className="mt-1 flex items-center">
                    <div className="flex items-center">
                      <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-yellow-400" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <span className="ml-1 text-sm text-gray-600">{item.rating}</span>
                    </div>
                    <span className="ml-1 text-xs text-gray-500">({item.reviews}件)</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-between">
                <Link
                  href={`/search/${item.id}`}
                  className="flex items-center rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-blue-600 ring-1 ring-blue-600 hover:bg-blue-50"
                >
                  詳細を見る
                </Link>
                <button className="flex items-center rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700">
                  <PlusCircle className="mr-1 h-4 w-4" />
                  リクエスト
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 検索結果がない場合 */}
      {filteredResults.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-8 text-center">
          <div className="rounded-full bg-blue-50 p-3">
            <Search className="h-6 w-6 text-blue-500" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900">検索結果がありません</h3>
          <p className="mt-1 text-sm text-gray-500">検索条件を変更して、再度お試しください。</p>
          <button
            className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            onClick={resetFilters}
          >
            条件をリセット
          </button>
        </div>
      )}
    </div>
  );
} 