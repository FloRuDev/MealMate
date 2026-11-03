# Data Model & Schema Specification

**Produkt:** MealMate
**Version:** 1.0
**Zweck:** Definitive Source of Truth für alle Datenstrukturen, Typen und Persistenz-Schichten. KI-Agenten müssen dieses Schema bei allen Code-Generierungen und Refactorings strikt einhalten.

---

## 1. Core Typen & Enums

### 1.1 Kategorien (Supermarkt-Regale)
Diese Kategorien werden für die Sortierung der Zutaten in der Einkaufsliste verwendet. Neue Zutaten müssen zwingend auf eine dieser Kategorien gemappt werden (Fallback: `Vorratsschrank`).

```typescript
type IngredientCategory = 
  | 'Obst & Gemüse'
  | 'Fleisch & Frische'
  | 'Kühlregal'
  | 'Tiefkühlung'
  | 'Vorratsschrank';
```

### 1.2 Wochentage
Verwendet für die Zuweisung von Portionen auf dem Merkzettel.

```typescript
type WeekdayShort = 'Mo' | 'Di' | 'Mi' | 'Do' | 'Fr' | 'Sa' | 'So';
```

### 1.3 Semantische Farben (Tailwind Gradient Classes)
Jedes Rezept erhält basierend auf seinen Hauptzutaten eine feste Farbgebung.

```typescript
type ThemeColor = 
  | 'from-amber-500 to-orange-600' // POULTRY (Geflügel)
  | 'from-red-600 to-rose-700'     // BEEF (Rind)
  | 'from-cyan-600 to-blue-700'    // FISH (Fisch)
  | 'from-emerald-600 to-teal-700'; // VEGGIE (Vegetarisch/Vegan)
```

---

## 2. Entitäten (Schemas)

### 2.1 Ingredient (Zutat)
Stellt eine einzelne Zutat eines Rezepts dar.

```typescript
interface Ingredient {
  name: string;      // Bsp: "Basmatireis (ungekocht)". Darf nicht leer sein.
  amount: number;    // Basis-Menge. Muss > 0 sein. (Max: 5000)
  unit: string;      // Bsp: "g", "ml", "EL", "Stück". Fallback: "g"
  category: IngredientCategory;
}
```

### 2.2 Recipe (Rezept)
Das zentrale Rezept-Objekt. Die Konstante `window.MEALMATE_RECIPES` ist ein Array dieses Typs `Recipe[]`.

```typescript
interface Recipe {
  id: string;               // Eindeutiger Identifier (z.B. 'rec-1', 'ki-4829').
  title: string;            // Prägnanter Titel (Ideal: max 34 Zeichen).
  subtitle: string;         // Beschreibung / Beilagen (Fallback: 'Leckeres Familien-Rezept').
  emoji: string;            // Ein einzelnes Emoji (Fallback: '🍲').
  accentColor: ThemeColor;  // Abgeleitet aus Zutaten/Titel.
  
  prepTimeActive: number;   // Aktive Vorbereitungszeit in Minuten. Range: [5, 120].
  prepTimePassive: number;  // Passive Koch-/Ofenzeit in Minuten. Range: [0, 240].
  effortLevel: string;      // Beschreibender Text (z.B. "Minimal (Ein-Topf)").
  
  fridgeDays: number;       // Haltbarkeit im Kühlschrank in Tagen. Range: [1, 7].
  freezerMonths: number;    // Haltbarkeit im Tiefkühler in Monaten. Range: [0, 12].
  toddlerNote: string;      // Hinweise für Kleinkinder (z.B. "Mild gewürzt").
  
  calories: number;         // Kalorien pro Portion. Range: [150, 1500].
  protein: number;          // Protein in Gramm pro Portion. Range: [5, 150].
  carbs: number;            // Kohlenhydrate in Gramm pro Portion. Range: [0, 250].
  fat: number;              // Fett in Gramm pro Portion. Range: [1, 100].
  
  basePortions: number;     // Standard-Portionszahl des Rezepts (meistens 4). Range: [1, 12].
  ingredients: Ingredient[];// Mindestens 1 Element erforderlich.
  steps: string[];          // Zubereitungsschritte. Mindestens 1 Element erforderlich.
}
```

### 2.3 MealPlanItem (Merkzettel-Eintrag)
Ein Rezept, das sich auf dem Merkzettel befindet oder Teil eines gespeicherten Wochenplans ist. Es hält den Status, für welche Tage und in welcher Menge es gekocht wird.

```typescript
interface MealPlanItem {
  recipe: Recipe;
  portions: number;                 // Gesamtanzahl der Portionen (Summe aller Tage). Max: 20.
  dayPortions: Record<WeekdayShort, number>; // Map: Wochentag -> Portionen an diesem Tag. (Max pro Tag: 12).
  weekday?: WeekdayShort | null;    // (Legacy/Hilfsfeld) Der erste zugewiesene Tag.
}
```

### 2.4 WeeklyPlan (Gespeicherter Wochenplan / MyPrep)
Ein vom Nutzer abgeschlossener und benannter Wochenplan.

```typescript
interface WeeklyPlan {
  id: string;               // Bsp: 'plan-1730000000000' (Timestamp-basiert).
  name: string;             // Vom Nutzer vergeben (Bsp: 'KW 45').
  createdAt: string;        // Formatiertes Datum (z.B. '15.10.2023').
  items: MealPlanItem[];    // Die Liste der Gerichte für diese Woche.
  checkedItems: Record<string, boolean>; // Status der Einkaufsliste. 
                            // Key ist die aggregierte Zutaten-ID (z.B. 'Vorratsschrank__basmatireis__g').
}
```

---

## 3. Storage Schema (OfflineCacheEngine)

MealMate nutzt `IndexedDB` (Name: `MealMateOfflineDB_v3`, Store: `kvStore`) mit einem synchronen `localStorage`-Fallback. 

Die KI muss beim Laden oder Speichern von Zuständen folgende Keys verwenden:

| Key | Typ | Beschreibung | Fallback (Init) |
| :--- | :--- | :--- | :--- |
| `mealmate_recipes` | `Recipe[]` | Vom Nutzer erstellte/modifizierte Rezepte (lokal & KI). Wird zur Laufzeit mit `window.MEALMATE_RECIPES` gemerged. | `[]` |
| `mealmate_mealPlans` | `MealPlanItem[]` | Der aktuelle, ungespeicherte Merkzettel. | `[]` |
| `mealmate_weeklyPlans` | `WeeklyPlan[]` | Abgeschlossene Wochenpläne in der MyPrep-Historie. | `[]` |
| `mealmate_favorites` | `Recipe[]` | Vom Nutzer als Favorit (Herz/Stern) markierte Rezepte. | `[]` |
| `mealmate_geminiApiKey` | `string` | Der optionale Google Gemini API Key des Nutzers. | `""` |

---

## 4. Aggregations-Logik (Einkaufsliste)

Wenn die Einkaufsliste aus `MealPlanItem[]` generiert wird, muss der Aggregationsschlüssel (`Key`) zwingend wie folgt gebildet werden, um Redundanzen zu vermeiden:

```javascript
// Key-Format: {KATEGORIE}__{NORMALISIERTER_NAME}__{EINHEIT}
const normalizedName = ingredient.name.replace(/\([^)]*\)/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
const key = `${ingredient.category}__${normalizedName}__${ingredient.unit.toLowerCase().trim()}`;
```
*Beispiel-Key:* `Vorratsschrank__basmatireis__g`