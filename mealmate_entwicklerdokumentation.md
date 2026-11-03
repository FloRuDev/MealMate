# MealMate – Entwicklerdokumentation

Diese Dokumentation richtet sich an Entwickler, die das MealMate-Projekt warten, erweitern oder anpassen möchten.

## 1. Technologiestack
Das Projekt zeichnet sich durch einen "Zero-Build-Step" Ansatz aus. Es wird vollständig clientseitig im Browser ausgeführt, ohne dass Webpack, Babel oder Node.js zwingend erforderlich sind.

*   **UI-Bibliothek:** React 18 (via CDN)
*   **Templating:** HTM (Hyperscript Tagged Markup) als JSX-Alternative im Browser (`htm.bind(React.createElement)`)
*   **Styling:** Tailwind CSS (via CDN)
*   **Offline-Speicher:** IndexedDB (mit Fallback auf LocalStorage)
*   **Externe API:** Google Gemini API (Modell: `gemini-3.8-flash`) für KI-Rezeptanpassungen

## 2. Projektstruktur
Das Projekt besteht im Kern aus zwei Dateien:

1.  `index.html`: Enthält die gesamte Anwendungslogik, State-Management, UI-Komponenten und das Styling.
2.  `rezepte.js`: Eine statische Datenbank mit 50 handkuratierten Rezepten, die dem globalen `window`-Objekt (`window.MEALMATE_RECIPES`) hinzugefügt wird.

## 3. Lokale Entwicklung
Da keine Build-Pipeline existiert, reicht ein einfacher lokaler Webserver aus, um das Projekt zu starten:

```bash
# Beispiel mit Python
python -m http.server 8000

# Beispiel mit Node.js (http-server)
npx http-server
```
Rufe anschließend `http://localhost:8000` im Browser auf.

## 4. Kernkomponenten & Hooks

### Custom Hooks
*   `usePersistedState(key, initialValue)`: Synchronisiert den React-State automatisch mit der `OfflineCacheEngine` (IndexedDB).

### Wichtige UI-Komponenten
*   `App`: Die Hauptkomponente, verwaltet die globalen States (aktive Ansicht, Datenbank, Merkzettel, Wochenpläne).
*   `SetupModal`: Verwaltung des PWA-Hinweises und des optionalen Gemini-API-Keys.
*   `SearchModal`: Volltext- und Filter-Suche über alle Rezepte.
*   `CookRecipeModal`: Detailansicht eines Rezepts (Portions-Skalierung, Zutatenliste, Zubereitungsschritte).
*   `MacroBar`: Visualisierung der Makronährstoffe (Kalorien, Protein, Kohlenhydrate, Fett).

## 5. Datenmodell erweitern (`rezepte.js`)
Neue Rezepte können der `CURATED_50_RECIPES`-Liste hinzugefügt werden. Ein Rezept muss folgendes Schema erfüllen:

```javascript
{
  id: 'rec-unique-id', // Eindeutige ID
  title: 'String (max. 28 Zeichen)',
  subtitle: 'String',
  emoji: '🍲',
  accentColor: THEME_COLORS.VEGGIE, // Semantische Farbe
  prepTimeActive: Number, // Minuten
  prepTimePassive: Number, // Minuten
  effortLevel: 'String',
  fridgeDays: Number,
  freezerMonths: Number,
  toddlerNote: 'String',
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
  basePortions: 4,
  ingredients: [
    { name: 'String', amount: Number, unit: 'String', category: 'Kategorie' }
  ],
  steps: ['Schritt 1', 'Schritt 2']
}
```

## 6. KI-Integration (Gemini)
Die Funktion `callGeminiRecipeAgent` sendet einen Prompt an die Gemini API. 
*   **Eingabe:** Das aktuelle Rezeptobjekt und die Modifikationsanweisung des Nutzers (z.B. "vegetarisch").
*   **Ausgabe:** Ein JSON-Objekt, das dem Rezept-Schema entspricht.
*   **Validierung:** Die Antwort wird durch `validateAndSanitizeRecipe` geprüft und in die Offline-Datenbank integriert. 
*   **Fallback:** Ist kein API-Key vorhanden, greift `applyLocalRecipeVariation` (regelbasierte Modifikation).