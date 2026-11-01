/**
 * MEALMATE – EXTERNE REZEPT-DATENBANK (50 HANDKURATIERTE FITNESS- & MEAL-PREP-REZEPTE)
 *
 * Kein Baukasten-Generator mehr! Jedes der 50 Rezepte ist ein eigenständiges,
 * kulinarisch sinnvolles Gericht aus den Bereichen Fitness, High-Protein,
 * Wraps, Quesadillas, Bowls, One-Pot, Ofengerichte und schnelles Familien-Meal-Prep.
 *
 * Architektur-Regel für Titel & Farben:
 * - `title`: Prägnanter Hauptgericht-Titel (max. 28 Zeichen).
 * - `subtitle`: Beilagen, Füllungen, Toppings & Soßen.
 * - `accentColor`: Semantische Farbzuordnung (Geflügel=Orange, Rind=Rot, Fisch=Blau, Veggie=Grün).
 */
(function () {
  const THEME_COLORS = {
    POULTRY: 'from-amber-500 to-orange-600', // Hähnchen & Pute -> Orange
    BEEF: 'from-red-600 to-rose-700',       // Rind -> Rot
    FISH: 'from-cyan-600 to-blue-700',      // Lachs, Thunfisch & Weißfisch -> Blau
    VEGGIE: 'from-emerald-600 to-teal-700'  // Vegetarisch, Ei, Käse, Hülsenfrüchte -> Grün
  };

  const CURATED_50_RECIPES = [
    // ==========================================================================
    // KATEGORIE 1: PROTEIN-WRAPS, QUESADILLAS, BURRITOS & FINGERFOOD (rec-1 bis rec-12)
    // ==========================================================================
    {
      id: 'rec-1',
      title: 'Lachs-Spinat-Wraps',
      subtitle: 'Vollkorn-Tortillas mit Räucherlachs, Frischkäse-Dill-Creme, Gurke & Babyspinat',
      emoji: '🌯',
      accentColor: THEME_COLORS.FISH,
      prepTimeActive: 10,
      prepTimePassive: 0,
      effortLevel: 'Minimal (Kein Kochen)',
      fridgeDays: 2,
      freezerMonths: 0,
      toddlerNote: 'In kleine Röllchen geschnitten ideales Fingerfood',
      calories: 460,
      protein: 36,
      carbs: 42,
      fat: 14,
      basePortions: 4,
      ingredients: [
        { name: 'Große Vollkorn-Tortilla-Wraps', amount: 4, unit: 'Stück', category: 'Vorratsschrank' },
        { name: 'Räucherlachs oder Stremellachs (grätenfrei)', amount: 300, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Körniger Frischkäse (Hüttenkäse light)', amount: 200, unit: 'g', category: 'Kühlregal' },
        { name: 'Frischkäse Light (0,2% Fett)', amount: 150, unit: 'g', category: 'Kühlregal' },
        { name: 'Frischer Babyspinat (gewaschen)', amount: 100, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Salatgurke (in feinen Streifen)', amount: 1, unit: 'Stück', category: 'Obst & Gemüse' },
        { name: 'Frischer Dill & Spritzer Zitrone', amount: 1, unit: 'Bund', category: 'Obst & Gemüse' }
      ],
      steps: [
        'Den körnigen Frischkäse mit dem Frischkäse Light, fein gehacktem Dill und einem kleinen Spritzer Zitronensaft zu einer streichfähigen, proteinreichen Creme verrühren.',
        'Die Salatgurke waschen, längs halbieren, das wässrige Kerngehäuse mit einem Teelöffel ausschaben (so weicht der Wrap beim Meal-Prep nicht durch!) und in schmale Streifen schneiden.',
        'Die Vollkorn-Wraps flach ausbreiten und großzügig mit der Frischkäse-Dill-Creme bestreichen, dabei am oberen Rand 2 cm frei lassen.',
        'Mit frischem Babyspinat, den Gurkenstreifen und dem zerzupften Lachs belegen.',
        'Die Seiten leicht einschlagen, von unten her straff aufrollen und für die Meal-Prep-Box halbieren oder in mundgerechte Pinwheel-Röllchen schneiden.'
      ]
    },
    {
      id: 'rec-2',
      title: 'Puten-Avocado-Wraps',
      subtitle: 'Saftige Putenbruststreifen, cremige Avocado, Mais & Skyr-Kräuter-Dip im Wrap',
      emoji: '🌯',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 15,
      prepTimePassive: 0,
      effortLevel: 'Minimal (15-Minuten-Hit)',
      fridgeDays: 3,
      freezerMonths: 0,
      toddlerNote: 'Weiche Füllung, mild gewürzt und leicht zu greifen',
      calories: 490,
      protein: 44,
      carbs: 45,
      fat: 13,
      basePortions: 4,
      ingredients: [
        { name: 'Vollkorn- oder Protein-Wraps', amount: 4, unit: 'Stück', category: 'Vorratsschrank' },
        { name: 'Putenbrustfilet (in feinen Streifen)', amount: 550, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Reife Avocado', amount: 1, unit: 'Stück', category: 'Obst & Gemüse' },
        { name: 'Skyr Natur', amount: 200, unit: 'g', category: 'Kühlregal' },
        { name: 'Zuckermais (Abtropfgewicht, Dose)', amount: 140, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Römersalat-Herzen (in feinen Streifen)', amount: 150, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Paprika edelsüß & Rapsöl', amount: 1, unit: 'TL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Die Putenbruststreifen mit edelsüßem Paprikapulver würzen und in einer heißen Pfanne mit 1 TL Rapsöl in 5–6 Minuten rundherum saftig braten, danach kurz abkühlen lassen.',
        'Das Fruchtfleisch der Avocado mit einer Gabel fein zerdrücken und direkt mit dem Skyr Natur sowie milden Gartenkräutern zu einer grünen Protein-Creme verrühren.',
        'Die Wraps kurz 10 Sekunden in der warmen Pfanne oder Mikrowelle biegsam machen und mit der Avocado-Skyr-Creme bestreichen.',
        'Römersalat, abgetropften Zuckermais und die gebratenen Putenstreifen mittig darauf verteilen.',
        'Fest zu Burritos einrollen und in Butterbrotpapier einschlagen – hält im Kühlschrank perfekt die Form.'
      ]
    },
    {
      id: 'rec-3',
      title: 'Hähnchen-Quesadillas',
      subtitle: 'Knusprige Tortilla-Taschen mit Hähnchen, Paprika, Mais & geschmolzenem Käse',
      emoji: '🫓',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 15,
      prepTimePassive: 5,
      effortLevel: 'Gering (Pfannen-Hit)',
      fridgeDays: 3,
      freezerMonths: 2,
      toddlerNote: 'In Dreiecke geschnitten der absolute Kinder-Favorit',
      calories: 520,
      protein: 46,
      carbs: 48,
      fat: 14,
      basePortions: 4,
      ingredients: [
        { name: 'Weizen- oder Vollkorn-Tortillas', amount: 4, unit: 'Stück', category: 'Vorratsschrank' },
        { name: 'Hähnchenbrustfilet (sehr klein gewürfelt)', amount: 550, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Rote Paprika (fein gewürfelt)', amount: 1, unit: 'Stück', category: 'Obst & Gemüse' },
        { name: 'Zuckermais (Abtropfgewicht)', amount: 140, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Geriebener Mozzarella oder Gouda light', amount: 160, unit: 'g', category: 'Kühlregal' },
        { name: 'Frischkäse Light (als Kleber & Creme)', amount: 120, unit: 'g', category: 'Kühlregal' },
        { name: 'Milde Fajita-Kräuter (ohne Chili)', amount: 1, unit: 'TL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Die sehr klein geschnittenen Hähnchenwürfel zusammen mit den feinen Paprikawürfeln in einer großen Pfanne 5 Minuten scharf anbraten.',
        'Den Mais und die milden Kräuter unterheben, Pfanne vom Herd nehmen und den Frischkäse Light direkt unter die warme Hähnchen-Gemüse-Mischung rühren.',
        'Jede Tortilla auf einer Hälfte mit der Hähnchen-Masse belegen, mit reichlich geriebenem Light-Käse bestreuen und die leere Hälfte darüberklappen.',
        'Die gefüllten Halbmonde in einer trockenen Pfanne (oder auf dem Kontaktgrill) von beiden Seiten je 2 Minuten goldbraun rösten, bis der Käse Fäden zieht.',
        'In handliche Dreiecke (Ecken) schneiden – schmeckt warm aus der Pfanne und auch kalt in der Brotdose.'
      ]
    },
    {
      id: 'rec-4',
      title: 'Rinder-Bohnen-Quesadillas',
      subtitle: 'Saftiges Rinderhack, milde Kidneybohnen & Cheddar-Schmelz in gerösteter Tortilla',
      emoji: '🌮',
      accentColor: THEME_COLORS.BEEF,
      prepTimeActive: 15,
      prepTimePassive: 5,
      effortLevel: 'Gering (Tex-Mex Mild)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Bohnen leicht angedrückt, würzig aber garantiert ohne Schärfe',
      calories: 535,
      protein: 45,
      carbs: 50,
      fat: 15,
      basePortions: 4,
      ingredients: [
        { name: 'Große Tortilla-Wraps', amount: 4, unit: 'Stück', category: 'Vorratsschrank' },
        { name: 'Mageres Rinderhackfleisch', amount: 500, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Kidneybohnen (Abtropfgewicht, Dose)', amount: 240, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Tomatenmark', amount: 2, unit: 'EL', category: 'Vorratsschrank' },
        { name: 'Geriebener Cheddar oder Gouda light', amount: 150, unit: 'g', category: 'Kühlregal' },
        { name: 'Skyr Natur (als milder Dip dazu)', amount: 150, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Das magere Rinderhackfleisch in einer großen Pfanne ohne Öl krümelig anbraten.',
        'Die abgespülten Kidneybohnen und das Tomatenmark mit 4 EL Wasser dazugeben und die Bohnen mit einem Kartoffelstampfer grob zerdrücken, sodass eine sämige Füllung entsteht.',
        'Die Masse auf jeweils eine Hälfte der Tortillas streichen, den Käse darübergeben und zusammenklappen.',
        'In der Pfanne ohne Fett von beiden Seiten knusprig ausbacken, vierteln und mit einem Klecks kühlem Skyr servieren.'
      ]
    },
    {
      id: 'rec-5',
      title: 'Veggie-Bohnen-Quesadillas',
      subtitle: 'Schwarze Bohnen, Süßkartoffelwürfel, Mais & Hüttenkäse-Mozzarella-Füllung',
      emoji: '🌽',
      accentColor: THEME_COLORS.VEGGIE,
      prepTimeActive: 15,
      prepTimePassive: 10,
      effortLevel: 'Gering (Veggie-Power)',
      fridgeDays: 4,
      freezerMonths: 2,
      toddlerNote: 'Süßliche Süßkartoffel & weiche Bohnen in knuspriger Hülle',
      calories: 495,
      protein: 35,
      carbs: 62,
      fat: 11,
      basePortions: 4,
      ingredients: [
        { name: 'Vollkorn-Tortillas', amount: 4, unit: 'Stück', category: 'Vorratsschrank' },
        { name: 'Schwarze Bohnen oder Kidneybohnen (Dose)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Süßkartoffel (sehr fein gewürfelt)', amount: 300, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Zuckermais (Abtropfgewicht)', amount: 140, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Körniger Frischkäse (Hüttenkäse)', amount: 200, unit: 'g', category: 'Kühlregal' },
        { name: 'Geriebener Mozzarella light', amount: 150, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Die geschälte Süßkartoffel in winzige Würfel (ca. 0,5 cm) schneiden und in einer Pfanne mit 3 EL Wasser abgedeckt 6–7 Minuten weich dünsten.',
        'Bohnen und Mais hinzufügen, kurz erwärmen und vom Herd nehmen.',
        'Körnigen Frischkäse und Mozzarella unterheben, auf die Tortillahälften verteilen, zuklappen und beidseitig goldbraun rösten.'
      ]
    },
    {
      id: 'rec-6',
      title: 'Thunfisch-Frischkäse-Wraps',
      subtitle: 'Schnelle High-Protein-Rolle mit Thunfisch, Ei, knackiger Paprika & Mais',
      emoji: '🐟',
      accentColor: THEME_COLORS.FISH,
      prepTimeActive: 10,
      prepTimePassive: 8,
      effortLevel: 'Minimal (Vorratsschrank-Hit)',
      fridgeDays: 3,
      freezerMonths: 0,
      toddlerNote: 'Sehr milde, saftige Thunfisch-Creme ohne Gräten',
      calories: 470,
      protein: 45,
      carbs: 44,
      fat: 11,
      basePortions: 4,
      ingredients: [
        { name: 'Vollkorn-Tortilla-Wraps', amount: 4, unit: 'Stück', category: 'Vorratsschrank' },
        { name: 'Thunfisch im eigenen Saft (Abtropfgewicht)', amount: 300, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Eier (hartgekocht & gehackt)', amount: 3, unit: 'Stück', category: 'Kühlregal' },
        { name: 'Frischkäse Light oder Skyr', amount: 200, unit: 'g', category: 'Kühlregal' },
        { name: 'Gelbe Paprika (sehr fein gewürfelt)', amount: 1, unit: 'Stück', category: 'Obst & Gemüse' },
        { name: 'Zuckermais (Abtropfgewicht)', amount: 100, unit: 'g', category: 'Vorratsschrank' }
      ],
      steps: [
        'Die Eier in 8 Minuten hart kochen, abschrecken, pellen und fein würfeln.',
        'Den gut abgetropften Thunfisch in einer Schüssel mit einer Gabel zerpflücken und mit Frischkäse Light, den gehackten Eiern, Mais und feinen Paprikawürfeln mischen.',
        'Die Thunfisch-Ei-Creme gleichmäßig auf die 4 Wraps streichen, fest aufrollen und schräg halbieren.'
      ]
    },
    {
      id: 'rec-7',
      title: 'Chicken-Caesar-Wraps',
      subtitle: 'Gebratene Hähnchenbrust, Römersalat, Parmesan & leichtes Joghurt-Caesar-Dressing',
      emoji: '🥗',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 15,
      prepTimePassive: 0,
      effortLevel: 'Minimal (Fitness-Klassiker)',
      fridgeDays: 3,
      freezerMonths: 0,
      toddlerNote: 'Milder geschmolzener Parmesan & zartes Hähnchen',
      calories: 485,
      protein: 46,
      carbs: 43,
      fat: 12,
      basePortions: 4,
      ingredients: [
        { name: 'Vollkorn-Wraps', amount: 4, unit: 'Stück', category: 'Vorratsschrank' },
        { name: 'Hähnchenbrustfilet', amount: 550, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Römersalat (in feinen Streifen)', amount: 200, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Griechischer Joghurt (2% Fett) oder Skyr', amount: 200, unit: 'g', category: 'Kühlregal' },
        { name: 'Geriebener Parmesan oder Grana Padano', amount: 50, unit: 'g', category: 'Kühlregal' },
        { name: 'Zitronensaft & 1 TL milder Senf', amount: 1, unit: 'TL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Das Hähnchenbrustfilet in Streifen schneiden und in einer beschichteten Pfanne in 5–6 Minuten goldbraun braten.',
        'Für das leichte Caesar-Dressing den Joghurt mit der Hälfte des Parmesans, einem Spritzer Zitrone und 1 TL mildem Senf verrühren.',
        'Die Wraps mit dem Dressing bestreichen, Römersalat, warme Hähnchenstreifen und restlichen Parmesan darauf verteilen und straff aufrollen.'
      ]
    },
    {
      id: 'rec-8',
      title: 'Rinder-Burrito-Wraps',
      subtitle: 'Gefüllte Freezer-Burritos mit Rinderhack, Reis, Mais, Bohnen & Käse',
      emoji: '🌯',
      accentColor: THEME_COLORS.BEEF,
      prepTimeActive: 20,
      prepTimePassive: 10,
      effortLevel: 'Mittel (Perfekt für TK-Vorrat)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Ausgepackt auch mit dem Löffel essbar, sehr saftig',
      calories: 560,
      protein: 42,
      carbs: 62,
      fat: 14,
      basePortions: 4,
      ingredients: [
        { name: 'Große Weizen- oder Vollkorn-Tortillas', amount: 4, unit: 'Stück', category: 'Vorratsschrank' },
        { name: 'Mageres Rinderhackfleisch', amount: 500, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Basmatireis (ungekocht)', amount: 150, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Passierte Tomaten', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Zuckermais & milde Kidneybohnen Mix', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Geriebener Gouda light', amount: 120, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Den Reis nach Packungsanweisung garen. Parallel das Rinderhackfleisch in einer Pfanne krümelig anbraten.',
        'Passierte Tomaten, abgetropften Mais und Bohnen zum Hackfleisch geben und 5 Minuten dicklich einköcheln lassen, dann den gekochten Reis unterheben.',
        'Die Füllung mit dem Käse auf die 4 Tortillas verteilen, die Seiten einschlagen und zu kompakten Burritos aufrollen.',
        'Optional in der Pfanne rundherum kurz anrösten – lässt sich einzeln gewickelt hervorragend einfrieren und aufwärmen!'
      ]
    },
    {
      id: 'rec-9',
      title: 'Griechische Puten-Gyros-Wraps',
      subtitle: 'Mild gewürztes Putengyros, Gurken-Tsatsiki aus Magerquark, Tomaten & Hirtenkäse',
      emoji: '🥙',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 15,
      prepTimePassive: 5,
      effortLevel: 'Gering (Urlaubs-Flair)',
      fridgeDays: 3,
      freezerMonths: 0,
      toddlerNote: 'Tsatsiki ohne rohen Knoblauch, super erfrischend',
      calories: 505,
      protein: 47,
      carbs: 46,
      fat: 13,
      basePortions: 4,
      ingredients: [
        { name: 'Vollkorn-Wraps oder dünne Fladenbrote', amount: 4, unit: 'Stück', category: 'Vorratsschrank' },
        { name: 'Putenbrustfilet (fein geschnetzelt)', amount: 550, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Magerquark (für mildes Familien-Tsatsiki)', amount: 250, unit: 'g', category: 'Kühlregal' },
        { name: 'Hirtenkäse / Feta light (zerbröselt)', amount: 100, unit: 'g', category: 'Kühlregal' },
        { name: 'Salatgurke (geraspelt & ausgedrückt)', amount: 1, unit: 'Stück', category: 'Obst & Gemüse' },
        { name: 'Kirschtomaten (geviertelt)', amount: 150, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Oregano, Paprika edelsüß & 1 EL Olivenöl', amount: 1, unit: 'EL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Die Salatgurke grob raspeln, das Wasser mit den Händen kräftig ausdrücken und mit dem Magerquark sowie etwas Kräutersalz zu einem dicken Tsatsiki verrühren.',
        'Das Putengeschnetzelte mit Oregano und edelsüßem Paprikapulver im Olivenöl 5 Minuten goldbraun braten.',
        'Wraps mit dem Quark-Tsatsiki bestreichen, Putengyros, Tomaten und zerbröselten Hirtenkäse light daraufgeben und fest einrollen.'
      ]
    },
    {
      id: 'rec-10',
      title: 'Ei-Hüttenkäse Breakfast-Wraps',
      subtitle: 'Fluffiges Rührei mit geschmolzenem Hüttenkäse, Spinat & Putenbrust-Schinken',
      emoji: '🍳',
      accentColor: THEME_COLORS.VEGGIE,
      prepTimeActive: 10,
      prepTimePassive: 5,
      effortLevel: 'Minimal (10-Minuten-Blitz)',
      fridgeDays: 3,
      freezerMonths: 2,
      toddlerNote: 'Butterweiches Rührei im Wrap, perfekt für Kita & Büro',
      calories: 450,
      protein: 38,
      carbs: 38,
      fat: 14,
      basePortions: 4,
      ingredients: [
        { name: 'Vollkorn-Tortilla-Wraps', amount: 4, unit: 'Stück', category: 'Vorratsschrank' },
        { name: 'Eier (Größe M)', amount: 6, unit: 'Stück', category: 'Kühlregal' },
        { name: 'Körniger Frischkäse (ins Ei verquirlt)', amount: 250, unit: 'g', category: 'Kühlregal' },
        { name: 'Putenbrust-Aufschnitt (gewürfelt)', amount: 150, unit: 'g', category: 'Kühlregal' },
        { name: 'Frischer Babyspinat', amount: 100, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Geriebener Gouda light', amount: 80, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Die Eier zusammen mit dem körnigen Frischkäse in einer Schüssel verquirlen.',
        'Putenbrust-Würfel und Babyspinat in einer beschichteten Pfanne 1 Minute anwärmen, bis der Spinat zusammenfällt.',
        'Die Ei-Hüttenkäse-Masse dazugießen und bei mittlerer Hitze unter Rühren in 3–4 Minuten zu einem saftigen Rührei stocken lassen.',
        'Mit dem Käse auf die Wraps verteilen, einschlagen und in der Pfanne kurz von außen knusprig braten.'
      ]
    },
    {
      id: 'rec-11',
      title: 'Ofen-Hähnchenfrikadellen',
      subtitle: 'Saftige Quark-Gemüse-Bratlinge vom Blech auf cremigem Süßkartoffel-Stampf',
      emoji: '🧆',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 20,
      prepTimePassive: 20,
      effortLevel: 'Mittel (Kein Braten am Herd)',
      fridgeDays: 4,
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
        { name: 'Süßkartoffeln & mehligkochende Kartoffeln', amount: 900, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Fettarme Milch (1,5%) für den Stampf', amount: 100, unit: 'ml', category: 'Kühlregal' }
      ],
      steps: [
        'Backofen auf 200 °C Umluft vorheizen. Das Hähnchenhack mit Magerquark, Ei, Haferflocken und fein geriebener Karotte verkneten.',
        'Mit angefeuchteten Händen 12 kleine Frikadellen formen und auf einem Backblech mit Backpapier ca. 20 Minuten goldbraun backen.',
        'Parallel die geschälten Süßkartoffel- und Kartoffelwürfel 15 Minuten weich kochen, abgießen und mit der warmen Milch zu cremigem Püree stampfen.'
      ]
    },
    {
      id: 'rec-12',
      title: 'Käsige Spinat-Waffeln',
      subtitle: 'Herzhafte High-Protein-Haferwaffeln mit Hüttenkäse & mildem Kräuterquark-Dip',
      emoji: '🧇',
      accentColor: THEME_COLORS.VEGGIE,
      prepTimeActive: 15,
      prepTimePassive: 10,
      effortLevel: 'Gering (Kinder-Liebling)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Weiche grüne Hulk-Waffeln, ideal für die Brotdose',
      calories: 440,
      protein: 36,
      carbs: 42,
      fat: 12,
      basePortions: 4,
      ingredients: [
        { name: 'Zarte Haferflocken (oder Hafermehl)', amount: 220, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Körniger Frischkäse (Hüttenkäse)', amount: 250, unit: 'g', category: 'Kühlregal' },
        { name: 'Eier (Größe M)', amount: 4, unit: 'Stück', category: 'Kühlregal' },
        { name: 'Frischer Babyspinat', amount: 120, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Geriebener Gouda light', amount: 100, unit: 'g', category: 'Kühlregal' },
        { name: 'Magerquark (als Kräuter-Dip dazu)', amount: 250, unit: 'g', category: 'Kühlregal' },
        { name: 'Backpulver', amount: 1, unit: 'TL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Haferflocken, körnigen Frischkäse, Eier, Babyspinat, Backpulver und 50 ml Wasser im Standmixer oder mit dem Pürierstab zu einem grünen Waffelteig mixen.',
        'Den geriebenen Gouda light unter den Teig heben und im vorgeheizten Waffeleisen (oder als kleine Pancakes in der Pfanne) nacheinander goldbraun ausbacken.',
        'Den Magerquark mit etwas Milch und Schnittlauch glatt rühren und als Dip zu den Waffeln packen.'
      ]
    },

    // ==========================================================================
    // KATEGORIE 2: FITNESS-BOWLS & SALAT-MEAL-PREPS (rec-13 bis rec-22)
    // ==========================================================================
    {
      id: 'rec-13',
      title: 'Teriyaki-Lachs-Bowl',
      subtitle: 'Saftige Lachswürfel auf Jasminreis mit Edamame, Gurke, Karotte & Sesam-Skyr',
      emoji: '🥣',
      accentColor: THEME_COLORS.FISH,
      prepTimeActive: 15,
      prepTimePassive: 10,
      effortLevel: 'Gering (Sushi-Bowl-Style)',
      fridgeDays: 3,
      freezerMonths: 0,
      toddlerNote: 'Milde, leicht süßliche Glasur & knackige grüne Bohnenkerne',
      calories: 540,
      protein: 41,
      carbs: 58,
      fat: 15,
      basePortions: 4,
      ingredients: [
        { name: 'Lachsfilet ohne Haut (gewürfelt)', amount: 500, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Jasmin- oder Sushi-Reis (ungekocht)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'TK-Edamame Bohnen (geschält)', amount: 200, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Karotte & Salatgurke (gestiftelt)', amount: 300, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Milde Teriyaki-Soße oder Sojasoße + Honig', amount: 4, unit: 'EL', category: 'Vorratsschrank' },
        { name: 'Skyr Natur (für das schnelle Dressing)', amount: 150, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Den Jasminreis nach Packungsanweisung kochen; in den letzten 3 Minuten die gefrorenen Edamame-Kerne direkt auf den Reis legen und mitdämpfen.',
        'Die Lachswürfel in einer Pfanne 4–5 Minuten anbraten, mit der Teriyaki-Soße ablöschen und 1 Minute glänzend glasieren.',
        'Reis, Edamame, frische Gurken- und Karottenstifte sowie die Lachswürfel in 4 Bowls anrichten und mit einem Klecks Skyr toppen.'
      ]
    },
    {
      id: 'rec-14',
      title: 'Mexikanische Burrito-Bowl',
      subtitle: 'Hähnchenbrust, Limetten-Reis, schwarze Bohnen, Mais, Tomaten & Joghurt-Dip',
      emoji: '🥗',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 15,
      prepTimePassive: 12,
      effortLevel: 'Gering (Baukasten-Bowl)',
      fridgeDays: 4,
      freezerMonths: 2,
      toddlerNote: 'Komponenten einzeln nebeneinander – ideal für wählerische Esser',
      calories: 515,
      protein: 46,
      carbs: 60,
      fat: 9,
      basePortions: 4,
      ingredients: [
        { name: 'Hähnchenbrustfilet (gewürfelt)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Basmatireis (ungekocht)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Schwarze Bohnen oder Kidneybohnen (Dose)', amount: 240, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Zuckermais (Abtropfgewicht)', amount: 140, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Kirschtomaten (halbiert)', amount: 200, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Skyr oder Griechischer Joghurt light', amount: 200, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Den Basmatireis locker garen. Währenddessen die Hähnchenwürfel mit mildem Paprikapulver in einer Pfanne 6 Minuten goldbraun braten.',
        'Bohnen und Mais in einem Sieb abspülen und abtropfen lassen, Kirschtomaten halbieren.',
        'Den Reis als Basis in 4 Meal-Prep-Boxen verteilen und Hähnchen, Bohnen, Mais, Tomaten und einen Klecks Skyr farbenfroh darauf anrichten.'
      ]
    },
    {
      id: 'rec-15',
      title: 'Koreanische Beef-Bowl',
      subtitle: 'Mageres Rinderhack in milder Sesam-Soja-Glasur auf Reis mit gedämpftem Brokkoli',
      emoji: '🥩',
      accentColor: THEME_COLORS.BEEF,
      prepTimeActive: 15,
      prepTimePassive: 10,
      effortLevel: 'Minimal (15-Minuten-Meal-Prep)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Süßlich-mildes Rinderhack & weiche Brokkoliröschen',
      calories: 525,
      protein: 43,
      carbs: 56,
      fat: 13,
      basePortions: 4,
      ingredients: [
        { name: 'Mageres Rinderhackfleisch', amount: 550, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Jasminreis (ungekocht)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Brokkoli-Röschen (frisch oder TK)', amount: 450, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Karotte (in feinen Streifen)', amount: 150, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Sojasoße (reduzierter Salzgehalt) & 1 EL Honig', amount: 4, unit: 'EL', category: 'Vorratsschrank' },
        { name: 'Sesamöl & Sesamsamen', amount: 1, unit: 'EL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Den Jasminreis kochen; die kleinen Brokkoliröschen in den letzten 5 Minuten direkt im Reistopf über dem Reis mitdämpfen.',
        'Das Rinderhackfleisch in einer Pfanne krümelig anbraten, die feinen Karottenstreifen 2 Minuten mitdünsten.',
        'Sojasoße, Honig, Sesamöl und 3 EL Wasser dazugeben, kurz einköcheln lassen und zusammen mit Reis und Brokkoli anrichten.'
      ]
    },
    {
      id: 'rec-16',
      title: 'Mediterrane Couscous-Bowl',
      subtitle: 'Saftige Putenstreifen auf Tomaten-Couscous mit Gurke, Oliven & Feta-Quark-Dip',
      emoji: '🥙',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 15,
      prepTimePassive: 5,
      effortLevel: 'Minimal (Schmeckt auch kalt)',
      fridgeDays: 4,
      freezerMonths: 0,
      toddlerNote: 'Lockerer Couscous & milder Joghurt-Quark-Dip',
      calories: 500,
      protein: 45,
      carbs: 52,
      fat: 11,
      basePortions: 4,
      ingredients: [
        { name: 'Putenbrustfilet (gewürfelt)', amount: 550, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Couscous (schnellgarende Körner)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Milde Gemüsebrühe (kochend)', amount: 300, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Salatgurke & Kirschtomaten (gewürfelt)', amount: 350, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Hirtenkäse / Feta light', amount: 100, unit: 'g', category: 'Kühlregal' },
        { name: 'Magerquark (als cremiger Dip)', amount: 200, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Den Couscous in einer Schüssel mit der kochenden Gemüsebrühe übergießen, abdecken und 5 Minuten quellen lassen, dann mit einer Gabel auflockern.',
        'Die Putenwürfel in einer Pfanne mit 1 TL Öl und mediterranen Kräutern 5–6 Minuten goldbraun braten.',
        'Gurken- und Tomatenwürfel unter den abgekühlten Couscous heben, mit Putenwürfeln, zerbröseltem Feta light und einem Klecks Kräuterquark servieren.'
      ]
    },
    {
      id: 'rec-17',
      title: 'Falafel-Hummus-Bowl',
      subtitle: 'Knusprige Ofen-Falafel auf Quinoa mit geröstetem Blumenkohl, Gurke & Skyr-Hummus',
      emoji: '🧆',
      accentColor: THEME_COLORS.VEGGIE,
      prepTimeActive: 15,
      prepTimePassive: 15,
      effortLevel: 'Minimal (Veggie-Liebling)',
      fridgeDays: 4,
      freezerMonths: 0,
      toddlerNote: 'Weiche Falafel-Bällchen & cremiger Dip zum Eintunken',
      calories: 510,
      protein: 35,
      carbs: 58,
      fat: 14,
      basePortions: 4,
      ingredients: [
        { name: 'Fertige Falafel-Bällchen (Kühlregal)', amount: 360, unit: 'g', category: 'Kühlregal' },
        { name: 'Quinoa oder Couscous (ungekocht)', amount: 240, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Blumenkohl-Röschen (frisch oder TK)', amount: 400, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Hummus Natur', amount: 120, unit: 'g', category: 'Kühlregal' },
        { name: 'Skyr Natur (gemischt mit dem Hummus)', amount: 250, unit: 'g', category: 'Kühlregal' },
        { name: 'Salatgurke & Kirschtomaten', amount: 250, unit: 'g', category: 'Obst & Gemüse' }
      ],
      steps: [
        'Quinoa oder Couscous nach Packungsanweisung garen. Die Blumenkohlröschen und Falafel auf einem Blech bei 200 °C Umluft 12–15 Minuten rösten.',
        'Den Hummus mit dem Skyr Natur glatt verrühren – das spart Fett und liefert eine riesige Portion Extra-Protein.',
        'Quinoa, Ofen-Blumenkohl, frisches Gemüse, Falafel und die Hummus-Skyr-Creme in Bowls anrichten.'
      ]
    },
    {
      id: 'rec-18',
      title: 'Griechische Souvlaki-Bowl',
      subtitle: 'Zartes Hähnchen-Souvlaki auf Reisnudeln oder Reis mit Ofen-Zucchini & Tsatsiki',
      emoji: '🍢',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 15,
      prepTimePassive: 12,
      effortLevel: 'Gering (Sommerlich & leicht)',
      fridgeDays: 4,
      freezerMonths: 2,
      toddlerNote: 'Milde Kräuter-Hähnchenstücke & weiche Zucchini',
      calories: 495,
      protein: 46,
      carbs: 54,
      fat: 9,
      basePortions: 4,
      ingredients: [
        { name: 'Hähnchenbrustfilet (mundgerecht)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Langkorn- oder Parboiled-Reis', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Zucchini & rote Paprika (gewürfelt)', amount: 450, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Magerquark & Joghurt Mix (für Tsatsiki)', amount: 250, unit: 'g', category: 'Kühlregal' },
        { name: 'Salatgurke (geraspelt)', amount: 150, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Zitronensaft, Oregano & 1 EL Olivenöl', amount: 1, unit: 'EL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Den Reis garen. Hähnchenwürfel mit Oregano, Zitronensaft und Olivenöl in einer Pfanne 5 Minuten anbraten, dann Zucchini und Paprika 4 Minuten mitbraten.',
        'Geraspelte Gurke mit dem Magerquark-Joghurt-Mix verrühren und zusammen mit dem Hähnchen-Gemüse auf dem Reis anrichten.'
      ]
    },
    {
      id: 'rec-19',
      title: 'Thunfisch-Reissalat-Bowl',
      subtitle: 'Bunter Meal-Prep-Reissalat mit Thunfisch, Ei, Erbsen, Paprika & Joghurt-Dressing',
      emoji: '🥗',
      accentColor: THEME_COLORS.FISH,
      prepTimeActive: 15,
      prepTimePassive: 12,
      effortLevel: 'Minimal (Kein Aufwärmen nötig)',
      fridgeDays: 4,
      freezerMonths: 0,
      toddlerNote: 'Lässt sich perfekt kalt oder lauwarm löffeln',
      calories: 480,
      protein: 43,
      carbs: 52,
      fat: 10,
      basePortions: 4,
      ingredients: [
        { name: 'Thunfisch im eigenen Saft (Abtropfgewicht)', amount: 300, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Parboiled-Reis (ungekocht)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'TK-Erbsen (jung & zart)', amount: 200, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Eier (hartgekocht)', amount: 3, unit: 'Stück', category: 'Kühlregal' },
        { name: 'Rote Paprika (fein gewürfelt)', amount: 1, unit: 'Stück', category: 'Obst & Gemüse' },
        { name: 'Skyr Natur & 1 TL milder Senf', amount: 200, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Den Reis kochen und in den letzten 3 Minuten die TK-Erbsen direkt mit ins Kochwasser geben; danach abgießen und kalt abbrausen.',
        'Abgetropften Thunfisch, gewürfelte Eier, Paprikawürfel und ein leichtes Dressing aus Skyr, etwas Wasser und Senf unter den Reis heben.'
      ]
    },
    {
      id: 'rec-20',
      title: 'Süßkartoffel-Kichererbsen-Bowl',
      subtitle: 'Ofengeröstete Süßkartoffel & Kichererbsen auf Spinat mit Hüttenkäse-Tahini-Dip',
      emoji: '🍠',
      accentColor: THEME_COLORS.VEGGIE,
      prepTimeActive: 15,
      prepTimePassive: 20,
      effortLevel: 'Sehr gering (Blech-Bowl)',
      fridgeDays: 4,
      freezerMonths: 2,
      toddlerNote: 'Süßliche Ofenwürfel, Kichererbsen weich gebacken',
      calories: 490,
      protein: 35,
      carbs: 62,
      fat: 11,
      basePortions: 4,
      ingredients: [
        { name: 'Süßkartoffeln (gewürfelt)', amount: 700, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Kichererbsen (Abtropfgewicht, Dose)', amount: 400, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Körniger Frischkäse (Hüttenkäse)', amount: 300, unit: 'g', category: 'Kühlregal' },
        { name: 'Magerquark (für das Dressing)', amount: 150, unit: 'g', category: 'Kühlregal' },
        { name: 'Frischer Babyspinat', amount: 150, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Olivenöl & milde Paprikagewürze', amount: 1, unit: 'EL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Süßkartoffelwürfel und abgetropfte Kichererbsen mit 1 EL Olivenöl auf einem Backblech mischen und bei 200 °C Umluft 20 Minuten rösten.',
        'Babyspinat in die Bowls legen, warme Süßkartoffeln und Kichererbsen daraufgeben und mit körnigem Frischkäse sowie einem Quark-Dip toppen.'
      ]
    },
    {
      id: 'rec-21',
      title: 'Hähnchen-Quinoa-Power-Bowl',
      subtitle: 'Saftige Hähnchenbrust, fluffiger Quinoa, Ofen-Brokkoli, Avocado & Zitronen-Skyr',
      emoji: '🥑',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 15,
      prepTimePassive: 15,
      effortLevel: 'Gering (Clean Eating)',
      fridgeDays: 4,
      freezerMonths: 0,
      toddlerNote: 'Feine Quinoa-Körnchen & weiche Avocado-Schnitze',
      calories: 530,
      protein: 47,
      carbs: 48,
      fat: 15,
      basePortions: 4,
      ingredients: [
        { name: 'Hähnchenbrustfilet', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Quinoa (ungekocht)', amount: 240, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Brokkoli-Röschen', amount: 400, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Reife Avocado', amount: 1, unit: 'Stück', category: 'Obst & Gemüse' },
        { name: 'Skyr Natur', amount: 200, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Quinoa heiß abspülen und in der doppelten Menge leicht gesalzenem Wasser 15 Minuten garen; Brokkoliröschen in den letzten 5 Minuten mitdämpfen.',
        'Hähnchenbrust in Streifen braten und zusammen mit Quinoa, Brokkoli, Avocadospalten und einem Zitronen-Skyr-Klecks anrichten.'
      ]
    },
    {
      id: 'rec-22',
      title: 'Linsen-Feta-Nudelsalat',
      subtitle: 'Meal-Prep-Pastasalat mit Spirelli, braunen Linsen, Gurke, Tomaten & Hirtenkäse',
      emoji: '🥗',
      accentColor: THEME_COLORS.VEGGIE,
      prepTimeActive: 15,
      prepTimePassive: 10,
      effortLevel: 'Minimal (Büro- & Kita-Hit)',
      fridgeDays: 4,
      freezerMonths: 0,
      toddlerNote: 'Nudeln und milde Linsen – zieht im Kühlschrank toll durch',
      calories: 495,
      protein: 36,
      carbs: 64,
      fat: 10,
      basePortions: 4,
      ingredients: [
        { name: 'Vollkorn-Spirelli oder Linsennudeln', amount: 280, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Braune Linsen (Abtropfgewicht, Dose)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Hirtenkäse / Feta light (gewürfelt)', amount: 150, unit: 'g', category: 'Kühlregal' },
        { name: 'Körniger Frischkäse (für das Dressing)', amount: 200, unit: 'g', category: 'Kühlregal' },
        { name: 'Salatgurke & Kirschtomaten', amount: 350, unit: 'g', category: 'Obst & Gemüse' }
      ],
      steps: [
        'Die Spirelli bissfest kochen und kalt abspülen. Den körnigen Frischkäse mit 3 EL Wasser und milden italienischen Kräutern zu einem cremigen Dressing pürieren.',
        'Nudeln, abgespülte Linsen, gewürfelte Gurke, halbierte Kirschtomaten und Feta light mit dem Protein-Dressing vermengen.'
      ]
    },

    // ==========================================================================
    // KATEGORIE 3: PASTA, GNOCCHI, SPÄTZLE & NUDEL-AUFLÄUFE (rec-23 bis rec-33)
    // ==========================================================================
    {
      id: 'rec-23',
      title: 'Puten-Bolognese',
      subtitle: 'Mit Vollkorn-Spirelli & fein geraspelter Zucchini in milder Tomaten-Hüttenkäse-Soße',
      emoji: '🍝',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 15,
      prepTimePassive: 15,
      effortLevel: 'Gering (Familien-Klassiker)',
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
        { name: 'Zucchini & Karotte (fein geraspelt)', amount: 400, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Passierte Tomaten', amount: 500, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Körniger Frischkäse (in die Soße gerührt)', amount: 150, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Spirelli in Salzwasser garen. Parallel das Putenhackfleisch in einer tiefen Pfanne krümelig anbraten.',
        'Die fein geraspelte Zucchini und Karotte 3 Minuten mitdünsten, mit passierten Tomaten ablöschen und 10 Minuten sanft köcheln.',
        'Körnigen Frischkäse für extra Cremigkeit unterrühren und mit den Nudeln mischen.'
      ]
    },
    {
      id: 'rec-24',
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
        { name: 'TK-Blattspinat oder Babyspinat', amount: 250, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Frischkäse Light (0,2%)', amount: 150, unit: 'g', category: 'Kühlregal' },
        { name: 'Geriebener Mozzarella light', amount: 100, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Backofen auf 200 °C Umluft vorheizen. Ungekochte Gnocchi, rohe kleine Hähnchenwürfel und Spinat direkt in eine Auflaufform geben.',
        'Passierte Tomaten mit Frischkäse Light, 100 ml Wasser und milden Kräutern verrühren, darübergießen, mit Mozzarella bestreuen und 25 Minuten backen.'
      ]
    },
    {
      id: 'rec-25',
      title: 'Käsesspätzle mit Pute',
      subtitle: 'Saftiger Pfannen-Hit mit zarten Putenstreifen, Karotten & Hüttenkäse-Schmelz',
      emoji: '🧀',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 15,
      prepTimePassive: 10,
      effortLevel: 'Gering (Kinder-Favorit)',
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
        { name: 'Karotten (fein gerieben) & TK-Erbsen', amount: 450, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Körniger Frischkäse', amount: 250, unit: 'g', category: 'Kühlregal' },
        { name: 'Geriebener milder Reibekäse light', amount: 100, unit: 'g', category: 'Kühlregal' },
        { name: 'Milde Gemüsebrühe', amount: 150, unit: 'ml', category: 'Vorratsschrank' }
      ],
      steps: [
        'Putenwürfel in einer großen Pfanne 4–5 Minuten anbraten. Spätzle, geriebene Karotten und Erbsen dazugeben, mit Brühe ablöschen und 5 Minuten dünsten.',
        'Körnigen Frischkäse und Reibekäse unterrühren und 2 Minuten cremig schmelzen lassen.'
      ]
    },
    {
      id: 'rec-26',
      title: 'Lachs-Spinat-Tagliatelle',
      subtitle: 'Bandnudeln mit zarten Lachswürfeln & Blattspinat in leichter Zitronen-Frischkäse-Soße',
      emoji: '🍝',
      accentColor: THEME_COLORS.FISH,
      prepTimeActive: 15,
      prepTimePassive: 5,
      effortLevel: 'Minimal (20-Minuten-Essen)',
      fridgeDays: 3,
      freezerMonths: 2,
      toddlerNote: 'Sehr weiche Nudeln und saftiger Lachs ohne Gräten',
      calories: 535,
      protein: 41,
      carbs: 58,
      fat: 14,
      basePortions: 4,
      ingredients: [
        { name: 'Tagliatelle oder Penne', amount: 300, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Lachsfilet ohne Haut (grätenfrei)', amount: 500, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'TK-Blattspinat', amount: 350, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Frischkäse Light & 150 ml Milch (1,5%)', amount: 200, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Nudeln nach Packungsanweisung kochen. Parallel Blattspinat, Milch und Frischkäse Light in einer tiefen Pfanne aufkochen.',
        'Die mundgerechten Lachswürfel in die Spinatsoße legen, abgedeckt 6–7 Minuten sanft gar ziehen lassen und die Nudeln unterheben.'
      ]
    },
    {
      id: 'rec-27',
      title: 'Puten-Schupfnudel-Pfanne',
      subtitle: 'Goldbraune Schupfnudeln mit süßem Mais, Erbsen & leichtem Kräuterquark-Rahm',
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
        { name: 'Putenbrustfilet (in Streifen)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'TK-Erbsen & Zuckermais', amount: 400, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Magerquark', amount: 200, unit: 'g', category: 'Kühlregal' },
        { name: 'Milde Gemüsebrühe', amount: 150, unit: 'ml', category: 'Vorratsschrank' }
      ],
      steps: [
        'Putenstreifen und Schupfnudeln in einer großen Pfanne mit 1 EL Rapsöl 5–6 Minuten goldbraun anbraten.',
        'Erbsen, Mais und Brühe dazugeben, 4 Minuten dünsten, vom Herd nehmen und den glatt gerührten Magerquark unterheben.'
      ]
    },
    {
      id: 'rec-28',
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
        { name: 'Passierte Tomaten & 300 ml Gemüsebrühe', amount: 600, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Körniger Frischkäse (als Béchamel-Ersatz)', amount: 300, unit: 'g', category: 'Kühlregal' },
        { name: 'Geriebener Mozzarella light', amount: 100, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Backofen auf 190 °C Umluft vorheizen. Passierte Tomaten, Brühe, abgespülte rote Linsen und geriebenes Gemüse verrühren.',
        'Abwechselnd Soße, Lasagneplatten und körnigen Frischkäse in eine Form schichten, mit Mozzarella bestreuen und 30–35 Minuten backen.'
      ]
    },
    {
      id: 'rec-29',
      title: 'One-Pot Cheeseburger-Pasta',
      subtitle: 'Gabelspaghetti mit magerem Rinderhack, milden Tomaten & geschmolzenem Cheddar',
      emoji: '🍔',
      accentColor: THEME_COLORS.BEEF,
      prepTimeActive: 15,
      prepTimePassive: 12,
      effortLevel: 'Minimal (Nur 1 Topf)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Schmeckt wie ein milder Cheeseburger in Nudelform',
      calories: 545,
      protein: 45,
      carbs: 56,
      fat: 14,
      basePortions: 4,
      ingredients: [
        { name: 'Hörnchennudeln oder Spirelli', amount: 300, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Mageres Rinderhackfleisch', amount: 550, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Karotte (sehr fein geraspelt)', amount: 150, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Passierte Tomaten & 500 ml Brühe', amount: 400, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Frischkäse Light', amount: 100, unit: 'g', category: 'Kühlregal' },
        { name: 'Geriebener Cheddar oder Gouda light', amount: 100, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Rinderhackfleisch und feine Karottenraspel in einem großen Topf anbraten.',
        'Ungekochte Nudeln, passierte Tomaten und Brühe direkt dazugeben und unter gelegentlichem Rühren 10–12 Minuten köcheln, bis die Nudeln gar sind.',
        'Frischkäse Light und geriebenen Käse unterheben, bis eine sämige Käsesoße entsteht.'
      ]
    },
    {
      id: 'rec-30',
      title: 'Hähnchen-Pesto-Pasta',
      subtitle: 'Penne mit saftiger Hähnchenbrust, Brokkoliröschen & leichtem Basilikum-Ricotta-Pesto',
      emoji: '🌿',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 15,
      prepTimePassive: 5,
      effortLevel: 'Minimal (Schnell-Pasta)',
      fridgeDays: 4,
      freezerMonths: 2,
      toddlerNote: 'Milde grüne Soße und butterweich mitgegarter Brokkoli',
      calories: 520,
      protein: 46,
      carbs: 55,
      fat: 12,
      basePortions: 4,
      ingredients: [
        { name: 'Vollkorn-Penne', amount: 300, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Hähnchenbrustfilet (gewürfelt)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Brokkoli-Röschen (klein geteilt)', amount: 400, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Grünes Basilikum-Pesto', amount: 3, unit: 'EL', category: 'Vorratsschrank' },
        { name: 'Körniger Frischkäse oder Ricotta light', amount: 200, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Penne in Salzwasser kochen; in den letzten 4 Minuten die kleinen Brokkoliröschen direkt im Nudelwasser mitgaren.',
        'Hähnchenwürfel in einer Pfanne goldbraun braten. Pesto mit dem körnigen Frischkäse und 4 EL Nudelkochwasser cremig rühren und alles vermengen.'
      ]
    },
    {
      id: 'rec-31',
      title: 'Tortellini-Gemüse-Auflauf',
      subtitle: 'Frische Ricotta-Spinat-Tortellini in Hüttenkäse-Tomaten-Rahm mit Erbsen & Käse',
      emoji: '🥟',
      accentColor: THEME_COLORS.VEGGIE,
      prepTimeActive: 10,
      prepTimePassive: 20,
      effortLevel: 'Minimal (5-Zutaten-Auflauf)',
      fridgeDays: 4,
      freezerMonths: 2,
      toddlerNote: 'Gefüllte Nudeltaschen sind bei Kleinkindern extrem beliebt',
      calories: 515,
      protein: 36,
      carbs: 60,
      fat: 13,
      basePortions: 4,
      ingredients: [
        { name: 'Frische Tortellini (Spinat-Ricotta oder Käse)', amount: 500, unit: 'g', category: 'Kühlregal' },
        { name: 'TK-Erbsen und Möhren', amount: 350, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Passierte Tomaten', amount: 400, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Körniger Frischkäse (Hüttenkäse)', amount: 300, unit: 'g', category: 'Kühlregal' },
        { name: 'Geriebener Mozzarella light', amount: 120, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Tortellini und TK-Erbsen-Möhren direkt ungekocht in eine Auflaufform geben.',
        'Passierte Tomaten mit körnigem Frischkäse und 100 ml Wasser verrühren, darübergießen, mit Mozzarella bestreuen und bei 200 °C Umluft 20 Minuten backen.'
      ]
    },
    {
      id: 'rec-32',
      title: 'Thunfisch-Tomaten-Penne',
      subtitle: 'Schnelle Fitness-Pasta mit Thunfisch, Mais, Zucchini & cremiger Frischkäse-Tomatensoße',
      emoji: '🐟',
      accentColor: THEME_COLORS.FISH,
      prepTimeActive: 15,
      prepTimePassive: 5,
      effortLevel: 'Minimal (Vorratsschrank-Pasta)',
      fridgeDays: 3,
      freezerMonths: 2,
      toddlerNote: 'Milde, leicht süßliche Tomatensoße mit Mais',
      calories: 495,
      protein: 42,
      carbs: 60,
      fat: 9,
      basePortions: 4,
      ingredients: [
        { name: 'Penne oder Spirelli', amount: 300, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Thunfisch im eigenen Saft (Abtropfgewicht)', amount: 300, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Zucchini (klein gewürfelt)', amount: 250, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Zuckermais (Abtropfgewicht)', amount: 140, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Passierte Tomaten', amount: 400, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Frischkäse Light', amount: 150, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Nudeln kochen. Parallel die Zucchiniwürfel in einer Pfanne 3 Minuten andünsten, passierte Tomaten und Mais dazugeben und 5 Minuten köcheln.',
        'Abgetropften Thunfisch und Frischkäse Light unterrühren und mit den abgetropften Penne mischen.'
      ]
    },
    {
      id: 'rec-33',
      title: 'Kürbis-Maultaschen-Pfanne',
      subtitle: 'Geschnittene Geflügel-Maultaschen mit Hokkaido-Kürbis, Spinat & Ei-Frischkäse-Guss',
      emoji: '🥟',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 15,
      prepTimePassive: 10,
      effortLevel: 'Gering (Schwäbischer Hit)',
      fridgeDays: 4,
      freezerMonths: 2,
      toddlerNote: 'Weiche Maultaschen-Streifen und milder Kürbis',
      calories: 510,
      protein: 39,
      carbs: 54,
      fat: 14,
      basePortions: 4,
      ingredients: [
        { name: 'Geflügel- oder Gemüse-Maultaschen (Kühlregal)', amount: 600, unit: 'g', category: 'Kühlregal' },
        { name: 'Hokkaido-Kürbis oder Karotten (klein gewürfelt)', amount: 350, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Frischer Babyspinat', amount: 100, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Eier (Größe M)', amount: 3, unit: 'Stück', category: 'Kühlregal' },
        { name: 'Körniger Frischkäse', amount: 200, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Kürbiswürfel in einer großen Pfanne mit 100 ml Brühe abgedeckt 8 Minuten weich dünsten. Maultaschen in Streifen schneiden und 4 Minuten mitbraten.',
        'Spinat unterheben, Eier mit dem körnigen Frischkäse verquirlen, darübergießen und unter Rühren stocken lassen.'
      ]
    },

    // ==========================================================================
    // KATEGORIE 4: CURRYS, REISPFANNEN & ONE-POT-KLASSIKER (rec-34 bis rec-42)
    // ==========================================================================
    {
      id: 'rec-34',
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
        { name: 'Basmatireis (ungekocht)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Hähnchenbrustfilet (klein gewürfelt)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'TK-Erbsen und Möhren', amount: 400, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Fettarme Milch (1,5%) & 250 ml Brühe', amount: 250, unit: 'ml', category: 'Kühlregal' },
        { name: 'Frischkäse Light (0,2% Fett)', amount: 120, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Reis in leicht gesalzenem Wasser garen. Hähnchenwürfel in einer tiefen Pfanne 4–5 Minuten anbraten.',
        'Mit Brühe und Milch ablöschen, TK-Erbsen und Möhren dazugeben und 10 Minuten köcheln. Frischkäse Light glatt einrühren und mit dem Reis servieren.'
      ]
    },
    {
      id: 'rec-35',
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
        { name: 'Jasminreis (ungekocht)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'TK-Blattspinat', amount: 350, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Kokosmilch Light', amount: 400, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Körniger Frischkäse', amount: 150, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Jasminreis kochen. Kokosmilch Light mit Blattspinat und einer Prise Kurkuma in einer tiefen Pfanne aufkochen und körnigen Frischkäse einrühren.',
        'Lachswürfel in die Soße legen und abgedeckt bei schwacher Hitze 6–8 Minuten gar ziehen lassen.'
      ]
    },
    {
      id: 'rec-36',
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
        { name: 'Rote Linsen (trocken)', amount: 120, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Basmatireis (ungekocht)', amount: 240, unit: 'g', category: 'Vorratsschrank' },
        { name: 'TK-Blumenkohl-Röschen', amount: 400, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Passierte Tomaten & 300 ml Brühe', amount: 400, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Skyr Natur', amount: 250, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Reis garen. Passierte Tomaten, Brühe, rote Linsen und Blumenkohlröschen 12 Minuten köcheln lassen.',
        'Kichererbsen dazugeben, 3 Minuten mitwärmen, vom Herd ziehen und den Skyr glatt unterrühren.'
      ]
    },
    {
      id: 'rec-37',
      title: 'Rinder-Kartoffel-Gulasch',
      subtitle: 'Sämiger Familien-Eintopf mit weichen Kartoffelwürfeln, Karotten & Paprika',
      emoji: '🍲',
      accentColor: THEME_COLORS.BEEF,
      prepTimeActive: 15,
      prepTimePassive: 20,
      effortLevel: 'Gering (Ein-Topf-Wunder)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Alles auf einem Löffel, Kartoffeln binden die Soße natürlich',
      calories: 505,
      protein: 42,
      carbs: 49,
      fat: 13,
      basePortions: 4,
      ingredients: [
        { name: 'Rinderhackfleisch (mager)', amount: 550, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Vorwiegend festkochende Kartoffeln', amount: 750, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Rote Paprika & Karotten (gewürfelt)', amount: 500, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Passierte Tomaten & 400 ml Brühe', amount: 400, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Skyr zum Verfeinern', amount: 100, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Rinderhackfleisch in einem großen Topf anbraten, gewürfelte Kartoffeln, Karotten und Paprika kurz mitrösten.',
        'Mit passierten Tomaten und Brühe aufgießen, abgedeckt 18–20 Minuten weich köcheln und am Ende Skyr unterrühren.'
      ]
    },
    {
      id: 'rec-38',
      title: 'Mango-Hähnchen-Curry',
      subtitle: 'Fruchtig-mildes Familiencurry mit Hähnchenbrust, Mango, Kokosmilch & Basmatireis',
      emoji: '🥭',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 15,
      prepTimePassive: 12,
      effortLevel: 'Minimal (Kinder-Hit)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Fruchtig-süß durch Mango, garantiert ohne Schärfe',
      calories: 520,
      protein: 44,
      carbs: 62,
      fat: 10,
      basePortions: 4,
      ingredients: [
        { name: 'Hähnchenbrustfilet (gewürfelt)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Basmatireis (ungekocht)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'TK-Mango-Würfel oder reife Mango', amount: 250, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Rote Paprika (fein gewürfelt)', amount: 1, unit: 'Stück', category: 'Obst & Gemüse' },
        { name: 'Kokosmilch Light', amount: 300, unit: 'ml', category: 'Vorratsschrank' },
        { name: 'Skyr Natur', amount: 150, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Basmatireis kochen. Hähnchen- und Paprikawürfel in einer Pfanne 5 Minuten anbraten.',
        'Kokosmilch Light und Mangowürfel dazugeben, 8 Minuten sanft köcheln, bis die Mango die Soße fruchtig bindet, und Skyr unterheben.'
      ]
    },
    {
      id: 'rec-39',
      title: 'Gebratener Ei-Reis mit Pute',
      subtitle: 'Schneller Egg-Fried-Rice mit Putenstreifen, Erbsen, Karotten, Mais & Rührei',
      emoji: '🍳',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 15,
      prepTimePassive: 10,
      effortLevel: 'Minimal (Wok-Klassiker)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Bunter Reis mit süßen Erbsen und weichem Ei',
      calories: 515,
      protein: 47,
      carbs: 56,
      fat: 11,
      basePortions: 4,
      ingredients: [
        { name: 'Putenbrustfilet (klein gewürfelt)', amount: 550, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Basmati- oder Jasminreis (ungekocht)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'TK-Erbsen und Möhren', amount: 350, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Eier (Größe M)', amount: 3, unit: 'Stück', category: 'Kühlregal' },
        { name: 'Milde Sojasoße & 1 TL Sesamöl', amount: 3, unit: 'EL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Reis kochen und kurz ausdampfen lassen. Putenwürfel in einer großen Pfanne scharf anbraten, TK-Erbsen und Möhren 4 Minuten mitbraten.',
        'Gemüse an den Pfannenrand schieben, die verquirlten Eier in der Mitte zu Rührei stocken lassen und mit dem Reis und der Sojasoße vermengen.'
      ]
    },
    {
      id: 'rec-40',
      title: 'Mildes Chili con Carne',
      subtitle: 'Mageres Rinderhack, Zuckermais & Kidneybohnen auf lockerem Reis mit Skyr-Klecks',
      emoji: '🫘',
      accentColor: THEME_COLORS.BEEF,
      prepTimeActive: 15,
      prepTimePassive: 15,
      effortLevel: 'Minimal (Klassiker für Vorrat)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Komplett ohne Chili-Schärfe, nur mit edelsüßem Paprikapulver',
      calories: 530,
      protein: 45,
      carbs: 58,
      fat: 12,
      basePortions: 4,
      ingredients: [
        { name: 'Mageres Rinderhackfleisch', amount: 550, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Parboiled-Reis (ungekocht)', amount: 240, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Kidneybohnen & Zuckermais (Abtropfgewicht)', amount: 380, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Gehackte oder passierte Tomaten', amount: 500, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Skyr Natur (als Topping)', amount: 150, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Reis garen. Rinderhackfleisch krümelig anbraten, Tomaten, abgespülte Bohnen und Mais dazugeben und 15 Minuten sämig einköcheln.',
        'Mit edelsüßem Paprikapulver und einer Prise Kakao mild abschmecken und mit Reis und Skyr servieren.'
      ]
    },
    {
      id: 'rec-41',
      title: 'Puten-Geschnetzeltes',
      subtitle: 'Zürcher Art mit Champignons & Erbsen in leichter Frischkäse-Rahmsoße, dazu Reis',
      emoji: '🍄',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 15,
      prepTimePassive: 10,
      effortLevel: 'Gering (Sonntags-Meal-Prep)',
      fridgeDays: 4,
      freezerMonths: 2,
      toddlerNote: 'Weiche Champignonscheiben und sehr milde Rahmsoße',
      calories: 495,
      protein: 46,
      carbs: 54,
      fat: 9,
      basePortions: 4,
      ingredients: [
        { name: 'Putenbrustfilet (geschnetzelt)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Basmatireis (ungekocht)', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Braune Champignons (in Scheiben)', amount: 300, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'TK-Erbsen', amount: 150, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Frischkäse Light & 250 ml Gemüsebrühe', amount: 150, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Reis garen. Putengeschnetzeltes und Champignonscheiben in einer Pfanne 6 Minuten anbraten.',
        'Mit Brühe ablöschen, Erbsen 4 Minuten mitgaren und den Frischkäse Light zu einer cremigen Rahmsoße einrühren.'
      ]
    },
    {
      id: 'rec-42',
      title: 'Süßkartoffel-Erdnuss-Stew',
      subtitle: 'Cremiger Veggie-Eintopf mit roten Linsen, Süßkartoffel, Spinat & Erdnussmus',
      emoji: '🥜',
      accentColor: THEME_COLORS.VEGGIE,
      prepTimeActive: 15,
      prepTimePassive: 15,
      effortLevel: 'Minimal (One-Pot Soulfood)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Nussig-süßlich und durch die Linsen herrlich dickflüssig',
      calories: 510,
      protein: 35,
      carbs: 60,
      fat: 14,
      basePortions: 4,
      ingredients: [
        { name: 'Rote Linsen (trocken)', amount: 220, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Süßkartoffeln (klein gewürfelt)', amount: 600, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Passierte Tomaten & 500 ml Gemüsebrühe', amount: 400, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Reines Erdnussmus (ohne Zuckerzusatz)', amount: 2, unit: 'EL', category: 'Vorratsschrank' },
        { name: 'Körniger Frischkäse (als Protein-Topping)', amount: 200, unit: 'g', category: 'Kühlregal' },
        { name: 'Babyspinat', amount: 120, unit: 'g', category: 'Obst & Gemüse' }
      ],
      steps: [
        'Süßkartoffelwürfel und gewaschene rote Linsen in den passierten Tomaten und der Brühe abgedeckt 15 Minuten weich köcheln.',
        'Erdnussmus und Babyspinat unterrühren und jede Portion mit körnigem Frischkäse toppen.'
      ]
    },

    // ==========================================================================
    // KATEGORIE 5: OFENGERICHTE, BLECH-MEAL-PREP & GRATINS (rec-43 bis rec-50)
    // ==========================================================================
    {
      id: 'rec-43',
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
        { name: 'Geriebener Gouda / Mozzarella light', amount: 100, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Backofen auf 200 °C Umluft vorheizen. Kartoffelwürfel, kleine Brokkoliröschen und Hähnchenstücke in einer großen Auflaufform mischen.',
        'Körnigen Frischkäse mit Brühe und edelsüßem Paprikapulver pürieren, darübergießen, mit Käse bestreuen und 30–35 Minuten backen.'
      ]
    },
    {
      id: 'rec-44',
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
        { name: 'Frischkäse Light mit Kräutern & 200 ml Milch', amount: 150, unit: 'g', category: 'Kühlregal' },
        { name: 'Geriebener Gouda light', amount: 80, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Reis vorkochen und Brokkoli in den letzten 4 Minuten mitgaren, dann in eine Auflaufform geben.',
        'Seelachsstücke darauflegen, mit der verquirlten Milch-Frischkäse-Soße übergießen, mit Käse bestreuen und bei 190 °C Umluft 20 Minuten backen.'
      ]
    },
    {
      id: 'rec-45',
      title: 'Lachs-Ofenkartoffel-Blech',
      subtitle: 'Alles von einem Blech: Lachsfilet, Drillinge, grüne Bohnen & Zitronen-Quark',
      emoji: '🍋',
      accentColor: THEME_COLORS.FISH,
      prepTimeActive: 10,
      prepTimePassive: 25,
      effortLevel: 'Minimal (1-Blech-Gericht)',
      fridgeDays: 3,
      freezerMonths: 0,
      toddlerNote: 'Weiche Ofenkartoffeln und milder Kräuterquark',
      calories: 515,
      protein: 42,
      carbs: 46,
      fat: 16,
      basePortions: 4,
      ingredients: [
        { name: 'Lachsfilet (in 4 Portionen)', amount: 500, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Kleine Kartoffeln / Drillinge (halbiert)', amount: 800, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'TK-Prinzessbohnen oder Brokkoli', amount: 400, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Magerquark (für den Zitronen-Kräuter-Dip)', amount: 250, unit: 'g', category: 'Kühlregal' },
        { name: 'Olivenöl', amount: 1, unit: 'EL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Halbierte Kartoffeln mit 1 EL Olivenöl auf einem Blech bei 200 °C Umluft 15 Minuten vorbacken.',
        'Grüne Bohnen und Lachsfilets dazulegen und weitere 12 Minuten garen. Mit glatt gerührtem Kräuterquark servieren.'
      ]
    },
    {
      id: 'rec-46',
      title: 'Knusprige Cornflakes-Nuggets',
      subtitle: 'Selbstgemachte Ofen-Hähnchen-Nuggets mit Kartoffel-Wedges & mildem Joghurt-Dip',
      emoji: '🍗',
      accentColor: THEME_COLORS.POULTRY,
      prepTimeActive: 20,
      prepTimePassive: 20,
      effortLevel: 'Mittel (Gesunder Fast-Food-Hit)',
      fridgeDays: 3,
      freezerMonths: 3,
      toddlerNote: 'Knusprig ohne Frittieren – der absolute Hit bei Kindern',
      calories: 510,
      protein: 46,
      carbs: 58,
      fat: 8,
      basePortions: 4,
      ingredients: [
        { name: 'Hähnchenbrustfilet (in Nugget-Stücken)', amount: 600, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Ungesüßte Cornflakes (zerbröselt)', amount: 80, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Kartoffeln (in Spalten / Wedges)', amount: 800, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Skyr Natur (zum Wenden & als Dip)', amount: 250, unit: 'g', category: 'Kühlregal' },
        { name: 'Gurke oder Karottensticks dazu', amount: 250, unit: 'g', category: 'Obst & Gemüse' }
      ],
      steps: [
        'Kartoffelspalten auf einem Backblech verteilen. Die Hähnchenstücke erst durch 3 EL Skyr ziehen, dann in den zerbröselten Cornflakes wenden und mit aufs Blech legen.',
        'Bei 200 °C Umluft ca. 20 Minuten knusprig backen und mit dem restlichen Skyr als Dip sowie Rohkost-Sticks servieren.'
      ]
    },
    {
      id: 'rec-47',
      title: 'Gefüllte Hackfleisch-Paprika',
      subtitle: 'Milde Paprikahälften gefüllt mit Rinderhack, Reis & geschmolzenem Hirtenkäse',
      emoji: '🫑',
      accentColor: THEME_COLORS.BEEF,
      prepTimeActive: 15,
      prepTimePassive: 25,
      effortLevel: 'Gering (Ofen-Klassiker)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Weich geschmorte Paprika in fruchtiger Tomatensoße',
      calories: 500,
      protein: 43,
      carbs: 48,
      fat: 13,
      basePortions: 4,
      ingredients: [
        { name: 'Rote und gelbe Paprika (halbiert)', amount: 4, unit: 'Stück', category: 'Obst & Gemüse' },
        { name: 'Mageres Rinderhackfleisch', amount: 500, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Parboiled-Reis (ungekocht)', amount: 200, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Passierte Tomaten & 200 ml Brühe', amount: 500, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Hirtenkäse / Feta light', amount: 120, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Reis vorkochen. Rinderhackfleisch kurz anbraten und mit dem Reis vermischen.',
        'Paprikahälften in eine Auflaufform setzen, passierte Tomaten und Brühe angießen, Hack-Reis-Mischung einfüllen, mit Feta light bestreuen und bei 200 °C 25 Minuten backen.'
      ]
    },
    {
      id: 'rec-48',
      title: 'Cottage-Pie (Hack-Auflauf)',
      subtitle: 'Würziges Rinderhack mit Erbsen & Karotten unter einer goldbraunen Kartoffelbrei-Decke',
      emoji: '🥧',
      accentColor: THEME_COLORS.BEEF,
      prepTimeActive: 20,
      prepTimePassive: 20,
      effortLevel: 'Mittel (Britisches Soulfood)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Butterweiche Kartoffelkruste und saftiges Gemüse-Hack darunter',
      calories: 525,
      protein: 44,
      carbs: 52,
      fat: 14,
      basePortions: 4,
      ingredients: [
        { name: 'Mageres Rinderhackfleisch', amount: 550, unit: 'g', category: 'Fleisch & Frische' },
        { name: 'Mehligkochende Kartoffeln (für den Stampf)', amount: 850, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'TK-Erbsen und Möhren', amount: 400, unit: 'g', category: 'Tiefkühlung' },
        { name: 'Passierte Tomaten & 150 ml Brühe', amount: 250, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Fettarme Milch & 80 g Reibekäse light', amount: 150, unit: 'ml', category: 'Kühlregal' }
      ],
      steps: [
        'Kartoffeln weich kochen und mit Milch zu Püree stampfen. Parallel Rinderhack mit Erbsen, Möhren, Tomaten und Brühe 8 Minuten einköcheln.',
        'Hackmasse in eine Form füllen, Kartoffelpüree darauf glatt streichen, mit Käse bestreuen und bei 200 °C Umluft 20 Minuten überbacken.'
      ]
    },
    {
      id: 'rec-49',
      title: 'Gemüse-Kartoffel-Frittata',
      subtitle: 'Saftiges Ofen-Omelett mit Kartoffelwürfeln, Brokkoli, Paprika & Hüttenkäse',
      emoji: '🍳',
      accentColor: THEME_COLORS.VEGGIE,
      prepTimeActive: 15,
      prepTimePassive: 25,
      effortLevel: 'Sehr gering (Schmeckt warm & kalt)',
      fridgeDays: 4,
      freezerMonths: 2,
      toddlerNote: 'Wie ein herzhafter Eierkuchen in handlichen Stücken',
      calories: 465,
      protein: 37,
      carbs: 38,
      fat: 16,
      basePortions: 4,
      ingredients: [
        { name: 'Eier (Größe M)', amount: 8, unit: 'Stück', category: 'Kühlregal' },
        { name: 'Körniger Frischkäse (Hüttenkäse)', amount: 300, unit: 'g', category: 'Kühlregal' },
        { name: 'Festkochende Kartoffeln (sehr klein gewürfelt)', amount: 500, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Brokkoli-Röschen & rote Paprika', amount: 400, unit: 'g', category: 'Obst & Gemüse' },
        { name: 'Geriebener Gouda light', amount: 80, unit: 'g', category: 'Kühlregal' }
      ],
      steps: [
        'Kartoffelwürfel und Gemüse in einer Pfanne mit 4 EL Wasser abgedeckt 8 Minuten vorgaren und in eine Auflaufform geben.',
        'Eier mit dem körnigen Frischkäse verquirlen, über das Gemüse gießen, mit Käse bestreuen und bei 190 °C Umluft 22–25 Minuten goldgelb stocken lassen.'
      ]
    },
    {
      id: 'rec-50',
      title: 'Apfel-Quark-Auflauf',
      subtitle: 'Süßer High-Protein-Familienauflauf mit Haferflocken, Magerquark, Äpfeln & Zimt',
      emoji: '🍎',
      accentColor: THEME_COLORS.VEGGIE,
      prepTimeActive: 10,
      prepTimePassive: 25,
      effortLevel: 'Minimal (Süßes Hauptgericht)',
      fridgeDays: 4,
      freezerMonths: 3,
      toddlerNote: 'Ohne Industriezucker, nur natürliche Süße aus Äpfeln',
      calories: 455,
      protein: 36,
      carbs: 54,
      fat: 9,
      basePortions: 4,
      ingredients: [
        { name: 'Magerquark', amount: 500, unit: 'g', category: 'Kühlregal' },
        { name: 'Skyr Natur', amount: 250, unit: 'g', category: 'Kühlregal' },
        { name: 'Zarte Haferflocken', amount: 200, unit: 'g', category: 'Vorratsschrank' },
        { name: 'Eier (Größe M)', amount: 3, unit: 'Stück', category: 'Kühlregal' },
        { name: 'Süße Äpfel (klein gewürfelt)', amount: 3, unit: 'Stück', category: 'Obst & Gemüse' },
        { name: 'Zimt & 1 EL Honig oder Apfelmark', amount: 1, unit: 'TL', category: 'Vorratsschrank' }
      ],
      steps: [
        'Backofen auf 190 °C Umluft vorheizen. Magerquark, Skyr, Eier, Haferflocken, Zimt und 1 EL Honig in einer Schüssel glatt rühren.',
        'Die kleinen Apfelwürfel unterheben, in eine Auflaufform füllen und im Ofen ca. 25–30 Minuten goldbraun backen – schmeckt warm und kalt fantastisch!'
      ]
    }
  ];

  window.MEALMATE_RECIPES = CURATED_50_RECIPES;
})();
