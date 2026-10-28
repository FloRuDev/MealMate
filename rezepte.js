// ============================================================================
// MEALMATE DATENBASIS v2.0: 300 KURATIERTE FAMILIEN-MEAL-PREP-REZEPTE
// ============================================================================
// Besteht aus:
// 1. 30 handverlesenen Familien-Klassikern (rec-1 bis rec-30)
// 2. 18 echten Gerichte-Welten mit je 3 stimmigen Proteinen & 5 passenden
//    Beilagen = 270 weitere authentische Rezepte (rec-31 bis rec-300)
// Keine unpassenden Cross-Over-Kombinationen (wie Kokos-Curry mit Spätzle).
// ============================================================================

(function () {
  const ACCENT_GRADIENTS = [
    'from-emerald-600 to-teal-700',
    'from-amber-500 to-orange-600',
    'from-rose-500 to-orange-600',
    'from-cyan-600 to-blue-700',
    'from-indigo-600 to-purple-700',
    'from-teal-500 to-emerald-700',
    'from-red-600 to-rose-700',
    'from-orange-600 to-amber-700'
  ];

  // ==========================================================================
  // TEIL 1: 30 HANDVERLESENE FAMILIEN-KLASSIKER (SIGNATURE RECIPES)
  // ==========================================================================
  const SIGNATURE_RECIPES = [
    {
      id: 'rec-1',
      title: 'Cremiges Hähnchen-Frikassee mit Basmatireis',
      subtitle: 'Süßliche Erbsen & zarte Möhren in leichter Frischkäse-Zitronen-Soße',
      emoji: '🍚',
      accentColor: 'from-emerald-600 to-teal-700',
      prepTimeActive: 15,
      prepTimePassive: 15,
      effortLevel: 'Minimal (TK-Gemüse)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Weiche Textur, mild-süßlich wie bei Oma',
      calories: 510,
      protein: 44,
      carbs: 58,
      fat: 9,
      basePortions: 4,
      ingredients: [
        { name: 'Basmatireis (ungekocht)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Hähnchenbrustfilet (klein gewürfelt)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'TK-Erbsen und junge Möhren', amount: 400, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Fettarme Milch (1,5%)', amount: 250, unit: 'ml', category: 'Kühlregal' },
        { name: 'Milde Hühner- oder Gemüsebrühe', amount: 250, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Frischkäse Light (Natur)', amount: 120, unit: 'g', category: 'Kühlregal' },
        { name: 'Rapsöl zum Anbraten', amount: 1, unit: 'EL', category: 'Vorratsschrank' },
        { name: 'Zitronensaft & Prise Muskatnuss', amount: 1, unit: 'Spritzer', category: 'Vorratsschrank' }
      ],
      steps: [
        'Den Basmatireis in einem Sieb kalt abspülen und nach Packungsanweisung in leicht gesalzenem Wasser bei schwacher Hitze ca. 12–15 Minuten locker garen.',
        'Währenddessen das Hähnchenbrustfilet trocken tupfen und in kleine, mundgerechte Würfel (ca. 2 cm) schneiden.',
        'Das Rapsöl in einer großen, tiefen Pfanne erhitzen und die Hähnchenwürfel darin bei mittlerer bis hoher Hitze rundherum 4–5 Minuten hellgold anbraten.',
        'Mit der milden Brühe und der fettarmen Milch ablöschen, die tiefgekühlten Erbsen und Möhren direkt dazugeben und alles abgedeckt 10–12 Minuten sanft köcheln lassen, bis das Gemüse weich ist.',
        'Die Pfanne auf niedrige Stufe schalten, den Frischkäse Light mit einem Schneebesen glatt einrühren und die Soße mit einem Spritzer Zitronensaft sowie einer Prise Muskatnuss mild abschmecken.',
        'Den gegarten Reis mit einer Gabel auflockern und zusammen mit dem cremigen Hähnchen-Frikassee servieren.'
      ]
    },
    {
      id: 'rec-2',
      title: 'Kartoffel-Hähnchen-Auflauf mit Brokkoli & Hüttenkäse-Kruste',
      subtitle: 'Bequemes Ofengericht mit butterweichen Kartoffeln & verstecktem Protein-Guss',
      emoji: '🥘',
      accentColor: 'from-amber-500 to-orange-600',
      prepTimeActive: 15,
      prepTimePassive: 30,
      effortLevel: 'Sehr gering (Ofen-Job)',
      fridgeDays: 4,
      freezerMonths: 2,
      toddlerNote: 'Kleine Kartoffelwürfel & milde Käsekruste',
      calories: 520,
      protein: 45,
      carbs: 48,
      fat: 14,
      basePortions: 4,
      ingredients: [
        { name: 'Festkochende Kartoffeln (klein gewürfelt)', amount: 800, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Hähnchenbrustfilet (mundgerecht)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Brokkoli-Röschen (frisch oder TK)', amount: 500, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Körniger Frischkäse (Hüttenkäse Light)', amount: 400, unit: 'g', category: 'Kühlregal' },
        { name: 'Milde Gemüsebrühe', amount: 200, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Geriebener Gouda oder Mozzarella Light', amount: 100, unit: 'g', category: 'Kühlregal' },
        { name: 'Paprika edelsüß & milde Kräuter', amount: 1, unit: 'TL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Den Backofen auf 200 °C Umluft vorheizen. Die Kartoffeln schälen und in kleine, gleichmäßige Würfel (ca. 1,5 cm) schneiden, damit sie im Ofen zuverlässig durchgaren.',
        'Den Brokkoli in sehr kleine, mundgerechte Röschen teilen und das Hähnchenbrustfilet in etwa 2 cm große Stücke würfeln.',
        'Kartoffelwürfel, Brokkoliröschen und Hähnchenstücke direkt in einer großen Auflaufform gründlich miteinander vermischen.',
        'Für den Guss den körnigen Frischkäse zusammen mit der warmen Gemüsebrühe, dem edelsüßen Paprikapulver und den milden Kräutern kurz glatt pürieren oder kräftig verquirlen.',
        'Die Hüttenkäse-Soße gleichmäßig über das Gemüse und Fleisch gießen und alles mit dem geriebenen Käse bestreuen.',
        'Den Auflauf auf mittlerer Schiene ca. 30–35 Minuten goldbraun backen, bis die Kartoffelwürfel beim Einstechen mit einer Gabel butterweich sind.'
      ]
    },
    {
      id: 'rec-3',
      title: 'Ofen-Hähnchenfrikadellen mit Süßkartoffel-Kartoffel-Stampf',
      subtitle: 'Saftige Gemüse-Bratlinge vom Blech – ideal als Fingerfood für Kleinkinder',
      emoji: '🧆',
      accentColor: 'from-rose-500 to-orange-600',
      prepTimeActive: 20,
      prepTimePassive: 20,
      effortLevel: 'Mittel (Kein Braten am Herd)',
      fridgeDays: 3,
      freezerMonths: 3,
      toddlerNote: 'Perfekt für kleine Hände, süßlicher Stampf',
      calories: 495,
      protein: 46,
      carbs: 47,
      fat: 12,
      basePortions: 4,
      ingredients: [
        { name: 'Hähnchen- oder Putenhackfleisch (mager)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Zarte Haferflocken', amount: 60, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Magerquark', amount: 150, unit: 'g', category: 'Kühlregal' },
        { name: 'Ei (Größe M)', amount: 1, unit: 'Stück', category: 'Kühlregal' },
        { name: 'Karotte (fein gerieben)', amount: 150, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Süßkartoffeln', amount: 450, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Mehligkochende Kartoffeln', amount: 450, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Fettarme Milch für den Stampf', amount: 100, unit: 'ml', category: 'Kühlregal' }
      ],
      steps: [
        'Den Backofen auf 200 °C Umluft vorheizen und ein Backblech mit Backpapier auslegen. Die Karotte schälen und auf einer feinen Reibe direkt in eine Schüssel raspeln.',
        'Das Geflügelhackfleisch mit Magerquark, Ei, zarten Haferflocken, Karottenraspeln und milden Kräutern gründlich verkneten und 5 Minuten ziehen lassen.',
        'Mit angefeuchteten Händen 12 kleine, flache Frikadellen formen, auf das Blech setzen und im Ofen ca. 20 Minuten saftig backen.',
        'Parallel Süßkartoffeln und Kartoffeln schälen, grob würfeln und in leicht gesalzenem Wasser ca. 15 Minuten weich kochen.',
        'Das Wasser abgießen, die erwärmte Milch dazugeben und alles mit einem Kartoffelstampfer zu einem feinen Püree verarbeiten.',
        'Den cremigen Stampf zusammen mit den warmen Ofen-Frikadellen servieren.'
      ]
    },
    {
      id: 'rec-4',
      title: 'Versteckte-Gemüse-Bolognese mit Vollkorn-Spirelli',
      subtitle: 'Mageres Rinderhack & rote Linsen vereint für doppeltes Eiweiß und Sämigkeit',
      emoji: '🍝',
      accentColor: 'from-red-600 to-rose-700',
      prepTimeActive: 15,
      prepTimePassive: 20,
      effortLevel: 'Gering (1-Topf-Soße)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Gemüse & Linsen kochen komplett weich in der Soße',
      calories: 540,
      protein: 48,
      carbs: 56,
      fat: 11,
      basePortions: 4,
      ingredients: [
        { name: 'Mageres Rinderhackfleisch (5% Fett)', amount: 500, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Rote Linsen (trocken)', amount: 120, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Passierte Tomaten', amount: 700, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Zucchini (fein gerieben)', amount: 250, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Karotten (fein gerieben)', amount: 200, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Vollkorn-Spirelli oder Spaghetti', amount: 300, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Milde Gemüsebrühe', amount: 300, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Italienische Kräuter (mild)', amount: 1, unit: 'TL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Zucchini waschen und Karotten schälen. Beides auf der feinen Seite einer Küchenreibe raspeln, damit das Gemüse später fast unsichtbar in der Soße aufgeht.',
        'Einen großen Topf erhitzen und das magere Rinderhackfleisch darin bei kräftiger Hitze 5 Minuten krümelig anbraten.',
        'Die fein geriebenen Zucchini und Karotten sowie die italienischen Kräuter dazugeben und 2–3 Minuten weich dünsten.',
        'Die roten Linsen kalt abspülen, mit in den Topf geben und mit den passierten Tomaten sowie der Gemüsebrühe ablöschen.',
        'Abgedeckt bei kleiner bis mittlerer Hitze 18–20 Minuten sanft köcheln lassen, bis die Linsen weich zerfallen und die Soße sämig bindet.',
        'Parallel die Vollkornnudeln nach Packungsanweisung al dente kochen, abgießen und mit der Linsen-Bolognese vermengen.'
      ]
    },
    {
      id: 'rec-5',
      title: 'Mildes Puten-Süßkartoffel-Chili (ohne Schärfe)',
      subtitle: 'Bunter Familien-Eintopf mit Goldmais, Kidneybohnen & Joghurt-Klecks',
      emoji: '🍲',
      accentColor: 'from-orange-600 to-amber-700',
      prepTimeActive: 15,
      prepTimePassive: 20,
      effortLevel: 'Sehr gering (One-Pot)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Süßlicher Mais & weiche Süßkartoffel statt Chili',
      calories: 505,
      protein: 45,
      carbs: 54,
      fat: 10,
      basePortions: 4,
      ingredients: [
        { name: 'Putenbrustfilet oder Putenhack', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Süßkartoffeln (klein gewürfelt)', amount: 500, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Kidneybohnen (Dose, abgetropft)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Süßer Goldmais (Dose, abgetropft)', amount: 150, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Stückige Tomaten (Dose)', amount: 800, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Milde Gemüsebrühe', amount: 250, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Griechischer Joghurt (2% Fett)', amount: 150, unit: 'g', category: 'Kühlregal' },
        { name: 'Paprikapulver edelsüß', amount: 1, unit: 'EL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Süßkartoffeln schälen und in kleine, mundgerechte Würfel (ca. 1,5 cm) schneiden. Das Putenfleisch ebenfalls fein würfeln.',
        'In einem großen Topf das Putenfleisch bei mittlerer bis hoher Hitze 4 Minuten rundherum anbraten.',
        'Süßkartoffelwürfel und edelsüßes Paprikapulver dazugeben und 1–2 Minuten kurz mitrösten.',
        'Mit stückigen Tomaten und milder Brühe ablöschen und abgedeckt bei schwacher Hitze ca. 15 Minuten köcheln lassen, bis die Süßkartoffeln weich sind.',
        'Kidneybohnen und Goldmais in einem Sieb kalt abspülen, in den letzten 5 Minuten unterheben und sanft mitwärmen.',
        'Das milde Familien-Chili in tiefen Tellern anrichten und jeweils mit einem Klecks griechischem Joghurt toppen.'
      ]
    },
    {
      id: 'rec-6',
      title: 'Zartes Lachs-Reis-Blech mit Erbsen & Zitronen-Skyr-Dip',
      subtitle: 'Wertvolle Omega-3-Fettsäuren & null Aufwand am Herd',
      emoji: '🐟',
      accentColor: 'from-cyan-600 to-blue-700',
      prepTimeActive: 10,
      prepTimePassive: 20,
      effortLevel: 'Minimal (10 Min. Vorbereitung)',
      fridgeDays: 3,
      freezerMonths: 2,
      toddlerNote: 'Grätenfreies Filet zerfällt butterzart',
      calories: 535,
      protein: 42,
      carbs: 52,
      fat: 16,
      basePortions: 4,
      ingredients: [
        { name: 'Lachsfilet ohne Haut & Gräten', amount: 500, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Basmatireis (ungekocht)', amount: 260, unit: 'g', category: 'Vorratsschrank' },
        { name: 'TK-Erbsen (jung & zart)', amount: 350, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Skyr Natur', amount: 250, unit: 'g', category: 'Kühlregal' },
        { name: 'Junge Karotten (in dünnen Scheiben)', amount: 250, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Zitronensaft & frischer Dill', amount: 1, unit: 'EL', category: 'Obst & Gemüse' }
      ],
      steps: [
        'Den Backofen auf 190 °C Umluft vorheizen. Die Karotten schälen und in sehr dünne Scheiben schneiden.',
        'Basmatireis zusammen mit den Karottenscheiben und der doppelten Menge leicht gesalzenem Wasser aufkochen und abgedeckt 12–15 Minuten quellen lassen.',
        'In den letzten 4 Minuten der Garzeit die tiefgekühlten Erbsen direkt auf den Reis geben und im Dampf zart garen.',
        'Parallel die grätenfreien Lachsfilets auf ein mit Backpapier belegtes Blech setzen und im Ofen 15–18 Minuten saftig garen.',
        'Skyr Natur mit Zitronensaft, 2 EL Wasser, fein gehacktem Dill und einer Prise Salz glatt rühren.',
        'Den Erbsen-Karotten-Reis auflockern, den Ofenlachs darauf anrichten und mit dem kühlen Zitronen-Skyr-Dip servieren.'
      ]
    },
    {
      id: 'rec-7',
      title: 'Cremiger One-Pot Nudel-Erbsen-Schinken-Auflauf',
      subtitle: 'Rohe Nudeln direkt in die Form – der Backofen erledigt den Rest',
      emoji: '🧀',
      accentColor: 'from-yellow-500 to-amber-600',
      prepTimeActive: 10,
      prepTimePassive: 35,
      effortLevel: 'Minimal (Kein Vorkochen)',
      fridgeDays: 4,
      freezerMonths: 2,
      toddlerNote: 'Weiche Hörnchennudeln & süße Erbsen',
      calories: 485,
      protein: 37,
      carbs: 58,
      fat: 12,
      basePortions: 4,
      ingredients: [
        { name: 'Vollkorn-Hörnchennudeln oder Spirelli (ungekocht)', amount: 400, unit: 'g', category: 'Vorratsschrank' },
        { name: 'TK-Erbsen', amount: 300, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Kochsahne Light (7% Fett)', amount: 250, unit: 'ml', category: 'Kühlregal' },
        { name: 'Milde Gemüsebrühe', amount: 600, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Magerer Kochschinken oder Geflügelaufschnitt', amount: 200, unit: 'g', category: 'Kühlregal' },
        { name: 'Geriebener Gouda Light', amount: 120, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Den Backofen auf 180 °C Umluft vorheizen. Den mageren Schinken in kleine, mundgerechte Streifen oder Würfel schneiden.',
        'Ungekochte Nudeln direkt in eine große Auflaufform geben und mit den gefrorenen Erbsen sowie den Schinkenstreifen mischen.',
        'Gemüsebrühe und Kochsahne Light mit einer Prise Muskatnuss verrühren und vollständig über die Nudeln gießen, sodass alles gut bedeckt ist.',
        'Mit dem geriebenen Gouda Light bestreuen und auf mittlerer Schiene in den Ofen schieben.',
        'Ca. 35–40 Minuten backen, bis die Nudeln die Soße aufgesogen haben, butterweich sind und der Käse goldgelb geschmolzen ist.'
      ]
    },
    {
      id: 'rec-8',
      title: 'Goldgelbe Ofen-Frittata mit Kartoffeln, Spinat & Hüttenkäse',
      subtitle: 'Herzhaftes Blech-Omelett – lässt sich in handliche Riegel schneiden',
      emoji: '🍳',
      accentColor: 'from-green-500 to-emerald-600',
      prepTimeActive: 15,
      prepTimePassive: 25,
      effortLevel: 'Gering',
      fridgeDays: 3,
      freezerMonths: 0,
      toddlerNote: 'Perfekt greifbar für kleine Kinderhände',
      calories: 415,
      protein: 36,
      carbs: 28,
      fat: 16,
      basePortions: 4,
      ingredients: [
        { name: 'Gekochte Kartoffeln (gerne vom Vortag)', amount: 600, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Eier (Größe M)', amount: 8, unit: 'Stück', category: 'Kühlregal' },
        { name: 'Körniger Frischkäse Light', amount: 250, unit: 'g', category: 'Kühlregal' },
        { name: 'Junger Blattspinat (frisch oder TK)', amount: 200, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Geriebener Gouda Light', amount: 80, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Den Backofen auf 180 °C Umluft vorheizen und eine große Auflaufform mit Backpapier auslegen.',
        'Die gekochten Kartoffeln in kleine Würfel (ca. 1,5 cm) schneiden. Den Blattspinat waschen (oder TK-Spinat auftauen und gut ausdrücken).',
        'Kartoffelwürfel und Spinat gleichmäßig in der Form verteilen.',
        'Eier mit dem körnigen Frischkäse, einer Prise Salz und milden Kräutern kräftig verquirlen und über das Gemüse gießen.',
        'Mit Gouda Light bestreuen und ca. 25 Minuten backen, bis die Eimasse vollständig gestockt und goldgelb ist.'
      ]
    },
    {
      id: 'rec-9',
      title: 'Mediterranes Gnocchi-Puten-Blech mit Kirschtomaten & Mozzarella',
      subtitle: 'Weiche Gnocchi & süße Ofentomaten von einem einzigen Backblech',
      emoji: '🥔',
      accentColor: 'from-rose-500 to-red-600',
      prepTimeActive: 10,
      prepTimePassive: 20,
      effortLevel: 'Minimal (Nur 1 Blech)',
      fridgeDays: 3,
      freezerMonths: 1,
      toddlerNote: 'Weiche Gnocchi & geschmolzener Mozzarella',
      calories: 495,
      protein: 39,
      carbs: 58,
      fat: 12,
      basePortions: 4,
      ingredients: [
        { name: 'Frische Gnocchi (Kühlregal)', amount: 800, unit: 'g', category: 'Kühlregal' },
        { name: 'Putenbrustfilet (klein gewürfelt)', amount: 450, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Kirschtomaten (halbiert)', amount: 300, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Zucchini (klein gewürfelt)', amount: 300, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Mini-Mozzarellakugeln Light', amount: 200, unit: 'g', category: 'Kühlregal' },
        { name: 'Olivenöl & milde italienische Kräuter', amount: 1, unit: 'EL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Den Backofen auf 200 °C Umluft vorheizen und ein Backblech mit Backpapier belegen.',
        'Zucchini klein würfeln, Kirschtomaten halbieren und das Putenbrustfilet in mundgerechte 2-cm-Würfel schneiden.',
        'Gnocchi direkt aus der Packung mit Putenwürfeln, Zucchini und Tomaten auf dem Blech verteilen und mit 1 EL Olivenöl sowie Kräutern mischen.',
        'Im heißen Ofen zunächst 15 Minuten rösten.',
        'Die Mini-Mozzarellakugeln darüber verteilen und weitere 5–7 Minuten backen, bis der Käse cremig zerläuft.'
      ]
    },
    {
      id: 'rec-10',
      title: 'Fruchtig-mildes Hähnchen-Mango-Curry mit Jasminreis',
      subtitle: 'Süße Mango & cremige Kokosmilch – das Lieblings-Curry für Kinder',
      emoji: '🍛',
      accentColor: 'from-yellow-400 to-orange-500',
      prepTimeActive: 15,
      prepTimePassive: 15,
      effortLevel: 'Mittel',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Absolut schärfefrei durch fruchtige Mango',
      calories: 510,
      protein: 42,
      carbs: 55,
      fat: 12,
      basePortions: 4,
      ingredients: [
        { name: 'Hähnchenbrustfilet (gewürfelt)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Jasmin- oder Basmatireis (ungekocht)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Reife Mango (oder TK-Mangowürfel)', amount: 250, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Kokosmilch Light', amount: 400, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Junge Karotten (feine Scheiben)', amount: 200, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Mildes Currypulver & Kurkuma', amount: 1, unit: 'TL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Den Reis kalt abspülen und nach Packungsanweisung in leicht gesalzenem Wasser locker garen.',
        'Karotten in sehr dünne Scheiben schneiden und die Mango fein würfeln.',
        'Hähnchenwürfel in einer tiefen Pfanne 3–4 Minuten hell anbraten, Karottenscheiben und mildes Currypulver kurz mitdünsten.',
        'Mit leichter Kokosmilch ablöschen und abgedeckt 10 Minuten sanft köcheln lassen, bis die Karotten weich sind.',
        'Mangowürfel unterheben, 3 Minuten sanft ziehen lassen und mit dem duftenden Reis servieren.'
      ]
    },
    {
      id: 'rec-11',
      title: 'Milde Hähnchen-Fajita-Pfanne mit bunter Paprika & Reis',
      subtitle: 'Zarte Hähnchenstreifen & süßlich geschmorte Paprika im Mexiko-Stil',
      emoji: '🫑',
      accentColor: 'from-orange-500 to-red-600',
      prepTimeActive: 15,
      prepTimePassive: 15,
      effortLevel: 'Gering',
      fridgeDays: 4,
      freezerMonths: 2,
      toddlerNote: 'Weich gedünstete Paprikastreifen ohne Schärfe',
      calories: 490,
      protein: 45,
      carbs: 50,
      fat: 10,
      basePortions: 4,
      ingredients: [
        { name: 'Hähnchenbrustfilet (in Streifen)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Basmatireis (ungekocht)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Bunte Paprikaschoten (in Streifen)', amount: 3, unit: 'Stück', category: 'Obst & Gemüse' },
        { name: 'Milde Zwiebel', amount: 1, unit: 'Stück', category: 'Obst & Gemüse' },
        { name: 'Passierte Tomaten', amount: 250, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Skyr Natur (als milder Klecks)', amount: 150, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Den Reis nach Packungsanweisung in leicht gesalzenem Wasser garen.',
        'Paprikaschoten entkernen und mit der Zwiebel in schmale Streifen schneiden.',
        'Hähnchenstreifen in einer großen Pfanne 4–5 Minuten goldbraun braten und kurz herausnehmen.',
        'Paprika- und Zwiebelstreifen mit 3 EL Wasser 8–10 Minuten abgedeckt dünsten, bis sie butterweich sind.',
        'Fleisch wieder zugeben, mit passierten Tomaten ablöschen, 4 Minuten sämig einköcheln und mit Reis sowie einem Klecks Skyr servieren.'
      ]
    },
    {
      id: 'rec-12',
      title: 'Bunte Quinoa-Bowl mit Röst-Kichererbsen, Süßkartoffel & Skyr',
      subtitle: 'Vegetarische Familien-Power-Bowl mit mildem Ofengemüse',
      emoji: '🥗',
      accentColor: 'from-emerald-500 to-green-700',
      prepTimeActive: 15,
      prepTimePassive: 25,
      effortLevel: 'Gering',
      fridgeDays: 4,
      freezerMonths: 1,
      toddlerNote: 'Weiche Quinoa & süßliche Ofen-Süßkartoffel',
      calories: 470,
      protein: 35,
      carbs: 56,
      fat: 12,
      basePortions: 4,
      ingredients: [
        { name: 'Quinoa (ungekocht)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Kichererbsen (Dose, abgetropft)', amount: 400, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Süßkartoffel (klein gewürfelt)', amount: 350, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Brokkoli-Röschen', amount: 300, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Skyr Natur (für das Dressing)', amount: 300, unit: 'g', category: 'Kühlregal' },
        { name: 'Olivenöl', amount: 1, unit: 'EL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Backofen auf 200 °C Umluft vorheizen. Quinoa heiß abspülen und ca. 15 Minuten weich kochen.',
        'Süßkartoffel schälen und klein würfeln, Brokkoli in kleine Röschen teilen, Kichererbsen abspülen.',
        'Gemüse und Kichererbsen mit 1 EL Olivenöl auf einem Backblech mischen und 22–25 Minuten rösten.',
        'Skyr Natur mit 2 EL Wasser, einem Spritzer Zitronensaft und einer Prise Salz cremig rühren.',
        'Quinoa mit dem warmen Ofengemüse und dem Skyr-Dressing anrichten.'
      ]
    },
    {
      id: 'rec-13',
      title: 'Original Familien-Wikingertopf mit Hackbällchen & Kartoffeln',
      subtitle: 'Der absolute Kinder-Hit: Zarte Bällchen mit Erbsen & Möhren in Rahmsoße',
      emoji: '🧆',
      accentColor: 'from-amber-500 to-orange-600',
      prepTimeActive: 18,
      prepTimePassive: 15,
      effortLevel: 'Mittel (Familien-Liebling)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Mini-Hackbällchen & weiche Erbsen-Möhren-Rahmsoße',
      calories: 525,
      protein: 45,
      carbs: 49,
      fat: 13,
      basePortions: 4,
      ingredients: [
        { name: 'Mageres Rinder- oder Geflügelhackfleisch', amount: 550, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Festkochende Kartoffeln (gewürfelt)', amount: 750, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'TK-Erbsen und junge Möhren', amount: 450, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Frischkäse Light (Natur)', amount: 150, unit: 'g', category: 'Kühlregal' },
        { name: 'Milde Gemüsebrühe', amount: 300, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Ei & 3 EL zarte Haferflocken (für die Bällchen)', amount: 1, unit: 'Stück', category: 'Kühlregal' }
      ],
      steps: [
        'Kartoffeln schälen, in mundgerechte Würfel schneiden und in leicht gesalzenem Wasser 12–15 Minuten weich kochen.',
        'Das Hackfleisch mit dem Ei, den zarten Haferflocken und einer Prise mildem Paprikapulver verkneten und zu walnussgroßen Mini-Bällchen rollen.',
        'Die Hackbällchen in einer großen, tiefen Pfanne rundherum 5 Minuten goldbraun anbraten.',
        'Mit der milden Gemüsebrühe ablöschen, die TK-Erbsen und Möhren dazugeben und abgedeckt 10 Minuten sanft köcheln lassen.',
        'Den Frischkäse Light in die Soße rühren, bis sie cremig bindet, und den Wikingertopf zusammen mit den Salzkartoffeln servieren.'
      ]
    },
    {
      id: 'rec-14',
      title: 'Deftiger One-Pot Bauerntopf mit Rinderhack & Kartoffeln',
      subtitle: 'Herzhafter Familien-Eintopf mit Paprika, Kartoffelwürfeln & Schmand-Klecks',
      emoji: '🥘',
      accentColor: 'from-red-600 to-rose-700',
      prepTimeActive: 15,
      prepTimePassive: 20,
      effortLevel: 'Gering (Nur 1 Topf)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Weich gekochte Kartoffelwürfel in milder Tomaten-Paprika-Soße',
      calories: 515,
      protein: 43,
      carbs: 50,
      fat: 12,
      basePortions: 4,
      ingredients: [
        { name: 'Mageres Rinderhackfleisch (5% Fett)', amount: 550, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Festkochende Kartoffeln (gewürfelt)', amount: 750, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Bunte Paprikaschoten (gewürfelt)', amount: 2, unit: 'Stück', category: 'Obst & Gemüse' },
        { name: 'Karotten (in Scheiben)', amount: 200, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Passierte Tomaten', amount: 400, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Milde Gemüsebrühe', amount: 350, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Griechischer Joghurt oder Schmand Light', amount: 120, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Kartoffeln und Karotten schälen und in kleine, mundgerechte Stücke (ca. 1,5 cm) schneiden. Die Paprika entkernen und würfeln.',
        'Das magere Rinderhackfleisch in einem großen Topf kräftig krümelig anbraten.',
        'Kartoffel-, Karotten- und Paprikawürfel dazugeben und 2 Minuten mitdünsten.',
        'Mit passierten Tomaten und milder Gemüsebrühe ablöschen und abgedeckt bei kleiner Hitze ca. 18–20 Minuten köcheln lassen, bis die Kartoffeln weich sind.',
        'Den Bauerntopf mit einem cremigen Klecks Joghurt oder Schmand Light verfeinern und servieren.'
      ]
    },
    {
      id: 'rec-15',
      title: 'Schnelle Familien-Lasagnesuppe mit Ricotta-Krone',
      subtitle: 'Schmeckt wie echte Lasagne, ist aber in 25 Minuten in einem Topf fertig',
      emoji: '🍅',
      accentColor: 'from-rose-500 to-red-600',
      prepTimeActive: 12,
      prepTimePassive: 18,
      effortLevel: 'Minimal (One-Pot-Hit)',
      fridgeDays: 4,
      freezerMonths: 2,
      toddlerNote: 'Weiche Lasagneblätter-Stücke zum Löffeln',
      calories: 530,
      protein: 46,
      carbs: 52,
      fat: 13,
      basePortions: 4,
      ingredients: [
        { name: 'Mageres Rinderhackfleisch (5% Fett)', amount: 500, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Lasagneplatten (grobe Stücke gebrochen)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Passierte Tomaten', amount: 700, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Milde Gemüsebrühe', amount: 500, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Karotte & Zucchini (fein gerieben)', amount: 300, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Ricotta oder Hüttenkäse Light', amount: 200, unit: 'g', category: 'Kühlregal' },
        { name: 'Geriebener Mozzarella Light', amount: 80, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Rinderhackfleisch im großen Topf 5 Minuten krümelig anbraten und die fein geriebene Karotte sowie Zucchini 2 Minuten mitdünsten.',
        'Mit passierten Tomaten und Gemüsebrühe aufgießen und einmal aufkochen lassen.',
        'Die Lasagneplatten mit den Händen in mundgerechte Stücke brechen und direkt in die kochende Suppe geben.',
        'Bei schwacher Hitze abgedeckt 12–15 Minuten sanft köcheln lassen und gelegentlich umrühren, bis die Nudelstücke weich sind.',
        'Mit einem großen Klecks Ricotta bzw. Hüttenkäse und etwas Mozzarella Light bestreut servieren.'
      ]
    },
    {
      id: 'rec-16',
      title: 'Cremige High-Protein Käse-Lauch-Suppe mit Hack & Kartoffeln',
      subtitle: 'Der deftige Familienklassiker – leicht gemacht mit Frischkäse & Hüttenkäse',
      emoji: '🥣',
      accentColor: 'from-emerald-600 to-teal-700',
      prepTimeActive: 15,
      prepTimePassive: 18,
      effortLevel: 'Gering (Perfekt zum Vorkochen)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Butterweiche Kartoffelwürfel & milder Lauch in Käserahm',
      calories: 495,
      protein: 45,
      carbs: 42,
      fat: 14,
      basePortions: 4,
      ingredients: [
        { name: 'Mageres Rinder- oder Putenhackfleisch', amount: 550, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Lauch / Porree (in feinen Ringen)', amount: 400, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Mehligkochende Kartoffeln (klein gewürfelt)', amount: 650, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Milde Gemüsebrühe', amount: 600, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Frischkäse Light (Kräuter oder Natur)', amount: 200, unit: 'g', category: 'Kühlregal' },
        { name: 'Körniger Frischkäse Light (püriert)', amount: 200, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Den Lauch gründlich waschen und in sehr feine Ringe schneiden. Die Kartoffeln schälen und in kleine 1-cm-Würfel schneiden.',
        'Das Hackfleisch in einem großen Topf krümelig anbraten, dann die Lauchringe 3 Minuten sanft mitdünsten.',
        'Kartoffelwürfel dazugeben, mit der Gemüsebrühe ablöschen und abgedeckt ca. 15 Minuten köcheln lassen, bis die Kartoffeln weich sind.',
        'Den Topf auf kleinste Stufe schalten und den Frischkäse Light sowie den körnigen Frischkäse einrühren, bis der Käse cremig geschmolzen ist.',
        'Mild mit einer Prise Muskatnuss abschmecken und warm servieren.'
      ]
    },
    {
      id: 'rec-17',
      title: 'Schwäbische Maultaschen-Gemüse-Pfanne mit Ei & Skyr-Dip',
      subtitle: 'Goldbraun gebratene Maultaschenstreifen mit buntem Gemüse in 15 Minuten',
      emoji: '🥟',
      accentColor: 'from-amber-500 to-orange-600',
      prepTimeActive: 15,
      prepTimePassive: 5,
      effortLevel: 'Minimal (15-Minuten-Hit)',
      fridgeDays: 3,
      freezerMonths: 1,
      toddlerNote: 'Weiche Maultaschenstreifen & mildes Rührei',
      calories: 520,
      protein: 39,
      carbs: 54,
      fat: 15,
      basePortions: 4,
      ingredients: [
        { name: 'Frische Maultaschen (Geflügel oder Klassisch)', amount: 700, unit: 'g', category: 'Kühlregal' },
        { name: 'Eier (Größe M)', amount: 4, unit: 'Stück', category: 'Kühlregal' },
        { name: 'Zucchini & rote Paprika (klein gewürfelt)', amount: 400, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'TK-Erbsen', amount: 150, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Skyr Natur (als Schnittlauch-Dip)', amount: 250, unit: 'g', category: 'Kühlregal' },
        { name: 'Rapsöl', amount: 1, unit: 'EL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Die Maultaschen in mundgerechte Streifen schneiden. Zucchini und Paprika in kleine Würfel schneiden.',
        'Rapsöl in einer großen Pfanne erhitzen und die Maultaschenstreifen darin 4–5 Minuten goldbraun anbraten.',
        'Zucchini, Paprika und TK-Erbsen dazugeben und bei mittlerer Hitze 5 Minuten weich dünsten.',
        'Die Eier mit 2 EL Wasser verquirlen, über die Maultaschen-Gemüse-Pfanne gießen und unter Rühren stocken lassen.',
        'Skyr mit Kräutern glatt rühren und direkt zur warmen Maultaschen-Pfanne servieren.'
      ]
    },
    {
      id: 'rec-18',
      title: 'Klassische Senfeier in milder Rahmsoße mit Kartoffelstampf',
      subtitle: 'Deutscher Familienklassiker – dank Hüttenkäse-Trick mit 38 g Protein',
      emoji: '🥚',
      accentColor: 'from-yellow-400 to-amber-600',
      prepTimeActive: 15,
      prepTimePassive: 15,
      effortLevel: 'Gering (Preiswerter Klassiker)',
      fridgeDays: 3,
      freezerMonths: 0,
      toddlerNote: 'Sehr milder Senf-Rahm & weicher Kartoffelstampf',
      calories: 480,
      protein: 38,
      carbs: 48,
      fat: 14,
      basePortions: 4,
      ingredients: [
        { name: 'Eier (Größe M)', amount: 8, unit: 'Stück', category: 'Kühlregal' },
        { name: 'Mehligkochende Kartoffeln', amount: 900, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'TK-Erbsen und Möhren', amount: 350, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Körniger Frischkäse Light (für die Soße)', amount: 300, unit: 'g', category: 'Kühlregal' },
        { name: 'Milde Gemüsebrühe & 100 ml Milch', amount: 300, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Milder mittelscharfer Senf & 1 TL Honig', amount: 1.5, unit: 'EL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Kartoffeln schälen, würfeln und in Salzwasser 15 Minuten weich kochen. Parallel die Eier in 8–9 Minuten wachsweich bis hart kochen und pellen.',
        'TK-Erbsen und Möhren in einem kleinen Topf mit wenig Wasser 6 Minuten zart dünsten.',
        'Für die High-Protein-Senfsoße den körnigen Frischkäse mit der warmen Gemüsebrühe, dem milden Senf und 1 TL Honig im Mixer glatt pürieren und kurz erwärmen.',
        'Die gekochten Kartoffeln abgießen und mit warmer Milch zu einem lockeren Stampf verarbeiten.',
        'Die halbierten Eier in die cremige Senfsoße legen und zusammen mit Kartoffelstampf und Erbsen-Möhren anrichten.'
      ]
    },
    {
      id: 'rec-19',
      title: 'Schwedische Ofen-Köttbullar in Rahmsoße mit Kartoffelpüree',
      subtitle: 'Saftige Fleischbällchen vom Blech mit Brokkoli & leichter Frischkäse-Rahmsoße',
      emoji: '🧆',
      accentColor: 'from-indigo-600 to-purple-700',
      prepTimeActive: 18,
      prepTimePassive: 18,
      effortLevel: 'Mittel',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Zarte Bällchen & cremiges Püree wie im Möbelhaus',
      calories: 530,
      protein: 46,
      carbs: 48,
      fat: 13,
      basePortions: 4,
      ingredients: [
        { name: 'Mageres Rinderhackfleisch (5% Fett)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Mehligkochende Kartoffeln', amount: 850, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Brokkoli-Röschen (TK oder frisch)', amount: 400, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Frischkäse Light & 150 ml Fettarme Milch', amount: 150, unit: 'g', category: 'Kühlregal' },
        { name: 'Milde Rinder- oder Gemüsebrühe', amount: 250, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Magerquark & 40 g Paniermehl (für die Bällchen)', amount: 100, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Backofen auf 200 °C Umluft vorheizen. Rinderhack mit Magerquark und Paniermehl verkneten, zu 20 kleinen Köttbullar rollen und auf einem Backblech 16–18 Minuten backen.',
        'Parallel die geschälten Kartoffeln in Salzwasser 15 Minuten weich kochen; den Brokkoli in den letzten 5 Minuten mitgaren.',
        'Für die Rahmsoße die Brühe in einer Pfanne aufkochen, Frischkäse Light einrühren und 3 Minuten sämig einköcheln.',
        'Kartoffeln mit etwas warmer Milch zu Püree stampfen.',
        'Die gebackenen Köttbullar in der Rahmsoße schwenken und mit Kartoffelpüree sowie Brokkoli servieren.'
      ]
    },
    {
      id: 'rec-20',
      title: 'One-Pot Cheeseburger-Pasta mit Rinderhack & Cheddar',
      subtitle: 'Schmeckt wie ein saftiger Burger, steckt aber voller Eiweiß & Vollkornnudeln',
      emoji: '🍔',
      accentColor: 'from-orange-600 to-amber-700',
      prepTimeActive: 12,
      prepTimePassive: 15,
      effortLevel: 'Gering (1-Topf-Liebling)',
      fridgeDays: 4,
      freezerMonths: 2,
      toddlerNote: 'Milde Tomaten-Käse-Soße & weiche Hörnchennudeln',
      calories: 545,
      protein: 47,
      carbs: 55,
      fat: 14,
      basePortions: 4,
      ingredients: [
        { name: 'Mageres Rinderhackfleisch (5% Fett)', amount: 550, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Vollkorn-Hörnchennudeln oder Fusilli', amount: 320, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Passierte Tomaten', amount: 400, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Milde Gemüsebrühe', amount: 500, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Karotte (fein gerieben, versteckt)', amount: 200, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Geriebener Cheddar oder Gouda Light', amount: 120, unit: 'g', category: 'Kühlregal' },
        { name: 'Frischkäse Light & 1 TL milder Senf', amount: 100, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Das Rinderhackfleisch in einem großen Topf krümelig anbraten und die fein geriebene Karotte kurz mitdünsten.',
        'Ungekochte Nudeln, passierte Tomaten, Gemüsebrühe und 1 TL milden Senf direkt dazugeben.',
        'Abgedeckt bei mittlerer Hitze 12–14 Minuten köcheln lassen und gelegentlich umrühren, bis die Nudeln weich sind.',
        'Vom Herd nehmen und Frischkäse Light sowie den geriebenen Käse unterheben, bis alles cremig Fäden zieht.'
      ]
    },
    {
      id: 'rec-21',
      title: 'Baked Feta Pasta mit Kirschtomaten, Zucchini & Kichererbsen',
      subtitle: 'Der virale Ofen-Klassiker – mit Kichererbsen auf 36 g Protein gepimpt',
      emoji: '🍅',
      accentColor: 'from-rose-500 to-orange-600',
      prepTimeActive: 10,
      prepTimePassive: 25,
      effortLevel: 'Minimal (Ofen macht die Soße)',
      fridgeDays: 4,
      freezerMonths: 1,
      toddlerNote: 'Cremig zerlaufener Hirtenkäse & süße Ofentomaten',
      calories: 495,
      protein: 36,
      carbs: 56,
      fat: 13,
      basePortions: 4,
      ingredients: [
        { name: 'Feta / Hirtenkäse Light (am Stück)', amount: 250, unit: 'g', category: 'Kühlregal' },
        { name: 'Körniger Frischkäse Light (für Extra-Cremigkeit)', amount: 200, unit: 'g', category: 'Kühlregal' },
        { name: 'Kichererbsen (Dose, abgetropft)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Vollkorn-Penne oder Spirelli', amount: 320, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Kirschtomaten (ganz)', amount: 450, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Zucchini (klein gewürfelt)', amount: 250, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Olivenöl & Basilikum', amount: 1, unit: 'EL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Backofen auf 200 °C Umluft vorheizen. Kirschtomaten, Zucchiniwürfel und abgespülte Kichererbsen in eine große Auflaufform geben.',
        'Den Feta Light in die Mitte setzen, alles mit 1 EL Olivenöl und milden Kräutern beträufeln und 25 Minuten im Ofen backen, bis die Tomaten aufplatzen.',
        'Parallel die Vollkornnudeln in Salzwasser weich kochen und 100 ml Nudelwasser auffangen.',
        'Die Form aus dem Ofen nehmen, Feta und Tomaten mit einer Gabel zerdrücken, den körnigen Frischkäse sowie Nudelwasser unterrühren und die Pasta unterheben.'
      ]
    },
    {
      id: 'rec-22',
      title: 'Zarte Lachs-Bandnudeln in cremiger Spinat-Ricotta-Soße',
      subtitle: 'Schnelles Restaurant-Lieblingsessen für die ganze Familie in 20 Minuten',
      emoji: '🐟',
      accentColor: 'from-teal-500 to-emerald-700',
      prepTimeActive: 12,
      prepTimePassive: 10,
      effortLevel: 'Gering',
      fridgeDays: 3,
      freezerMonths: 2,
      toddlerNote: 'Weiche Bandnudeln & milder Rahmspinat ohne Gräten',
      calories: 535,
      protein: 41,
      carbs: 54,
      fat: 16,
      basePortions: 4,
      ingredients: [
        { name: 'Lachsfilet ohne Haut & Gräten (gewürfelt)', amount: 500, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Bandnudeln / Tagliatelle', amount: 320, unit: 'g', category: 'Vorratsschrank' },
        { name: 'TK-Blattspinat (portioniert)', amount: 350, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Ricotta oder Frischkäse Light', amount: 200, unit: 'g', category: 'Kühlregal' },
        { name: 'Milde Gemüsebrühe', amount: 200, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Spritzer Zitronensaft', amount: 1, unit: 'EL', category: 'Obst & Gemüse' }
      ],
      steps: [
        'Die Bandnudeln in reichlich Salzwasser nach Packungsanweisung al dente kochen.',
        'Parallel in einer tiefen Pfanne die Gemüsebrühe mit dem TK-Blattspinat erhitzen und abgedeckt 5 Minuten auftauen lassen.',
        'Ricotta bzw. Frischkäse Light einrühren, bis eine cremige Spinatsoße entsteht.',
        'Die grätenfreien Lachswürfel direkt in die sanft köchelnde Soße legen und 6–7 Minuten gar ziehen lassen.',
        'Mit einem Spritzer Zitronensaft abschmecken und mit den Bandnudeln servieren.'
      ]
    },
    {
      id: 'rec-23',
      title: 'Bunte Familien-Hähnchen-Minestrone mit Muschelnudeln',
      subtitle: 'Wärmender italienischer Gemüseeintopf mit zartem Hähnchen & weißen Bohnen',
      emoji: '🍲',
      accentColor: 'from-emerald-600 to-teal-700',
      prepTimeActive: 15,
      prepTimePassive: 18,
      effortLevel: 'Gering (One-Pot-Suppe)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Kleine Nudelformen & weich gekochtes Suppengemüse',
      calories: 465,
      protein: 44,
      carbs: 52,
      fat: 8,
      basePortions: 4,
      ingredients: [
        { name: 'Hähnchenbrustfilet (fein gewürfelt)', amount: 550, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Kleine Muschelnudeln oder Hörnchennudeln', amount: 220, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Weiße Bohnen (Dose, abgetropft)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Karotten & Zucchini (fein gewürfelt)', amount: 400, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'TK-Erbsen', amount: 150, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Passierte Tomaten & 700 ml milde Brühe', amount: 300, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Geriebener Parmesan', amount: 40, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Hähnchenwürfel in einem großen Suppentopf 3–4 Minuten hell anbraten.',
        'Fein gewürfelte Karotten und Zucchini dazugeben und 2 Minuten mitdünsten.',
        'Mit passierten Tomaten und milder Brühe aufgießen, die kleinen Nudeln sowie die abgespülten weißen Bohnen zugeben.',
        'Abgedeckt 12–15 Minuten sanft köcheln lassen, in den letzten 4 Minuten die TK-Erbsen mitgaren.',
        'Mit frisch geriebenem Parmesan bestreut servieren.'
      ]
    },
    {
      id: 'rec-24',
      title: 'Gefüllte Puten-Burrito-Wraps vom Blech mit Mais & Skyr-Dip',
      subtitle: 'Weiche Vollkorn-Tortillas mit saftiger Puten-Bohnen-Füllung & Käse überbacken',
      emoji: '🌯',
      accentColor: 'from-amber-500 to-orange-600',
      prepTimeActive: 15,
      prepTimePassive: 12,
      effortLevel: 'Gering (Perfektes Fingerfood)',
      fridgeDays: 3,
      freezerMonths: 2,
      toddlerNote: 'Handliche Wrap-Röllchen mit mildem Käse & süßem Mais',
      calories: 520,
      protein: 45,
      carbs: 52,
      fat: 12,
      basePortions: 4,
      ingredients: [
        { name: 'Vollkorn-Tortilla-Wraps (groß)', amount: 4, unit: 'Stück', category: 'Vorratsschrank' },
        { name: 'Putenbrustfilet oder Putenhack', amount: 550, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Süßer Goldmais (Dose, abgetropft)', amount: 150, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Kidneybohnen oder schwarze Bohnen', amount: 200, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Rote Paprika (fein gewürfelt)', amount: 1, unit: 'Stück', category: 'Obst & Gemüse' },
        { name: 'Passierte Tomaten', amount: 200, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Skyr Natur & 100 g geriebener Gouda Light', amount: 200, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Backofen auf 190 °C Umluft vorheizen. Das Putenfleisch in einer Pfanne mit den feinen Paprikawürfeln 5 Minuten braten.',
        'Abgespülte Bohnen, Mais und passierte Tomaten unterrühren und 3 Minuten sämig einköcheln lassen.',
        'Die Vollkorn-Wraps mit etwas Skyr bestreichen, die warme Puten-Gemüse-Mischung darauf verteilen, aufrollen und in eine Auflaufform legen.',
        'Mit dem geriebenen Käse bestreuen und im Ofen 10–12 Minuten goldgelb überbacken.',
        'In handliche Hälften schneiden und mit dem restlichen Skyr als Dip servieren.'
      ]
    },
    {
      id: 'rec-25',
      title: 'Cremiges Rotes Linsen-Dal mit Blumenkohl, Kokos & Reis',
      subtitle: 'Wärmendes, veganes & kinderfreundliches Wohlfühl-Dal voller Eiweiß',
      emoji: '🥣',
      accentColor: 'from-orange-500 to-amber-600',
      prepTimeActive: 12,
      prepTimePassive: 20,
      effortLevel: 'Minimal (Vorrats-Wunder)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Sämige Linsen & butterweiche Blumenkohlröschen',
      calories: 490,
      protein: 35,
      carbs: 62,
      fat: 10,
      basePortions: 4,
      ingredients: [
        { name: 'Rote Linsen (trocken)', amount: 280, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Basmatireis (ungekocht)', amount: 220, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Blumenkohl-Röschen (TK oder frisch)', amount: 400, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Kokosmilch Light', amount: 300, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Passierte Tomaten & 400 ml Gemüsebrühe', amount: 300, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Griechischer Joghurt (2%) zum Toppen', amount: 200, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Rote Linsen in einem Sieb kalt abspülen. Den Basmatireis separat nach Packungsanweisung kochen.',
        'Linsen zusammen mit den kleinen Blumenkohl-Röschen, Kokosmilch Light, passierten Tomaten und Brühe in einem großen Topf aufkochen.',
        'Abgedeckt bei schwacher Hitze 18–20 Minuten sanft köcheln lassen und gelegentlich umrühren, bis die Linsen cremig-sämig zerfallen.',
        'Mit dem lockeren Basmatireis und einem großen Klecks griechischem Joghurt anrichten.'
      ]
    },
    {
      id: 'rec-26',
      title: 'Puten-Geschnetzeltes „Zürcher Art“ mit Champignons & Spätzle',
      subtitle: 'Zarte Putenstreifen in heller Frischkäse-Pilz-Rahmsoße zu Eierspätzle',
      emoji: '🍄',
      accentColor: 'from-amber-500 to-orange-600',
      prepTimeActive: 15,
      prepTimePassive: 10,
      effortLevel: 'Gering (25-Minuten-Klassiker)',
      fridgeDays: 4,
      freezerMonths: 2,
      toddlerNote: 'Weiche Spätzle & milde Rahmsoße ohne Wein',
      calories: 525,
      protein: 46,
      carbs: 54,
      fat: 11,
      basePortions: 4,
      ingredients: [
        { name: 'Putenbrustfilet (in feinen Streifen)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Frische Eierspätzle (Kühlregal)', amount: 650, unit: 'g', category: 'Kühlregal' },
        { name: 'Braune Champignons (in Scheiben)', amount: 350, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'TK-Erbsen', amount: 150, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Frischkäse Light (Natur)', amount: 150, unit: 'g', category: 'Kühlregal' },
        { name: 'Milde Gemüsebrühe', amount: 250, unit: 'ml', category: 'Vorratsschrank' }
      ],
      steps: [
        'Die Champignons putzen und in feine Scheiben schneiden.',
        'Putenstreifen in einer großen Pfanne 4 Minuten rundherum anbraten und kurz auf einen Teller geben.',
        'Champignonscheiben in der Pfanne 4 Minuten dünsten, mit Brühe ablöschen und die TK-Erbsen dazugeben.',
        'Frischkäse Light glatt einrühren, Putenstreifen sowie die frischen Eierspätzle direkt in die Soße geben und 5 Minuten ziehen lassen, bis alles heiß und sämig ist.'
      ]
    },
    {
      id: 'rec-27',
      title: 'Milde Hähnchen-Teriyaki-Pfanne mit Brokkoli & Jasminreis',
      subtitle: 'Süßlich-mild glasierte Hähnchenwürfel mit knackig-zartem Gemüse',
      emoji: '🥢',
      accentColor: 'from-cyan-600 to-blue-700',
      prepTimeActive: 15,
      prepTimePassive: 12,
      effortLevel: 'Gering',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Milde Honig-Soja-Glasur & sehr kleine Brokkoliröschen',
      calories: 500,
      protein: 45,
      carbs: 56,
      fat: 8,
      basePortions: 4,
      ingredients: [
        { name: 'Hähnchenbrustfilet (mundgerecht gewürfelt)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Jasminreis (ungekocht)', amount: 260, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Brokkoli-Röschen', amount: 400, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Karotten (in feinen Stiften)', amount: 200, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Milde Sojasoße (natriumarm) & 1 EL Honig', amount: 3, unit: 'EL', category: 'Vorratsschrank' },
        { name: 'Milde Brühe & 1 TL Speisestärke', amount: 200, unit: 'ml', category: 'Vorratsschrank' }
      ],
      steps: [
        'Jasminreis nach Packungsanweisung in leicht gesalzenem Wasser locker kochen.',
        'Brokkoli in kleine Röschen teilen und Karotten in dünne Stifte schneiden.',
        'Hähnchenwürfel in einer großen Pfanne 4–5 Minuten goldbraun braten.',
        'Brokkoli und Karotten dazugeben, mit 150 ml Brühe ablöschen und abgedeckt 7–8 Minuten weich dünsten.',
        'Sojasoße, Honig, 50 ml Wasser und 1 TL Stärke glatt rühren, in die Pfanne gießen und 1 Minute aufkochen, bis die Soße glänzend bindet. Mit Reis servieren.'
      ]
    },
    {
      id: 'rec-28',
      title: 'Griechischer Kritharaki-Topf (Giouvetsi) mit Rinderhack & Feta',
      subtitle: 'Kleine Reisnudeln direkt in fruchtiger Tomatensoße gekocht & mit Feta gekrönt',
      emoji: '🇬🇷',
      accentColor: 'from-rose-500 to-red-600',
      prepTimeActive: 12,
      prepTimePassive: 18,
      effortLevel: 'Minimal (One-Pot)',
      fridgeDays: 4,
      freezerMonths: 2,
      toddlerNote: 'Kleine Reisnudeln lassen sich super leicht löffeln',
      calories: 530,
      protein: 45,
      carbs: 54,
      fat: 13,
      basePortions: 4,
      ingredients: [
        { name: 'Mageres Rinderhackfleisch (5% Fett)', amount: 500, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Kritharaki / Orzo (Griechische Reisnudeln)', amount: 300, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Zucchini (fein gewürfelt)', amount: 300, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Passierte Tomaten', amount: 500, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Milde Gemüsebrühe', amount: 500, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Feta / Hirtenkäse Light (zerbröselt)', amount: 150, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Das magere Rinderhackfleisch in einem großen Topf 5 Minuten krümelig anbraten.',
        'Die feinen Zucchiniwürfel und die ungekochten Kritharaki-Nudeln dazugeben und 1 Minute mitrösten.',
        'Mit passierten Tomaten und milder Gemüsebrühe aufgießen und bei kleiner Hitze 14–16 Minuten sanft köcheln lassen (dabei öfter umrühren, damit nichts ansetzt).',
        'Sobald die Reisnudeln weich und cremig wie ein Risotto sind, den Feta Light darüberbröseln und servieren.'
      ]
    },
    {
      id: 'rec-29',
      title: 'Cremiger Hokkaido-Kürbis-Reistopf mit Hähnchen & Frischkäse',
      subtitle: 'Süßlicher Kürbis schmilzt direkt in den Reis – ohne Schälen zubereitet',
      emoji: '🎃',
      accentColor: 'from-orange-500 to-amber-600',
      prepTimeActive: 15,
      prepTimePassive: 20,
      effortLevel: 'Gering (Kein Kürbis-Schälen)',
      fridgeDays: 4,
      freezerMonths: 2,
      toddlerNote: 'Samtig-weicher Kürbisreis mit mildem Geschmack',
      calories: 505,
      protein: 44,
      carbs: 54,
      fat: 10,
      basePortions: 4,
      ingredients: [
        { name: 'Hähnchenbrustfilet (klein gewürfelt)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Hokkaido-Kürbis (entkernt, mit Schale gewürfelt)', amount: 500, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Rundkorn- oder Basmatireis (ungekocht)', amount: 260, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Milde Gemüsebrühe', amount: 650, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Frischkäse Light (Natur)', amount: 120, unit: 'g', category: 'Kühlregal' },
        { name: 'Geriebener Parmesan', amount: 40, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Den Hokkaido-Kürbis waschen, halbieren, entkernen und mitsamt der zarten Schale in kleine 1,5-cm-Würfel schneiden.',
        'Hähnchenwürfel in einem großen Topf 4 Minuten rundherum anbraten.',
        'Kürbiswürfel und ungekochten Reis dazugeben, mit der warmen Gemüsebrühe aufgießen und abgedeckt bei schwacher Hitze 18–20 Minuten köcheln lassen.',
        'Wenn Kürbis und Reis butterweich sind, Frischkäse Light und Parmesan kräftig unterrühren, bis der Reistopf cremig glänzt.'
      ]
    },
    {
      id: 'rec-30',
      title: 'Ofen-Seelachs „Bordelaise“ mit Kartoffelstampf & Rahmspinat',
      subtitle: 'Selbstgemachte Knusper-Quark-Kräuterkruste zum beliebtesten Kinder-Wunschessen',
      emoji: '🐟',
      accentColor: 'from-cyan-600 to-teal-700',
      prepTimeActive: 15,
      prepTimePassive: 20,
      effortLevel: 'Gering (Kinder-Favorit)',
      fridgeDays: 3,
      freezerMonths: 2,
      toddlerNote: 'Der Klassiker: Fisch, Spinat & Kartoffelbrei ohne Gräten',
      calories: 490,
      protein: 43,
      carbs: 48,
      fat: 11,
      basePortions: 4,
      ingredients: [
        { name: 'Seelachs- oder Kabeljaufilet (grätenfrei)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Mehligkochende Kartoffeln', amount: 850, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'TK-Rahmspinat', amount: 450, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Magerquark (für Kruste & Stampf)', amount: 200, unit: 'g', category: 'Kühlregal' },
        { name: 'Paniermehl / Semmelbrösel & Gartenkräuter', amount: 40, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Geriebener Gouda Light', amount: 50, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Backofen auf 200 °C Umluft vorheizen. Das Fischfilet trocken tupfen und in eine Auflaufform legen.',
        '100 g Magerquark mit Paniermehl, Gouda Light und milden Gartenkräutern verrühren, auf den Fisch streichen und im Ofen 18–20 Minuten goldbraun backen.',
        'Parallel die geschälten Kartoffeln in Salzwasser 15 Minuten weich kochen und den TK-Rahmspinat in einem kleinen Topf sanft erwärmen.',
        'Kartoffeln abgießen, mit den restlichen 100 g Magerquark und etwas Kochwasser cremig stampfen und mit Fisch und Spinat anrichten.'
      ]
    }
  ];

  // ==========================================================================
  // TEIL 2: 18 AUTHENTISCHE GERICHTE-WELTEN (JE 3 PROTEINE × 5 BEILAGEN = 270)
  // ==========================================================================
  // Jede Gerichte-Welt kombiniert NUR kulinarisch harmonierende Proteine und
  // Beilagen. Keine Cross-Over-Unfälle mehr!

  const PROTEINS = {
    haehnchen: {
      key: 'haehnchen',
      label: 'Hähnchen',
      titlePrefix: 'Zartes Hähnchen',
      ingName: 'Hähnchenbrustfilet (mundgerecht geschnitten)',
      amount: 600,
      unit: 'g',
      category: 'Fleisch & Frische',
      prot: 36,
      cal: 165,
      fat: 3,
      emoji: '🍗'
    },
    pute: {
      key: 'pute',
      label: 'Puten',
      titlePrefix: 'Saftiges Puten',
      ingName: 'Putenbrustfilet (zart geschnitten)',
      amount: 600,
      unit: 'g',
      category: 'Fleisch & Frische',
      prot: 36,
      cal: 160,
      fat: 2,
      emoji: '🦃'
    },
    rinderhack: {
      key: 'rinderhack',
      label: 'Rinderhack',
      titlePrefix: 'Herzhaftes Rinderhack',
      ingName: 'Mageres Rinderhackfleisch (5% Fett)',
      amount: 550,
      unit: 'g',
      category: 'Fleisch & Frische',
      prot: 34,
      cal: 185,
      fat: 7,
      emoji: '🥩'
    },
    hackbaellchen: {
      key: 'hackbaellchen',
      label: 'Mini-Hackbällchen',
      titlePrefix: 'Zarte Mini-Hackbällchen',
      ingName: 'Mageres Hackfleisch (zu kleinen Bällchen gerollt)',
      amount: 550,
      unit: 'g',
      category: 'Fleisch & Frische',
      prot: 35,
      cal: 180,
      fat: 6,
      emoji: '🧆'
    },
    lachs: {
      key: 'lachs',
      label: 'Lachs',
      titlePrefix: 'Saftiges Lachsfilet',
      ingName: 'Lachsfilet ohne Haut & Gräten (gewürfelt)',
      amount: 500,
      unit: 'g',
      category: 'Fleisch & Frische',
      prot: 30,
      cal: 210,
      fat: 11,
      emoji: '🐟'
    },
    seelachs: {
      key: 'seelachs',
      label: 'Seelachs',
      titlePrefix: 'Mildes Seelachsfilet',
      ingName: 'Seelachs- oder Kabeljaufilet (grätenfrei)',
      amount: 600,
      unit: 'g',
      category: 'Fleisch & Frische',
      prot: 34,
      cal: 150,
      fat: 2,
      emoji: '🐟'
    },
    linsenHuettenkaese: {
      key: 'linsenHuettenkaese',
      label: 'Rote Linsen & Hüttenkäse',
      titlePrefix: 'Veggie Rote-Linsen',
      ingName: 'Rote Linsen & Hüttenkäse Light Mix',
      amount: 450,
      unit: 'g',
      category: 'Kühlregal',
      prot: 28,
      cal: 175,
      fat: 4,
      emoji: '🌱'
    },
    kichererbsenHalloumi: {
      key: 'kichererbsenHalloumi',
      label: 'Kichererbsen & Grillkäse',
      titlePrefix: 'Veggie Grillkäse-Kichererbsen',
      ingName: 'Kichererbsen & Halloumi Light (gewürfelt)',
      amount: 480,
      unit: 'g',
      category: 'Kühlregal',
      prot: 28,
      cal: 195,
      fat: 8,
      emoji: '🧀'
    },
    tofuEdamame: {
      key: 'tofuEdamame',
      label: 'Tofu & Edamame',
      titlePrefix: 'Knuspriger Tofu-Edamame',
      ingName: 'Natur- oder Räuchertofu & geschälte Edamame-Bohnen',
      amount: 500,
      unit: 'g',
      category: 'Kühlregal',
      prot: 29,
      cal: 180,
      fat: 7,
      emoji: '🥢'
    },
    bohnenQuark: {
      key: 'bohnenQuark',
      label: 'Bohnen & Hüttenkäse',
      titlePrefix: 'Veggie Bohnen-Protein',
      ingName: 'Milde Bohnen (Kidney/Weiß) & Hüttenkäse Light',
      amount: 500,
      unit: 'g',
      category: 'Vorratsschrank',
      prot: 27,
      cal: 170,
      fat: 3,
      emoji: '🫘'
    }
  };

  const CARBS = {
    basmatireis: {
      key: 'basmatireis',
      short: 'Basmatireis',
      ingName: 'Basmatireis (ungekocht)',
      amount: 260,
      unit: 'g',
      category: 'Vorratsschrank',
      carbs: 48,
      prot: 5,
      cal: 220,
      prepType: 'boil_grain'
    },
    jasminreis: {
      key: 'jasminreis',
      short: 'Duft-Jasminreis',
      ingName: 'Jasminreis (ungekocht)',
      amount: 260,
      unit: 'g',
      category: 'Vorratsschrank',
      carbs: 48,
      prot: 5,
      cal: 220,
      prepType: 'boil_grain'
    },
    vollkornPenne: {
      key: 'vollkornPenne',
      short: 'Vollkorn-Penne',
      ingName: 'Vollkorn-Penne oder Spirelli',
      amount: 300,
      unit: 'g',
      category: 'Vorratsschrank',
      carbs: 50,
      prot: 9,
      cal: 245,
      prepType: 'boil_pasta'
    },
    bandnudeln: {
      key: 'bandnudeln',
      short: 'Bandnudeln',
      ingName: 'Bandnudeln (Tagliatelle)',
      amount: 300,
      unit: 'g',
      category: 'Vorratsschrank',
      carbs: 51,
      prot: 8,
      cal: 245,
      prepType: 'boil_pasta'
    },
    kritharaki: {
      key: 'kritharaki',
      short: 'Kritharaki-Reisnudeln',
      ingName: 'Kritharaki / Orzo (Griechische Reisnudeln)',
      amount: 300,
      unit: 'g',
      category: 'Vorratsschrank',
      carbs: 50,
      prot: 8,
      cal: 240,
      prepType: 'boil_pasta'
    },
    mieNudeln: {
      key: 'mieNudeln',
      short: 'Mie-Vollkornnudeln',
      ingName: 'Schnelle Mie-Vollkornnudeln',
      amount: 280,
      unit: 'g',
      category: 'Vorratsschrank',
      carbs: 49,
      prot: 8,
      cal: 235,
      prepType: 'boil_pasta'
    },
    salzkartoffeln: {
      key: 'salzkartoffeln',
      short: 'Salzkartoffeln',
      ingName: 'Festkochende Kartoffeln (gewürfelt)',
      amount: 800,
      unit: 'g',
      category: 'Obst & Gemüse',
      carbs: 34,
      prot: 4,
      cal: 155,
      prepType: 'potato'
    },
    kartoffelstampf: {
      key: 'kartoffelstampf',
      short: 'Cremiger Kartoffelstampf',
      ingName: 'Mehligkochende Kartoffeln (für Stampf)',
      amount: 850,
      unit: 'g',
      category: 'Obst & Gemüse',
      carbs: 36,
      prot: 5,
      cal: 170,
      prepType: 'mash'
    },
    ofenkartoffeln: {
      key: 'ofenkartoffeln',
      short: 'Ofen-Drillingskartoffeln',
      ingName: 'Kleine Drillingskartoffeln (halbiert)',
      amount: 800,
      unit: 'g',
      category: 'Obst & Gemüse',
      carbs: 35,
      prot: 4,
      cal: 160,
      prepType: 'potato'
    },
    suesskartoffeln: {
      key: 'suesskartoffeln',
      short: 'Süßkartoffel-Würfel',
      ingName: 'Süßkartoffeln (geschält & gewürfelt)',
      amount: 700,
      unit: 'g',
      category: 'Obst & Gemüse',
      carbs: 38,
      prot: 3,
      cal: 165,
      prepType: 'potato'
    },
    gnocchi: {
      key: 'gnocchi',
      short: 'Frische Gnocchi',
      ingName: 'Frische Kartoffel-Gnocchi (Kühlregal)',
      amount: 750,
      unit: 'g',
      category: 'Kühlregal',
      carbs: 52,
      prot: 7,
      cal: 250,
      prepType: 'chilled_direct'
    },
    spaetzle: {
      key: 'spaetzle',
      short: 'Eierspätzle',
      ingName: 'Frische Pfannen-Spätzle (Kühlregal)',
      amount: 650,
      unit: 'g',
      category: 'Kühlregal',
      carbs: 49,
      prot: 9,
      cal: 255,
      prepType: 'chilled_direct'
    },
    schupfnudeln: {
      key: 'schupfnudeln',
      short: 'Goldbraune Schupfnudeln',
      ingName: 'Frische Schupfnudeln (Kühlregal)',
      amount: 650,
      unit: 'g',
      category: 'Kühlregal',
      carbs: 47,
      prot: 6,
      cal: 240,
      prepType: 'chilled_direct'
    },
    quinoaHirse: {
      key: 'quinoaHirse',
      short: 'Quinoa-Goldhirse',
      ingName: 'Milde Goldhirse-Quinoa-Mischung',
      amount: 260,
      unit: 'g',
      category: 'Vorratsschrank',
      carbs: 45,
      prot: 8,
      cal: 230,
      prepType: 'boil_grain'
    },
    couscous: {
      key: 'couscous',
      short: 'Vollkorn-Couscous',
      ingName: 'Vollkorn-Couscous (schnell quellend)',
      amount: 260,
      unit: 'g',
      category: 'Vorratsschrank',
      carbs: 47,
      prot: 8,
      cal: 230,
      prepType: 'boil_grain'
    },
    wraps: {
      key: 'wraps',
      short: 'Vollkorn-Tortilla-Wraps',
      ingName: 'Große Vollkorn-Tortilla-Wraps',
      amount: 4,
      unit: 'Stück',
      category: 'Vorratsschrank',
      carbs: 44,
      prot: 8,
      cal: 235,
      prepType: 'wraps'
    }
  };

  // 18 echte kulinarische Gerichte-Welten mit fest definierten, stimmigen Paarungen
  const DISH_ARCHETYPES = [
    {
      id: 'zuercher-rahm',
      dishName: 'Geschnetzeltes „Zürcher Art“ mit Champignons & Erbsen',
      subtitle: 'Cremige Champignon-Frischkäse-Rahmsoße – ein gelingsicherer Familien-Klassiker',
      method: 'pan',
      prepActive: 15,
      prepPassive: 12,
      effort: 'Gering (1-Pfannen-Klassiker)',
      fridge: 4,
      freezer: 2,
      toddler: 'Weiche Champignonscheiben & süße Erbsen in milder Rahmsoße',
      proteins: ['haehnchen', 'pute', 'tofuEdamame'],
      carbs: ['spaetzle', 'basmatireis', 'schupfnudeln', 'bandnudeln', 'salzkartoffeln'],
      veggies: [
        { name: 'Braune Champignons (in feinen Scheiben)', amount: 350, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'TK-Erbsen (jung & zart)', amount: 200, unit: 'g', category: 'Tiefkühlung' }
      ],
      sauce: [
        { name: 'Frischkäse Light (Natur oder Kräuter)', amount: 160, unit: 'g', category: 'Kühlregal' },
        { name: 'Milde Gemüsebrühe', amount: 250, unit: 'ml', category: 'Vorratsschrank' }
      ],
      extraCal: 75,
      extraProt: 6,
      extraFat: 3
    },
    {
      id: 'wikingertopf-kohlrabi',
      dishName: 'Wikingertopf mit Kohlrabi, Möhren & Erbsen-Rahm',
      subtitle: 'Mild-süßliches Lieblingsgemüse in cremiger Rahmsoße',
      method: 'stew',
      prepActive: 15,
      prepPassive: 15,
      effort: 'Gering (Familien-Liebling)',
      fridge: 4,
      freezer: 3,
      toddler: 'Zarte Kohlrabistifte & Karottenscheiben ohne Schärfe',
      proteins: ['hackbaellchen', 'haehnchen', 'kichererbsenHalloumi'],
      carbs: ['salzkartoffeln', 'kartoffelstampf', 'basmatireis', 'vollkornPenne', 'spaetzle'],
      veggies: [
        { name: 'Kohlrabi & junge Karotten (fein gestiftelt)', amount: 400, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'TK-Erbsen', amount: 200, unit: 'g', category: 'Tiefkühlung' }
      ],
      sauce: [
        { name: 'Kochsahne Light (7% Fett)', amount: 200, unit: 'ml', category: 'Kühlregal' },
        { name: 'Körniger Frischkäse Light (püriert)', amount: 150, unit: 'g', category: 'Kühlregal' },
        { name: 'Milde Gemüsebrühe', amount: 250, unit: 'ml', category: 'Vorratsschrank' }
      ],
      extraCal: 85,
      extraProt: 8,
      extraFat: 4
    },
    {
      id: 'mediterranes-ragu',
      dishName: 'Mediterranes Familien-Ragù mit verstecktem Gemüse',
      subtitle: 'Sämige Tomaten-Ricotta-Soße mit fein geriebener Zucchini & Karotte',
      method: 'stew',
      prepActive: 15,
      prepPassive: 20,
      effort: 'Minimal (One-Pot-Soße)',
      fridge: 4,
      freezer: 3,
      toddler: 'Gemüse verschmilzt unsichtbar in der milden Tomatensoße',
      proteins: ['rinderhack', 'pute', 'linsenHuettenkaese'],
      carbs: ['vollkornPenne', 'bandnudeln', 'gnocchi', 'kritharaki', 'basmatireis'],
      veggies: [
        { name: 'Zucchini (fein gerieben)', amount: 300, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Karotten (fein gerieben)', amount: 250, unit: 'g', category: 'Obst & Gemüse' }
      ],
      sauce: [
        { name: 'Passierte Tomaten', amount: 600, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Ricotta oder Magerquark (zum Verfeinern)', amount: 180, unit: 'g', category: 'Kühlregal' }
      ],
      extraCal: 80,
      extraProt: 7,
      extraFat: 3
    },
    {
      id: 'djuvec-topf',
      dishName: 'Milder Djuvec-Schmortopf mit Paprika, Erbsen & Joghurt-Dip',
      subtitle: 'Fruchtiger Paprika-Tomaten-Topf mit kühlem Joghurt-Topping',
      method: 'stew',
      prepActive: 15,
      prepPassive: 18,
      effort: 'Gering (1 Topf)',
      fridge: 4,
      freezer: 3,
      toddler: 'Weich geschmorte Paprika & milder Joghurt-Klecks',
      proteins: ['haehnchen', 'rinderhack', 'kichererbsenHalloumi'],
      carbs: ['basmatireis', 'kritharaki', 'salzkartoffeln', 'couscous', 'quinoaHirse'],
      veggies: [
        { name: 'Rote & gelbe Paprika (klein gewürfelt)', amount: 350, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'TK-Erbsen', amount: 200, unit: 'g', category: 'Tiefkühlung' }
      ],
      sauce: [
        { name: 'Stückige Tomaten & 200 ml Brühe', amount: 400, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Griechischer Joghurt (2% Fett)', amount: 200, unit: 'g', category: 'Kühlregal' }
      ],
      extraCal: 80,
      extraProt: 8,
      extraFat: 2
    },
    {
      id: 'goldenes-kokos-curry',
      dishName: 'Goldenes Kurkuma-Kokos-Curry mit Blattspinat & Zuckerschoten',
      subtitle: 'Wärmendes, absolut schärfefreies Familiencurry mit zartem Gemüse',
      method: 'curry',
      prepActive: 15,
      prepPassive: 15,
      effort: 'Gering (Wok oder Topf)',
      fridge: 4,
      freezer: 3,
      toddler: 'Milde Kokosmilch & süßlicher Mais ohne jede Schärfe',
      proteins: ['haehnchen', 'lachs', 'linsenHuettenkaese'],
      carbs: ['jasminreis', 'basmatireis', 'quinoaHirse', 'suesskartoffeln', 'couscous'],
      veggies: [
        { name: 'TK-Blattspinat & junge Zuckerschoten', amount: 350, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Süßer Goldmais (Dose, abgetropft)', amount: 150, unit: 'g', category: 'Vorratsschrank' }
      ],
      sauce: [
        { name: 'Kokosmilch Light', amount: 350, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Skyr Natur (für Extra-Protein)', amount: 150, unit: 'g', category: 'Kühlregal' }
      ],
      extraCal: 90,
      extraProt: 7,
      extraFat: 5
    },
    {
      id: 'teriyaki-pfanne',
      dishName: 'Milde Teriyaki-Gemüse-Pfanne mit Brokkoli & Karotten',
      subtitle: 'Sanft-süßliche Soja-Honig-Glasur mit knackig-weichem Pfannengemüse',
      method: 'pan',
      prepActive: 15,
      prepPassive: 12,
      effort: 'Gering (Schnelle Pfanne)',
      fridge: 4,
      freezer: 3,
      toddler: 'Süßlich-mild glasiert, kleine weiche Brokkoliröschen',
      proteins: ['haehnchen', 'lachs', 'tofuEdamame'],
      carbs: ['jasminreis', 'basmatireis', 'mieNudeln', 'quinoaHirse', 'suesskartoffeln'],
      veggies: [
        { name: 'Brokkoli-Röschen (klein geteilt)', amount: 400, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Rote Paprika & Karottenstifte', amount: 250, unit: 'g', category: 'Obst & Gemüse' }
      ],
      sauce: [
        { name: 'Milde Teriyaki-Honig-Brühe (natriumarm)', amount: 250, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Frischkäse Light (für cremige Bindung)', amount: 100, unit: 'g', category: 'Kühlregal' }
      ],
      extraCal: 75,
      extraProt: 5,
      extraFat: 2
    },
    {
      id: 'florentiner-spinat',
      dishName: 'Florentiner Spinat-Tomaten-Pfanne in cremiger Ricotta-Soße',
      subtitle: 'Italienisches Wohlfühlessen mit Blattspinat & süßen Kirschtomaten',
      method: 'pan',
      prepActive: 12,
      prepPassive: 15,
      effort: 'Gering (25-Minuten-Pfanne)',
      fridge: 3,
      freezer: 2,
      toddler: 'Feiner Blattspinat in milder Käse-Sahne-Soße',
      proteins: ['lachs', 'haehnchen', 'kichererbsenHalloumi'],
      carbs: ['bandnudeln', 'gnocchi', 'vollkornPenne', 'basmatireis', 'salzkartoffeln'],
      veggies: [
        { name: 'Junger Blattspinat (frisch oder TK)', amount: 350, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Kirschtomaten (halbiert)', amount: 250, unit: 'g', category: 'Obst & Gemüse' }
      ],
      sauce: [
        { name: 'Ricotta oder Frischkäse Light', amount: 200, unit: 'g', category: 'Kühlregal' },
        { name: 'Milde Gemüsebrühe', amount: 200, unit: 'ml', category: 'Vorratsschrank' }
      ],
      extraCal: 85,
      extraProt: 8,
      extraFat: 4
    },
    {
      id: 'hokkaido-kuerbis-blech',
      dishName: 'Ofenblech mit Hokkaido-Kürbis, Karotten & Kräuter-Skyr',
      subtitle: 'Süßliches Röstgemüse von einem Blech – der Kürbis muss nicht geschält werden',
      method: 'sheet',
      prepActive: 12,
      prepPassive: 25,
      effort: 'Minimal (Nur 1 Backblech)',
      fridge: 4,
      freezer: 2,
      toddler: 'Butterweiche Kürbissticks zum Dippen im milden Quark',
      proteins: ['pute', 'haehnchen', 'kichererbsenHalloumi'],
      carbs: ['ofenkartoffeln', 'schupfnudeln', 'gnocchi', 'quinoaHirse', 'suesskartoffeln'],
      veggies: [
        { name: 'Hokkaido-Kürbis (mit Schale in Spalten)', amount: 450, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Junge Karottensticks', amount: 250, unit: 'g', category: 'Obst & Gemüse' }
      ],
      sauce: [
        { name: 'Skyr Natur & Magerquark (als Kräuter-Dip)', amount: 300, unit: 'g', category: 'Kühlregal' },
        { name: 'Rapsöl & milde Gartenkräuter', amount: 1, unit: 'EL', category: 'Vorratsschrank' }
      ],
      extraCal: 85,
      extraProt: 10,
      extraFat: 3
    },
    {
      id: 'blumenkohl-brokkoli-auflauf',
      dishName: 'Familien-Auflauf mit Blumenkohl, Brokkoli & Käsekruste',
      subtitle: 'Saftiger Hüttenkäse-Guss und goldgelb überbackener Mozzarella',
      method: 'oven',
      prepActive: 12,
      prepPassive: 30,
      effort: 'Sehr gering (Ofen arbeitet)',
      fridge: 4,
      freezer: 2,
      toddler: 'Butterweiche Röschen unter milder Käsehaube',
      proteins: ['haehnchen', 'pute', 'linsenHuettenkaese'],
      carbs: ['vollkornPenne', 'salzkartoffeln', 'gnocchi', 'spaetzle', 'schupfnudeln'],
      veggies: [
        { name: 'Blumenkohl- & Brokkoli-Röschen (TK oder frisch)', amount: 500, unit: 'g', category: 'Tiefkühlung' },
        { name: 'TK-Erbsen', amount: 150, unit: 'g', category: 'Tiefkühlung' }
      ],
      sauce: [
        { name: 'Körniger Frischkäse Light', amount: 300, unit: 'g', category: 'Kühlregal' },
        { name: 'Geriebener Mozzarella Light', amount: 100, unit: 'g', category: 'Kühlregal' },
        { name: 'Milde Gemüsebrühe', amount: 200, unit: 'ml', category: 'Vorratsschrank' }
      ],
      extraCal: 95,
      extraProt: 11,
      extraFat: 4
    },
    {
      id: 'baked-feta-ofen',
      dishName: 'Gebackener Hirtenkäse-Topf mit Kirschtomaten & Zucchini',
      subtitle: 'Im Ofen geschmolzener Feta Light verbindet sich zu einer cremigen Soße',
      method: 'oven',
      prepActive: 10,
      prepPassive: 25,
      effort: 'Minimal (Alles in 1 Form)',
      fridge: 4,
      freezer: 1,
      toddler: 'Süße geschmorte Kirschtomaten & milder Frischkäse-Schmelz',
      proteins: ['pute', 'lachs', 'bohnenQuark'],
      carbs: ['vollkornPenne', 'kritharaki', 'gnocchi', 'basmatireis', 'ofenkartoffeln'],
      veggies: [
        { name: 'Kirschtomaten (halbiert)', amount: 350, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Zucchini & milde Paprika (gewürfelt)', amount: 300, unit: 'g', category: 'Obst & Gemüse' }
      ],
      sauce: [
        { name: 'Hirtenkäse / Feta Light & 150 g Magerquark', amount: 250, unit: 'g', category: 'Kühlregal' },
        { name: 'Olivenöl & Oregano', amount: 1, unit: 'EL', category: 'Vorratsschrank' }
      ],
      extraCal: 90,
      extraProt: 10,
      extraFat: 4
    },
    {
      id: 'tex-mex-burrito-pfanne',
      dishName: 'Milde Tex-Mex-Pfanne mit Goldmais, Paprika & Joghurt-Klecks',
      subtitle: 'Saftiges Pfannengericht ohne Schärfe – perfekt für Bowls oder Wraps',
      method: 'pan',
      prepActive: 15,
      prepPassive: 15,
      effort: 'Gering (1 Pfanne)',
      fridge: 4,
      freezer: 3,
      toddler: 'Knackig-süßer Mais & weiche Paprikawürfel',
      proteins: ['rinderhack', 'haehnchen', 'bohnenQuark'],
      carbs: ['basmatireis', 'wraps', 'suesskartoffeln', 'quinoaHirse', 'ofenkartoffeln'],
      veggies: [
        { name: 'Süßer Goldmais (Dose, abgetropft)', amount: 200, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Rote & gelbe Paprika (gewürfelt)', amount: 300, unit: 'g', category: 'Obst & Gemüse' }
      ],
      sauce: [
        { name: 'Passierte Tomaten', amount: 350, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Griechischer Joghurt (2% Fett)', amount: 200, unit: 'g', category: 'Kühlregal' }
      ],
      extraCal: 80,
      extraProt: 7,
      extraFat: 2
    },
    {
      id: 'nordische-honig-senf-pfanne',
      dishName: 'Skandinavische Dill-Rahm-Pfanne mit jungen Bohnen & Möhren',
      subtitle: 'Feine Honig-Senf-Frischkäse-Note mit zartem Gemüse',
      method: 'pan',
      prepActive: 12,
      prepPassive: 15,
      effort: 'Gering',
      fridge: 3,
      freezer: 2,
      toddler: 'Butterweiche grüne Bohnen & milde Honig-Rahmsoße',
      proteins: ['lachs', 'seelachs', 'haehnchen'],
      carbs: ['salzkartoffeln', 'kartoffelstampf', 'basmatireis', 'schupfnudeln', 'ofenkartoffeln'],
      veggies: [
        { name: 'Junge grüne Buschbohnen (TK)', amount: 350, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Junge Karotten (in dünnen Scheiben)', amount: 250, unit: 'g', category: 'Obst & Gemüse' }
      ],
      sauce: [
        { name: 'Frischkäse Light & 1 TL milder Honig-Senf', amount: 160, unit: 'g', category: 'Kühlregal' },
        { name: 'Milde Gemüsebrühe & frischer Dill', amount: 220, unit: 'ml', category: 'Vorratsschrank' }
      ],
      extraCal: 75,
      extraProt: 6,
      extraFat: 3
    },
    {
      id: 'kaese-lauch-schmelztopf',
      dishName: 'Cremiger Lauch-Karotten-Schmelztopf (Käse-Lauch-Art)',
      subtitle: 'Herzhafter Familien-Liebling mit Hüttenkäse-Frischkäse-Schmelz',
      method: 'stew',
      prepActive: 15,
      prepPassive: 18,
      effort: 'Gering (1 Topf)',
      fridge: 4,
      freezer: 3,
      toddler: 'Sanft geschmorter Lauch in milder Käsesoße',
      proteins: ['rinderhack', 'pute', 'tofuEdamame'],
      carbs: ['salzkartoffeln', 'spaetzle', 'schupfnudeln', 'vollkornPenne', 'basmatireis'],
      veggies: [
        { name: 'Milder Lauch / Porree (in feinen Ringen)', amount: 350, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Karotten (klein gewürfelt)', amount: 250, unit: 'g', category: 'Obst & Gemüse' }
      ],
      sauce: [
        { name: 'Frischkäse Light (Kräuter)', amount: 150, unit: 'g', category: 'Kühlregal' },
        { name: 'Körniger Frischkäse Light', amount: 200, unit: 'g', category: 'Kühlregal' },
        { name: 'Milde Gemüsebrühe', amount: 300, unit: 'ml', category: 'Vorratsschrank' }
      ],
      extraCal: 85,
      extraProt: 9,
      extraFat: 4
    },
    {
      id: 'ofenblech-fajita-mix',
      dishName: 'Buntes Ofenblech-Röstgemüse mit Paprika, Zucchini & Quark-Dip',
      subtitle: 'Alles gart gleichzeitig auf einem Backblech – minimaler Abwasch',
      method: 'sheet',
      prepActive: 10,
      prepPassive: 22,
      effort: 'Minimal (1-Blech-Gericht)',
      fridge: 4,
      freezer: 1,
      toddler: 'Weiche Gemüsesticks & milder Kräuterquark',
      proteins: ['haehnchen', 'pute', 'kichererbsenHalloumi'],
      carbs: ['wraps', 'ofenkartoffeln', 'suesskartoffeln', 'basmatireis', 'quinoaHirse'],
      veggies: [
        { name: 'Bunte Paprika-Sticks & Zucchini-Halbmonde', amount: 450, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Kirschtomaten (halbiert)', amount: 200, unit: 'g', category: 'Obst & Gemüse' }
      ],
      sauce: [
        { name: 'Magerquark (als cremiger Kräuter-Dip)', amount: 300, unit: 'g', category: 'Kühlregal' },
        { name: 'Olivenöl & milde Kräuter', amount: 1, unit: 'EL', category: 'Vorratsschrank' }
      ],
      extraCal: 85,
      extraProt: 9,
      extraFat: 3
    },
    {
      id: 'suedtiroler-spinat-rahm',
      dishName: 'Südtiroler Spinat-Rahm-Pfanne mit geschmolzenen Tomaten',
      subtitle: 'Deftige Alpen-Küche mit jungem Spinat & mildem Bergkäse-Skyr-Schmelz',
      method: 'pan',
      prepActive: 12,
      prepPassive: 15,
      effort: 'Gering (1 Pfanne)',
      fridge: 4,
      freezer: 2,
      toddler: 'Cremige Käse-Spinat-Soße ohne kräftige Gewürze',
      proteins: ['haehnchen', 'hackbaellchen', 'linsenHuettenkaese'],
      carbs: ['spaetzle', 'schupfnudeln', 'gnocchi', 'salzkartoffeln', 'vollkornPenne'],
      veggies: [
        { name: 'TK-Blattspinat (portioniert)', amount: 350, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Kirschtomaten (halbiert)', amount: 200, unit: 'g', category: 'Obst & Gemüse' }
      ],
      sauce: [
        { name: 'Skyr Natur', amount: 200, unit: 'g', category: 'Kühlregal' },
        { name: 'Geriebener milder Gouda / Bergkäse Light', amount: 80, unit: 'g', category: 'Kühlregal' },
        { name: 'Milde Gemüsebrühe', amount: 200, unit: 'ml', category: 'Vorratsschrank' }
      ],
      extraCal: 90,
      extraProt: 10,
      extraFat: 4
    },
    {
      id: 'milde-orient-tajine',
      dishName: 'Fruchtig-milder Orient-Schmortopf mit Karotten & Aprikosen',
      subtitle: 'Sanft geschmorte Karotten und Zucchini mit milder Aprikosen-Süße',
      method: 'stew',
      prepActive: 15,
      prepPassive: 18,
      effort: 'Gering (One-Pot)',
      fridge: 4,
      freezer: 3,
      toddler: 'Kinder lieben die natürliche Süße von Karotten & Aprikosen',
      proteins: ['haehnchen', 'pute', 'linsenHuettenkaese'],
      carbs: ['couscous', 'basmatireis', 'quinoaHirse', 'suesskartoffeln', 'salzkartoffeln'],
      veggies: [
        { name: 'Junge Karotten & Zucchini (mundgerecht)', amount: 450, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Soft-Aprikosen (sehr fein gewürfelt)', amount: 50, unit: 'g', category: 'Vorratsschrank' }
      ],
      sauce: [
        { name: 'Passierte Tomaten & 250 ml milde Brühe', amount: 300, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Griechischer Joghurt (2% Fett)', amount: 180, unit: 'g', category: 'Kühlregal' }
      ],
      extraCal: 85,
      extraProt: 7,
      extraFat: 2
    },
    {
      id: 'oma-kaisergemuese-rahm',
      dishName: 'Klassische Schlemmer-Pfanne mit Kaisergemüse & Kräuterrahm',
      subtitle: 'Brokkoli, Blumenkohl & Möhren in einer leichten Quark-Frischkäse-Soße',
      method: 'pan',
      prepActive: 10,
      prepPassive: 15,
      effort: 'Minimal (TK-Vorteil)',
      fridge: 4,
      freezer: 3,
      toddler: 'Kein Schnippeln nötig, butterzartes Kaisergemüse',
      proteins: ['pute', 'seelachs', 'hackbaellchen'],
      carbs: ['kartoffelstampf', 'salzkartoffeln', 'spaetzle', 'schupfnudeln', 'basmatireis'],
      veggies: [
        { name: 'TK-Kaisergemüse (Brokkoli, Blumenkohl, Karotte)', amount: 500, unit: 'g', category: 'Tiefkühlung' },
        { name: 'TK-Erbsen', amount: 150, unit: 'g', category: 'Tiefkühlung' }
      ],
      sauce: [
        { name: 'Skyr Natur & 100 g Frischkäse Light', amount: 250, unit: 'g', category: 'Kühlregal' },
        { name: 'Milde Gemüsebrühe', amount: 220, unit: 'ml', category: 'Vorratsschrank' }
      ],
      extraCal: 80,
      extraProt: 9,
      extraFat: 3
    },
    {
      id: 'caprese-mozzarella-auflauf',
      dishName: 'Italienischer Caprese-Auflauf mit Tomate, Zucchini & Mozzarella',
      subtitle: 'Fruchtiger Tomaten-Hüttenkäse-Guss mit geschmolzenen Mini-Mozzarellakugeln',
      method: 'oven',
      prepActive: 12,
      prepPassive: 28,
      effort: 'Sehr gering (Ofen-Klassiker)',
      fridge: 4,
      freezer: 2,
      toddler: 'Milde Tomaten-Käse-Kruste & weiche Zucchini',
      proteins: ['haehnchen', 'rinderhack', 'bohnenQuark'],
      carbs: ['gnocchi', 'vollkornPenne', 'kritharaki', 'bandnudeln', 'ofenkartoffeln'],
      veggies: [
        { name: 'Zucchini & milde Strauchtomaten (gewürfelt)', amount: 450, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Rote Paprika (fein gewürfelt)', amount: 150, unit: 'g', category: 'Obst & Gemüse' }
      ],
      sauce: [
        { name: 'Passierte Tomaten & 200 g Hüttenkäse Light', amount: 400, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Mini-Mozzarellakugeln Light', amount: 125, unit: 'g', category: 'Kühlregal' }
      ],
      extraCal: 95,
      extraProt: 11,
      extraFat: 4
    }
  ];

  // Erzeugt natürliche, buchreife Rezepttitel statt starrer Bindestrich-Ketten
  const buildNaturalTitle = (prot, carb, archetype) => {
    return `${prot.titlePrefix}-${archetype.dishName} dazu ${carb.short}`;
  };

  // Erzeugt passgenaue 5-Schritte-Kochanleitungen für jede Gerichte-Welt
  const buildAuthenticSteps = (prot, carb, archetype) => {
    const veggieNames = archetype.veggies.map((v) => v.name.split('(')[0].trim()).join(' und ');
    const sauceMain = archetype.sauce[0].name.split('(')[0].trim();
    const isFish = prot.key === 'lachs' || prot.key === 'seelachs';
    const isVeggieMix = ['linsenHuettenkaese', 'kichererbsenHalloumi', 'tofuEdamame', 'bohnenQuark'].includes(prot.key);

    const carbPrepStep =
      carb.prepType === 'boil_grain'
        ? `${carb.ingName} in einem Sieb kalt abspülen und in einem Topf mit leicht gesalzenem Wasser nach Packungsanweisung ca. 12–15 Minuten locker garen (Couscous nur mit kochendem Wasser übergießen und 5 Minuten quellen lassen).`
        : carb.prepType === 'boil_pasta'
        ? `${carb.ingName} in reichlich leicht gesalzenem Wasser nach Packungsanweisung bissfest garen und anschließend abgießen.`
        : carb.prepType === 'mash'
        ? `${carb.ingName} schälen, grob würfeln, in Salzwasser 15 Minuten weich kochen und anschließend mit etwas Kochwasser oder Milch zu einem cremigen Kartoffelstampf verarbeiten.`
        : carb.prepType === 'potato'
        ? `${carb.ingName} gründlich waschen bzw. schälen, in mundgerechte 1,5-cm-Stücke schneiden und für 12–15 Minuten in leicht gesalzenem Wasser vorkochen (oder beim Blechgericht direkt mitrösten).`
        : carb.prepType === 'wraps'
        ? `${carb.ingName} bereitstellen, um sie am Ende warm mit der saftigen Pfannen- oder Ofenmischung zu füllen.`
        : `${carb.ingName} direkt aus dem Kühlregal bereitstellen (kein separates Vorkochen im Topf nötig).`;

    if (archetype.method === 'oven') {
      return [
        `Den Backofen auf 195 °C Umluft vorheizen. ${carbPrepStep}`,
        `${veggieNames} mundgerecht vorbereiten und zusammen mit der Beilage (${carb.short}) gleichmäßig in einer großen Auflaufform verteilen.`,
        isFish
          ? `Das grätenfreie ${prot.label}filet trocken tupfen, in mundgerechte Stücke schneiden und schonend zwischen dem Gemüse in der Form verteilen.`
          : isVeggieMix
          ? `${prot.ingName} abtropfen lassen bzw. klein würfeln und direkt unter das Gemüse in der Auflaufform mischen.`
          : `${prot.ingName} in einer heißen Pfanne 3–4 Minuten kräftig anbraten und anschließend gleichmäßig in der Auflaufform verteilen.`,
        `Für den Soßen-Guss ${sauceMain} mit der Flüssigkeit und milden Kräutern glatt verrühren, über den Auflauf gießen und mit dem Käse bestreuen.`,
        `Im vorgeheizten Ofen auf mittlerer Schiene ca. ${archetype.prepPassive} Minuten goldbraun backen, bis das Gemüse butterweich ist.`
      ];
    }

    if (archetype.method === 'sheet') {
      return [
        `Den Backofen auf 200 °C Umluft vorheizen und ein großes Backblech mit Backpapier belegen. ${veggieNames} in handliche, mundgerechte Stücke schneiden.`,
        carb.prepType === 'boil_grain' || carb.prepType === 'wraps'
          ? carbPrepStep
          : `${carb.ingName} direkt zusammen mit dem geschnittenen Gemüse auf das Backblech geben.`,
        `${prot.ingName} ebenfalls auf dem Blech verteilen, alles mit 1 EL Öl sowie milden Gartenkräutern vermengen und im heißen Ofen ca. ${archetype.prepPassive} Minuten goldbraun rösten.`,
        `Während das Blech im Ofen gart, ${sauceMain} mit 2–3 EL Wasser oder Milch, einem Spritzer Zitronensaft und Kräutern zu einem glatten, kühlen Dip verrühren.`,
        `Das duftende Röstgemüse vom Blech nehmen, mit ${carb.short} und dem frischen Kräuter-Dip servieren.`
      ];
    }

    if (archetype.method === 'curry') {
      return [
        carbPrepStep,
        isFish
          ? `Das grätenfreie ${prot.label}filet in mundgerechte Würfel schneiden und für die letzten Garminuten beiseitestellen.`
          : `${prot.ingName} in einem großen Topf oder Wok bei mittlerer Hitze 3–4 Minuten sanft anschwitzen und mit einer milden Prise Kurkuma bestäuben.`,
        `${veggieNames} dazugeben, mit der leichten Kokosmilch ablöschen und abgedeckt ca. ${archetype.prepPassive} Minuten sanft köcheln lassen, bis das Gemüse zart ist.`,
        isFish
          ? `Die ${prot.label}würfel in den letzten 6–7 Minuten in die sanft köchelnde Kokos-Soße legen und saftig gar ziehen lassen.`
          : `Alles gelegentlich umrühren, damit sich die milden Aromen optimal verbinden.`,
        `Den Topf vom Herd ziehen, den Skyr Natur für extra Cremigkeit und Protein glatt einrühren und zusammen mit ${carb.short} anrichten.`
      ];
    }

    if (archetype.method === 'stew') {
      return [
        `${veggieNames} waschen bzw. schälen und in kleine, kindgerechte Stücke schneiden. ${carbPrepStep}`,
        isVeggieMix
          ? `In einem großen Topf das Gemüse 2–3 Minuten sanft dünsten und ${prot.ingName} direkt dazugeben.`
          : `${prot.ingName} in einem großen Topf bei mittlerer bis hoher Hitze 4–5 Minuten rundherum goldbraun anbraten, dann ${veggieNames} kurz mitdünsten.`,
        `Mit der Flüssigkeit bzw. den passierten Tomaten ablöschen, einmal aufkochen und abgedeckt bei schwacher Hitze ca. ${archetype.prepPassive} Minuten sanft schmoren lassen.`,
        `Die Hitze reduzieren und ${sauceMain} einrühren, bis eine sämige, milde Familiensoße entsteht.`,
        carb.prepType === 'chilled_direct'
          ? `${carb.short} direkt in der warmen Soße 4–5 Minuten gar ziehen lassen und servieren.`
          : `Den fertigen Schmortopf zusammen mit ${carb.short} warm servieren.`
      ];
    }

    // Default: method === 'pan'
    return [
      `${veggieNames} mundgerecht vorbereiten. ${carbPrepStep}`,
      isFish
        ? `Das grätenfreie ${prot.label}filet in mundgerechte Würfel schneiden, in einer großen Pfanne 2 Minuten sanft anbraten und kurz beiseitelegen.`
        : `${prot.ingName} in einer großen, tiefen Pfanne bei mittlerer bis hoher Hitze 4–5 Minuten rundherum goldbraun anbraten${carb.prepType === 'chilled_direct' ? ` (${carb.short} die letzten 3 Minuten direkt mitbraten)` : ''}.`,
      `${veggieNames} in die Pfanne geben, mit der Brühe ablöschen und abgedeckt ca. ${archetype.prepPassive} Minuten sanft dünsten, bis das Gemüse weich ist.`,
      `Die Pfanne auf niedrige Stufe schalten und ${sauceMain} glatt einrühren, bis die Soße cremig bindet${isFish ? ' (die Fischwürfel nun wieder in die Soße legen und 3 Minuten gar ziehen lassen)' : ''}.`,
      `Alles mild abschmecken und zusammen mit ${carb.short} servieren.`
    ];
  };

  const generatedCatalog = [...SIGNATURE_RECIPES];
  let idCounter = SIGNATURE_RECIPES.length + 1;

  // 18 Gerichte-Welten × 3 stimmige Proteine × 5 passende Beilagen = 270 Rezepte (+ 30 Signature = 300)
  for (let aIdx = 0; aIdx < DISH_ARCHETYPES.length; aIdx++) {
    const archetype = DISH_ARCHETYPES[aIdx];
    for (let pIdx = 0; pIdx < archetype.proteins.length; pIdx++) {
      const prot = PROTEINS[archetype.proteins[pIdx]];
      for (let cIdx = 0; cIdx < archetype.carbs.length; cIdx++) {
        const carb = CARBS[archetype.carbs[cIdx]];
        if (generatedCatalog.length >= 300) break;

        const calories = Math.round(prot.cal + carb.cal + archetype.extraCal);
        const protein = Math.round(prot.prot + carb.prot + archetype.extraProt);
        const carbs = Math.round(carb.carbs + 8);
        const fat = Math.round(prot.fat + archetype.extraFat + 2);

        generatedCatalog.push({
          id: `rec-${idCounter}`,
          title: buildNaturalTitle(prot, carb, archetype),
          subtitle: archetype.subtitle,
          emoji: prot.emoji,
          accentColor: ACCENT_GRADIENTS[idCounter % ACCENT_GRADIENTS.length],
          prepTimeActive: archetype.prepActive,
          prepTimePassive: archetype.prepPassive,
          effortLevel: archetype.effort,
          fridgeDays: archetype.fridge,
          freezerMonths: archetype.freezer,
          toddlerNote: archetype.toddler,
          calories,
          protein,
          carbs,
          fat,
          basePortions: 4,
          ingredients: [
            { name: prot.ingName, amount: prot.amount, unit: prot.unit, category: prot.category },
            { name: carb.ingName, amount: carb.amount, unit: carb.unit, category: carb.category },
            ...archetype.veggies,
            ...archetype.sauce
          ],
          steps: buildAuthenticSteps(prot, carb, archetype)
        });

        idCounter++;
      }
    }
  }

  // Exportiere alle 300 Rezepte global für index.html
  window.MEALMATE_RECIPES = generatedCatalog;
})();
