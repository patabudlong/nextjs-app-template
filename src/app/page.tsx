import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 h-screen bg-slate-800/50 backdrop-blur-xl p-6 fixed border-r border-slate-700/50">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 
                          flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white font-semibold">D</span>
            </div>
            <h1 className="text-xl text-white font-medium tracking-wide">Dashboard</h1>
          </div>
          
          <nav className="space-y-1">
            {[
              { name: "Overview", active: true },
              { name: "Analytics" },
              { name: "Projects" },
              { name: "Messages" },
              { name: "Settings" },
            ].map((item) => (
              <a
                key={item.name}
                href="#"
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all
                           ${item.active 
                             ? 'bg-gradient-to-r from-blue-500/10 to-cyan-400/10 text-blue-400 border border-blue-500/20' 
                             : 'text-slate-400 hover:text-slate-300 hover:bg-slate-800'}`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="ml-64 flex-1 p-8">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl text-white font-medium tracking-wide">Welcome back</h2>
                <p className="text-slate-400 mt-1">Here's your business overview</p>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-slate-300">
                  {/* Notification icon */}
                </button>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 
                              flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <span className="text-white font-semibold">S</span>
                </div>
              </div>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-6 mb-12">
            {[
              { title: "Total Revenue", value: "$845,271", change: "+12.5%", trend: "up" },
              { title: "Active Users", value: "2,435", change: "+8.2%", trend: "up" },
              { title: "Conversion Rate", value: "3.24%", change: "+1.2%", trend: "up" },
              { title: "Avg. Order Value", value: "$235", change: "+4.7%", trend: "up" },
            ].map((stat, index) => (
              <div key={index} 
                   className="p-6 rounded-xl bg-slate-800/50 backdrop-blur-xl border border-slate-700/50
                            hover:bg-slate-800/70 transition-colors">
                <h3 className="text-sm text-slate-400 mb-2">{stat.title}</h3>
                <div className="flex items-end justify-between">
                  <p className="text-2xl text-white font-medium tracking-wide">{stat.value}</p>
                  <span className="text-emerald-400 text-sm font-medium">{stat.change}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Activity Section */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg text-white font-medium tracking-wide">Recent Activity</h3>
                <button className="text-sm text-blue-400 hover:text-blue-300">View all</button>
              </div>
              <div className="space-y-6">
                {[
                  { user: "Alex Morgan", action: "Completed transaction", time: "2h ago" },
                  { user: "Sarah Chen", action: "Updated forecast", time: "5h ago" },
                  { user: "David Kim", action: "Generated report", time: "1d ago" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg 
                                            hover:bg-slate-800/70 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-400/20 
                                  flex items-center justify-center border border-blue-500/20">
                      <span className="text-blue-400">{activity.user.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-white">{activity.action}</p>
                      <p className="text-sm text-slate-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg text-white font-medium tracking-wide">Active Projects</h3>
                <button className="text-sm text-blue-400 hover:text-blue-300">View all</button>
              </div>
              <div className="space-y-6">
                {[
                  { name: "Market Analysis", progress: 75 },
                  { name: "Financial Report", progress: 32 },
                  { name: "Client Presentation", progress: 58 },
                ].map((project, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-white">{project.name}</h4>
                      <span className="text-sm text-slate-400">{project.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-700/50">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
