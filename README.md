# Portfolio Mohammed Khadeir

Un portfolio moderne et professionnel développé avec Astro et déployé sur Vercel.

## 🌐 Site en ligne

Visitez le portfolio : [https://portfolio-mohammed-khadeir.vercel.app](https://portfolio-mohammed-khadeir.vercel.app)

## 📁 Structure du projet

```
/
├── public/
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Skills.astro
│   │   ├── Education.astro
│   │   ├── Projects.astro
│   │   └── Contact.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── data.ts
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── vercel.json
```

## 🛠️ Technologies utilisées

- **Astro** : Framework pour le site statique
- **TypeScript** : Typage fort
- **Vercel** : Déploiement et analytics
- **CSS** : Styles personnalisés avec variables CSS
- **Lucide Icons** : Icônes SVG

## 🚀 Commandes

| Commande              | Action                                           |
| :-------------------- | :----------------------------------------------- |
| `npm install`         | Installe les dépendances                         |
| `npm run dev`         | Démarre le serveur de développement              |
| `npm run build`       | Construit le site pour la production             |
| `npm run preview`     | Prévisualise le build localement                 |

## 📝 Modification du contenu

Toutes les données du portfolio sont centralisées dans le fichier `src/data.ts`. Pour mettre à jour le contenu :

1. Ouvrez `src/data.ts`
2. Modifiez les informations dans l'objet `professionals`
3. Les sections s'adaptent automatiquement selon les données présentes

## 📊 Fonctionnalités

- **Thème sombre/clair** : Basculement automatique avec sauvegarde localStorage
- **Responsive** : Design adaptatif pour mobile, tablette et desktop
- **Animations** : Scroll reveal et transitions fluides
- **IA Assistant** : Chatbot intégré pour naviguer dans le portfolio
- **Export CV** : Génération PDF/Word du CV
- **Formulaire de contact** : Envoi via FormSubmit
- **Analytics** : Suivi des visiteurs avec Vercel Analytics

## 📞 Contact

Mohammed Khadeir  
Email : m,khadeir@esisa.ac.ma  
LinkedIn : [linkedin.com/in/mohammed-khadeir-1a03883a4](https://www.linkedin.com/in/mohammed-khadeir-1a03883a4)  
GitHub : [github.com/mkhadeir-afk](https://github.com/mkhadeir-afk)
