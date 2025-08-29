# 🚀 Nestor Design UI

Une librairie moderne de composants UI pour React/Next.js avec Tailwind CSS.

## ✨ Caractéristiques

- 🎨 **Design moderne** avec glassmorphism et effets neon
- 🔧 **Ultra-personnalisable** avec TypeScript strict
- ⚡ **Animations fluides** et interactions riches
- 🎯 **SOLID principles** pour une architecture maintenable
- 📱 **Responsive** et accessible
- 🌈 **Thème personnalisable** avec preset Tailwind
- 🔍 **Zero-config** - prêt à l'emploi

## 📦 Installation

```bash
npm install @nestor-design/next
# ou
yarn add @nestor-design/next
# ou  
pnpm add @nestor-design/next
```

## ⚙️ Configuration

### 1. Configuration Tailwind

Ajoutez le preset Nestor Design à votre `tailwind.config.js` :

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nestor-design/**/*.{js,ts,jsx,tsx}"
  ],
  presets: [
    require("@nestor-design/next/tailwind-preset")
  ],
  theme: {
    extend: {
      // Vos customisations ici
    },
  },
}
```

### 2. Import des styles (optionnel)

Si vous voulez les styles de base :

```css
/* Dans votre CSS principal */
@import '@nestor-design/next/styles';
```

## 🎯 Utilisation

### Button - Composant ultra-flexible

```tsx
import { Button } from '@nestor-design/next'
import { Play, Heart, Download } from 'lucide-react'

// Bouton basique
<Button>Cliquer</Button>

// Avec variant et taille
<Button variant="primary" size="lg">
  Grand bouton
</Button>

// Avec icône
<Button leftIcon={Play} variant="outline">
  Jouer
</Button>

// Avec animation et effet
<Button 
  variant="glass" 
  animation="glow"
  leftIcon={Heart}
  onClick={() => console.log('Liked!')}
>
  J'aime
</Button>

// Loading state
<Button loading loadingText="Chargement...">
  Télécharger
</Button>
```

## 📚 API du Button

### Props principales

| Prop | Type | Défaut | Description |
|------|------|---------|-------------|
| `variant` | `ButtonVariant` | `"primary"` | Style du bouton |
| `size` | `ButtonSize` | `"md"` | Taille du bouton |
| `shape` | `ButtonShape` | `"default"` | Forme du bouton |
| `animation` | `ButtonAnimation` | `"scale"` | Animation au survol |
| `loading` | `boolean` | `false` | État de chargement |
| `disabled` | `boolean` | `false` | Bouton désactivé |

### Variants disponibles

- `primary` - Bouton principal bleu
- `secondary` - Bouton secondaire gris
- `outline` - Bouton avec bordure
- `ghost` - Bouton transparent
- `link` - Style de lien
- `destructive` - Pour actions dangereuses
- `success` - Pour actions positives
- `warning` - Pour avertissements
- `glass` - Effet glassmorphism
- `neon` - Effet néon lumineux
- `gradient` - Dégradé coloré

### Tailles disponibles

- `xs`, `sm`, `md`, `lg`, `xl` - Tailles normales
- `icon-sm`, `icon-md`, `icon-lg` - Pour boutons icône seule

### Formes disponibles

- `default` - Coins arrondis standard
- `rounded` - Plus arrondi
- `pill` - Complètement arrondi
- `square` - Coins droits
- `circle` - Cercle parfait

### Animations disponibles

- `none` - Pas d'animation
- `bounce` - Rebond subtil
- `pulse` - Pulsation
- `scale` - Agrandissement
- `slide` - Glissement vers le haut
- `glow` - Effet lumineux
- `shimmer` - Effet de brillance

### Icônes

```tsx
// Icône à gauche
<Button leftIcon={Play}>Jouer</Button>

// Icône à droite  
<Button rightIcon={ChevronRight}>Suivant</Button>

// Icône seule
<Button size="icon-md">
  <Settings />
</Button>

// Configuration avancée d'icône
<Button 
  icon={{ 
    icon: Heart, 
    position: 'left', 
    size: 20,
    className: 'text-red-500' 
  }}
