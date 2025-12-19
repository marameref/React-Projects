import { ExternalLink, Github, Cpu, Server } from 'lucide-react'; // Optional: Install lucide-react for icons

export default function Projects() {
  const projects = [
    {
      title: "AI Inference Optimizer",
      description: "A Python/Docker setup to reduce latency for LLM deployments in production environments.",
      tech: ["Python", "Docker", "ONNX", "FastAPI"],
      category: "AI",
      icon: <Cpu className="text-emerald-400" />
    },
    {
      title: "Kubernetes CI/CD Pipeline",
      description: "Automated GitOps workflow using GitHub Actions and ArgoCD for zero-downtime deployments.",
      tech: ["Kubernetes", "GitHub Actions", "Terraform"],
      category: "DevOps",
      icon: <Server className="text-blue-400" />
    }
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-2 font-mono">/projects_</h1>
      <p className="text-slate-400 mb-12">Showcasing the intersection of AI intelligence and robust infrastructure.</p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div key={p.title} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-slate-800 rounded-lg">{p.icon}</div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">{p.category}</div>
            </div>
            
            <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition">{p.title}</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">{p.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tech.map(t => (
                <span key={t} className="text-[10px] font-mono bg-slate-800 px-2 py-1 rounded-md text-slate-300">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300">
                <Github size={16} /> Source
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}