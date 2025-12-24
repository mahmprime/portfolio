import { useState } from "react";

const DashboardWebMockup = ({ fullPage = false }: { fullPage?: boolean }) => {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 2000);
  };

  if (fullPage) {
    return (
      <div className="min-h-full bg-background flex">
        {/* Notification */}
        {notification && (
          <div className="fixed top-8 right-8 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-lg animate-fade-in z-50">
            {notification}
          </div>
        )}

        {/* Sidebar */}
        <div className="w-64 bg-secondary/30 border-r border-border p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-primary rounded-lg" />
            <span className="font-heading font-bold">AdminPro</span>
          </div>

          <nav className="space-y-2">
            {[
              { name: "Dashboard" },
              { name: "Analytics" },
              { name: "Customers" },
              { name: "Products" },
              { name: "Orders" },
              { name: "Settings" },
            ].map((item) => (
              <div
                key={item.name}
                onClick={() => {
                  setActiveNav(item.name);
                  showNotification(`Navigated to ${item.name}`);
                }}
                className={`px-4 py-2 rounded-lg cursor-pointer transition-colors ${
                  activeNav === item.name ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                }`}
              >
                {item.name}
              </div>
            ))}
          </nav>
        </div>

        {/* Main */}
        <div className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-heading font-bold">{activeNav}</h1>
              <p className="text-muted-foreground">Welcome back, here's your overview</p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="bg-secondary rounded-xl px-4 py-2 border border-border focus:border-primary focus:outline-none transition-colors"
              />
              <div 
                className="w-10 h-10 rounded-full bg-secondary cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                onClick={() => showNotification("Profile settings opened")}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {[
              { label: "Total Revenue", value: "$125,430", change: "+15.3%" },
              { label: "Active Users", value: "12,543", change: "+8.2%" },
              { label: "Orders", value: "1,342", change: "+12.1%" },
              { label: "Conversion", value: "3.24%", change: "+2.4%" },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="bg-secondary/30 rounded-xl p-6 border border-border hover:border-primary/50 transition-colors cursor-pointer"
                onClick={() => showNotification(`Viewing ${stat.label} details`)}
              >
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-heading font-bold my-1">{stat.value}</p>
                <span className="text-sm text-primary">{stat.change}</span>
              </div>
            ))}
          </div>

          {/* Chart placeholder */}
          <div className="bg-secondary/30 rounded-xl p-6 border border-border mb-8">
            <h3 className="font-heading font-bold mb-4">Revenue Overview</h3>
            <div className="h-48 flex items-end gap-4">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 80].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-primary/20 rounded-t hover:bg-primary/40 transition-colors cursor-pointer" 
                  style={{ height: `${h}%` }}
                  onClick={() => showNotification(`Month ${i + 1}: $${Math.floor(h * 1500)}`)}
                />
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-secondary/30 rounded-xl p-6 border border-border">
            <h3 className="font-heading font-bold mb-4">Recent Orders</h3>
            <div className="space-y-4">
              {[
                { id: "#12431", customer: "John Doe", status: "Completed", amount: "$249.00" },
                { id: "#12430", customer: "Jane Smith", status: "Pending", amount: "$129.00" },
                { id: "#12429", customer: "Mike Johnson", status: "Processing", amount: "$549.00" },
              ].map((order) => (
                <div 
                  key={order.id} 
                  className="flex items-center justify-between py-2 border-b border-border last:border-0 hover:bg-secondary/30 px-2 -mx-2 rounded cursor-pointer transition-colors"
                  onClick={() => showNotification(`Order ${order.id} - ${order.customer}`)}
                >
                  <span className="text-muted-foreground">{order.id}</span>
                  <span>{order.customer}</span>
                  <span className={order.status === "Completed" ? "text-primary" : "text-muted-foreground"}>
                    {order.status}
                  </span>
                  <span className="font-medium">{order.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-background flex text-[10px]">
      {/* Mini Sidebar */}
      <div className="w-16 bg-secondary/30 border-r border-border p-2">
        <div className="w-6 h-6 bg-primary rounded mb-4" />
        <div className="space-y-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`h-4 rounded ${i === 1 ? "bg-primary" : "bg-muted"}`} />
          ))}
        </div>
      </div>

      {/* Mini Main */}
      <div className="flex-1 p-2">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">Dashboard</span>
          <div className="w-4 h-4 rounded-full bg-secondary" />
        </div>

        {/* Mini Stats */}
        <div className="grid grid-cols-2 gap-1 mb-2">
          {["$125K", "12.5K", "1,342", "3.24%"].map((v, i) => (
            <div key={i} className="bg-secondary/50 rounded p-1.5">
              <span className="font-bold">{v}</span>
            </div>
          ))}
        </div>

        {/* Mini Chart */}
        <div className="bg-secondary/30 rounded p-2 mb-2">
          <div className="h-16 flex items-end gap-0.5">
            {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
              <div key={i} className="flex-1 bg-primary/30 rounded-t" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        {/* Mini List */}
        <div className="space-y-1">
          {["#12431 $249", "#12430 $129"].map((item, i) => (
            <div key={i} className="text-[9px] text-muted-foreground bg-secondary/30 rounded p-1">{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardWebMockup;
