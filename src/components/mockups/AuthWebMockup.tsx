import { useState } from "react";

const AuthWebMockup = ({ fullPage = false }: { fullPage?: boolean }) => {
  const [email, setEmail] = useState("john@example.com");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSignIn = () => {
    setIsLoading(true);
    setMessage(null);
    setTimeout(() => {
      setIsLoading(false);
      if (password.length >= 6) {
        setMessage({ type: "success", text: "Successfully signed in! Redirecting..." });
      } else {
        setMessage({ type: "error", text: "Password must be at least 6 characters" });
      }
    }, 1000);
  };

  const handleSocialLogin = (provider: string) => {
    setMessage({ type: "success", text: `Connecting to ${provider}...` });
    setTimeout(() => setMessage(null), 2000);
  };

  if (fullPage) {
    return (
      <div className="min-h-full bg-background flex">
        {/* Left side - Branding */}
        <div className="w-1/2 bg-gradient-to-br from-primary/20 to-primary/5 p-12 flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">S</span>
            </div>
            <span className="font-heading font-bold text-2xl">SecureAuth</span>
          </div>
          
          <div>
            <h1 className="text-4xl font-heading font-bold mb-4">
              Enterprise-grade authentication
            </h1>
            <p className="text-lg text-muted-foreground">
              Protect your users with multi-factor authentication, biometrics, and passwordless login.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-secondary border-2 border-background" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">Trusted by 10,000+ companies</span>
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="w-1/2 p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-heading font-bold mb-2">Welcome back</h2>
            <p className="text-muted-foreground mb-8">Enter your credentials to access your account</p>

            {message && (
              <div className={`mb-4 p-3 rounded-lg ${
                message.type === "success" ? "bg-primary/20 text-primary" : "bg-destructive/20 text-destructive"
              }`}>
                {message.text}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-secondary rounded-xl px-4 py-3 border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-secondary rounded-xl px-4 py-3 border border-border focus:border-primary focus:outline-none transition-colors"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <label 
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setRememberMe(!rememberMe)}
                >
                  <div className={`w-4 h-4 border rounded transition-colors ${
                    rememberMe ? "bg-primary border-primary" : "border-border"
                  }`} />
                  <span className="text-sm text-muted-foreground">Remember me</span>
                </label>
                <span 
                  className="text-sm text-primary cursor-pointer hover:underline"
                  onClick={() => setMessage({ type: "success", text: "Password reset link sent!" })}
                >
                  Forgot password?
                </span>
              </div>

              <button 
                onClick={handleSignIn}
                disabled={isLoading}
                className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors active:scale-[0.98] disabled:opacity-70"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </button>

              <div className="text-center">
                <span className="text-sm text-muted-foreground">or continue with</span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {["Google", "GitHub", "Apple"].map((provider) => (
                  <button 
                    key={provider} 
                    onClick={() => handleSocialLogin(provider)}
                    className="py-2 rounded-xl border border-border text-sm hover:bg-secondary transition-colors active:scale-95"
                  >
                    {provider}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-background flex text-[10px]">
      {/* Left */}
      <div className="w-1/2 bg-gradient-to-br from-primary/20 to-primary/5 p-3 flex flex-col justify-between">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-primary rounded flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-[8px]">S</span>
          </div>
          <span className="font-bold">SecureAuth</span>
        </div>
        <p className="font-heading font-bold text-xs">Enterprise-grade authentication</p>
        <div className="flex -space-x-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-4 h-4 rounded-full bg-secondary border border-background" />
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="w-1/2 p-3">
        <p className="font-bold mb-2">Welcome back</p>
        <div className="space-y-2">
          <div className="bg-secondary rounded px-2 py-1.5 text-[9px] text-muted-foreground">
            john@example.com
          </div>
          <div className="bg-secondary rounded px-2 py-1.5 text-[9px] text-muted-foreground">
            ••••••••••
          </div>
          <button className="w-full bg-primary text-primary-foreground py-1.5 rounded text-[9px]">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthWebMockup;
