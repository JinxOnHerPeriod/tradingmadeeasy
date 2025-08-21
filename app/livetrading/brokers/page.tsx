export default function BrokersPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-900 leading-loose">
      {/* Titel */}
      <h1 className="text-5xl font-extrabold mb-12 text-center tracking-tight">
        Best Brokers
      </h1>

      {/* Intro */}
      <section className="space-y-6 text-xl">
        <h2 className="text-3xl font-semibold">Best Brokers: Blueberry Markets</h2>
        <p>
          Choosing the right broker is one of the most important decisions you’ll
          make as a trader. And after testing a lot of them, one name keeps
          standing out:{" "}
          <span className="font-bold text-blue-700">Blueberry Markets</span>.
        </p>
      </section>

      {/* Warum Blueberry */}
      <section className="mt-16 space-y-8 text-xl">
        <h3 className="text-3xl font-semibold">✅ Why Blueberry Markets?</h3>

        <div className="space-y-8">
          <div>
            <p className="font-bold">1. Personal Support</p>
            <p>
              If you sign up through my link, you’ll get direct access to a
              personal contact at Blueberry. That means if you ever get stuck —
              you won’t be stuck for long. You’ll actually have a real person to
              speak with, not just a chatbot.
            </p>
          </div>

          <div>
            <p className="font-bold">2. Best-in-Class Customer Service</p>
            <p>
              Fast, friendly, and always helpful. Other brokers make you wait
              days for answers — Blueberry replies quickly and actually solves
              your problems.
            </p>
          </div>

          <div>
            <p className="font-bold">3. Simple and Convenient</p>
            <p>
              The whole process — from opening an account to making your first
              trade — is super smooth and uncomplicated. No endless paperwork.
              No confusing steps. Just easy.
            </p>
          </div>

          <div>
            <p className="font-bold">4. Reliable and Trusted</p>
            <p>
              Blueberry is known for transparency and solid execution. You can
              focus on trading instead of worrying about your broker.
            </p>
          </div>
        </div>
      </section>

      {/* Extra Vorteile */}
      <section className="mt-20 space-y-6 text-xl">
        <h3 className="text-3xl font-semibold">
          🎁 Extra Advantages When You Join Through My Link
        </h3>
        <ul className="list-disc pl-8 space-y-3">
          <li>A personal account manager (your “go-to guy”)</li>
          <li>Priority customer support</li>
          <li>Exclusive guidance if you need help setting things up</li>
        </ul>
      </section>

      {/* Bottom Line */}
      <section className="mt-20 p-10 bg-gray-800 rounded-2xl shadow-md text-center">
        <h3 className="text-3xl font-bold mb-6">👉 Bottom line</h3>
        <p className="text-xl mb-10">
          If you want a broker that’s reliable, beginner-friendly, and has the
          best support team in the industry,{" "}
          <span className="font-bold text-blue-700">Blueberry Markets</span> is
          the way to go. Click the button below and secure your extra perks.
        </p>
        <a
          href="https://portal.blueberrymarkets.com/en/sign-up?referralCode=fj09rvpwq7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl text-2xl font-semibold hover:bg-blue-700 transition"
        >
          🚀 Join Blueberry Markets Now
        </a>
      </section>
    </main>
  );
}
