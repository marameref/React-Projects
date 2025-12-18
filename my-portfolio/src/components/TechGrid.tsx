export default function TechGrid() {
  const skills = {
    DevOps: ["Kubernetes", "Docker", "GitHub Actions", "Terraform"],
    AI: ["LangChain", "OpenAI API", "HuggingFace", "Vector DBs"],
    Workflow: ["Vibe Coding", "TypeScript", "Next.js", "Technical Writing"]
  };

  return (
    <section className="grid md:grid-cols-3 gap-8 p-12 bg-slate-900 rounded-3xl">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-blue-400 font-mono mb-4 border-b border-slate-800 pb-2">{category}</h3>
          <ul className="space-y-2">
            {items.map(item => <li key={item} className="text-slate-400">▹ {item}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
