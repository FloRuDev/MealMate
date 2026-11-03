# Product Requirements Document (PRD)

**Produkt:** MealMate (Prototyp)
**Version:** 1.0 (Zero-Build PWA)
**Status:** Implementiert / Baseline

## 1. Produktvision & Ziele

**Problem:** Familien und Eltern haben im Alltag oft wenig Zeit, gesunde Mahlzeiten zu planen und dafür effizient einzukaufen. Die mentale Last ("Was essen wir diese Woche?") ist hoch.
**Lösung:** MealMate ist eine offline-fähige Web-App (PWA), die durch einen spielerischen Swipe-Mechanismus die Rezeptauswahl vereinfacht, Mahlzeiten flexibel auf Wochentage und Portionen skaliert und daraus automatisch eine smarte, nach Supermarktregalen sortierte Einkaufsliste generiert. **Primäre Metriken:** Reduzierung der Planungszeit für einen Wochenplan auf unter 5 Minuten.

## 2. Zielgruppe

* Eltern und Familien, die gesund und proteinreich kochen möchten.

* Meal-Prep-Interessierte, die Vorkochen (Batch Cooking) betreiben.

* Nutzer, die eine schnelle, app-ähnliche Erfahrung ohne App-Store-Download bevorzugen.

## 3. Core Features (In Scope für v1.0)

1. **Rezept-Discovery (Swipe-UI):** Entdecken von Rezepten über eine kartenbasierte Swipe-Oberfläche (Rechts = Merken, Links = Verwerfen).

2. **Integrierte Datenbank:** 50 handkuratierte Offline-Rezepte.

3. **Merkzettel & Wochenplaner:** Zuweisung von gemerkten Rezepten zu Wochentagen (Mo-So) und dynamische Anpassung der Portionsgrößen.

4. **Smarte Einkaufsliste:** Automatische Aggregation und Skalierung von Zutaten, gruppiert nach Supermarkt-Kategorien.

5. **Plan-Historie (MyPrep):** Speichern, Aufrufen und Löschen von abgeschlossenen Wochenplänen.

6. **KI-Rezeptumbau:** Modifikation von Rezepten (z.B. "vegetarisch machen") über lokale Ersetzungslogik oder optional über die Google Gemini API.

7. **Suchen & Filtern:** Volltextsuche und Filter (Veggie, Fisch, < 15 Min, Favoriten).

8. **Offline-Fähigkeit:** Datenspeicherung über IndexedDB und LocalStorage.

## 4. User Stories & Akzeptanzkriterien (Acceptance Criteria)

### Epics 1: Discovery & Rezeptauswahl

**US 1.1: Als Nutzer möchte ich Rezepte schnell bewerten können, um meinen Wochenplan spielerisch zu füllen.**

* **AC 1:** Auf dem Startbildschirm wird eine Rezeptkarte mit Bild/Emoji, Titel, Untertitel und Makros angezeigt.

* **AC 2:** Ein Swipe nach rechts (oder Klick auf Herz) speichert das Rezept im "Merkzettel" und lädt das nächste Rezept.

* **AC 3:** Ein Swipe nach links (oder Klick auf X) verwirft das Rezept und lädt das nächste Rezept.

**US 1.2: Als Nutzer möchte ich Rezeptdetails einsehen, bevor ich mich entscheide.**

* **AC 1:** Die Rezeptkarte hat Tabs für "Zutaten", "Ablauf" und "KI-Umbau".

* **AC 2:** Der Zutaten-Tab zeigt die Mengen für die Basis-Portionen (Standard: 4) an.

* **AC 3:** Der Ablauf-Tab listet die Zubereitungsschritte chronologisch auf.

### Epic 2: Wochenplanung & Merkzettel

**US 2.1: Als Nutzer möchte ich gemerkten Rezepten Wochentage zuweisen.**

* **AC 1:** Im Tab "Merkliste" werden alle positiv geswipeten Rezepte aufgelistet.

* **AC 2:** Jedes Rezept hat Buttons für die Tage Mo-So. Ein Klick weist den Tag zu, ein erneuter Klick entfernt ihn.

* **AC 3:** Wird ein Tag zugewiesen, wird die Standard-Tagesportionszahl (3) gesetzt.

**US 2.2: Als Nutzer möchte ich die Portionsgrößen pro Wochentag anpassen.**

