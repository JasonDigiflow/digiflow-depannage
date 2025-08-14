export default function TestPage() {
  return (
    <div className="min-h-screen bg-dark p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white">Test des styles</h1>
        
        <div className="glass p-6 rounded-glass">
          <h2 className="text-2xl font-semibold text-gradient mb-4">Glass Effect</h2>
          <p className="text-foreground-muted">Ceci est un test de l'effet glass</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-violet p-4 rounded-lg text-white">Violet</div>
          <div className="bg-orange p-4 rounded-lg text-white">Orange</div>
          <div className="bg-dark-muted p-4 rounded-lg text-white">Dark Muted</div>
        </div>

        <button className="px-6 py-3 bg-gradient-to-r from-violet to-orange text-white rounded-lg hover:shadow-glow transition-all">
          Bouton Gradient
        </button>
      </div>
    </div>
  )
}