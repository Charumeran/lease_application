'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Search, User, Phone, Video, MoreHorizontal, Image, File, Paperclip } from 'lucide-react';

// モックデータ - チャット相手リスト
const contactsMockData = [
  {
    id: 1,
    name: '山田建設株式会社 - 山田太郎',
    avatar: null,
    lastMessage: '単管パイプのリースについて確認したいのですが',
    timestamp: '14:30',
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: '佐藤工業株式会社 - 佐藤次郎',
    avatar: null,
    lastMessage: '返却日を5月20日に延長してもらえますか？',
    timestamp: '昨日',
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: '鈴木建設株式会社 - 鈴木三郎',
    avatar: null,
    lastMessage: 'ありがとうございました！',
    timestamp: '昨日',
    unread: 0,
    online: true,
  },
  {
    id: 4,
    name: '田中工業株式会社 - 田中四郎',
    avatar: null,
    lastMessage: '建わくのレンタル料金を教えていただけますか？',
    timestamp: '5/10',
    unread: 0,
    online: false,
  },
  {
    id: 5,
    name: '伊藤電気株式会社 - 伊藤五郎',
    avatar: null,
    lastMessage: '発電機の状態についてお伺いしたいのですが',
    timestamp: '5/8',
    unread: 0,
    online: false,
  },
];

// モックデータ - 特定のチャット相手とのメッセージ履歴
const messagesMockData = [
  {
    id: 1,
    sender: 'other',
    content: 'こんにちは、御社の単管パイプをリースしたいと考えています。',
    timestamp: '14:20',
  },
  {
    id: 2,
    sender: 'other',
    content: '1.5mのものを20本、期間は6月1日から6月30日まで借りることは可能でしょうか？',
    timestamp: '14:22',
  },
  {
    id: 3,
    sender: 'me',
    content: 'こんにちは、山田様。ありがとうございます。',
    timestamp: '14:25',
  },
  {
    id: 4,
    sender: 'me',
    content: '単管パイプ1.5mについて、その期間でしたら20本ご用意可能です。料金は1本あたり150円/日となります。',
    timestamp: '14:26',
  },
  {
    id: 5,
    sender: 'other',
    content: 'ありがとうございます。レンタル料金については了解しました。',
    timestamp: '14:28',
  },
  {
    id: 6,
    sender: 'other',
    content: '単管パイプのリースについて確認したいのですが、クランプもセットでレンタルすることは可能ですか？',
    timestamp: '14:30',
  },
];

export default function ChatPage() {
  const [activeContact, setActiveContact] = useState(contactsMockData[0]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(messagesMockData);
  const [searchTerm, setSearchTerm] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // フィルタリングされた連絡先リスト
  const filteredContacts = contactsMockData.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // メッセージ送信処理
  const handleSendMessage = () => {
    if (message.trim() === '') return;
    
    const newMessage = {
      id: messages.length + 1,
      sender: 'me',
      content: message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  // メッセージ入力処理でEnterキーを押した場合の処理
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // 新しいメッセージが追加されたら自動スクロール
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="h-[calc(100vh-132px)] rounded-lg overflow-hidden shadow-sm border border-gray-200 bg-white flex">
      {/* 連絡先リスト */}
      <div className="w-1/3 border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-md border-0 py-2 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
              placeholder="ユーザー名やメッセージを検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer ${activeContact.id === contact.id ? 'bg-blue-50' : ''}`}
              onClick={() => setActiveContact(contact)}
            >
              <div className="relative flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                  {contact.avatar ? (
                    <img src={contact.avatar} alt={contact.name} className="h-12 w-12 rounded-full" />
                  ) : (
                    <User className="h-6 w-6 text-gray-500" />
                  )}
                </div>
                {contact.online && (
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 border-2 border-white"></span>
                )}
              </div>
              <div className="ml-3 flex-1 overflow-hidden">
                <div className="flex justify-between items-start">
                  <p className="text-sm font-medium text-gray-900 truncate">{contact.name}</p>
                  <p className="text-xs text-gray-500">{contact.timestamp}</p>
                </div>
                <div className="flex justify-between items-start mt-1">
                  <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                  {contact.unread > 0 && (
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-600 text-xs font-medium text-white">
                      {contact.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* チャット本文 */}
      <div className="w-2/3 flex flex-col">
        {/* チャットヘッダー */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="h-5 w-5 text-gray-500" />
              </div>
              {activeContact.online && (
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-400 border-2 border-white"></span>
              )}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{activeContact.name}</p>
              <p className="text-xs text-gray-500">{activeContact.online ? 'オンライン' : 'オフライン'}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Phone className="h-5 w-5 text-gray-500" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Video className="h-5 w-5 text-gray-500" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <MoreHorizontal className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* メッセージエリア */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'other' && (
                <div className="flex-shrink-0 mr-3">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
              )}
              <div className="max-w-[70%]">
                <div
                  className={`rounded-lg px-4 py-2 ${
                    msg.sender === 'me'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* メッセージ入力エリア */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="flex space-x-1 mr-2">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Paperclip className="h-5 w-5 text-gray-500" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Image className="h-5 w-5 text-gray-500" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <File className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <div className="flex-1 relative">
              <input
                type="text"
                className="block w-full rounded-full border-0 py-2.5 pl-4 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                placeholder="メッセージを入力..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button
                className="absolute inset-y-0 right-2 flex items-center"
                onClick={handleSendMessage}
              >
                <Send className="h-5 w-5 text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 