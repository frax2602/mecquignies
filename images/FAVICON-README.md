# Création des Favicons pour Mecquignies

Ce guide explique comment créer les favicons à partir du logo de Mecquignies.

## 📋 Fichiers nécessaires

Les favicons suivants doivent être créés et placés dans le dossier `images/` :

- `favicon.ico` - Format ICO (16x16 et 32x32 combinés)
- `favicon-16x16.png` - PNG 16x16 pixels
- `favicon-32x32.png` - PNG 32x32 pixels
- `apple-touch-icon.png` - PNG 180x180 pixels (pour iOS)

## 🛠️ Méthode 1 : Utiliser un service en ligne (Recommandé)

### Option A : RealFaviconGenerator (gratuit et complet)

1. **Visitez** [https://realfavicongenerator.net/](https://realfavicongenerator.net/)
2. **Téléchargez** le logo de Mecquignies (depuis le site officiel ou la mairie)
3. **Cliquez** sur "Select your Favicon image"
4. **Ajustez** les paramètres si nécessaire
5. **Générez** et téléchargez le package
6. **Copiez** les fichiers suivants dans le dossier `images/` :
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`

### Option B : Favicon.io (simple et rapide)

1. **Visitez** [https://favicon.io/](https://favicon.io/)
2. **Choisissez** "PNG to ICO"
3. **Téléchargez** le logo
4. **Générez** et téléchargez les favicons
5. **Copiez** les fichiers dans `images/`

## 🎨 Méthode 2 : Créer manuellement avec un éditeur d'images

### Avec GIMP (gratuit)

1. **Ouvrez** le logo dans GIMP
2. **Redimensionnez** l'image :
   - Image → Échelle et taille de l'image
   - Pour favicon-32x32.png : 32x32 pixels
   - Pour favicon-16x16.png : 16x16 pixels
   - Pour apple-touch-icon.png : 180x180 pixels
3. **Exportez** chaque taille :
   - Fichier → Exporter sous
   - Choisissez le format PNG
   - Nommez selon la taille

### Avec Photoshop

1. **Ouvrez** le logo
2. **Image → Taille de l'image**
3. **Créez** les différentes tailles
4. **Enregistrez** au format PNG

### Créer le .ico

Pour créer le `favicon.ico`, utilisez un convertisseur en ligne :
- [https://convertio.co/png-ico/](https://convertio.co/png-ico/)
- Téléchargez le favicon-32x32.png
- Convertissez en ICO

## 📥 Où trouver le logo de Mecquignies

### Option 1 : Site officiel
1. Visitez [https://mecquignies.fr/](https://mecquignies.fr/)
2. Clic droit sur le logo en haut de la page
3. "Enregistrer l'image sous..."

### Option 2 : Contacter la mairie
- **Email** : mairie@mecquignies.fr
- **Téléphone** : 03 27 63 17 09
- Demandez une version haute résolution du logo officiel

## ✅ Vérification

Une fois les fichiers créés et placés dans `images/`, vérifiez que vous avez :

```
images/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
└── logo-mecquignies.png
```

## 🧪 Tester les favicons

1. **Ouvrez** le site dans votre navigateur
2. **Vérifiez** que le favicon apparaît dans l'onglet
3. **Testez** sur mobile (iOS et Android)
4. **Ajoutez** à l'écran d'accueil sur mobile pour tester l'icône iOS

## 💡 Conseils

- **Format source** : Utilisez une version haute résolution du logo (minimum 512x512px)
- **Fond transparent** : Si possible, utilisez un PNG avec fond transparent
- **Simplicité** : Les favicons sont petits, le logo doit rester lisible
- **Couleurs** : Assurez-vous que les couleurs sont fidèles au logo officiel

## 🔄 Mise à jour

Si le logo change, répétez simplement le processus avec le nouveau logo et remplacez les fichiers existants.



