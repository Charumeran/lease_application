'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, X, AlertCircle } from 'lucide-react';

const categories = [
  { id: 1, name: '足場材' },
  { id: 2, name: '仮設資材' },
  { id: 3, name: '荷役機器' },
  { id: 4, name: '電気機器' },
  { id: 5, name: '清掃機器' },
];

export default function AddEquipmentPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    categoryId: '',
    description: '',
    quantity: 1,
    dailyRate: '',
    location: '',
    image: null as File | null,
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setFormData((prev) => ({ ...prev, image: null }));
    setImagePreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFormError('');

    // バリデーション
    if (!formData.name.trim()) {
      setFormError('資材名を入力してください');
      setIsLoading(false);
      return;
    }

    if (!formData.categoryId) {
      setFormError('カテゴリを選択してください');
      setIsLoading(false);
      return;
    }

    try {
      // ここで実際のAPIリクエストを実装
      // モックのための遅延
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // 成功したら在庫一覧ページにリダイレクト
      router.push('/inventory');
    } catch (error) {
      setFormError('登録に失敗しました。もう一度お試しください。');
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">資材の新規登録</h1>
        <p className="mt-2 text-sm text-gray-600">
          リースに提供する資材の情報を入力してください
        </p>
      </div>

      {formError && (
        <div className="mb-6 rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-red-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">{formError}</h3>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              資材名 <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder="例: 単管パイプ 1.5m"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700">
              カテゴリ <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <select
                id="categoryId"
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                required
              >
                <option value="">選択してください</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              数量 <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="dailyRate" className="block text-sm font-medium text-gray-700">
              日額レート (円/日)
            </label>
            <div className="mt-1">
              <input
                type="number"
                id="dailyRate"
                name="dailyRate"
                value={formData.dailyRate}
                onChange={handleChange}
                min="0"
                placeholder="例: 150"
                className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              保管場所
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="例: 第一倉庫 A棚"
                className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              説明
            </label>
            <div className="mt-1">
              <textarea
                id="description"
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder="資材の説明、状態、特徴などを入力してください"
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">画像</label>
            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 py-10">
              <div className="space-y-1 text-center">
                {!imagePreview ? (
                  <>
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-500"
                      >
                        <span>画像をアップロード</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-1">またはドラッグ＆ドロップ</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </>
                ) : (
                  <div className="relative">
                    <img src={imagePreview} alt="Preview" className="max-h-64 mx-auto" />
                    <button
                      type="button"
                      className="absolute -top-3 -right-3 bg-red-100 rounded-full p-1 text-red-600 hover:bg-red-200"
                      onClick={removeImage}
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-5">
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => router.push('/inventory')}
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              キャンセル
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {isLoading ? '登録中...' : '登録する'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
} 