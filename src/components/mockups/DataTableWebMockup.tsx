import { useState } from "react";

const DataTableWebMockup = ({ fullPage = false }: { fullPage?: boolean }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [notification, setNotification] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 2000);
  };

  const allData = [
    { id: "USR001", name: "Alice Johnson", email: "alice@example.com", status: "Active", created: "Jan 15, 2024" },
    { id: "USR002", name: "Bob Smith", email: "bob@example.com", status: "Pending", created: "Jan 14, 2024" },
    { id: "USR003", name: "Carol White", email: "carol@example.com", status: "Active", created: "Jan 13, 2024" },
    { id: "USR004", name: "David Brown", email: "david@example.com", status: "Archived", created: "Jan 12, 2024" },
    { id: "USR005", name: "Eva Green", email: "eva@example.com", status: "Active", created: "Jan 11, 2024" },
  ];

  const filteredData = allData.filter((row) => {
    const matchesFilter = activeFilter === "All" || row.status === activeFilter;
    const matchesSearch = row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (fullPage) {
    return (
      <div className="min-h-full bg-background p-8">
        {/* Notification */}
        {notification && (
          <div className="fixed top-8 right-8 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-lg animate-fade-in z-50">
            {notification}
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-heading font-bold">Data Management</h1>
            <p className="text-muted-foreground">Manage and analyze your data efficiently</p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => showNotification("Exporting data to CSV...")}
              className="px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors active:scale-95"
            >
              Export
            </button>
            <button 
              onClick={() => showNotification("Add new record form opened")}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors active:scale-95"
            >
              Add New
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search records..."
            className="flex-1 bg-secondary rounded-xl px-4 py-2 border border-border focus:border-primary focus:outline-none transition-colors"
          />
          <div className="flex gap-2">
            {["All", "Active", "Pending", "Archived"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeFilter === filter 
                    ? "bg-primary text-primary-foreground" 
                    : "border border-border hover:bg-secondary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-secondary/30 rounded-xl border border-border overflow-hidden">
          <table className="w-full">
            <thead className="bg-secondary">
              <tr>
                {["ID", "Name", "Email", "Status", "Created", "Actions"].map((h) => (
                  <th key={h} className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row) => (
                <tr 
                  key={row.id} 
                  className="border-t border-border hover:bg-secondary/50 transition-colors cursor-pointer"
                  onClick={() => setEditingId(editingId === row.id ? null : row.id)}
                >
                  <td className="px-6 py-4 text-muted-foreground">{row.id}</td>
                  <td className="px-6 py-4 font-medium">{row.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{row.email}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      row.status === "Active" ? "bg-primary/20 text-primary" :
                      row.status === "Pending" ? "bg-yellow-500/20 text-yellow-500" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{row.created}</td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        showNotification(`Editing ${row.name}`);
                      }}
                      className="text-primary hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-border flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Showing 1-{filteredData.length} of {allData.length} results
            </span>
            <div className="flex gap-2">
              {[1, 2, 3, "...", 50].map((page, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (typeof page === "number") {
                      setCurrentPage(page);
                      showNotification(`Page ${page}`);
                    }
                  }}
                  className={`w-8 h-8 rounded transition-colors ${
                    page === currentPage 
                      ? "bg-primary text-primary-foreground" 
                      : "border border-border hover:bg-secondary"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-background p-2 text-[10px]">
      {/* Mini Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold">Data Management</span>
        <button className="bg-primary text-primary-foreground px-2 py-0.5 rounded text-[8px]">Add</button>
      </div>

      {/* Mini Filters */}
      <div className="flex gap-1 mb-2">
        {["All", "Active", "Pending"].map((f, i) => (
          <span key={f} className={`px-1.5 py-0.5 rounded text-[8px] ${i === 0 ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>
            {f}
          </span>
        ))}
      </div>

      {/* Mini Table */}
      <div className="bg-secondary/30 rounded overflow-hidden">
        <div className="bg-secondary px-2 py-1 flex gap-4 text-[8px] text-muted-foreground">
          <span className="w-12">ID</span>
          <span className="flex-1">Name</span>
          <span className="w-12">Status</span>
        </div>
        {[
          { id: "001", name: "Alice Johnson", status: "Active" },
          { id: "002", name: "Bob Smith", status: "Pending" },
          { id: "003", name: "Carol White", status: "Active" },
        ].map((row) => (
          <div key={row.id} className="px-2 py-1 flex gap-4 border-t border-border text-[9px]">
            <span className="w-12 text-muted-foreground">{row.id}</span>
            <span className="flex-1">{row.name}</span>
            <span className={`w-12 ${row.status === "Active" ? "text-primary" : "text-muted-foreground"}`}>
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataTableWebMockup;
