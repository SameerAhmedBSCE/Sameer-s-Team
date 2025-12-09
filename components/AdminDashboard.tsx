import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts';
import { X, Lock, Users, MousePointer, Eye } from 'lucide-react';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    if (isOpen) {
      // Load stats from local storage
      const views = parseInt(localStorage.getItem('pageViews') || '0');
      const clicks = parseInt(localStorage.getItem('contactClicks') || '0');
      
      // Mock historical data for the chart
      const data = [
        { name: 'Mon', views: Math.floor(views * 0.1) },
        { name: 'Tue', views: Math.floor(views * 0.2) },
        { name: 'Wed', views: Math.floor(views * 0.15) },
        { name: 'Thu', views: Math.floor(views * 0.25) },
        { name: 'Fri', views: Math.floor(views * 0.3) },
        { name: 'Sat', views: views }, // Current cumulative
        { name: 'Sun', views: views + 5 },
      ];

      setStats({
        totalViews: views,
        totalClicks: clicks,
        conversionRate: views > 0 ? ((clicks / views) * 100).toFixed(1) : 0,
        chartData: data
      });
    }
  }, [isOpen]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple client-side check. In production, use real auth.
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Lock className="w-5 h-5 text-brand-accent" /> Admin Analytics
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {!isAuthenticated ? (
            <div className="flex flex-col items-center py-12">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <Lock className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-bold mb-4">Restricted Access</h3>
              <form onSubmit={handleLogin} className="flex gap-2">
                <input 
                  type="password" 
                  placeholder="Enter Access Key" 
                  className="px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-brand-accent"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="px-6 py-2 bg-brand-dark text-white rounded-lg hover:bg-slate-800">
                  Access
                </button>
              </form>
              <p className="text-xs text-slate-400 mt-4">Hint: admin123</p>
            </div>
          ) : (
            <div className="space-y-8 animate-fade-in-up">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      <Eye className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">+12%</span>
                  </div>
                  <p className="text-slate-500 text-sm">Total Page Views</p>
                  <h3 className="text-3xl font-bold text-slate-800">{stats?.totalViews}</h3>
                </div>

                <div className="p-6 bg-purple-50 rounded-xl border border-purple-100">
                   <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                      <MousePointer className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm">Contact Button Clicks</p>
                  <h3 className="text-3xl font-bold text-slate-800">{stats?.totalClicks}</h3>
                </div>

                <div className="p-6 bg-orange-50 rounded-xl border border-orange-100">
                   <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                      <Users className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm">Conversion Rate</p>
                  <h3 className="text-3xl font-bold text-slate-800">{stats?.conversionRate}%</h3>
                </div>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl border shadow-sm">
                  <h3 className="font-bold text-lg mb-6">Visitor Trends</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={stats?.chartData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip />
                        <Line type="monotone" dataKey="views" stroke="#3b82f6" strokeWidth={3} dot={{r: 4, fill:'#3b82f6'}} activeDot={{r: 6}} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border shadow-sm">
                  <h3 className="font-bold text-lg mb-6">Engagement Overview</h3>
                   <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={stats?.chartData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip cursor={{fill: '#f1f5f9'}} />
                        <Bar dataKey="views" fill="#0f172a" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                  <p className="text-xs text-slate-400">Data is stored locally for demonstration purposes.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
