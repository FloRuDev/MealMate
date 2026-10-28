// ============================================================================
// MEALMATE DATENBASIS: 300 FAMILIEN-MEAL-PREP-STANDARDREZEPTE (OFFLINE-FIRST)
// ============================================================================
// Einfach diese Datei als "rezepte.js" im selben Ordner wie die "index.html"
// im GitHub-Repository ablegen. Die index.html lädt diese Liste automatisch.
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

  // 1. Die 12 handverlesenen Signature-Rezepte
  const SIGNATURE_RECIPES = [
    {
      id: 'rec-1',
      title: 'Cremige Hähnchen-Reis-Pfanne (Frikassee-Art)',
      subtitle: 'Süßliche Erbsen & weiche Möhren in leichter Frischkäse-Soße',
      emoji: '🍚',
      accentColor: 'from-emerald-600 to-teal-700',
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
        'Den gegarten Reis unter das cremige Hähnchen-Frikassee heben oder direkt zusammen anrichten.'
      ]
    },
    {
      id: 'rec-2',
      title: 'Kartoffel-Hähnchen-Auflauf mit Hüttenkäse-Soße',
      subtitle: 'Großes Ofenblech mit weichem Brokkoli & verstecktem Protein-Boost',
      emoji: '🥘',
      accentColor: 'from-amber-500 to-orange-600',
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
        'Den Backofen auf 200 °C Umluft (220 °C Ober-/Unterhitze) vorheizen. Die Kartoffeln schälen und in kleine, gleichmäßige Würfel (ca. 1,5 cm) schneiden, damit sie im Ofen zuverlässig durchgaren.',
        'Den Brokkoli in sehr kleine, mundgerechte Röschen teilen (TK-Brokkoli kurz antauen lassen) und das Hähnchenbrustfilet in etwa 2 cm große Stücke würfeln.',
        'Kartoffelwürfel, Brokkoliröschen und rohe Hähnchenstücke direkt in einer großen Auflaufform gründlich miteinander vermischen.',
        'Für den Guss den körnigen Frischkäse zusammen mit der warmen Gemüsebrühe, dem edelsüßen Paprikapulver und den milden Kräutern in einem hohen Gefäß kurz glatt pürieren oder kräftig verquirlen.',
        'Die Hüttenkäse-Soße gleichmäßig über das Gemüse und Fleisch in der Form gießen und alles mit dem geriebenen Käse bestreuen.',
        'Den Auflauf auf mittlerer Schiene ca. 30–35 Minuten goldbraun backen, bis die Kartoffelwürfel beim Einstechen mit einer Gabel butterweich sind.'
      ]
    },
    {
      id: 'rec-3',
      title: 'Ofen-Hähnchenfrikadellen mit Süßkartoffel-Stampf',
      subtitle: 'Saftige Gemüse-Bratlinge vom Blech – ideal auch für kleine Hände',
      emoji: '🧆',
      accentColor: 'from-rose-500 to-orange-600',
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
        'Mit leicht angefeuchteten Händen 12 flache, gleich große Frikadellen formen, auf das Backblech setzen und im heißen Ofen ca. 20 Minuten saftig backen, bis sie leicht gebräunt sind.',
        'Parallel die Süßkartoffeln und die mehligkochenden Kartoffeln schälen, in grobe Würfel schneiden und in einem Topf mit leicht gesalzenem Wasser ca. 15 Minuten weich kochen.',
        'Das Kochwasser abgießen, die Kartoffeln kurz ausdampfen lassen und die fettarme Milch leicht erwärmen.',
        'Die warme Milch zu den Kartoffeln geben, alles mit einem Kartoffelstampfer zu einem feinen, cremigen Püree stampfen und zusammen mit den warmen Ofen-Frikadellen servieren.'
      ]
    },
    {
      id: 'rec-4',
      title: 'Versteckte-Gemüse-Bolognese mit Reis oder Pasta',
      subtitle: 'Rinderhack & rote Linsen vereint für doppeltes Eiweiß und Sämigkeit',
      emoji: '🍝',
      accentColor: 'from-red-600 to-rose-700',
      prepTimeActive: 15,
      prepTimePassive: 20,
      effortLevel: 'Gering (1-Topf-Soße)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Gemüse kocht komplett weich & unsichtbar in der Soße',
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
        { name: 'Vollkornnudeln oder Reis', amount: 300, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Milde Gemüsebrühe', amount: 300, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Italienische Kräuter (mild)', amount: 1, unit: 'TL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Die Zucchini waschen und die Karotten schälen. Beides auf der feinen Seite einer Küchenreibe raspeln, damit das Gemüse später beim Kochen fast unsichtbar mit der Soße verschmilzt.',
        'Einen großen Topf oder eine tiefe Pfanne erhitzen und das magere Rinderhackfleisch darin bei kräftiger Hitze 5 Minuten krümelig anbraten.',
        'Die fein geriebenen Zucchini und Karotten sowie die italienischen Kräuter zum Hackfleisch geben und unter Rühren 2–3 Minuten weich dünsten.',
        'Die trockenen roten Linsen in einem Sieb kalt abspülen, mit in den Topf geben und sofort mit den passierten Tomaten und der milden Gemüsebrühe ablöschen.',
        'Die Bolognese bei aufgelegtem Deckel auf kleiner bis mittlerer Stufe 18–20 Minuten sanft köcheln lassen und gelegentlich umrühren, bis die Linsen komplett weich sind und die Soße sämig bindet.',
        'Parallel die Vollkornnudeln oder den Reis nach Packungsanweisung in Salzwasser garen, abgießen und mit der warmen Linsen-Gemüse-Bolognese servieren.'
      ]
    },
    {
      id: 'rec-5',
      title: 'Mildes Puten-Süßkartoffel-Chili mit Mais',
      subtitle: 'Eintopf-Wunder ohne Schärfe – schmeckt durchgezogen noch besser',
      emoji: '🍲',
      accentColor: 'from-orange-600 to-amber-700',
      prepTimeActive: 15,
      prepTimePassive: 20,
      effortLevel: 'Sehr gering (One-Pot)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Süßlicher Mais & weiche Süßkartoffel statt Chili-Schärfe',
      calories: 505,
      protein: 45,
      carbs: 54,
      fat: 10,
      basePortions: 4,
      ingredients: [
        { name: 'Putenbrustfilet oder Putenhack', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Süßkartoffeln (klein gewürfelt)', amount: 500, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Kidneybohnen (Abtropfgewicht, gespült)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Goldmais (Dose, Abtropfgewicht)', amount: 150, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Stückige Tomaten (Dose)', amount: 800, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Milde Gemüsebrühe', amount: 250, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Griechischer Joghurt (2% Fett)', amount: 150, unit: 'g', category: 'Kühlregal' },
        { name: 'Paprikapulver edelsüß', amount: 1, unit: 'EL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Die Süßkartoffeln schälen und in kleine, mundgerechte Würfel (ca. 1,5 cm) schneiden. Das Putenbrustfilet ebenfalls klein würfeln (oder Putenhack bereitstellen).',
        'In einem großen Topf das Putenfleisch bei mittlerer bis hoher Hitze 4 Minuten rundherum anbraten.',
        'Die Süßkartoffelwürfel und das edelsüße Paprikapulver dazugeben und unter Rühren 1–2 Minuten kurz mitrösten, damit sich ein mildes Aroma entwickelt.',
        'Mit den stückigen Tomaten und der milden Gemüsebrühe ablöschen, einmal aufkochen und abgedeckt bei schwacher Hitze ca. 15 Minuten köcheln lassen, bis die Süßkartoffelwürfel weich sind.',
        'Währenddessen die Kidneybohnen und den Goldmais in ein Sieb geben, unter fließendem kaltem Wasser gründlich abspülen und abtropfen lassen.',
        'Bohnen und Mais in den letzten 5 Minuten unter den Eintopf heben, sanft mitwärmen und das fertige Chili mit einem Klecks griechischem Joghurt anrichten.'
      ]
    },
    {
      id: 'rec-6',
      title: 'Lachs-Reis-Blech mit Erbsen & Zitronen-Skyr-Dip',
      subtitle: 'Wertvolle Omega-3-Fettsäuren & null Aufwand am Herd',
      emoji: '🐟',
      accentColor: 'from-cyan-600 to-blue-700',
      prepTimeActive: 10,
      prepTimePassive: 20,
      effortLevel: 'Minimal (10 Min. Vorbereitung)',
      fridgeDays: 3,
      freezerMonths: 2,
      toddlerNote: 'Grätenfreies Filet zerfällt butterzart, milder Dip',
      calories: 535,
      protein: 42,
      carbs: 52,
      fat: 16,
      basePortions: 4,
      ingredients: [
        { name: 'Lachsfilet ohne Haut & Gräten (frisch/TK)', amount: 500, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Basmatireis (ungekocht)', amount: 260, unit: 'g', category: 'Vorratsschrank' },
        { name: 'TK-Erbsen (jung & zart)', amount: 350, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Skyr Natur (hoher Proteingehalt)', amount: 250, unit: 'g', category: 'Kühlregal' },
        { name: 'Karotten (in dünnen Scheiben)', amount: 250, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Zitronensaft & etwas Dill', amount: 1, unit: 'EL', category: 'Obst & Gemüse' }
      ],
      steps: [
        'Den Backofen auf 190 °C Umluft vorheizen. Die Karotten schälen und in sehr dünne, gleichmäßige Scheiben schneiden.',
        'Den Basmatireis zusammen mit den Karottenscheiben und der doppelten Menge leicht gesalzenem Wasser in einem Topf aufkochen und abgedeckt bei kleiner Hitze 12–15 Minuten quellen lassen.',
        'In den letzten 4 Minuten der Garzeit die tiefgekühlten jungen Erbsen direkt auf den Reis geben, den Deckel wieder auflegen und die Erbsen im Dampf zart garen.',
        'Während der Reis kocht, die grätenfreien Lachsfilets trocken tupfen, auf ein mit Backpapier belegtes Blech legen und im vorgeheizten Ofen 15–18 Minuten saftig garen.',
        'Für den Dip den Skyr Natur in einer Schüssel mit dem Zitronensaft, 2 EL Wasser, fein gehacktem Dill und einer kleinen Prise Salz glatt rühren.',
        'Den fertigen Erbsen-Karotten-Reis mit einer Gabel auflockern, den zarten Ofenlachs darauflegen und mit dem Zitronen-Skyr-Dip servieren.'
      ]
    },
    {
      id: 'rec-7',
      title: 'Cremiger Nudel-Erbsen-Auflauf',
      subtitle: 'Absolutes Wohlfühlessen aus dem Ofen – Nudeln kochen von selbst',
      emoji: '🧀',
      accentColor: 'from-yellow-500 to-amber-600',
      prepTimeActive: 10,
      prepTimePassive: 35,
      effortLevel: 'Minimal (Rohe Nudeln ins Blech)',
      fridgeDays: 4,
      freezerMonths: 2,
      toddlerNote: 'Weiche Nudeln & süße Erbsen, bei Kleinkindern extrem beliebt',
      calories: 480,
      protein: 35,
      carbs: 58,
      fat: 13,
      basePortions: 4,
      ingredients: [
        { name: 'Vollkorn- oder Dinkelnudeln (ungekocht)', amount: 400, unit: 'g', category: 'Vorratsschrank' },
        { name: 'TK-Erbsen', amount: 300, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Kochsahne (7% Fett) oder Hafercreme', amount: 250, unit: 'ml', category: 'Kühlregal' },
        { name: 'Milde Gemüsebrühe', amount: 600, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Hähnchenbrust-Aufschnitt (in Streifen)', amount: 200, unit: 'g', category: 'Kühlregal' },
        { name: 'Geriebener Gouda light', amount: 120, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Den Backofen auf 180 °C Umluft (200 °C Ober-/Unterhitze) vorheizen. Den Hähnchenbrust-Aufschnitt in feine, mundgerechte Streifen schneiden.',
        'Die ungekochten Vollkorn- oder Dinkelnudeln direkt in eine große, tiefe Auflaufform geben und mit den gefrorenen TK-Erbsen sowie den Hähnchenstreifen gleichmäßig vermischen.',
        'In einem Messbecher die milde Gemüsebrühe mit der Kochsahne (oder Hafercreme) und einer Prise Muskatnuss gründlich verrühren.',
        'Die Flüssigkeit vollständig über die Nudel-Gemüse-Mischung gießen und die Nudeln mit einem Löffel leicht nach unten drücken, sodass möglichst alle Nudeln mit Soße bedeckt sind.',
        'Den geriebenen Gouda Light gleichmäßig darüberstreuen und die Form auf der mittleren Schiene in den Ofen schieben.',
        'Den Auflauf 35–40 Minuten backen, bis die Nudeln die Flüssigkeit aufgesogen haben, weich gegart sind und die Käsekruste goldgelb geschmolzen ist.'
      ]
    },
    {
      id: 'rec-8',
      title: 'Ofen-Frittata mit Kartoffeln & Spinat',
      subtitle: 'Herzhaftes Blech-Omelett, in handliche Riegel schneidbar',
      emoji: '🍳',
      accentColor: 'from-green-500 to-emerald-600',
      prepTimeActive: 15,
      prepTimePassive: 25,
      effortLevel: 'Gering',
      fridgeDays: 3,
      freezerMonths: 0,
      toddlerNote: 'Ideal als kaltes Fingerfood für unterwegs',
      calories: 410,
      protein: 36,
      carbs: 28,
      fat: 16,
      basePortions: 4,
      ingredients: [
        { name: 'Gekochte Kartoffeln (gerne vom Vortag)', amount: 600, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Eier (Größe M)', amount: 8, unit: 'Stück', category: 'Kühlregal' },
        { name: 'Körniger Frischkäse light (ins Ei gerührt)', amount: 250, unit: 'g', category: 'Kühlregal' },
        { name: 'Frischer Blattspinat (oder TK)', amount: 200, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Geriebener Gouda light', amount: 80, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Den Backofen auf 180 °C Umluft vorheizen und eine große Auflaufform oder ein tiefes Backblech mit Backpapier auslegen.',
        'Die bereits gekochten Kartoffeln pellen (falls nötig) und in kleine, mundgerechte Würfel (ca. 1,5 cm) schneiden.',
        'Den frischen Blattspinat waschen und trocken schleudern (bei TK-Blattspinat diesen vorher auftauen und das überschüssige Wasser gut ausdrücken).',
        'Kartoffelwürfel und Spinat gleichmäßig auf dem Blech bzw. in der Form verteilen.',
        'Die Eier in einer großen Schüssel zusammen mit dem körnigen Frischkäse und einer milden Prise Salz und Muskatnuss kräftig verquirlen und gleichmäßig über das Gemüse gießen.',
        'Mit dem geriebenen Gouda Light bestreuen und im Ofen ca. 25 Minuten backen, bis die Eimasse bis zur Mitte vollständig gestockt und leicht goldbraun ist.'
      ]
    },
    {
      id: 'rec-9',
      title: 'Cremiger Gnocchi-Gemüse-Mix vom Blech',
      subtitle: 'Röstaromen aus dem Ofen mit geschmolzenem Mozzarella & Putenstreifen',
      emoji: '🥔',
      accentColor: 'from-rose-500 to-red-600',
      prepTimeActive: 10,
      prepTimePassive: 20,
      effortLevel: 'Minimal',
      fridgeDays: 3,
      freezerMonths: 1,
      toddlerNote: 'Weiche Gnocchi und milde, süße Tomaten',
      calories: 495,
      protein: 39,
      carbs: 58,
      fat: 12,
      basePortions: 4,
      ingredients: [
        { name: 'Gnocchi (aus dem Kühlregal)', amount: 800, unit: 'g', category: 'Kühlregal' },
        { name: 'Putenbrustfilet (in kleinen Würfeln)', amount: 450, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Kirschtomaten', amount: 300, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Zucchini (klein gewürfelt)', amount: 300, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Mini-Mozzarellakugeln (Light)', amount: 200, unit: 'g', category: 'Kühlregal' },
        { name: 'Olivenöl & italienische Kräuter', amount: 1, unit: 'EL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Den Backofen auf 200 °C Umluft vorheizen und ein großes Backblech mit Backpapier belegen.',
        'Die Zucchini waschen und in kleine, mundgerechte Würfel schneiden. Die Kirschtomaten waschen und halbieren.',
        'Das Putenbrustfilet trocken tupfen und in kleine, gleichmäßige Würfel (ca. 2 cm) schneiden, damit es zeitgleich mit den Gnocchi gar wird.',
        'Die gekühlten Gnocchi direkt aus der Packung zusammen mit den Putenwürfeln, Zucchiniwürfeln und halbierten Kirschtomaten auf das Blech geben.',
        'Alles mit dem Olivenöl und den italienischen Kräutern gründlich vermengen, flach auf dem Backblech verteilen und im heißen Ofen zunächst 15 Minuten rösten.',
        'Die abgetropften Mini-Mozzarellakugeln zwischen dem Gemüse verteilen und weitere 5–7 Minuten backen, bis der Käse weich geschmolzen und das Fleisch durchgegart ist.'
      ]
    },
    {
      id: 'rec-10',
      title: 'Mildes Hähnchen-Mango-Curry',
      subtitle: 'Fruchtig-süßes Curry, das auch kleine Kinder lieben',
      emoji: '🍛',
      accentColor: 'from-yellow-400 to-orange-500',
      prepTimeActive: 15,
      prepTimePassive: 15,
      effortLevel: 'Mittel',
      fridgeDays: 3,
      freezerMonths: 3,
      toddlerNote: 'Süße Mango mildert das milde Curry perfekt ab',
      calories: 510,
      protein: 42,
      carbs: 55,
      fat: 12,
      basePortions: 4,
      ingredients: [
        { name: 'Hähnchenbrustfilet', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Reis (ungekocht)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Reife Mango (gewürfelt)', amount: 1, unit: 'Stück', category: 'Obst & Gemüse' },
        { name: 'Kokosmilch (light)', amount: 400, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Karotten (in feinen Scheiben)', amount: 200, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Mildes Currypulver & Kurkuma', amount: 1, unit: 'TL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Den Reis in einem Sieb kalt abspülen und nach Packungsanweisung in leicht gesalzenem Wasser bei kleiner Hitze locker garen.',
        'Die Karotten schälen und in sehr feine Scheiben schneiden. Die reife Mango schälen, das Fruchtfleisch vom Stein schneiden und fein würfeln.',
        'Das Hähnchenbrustfilet in mundgerechte Stücke würfeln und in einer großen, tiefen Pfanne bei mittlerer Hitze 3–4 Minuten rundherum hell anbraten.',
        'Das milde Currypulver und Kurkuma sowie die dünnen Karottenscheiben dazugeben und unter Rühren 1 Minute sanft mitdünsten.',
        'Mit der leichten Kokosmilch ablöschen, einmal aufkochen und abgedeckt bei schwacher Hitze ca. 10 Minuten sanft köcheln lassen, bis die Karotten weich sind.',
        'Die süßen Mangowürfel unter die Soße heben, noch 3 Minuten ziehen lassen, bis die Mango weich und warm ist, und zusammen mit dem Reis servieren.'
      ]
    },
    {
      id: 'rec-11',
      title: 'Hähnchen-Fajita-Pfanne mit Reis',
      subtitle: 'Viel Protein und weiches Pfannengemüse im milden Mexiko-Style',
      emoji: '🫑',
      accentColor: 'from-orange-500 to-red-600',
      prepTimeActive: 15,
      prepTimePassive: 15,
      effortLevel: 'Gering',
      fridgeDays: 4,
      freezerMonths: 2,
      toddlerNote: 'Paprika schön weich braten, nur ganz mild würzen',
      calories: 490,
      protein: 45,
      carbs: 50,
      fat: 10,
      basePortions: 4,
      ingredients: [
        { name: 'Hähnchenbrustfilet (in Streifen)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Reis (z.B. Basmati, ungekocht)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Bunte Paprika (in Streifen)', amount: 3, unit: 'Stück', category: 'Obst & Gemüse' },
        { name: 'Rote Zwiebel', amount: 1, unit: 'Stück', category: 'Obst & Gemüse' },
        { name: 'Mildes Paprikapulver & Kreuzkümmel', amount: 1, unit: 'TL', category: 'Vorratsschrank' },
        { name: 'Passierte Tomaten', amount: 200, unit: 'ml', category: 'Vorratsschrank' }
      ],
      steps: [
        'Den Basmatireis nach Packungsanweisung in leicht gesalzenem Wasser aufsetzen und bei schwacher Hitze abgedeckt garen.',
        'Die bunten Paprikaschoten entkernen und in schmale, mundgerechte Streifen schneiden. Die rote Zwiebel schälen und in feine Streifen schneiden.',
        'Das Hähnchenbrustfilet ebenfalls in zarte Streifen schneiden und in einer großen, beschichteten Pfanne bei kräftiger Hitze 4–5 Minuten rundherum goldbraun anbraten, anschließend kurz herausnehmen.',
        'In derselben Pfanne die Paprika- und Zwiebelstreifen mit 2–3 EL Wasser bei mittlerer Hitze 8–10 Minuten dünsten, bis das Gemüse schön weich und süßlich ist.',
        'Die gebratenen Hähnchenstreifen wieder zurück zum Gemüse geben, mit mildem Paprikapulver sowie einer Prise Kreuzkümmel bestäuben und kurz durchschwenken.',
        'Mit den passierten Tomaten ablöschen, alles 5 Minuten bei kleiner Hitze sämig einköcheln lassen und zusammen mit dem lockeren Reis servieren.'
      ]
    },
    {
      id: 'rec-12',
      title: 'Bunte Quinoa-Bowl mit Kichererbsen & Skyr-Dressing',
      subtitle: 'Vegetarische Power-Bowl mit viel pflanzlichem Protein & Ofengemüse',
      emoji: '🥗',
      accentColor: 'from-emerald-500 to-green-700',
      prepTimeActive: 15,
      prepTimePassive: 25,
      effortLevel: 'Gering',
      fridgeDays: 4,
      freezerMonths: 1,
      toddlerNote: 'Weiche Quinoa und gut verdauliches Ofengemüse',
      calories: 470,
      protein: 35,
      carbs: 56,
      fat: 12,
      basePortions: 4,
      ingredients: [
        { name: 'Quinoa (ungekocht)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Kichererbsen (Dose, abgetropft)', amount: 400, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Süßkartoffel (gewürfelt)', amount: 300, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Brokkoli-Röschen', amount: 300, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Skyr Natur (als Protein-Topping)', amount: 300, unit: 'g', category: 'Kühlregal' },
        { name: 'Olivenöl', amount: 1, unit: 'EL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Den Backofen auf 200 °C Umluft vorheizen. Die Quinoa in einem feinen Sieb unter fließendem heißem Wasser gründlich abspülen (entfernt Bitterstoffe) und nach Packungsanweisung ca. 15 Minuten weich kochen.',
        'Die Süßkartoffel schälen und in kleine Würfel (ca. 1,5 cm) schneiden. Den Brokkoli in kleine, mundgerechte Röschen teilen.',
        'Die Kichererbsen aus der Dose in ein Sieb geben, kalt abspülen und gut abtropfen lassen.',
        'Süßkartoffelwürfel, Brokkoliröschen und Kichererbsen auf einem Backblech mit dem Olivenöl und milden Kräutern vermengen und im heißen Ofen ca. 22–25 Minuten rösten, bis die Süßkartoffeln weich sind.',
        'Währenddessen den Skyr Natur mit 2–3 EL kaltem Wasser, einer Prise Salz und optional etwas Zitronensaft zu einem glatten, cremigen Dressing verrühren.',
        'Die gegarte Quinoa mit einer Gabel auflockern, das warme Ofengemüse samt Kichererbsen darauf anrichten und das Skyr-Dressing darübergeben.'
      ]
    }
  ];

  // 2. Kuratierte kulinarische Bausteine für 288 weitere echte Familien-Rezepte (Gesamt = 300)
  const PROTEINS = [
    {
      short: 'Hähnchen',
      ingName: 'Hähnchenbrustfilet (mundgerecht gewürfelt)',
      amount: 600,
      unit: 'g',
      category: 'Fleisch & Frische',
      prot: 36,
      cal: 165,
      fat: 3,
      emoji: '🍗'
    },
    {
      short: 'Puten',
      ingName: 'Putenbrustfilet (zart geschnitten)',
      amount: 600,
      unit: 'g',
      category: 'Fleisch & Frische',
      prot: 36,
      cal: 160,
      fat: 2,
      emoji: '🦃'
    },
    {
      short: 'Mageres Rinderhack',
      ingName: 'Mageres Rinderhackfleisch (5% Fett)',
      amount: 550,
      unit: 'g',
      category: 'Fleisch & Frische',
      prot: 34,
      cal: 185,
      fat: 7,
      emoji: '🥩'
    },
    {
      short: 'Lachs',
      ingName: 'Lachsfilet ohne Gräten (gewürfelt)',
      amount: 500,
      unit: 'g',
      category: 'Fleisch & Frische',
      prot: 30,
      cal: 210,
      fat: 11,
      emoji: '🐟'
    },
    {
      short: 'Veggie-Linsen & Hüttenkäse',
      ingName: 'Rote Linsen & Hüttenkäse Light Mix',
      amount: 450,
      unit: 'g',
      category: 'Kühlregal',
      prot: 28,
      cal: 175,
      fat: 4,
      emoji: '🌱'
    },
    {
      short: 'Kichererbsen & Halloumi Light',
      ingName: 'Kichererbsen & Grillkäse Light (gewürfelt)',
      amount: 480,
      unit: 'g',
      category: 'Kühlregal',
      prot: 27,
      cal: 195,
      fat: 8,
      emoji: '🧀'
    }
  ];

  const CARBS = [
    {
      short: 'Basmatireis',
      ingName: 'Basmatireis (ungekocht)',
      amount: 260,
      unit: 'g',
      category: 'Vorratsschrank',
      carbs: 48,
      prot: 5,
      cal: 220
    },
    {
      short: 'Vollkorn-Penne',
      ingName: 'Vollkorn-Penne oder Spirelli',
      amount: 300,
      unit: 'g',
      category: 'Vorratsschrank',
      carbs: 50,
      prot: 9,
      cal: 245
    },
    {
      short: 'Drillingskartoffeln',
      ingName: 'Festkochende Kartoffeln (gewürfelt)',
      amount: 800,
      unit: 'g',
      category: 'Obst & Gemüse',
      carbs: 34,
      prot: 4,
      cal: 155
    },
    {
      short: 'Frische Gnocchi',
      ingName: 'Frische Kartoffel-Gnocchi (Kühlregal)',
      amount: 750,
      unit: 'g',
      category: 'Kühlregal',
      carbs: 52,
      prot: 7,
      cal: 250
    },
    {
      short: 'Süßkartoffel-Würfel',
      ingName: 'Süßkartoffeln (geschält & gewürfelt)',
      amount: 700,
      unit: 'g',
      category: 'Obst & Gemüse',
      carbs: 38,
      prot: 3,
      cal: 165
    },
    {
      short: 'Gold-Hirse & Quinoa',
      ingName: 'Milde Goldhirse-Quinoa-Mischung',
      amount: 260,
      unit: 'g',
      category: 'Vorratsschrank',
      carbs: 45,
      prot: 8,
      cal: 230
    },
    {
      short: 'Eierspätzle',
      ingName: 'Pfannen-Spätzle aus dem Kühlregal',
      amount: 650,
      unit: 'g',
      category: 'Kühlregal',
      carbs: 49,
      prot: 9,
      cal: 255
    },
    {
      short: 'Schupfnudeln',
      ingName: 'Frische Schupfnudeln (Kühlregal)',
      amount: 650,
      unit: 'g',
      category: 'Kühlregal',
      carbs: 47,
      prot: 6,
      cal: 240
    }
  ];

  const STYLES = [
    {
      styleName: 'Rahm-Pfanne mit Brokkoli & Karotten',
      subtitle: 'Schnelle 1-Pfannen-Mahlzeit in milder Frischkäse-Kräuter-Soße',
      method: 'pan',
      prepActive: 15,
      prepPassive: 15,
      effort: 'Gering (1-Pfannen-Gericht)',
      fridge: 4,
      freezer: 3,
      toddler: 'Kleine Röschen & weiche Möhrenscheiben, ganz ohne Schärfe',
      veggies: [
        { name: 'Brokkoli-Röschen (frisch oder TK)', amount: 400, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Junge Karotten (fein geschnitten)', amount: 250, unit: 'g', category: 'Obst & Gemüse' }
      ],
      sauce: [
        { name: 'Frischkäse Light (Kräuter oder Natur)', amount: 150, unit: 'g', category: 'Kühlregal' },
        { name: 'Milde Gemüsebrühe', amount: 250, unit: 'ml', category: 'Vorratsschrank' }
      ],
      extraCal: 75,
      extraProt: 5,
      extraFat: 3
    },
    {
      styleName: 'Ofen-Auflauf mit Blumenkohl & Käsekruste',
      subtitle: 'Bequemes Blechgericht mit saftigem Hüttenkäse-Guss aus dem Backofen',
      method: 'oven',
      prepActive: 12,
      prepPassive: 30,
      effort: 'Sehr gering (Ofen arbeitet)',
      fridge: 4,
      freezer: 2,
      toddler: 'Butterweicher Blumenkohl unter milder Mozzarella-Kruste',
      veggies: [
        { name: 'Blumenkohl-Röschen (TK oder frisch)', amount: 450, unit: 'g', category: 'Tiefkühlung' },
        { name: 'TK-Erbsen (zart)', amount: 200, unit: 'g', category: 'Tiefkühlung' }
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
      styleName: 'Tomaten-Ricotta-Topf mit Zucchini',
      subtitle: 'Fruchtig-milde Familiensoße mit verstecktem Gemüse & viel Eiweiß',
      method: 'stew',
      prepActive: 15,
      prepPassive: 20,
      effort: 'Minimal (One-Pot)',
      fridge: 4,
      freezer: 3,
      toddler: 'Fruchtig-süßliche Tomate, fein geriebene Zucchini kaum sichtbar',
      veggies: [
        { name: 'Zucchini (fein gewürfelt oder gerieben)', amount: 350, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Rote Paprika (mundgerecht)', amount: 250, unit: 'g', category: 'Obst & Gemüse' }
      ],
      sauce: [
        { name: 'Passierte Tomaten', amount: 500, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Ricotta oder Magerquark (zum Verfeinern)', amount: 200, unit: 'g', category: 'Kühlregal' }
      ],
      extraCal: 80,
      extraProt: 7,
      extraFat: 3
    },
    {
      styleName: 'Goldener Kurkuma-Kokos-Topf mit Spinat & Mais',
      subtitle: 'Wärmendes, absolut schärfefreies Familiencurry mit zartem Gemüse',
      method: 'curry',
      prepActive: 15,
      prepPassive: 18,
      effort: 'Gering (1 Topf)',
      fridge: 4,
      freezer: 3,
      toddler: 'Süßlicher Goldmais & cremige Kokosmilch – sehr beliebt bei Kindern',
      veggies: [
        { name: 'TK-Blattspinat (portioniert)', amount: 300, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Süßer Goldmais (Dose, abgetropft)', amount: 180, unit: 'g', category: 'Vorratsschrank' }
      ],
      sauce: [
        { name: 'Kokosmilch Light', amount: 350, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Skyr Natur (für extra Cremigkeit & Protein)', amount: 150, unit: 'g', category: 'Kühlregal' }
      ],
      extraCal: 90,
      extraProt: 6,
      extraFat: 5
    },
    {
      styleName: 'Ofenblech-Röstgemüse mit Kräuter-Quark-Dip',
      subtitle: 'Alles von einem Backblech – minimaler Abwasch & tolle Röstaromen',
      method: 'sheet',
      prepActive: 10,
      prepPassive: 25,
      effort: 'Minimal (Nur 1 Backblech)',
      fridge: 4,
      freezer: 1,
      toddler: 'Ideales Fingerfood vom Blech mit mildem Kräuter-Quark zum Dippen',
      veggies: [
        { name: 'Bunte Paprika & Karottensticks', amount: 450, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Kirschtomaten (halbiert)', amount: 250, unit: 'g', category: 'Obst & Gemüse' }
      ],
      sauce: [
        { name: 'Magerquark (als cremiger Dip)', amount: 300, unit: 'g', category: 'Kühlregal' },
        { name: 'Raps- oder Olivenöl & milde Gartenkräuter', amount: 1, unit: 'EL', category: 'Vorratsschrank' }
      ],
      extraCal: 85,
      extraProt: 9,
      extraFat: 3
    },
    {
      styleName: 'Schlemmer-Pfanne mit Kaisergemüse & Skyr-Rahm',
      subtitle: 'Blitzschnelles Vorrats-Gericht mit knackig-zartem TK-Gemüse',
      method: 'pan',
      prepActive: 12,
      prepPassive: 15,
      effort: 'Minimal (TK-Vorteil)',
      fridge: 4,
      freezer: 3,
      toddler: 'Kein Schnippeln nötig, sehr weich gedünstetes Kaisergemüse',
      veggies: [
        { name: 'TK-Kaisergemüse (Brokkoli, Blumenkohl, Karotte)', amount: 500, unit: 'g', category: 'Tiefkühlung' },
        { name: 'TK-Erbsen', amount: 150, unit: 'g', category: 'Tiefkühlung' }
      ],
      sauce: [
        { name: 'Skyr Natur', amount: 250, unit: 'g', category: 'Kühlregal' },
        { name: 'Kochsahne Light (7% Fett)', amount: 150, unit: 'ml', category: 'Kühlregal' },
        { name: 'Milde Gemüsebrühe', amount: 200, unit: 'ml', category: 'Vorratsschrank' }
      ],
      extraCal: 85,
      extraProt: 8,
      extraFat: 3
    }
  ];

  const buildStepsForMethod = (method, protein, carb, style) => {
    const isBoiledGrainOrPasta = ['Basmatireis', 'Vollkorn-Penne', 'Gold-Hirse & Quinoa'].includes(carb.short);
    const isRawPotatoOrSweetPotato = ['Drillingskartoffeln', 'Süßkartoffel-Würfel'].includes(carb.short);
    const isLachs = protein.short === 'Lachs';
    const isHack = protein.short === 'Mageres Rinderhack';
    const isLinsen = protein.short.includes('Veggie-Linsen');
    const isHalloumi = protein.short.includes('Kichererbsen');

    if (method === 'oven') {
      const step1 = isBoiledGrainOrPasta
        ? `Den Backofen auf 195 °C Umluft vorheizen. ${carb.ingName} in kochendem, leicht gesalzenem Wasser ca. 8–10 Minuten bissfest vorkochen, abgießen und in eine große Auflaufform geben.`
        : isRawPotatoOrSweetPotato
        ? `Den Backofen auf 195 °C Umluft vorheizen. ${carb.ingName} schälen bzw. waschen, in kleine Würfel (ca. 1,5 cm) schneiden und 8 Minuten in Salzwasser vorkochen, damit sie im Auflauf butterweich werden.`
        : `Den Backofen auf 195 °C Umluft vorheizen. ${carb.ingName} direkt aus der Packung nehmen und ohne Vorkochen in einer großen Auflaufform verteilen.`;

      const step2 = `Die Blumenkohl-Röschen (größere Röschen halbieren) und die tiefgekühlten Erbsen gleichmäßig dazugeben.`;

      const step3 = isHack
        ? `Das magere Rinderhackfleisch in einer heißen Pfanne 4 Minuten krümelig anbraten und anschließend unter das Gemüse und die Beilage in der Form mischen.`
        : isLinsen
        ? `Die roten Linsen in einem Sieb kalt abspülen und direkt unter die Zutaten in der Auflaufform mischen.`
        : isHalloumi
        ? `Die Kichererbsen in einem Sieb kalt abspülen, den Grillkäse Light in kleine Würfel schneiden und beides unter das Gemüse mischen.`
        : `Das ${protein.ingName.split('(')[0].trim()} trocken tupfen, in mundgerechte Würfel (ca. 2 cm) schneiden und gleichmäßig zwischen Gemüse und Beilage in der Form verteilen.`;

      const step4 = `Für den Soßen-Guss den körnigen Frischkäse Light zusammen mit der warmen Gemüsebrühe${isLinsen ? ', 100 ml extra Wasser' : ''} und milden Kräutern glatt rühren (oder kurz pürieren), über den Auflauf gießen und mit dem geriebenen Mozzarella Light bestreuen.`;

      const step5 = `Im vorgeheizten Ofen auf mittlerer Schiene ca. ${style.prepPassive} Minuten goldbraun backen, bis das Gemüse weich und der Käse geschmolzen ist. Vor dem Servieren 5 Minuten ruhen lassen.`;

      return [step1, step2, step3, step4, step5];
    }

    if (method === 'sheet') {
      const step1 = `Den Backofen auf 200 °C Umluft vorheizen und ein großes Backblech mit Backpapier auslegen. Die bunte Paprika und die Karotten in mundgerechte, schmale Sticks schneiden und die Kirschtomaten halbieren.`;

      const step2 = isBoiledGrainOrPasta
        ? `${carb.ingName} separat in einem Topf mit leicht gesalzenem Wasser nach Packungsanweisung ca. 12–15 Minuten weich kochen und abtropfen lassen.`
        : isRawPotatoOrSweetPotato
        ? `${carb.ingName} gründlich waschen bzw. schälen, in kleine mundgerechte Würfel (ca. 1,5 cm) schneiden und direkt zu den Gemüsesticks auf das Backblech geben.`
        : `${carb.ingName} direkt aus dem Kühlregal zusammen mit den Paprika- und Karottensticks auf dem Backblech verteilen.`;

      const step3 = isLachs
        ? `Das Gemüse (und ggf. die Beilage) auf dem Blech mit 1 EL Öl und milden Gartenkräutern vermengen und im heißen Ofen 12 Minuten vorrösten. Dann die grätenfreien Lachswürfel und die halbierten Kirschtomaten dazugeben und weitere 12–13 Minuten saftig garen.`
        : isHack
        ? `Aus dem mageren Rinderhackfleisch kleine, mundgerechte Bällchen (ca. 2,5 cm) formen, mit dem Gemüse und 1 EL Öl auf dem Blech verteilen und ca. ${style.prepPassive} Minuten goldbraun rösten (die Kirschtomaten in den letzten 10 Minuten dazugeben).`
        : isLinsen
        ? `Das Gemüse auf dem Blech mit 1 EL Öl und milden Kräutern ca. ${style.prepPassive} Minuten im Ofen rösten (Kirschtomaten in den letzten 10 Minuten zugeben). Parallel die roten Linsen in leicht gesalzenem Wasser 12 Minuten weich kochen, abgießen und mit dem Hüttenkäse Light vermengen.`
        : `${protein.ingName} zusammen mit dem Gemüse auf dem Blech verteilen, mit 1 EL Öl und milden Gartenkräutern mischen und im heißen Ofen ca. ${style.prepPassive} Minuten goldbraun rösten (die halbierten Kirschtomaten in den letzten 10 Minuten mitrösten).`;

      const step4 = `Während das Blech im Ofen röstet, den Magerquark in einer Schüssel mit 2–3 EL Wasser oder Milch, einem Spritzer Zitronensaft, einer Prise Salz und feinen Gartenkräutern glatt und cremig rühren.`;

      const step5 = `Das fertige Röstgemüse vom Blech nehmen${isBoiledGrainOrPasta ? `, mit ${carb.short} anrichten` : ''} und zusammen mit dem kühlen Kräuter-Quark-Dip servieren.`;

      return [step1, step2, step3, step4, step5];
    }

    if (method === 'stew') {
      const step1 = isBoiledGrainOrPasta || isRawPotatoOrSweetPotato
        ? `${carb.ingName} ${isRawPotatoOrSweetPotato ? 'schälen, in 1,5 cm große Würfel schneiden und ' : ''}in einem Topf mit leicht gesalzenem Wasser ca. 12–15 Minuten weich garen. Parallel die Zucchini fein würfeln (oder reiben) und die rote Paprika in kleine Stücke schneiden.`
        : `Die Zucchini fein würfeln (oder grob raspeln) und die rote Paprika in kleine, mundgerechte Stücke schneiden. ${carb.ingName} aus dem Kühlregal bereitstellen.`;

      const step2 = isLinsen
        ? `In einem großen Topf die Zucchini- und Paprikawürfel 3 Minuten sanft dünsten. Die roten Linsen in einem Sieb kalt abspülen und direkt mit in den Topf geben.`
        : isLachs
        ? `Das grätenfreie Lachsfilet in mundgerechte Würfel schneiden und beiseitestellen. In einem großen Topf zuerst die Zucchini- und Paprikastücke 3 Minuten sanft dünsten.`
        : `${protein.ingName} in einem großen Topf bei mittlerer bis hoher Hitze 4–5 Minuten rundherum anbraten, dann die Zucchini- und Paprikawürfel 2 Minuten mitdünsten.`;

      const step3 = `Mit den passierten Tomaten und 100 ml Wasser (oder milder Brühe) ablöschen, einmal aufkochen und abgedeckt bei kleiner Hitze ca. ${style.prepPassive} Minuten sanft köcheln lassen, bis das Gemüse schön weich ist.${isLachs ? ' In den letzten 8 Minuten die Lachswürfel in die Soße legen und sanft gar ziehen lassen.' : ''}`;

      const step4 = `Den Topf auf niedrige Stufe schalten und den Ricotta bzw. Magerquark${isLinsen ? ' sowie den Hüttenkäse Light' : ''} einrühren, bis eine sämige, fruchtig-milde Tomatensoße entsteht.`;

      const step5 = isBoiledGrainOrPasta || isRawPotatoOrSweetPotato
        ? `Die gegarte Beilage (${carb.short}) abgießen, unter den cremigen Tomaten-Ricotta-Topf heben oder zusammen warm servieren.`
        : `${carb.ingName} direkt in die heiße Tomaten-Ricotta-Soße geben, 4–5 Minuten sanft darin ziehen lassen, bis sie warm und weich sind, und servieren.`;

      return [step1, step2, step3, step4, step5];
    }

    if (method === 'curry') {
      const step1 = isBoiledGrainOrPasta || isRawPotatoOrSweetPotato
        ? `${carb.ingName} ${isRawPotatoOrSweetPotato ? 'schälen, in kleine Würfel schneiden und ' : ''}in leicht gesalzenem Wasser ca. 12–15 Minuten weich kochen. Den süßen Goldmais in einem Sieb abtropfen lassen.`
        : `Den süßen Goldmais in einem Sieb gut abtropfen lassen und ${carb.ingName} aus der Kühlung bereitstellen.`;

      const step2 = isLinsen
        ? `Die roten Linsen kalt abspülen und in einem großen Topf mit einer milden Prise Kurkuma 1 Minute kurz anschwitzen.`
        : isLachs
        ? `Das grätenfreie Lachsfilet in mundgerechte Würfel schneiden und für später beiseitestellen, damit es zart bleibt.`
        : `${protein.ingName} in einem großen Topf bei mittlerer Hitze 4 Minuten rundherum anbraten und mit einer milden Prise Kurkuma bestäuben.`;

      const step3 = `Mit der leichten Kokosmilch (und bei Linsen 100 ml Wasser) ablöschen, den tiefgekühlten Blattspinat dazugeben und abgedeckt bei schwacher Hitze ca. ${style.prepPassive} Minuten sanft köcheln lassen, bis der Spinat aufgetaut und zusammenfällt.`;

      const step4 = `Den abgetropften Goldmais${isLachs ? ' sowie die Lachswürfel' : ''}${!(isBoiledGrainOrPasta || isRawPotatoOrSweetPotato) ? ` und ${carb.ingName}` : ''} in den letzten 6–8 Minuten unter das Curry heben und sanft gar ziehen lassen.`;

      const step5 = `Den Topf vom Herd nehmen, den Skyr Natur${isLinsen ? ' sowie den Hüttenkäse Light' : ''} für extra Cremigkeit und Protein glatt einrühren (nicht mehr kochen lassen) und ${isBoiledGrainOrPasta || isRawPotatoOrSweetPotato ? `zusammen mit ${carb.short}` : 'warm'} servieren.`;

      return [step1, step2, step3, step4, step5];
    }

    // Default: method === 'pan' (Rahm-Pfanne mit Brokkoli & Karotten ODER Schlemmer-Pfanne mit Kaisergemüse & Skyr)
    const isKaisergemuese = style.styleName.includes('Kaisergemüse');

    const step1 = isKaisergemuese
      ? `Das tiefgekühlte Kaisergemüse und die TK-Erbsen bereitstellen. ${
          isBoiledGrainOrPasta || isRawPotatoOrSweetPotato
            ? `${carb.ingName} ${isRawPotatoOrSweetPotato ? 'schälen, klein würfeln und ' : ''}in einem Topf mit Salzwasser ca. 12–15 Minuten weich garen.`
            : `${carb.ingName} aus dem Kühlregal nehmen.`
        }`
      : `Die jungen Karotten schälen und in sehr feine Scheiben schneiden, den Brokkoli in kleine, mundgerechte Röschen teilen. ${
          isBoiledGrainOrPasta || isRawPotatoOrSweetPotato
            ? `Parallel ${carb.ingName} ${isRawPotatoOrSweetPotato ? 'schälen, klein würfeln und ' : ''}in leicht gesalzenem Wasser ca. 12–15 Minuten weich kochen.`
            : `${carb.ingName} griffbereit stellen.`
        }`;

    const step2 = isLinsen
      ? `Die roten Linsen kalt abspülen${!(isBoiledGrainOrPasta || isRawPotatoOrSweetPotato) ? `, ${carb.ingName} in einer großen, tiefen Pfanne 3 Minuten leicht goldbraun anbraten` : ''} und die Linsen kurz in der Pfanne anschwitzen.`
      : isLachs
      ? `Das grätenfreie Lachsfilet in mundgerechte Würfel schneiden, in einer großen, tiefen Pfanne 2 Minuten sanft anbraten und kurz auf einen Teller legen.`
      : `${protein.ingName} in einer großen, tiefen Pfanne bei mittlerer bis hoher Hitze 4–5 Minuten rundherum goldbraun anbraten${!(isBoiledGrainOrPasta || isRawPotatoOrSweetPotato) ? ` (${carb.short} die letzten 3 Minuten direkt mitbraten)` : ''}.`;

    const step3 = isKaisergemuese
      ? `Das TK-Kaisergemüse und die TK-Erbsen mit in die Pfanne geben, mit der milden Gemüsebrühe und der leichten Kochsahne ablöschen und abgedeckt ca. ${style.prepPassive} Minuten sanft köcheln lassen, bis das Gemüse butterzart ist.`
      : `Brokkoliröschen und Karottenscheiben in die Pfanne geben, mit der milden Gemüsebrühe ablöschen und bei aufgelegtem Deckel ca. ${style.prepPassive} Minuten sanft dünsten, bis das Gemüse weich ist.`;

    const step4 = isKaisergemuese
      ? `Die Hitze auf kleinste Stufe reduzieren und den Skyr Natur${isLinsen ? ' sowie den Hüttenkäse Light' : ''} glatt in die warme Rahmsoße einrühren.`
      : `Die Pfanne auf niedrige Stufe schalten und den Frischkäse Light${isLinsen ? ' sowie den Hüttenkäse Light' : ''} gleichmäßig einrühren, bis eine sämige, milde Rahmsoße entsteht.`;

    const step5 = `${isLachs ? 'Die Lachswürfel wieder vorsichtig in die Soße legen und 2 Minuten gar ziehen lassen. ' : ''}${
      isBoiledGrainOrPasta || isRawPotatoOrSweetPotato
        ? `Die gegarte Beilage (${carb.short}) abgießen, direkt unter die Pfanne heben oder zusammen warm anrichten.`
        : `Alles noch 2 Minuten in der cremigen Soße ziehen lassen und warm servieren.`
    }`;

    return [step1, step2, step3, step4, step5];
  };

  const generatedCatalog = [...SIGNATURE_RECIPES];
  let idCounter = SIGNATURE_RECIPES.length + 1;

  // 6 Proteine × 8 Kohlenhydrate × 6 Zubereitungsstile = 288 + 12 = exakt 300 Rezepte
  for (let pIdx = 0; pIdx < PROTEINS.length; pIdx++) {
    const prot = PROTEINS[pIdx];
    for (let cIdx = 0; cIdx < CARBS.length; cIdx++) {
      const carb = CARBS[cIdx];
      for (let sIdx = 0; sIdx < STYLES.length; sIdx++) {
        const style = STYLES[sIdx];
        if (generatedCatalog.length >= 300) break;

        const calories = Math.round(prot.cal + carb.cal + style.extraCal);
        const protein = Math.round(prot.prot + carb.prot + style.extraProt);
        const carbs = Math.round(carb.carbs + 8);
        const fat = Math.round(prot.fat + style.extraFat + 2);

        generatedCatalog.push({
          id: `rec-${idCounter}`,
          title: `${prot.short}-${style.styleName} & ${carb.short}`,
          subtitle: style.subtitle,
          emoji: prot.emoji,
          accentColor: ACCENT_GRADIENTS[idCounter % ACCENT_GRADIENTS.length],
          prepTimeActive: style.prepActive,
          prepTimePassive: style.prepPassive,
          effortLevel: style.effort,
          fridgeDays: style.fridge,
          freezerMonths: style.freezer,
          toddlerNote: style.toddler,
          calories,
          protein,
          carbs,
          fat,
          basePortions: 4,
          ingredients: [
            { name: prot.ingName, amount: prot.amount, unit: prot.unit, category: prot.category },
            { name: carb.ingName, amount: carb.amount, unit: carb.unit, category: carb.category },
            ...style.veggies,
            ...style.sauce
          ],
          steps: buildStepsForMethod(style.method, prot, carb, style)
        });

        idCounter++;
      }
    }
  }

  // Exportiere die 300 Rezepte global für index.html
  window.MEALMATE_RECIPES = generatedCatalog;
})();