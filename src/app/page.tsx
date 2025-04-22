import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 h-screen bg-slate-800/50 backdrop-blur-xl p-6 fixed border-r border-white/5">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold">D</span>
            </div>
            <h1 className="text-xl font-semibold text-white">Dashboard</h1>
          </div>
          
          <nav className="space-y-2">
            {[
              { name: "Dashboard", gradient: "from-pink-500 to-purple-600" },
              { name: "Analytics", gradient: "from-orange-500 to-pink-500" },
              { name: "Projects", gradient: "from-blue-500 to-cyan-400" },
              { name: "Messages", gradient: "from-green-400 to-cyan-500" },
              { name: "Settings", gradient: "from-purple-500 to-indigo-500" },
            ].map((item) => (
              <a
                key={item.name}
                href="#"
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm transition-all ${
                  item.name === "Dashboard" 
                    ? `bg-gradient-to-r ${item.gradient} text-white font-medium` 
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="ml-64 flex-1 p-8">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">Welcome back</h2>
                <p className="text-slate-400">Here's your dashboard overview</p>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 rounded-xl hover:bg-white/5 text-white/70 transition-colors">
                  {/* Notification icon */}
                </button>
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-semibold">U</span>
                </div>
              </div>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {[
              { title: "Total Users", value: "2,543", change: "+12.5%", gradient: "from-pink-500 to-purple-600" },
              { title: "Active Projects", value: "24", change: "+3.2%", gradient: "from-orange-500 to-pink-500" },
              { title: "Revenue", value: "$45,231", change: "+8.1%", gradient: "from-blue-500 to-cyan-400" },
              { title: "Conversion Rate", value: "3.24%", change: "+1.2%", gradient: "from-green-400 to-cyan-500" },
            ].map((stat, index) => (
              <div key={index} className={`bg-gradient-to-br ${stat.gradient} p-6 rounded-2xl`}>
                <h3 className="text-sm text-white/80 mb-2">{stat.title}</h3>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <span className="text-emerald-300 text-sm font-medium">{stat.change}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Recent Activity */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
                <button className="text-sm text-purple-400 hover:text-purple-300">View all</button>
              </div>
              <div className="space-y-4">
                {[
                  { user: "Alex Morgan", action: "created a new project", time: "2 hours ago", gradient: "from-pink-500 to-purple-600" },
                  { user: "Sarah Chen", action: "completed task", time: "5 hours ago", gradient: "from-orange-500 to-pink-500" },
                  { user: "David Kim", action: "uploaded files", time: "Yesterday", gradient: "from-blue-500 to-cyan-400" },
                  { user: "Lisa Taylor", action: "commented on project", time: "2 days ago", gradient: "from-green-400 to-cyan-500" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${activity.gradient} flex items-center justify-center`}>
                      <span className="text-white font-medium">
                        {activity.user.split(' ').map(name => name[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-white">
                        <span className="font-medium">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-sm text-slate-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Active Projects</h3>
                <button className="text-sm text-purple-400 hover:text-purple-300">View all</button>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Website Redesign", progress: 75, status: "In Progress", gradient: "from-pink-500 to-purple-600" },
                  { name: "Mobile App Development", progress: 32, status: "In Progress", gradient: "from-orange-500 to-pink-500" },
                  { name: "Marketing Campaign", progress: 100, status: "Completed", gradient: "from-blue-500 to-cyan-400" },
                  { name: "Database Migration", progress: 58, status: "In Progress", gradient: "from-green-400 to-cyan-500" },
                ].map((project, index) => (
                  <div key={index} className="p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                        <span className="text-white">{/* Project icon */}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-white font-medium">{project.name}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === "Completed" 
                              ? "bg-green-400/10 text-green-400" 
                              : "bg-purple-400/10 text-purple-400"
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-700 overflow-hidden">
                          <div 
                            className={`h-full rounded-full bg-gradient-to-r ${project.gradient}`}
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
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
