# MealMate
SwipeUpYourFood
🍲 MealMate – Familien Meal-Prep Web-App

MealMate ist eine progressive Web-App (PWA), die Familien mit Kleinkindern dabei hilft, gesunde und milde Rezepte zum Vorkochen zu planen, zu kochen und den Wocheneinkauf zu automatisieren. Die Anwendung ist komplett als clientseitige Single-File-Anwendung konzipiert und optimiert für den Betrieb auf GitHub Pages sowie als iPhone Web-App.

✨ Hauptfunktionen

🃏 Swipe-Karten: Intuitives Entdecken von 300 offline verfügbaren Familien-Rezepten (oder Generieren neuer Rezepte per KI).

📅 Flexibler Wochenplan-Baukasten („MyPrep“): Zuordnung von Rezepten und Portionen auf einzelne Wochentage. Speichern und Verwalten mehrerer benannter Wochenpläne.

👨‍🍳 Interaktiver Koch-Modus: Rezeptkarten mit automatischer Portionsskalierung, detaillierten Zubereitungsschritten und Nährwert-Übersichten (Kalorien & Makros).

🛒 Smarte Einkaufsliste: Automatische Summierung aller Zutaten eines Wochenplans, sortiert nach Supermarkt-Kategorien (Obst & Gemüse, Tiefkühlung etc.) mit interaktiver Abhak-Funktion.

🔄 Hybrider KI-Umbau: Optionaler Support für den Gemini API-Key, um Rezepte per Live-KI anzupassen (oder alternativ voll funktionsfähig im lokalen Offline-Modus).

🛠️ Technologie-Stack

Frontend: React 18 + HTM (Zero-Build-Setup direkt im Browser via UMD-Skripte ohne umständliche Node.js-/Babel-Buildketten).

Styling: Tailwind CSS (via Play CDN).

Daten & Persistenz: Lokale Speicherarchitektur über IndexedDB und localStorage (via OfflineCacheEngine).

Deployment: Statisches Hosting über GitHub Pages.
