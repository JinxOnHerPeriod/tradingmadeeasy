// app/plattforms/page.tsx
import React from "react";

export default function PlattformsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 leading-relaxed text-gray-900">
      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-10 text-center">
        MetaTrader 4 – The Classic Trading Platform
      </h1>

      {/* Intro */}
      <p className="text-xl mb-8">
        When you start trading, you’ll see all kinds of platforms being
        advertised. Some of them look super shiny, some are crazy expensive…
        but here’s the truth:
      </p>

      <ul className="text-xl space-y-4 mb-12">
        <li>👉 You don’t need to spend money on fancy platforms.</li>
        <li>
          👉 <strong>MetaTrader 4 (MT4)</strong> is still one of the best out
          there — and it’s completely free.
        </li>
      </ul>

      {/* Why MT4 is so good */}
      <h2 className="text-3xl font-bold mb-6">✅ Why MetaTrader 4 is So Good</h2>

      <ol className="list-decimal list-inside text-xl space-y-6 mb-12">
        <li>
          <strong>Simple & Beginner-Friendly</strong> <br />
          You don’t need to be a tech genius to use MT4. It’s clean, easy to
          navigate, and does exactly what you need without overcomplicating
          things.
        </li>
        <li>
          <strong>The Industry Standard</strong> <br />
          MT4 has been around for years, and millions of traders worldwide still
          use it. That means tons of tutorials, guides, and indicators available
          online — all free.
        </li>
        <li>
          <strong>Everything You Need to Trade</strong> <br />
          Charts, technical analysis tools, one-click trading, custom
          indicators, expert advisors… MT4 gives you everything you need to
          trade effectively.
        </li>
        <li>
          <strong>Works on Any Device</strong> <br />
          Desktop, laptop, mobile, tablet — you can check your trades anywhere.
        </li>
        <li>
          <strong>Free Forever</strong> <br />
          Unlike platforms like TradingView (where advanced features cost
          money), MT4 is free through your broker. No hidden fees, no
          subscriptions.
        </li>
      </ol>

      {/* TradingView Comparison */}
      <h2 className="text-3xl font-bold mb-6">⚠️ But Isn’t TradingView Better?</h2>
      <p className="text-xl mb-8">
        TradingView looks nice, sure. It has a slick interface and social
        features. But for actual order execution and managing trades, you don’t
        need it. <br />
        <br />
        MT4 is faster, lighter, and doesn’t cost you a cent.
      </p>

      {/* Bottom line */}
      <section className="mt-20 p-10 bg-gray-50 rounded-2xl shadow-md text-center text-gray-900">
        <h3 className="text-3xl font-bold mb-6">👉 Bottom line</h3>
        <p className="text-xl mb-10">
          Don’t get distracted by “flashy” platforms.{" "}
          <span className="font-bold text-blue-700">MetaTrader 4</span> has
          everything you need to succeed as a trader — and the fact that it’s
          free makes it unbeatable.
        </p>

        <p className="text-lg mb-10">
          If you need help setting everything up and getting used to the
          platform: check out my YouTube video below 👇
        </p>

        {/* YouTube Embed */}
        <div className="aspect-w-16 aspect-h-9 max-w-3xl mx-auto">
          <iframe
            className="rounded-xl shadow-lg w-full h-96"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="How to Set Up MetaTrader 4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
}
