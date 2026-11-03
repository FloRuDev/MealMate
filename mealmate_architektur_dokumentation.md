# MealMate – Architektur-Dokumentation

Dieses Dokument beschreibt die High-Level-Architektur der MealMate-Anwendung, den Datenfluss und die Persistenzstrategie.

## 1. Architekturmuster
MealMate ist eine **Client-Side Single Page Application (SPA)**, die als **Progressive Web App (PWA)** konzipiert ist. Die gesamte Logik (Routing, State Management, Datenspeicherung) findet im Browser des Nutzers statt. Es gibt kein Backend (Serverless), abgesehen von der optionalen Anbindung an die Google Gemini API.

## 2. Datenhaltung & Persistenz (`OfflineCacheEngine`)
Um eine reibungslose Offline-Nutzung zu gewährleisten, implementiert die App ein mehrstufiges Caching-System:

1.  **Memory Fallback:** Schnellster Zugriff, hält Daten zur Laufzeit im RAM.
2.  **IndexedDB (`kvStore`):** Primärer persistenter Speicherort für große Datenmengen (modifizierte Rezepte, gespeicherte Wochenpläne).
3.  **LocalStorage:** Fallback-Mechanismus (hauptsächlich für asynchrone Initialisierung und einfache Key-Value-Paare).

### Datenstrukturen
*   **`recipes`:** Das gemergte Array aus statischen Rezepten (`rezepte.js`) und vom Nutzer/KI generierten Rezepten.
*   **`mealPlans` (Merkzettel):** Temporäre Liste von Rezepten mit zugewiesenen Wochentagen und Skalierungen.
*   **`weeklyPlans` (MyPrep):** Persistierte, benannte Wochenpläne inklusive abgehakter Einkaufslisten-Einträge.

## 3. Modul-Zuständigkeiten (Domänen-Logik)
Die Geschäftslogik ist in puren JavaScript-Funktionen gekapselt, getrennt von den React-Komponenten:

*   **Portionsberechnung (`getTotalPortions`, `applyDayPortionDelta`):** Berechnet die Skalierung von Zutaten basierend auf den zugewiesenen Tagen und Portionen.
*   **Einkaufslisten-Aggregator (`aggregateShoppingList`):** Iteriert über alle Rezepte eines Plans, skaliert die Zutaten und gruppiert sie nach Supermarkt-Kategorien (z.B. *Obst & Gemüse*, *Kühlregal*). Fasst identische Zutaten (z.B. 2x "Milch") zusammen.
*   **Rezept-Validierung (`validateAndSanitizeRecipe`):** Wichtiges Sicherheits-Interface, das KI-generierte JSON-Antworten prüft, Type-Casting durchführt und Default-Werte setzt, bevor Daten in den App-State gelangen.

## 4. UI- und Rendering-Fluss
1.  **Instant Shell:** Eine statische HTML/CSS-Struktur, die sofort beim Laden angezeigt wird (Skeleton Screen).
2.  **React Hydration:** React wird über CDN geladen und rendert die interaktive App über den `#root`-Container.
3.  **Swipe-Mechanik:** Das Tinder-ähnliche Swipen wird via Pointer-Events (`onPointerDown`, `onPointerMove`, `onPointerUp`) realisiert. Die Transformationen werden direkt über Inline-Styles berechnet (Rotation und Translation basierend auf der Drag-Distanz `dragX`).

## 5. Security & Privacy
*   Da die App rein clientseitig läuft, verbleiben alle Nutzerdaten (Pläne, Favoriten) lokal auf dem Gerät.
*   Wenn der Nutzer die Gemini-API nutzt, wird der API-Key im LocalStorage abgelegt. Die Kommunikation erfolgt direkt vom Browser zu den Google-Servern.