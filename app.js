const quizData = [
  {
    question: "Temperatura de încălzire în cazul călirii oțelurilor hipoeutectoide este:",
    a: " AC3 + (20...40) 0C",
    b: "AC3 / (20...40) 0C",
    c: "AC3 * (20...40) 0C",
    d: "",
    correct: "a",
  },
  {
    question:
      ". În cazul călirii temperatura de încălzire este:",
    a: " T = AC1 + (40---60) 0C;",
    b: "T= AC1 / (40---60) 0C",
    c: "T = AC1 - (40---60) 0C",

    correct: "a",
  },
  {
    question: `În situațiile în care imediat după răcirea, până la temperatura camerei, când produsele sunt introduse
    într-un mediu de călire aflat la temperatura de – 200C pana la -100°C se numește:`,
    a: "Călire în trepte",
    b: " Călire continuă",
    c: "Călire la frig",
    d: "",
    correct: "c",
  },
  {
    question: "Călirea superficială este",
    a: " Un tratament termic local",
    b: "Se aplică în scopul obținerii unei structuri martensitice în suprafața produselor",
    c: " Se aplică pe adâncimi cuprinse între zecimi de milimetru până la 5-10 mm;",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Piesa duplex este formată din:",
    a: "Stratul exterior dur, rezistent la uzură și oboseală",
    b: "Rezultată în urma călirii volumice;",
    c: "Miezul plastic și tenace",
    d: "",
    correct: "a",
    correct: "c",
  },
  {
    question: "Pentru a obține piese duplex",
    a: "Călirea superficială trebuie aplicată la oțeluri hipoeutectoide semidure",
    b: "Se aplică oțelurilor cu conținutul în carbon cuprins între 0,3% și 0,65%",
    c: "",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question: "În funcție de sursa termică utilizată, se deosebesc următoarele metode de călire superficială:",
    a: "Cu flacără",
    b: "Prin inducție",
    c: "În topituri",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Revenirea oțelurilor",
    a: "Constă în aducerea produselor din oțel călite în stări structurale;",
    b: " Concomitent se produce și înmuierea oțelului;",
    c: "Scade caracteristicile de rezistență și le crește pe cele de plasticitate și ductilitate;",
    d: "",
    e: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: ". La revenire, constituenții în afara echilibrului obținuți prin călire:",
    a: "Se descompun treptat în constituenți de revenire;",
    b: "Sunt: martensită, troostită și sorbită de revenire",
    c: "Descompunerea se realizează prin difuzie și necesită activare termică",
    d: "",

    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Martensita de călire:",
    a: "Este numită și martensită albă;",
    b: "Este o soluție solidă suprasaturată de carbon în fier α cu rețea tetragonală",
    c: "Este martensită de revenire",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Martensita de revenire:",
    a: " Martensită cubică",
    b: " Martensită neagră",
    c: "Martensită tetragonală",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question: "În funcție de temperatura de încălzire revenirea poate fi:",
    a: "Revenire joasă;",
    b: "Revenire medie",
    c: "Revenire înaltă",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Recoacerea de maleabilizare",
    a: "Se realizează prin încălzirea și menținerea pieselor timp îndelungat (zeci de ore)",
    b: "Temperaturi înalte (de circa 1000°C)",
    c: "Grafitizarea cementitei;",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: " La fonte albe",
    a: "Întreaga cantitate de carbon se găsește sub formă de cementită",
    b: " Utilizările sunt relativ puțin ca materiale pentru construcția de mașini",
    c: `Cantitatea foarte mare de cementită din structura lor le imprimă duritate și fragilitate ridicate,
    făcându-le imposibil de prelucrat prin deformare plastică`,
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question:
      ". Piesele turnate cu duritate superficială mare (cilindrii laminoarelor, roțile vagonetelor de mină)",
    a: `Se obțin prin aplicarea unor regimuri termice speciale la solidificare, care asigură viteze mari de
    răcire în suprafață și mici în centru`,
    b: `Au în stratul exterior o structură de fontă albă, dură și rezistentă la uzură, iar în miez o structură de
    fontă cenușie, capabilă să amortizeze vibrații`,
    c: "Prezintă o structură de tranziție, de tip fontă pestriță",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Fontele albe martensitice Ni-Cr",
    a: "Prezintă o călibilitate foarte bună;  ",
    b: " Au structura obținută în urma răcirii alcătuită din martensită și austenită reziduală",
    c: "Au grafit",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question: "Fontele albe Cr-Mo",
    a: "Au structură formată din diferite proporții de austenită, constituenți de treaptă perlitică și cementită aliată cu crom și molibden",
    b: " Pot fi tratate termic prin călire urmată de revenire",
    c: "Pot fi prelucrate prin așchiere",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Fonta albă înalt aliată cu crom:",
    a: "Prezintă în stare brută turnată o structură alcătuită din austenită și carburi eutectice",
    b: "Prezintă duritate mare",
    c: "Nu necesită tratamente termice speciale",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question:
      "Recoacerea de maleabilizare în mediu neutru este:",
    a: "Procedeu american;",
    b: "Procedeu european;",
    c: "Se realizează în mediu de praf de zgură sau șamotă;",
    d: "",
    correct: "a",
    correct: "c",
  },
  {
    question:
      "Recoacerea de maleabilizare în mediu oxidant:      ",
    a: "Procedeu american",
    b: " Procedeu european ",
    c: "Se realizează în medii ce conțin oxizi;",
    d: "",
    correct: "b",
    correct: "c",
  },
  {
    question: "Procedeul american constă în:",
    a: "Obținere a fontei maleabile negre;",
    b: "Obținere a masei metalice de bază feritice;",
    c: "Obținerea de fonte maleabile albe;",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question: "Procedeul european constă în:",
    a: "Obținerea de fonte maleabile negre;",
    b: " Obținerea de fonte maleabile albe;",
    c: "Obținerea de masă metalică predominant perlitică;",
    d: "",
    correct: "b",
    correct: "c",
  },
  {
    question: "Procedeul american constă în:",
    a: "Încălzirea la 950 – 10000C;",
    b: "Menținerea 100 - 200 ore;",
    c: "Obținerea unei fonte maleabile negre cu Rm= 30 - 40N/mm2",
    d: "",
    correct: "a",
    correct: "c",
  },
  {
    question:
      "Recoacerea de regenerare este necesară în următoarele situații:",
    a: "La produsele turnate din oțeluri carbon și aliate, care, după turnare, prezintă granulație grosolană cu aspect Widmannstätten",
    b: "La produsele deformate plastic la cald, confecționate din oțeluri moi, care, după deformare,prezintă structură în benzi",
    c: "La produsele sudate, în vederea corectării granulației grosolane din zona de influență termică (ZIT)",
    d: "după aplicarea unei recoaceri de omogenizare, în vederea finisării granulației grosolane;",
    correct: "a",
    correct: "b",
    correct: "c",
    correct: "d",
  },
  {
    question: "Procedeul european constă în:",
    a: "Încălzirea la 1000 – 10500C",
    b: "Menținerea la 950 - 10000C;",
    c: "Obținerea unei fonte negre cu Rm= 40 - 70daN/mm2",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question:
      "Recoacerea de detensionare se aplică pieselor din:",
    a: "Fontă cenușie cu grafit lamelar sau nodular;",
    b: "Imediat după turnare sau degroșare",
    c: "Pentru creșterea prelucrabilității",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question: "Durificare prin precipitare este:",
    a: "Tratamentul termic care constă dintr-o călire pentru punere în soluție și o îmbătrânire (naturală sau artificială)",
    b: " Tratamentul termic ce se poate aplica aliajelor neferoase;",
    c: "Tratamentul aplicat fontelor albe",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question:
      " Recoacerea de detensionare se aplică fontelor cenușii:",
    a: "Cu grafit lamelar cu grafit nodular;",
    b: "Imediat după turnare;",
    c: "După operația de degroșare;",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question:
      "Recoacerea de detensionare aplicată aliajelor neferoase:",
    a: "Are ca scop eliminarea totală sau parțială a tensiunilor interne;",
    b: "Este un tratament termic secundar;",
    c: "Se aplică după prelucrări mecanice;",
    d: "",
    correct: "a",
    correct: "c",
  },
  {
    question: "Mecanismele prin care se produce eliminarea tensiunilor interne la fontele cenușii sunt:",
    a: "Ø reducerea tensiunilor interne la creșterea temperaturii, datorită reducerii modulului de elasticitate",
    b: "Ø diminuarea limitei de curgere la încălzire și producerea de curgeri plastice locale;",
    c: "Ø relaxarea izotermă prin fluaj la temperaturi înalte",
    d: "",

    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Recoacerea de detensionare aplicată aliajelor neferoase constă în:",
    a: "Încălzirea cu viteză mică (cu cuptorul) la temperaturi de circa 150 - 6000C;",
    b: "Menținerea la temperatură timp de 0,5 - 5 ore;",
    c: "Răcirea lentă (în cuptor sau aer liniștit);  ",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question:
      "Recoacerea în vederea îmbunătățirii prelucrabilității prin așchiere aplicată fontelor cenușii:",
    a: "Este o recoacere de înmuiere;",
    b: "Se aplică pieselor turnate din fonte cenușii cu grafit lamelar sau nodular;",
    c: "Se aplică fontelor cenușii care prezintă după turnare o duritate prea mare și, în consecință, se prelucrează greu prin așchiere;",
    d: "",

    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question:
      ". Recoacerea de recristalizare se aplică:",
    a: "În scopul refacerii plasticității diminuate prin ecruisare;",
    b: "În cazul barelor, țevilor trase la rece, benzilor și tablelor laminate la rece;",
    c: "Ca modalitate de mărire a caracteristicilor mecanice;",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question:
      "Înmuierea fontelor cenușii se poate realiza prin următoarele metode:",
    a: "Recoacerea de feritizare;",
    b: "Recoacerea de grafitizare;",
    c: "Recoacere de detensionare;    ",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question: "În timpul recoacerii de recristalizare aplicată pieselor din aliaje neferoase::",
    a: "TR = (0,3---0,4) ⋅ Ttop;",
    b: "Se produc modificări microstructurale similare cu cele de la oțelurile deformate plastic la rece și supuse aceluiași tip de tratament termic",
    c: "Generația de grăunți puternic alungiți și conținând numeroase defecte de rețea este înlocuită treptat cu o generație de grăunți noi, echiachși și care prezintă mai puține imperfecțiuni cristaline",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Recoacerea de feritizare:",
    a: "Se aplică pieselor mici, cu pereți subțiri, confecționate din fonte cenușii;",
    b: "Se aplică fontelor cenușii care prezintă, după turnare, o masă de bază formată din perlită lamelară fină, cu duritate ridicată și prelucrabilitate prin așchiere scăzută",
    c: "Constă în încălzire și răcire bruscă;",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question: "Alegeți afirmația adevărată",
    a: " Aluminiul și aliajele sale se încălzesc pentru recristalizare la 350 - 4200C, în condițiile în care pragul de recristalizare se află la 200 - 3000C;",
    b: "Cuprul de puritate tehnică se încălzește la 500 - 7000C, temperatura de recristalizare fiind egală cu 2000C;",
    c: "Aliajele pe bază de cupru (bronzurile și alamele) se încălzesc la 600-7000C, iar pragul de recristalizarese află la 300 - 4000C;",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Recoacerea de grafitizare:",
    a: "Se aplică pieselor din fontă cu pereți subțiri și pieselor turnate în forme metalice;",
    b: "Se aplică pieselor din fontă care prezintă după turnare cementită liberă în structură (așa-numite “zone albe”)",
    c: "Se aplică fontelor albe;",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question: "Recoacerea de omogenizare, în cazul aliajelor neferoase:",
    a: "Se aplică pentru îndepărtarea neomogenităților chimice;",
    b: "Pentru obținerea unei structuri de echilibru, formată din cristale poliedrice;",
    c: "Nu se aplică la aliajele neferoase monofazice;",
    d: "",

    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Pieselor turnate din fontă cenușie li se poate aplica:",
    a: "Călire martensitică volumică;",
    b: "Călire bainitică;",
    c: "Călire superficială;",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question:
      "Temperatura de încălzire, la recoacerea de omogenizare, este:",
    a: "Trec = (0,8---0,95) ⋅ Ttop;    ",
    b: "Dependentă de compoziția aliajului;    ",
    c: " Dependentă de tendința de segregare;",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question:
      ". Călirea se aplică fontelor:",
    a: "Călirea martensitică volumică se aplică fontelor cenușii cu grafit lamelar fin, nodular și fontelor maleabile",
    b: "Călirea bainitică se aplică pieselor cu grosimi reduse și configurații complexe, confecționate din fonte cenușii slab aliate cu crom, nichel și cupru;",
    c: " Călirea superficială se aplică în cazul pieselor care trebuie să prezinte un miez tenace, îmbrăcat întrun strat dur, rezistent la uzare prin frecare;",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Călirea pentru punere în soluție este un tratament termic:",
    a: "Aliajelor cu structura alcătuită dintr-o soluție solidă (α); ",
    b: "Aliajelor ce conțin cristale secundare (AmBn) ale unui compus definit (aliaje de tip I);",
    c: "Aliajelor cu structura alcătuită dintr-o soluție solidă (α) și cristale secundare (AmBn) ale unuicompus definit (aliaje de tip I)    ",
    d: "",
    correct: "c",
  },
  {
    question:
      ". Călirea pentru punere în soluție este un tratament termic intermediar: ",
    a: "Care se aplică pieselor confecționate din aliaje binare ale aluminiului;    ",
    b: "Care se aplică pieselor confecționate din aliaje complexe ale aluminiului;",
    c: "Ce are ca scop asigurarea structurii de pornire pentru îmbătrânire;",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question:
      "Revenirea aplicată fontelor:",
    a: " Se face imediat după aplicarea unei căliri martensitice volumice sau a unei căliri superficiale;",
    b: " Provoacă transformări structurale asemănătoare cu cele de la oțeluri;",
    c: `Realizează eliminarea tensiunilor interne de călire și, la temperaturi de revenire mai ridicate,
    “înmuierea fontei`,
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question:
      "Călirea de punere în soluție",
    a: "Constă în încălzirea la Tînc = (85 ----90) % ⋅ Ttop;",
    b: "Se aplică tablelor din aluminiu;",
    c: " Constă în răcire în aer, azot lichid sau aer;",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question:
      "Tratamentul termic care constă dintr-o călire pentru punere în soluție și o îmbătrânire (naturală sau artificială) se numește:",
    a: "Durificare prin precipitare;",
    b: "Îmbunătățire",
    c: "Revenire;",
    d: "",
    correct: "a",
  },
  {
    question: ". Alegeți răspunsul corect:    ",
    a: "Carbonitrurarea constă în îmbogățirea stratului superficial cu C și N;    ",
    b: "Sulfizarea constă în îmbogățirea stratului superficial cu S;",
    c: "Sherardizarea constă îmbogățirea stratului superficial cu Pb;",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question:
      "Recoacerea de detensionare se aplică, în general, produselor finite din aliaje nemetalice, în scopul:",
    a: "Eliminării parțiale sau totale a tensiunilor interne apărute în urma prelucrărilor anterioare;",
    b: "Obținerii de produse matrițate sau ambutisate din alame cu peste 20% zinc, la care probabilitatea de apariție a fisurilor este mai mare;",
    c: "Obținerii de piese turnate din bronzuri cu staniu;",
    d: "",
    correct: "a",
 
  },
  {
    question: "Carburarea este:",
    a: "Tratament termochimic;    ",
    b: "Tratament de îmbogățire a stratului superficial cu C;",
    c: "Tratament de îmbogățire a stratului superficial cu N;",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question: "Nitrurarea:",
    a: "Îmbogățirea stratului superficial al pieselor cu N;",
    b: "În scopul creșterii durității superficiale, a rezistenței la uzare;",
    c: "Creșterea rezistenței la cald și la coroziune;    ",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Carbonitrurarea:",
    a: "Îmbogățirea simultană cu carbon și azot a straturilor superficiale ale piesei;",
    b: "Îmbină efectele carburării cu cele ale nitrurării;    ",
    c: "Crește duritatea, rezistența la uzare și coroziune;",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Sulfizarea:",
    a: "Constă în îmbogățirea în sulf a straturilor superficiale ale pieselor cu S;",
    b: "Crește rezistența la frecare;",
    c: "Scade rezistența la frecare;",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question: "Borizarea:",
    a: " Constă în îmbogățirea stratului superficial cu B;",
    b: "Crește duritatea superficială, deci rezistența la uzare;    ",
    c: "Crește rezistența la temperaturi înalte;",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Alitarea:",
    a: "Constă în îmbogățirea straturilor cu Al;",
    b: " Crește refractaritatea;",
    c: "Crește rezistența la coroziune;",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Sherardizarea:    ",
    a: "Este tratament termic;",
    b: "Este tratament termochimic;",
    c: "Constă în îmbogățirea cu Zn pentru creșterea rezistenței la coroziune;",
    d: "",
    correct: "b",
    correct: "c",
  },
  {
    question:
      "Cromizarea este:",
    a: "Cromare;    ",
    b: "Crește rezistența la coroziune, rezistența la uzare;",
    c: "Constă în îmbogățirea cu Cr;",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Durificarea prin precipitare este:",
    a: "Tratamentul termic care constă dintr-o călire pentru punere în soluție și o îmbătrânire;",
    b: "Tratamentul de maleabilizare",
    c: "Tratament de îmbunătățire;",
    d: "",
    correct: "a",
  },
  {
    question:
      "Aliajelor neferoase li se pot aplica:      ",
    a: "Recoacere de detensionare;",
    b: "Recoacere de recristalizare;    ",
    c: "Recoacere de omogenizare;",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question:
      ". Recoacerea de omogenizare se aplică neferoase:",
    a: "În scopul îndepărtării neomogenităților chimice (a segregației dendritice);   ",
    b: "Obținerea structurii de echilibru, formată din cristale poliedrice;    ",
    c: " Elimină tensiunile interne;",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question: "Diagrama de mai jos reprezintă:",
    a: "Ciclograma de maleabilizare;    ",
    b: "Diagrama de îmbunătățire;  ",
    c: " Diagrama de călire;   ",
    d: "",
    correct: "a",

  },
  {
    question: "Structura reprezintă: + diagramă    ",
    a: "Grafit în cuiburi; ",
    b: "Grafit nodular;    ",
    c: "Grafit lamelar;",
    d: "",
    correct: "a",
  },
  {
    question: "Piesele turnate din fontă cenușie se supun următoarelor tratamentelor termice:",
    a: "Recoacere de detensionare;    ",
    b: "Recoacere de înmuiere, în vederea îmbunătățirii prelucrabilității prin așchiere;",
    c: "Normalizare; ",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question:
      " Piesele turnate din fontă cenușie se supun următoarelor tratamentelor termice:      ",
    a: "Revenire;   ",
    b: "Normalizare;",
    c: "Revenire;",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Figura de mai jos reprezintă:",
    a: "Recoacere de feritizare;    ",
    b: "Recoacere de înmuiere;    ",
    c: "Recoacere de creștere a prelucrabilității prin așchiere;  ",
    d: "",
    correct: "a",
  
  },
  {
    question: "Diagrama de mai jos reprezintă:",
    a: " Recoacerea de normalizare;   ",
    b: "Creșterea proporției de perlită;",
    c: "Perlitizarea completă a masei metalice;",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Pieselor turnate din fontă cenușie li se poate aplica:",
    a: "Călire martensitică volumică;    ",
    b: "Călire bainitică",
    c: "Călire superficială; ",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Diagrama de mai jos reprezintă",
    a: "Călire aplicată fontelor cenușii lamelare;    ",
    b: " 2 mențineri;    ",
    c: "2 încălziri;",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: " Revenirea aplicată fontelor cenușii:     ",
    a: "Prezintă transformări structurale asemănătoare cu cele de la oțeluri;   ",
    b: "Realizează eliminarea tensiunilor interne de călire;",
    c: "Realizează “înmuierea fontei”;",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "La revenirea aplicată fontelor cenușii are loc:",
    a: "Transformarea martensitei de călire în martensită de revenire ",
    b: "Transformarea unei părți din austenita reziduală;",
    c: "Relaxare parțială a tensiunilor interne provocate de prezența incluziunilor de grafit și prin aceasta,reducerea fragilității;",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  }
  ,
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function getSelected() {
  let answer = undefined

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })

  return answer
}

function deselectAnswers() {
  answerEls.forEach(answerEl => {
    answerEl.checked = false
  })
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected()

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      alert("Ai raspuns corect")
      score++
    }
    if (answer !== quizData[currentQuiz].correct) {
      alert("Ai gresit ceva")
    }
    currentQuiz++
    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `
    }
  }
})
