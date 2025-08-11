// app/disclaimer/page.tsx
import React from "react";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-black text-gray-100">
      <div className="mx-auto max-w-4xl bg-gradient-to-b from-[#0b0b0b]/80 to-[#0b0b0b]/60 border border-yellow-900/40 rounded-2xl p-8 shadow-xl">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-400">
            Disclaimer
          </h1>
          <p className="mt-4 text-sm text-gray-300">
            Important information — please read carefully before using this website.
          </p>
        </header>

        <div className="space-y-6 text-gray-200 leading-relaxed">
          <p>
            The content provided on this website is for <strong>general
            informational and educational purposes only</strong>. It does
            <strong> not</strong> constitute financial, investment, tax, legal,
            or any other form of professional advice and should not be relied
            upon as such. In particular, it does <strong>not</strong> constitute
            an offer, solicitation, or recommendation to buy or sell any
            financial instruments, securities, cryptocurrencies, or other
            investment products.
          </p>

          <p>
            I am <strong>not a licensed financial or investment advisor</strong>{" "}
            as recognized by any national or international financial regulatory
            authority. All information shared reflects solely my personal
            opinions, experiences, and views, and is provided{" "}
            <strong>without any guarantee</strong>.
          </p>

          <p>
            While every effort has been made to ensure the accuracy,
            completeness, and timeliness of the information provided, I{" "}
            <strong>make no warranties or representations</strong>, express or
            implied, regarding its reliability or suitability. I expressly
            disclaim any liability for any direct, indirect, incidental,
            consequential, or special damages arising from or in any way
            connected with the use or inability to use the information
            provided, <strong>unless caused by proven willful misconduct or
            gross negligence</strong>.
          </p>

          <p>
            Trading and investing in financial markets involves{" "}
            <strong>significant risk</strong>, including the possible{" "}
            <strong>loss of all invested capital</strong>. Past performance,
            strategies, or projections are <strong>not indicative</strong> of
            future results. You should never make any investment decisions based
            solely on the information provided here.
          </p>

          <p>
            Before engaging in any trading or investment activity, you should
            seek advice from an <strong>independent, qualified professional</strong>{" "}
            (e.g., a licensed financial advisor). Your use of this website is{" "}
            <strong>entirely at your own risk</strong>. By accessing and using
            this website, you expressly agree to this disclaimer in full.
          </p>
        </div>

        <hr className="my-6 border-yellow-900/30" />

        <footer className="text-xs text-gray-500">Last updated: August 2025</footer>
      </div>
    </main>
  );
}
