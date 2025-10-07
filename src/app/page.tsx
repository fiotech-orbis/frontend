import { auth } from "@/auth";
import Login from "@/components/login";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="glass mx-auto max-w-7xl flex items-center justify-between rounded-xl mt-4 px-5 py-3">
          <div className="text-white/90 font-semibold tracking-tight">
            Fiotech Orbis
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a className="hover:text-white transition-colors" href="#docs">
              Docs
            </a>
            <a className="hover:text-white transition-colors" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-white transition-colors" href="#use-cases">
              Use Cases
            </a>
            <a className="hover:text-white transition-colors" href="#dashboard">
              Dashboard
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Login className="btn-outline glow-hover rounded-lg px-4 py-2 text-sm" />
            {!session?.user && (
              <a
                className="btn-primary glow-hover rounded-lg px-4 py-2 text-sm"
                href="#register"
              >
                Register
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="particles" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Fiotech Orbis - The All-in-One Web3 API Platform
          </h1>
          <p className="mt-4 text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
            Connect, Stream, and Build on any blockchain with powerful developer
            APIs.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              className="btn-primary glow-hover rounded-lg px-6 py-3 text-sm"
              href="#get-started"
            >
              Get Started
            </a>
            <a
              className="btn-outline glow-hover rounded-lg px-6 py-3 text-sm"
              href="#docs"
            >
              View Docs
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-semibold">
            What is Fiotech Orbis?
          </h2>
          <p className="mt-3 text-white/70 max-w-3xl">
            Fiotech Orbis is a Web3 API platform that lets developers access
            blockchain data quickly, securely, and at scale.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: "⚙️",
                title: "Unified API",
                desc: "Access multiple blockchains with a single endpoint.",
              },
              {
                icon: "🔔",
                title: "Realtime Streaming",
                desc: "Get live blockchain events via WebSocket or Webhook.",
              },
              {
                icon: "🧠",
                title: "Smart Data Layer",
                desc: "Integrated caching, indexing, and query optimization.",
              },
              {
                icon: "🪪",
                title: "Secure Access",
                desc: "Each API key is managed and scoped via Fiotech Account.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="glass rounded-xl p-5 hover:translate-y-[-2px] transition-transform"
              >
                <div className="text-2xl">{f.icon}</div>
                <div className="mt-2 font-medium">{f.title}</div>
                <div className="text-white/70 text-sm mt-1">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="relative py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Why Choose Fiotech Orbis?
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: "⚡",
                title: "High Speed & Stability",
                desc: "Microservices architecture for low-latency performance.",
              },
              {
                icon: "🧩",
                title: "Easy Integration",
                desc: "Connect and call blockchain APIs with just 3 lines of code.",
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                desc: "OAuth2 & API key-based authentication for safety and control.",
              },
              {
                icon: "🧱",
                title: "Multi-chain Support",
                desc: "Supports Ethereum, Base, BNB Chain, and more.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-xl p-5 border border-white/10 bg-white/5"
              >
                <div className="text-2xl">{b.icon}</div>
                <div className="mt-2 font-medium">{b.title}</div>
                <div className="text-white/70 text-sm mt-1">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="relative py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Who Should Use Orbis?
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "DApp Developers",
                desc: "Build Web3 apps that interact directly with smart contracts.",
              },
              {
                title: "Fintech & Wallet Apps",
                desc: "Track balances, transactions, and prices in real time.",
              },
              {
                title: "Exchanges",
                desc: "Fetch block data, trading events, and analytics easily.",
              },
              {
                title: "Blockchain Analytics",
                desc: "Use Webhooks and Streams for on-chain behavior insights.",
              },
            ].map((u) => (
              <div
                key={u.title}
                className="rounded-xl p-5 border border-white/10 bg-white/5"
              >
                <div className="font-medium">{u.title}</div>
                <div className="text-white/70 text-sm mt-1">{u.desc}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-white/70 text-sm">
            Example: Listen to ERC-20 Transfer events with just one line of
            code.
          </p>
        </div>
      </section>

      {/* Developer Demo */}
      <section id="developer-demo" className="relative py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Simple API Example
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <pre className="rounded-xl p-4 bg-black/60 border border-white/10 overflow-auto text-xs md:text-sm">
              <code>{`curl -X POST https://api-orbis.fiotech.vn/v1/rpc -H 'x-api-key: <YOUR_KEY>' -d '{"method":"eth_getBalance","params":["0x1234...","latest"]}'`}</code>
            </pre>
            <pre className="rounded-xl p-4 bg-black/60 border border-white/10 overflow-auto text-xs md:text-sm">
              <code>{`const client = new OrbisClient({ apiKey: 'your_key' });\nconst balance = await client.eth.getBalance('0x1234...');`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Company */}
      <section id="company" className="relative py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-semibold">About Fiotech</h2>
          <p className="mt-3 text-white/70 max-w-3xl">
            Fiotech Orbis - Building the future of decentralized infrastructure.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="rounded-xl p-4 border border-white/10 bg-white/5">
              <div className="text-white/60">Email</div>
              <a className="hover:underline" href="mailto:contact@fiotech.vn">
                contact@fiotech.vn
              </a>
            </div>
            <div className="rounded-xl p-4 border border-white/10 bg-white/5">
              <div className="text-white/60">Website</div>
              <a
                className="hover:underline"
                href="https://orbis.fiotech.vn"
                target="_blank"
                rel="noreferrer"
              >
                orbis.fiotech.vn
              </a>
            </div>
            <div className="rounded-xl p-4 border border-white/10 bg-white/5">
              <div className="text-white/60">Location</div>
              <div>Ho Chi Minh City, Vietnam</div>
            </div>
            <div className="rounded-xl p-4 border border-white/10 bg-white/5">
              <div className="text-white/60">Social</div>
              <div className="flex gap-3 mt-1">
                {["GitHub", "X (Twitter)", "Discord", "LinkedIn"].map((s) => (
                  <a
                    key={s}
                    className="btn-outline rounded-md px-2 py-1 glow-hover"
                    href="#"
                    aria-label={s}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section id="cta" className="relative py-16 px-6">
        <div className="mx-auto max-w-5xl text-center glass rounded-2xl p-8">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Ready to build your next Web3 app?
          </h3>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              className="btn-primary glow-hover rounded-lg px-6 py-3 text-sm"
              href="#register"
            >
              Register now
            </a>
            <a
              className="btn-outline glow-hover rounded-lg px-6 py-3 text-sm"
              href="#docs"
            >
              View Docs
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 px-6 py-8 text-sm text-white/60">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© 2025 Fiotech Orbis. All rights reserved.</div>
          <div className="flex gap-4">
            {["Terms", "Privacy", "Status", "Docs"].map((l) => (
              <a key={l} className="hover:text-white" href="#">
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
