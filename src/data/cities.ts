export interface City {
  slug: string   // URL: /zones-intervention/serrurier-{slug}/
  name: string
  dept: string
  km: number
  tier: 1 | 2 | 3
}

// ⚠️ Ordre = priorité SEO — respecter la stratégie
// Tier 1 = lancement, Tier 2 = mois 2, Tier 3 = mois 3+
// NE PAS ajouter Bourg-en-Bresse, Mâcon, Chalon : concurrence trop forte sans autorité
export const CITIES: City[] = [
  // ── TIER 1 — Priorité maximale ──────────────────────────────────
  { slug: 'montrevel-en-bresse',      name: 'Montrevel-en-Bresse',      dept: 'Ain (01)',             km: 0,  tier: 1 },
  { slug: 'polliat',                  name: 'Polliat',                   dept: 'Ain (01)',             km: 8,  tier: 1 },
  { slug: 'coligny',                  name: 'Coligny',                   dept: 'Ain (01)',             km: 18, tier: 1 },
  { slug: 'saint-trivier-de-courtes', name: 'Saint-Trivier-de-Courtes', dept: 'Ain (01)',             km: 12, tier: 1 },
  { slug: 'bage-dommartin',           name: 'Bâgé-Dommartin',           dept: 'Ain (01)',             km: 15, tier: 1 },
  { slug: 'pont-de-vaux',             name: 'Pont-de-Vaux',             dept: 'Ain (01)',             km: 22, tier: 1 },
  { slug: 'saint-amour',              name: 'Saint-Amour',              dept: 'Jura (39)',            km: 38, tier: 1 },
  { slug: 'viriat',                   name: 'Viriat',                   dept: 'Ain (01)',             km: 16, tier: 1 },
  // ── TIER 2 — Mois 2 ─────────────────────────────────────────────
  { slug: 'louhans',                  name: 'Louhans',                  dept: 'Saône-et-Loire (71)',  km: 38, tier: 2 },
  { slug: 'lons-le-saunier',          name: 'Lons-le-Saunier',         dept: 'Jura (39)',            km: 50, tier: 2 },
  // ── TIER 3 — Mois 3+ ────────────────────────────────────────────
  { slug: 'tournus',                  name: 'Tournus',                  dept: 'Saône-et-Loire (71)',  km: 42, tier: 3 },
  { slug: 'oyonnax',                  name: 'Oyonnax',                  dept: 'Ain (01)',             km: 52, tier: 3 },
  { slug: 'amberieu-en-bugey',        name: 'Ambérieu-en-Bugey',       dept: 'Ain (01)',             km: 58, tier: 3 },
  { slug: 'chatillon-sur-chalaronne', name: 'Châtillon-sur-Chalaronne',dept: 'Ain (01)',             km: 22, tier: 3 },
]

export const CITY_BY_SLUG = new Map(CITIES.map((c) => [c.slug, c]))
