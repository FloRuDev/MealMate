🥗 MealMate – Familien Meal-Prep (Prototyp)

MealMate ist eine smarte, offline-fähige Web-App (PWA) zur stressfreien Planung von Familienmahlzeiten und Wochen-Einkäufen.

Die App wurde als leichtgewichtiger Zero-Build-Step Prototyp entwickelt, der direkt im Browser läuft – ganz ohne Webpack, Node.js-Abhängigkeiten oder komplexe Build-Pipelines. Sie wird aktuell via GitHub Pages gehostet.

✨ Features

Swipe Rezeptauswahl: Rezepte einfach per Swipe-Geste nach links (verwerfen) oder rechts (merken) sortieren.

Integrierte Rezept-Datenbank: 50 handkuratierte, familienfreundliche Offline-Rezepte direkt integriert.

Smarte Einkaufsliste: Automatische Aggregation der Zutaten über den gesamten Wochenplan. Zutaten werden dynamisch auf Portionen skaliert und nach Supermarkt-Regalen (Obst & Gemüse, Kühlregal etc.) sortiert.

KI-Rezeptumbau (Optional): Über die Google Gemini API können Rezepte flexibel per Text-Prompt abgewandelt werden (z.B. "Mach es vegetarisch" oder "Lieber mit Reis"). Ohne API-Key greift ein intelligentes, lokales Fallback-System.

Offline-First & PWA: Dank IndexedDB und LocalStorage funktioniert die App auch ohne Internetverbindung und kann als App auf dem Home-Screen installiert werden.

🛠️ Technologiestack (Zero-Build)

Dieses Projekt erfordert keine Kompilierung. Alle Abhängigkeiten werden effizient über CDNs geladen.

Frontend-Logik: React 18 (via CDN) + HTM als JSX-Alternative direkt im Browser.

Styling: Tailwind CSS (via CDN).

Datenbank & Persistenz: IndexedDB (OfflineCacheEngine) & LocalStorage.

KI-Schnittstelle: Google Gemini 3.8 API (Direkte REST-Aufrufe aus dem Client).

🚀 Lokale Entwicklung

Da es keinen Build-Prozess gibt, musst du das Projekt nicht "bauen". Lade einfach die Dateien herunter und starte einen simplen lokalen Webserver, um CORS-Probleme zu vermeiden.

Mit Python:

python -m http.server 8000
# Danach im Browser öffnen: http://localhost:8000


Mit Node.js (http-server):

npx http-server
# Danach im Browser öffnen: http://localhost:8080


📁 Projektstruktur

index.html: Das Herzstück. Enthält die komplette React-App, alle UI-Komponenten, die Caching-Logik und das Tailwind-Setup.

rezepte.js: Die statische Datenbank. Fügt window.MEALMATE_RECIPES 50 vorgefertigte Rezepte hinzu.

img/: (Optional) Ordner für Beispielfotos der Rezepte. Die App zeigt Emojis, wenn kein Bild vorhanden ist.

docs/: Enthält detailliertere Dokumentationen (Entwickler, Architektur, Benutzer).

🤖 API-Key Konfiguration

Standardmäßig läuft die App im reinen Offline-Modus. Um den dynamischen KI-Umbau von Rezepten zu testen:

Öffne die App.

Klicke auf das Smartphone/Einstellungs-Icon oben rechts.

Trage deinen Google Gemini API Key ein. (Dieser wird nur lokal auf deinem Gerät gespeichert).

Dieser Prototyp dient der schnellen Validierung des Meal-Prep-Konzepts.
