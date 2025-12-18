export default function Writing() {
  const articles = [
    { title: "Optimizing CI/CD for LLM Inference", date: "2024", slug: "llm-ops" },
    { title: "The Philosophy of Vibe Coding", date: "2023", slug: "vibe-coding" },
  ];

  return (
    <main className="max-w-4xl mx-auto p-12">
      <h2 className="text-3xl font-bold mb-12 border-l-4 border-blue-600 pl-4">Technical Publications</h2>
      <div className="space-y-8">
        {articles.map(article => (
          <div key={article.slug} className="group cursor-pointer">
            <span className="text-sm text-slate-500 font-mono">{article.date}</span>
            <h3 className="text-2xl font-semibold group-hover:text-blue-500 transition">{article.title}</h3>
            <p className="text-slate-400 mt-2">A technical breakdown of infrastructure scaling for modern AI agents...</p>
          </div>
        ))}
      </div>
    </main>
  );
}