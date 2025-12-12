// Script pour charger dynamiquement les actualités depuis actualites.json

// Fonction pour charger et afficher la dernière actualité sur la page d'accueil
async function chargerDerniereActualite() {
    try {
        const response = await fetch('actualites.json');
        const data = await response.json();
        
        // Trier les actualités par date (plus récente en premier)
        const actualites = data.actualites.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Prendre la première (la plus récente)
        const derniere = actualites[0];
        
        // Mettre à jour le contenu HTML
        const container = document.getElementById('derniere-actualite-container');
        if (container && derniere) {
            container.innerHTML = `
                <div class="actualite-badge">📰 Dernière actualité</div>
                <h2 class="section-title">${derniere.titre}</h2>
                <p class="actualite-date">🗓️ ${derniere.dateAffichage}</p>
                ${derniere.contenu.split('\n\n').map(paragraphe => 
                    `<p class="actualite-excerpt">${paragraphe.replace(/samedi \d+ \w+ \d+ à \d+h/g, match => `<strong>${match}</strong>`)}</p>`
                ).join('')}
                <a href="actualites.html" class="btn btn-primary">📰 Voir toutes les actualités</a>
            `;
        }
    } catch (error) {
        console.error('Erreur lors du chargement de la dernière actualité:', error);
    }
}

// Fonction pour charger et afficher toutes les actualités sur la page actualites.html
async function chargerToutesActualites() {
    try {
        const response = await fetch('actualites.json');
        const data = await response.json();
        
        // Trier les actualités par date (plus récente en premier)
        const actualites = data.actualites.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Mettre à jour le contenu HTML
        const container = document.getElementById('toutes-actualites-container');
        if (container && actualites.length > 0) {
            container.innerHTML = actualites.map(actu => `
                <article class="actualite-card">
                    <div class="actualite-header">
                        <span class="actualite-categorie">${actu.categorie}</span>
                        <span class="actualite-date-card">🗓️ ${actu.dateAffichage}</span>
                    </div>
                    <h3>${actu.titre}</h3>
                    <p class="actualite-extrait">${actu.extrait}</p>
                    ${actu.contenu !== actu.extrait ? `
                        <div class="actualite-contenu-complet" id="contenu-${actu.id}" style="display: none;">
                            ${actu.contenu.split('\n\n').map(paragraphe => 
                                `<p>${paragraphe}</p>`
                            ).join('')}
                        </div>
                        <button class="btn-lire-plus" onclick="toggleActualite(${actu.id})">
                            <span class="btn-text" id="btn-text-${actu.id}">Lire la suite</span>
                            <span class="btn-icon" id="btn-icon-${actu.id}">▼</span>
                        </button>
                    ` : ''}
                </article>
            `).join('');
        } else if (container) {
            container.innerHTML = '<p class="no-actualites">Aucune actualité pour le moment.</p>';
        }
    } catch (error) {
        console.error('Erreur lors du chargement des actualités:', error);
        const container = document.getElementById('toutes-actualites-container');
        if (container) {
            container.innerHTML = '<p class="error-actualites">Erreur lors du chargement des actualités.</p>';
        }
    }
}

// Fonction pour afficher/masquer le contenu complet d'une actualité
function toggleActualite(id) {
    const contenu = document.getElementById(`contenu-${id}`);
    const btnText = document.getElementById(`btn-text-${id}`);
    const btnIcon = document.getElementById(`btn-icon-${id}`);
    
    if (contenu.style.display === 'none') {
        contenu.style.display = 'block';
        btnText.textContent = 'Réduire';
        btnIcon.textContent = '▲';
    } else {
        contenu.style.display = 'none';
        btnText.textContent = 'Lire la suite';
        btnIcon.textContent = '▼';
    }
}

// Charger les actualités au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Si on est sur la page d'accueil
    if (document.getElementById('derniere-actualite-container')) {
        chargerDerniereActualite();
    }
    
    // Si on est sur la page actualités
    if (document.getElementById('toutes-actualites-container')) {
        chargerToutesActualites();
    }
});

