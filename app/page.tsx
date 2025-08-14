"use client";

export default function HomePage() {
  return (
    <main
      style={{
        padding: "3rem 1.5rem",
        maxWidth: "700px",
        margin: "0 auto",
        textAlign: "center",
        color: "#e0e0e0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "800",
          lineHeight: "1.2",
          color: "transparent",
          background: "linear-gradient(180deg, #ffbf00ff, #ffffffff)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        Trading doesn't have to be hard
      </h1>

      <p
        style={{
          fontSize: "1.5rem",
          marginTop: "5rem",
          marginBottom: "3rem", // Abstand hinzugefügt
          opacity: 0.8,
        }}
      >
        I’m here to help.
      </p>

      {/* Big downward arrow */}
      <div
        style={{
          fontSize: "8rem",
          margin: "2rem 0",
          color: "#ffc800ff",
          animation: "bounce 2s infinite",
        }}
      >
        ↓
      </div>

      <p
        style={{
          fontSize: "1.25rem",
          maxWidth: "600px",
          margin: "0 auto 2rem", // mehr Abstand nach unten
          lineHeight: "1.6",
          opacity: 0.85,
        }}
      >
        My name is Victoria and I am here to help you becoming profitable in
        trading.
      </p>

      <p
        style={{
          fontSize: "1.25rem",
          maxWidth: "600px",
          margin: "0 auto 2rem", // mehr Abstand
          lineHeight: "1.6",
          opacity: 0.85,
        }}
      >
        On this website you will find everything you need to get started with
        trading — and how to maintain success. This is everything I’ve learned,
        structured for all levels: new, beginner, and advanced traders.
      </p>

      {/* Sections overview */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {[
          {
            title: "New to Trading? 🚀",
            desc: "Start with the basics: terminology, tools, and mindset to get comfortable.",
          },
          {
            title: "Beginner 📈",
            desc: "Learn strategies, risk management, and technical analysis fundamentals.",
          },
          {
            title: "Advanced ⚡",
            desc: "Master complex tactics, psychology, and build a consistent edge.",
          },
        ].map(({ title, desc }) => (
          <section
            key={title}
            style={{
              backgroundColor: "#1f2937",
              borderRadius: "12px",
              padding: "1.5rem",
              flex: "1 1 200px",
              boxShadow: "0 4px 10px rgb(6 182 212 / 0.3)",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                marginBottom: "0.75rem",
                color: "#06b6d4",
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.4",
                color: "#d1d5db",
              }}
            >
              {desc}
            </p>
          </section>
        ))}
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(10px);
          }
          60% {
            transform: translateY(5px);
          }
        }
      `}</style>
    </main>
  );
}