* **AC 1:** Für jeden zugewiesenen Wochentag gibt es "+ / -" Buttons.

* **AC 2:** Die Portionen können minimal auf 1 und maximal auf 12 pro Tag skaliert werden.

* **AC 3:** Die Summe der Portionen eines Rezepts wird in Echtzeit berechnet und im Header der Rezeptkarte angezeigt.

**US 2.3: Als Nutzer möchte ich meinen Merkzettel als festen Wochenplan speichern.**

* **AC 1:** Ein Input-Feld erlaubt die Eingabe eines Plannamens (Fallback: "Wochenplan #X + Datum").

* **AC 2:** Beim Klick auf "Speichern & Leeren" wird der Plan in die "MyPrep"-Historie verschoben.

* **AC 3:** Der Merkzettel ist danach wieder leer.

### Epic 3: Smarte Einkaufsliste & MyPrep

**US 3.1: Als Nutzer möchte ich eine zusammengefasste Einkaufsliste für meinen Wochenplan sehen.**

* **AC 1:** In der "MyPrep"-Ansicht gibt es pro Plan einen Tab "Einkaufszettel".

* **AC 2:** Zutaten gleicher Art (identischer Name, gleiche Einheit) werden über alle Rezepte des Plans hinweg summiert.

* **AC 3:** Die Mengen skalieren exakt mit den eingestellten Portionen (Menge \* (Wunschportionen / Basisportionen)).

* **AC 4:** Die Zutaten sind in feste Kategorien unterteilt (Obst & Gemüse, Kühlregal, Vorratsschrank etc.).

**US 3.2: Als Nutzer möchte ich Zutaten beim Einkaufen abhaken können.**

* **AC 1:** Jede Zutat auf der Einkaufsliste hat eine Checkbox/klickbare Fläche.

* **AC 2:** Ein Klick streicht die Zutat durch und markiert sie als erledigt.

* **AC 3:** Der abgehakte Zustand bleibt beim Neuladen der App bestehen (wird im Plan-Objekt gespeichert).

**US 3.3: Als Nutzer möchte ich die Einkaufsliste kopieren oder teilen.**

* **AC 1:** Ein "Kopieren"-Button generiert einen sauberen Plain-Text-String der Einkaufsliste.

* **AC 2:** Abgehakte Items werden im Text mit `[x]`, offene mit `[ ]` markiert.

### Epic 4: Rezeptanpassung (KI & Lokal)

**US 4.1: Als Nutzer möchte ich ein Rezept auf Knopfdruck anpassen (z.B. vegetarisch).**

* **AC 1:** Auf der Swipe-Karte gibt es Quick-Action-Buttons (z.B. "Vegetarisch", "Mit Reis").

* **AC 2:** Ohne API-Key wird das Rezept über eine lokale Fallback-Logik dupliziert und angepasst (Titel ändert sich, Basis-Zutaten werden getauscht).

* **AC 3:** Mit hinterlegtem Gemini API-Key wird der Prompt an die API gesendet und ein neues JSON-Rezept generiert, validiert und als aktuelle Karte geladen.

## 5. Non-Functional Requirements (NFRs)

* **Performance:** Die App muss ohne Ladebildschirme (abgesehen vom initialen Skeleton-Screen) sofort bedienbar sein (Time to Interactive < 2 Sekunden).

* **Architektur:** Zero-Build-Step. Alle Abhängigkeiten (React, HTM, Tailwind) werden über CDNs geladen. Babel oder Webpack dürfen *nicht* vorausgesetzt werden.

* **Persistenz:** IndexedDB (`OfflineCacheEngine`) muss asynchron arbeiten und den UI-Thread nicht blockieren.

* **Mobile-First:** Die UI ist primär für iOS/Android-Geräte im Hochformat konzipiert (max-width 430px für den Hauptcontainer).

* **Sicherheit:** Ein vom Nutzer eingegebener API-Key darf ausschließlich lokal (`localStorage`) gespeichert und nur für direkte API-Calls zu Google verwendet werden.

## 6. Out of Scope (Nicht Teil der v1.0)

* User-Accounts / Cloud-Synchronisation über mehrere Geräte hinweg.

* Integration von externen Supermarkt-APIs (Rewe, Bring, etc.).

* Freier Rezept-Import über URLs (Web-Scraping).

* Backend-Server / Eigene Datenbank-Infrastruktur.