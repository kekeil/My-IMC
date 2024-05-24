export function calculIMC(taille, poids) {
    if (taille > 0 && poids > 0) {
        return poids / (taille * taille);
    }
    return 0; // ou une autre valeur ou message d'erreur approprié
}
