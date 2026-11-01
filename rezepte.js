/**
 * MEALMATE – EXTERNE REZEPT-DATENBANK (300 FAMILIEN-MEAL-PREP-REZEPTE)
 *
 * Architektur-Regel für Titel & Untertitel:
 * - `title`: Extrem prägnant (max. 2–3 Wörter / unter 30 Zeichen), nennt nur das Kerngericht & Hauptprotein.
 * - `subtitle`: Enthält alle Beilagen (Reis, Kartoffeln, Spätzle etc.), Gemüse-Details und Soßen-Arten.
 * - `accentColor`: Semantische Farbzuordnung nach Hauptzutat (Geflügel=Orange, Rind=Rot, Fisch=Blau, Veggie=Grün).
 *
 * Einbindung in index.html über: <script src="rezepte.js"></script>
 */
(function () {
  const THEME_COLORS = {
    POULTRY: 'from-amber-500 to-orange-600', // Hähnchen & Pute -> Orange
    BEEF: 'from-red-600 to-rose-700',       // Rind -> Rot
    FISH: 'from-cyan-600 to-blue-700',      // Lachs & Seelachs -> Blau
    VEGGIE: 'from-emerald-600 to-teal-700'  // Linsen, Kichererbsen & Gemüse -> Grün
  };

  // ============================================================================
  // 1. DIE 12 HANDVERLESENEN SIGNATURE-REZEPTE (rec-1 bis rec-12)
  // ============================================================================
  const BASE_SIGNATURE_RECIPES = [
    {
      id: 'rec-1',
      title: 'Hähnchen-Frikassee',
      subtitle: 'Mit Basmatireis, süßlichen Erbsen & Möhren in leichter Frischkäse-Soße',
      emoji: '🍚',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 15,
      prepTimePassive: 15,
      effortLevel: 'Minimal (TK-Gemüse)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Weiche Textur, mild-süßlich',
      calories: 510,
      protein: 44,
      carbs: 58,
      fat: 9,
      basePortions: 4,
      ingredients: [
        { name: 'Basmati- oder Parboiled-Reis (ungekocht)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Hähnchenbrustfilet (klein gewürfelt)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'TK-Erbsen und Möhren', amount: 400, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Fettarme Milch (1,5%)', amount: 250, unit: 'ml', category: 'Kühlregal' },
        { name: 'Milde Hühner- oder Gemüsebrühe', amount: 250, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Frischkäse Light (0,2% Fett)', amount: 100, unit: 'g', category: 'Kühlregal' },
        { name: 'Rapsöl zum Anbraten', amount: 1, unit: 'EL', category: 'Vorratsschrank' },
        { name: 'Zitronensaft & Prise Muskatnuss', amount: 1, unit: 'Spritzer', category: 'Vorratsschrank' }
      ],
      steps: [
        'Den Basmati- oder Parboiled-Reis in einem Sieb kalt abspülen und nach Packungsanweisung in leicht gesalzenem Wasser bei schwacher Hitze ca. 12–15 Minuten locker garen.',
        'Währenddessen das Hähnchenbrustfilet trocken tupfen und in kleine, mundgerechte Würfel (ca. 2 cm) schneiden.',
        'Das Rapsöl in einer großen, tiefen Pfanne erhitzen und die Hähnchenwürfel darin bei mittlerer bis hoher Hitze rundherum 4–5 Minuten goldbraun anbraten.',
        'Mit der milden Brühe und der fettarmen Milch ablöschen, die tiefgekühlten Erbsen und Möhren direkt dazugeben und alles abgedeckt 10–12 Minuten sanft köcheln lassen, bis das Gemüse weich ist.',
        'Die Pfanne auf niedrige Stufe schalten, den Frischkäse Light mit einem Schneebesen glatt einrühren und die Soße mit einem Spritzer Zitronensaft sowie einer Prise Muskatnuss mild abschmecken.',
        'Den gegarten Reis unter das cremige Hähnchen-Frikassee heben oder getrennt in Meal-Prep-Boxen schichten.'
      ]
    },
    {
      id: 'rec-2',
      title: 'Hähnchen-Kartoffel-Auflauf',
      subtitle: 'Vom Ofenblech mit weichen Brokkoli-Röschen & milder Hüttenkäse-Kruste',
      emoji: '🥘',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 15,
      prepTimePassive: 30,
      effortLevel: 'Sehr gering (Ofen-Job)',
      fridgeDays: 4,
      freezerMonths: 2,
      toddlerNote: 'Butterweiche Kartoffelwürfel & milde Käsekruste',
      calories: 520,
      protein: 45,
      carbs: 48,
      fat: 14,
      basePortions: 4,
      ingredients: [
        { name: 'Festkochende Kartoffeln (klein gewürfelt)', amount: 800, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Hähnchenbrustfilet (mundgerecht)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Brokkoli-Röschen (frisch oder TK)', amount: 500, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Körniger Frischkäse (Hüttenkäse light)', amount: 400, unit: 'g', category: 'Kühlregal' },
        { name: 'Milde Gemüsebrühe', amount: 200, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Geriebener Gouda / Mozzarella light', amount: 100, unit: 'g', category: 'Kühlregal' },
        { name: 'Paprika edelsüß & milde Kräuter', amount: 1, unit: 'TL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Den Backofen auf 200 °C Umluft (220 °C Ober-/Unterhitze) vorheizen. Die Kartoffeln schälen und in kleine, gleichmäßige Würfel (ca. 1,5 cm) schneiden.',
        'Den Brokkoli in sehr kleine, mundgerechte Röschen teilen (TK-Brokkoli kurz antauen lassen) und das Hähnchenbrustfilet in etwa 2 cm große Stücke würfeln.',
        'Kartoffelwürfel, Brokkoliröschen und rohe Hähnchenstücke direkt in einer großen Auflaufform gründlich miteinander vermischen.',
        'Für den Guss den körnigen Frischkäse zusammen mit der warmen Gemüsebrühe, dem edelsüßen Paprikapulver und den milden Kräutern kurz glatt pürieren oder kräftig verquirlen.',
        'Die Hüttenkäse-Soße gleichmäßig über das Gemüse und Fleisch gießen und alles mit dem geriebenen Käse bestreuen.',
        'Den Auflauf auf mittlerer Schiene ca. 30–35 Minuten goldbraun backen, bis die Kartoffelwürfel beim Einstechen mit einer Gabel butterweich sind.'
      ]
    },
    {
      id: 'rec-3',
      title: 'Ofen-Hähnchenfrikadellen',
      subtitle: 'Saftige Gemüse-Bratlinge vom Blech auf cremigem Süßkartoffel-Stampf',
      emoji: '🧆',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 20,
      prepTimePassive: 20,
      effortLevel: 'Mittel (Kein Braten am Herd)',
      fridgeDays: 3,
      freezerMonths: 3,
      toddlerNote: 'Perfektes Fingerfood, süßlicher Stampf ohne Schärfe',
      calories: 495,
      protein: 46,
      carbs: 47,
      fat: 12,
      basePortions: 4,
      ingredients: [
        { name: 'Hähnchen- oder Putenhackfleisch (mager)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Zarte Haferflocken (als Bindung)', amount: 60, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Magerquark (macht die Frikadellen saftig)', amount: 150, unit: 'g', category: 'Kühlregal' },
        { name: 'Ei (Größe M)', amount: 1, unit: 'Stück', category: 'Kühlregal' },
        { name: 'Karotte (fein gerieben)', amount: 150, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Süßkartoffeln', amount: 450, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Mehligkochende Kartoffeln', amount: 450, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Fettarme Milch für den Stampf', amount: 100, unit: 'ml', category: 'Kühlregal' }
      ],
      steps: [
        'Den Backofen auf 200 °C Umluft vorheizen und ein Backblech mit Backpapier auslegen. Die Karotte schälen und auf einer feinen Reibe direkt in eine große Schüssel raspeln.',
        'Das Hähnchenhackfleisch mit dem Magerquark, dem Ei, den zarten Haferflocken, den Karottenraspeln und milden Kräutern gründlich verkneten und 5 Minuten quellen lassen.',
        'Mit leicht angefeuchteten Händen 12 flache, gleich große Frikadellen formen, auf das Backblech setzen und im heißen Ofen ca. 20 Minuten saftig backen.',
        'Parallel die Süßkartoffeln und die mehligkochenden Kartoffeln schälen, in grobe Würfel schneiden und in leicht gesalzenem Wasser ca. 15 Minuten weich kochen.',
        'Das Kochwasser abgießen, die Kartoffeln kurz ausdampfen lassen und die fettarme Milch leicht erwärmen.',
        'Die warme Milch zu den Kartoffeln geben, alles zu einem feinen, cremigen Püree stampfen und zusammen mit den Ofen-Frikadellen anrichten.'
      ]
    },
    {
      id: 'rec-4',
      title: 'Puten-Bolognese',
      subtitle: 'Mit Vollkorn-Spirelli & fein geraspelter Zucchini in milder Tomatensoße',
      emoji: '🍝',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 15,
      prepTimePassive: 15,
      effortLevel: 'Gering (Klassiker)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Spirelli lassen sich leicht greifen, verstecktes Gemüse',
      calories: 530,
      protein: 43,
      carbs: 62,
      fat: 10,
      basePortions: 4,
      ingredients: [
        { name: 'Vollkorn-Spirelli oder Penne', amount: 300, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Putenhackfleisch (mager)', amount: 550, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Zucchini (fein geraspelt)', amount: 250, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Karotte (fein geraspelt)', amount: 150, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Passierte Tomaten', amount: 500, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Körniger Frischkäse (in die Soße gerührt)', amount: 150, unit: 'g', category: 'Kühlregal' },
        { name: 'Rapsöl zum Anbraten', amount: 1, unit: 'EL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Einen großen Topf mit leicht gesalzenem Wasser zum Kochen bringen und die Vollkorn-Spirelli darin nach Packungsanweisung bissfest garen.',
        'Währenddessen die Zucchini waschen und die Karotte schälen; beides auf einer Küchenreibe fein raspeln, damit das Gemüse später in der Soße fast unsichtbar verschmilzt.',
        'Das Rapsöl in einer tiefen Pfanne erhitzen und das Putenhackfleisch darin bei hoher Hitze 5 Minuten krümelig anbraten.',
        'Die feinen Zucchini- und Karottenraspel zum Fleisch geben und unter Rühren 3 Minuten sanft mitdünsten.',
        'Mit den passierten Tomaten ablöschen, die Hitze reduzieren und die Bolognese abgedeckt 10 Minuten mild köcheln lassen.',
        'Zum Schluss den körnigen Frischkäse für extra Cremigkeit und Protein unterrühren und die Soße mit den abgetropften Spirelli mischen.'
      ]
    },
    {
      id: 'rec-5',
      title: 'Lachs-Kokos-Pfanne',
      subtitle: 'Mit lockerem Jasminreis, zartem Blattspinat & milder Kurkuma-Kokos-Soße',
      emoji: '🐟',
      accentColor: THEME_COLORS.FISH,
      prepTimeActive: 15,
      prepTimePassive: 10,
      effortLevel: 'Minimal (Schnellgericht)',
      fridgeDays: 3,
      freezerMonths: 2,
      toddlerNote: 'Grätenfreie Lachswürfel, butterweich & komplett ohne Schärfe',
      calories: 545,
      protein: 39,
      carbs: 54,
      fat: 18,
      basePortions: 4,
      ingredients: [
        { name: 'Lachsfilet ohne Haut (grätenfrei)', amount: 500, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Jasmin- oder Basmatireis (ungekocht)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'TK-Blattspinat (portioniert)', amount: 350, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Kokosmilch Light (fettreduziert)', amount: 400, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Körniger Frischkäse (als Protein-Ergänzung)', amount: 150, unit: 'g', category: 'Kühlregal' },
        { name: 'Kurkuma & Spritzer Limette', amount: 1, unit: 'TL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Den Jasminreis unter kaltem Wasser abspülen und in einem Topf mit der doppelten Menge leicht gesalzenem Wasser ca. 12 Minuten locker köcheln lassen.',
        'Das Lachsfilet sorgfältig auf eventuelle Gräten prüfen, trocken tupfen und in etwa 2,5 cm große Würfel schneiden.',
        'In einer tiefen Pfanne die fettreduzierte Kokosmilch zusammen mit dem tiefgekühlten Blattspinat und einer Prise Kurkuma langsam aufkochen, bis der Spinat aufgetaut ist.',
        'Den körnigen Frischkäse in die warme Kokos-Spinat-Soße rühren, bis eine sämige Bindung entsteht.',
        'Die rohen Lachswürfel vorsichtig in die sanft simmende Soße legen und bei schwacher Hitze abgedeckt in 6–8 Minuten gar ziehen lassen.',
        'Mit einem kleinen Spritzer Limettensaft abrunden und zusammen mit dem duftenden Jasminreis servieren.'
      ]
    },
    {
      id: 'rec-6',
      title: 'Kichererbsen-Butter-Curry',
      subtitle: 'Auf lockerem Basmatireis mit mildem Blumenkohl in cremiger Tomaten-Skyr-Soße',
      emoji: '🍛',
      accentColor: THEME_COLORS.VEGGIE,
      prepTimeActive: 15,
      prepTimePassive: 15,
      effortLevel: 'Minimal (One-Pot)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Cremig-mild ohne Chili, Kichererbsen leicht angedrückt',
      calories: 485,
      protein: 36,
      carbs: 64,
      fat: 8,
      basePortions: 4,
      ingredients: [
        { name: 'Kichererbsen (Abtropfgewicht, Dose)', amount: 480, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Rote Linsen (trocken, für Bindung & Protein)', amount: 120, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Basmatireis (ungekocht)', amount: 240, unit: 'g', category: 'Vorratsschrank' },
        { name: 'TK-Blumenkohl-Röschen', amount: 400, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Passierte Tomaten', amount: 400, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Skyr Natur oder Magerquark', amount: 250, unit: 'g', category: 'Kühlregal' },
        { name: 'Milde Gemüsebrühe', amount: 300, unit: 'ml', category: 'Vorratsschrank' }
      ],
      steps: [
        'Den Basmatireis nach Packungsanweisung in leicht gesalzenem Wasser in ca. 12 Minuten locker garen.',
        'Die Kichererbsen in einem Sieb kalt abbrausen und abtropfen lassen; die roten Linsen ebenfalls kurz waschen.',
        'In einem großen Topf die passierten Tomaten und die milde Gemüsebrühe aufkochen, dann die roten Linsen und die kleinen Blumenkohlröschen hineingeben.',
        'Alles bei mittlerer Hitze abgedeckt 12 Minuten sanft köcheln lassen, bis die Linsen weich sind und die Soße natürlich andicken.',
        'Die abgetropften Kichererbsen dazugeben, 3 Minuten mitwärmen und für Kleinkinder einen Teil der Kichererbsen mit einer Gabel leicht andrücken.',
        'Den Topf vom Herd ziehen, den Skyr glatt unterrühren (nicht mehr kochen) und das milde Curry zum Basmatireis reichen.'
      ]
    },
    {
      id: 'rec-7',
      title: 'Puten-Schupfnudel-Pfanne',
      subtitle: 'Goldbraune Schupfnudeln mit süßem Mais, Erbsen & leichtem Kräuterquark-Dip',
      emoji: '🥟',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 15,
      prepTimePassive: 5,
      effortLevel: 'Minimal (Kühlregal-Hit)',
      fridgeDays: 4,
      freezerMonths: 1,
      toddlerNote: 'Weiche Schupfnudeln, super zum Aufspießen mit der Kindergabel',
      calories: 515,
      protein: 44,
      carbs: 56,
      fat: 11,
      basePortions: 4,
      ingredients: [
        { name: 'Frische Schupfnudeln (Kühlregal)', amount: 500, unit: 'g', category: 'Kühlregal' },
        { name: 'Putenbrustfilet (in feinen Streifen)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'TK-Erbsen (jung & zart)', amount: 250, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Zuckermais (Abtropfgewicht, Dose)', amount: 150, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Magerquark (für die schnelle Pfannensoße)', amount: 200, unit: 'g', category: 'Kühlregal' },
        { name: 'Milde Gemüsebrühe', amount: 150, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Rapsöl zum Anbraten', amount: 1, unit: 'EL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Das Putenbrustfilet trocken tupfen und in schmale, mundgerechte Streifen schneiden.',
        'Das Rapsöl in einer großen beschichteten Pfanne erhitzen und die Putenstreifen zusammen mit den frischen Schupfnudeln 5–6 Minuten goldbraun anbraten.',
        'Die tiefgekühlten Erbsen und den abgetropften Zuckermais direkt in die Pfanne geben und mit der milden Gemüsebrühe ablöschen.',
        'Alles mit aufgelegtem Deckel bei mittlerer Hitze 4–5 Minuten dünsten, bis die Erbsen zart sind und die Flüssigkeit leicht reduziert ist.',
        'Den Magerquark mit 2 EL warmem Wasser und milden Gartenkräutern glatt rühren.',
        'Die Pfanne vom Herd nehmen, den Kräuterquark unterheben (oder als Klecks dazu servieren) und direkt genießen.'
      ]
    },
    {
      id: 'rec-8',
      title: 'Rinder-Kartoffel-Gulasch',
      subtitle: 'Sämiger Familien-Eintopf mit weichen Kartoffelwürfeln, Karotten & Paprika',
      emoji: '🍲',
      accentColor: THEME_COLORS.BEEF,
      prepTimeActive: 15,
      prepTimePassive: 20,
      effortLevel: 'Gering (Ein-Topf-Wunder)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Alles in einem Löffel, Kartoffeln binden die Soße natürlich',
      calories: 505,
      protein: 42,
      carbs: 49,
      fat: 13,
      basePortions: 4,
      ingredients: [
        { name: 'Rinderhackfleisch (mager / Tartar)', amount: 550, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Vorwiegend festkochende Kartoffeln', amount: 750, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Rote Paprika (fein gewürfelt)', amount: 250, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Karotten (in dünnen Scheiben)', amount: 250, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Passierte Tomaten', amount: 400, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Milde Rinder- oder Gemüsebrühe', amount: 400, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Skyr oder Schmand Light zum Verfeinern', amount: 100, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Die Kartoffeln und Karotten schälen und in kleine, mundgerechte Würfel (ca. 1,5 cm) schneiden; die rote Paprika entkernen und ebenfalls fein würfeln.',
        'Einen großen Schmortopf erhitzen und das magere Rinderhackfleisch darin ohne zusätzliches Fett 4–5 Minuten krümelig anbraten.',
        'Kartoffel-, Karotten- und Paprikawürfel zum Hackfleisch geben und kurz 2 Minuten mitrösten.',
        'Mit den passierten Tomaten und der milden Brühe aufgießen, einmal aufkochen und mit edelsüßem Paprikapulver würzen.',
        'Den Eintopf bei geschlossenem Deckel auf mittlerer Stufe ca. 18–20 Minuten sanft köcheln lassen, bis die Kartoffeln weich sind.',
        'Vor dem Servieren den Skyr als milden, proteinreichen Klecks unterheben.'
      ]
    },
    {
      id: 'rec-9',
      title: 'Gnocchi-Hähnchen-Bake',
      subtitle: 'Direkt aus der Auflaufform mit süßen Kirschtomaten, Spinat & Mozzarella',
      emoji: '🍅',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 10,
      prepTimePassive: 25,
      effortLevel: 'Minimal (Kein Vorkochen)',
      fridgeDays: 4,
      freezerMonths: 2,
      toddlerNote: 'Kissenweiche Gnocchi, kein Schneiden am Tisch nötig',
      calories: 525,
      protein: 45,
      carbs: 55,
      fat: 12,
      basePortions: 4,
      ingredients: [
        { name: 'Frische Gnocchi (Kühlregal)', amount: 500, unit: 'g', category: 'Kühlregal' },
        { name: 'Hähnchenbrustfilet (klein gewürfelt)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Passierte Tomaten', amount: 400, unit: 'g', category: 'Vorratsschrank' },
        { name: 'TK-Blattspinat oder frischer Babyspinat', amount: 250, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Frischkäse Light (0,2%)', amount: 150, unit: 'g', category: 'Kühlregal' },
        { name: 'Geriebener Mozzarella light', amount: 100, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Den Backofen auf 200 °C Umluft vorheizen. Das Hähnchenbrustfilet in kleine, ca. 1,5 cm große Würfel schneiden.',
        'Die ungekochten Gnocchi direkt aus der Packung zusammen mit den Hähnchenwürfeln und dem Spinat in eine große Auflaufform geben.',
        'Die passierten Tomaten mit dem Frischkäse Light, 100 ml Wasser und milden italienischen Kräutern glatt verrühren.',
        'Die cremige Tomatensoße über die Gnocchi und das Hähnchen gießen und alles kurz durchmischen, damit alle Gnocchi bedeckt sind.',
        'Mit dem geriebenen Mozzarella light bestreuen und im heißen Ofen ca. 25 Minuten goldbraun backen.',
        'Kurz 5 Minuten ruhen lassen und direkt in Portionen teilen.'
      ]
    },
    {
      id: 'rec-10',
      title: 'Käsesspätzle mit Pute',
      subtitle: 'Saftiger Pfannen-Hit mit zarten Putenstreifen, Karotten & Hüttenkäse-Schmelz',
      emoji: '🧀',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 15,
      prepTimePassive: 10,
      effortLevel: 'Gering (Familien-Liebling)',
      fridgeDays: 4,
      freezerMonths: 2,
      toddlerNote: 'Milde Käsesoße mit verstecktem Hüttenkäse & weichen Karotten',
      calories: 540,
      protein: 47,
      carbs: 54,
      fat: 13,
      basePortions: 4,
      ingredients: [
        { name: 'Frische Eierspätzle (Kühlregal)', amount: 500, unit: 'g', category: 'Kühlregal' },
        { name: 'Putenbrustfilet (mundgerecht)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Karotten (fein gestiftelt oder gerieben)', amount: 300, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'TK-Erbsen', amount: 200, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Körniger Frischkäse (püriert als Soßenbasis)', amount: 250, unit: 'g', category: 'Kühlregal' },
        { name: 'Geriebener milder Reibekäse light', amount: 100, unit: 'g', category: 'Kühlregal' },
        { name: 'Milde Gemüsebrühe', amount: 150, unit: 'ml', category: 'Vorratsschrank' }
      ],
      steps: [
        'Das Putenbrustfilet in kleine Würfel schneiden und die Karotten schälen sowie fein raspeln oder in sehr dünne Stifte schneiden.',
        'In einer großen Pfanne die Putenwürfel bei mittlerer bis hoher Hitze 4–5 Minuten rundherum anbraten.',
        'Die frischen Eierspätzle, die Karottenraspel und die TK-Erbsen dazugeben, mit der Gemüsebrühe ablöschen und abgedeckt 5 Minuten dünsten.',
        'Den körnigen Frischkäse unterrühren und den geriebenen Käse darüberstreuen.',
        'Bei schwacher Hitze unter Rühren 2 Minuten schmelzen lassen, bis eine herrlich cremige Käsespätzle-Pfanne entsteht.',
        'Nach Wunsch mit etwas Schnittlauch bestreuen und servieren.'
      ]
    },
    {
      id: 'rec-11',
      title: 'Seelachs-Reis-Gratin',
      subtitle: 'Saftiges Fischfilet auf lockerem Reisbett mit Rahm-Brokkoli aus dem Ofen',
      emoji: '🐟',
      accentColor: THEME_COLORS.FISH,
      prepTimeActive: 15,
      prepTimePassive: 20,
      effortLevel: 'Gering (Ofengericht)',
      fridgeDays: 3,
      freezerMonths: 2,
      toddlerNote: 'Sehr zarter weißer Fisch, zerfällt weich auf der Gabel',
      calories: 490,
      protein: 43,
      carbs: 56,
      fat: 9,
      basePortions: 4,
      ingredients: [
        { name: 'Seelachs- oder Kabeljaufilet (grätenfrei)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Parboiled-Reis (ungekocht)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'TK-Brokkoli-Röschen', amount: 450, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Frischkäse Light mit Kräutern', amount: 150, unit: 'g', category: 'Kühlregal' },
        { name: 'Fettarme Milch (1,5%)', amount: 200, unit: 'ml', category: 'Kühlregal' },
        { name: 'Geriebener Gouda light', amount: 80, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Den Parboiled-Reis nach Packungsanweisung in leicht gesalzenem Wasser vorkochen; in den letzten 4 Minuten die TK-Brokkoliröschen direkt im selben Topf mitgaren.',
        'Den Backofen auf 190 °C Umluft vorheizen. Reis und Brokkoli abgießen und auf dem Boden einer Auflaufform verteilen.',
        'Das grätenfreie Seelachsfilet in 4–8 gleichmäßige Stücke schneiden und auf das Reis-Brokkoli-Bett legen.',
        'Die fettarme Milch mit dem Kräuter-Frischkäse Light glatt verquirlen und gleichmäßig über Fisch und Reis gießen.',
        'Mit dem geriebenen Gouda light bestreuen und im Ofen ca. 18–20 Minuten backen, bis der Fisch saftig durchgegart ist.',
        'Aus dem Ofen nehmen und kindgerecht abkühlen lassen.'
      ]
    },
    {
      id: 'rec-12',
      title: 'Rote-Linsen-Lasagne',
      subtitle: 'Proteinreicher Familien-Auflauf ohne Vorkochen mit Zucchini & Hüttenkäse-Schicht',
      emoji: '🌱',
      accentColor: THEME_COLORS.VEGGIE,
      prepTimeActive: 15,
      prepTimePassive: 30,
      effortLevel: 'Gering (Vegetarisch)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Butterweiche Nudelschichten, sehr mild und sämig',
      calories: 510,
      protein: 38,
      carbs: 63,
      fat: 10,
      basePortions: 4,
      ingredients: [
        { name: 'Lasagneplatten (ohne Vorkochen)', amount: 200, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Rote Linsen (trocken)', amount: 200, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Zucchini & Karotte (fein gerieben)', amount: 350, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Passierte Tomaten', amount: 600, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Milde Gemüsebrühe', amount: 300, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Körniger Frischkäse (als Béchamel-Ersatz)', amount: 300, unit: 'g', category: 'Kühlregal' },
        { name: 'Geriebener Mozzarella light', amount: 100, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Den Backofen auf 190 °C Umluft vorheizen. Zucchini und Karotte fein raspeln und die roten Linsen in einem Sieb kurz kalt abspülen.',
        'In einer Schüssel die passierten Tomaten, die Gemüsebrühe, die gewaschenen roten Linsen, das geraspelte Gemüse und milde Kräuter verrühren.',
        'Den Boden einer Auflaufform mit einer Kelle Linsen-Tomaten-Soße bedecken und eine Schicht Lasagneplatten darauflegen.',
        'Abwechselnd Soße, Lasagneplatten und Kleckse vom körnigen Frischkäse einschichten und mit einer großzügigen Schicht Soße abschließen.',
        'Mit dem geriebenen Mozzarella light bestreuen und im Ofen ca. 30–35 Minuten backen, bis die Linsen und Nudelplatten butterweich sind.',
        'Vor dem Anschneiden 5 Minuten ruhen lassen, damit sich die Schichten perfekt setzen.'
      ]
    }
  ];

  // ============================================================================
  // 2. GENERATOR FÜR DIE WEITEREN 288 REZEPTE (rec-13 bis rec-300)
  //    Kombinatorik: 6 Proteine × 8 Beilagen × 6 Gemüse-/Soßen-Stile = 288 Rezepte
  //    Jedes Rezept erhält einen kurzen Fokus-Titel (max. 26 Zeichen) und
  //    lagert die Beilage sowie das Gemüse sauber in den Untertitel aus!
  // ============================================================================
  const PROTEINS = [
    {
      shortTitlePrefix: 'Hähnchen',
      ingName: 'Hähnchenbrustfilet (mundgerecht)',
      amount: 600,
      unit: 'g',
      category: 'Fleisch & Frische',
      emoji: '🍗',
      themeColor: THEME_COLORS.POULTRY,
      cal: 165,
      prot: 34,
      fat: 3,
      prepStep: 'Das Hähnchenbrustfilet trocken tupfen, in kleine mundgerechte Würfel (ca. 2 cm) schneiden und in einer heißen Pfanne mit 1 TL Rapsöl 4–5 Minuten goldbraun anbraten.'
    },
    {
      shortTitlePrefix: 'Puten',
      ingName: 'Putenbrustfilet (in feinen Streifen)',
      amount: 600,
      unit: 'g',
      category: 'Fleisch & Frische',
      emoji: '🦃',
      themeColor: THEME_COLORS.POULTRY,
      cal: 160,
      prot: 35,
      fat: 2,
      prepStep: 'Das Putenbrustfilet in zarte, kindgerechte Streifen schneiden und in einer großen beschichteten Pfanne bei mittlerer Hitze 4 Minuten rundherum hellbraun anbraten.'
    },
    {
      shortTitlePrefix: 'Rinderhack',
      ingName: 'Rinderhackfleisch (mager)',
      amount: 550,
      unit: 'g',
      category: 'Fleisch & Frische',
      emoji: '🥩',
      themeColor: THEME_COLORS.BEEF,
      cal: 195,
      prot: 31,
      fat: 8,
      prepStep: 'Das magere Rinderhackfleisch in einem heißen Topf oder einer tiefen Pfanne ohne zusätzliches Fett 5 Minuten feinkrümelig und braun anbraten.'
    },
    {
      shortTitlePrefix: 'Lachs',
      ingName: 'Lachsfilet (grätenfrei gewürfelt)',
      amount: 500,
      unit: 'g',
      category: 'Fleisch & Frische',
      emoji: '🐟',
      themeColor: THEME_COLORS.FISH,
      cal: 215,
      prot: 27,
      fat: 12,
      prepStep: 'Das Lachsfilet sorgfältig auf Gräten prüfen, in 2,5 cm große Würfel schneiden und erst für die letzten 6–7 Minuten sanft in der warmen Soße gar ziehen lassen.'
    },
    {
      shortTitlePrefix: 'Seelachs',
      ingName: 'Seelachsfilet (zarte Stücke)',
      amount: 600,
      unit: 'g',
      category: 'Fleisch & Frische',
      emoji: '🐠',
      themeColor: THEME_COLORS.FISH,
      cal: 135,
      prot: 29,
      fat: 2,
      prepStep: 'Das grätenfreie Seelachsfilet trocken tupfen, in mundgerechte Stücke teilen und schonend in der köchelnden Soße 6–8 Minuten pochieren, bis es zart zerfällt.'
    },
    {
      shortTitlePrefix: 'Linsen-Quark',
      ingName: 'Rote Linsen & Körniger Frischkäse Mix',
      amount: 450,
      unit: 'g',
      category: 'Vorratsschrank',
      emoji: '🌱',
      themeColor: THEME_COLORS.VEGGIE,
      cal: 170,
      prot: 26,
      fat: 3,
      prepStep: 'Die roten Linsen in einem Sieb kalt abbrausen, direkt in der Brühe 10–12 Minuten weich kochen und am Ende den körnigen Frischkäse für extra Protein unterheben.'
    }
  ];

  const SIDES = [
    {
      sideSubtitle: 'dazu lockerer Basmatireis',
      ingName: 'Basmatireis (ungekocht)',
      amount: 260,
      unit: 'g',
      category: 'Vorratsschrank',
      cal: 230,
      prot: 5,
      carbs: 50,
      fat: 1,
      cookStep: 'Den Basmatireis in einem Sieb kalt abspülen und in der doppelten Menge leicht gesalzenem Wasser abgedeckt 12–14 Minuten locker garen.'
    },
    {
      sideSubtitle: 'mit milden Kartoffelwürfeln',
      ingName: 'Festkochende Kartoffeln (gewürfelt)',
      amount: 800,
      unit: 'g',
      category: 'Obst & Gemüse',
      cal: 150,
      prot: 4,
      carbs: 32,
      fat: 0,
      cookStep: 'Die Kartoffeln schälen, in kleine mundgerechte Würfel (ca. 1,5 cm) schneiden und in leicht gesalzenem Wasser oder direkt im Sud 14–16 Minuten weich garen.'
    },
    {
      sideSubtitle: 'auf cremigem Süßkartoffel-Stampf',
      ingName: 'Süßkartoffeln & Kartoffeln (für Stampf)',
      amount: 800,
      unit: 'g',
      category: 'Obst & Gemüse',
      cal: 165,
      prot: 3,
      carbs: 36,
      fat: 0,
      cookStep: 'Die Süßkartoffeln und Kartoffeln schälen, grob würfeln, in 15 Minuten weich kochen, abgießen und mit einem Schuss Milch zu einem feinen Püree stampfen.'
    },
    {
      sideSubtitle: 'mit bissfesten Vollkorn-Spirelli',
      ingName: 'Vollkorn-Spirelli',
      amount: 300,
      unit: 'g',
      category: 'Vorratsschrank',
      cal: 255,
      prot: 9,
      carbs: 50,
      fat: 2,
      cookStep: 'Die Vollkorn-Spirelli in reichlich kochendem, leicht gesalzenem Wasser nach Packungsanweisung in 9–10 Minuten weich, aber noch gut greifbar garen.'
    },
    {
      sideSubtitle: 'mit weichen Kartoffel-Gnocchi',
      ingName: 'Frische Kartoffel-Gnocchi (Kühlregal)',
      amount: 500,
      unit: 'g',
      category: 'Kühlregal',
      cal: 195,
      prot: 5,
      carbs: 41,
      fat: 1,
      cookStep: 'Die frischen Gnocchi direkt aus der Packung in die Pfanne oder den Sud geben und in nur 3–4 Minuten kissenweich durchwärmen.'
    },
    {
      sideSubtitle: 'mit goldbraunen Schupfnudeln',
      ingName: 'Frische Schupfnudeln (Kühlregal)',
      amount: 500,
      unit: 'g',
      category: 'Kühlregal',
      cal: 210,
      prot: 5,
      carbs: 40,
      fat: 3,
      cookStep: 'Die frischen Schupfnudeln in einer beschichteten Pfanne 4–5 Minuten goldbraun anbraten oder direkt im Gericht sanft mitziehen lassen.'
    },
    {
      sideSubtitle: 'mit zarten Eierspätzle',
      ingName: 'Frische Eierspätzle (Kühlregal)',
      amount: 500,
      unit: 'g',
      category: 'Kühlregal',
      cal: 220,
      prot: 8,
      carbs: 42,
      fat: 3,
      cookStep: 'Die frischen Eierspätzle kurz in der Pfanne mit etwas Brühe 3–4 Minuten schwenken, bis sie die Soße perfekt aufnehmen.'
    },
    {
      sideSubtitle: 'auf lockerem Couscous',
      ingName: 'Couscous (schnellgarende Körner)',
      amount: 260,
      unit: 'g',
      category: 'Vorratsschrank',
      cal: 235,
      prot: 8,
      carbs: 47,
      fat: 1,
      cookStep: 'Den Couscous in einer Schüssel mit 300 ml kochend heißer, milder Gemüsebrühe übergießen, abdecken und 5 Minuten quellen lassen, danach mit einer Gabel auflockern.'
    }
  ];

  const STYLES = [
    {
      shortStyleSuffix: 'Rahm-Pfanne',
      vegSubtitle: 'Süßliche Erbsen & zarte Möhren in leichter Frischkäse-Rahmsoße',
      vegIng: { name: 'TK-Erbsen und Möhren', amount: 420, unit: 'g', category: 'Tiefkühlung' },
      dairyIng: { name: 'Frischkäse Light & Skyr Mix', amount: 220, unit: 'g', category: 'Kühlregal' },
      liquidIng: { name: 'Milde Gemüsebrühe', amount: 250, unit: 'ml', category: 'Vorratsschrank' },
      toddlerNote: 'Weiche Erbsen & Möhren, komplett ohne scharfe Gewürze',
      effortLevel: 'Minimal (TK-Gemüse)',
      prepActive: 15,
      prepPassive: 10,
      cal: 105,
      prot: 9,
      carbs: 11,
      fat: 3,
      sauceStep: 'Die tiefgekühlten Erbsen und Möhren dazugeben, mit der milden Gemüsebrühe ablöschen und abgedeckt 8–10 Minuten sanft dünsten. Anschließend den Frischkäse-Skyr-Mix glatt einrühren.'
    },
    {
      shortStyleSuffix: 'Tomaten-Topf',
      vegSubtitle: 'Fein geraspelte Zucchini & Paprika in cremiger Tomaten-Hüttenkäse-Soße',
      vegIng: { name: 'Zucchini & rote Paprika (fein gewürfelt)', amount: 400, unit: 'g', category: 'Obst & Gemüse' },
      dairyIng: { name: 'Körniger Frischkäse (Hüttenkäse light)', amount: 250, unit: 'g', category: 'Kühlregal' },
      liquidIng: { name: 'Passierte Tomaten', amount: 450, unit: 'g', category: 'Vorratsschrank' },
      toddlerNote: 'Fruchtig-milde Tomatensoße mit geschmolzenem Hüttenkäse',
      effortLevel: 'Gering (One-Pot)',
      prepActive: 15,
      prepPassive: 15,
      cal: 115,
      prot: 11,
      carbs: 12,
      fat: 2,
      sauceStep: 'Die fein gewürfelte Zucchini und Paprika kurz mitdünsten, mit den passierten Tomaten aufgießen und 10 Minuten sanft köcheln lassen. Zum Schluss den körnigen Frischkäse cremig unterheben.'
    },
    {
      shortStyleSuffix: 'Brokkoli-Gratin',
      vegSubtitle: 'Weiche Brokkoli-Röschen mit goldbrauner Käse-Quark-Haube aus dem Ofen',
      vegIng: { name: 'Brokkoli-Röschen (TK oder frisch)', amount: 450, unit: 'g', category: 'Tiefkühlung' },
      dairyIng: { name: 'Magerquark & geriebener Mozzarella light', amount: 240, unit: 'g', category: 'Kühlregal' },
      liquidIng: { name: 'Milde Gemüsebrühe & Milch (1,5%)', amount: 250, unit: 'ml', category: 'Kühlregal' },
      toddlerNote: 'Butterweiche Brokkoliröschen unter milder Käsekruste',
      effortLevel: 'Sehr gering (Ofen-Job)',
      prepActive: 15,
      prepPassive: 25,
      cal: 130,
      prot: 13,
      carbs: 8,
      fat: 5,
      sauceStep: 'Die kleinen Brokkoliröschen untermischen, die Brühe-Milch-Mischung mit dem Magerquark verquirlen, darüberرجießen, mit Mozzarella light bestreuen und bei 200 °C Umluft 20–25 Minuten überbacken.'
    },
    {
      shortStyleSuffix: 'Kokos-Curry',
      vegSubtitle: 'Zarter Blattspinat & Karotten in milder, gelber Kurkuma-Kokos-Soße',
      vegIng: { name: 'TK-Blattspinat & feine Karottenstifte', amount: 400, unit: 'g', category: 'Tiefkühlung' },
      dairyIng: { name: 'Skyr Natur (für extra Protein)', amount: 180, unit: 'g', category: 'Kühlregal' },
      liquidIng: { name: 'Kokosmilch Light (fettreduziert)', amount: 350, unit: 'ml', category: 'Vorratsschrank' },
      toddlerNote: 'Samtig-mildes Familiencurry mit Kurkuma statt Chili',
      effortLevel: 'Minimal (Schnellgericht)',
      prepActive: 15,
      prepPassive: 10,
      cal: 125,
      prot: 8,
      carbs: 9,
      fat: 6,
      sauceStep: 'Den Blattspinat und die feinen Karottenstifte mit der leichten Kokosmilch und einer Prise Kurkuma 8–10 Minuten sanft köcheln lassen, dann vom Herd ziehen und den Skyr glatt einrühren.'
    },
    {
      shortStyleSuffix: 'Mais-Pfanne',
      vegSubtitle: 'Süßer Goldmais & Paprikawürfel in milder Kräuterquark-Rahmsoße',
      vegIng: { name: 'Zuckermais & milde Paprikawürfel', amount: 380, unit: 'g', category: 'Vorratsschrank' },
      dairyIng: { name: 'Magerquark & Frischkäse Light', amount: 220, unit: 'g', category: 'Kühlregal' },
      liquidIng: { name: 'Milde Gemüsebrühe', amount: 200, unit: 'ml', category: 'Vorratsschrank' },
      toddlerNote: 'Natürliche Süße durch Mais, sehr beliebt bei Kleinkindern',
      effortLevel: 'Minimal (15-Minuten-Hit)',
      prepActive: 15,
      prepPassive: 8,
      cal: 120,
      prot: 10,
      carbs: 15,
      fat: 2,
      sauceStep: 'Den abgetropften Zuckermais und die feinen Paprikawürfel dazugeben, mit der milden Gemüsebrühe ablöschen, 6–8 Minuten dünsten und die Magerquark-Frischkäse-Creme mit milden Kräutern unterrühren.'
    },
    {
      shortStyleSuffix: 'Blumenkohl-Topf',
      vegSubtitle: 'Butterweiche Blumenkohl-Röschen in sämiger Käse-Hüttenkäse-Soße',
      vegIng: { name: 'TK-Blumenkohl-Röschen (klein geteilt)', amount: 450, unit: 'g', category: 'Tiefkühlung' },
      dairyIng: { name: 'Körniger Frischkäse & milder Reibekäse light', amount: 230, unit: 'g', category: 'Kühlregal' },
      liquidIng: { name: 'Fettarme Milch (1,5%) & Brühe', amount: 250, unit: 'ml', category: 'Kühlregal' },
      toddlerNote: 'Blumenkohl lässt sich leicht mit der Gabel zerdrücken',
      effortLevel: 'Gering (Familien-Klassiker)',
      prepActive: 15,
      prepPassive: 15,
      cal: 125,
      prot: 12,
      carbs: 8,
      fat: 4,
      sauceStep: 'Die kleinen Blumenkohlröschen in der Milch-Brühe-Mischung abgedeckt 10–12 Minuten butterweich garen und anschließend den körnigen Frischkäse sowie den milden Reibekäse in der Soße schmelzen lassen.'
    }
  ];

  const generatedRecipes = [...BASE_SIGNATURE_RECIPES];
  let currentIdNum = 13;

  for (let sIdx = 0; sIdx < STYLES.length; sIdx++) {
    for (let pIdx = 0; pIdx < PROTEINS.length; pIdx++) {
      for (let sideIdx = 0; sideIdx < SIDES.length; sideIdx++) {
        const prot = PROTEINS[pIdx];
        const side = SIDES[sideIdx];
        const style = STYLES[sIdx];

        // Kurzer, prägnanter Hauptgericht-Titel (immer unter 28 Zeichen!)
        const shortTitle = `${prot.shortTitlePrefix}-${style.shortStyleSuffix}`;

        // Beschreibender Untertitel mit Beilage + Gemüse/Soßen-Info
        const fullSubtitle = `${style.vegSubtitle} – ${side.sideSubtitle}`;

        const totalCalories = Math.round(prot.cal + side.cal + style.cal);
        const totalProtein = Math.round(prot.prot + side.prot + style.prot);
        const totalCarbs = Math.round(side.carbs + style.carbs);
        const totalFat = Math.round(prot.fat + side.fat + style.fat);

        generatedRecipes.push({
          id: `rec-${currentIdNum}`,
          title: shortTitle,
          subtitle: fullSubtitle,
          emoji: prot.emoji,
          accentColor: prot.themeColor,
          prepTimeActive: style.prepActive,
          prepTimePassive: style.prepPassive,
          effortLevel: style.effortLevel,
          fridgeDays: prot.shortTitlePrefix.includes('Lachs') || prot.shortTitlePrefix.includes('Seelachs') ? 3 : 4,
          freezerMonths: side.ingName.includes('Schupfnudeln') ? 1 : 3,
          toddlerNote: style.toddlerNote,
          calories: totalCalories,
          protein: totalProtein,
          carbs: totalCarbs,
          fat: totalFat,
          basePortions: 4,
          ingredients: [
            { name: prot.ingName, amount: prot.amount, unit: prot.unit, category: prot.category },
            { name: side.ingName, amount: side.amount, unit: side.unit, category: side.category },
            style.vegIng,
            style.dairyIng,
            style.liquidIng,
            { name: 'Rapsöl & milde Familien-Kräuter', amount: 1, unit: 'EL', category: 'Vorratsschrank' }
          ],
          steps: [
            `Vorbereitung der Beilage: ${side.cookStep}`,
            `Hauptkomponente garen: ${prot.prepStep}`,
            `Gemüse & cremige Soße: ${style.sauceStep}`,
            'Beilage und Hauptgericht vorsichtig vermengen (oder für den Wochenplan getrennt in luftdichte Meal-Prep-Boxen füllen) und mild abschmecken.'
          ]
        });

        currentIdNum++;
      }
    }
  }

  window.MEALMATE_RECIPES = generatedRecipes;
})();
