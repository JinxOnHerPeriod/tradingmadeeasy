// app/contact/page.tsx
import React from "react";

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 mt-12 bg-gray-900 text-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Kontakt</h1>

      <section className="mb-6">
        <p>Du möchtest mit mir in Kontakt treten? Hier findest du alle wichtigen Infos:</p>
        <ul className="mt-4 space-y-2">
          <li><strong>Email:</strong> victoria.schweiger@gmx.at</li>
          <li><strong>Telefon:</strong> +43 123 456 789</li>
          <li><strong>Adresse:</strong> Musterstraße 12, 1010 Wien, Österreich</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Nachricht senden</h2>
        <form className="flex flex-col space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Dein Name"
            className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-emerald-400"
          />
          <input
            type="email"
            placeholder="Deine Email"
            className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-emerald-400"
          />
          <textarea
            placeholder="Deine Nachricht"
            rows={5}
            className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-emerald-400 resize-none"
          />
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded transition-colors"
          >
            Absenden
          </button>
        </form>
      </section>
    </main>
  );
}
