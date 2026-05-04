export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Nav */}
      <nav className="border-b border-[#30363d] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-lg tracking-tight">TypingCode</span>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="bg-[#58a6ff] text-[#0d1117] font-semibold px-4 py-2 rounded-md text-sm hover:bg-[#79b8ff] transition-colors"
        >
          Get Started
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          Developer Productivity
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
          Generate typing practice from{" "}
          <span className="text-[#58a6ff]">your own codebase</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-2xl mx-auto mb-10">
          Connect your GitHub repos, extract real code snippets, and build coding muscle memory through interactive typing sessions — with live accuracy and speed feedback.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-3 rounded-md text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Practicing — $9/mo
          </a>
          <a
            href="#how-it-works"
            className="border border-[#30363d] text-[#c9d1d9] font-semibold px-8 py-3 rounded-md text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            See How It Works
          </a>
        </div>

        {/* Fake terminal preview */}
        <div className="mt-16 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left max-w-2xl mx-auto">
          <div className="flex gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
          </div>
          <p className="text-xs text-[#8b949e] mb-2">// src/utils/debounce.ts — your repo</p>
          <p className="font-mono text-sm">
            <span className="text-[#ff7b72]">export function </span>
            <span className="text-[#d2a8ff]">debounce</span>
            <span className="text-[#c9d1d9]">&lt;T extends </span>
            <span className="text-[#79c0ff]">unknown</span>
            <span className="text-[#c9d1d9]">[]{">"}(fn: </span>
            <span className="text-[#79c0ff]">(...args: T) =&gt; void</span>
            <span className="text-[#c9d1d9]">, delay: </span>
            <span className="text-[#79c0ff]">number</span>
            <span className="text-[#c9d1d9]">) {"{"}"..."{"}"}</span>
          </p>
          <div className="mt-4 flex gap-6 text-xs text-[#8b949e]">
            <span>WPM: <span className="text-[#58a6ff] font-bold">72</span></span>
            <span>Accuracy: <span className="text-[#3fb950] font-bold">98%</span></span>
            <span>Streak: <span className="text-[#d29922] font-bold">5 days</span></span>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-12">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Connect GitHub", desc: "Authenticate with GitHub OAuth and select the repos you want to practice from." },
            { step: "02", title: "Pick a Snippet", desc: "We extract meaningful code snippets from your files — functions, classes, and more." },
            { step: "03", title: "Type & Improve", desc: "Practice typing real code with live WPM, accuracy tracking, and daily streaks." }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <span className="text-[#58a6ff] font-mono text-sm font-bold">{step}</span>
              <h3 className="text-white font-semibold text-lg mt-2 mb-2">{title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included. Cancel anytime.</p>
        <div className="inline-block bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm w-full text-left">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-bold text-xl">Pro</span>
            <span className="bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-2 py-1 rounded">POPULAR</span>
          </div>
          <div className="mb-6">
            <span className="text-4xl font-extrabold text-white">$9</span>
            <span className="text-[#8b949e] text-sm">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited GitHub repos",
              "Real-time WPM & accuracy",
              "Daily streak tracking",
              "All languages supported",
              "Progress history & stats"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#3fb950] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] text-[#0d1117] font-bold py-3 rounded-md text-center hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which programming languages are supported?",
              a: "Any language in your GitHub repos — JavaScript, TypeScript, Python, Go, Rust, Java, and more. We extract snippets from any text-based source file."
            },
            {
              q: "Is my code stored on your servers?",
              a: "No. Code snippets are fetched on-demand via the GitHub API and processed in your session. We never store your source code."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-8 text-center text-[#8b949e] text-sm">
        <p>&copy; {new Date().getFullYear()} TypingCode. All rights reserved.</p>
      </footer>
    </main>
  )
}
