import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Play,
  Heart,
  Download,
  Settings,
  Trash2,
  Plus,
  ChevronRight,
  Sparkles,
  Zap,
  Star,
} from "lucide-react";
import { Button } from "./components/Button";
import "./index.css";

const ButtonDemo = () => {
  const [loading, setLoading] = useState(false);
  const [favorited, setFavorited] = useState(false);

  const handleAsyncAction = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <div className="min-h-screen p-8 text-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
          Nestor Design UI
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Librairie de composants UI moderne avec Tailwind CSS. Découvrez notre
          Button ultra-personnalisable avec animations, glassmorphism et effets
          neon.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section: Variants */}
        <section className="glass p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <Sparkles className="text-yellow-400" />
            Variants de style
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Delete</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="glass" className="text-white">
              Glass
            </Button>
            <Button variant="neon">Neon</Button>
            <Button variant="gradient">Gradient</Button>
            <Button gradient="linear-gradient(45deg, #ff6b6b, #4ecdc4)">
              Custom
            </Button>
          </div>
        </section>

        {/* Section: Tailles */}
        <section className="glass p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6">Tailles</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        </section>

        {/* Section: Formes */}
        <section className="glass p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6">Formes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button shape="default">Default</Button>
            <Button shape="rounded">Rounded</Button>
            <Button shape="pill">Pill</Button>
            <Button shape="square">Square</Button>
            <Button shape="circle" size="icon-lg">
              <Star />
            </Button>
          </div>
        </section>

        {/* Section: Icônes */}
        <section className="glass p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6">Avec icônes</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button leftIcon={Play}>Jouer</Button>
              <Button rightIcon={ChevronRight}>Suivant</Button>
              <Button leftIcon={Download} variant="outline">
                Télécharger
              </Button>
              <Button
                leftIcon={Heart}
                variant={favorited ? "destructive" : "ghost"}
                onClick={() => setFavorited(!favorited)}
              >
                {favorited ? "Aimé" : "Aimer"}
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="icon-sm">
                <Settings size={16} />
              </Button>
              <Button size="icon-md" variant="outline">
                <Plus size={20} />
              </Button>
              <Button size="icon-lg" variant="destructive">
                <Trash2 size={24} />
              </Button>
            </div>
          </div>
        </section>

        {/* Section: Animations */}
        <section className="glass p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <Zap className="text-yellow-400" />
            Animations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Button animation="bounce">Bounce</Button>
            <Button animation="pulse" variant="outline">
              Pulse
            </Button>
            <Button animation="scale">Scale</Button>
            <Button animation="slide" variant="ghost">
              Slide
            </Button>
            <Button animation="glow" variant="neon">
              Glow
            </Button>
            <Button animation="shimmer" variant="gradient">
              Shimmer
            </Button>
          </div>
        </section>

        {/* Section: États */}
        <section className="glass p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6">États</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button>Normal</Button>
              <Button disabled>Désactivé</Button>
              <Button
                loading={loading}
                onClick={handleAsyncAction}
                leftIcon={Download}
              >
                {loading ? "Téléchargement..." : "Télécharger"}
              </Button>
            </div>
          </div>
        </section>

        {/* Section: Effets spéciaux */}
        <section className="glass p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6">Effets spéciaux</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button glass glow>
              Glass + Glow
            </Button>
            <Button variant="glass" animation="glow">
              Glass + Animation
            </Button>
            <Button
              gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              animation="shimmer"
            >
              Gradient + Shimmer
            </Button>
            <Button variant="neon" animation="pulse" leftIcon={Sparkles}>
              Neon + Pulse
            </Button>
          </div>
        </section>

        {/* Section: Playground interactif */}
        <section className="glass p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6">Playground</h2>
          <div className="space-y-6">
            <p className="text-gray-300">
              Testez les effets ripple en cliquant sur les boutons ci-dessous :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Button
                size="lg"
                variant="primary"
                leftIcon={Play}
                className="h-16"
              >
                Cliquez-moi !
              </Button>
              <Button
                size="lg"
                variant="glass"
                rightIcon={ChevronRight}
                animation="glow"
                className="h-16"
              >
                Effet Glass
              </Button>
              <Button
                size="lg"
                variant="gradient"
                animation="shimmer"
                leftIcon={Zap}
                className="h-16"
              >
                Super Effet !
              </Button>
            </div>
          </div>
        </section>

        {/* Code d'exemple */}
        <section className="glass-dark p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6">Installation & Usage</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-green-400">
                Installation
              </h3>
              <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-green-300">
                  npm install @nestor-design/next
                </code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-400">
                Configuration Tailwind
              </h3>
              <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-blue-300">{`// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nestor-design/**/*.{js,ts,jsx,tsx}"
  ],
  presets: [
    require("@nestor-design/next/tailwind-preset")
  ],
}`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-purple-400">
                Utilisation
              </h3>
              <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-purple-300">
                  {`import { Button } from '@nestor-design/next'
import { Play } from 'lucide-react'

<Button 
  variant="primary" 
  size="lg"
  leftIcon={Play}
  animation="scale"
  onClick={() => console.log('Clicked!')}
>
  Mon bouton
</Button>`}
                </code>
              </pre>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center mt-16 text-gray-400">
        <p>
          Made with ❤️ by Nestor Design •
          <Button variant="link" className="text-blue-400 ml-2">
            Documentation
          </Button>
        </p>
      </footer>
    </div>
  );
};

// Montage de l'app
const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<ButtonDemo />);
}
