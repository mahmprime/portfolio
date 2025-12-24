import { useState } from "react";

const FinanceWebMockup = ({ fullPage = false }: { fullPage?: boolean }) => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleGetStarted = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  if (fullPage) {
    return (
      <div className="min-h-full bg-background p-8">
        {/* Success Toast */}
        {showSuccess && (
          <div className="fixed top-8 right-8 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-lg animate-fade-in z-50">
            ✓ Welcome! Account created successfully
          </div>
        )}

        {/* Navigation */}
        <nav className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg" />
            <span className="font-heading font-bold text-xl">FinanceHub</span>
          </div>
          <div className="flex items-center gap-8">
            {["Dashboard", "Transactions", "Analytics", "Settings"].map((tab) => (
              <span
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer transition-colors ${
                  activeTab === tab ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
          <div className="w-10 h-10 rounded-full bg-secondary cursor-pointer hover:ring-2 hover:ring-primary transition-all" />
        </nav>

        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-heading font-bold mb-4">
            Your finances, <span className="text-primary">simplified.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Track spending, manage budgets, and grow your wealth with powerful analytics.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={handleGetStarted}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors active:scale-95"
            >
              Get Started Free
            </button>
            <button className="border border-border px-6 py-3 rounded-xl text-muted-foreground hover:bg-secondary transition-colors active:scale-95">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-5xl mx-auto bg-secondary/30 rounded-2xl p-8 border border-border">
          <div className="grid grid-cols-3 gap-6 mb-8">
            {[
              { label: "Total Balance", value: "$48,592.00", change: "+12.5%" },
              { label: "Monthly Spending", value: "$3,248.00", change: "-8.2%" },
              { label: "Investments", value: "$125,840.00", change: "+24.1%" },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-colors cursor-pointer"
              >
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-2xl font-heading font-bold">{stat.value}</p>
                <span className={`text-sm ${stat.change.startsWith("+") ? "text-primary" : "text-destructive"}`}>
                  {stat.change} this month
                </span>
              </div>
            ))}
          </div>
          
          <div className="bg-background rounded-xl p-6 border border-border">
            <h3 className="font-heading font-bold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { name: "Salary Deposit", amount: "+$8,500.00" },
                { name: "Rent Payment", amount: "-$2,100.00" },
                { name: "Investment Return", amount: "+$342.50" },
              ].map((tx, i) => (
                <div 
                  key={i} 
                  className="flex items-center justify-between py-2 border-b border-border last:border-0 hover:bg-secondary/30 px-2 -mx-2 rounded cursor-pointer transition-colors"
                >
                  <span>{tx.name}</span>
                  <span className={tx.amount.startsWith("+") ? "text-primary" : "text-foreground"}>
                    {tx.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-background p-3 text-[10px]">
      {/* Mini Nav */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-primary rounded" />
          <span className="font-bold">FinanceHub</span>
        </div>
        <div className="w-5 h-5 rounded-full bg-secondary" />
      </div>

      {/* Mini Hero */}
      <div className="text-center mb-4">
        <h1 className="text-sm font-heading font-bold mb-1">
          Your finances, <span className="text-primary">simplified.</span>
        </h1>
        <p className="text-muted-foreground mb-2">Track spending and grow wealth.</p>
        <button className="bg-primary text-primary-foreground px-3 py-1 rounded text-[9px]">
          Get Started
        </button>
      </div>

      {/* Mini Stats */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { label: "Balance", value: "$48,592" },
          { label: "Spending", value: "$3,248" },
          { label: "Invest", value: "$125K" },
        ].map((stat, i) => (
          <div key={i} className="bg-secondary/50 rounded p-2">
            <p className="text-muted-foreground text-[8px]">{stat.label}</p>
            <p className="font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Mini List */}
      <div className="bg-secondary/30 rounded p-2 space-y-1">
        {["Salary +$8,500", "Rent -$2,100", "Return +$342"].map((item, i) => (
          <div key={i} className="text-[9px] text-muted-foreground">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default FinanceWebMockup;