>
  Configuration avancée
</Button>
```

### Effets visuels avancés

```tsx
// Glassmorphism
<Button variant="glass">Glass</Button>

// Effet néon
<Button variant="neon" glow>Neon</Button>

// Dégradé personnalisé
<Button gradient="linear-gradient(45deg, #ff6b6b, #4ecdc4)">
  Dégradé custom
</Button>

// Combinaison d'effets
<Button 
  glass 
  glow 
  animation="shimmer"
  shadow
>
  Tous les effets
</Button>
```

## 🎨 Personnalisation

### Couleurs de marque

Le preset inclut une palette complète `nestor` que vous pouvez personnaliser :

```javascript
// tailwind.config.js
module.exports = {
  presets: [require("@nestor-design/next/tailwind-preset")],
  theme: {
    extend: {
      colors: {
        nestor: {
          // Redéfinissez les couleurs Nestor
          600: '#your-brand-color',
        }
      }
    }
  }
}
```

### Override de styles

```tsx
// Avec className
<Button className="bg-purple-600 hover:bg-purple-700">
  Style personnalisé
</Button>

// Avec style inline
<Button 
  style={{ 
    background: 'linear-gradient(45deg, #667eea, #764ba2)' 
  }}
>
  Style inline
</Button>
```

## 🔄 Roadmap

### Composants à venir

- [ ] **Input** - Champs de saisie avec validation
- [ ] **DataTable** - Tableau avec tri, filtre, pagination
- [ ] **Modal** - Modales avec animations
- [ ] **Dropdown** - Menus déroulants
- [ ] **Pagination** - Navigation par pages
- [ ] **Card** - Cartes de contenu
- [ ] **Toast** - Notifications
- [ ] **Tabs** - Onglets interactifs
- [ ] **Form** - Gestion complète de formulaires
- [ ] **Carousel** - Carrousel d'images/contenu

### Améliorations prévues

- [ ] **Storybook** - Documentation interactive
- [ ] **Tests** - Jest + Testing Library
- [ ] **Dark mode** - Support natif du mode sombre
- [ ] **A11y** - Améliorations d'accessibilité
- [ ] **SSR** - Optimisation Next.js
- [ ] **Bundle size** - Optimisation du poids

## 🛠️ Développement

### Prérequis

- Node.js 18+
- npm/yarn/pnpm

### Setup local

```bash
# Cloner le repo
git clone https://github.com/YOUR_USERNAME/nestor-design-ui.git
cd nestor-design-ui

# Installer les dépendances
npm install

# Développement avec hot reload
npm run dev

# Build de la librairie
npm run build

# Test du build
npm run build:watch
```

### Structure du projet

```
src/
├── components/           # Composants UI
│   ├── Button/          # Dossier par composant
│   │   ├── Button.tsx   # Composant principal
│   │   ├── Button.types.ts  # Types TypeScript
│   │   └── index.ts     # Exports
│   └── index.ts         # Index général
├── utils/               # Utilitaires
│   └── cn.ts           # Fusion de classes CSS
└── index.ts            # Point d'entrée principal
```

### Scripts disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build production avec tsup
npm run build:watch  # Build en mode watch
npm run lint         # Vérification TypeScript
npm run preview      # Prévisualisation du build
```

## 🧪 Tests

### Tester localement

```bash
# Dans votre projet de test
npm link @nestor-design/next

# Ou avec un tarball
npm pack
npm install ./nestor-design-next-1.0.0.tgz
```

### Dans votre app Next.js

```tsx
// pages/_app.tsx ou layout.tsx
import '@/styles/globals.css'

// components/TestButton.tsx  
import { Button } from '@nestor-design/next'

export default function TestButton() {
  return (
    <div className="p-8">
      <Button variant="primary" size="lg">
        Test Button
      </Button>
    </div>
  )
}
```

## 📖 Exemples complets

### Bouton de téléchargement avec état

```tsx
import { useState } from 'react'
import { Button } from '@nestor-design/next'
import { Download, Check } from 'lucide-react'

function DownloadButton() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  
  const handleDownload = async () => {
    setStatus('loading')
    try {
      // Simulation download
      await new Promise(resolve => setTimeout(resolve, 2000))
      setStatus('success')
      setTimeout(() => setStatus('idle'), 2000)
    } catch (error) {
      setStatus('idle')
    }
  }
  
  return (
    <Button
      variant={status === 'success' ? 'success' : 'primary'}
      loading={status === 'loading'}
      leftIcon={status === 'success' ? Check : Download}
      onClick={handleDownload}
      disabled={status !== 'idle'}
    >
      {status === 'loading' && 'Téléchargement...'}
      {status === 'success' && 'Téléchargé !'}
      {status === 'idle' && 'Télécharger'}
    </Button>
  )
}
```

### Barre d'actions avec différents styles

```tsx
import { Button } from '@nestor-design/next'
import { 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Heart,
  Settings 
} from 'lucide-react'

function MediaControls() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)
  
  return (
    <div className="flex items-center gap-2 p-4 glass rounded-xl">
      <Button 
        size="icon-md" 
        variant="ghost"
        animation="scale"
      >
        <SkipBack size={20} />
      </Button>
      
      <Button
        size="icon-lg"
        variant={isPlaying ? "outline" : "primary"}
        shape="circle"
        animation="bounce"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </Button>
      
      <Button 
        size="icon-md" 
        variant="ghost"
        animation="scale"
      >
        <SkipForward size={20} />
      </Button>
      
      <div className="w-px h-8 bg-white/20 mx-2" />
      
      <Button
        size="icon-md"
        variant={isFavorited ? "destructive" : "ghost"}
        animation="pulse"
        onClick={() => setIsFavorited(!isFavorited)}
      >
        <Heart 
          size={20} 
          className={isFavorited ? "fill-current" : ""} 
        />
      </Button>
      
      <Button size="icon-md" variant="ghost">
        <Settings size={20} />
      </Button>
    </div>
  )
}
```

## 🎨 Guide de style

### Bonnes pratiques

✅ **À faire :**
- Utiliser les variants prédéfinis quand possible
- Préférer `leftIcon`/`rightIcon` à `icon` pour la clarté
- Utiliser `loading` pour les actions asynchrones
- Ajouter des `aria-label` pour l'accessibilité
- Combiner animations et variants avec parcimonie

❌ **À éviter :**
- Surcharger de props inutiles
- Mélanger trop d'effets visuels
- Oublier les états disabled/loading
- Ignorer l'accessibilité

### Design tokens

Les couleurs et espacements suivent une échelle cohérente :

```css
/* Couleurs principales */
--nestor-50: #f0f9ff;    /* Très clair */
--nestor-500: #0ea5e9;   /* Base */  
--nestor-900: #0c4a6e;   /* Très foncé */

/* Espacements */
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 0.75rem;   /* 12px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.5rem;    /* 24px */
--spacing-xl: 2rem;      /* 32px */
```

## 🤝 Contribution

Les contributions sont les bienvenues ! 

### Process de contribution

1. **Fork** le projet
2. **Créer** une branche feature (`git checkout -b feature/amazing-feature`)
3. **Commit** vos changements (`git commit -m 'Add amazing feature'`)
4. **Push** vers la branche (`git push origin feature/amazing-feature`)
5. **Ouvrir** une Pull Request

### Guidelines

- Respecter les conventions TypeScript
- Ajouter des tests pour les nouvelles features
- Documenter les nouvelles props/composants
- Suivre les principes SOLID
- Maintenir la compatibilité backward

## 📄 License

MIT © [Nestor Design](https://github.com/etan-nestor/nestor-design-ui)

---

## 🚀 Quick Start

```bash
# 1. Installation
npm install @nestor-design/next

# 2. Configuration Tailwind
echo 'module.exports = { 
  presets: [require("@nestor-design/next/tailwind-preset")] 
}' > tailwind.config.js

# 3. Utilisation
echo 'import { Button } from "@nestor-design/next"
<Button variant="primary">Hello World!</Button>' > components/MyButton.tsx
```

**Et voilà ! 🎉** Votre premier bouton Nestor Design est prêt !

---

*Made with ❤️ by the Nestor Design Team*