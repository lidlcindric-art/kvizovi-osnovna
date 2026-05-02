// ─── TIPOVI ──────────────────────────────────────────────────────────────────

export interface Pitanje {
  p: string;      // pitanje
  o: string[];    // 4 opcije
  t: number;      // indeks točnog odgovora (0–3)
  hint?: string;  // objašnjenje koje se prikaže u kviz-modu
}

export interface Kartica {
  pojam: string;
  opis: string;
}

export interface SekcijaSkripte {
  naslov: string;
  tekst: string; // \n = novi odlomak
}

export interface Tema {
  id: string;
  naziv: string;
  predmet: string;
  opis: string;
  ikona: string;
  boja: string;
  skripta: SekcijaSkripte[];
  kartice: Kartica[];
  pitanja: Pitanje[];
}

// ─── RIMSKO DRUŠTVO ──────────────────────────────────────────────────────────

const skriptaRim: SekcijaSkripte[] = [
  {
    naslov: 'Osnivanje Rima',
    tekst: 'Prema legendi, Rim je osnovan 753. g. pr. Kr. Blizanci Romul i Rem, unuci albanskog kralja, osnovali su grad na sedam brežuljaka uz rijeku Tibar. Romul je ubio brata Rema u svađi i po sebi nazvao grad — Rim (lat. Roma).\n\nRim je bio malo naselje pastira i ratara koje je postepeno raslo i jačalo sve dok nije postalo središte jednog od najvećih carstava u povijesti.',
  },
  {
    naslov: 'Rimska Republika (509. – 27. g. pr. Kr.)',
    tekst: 'Rimljani su 509. g. pr. Kr. svrgnuli posljednjeg kralja i uspostavili republiku. Na čelu su bila dva konzula koja su se birala svake godine — niti jedan nije smio vladati sam.\n\nVažnu ulogu imao je Senat, savjetodavno tijelo sastavaljeno od patricija, koji je donosio zakone i upravljao državom. Narod se dijelio na patricije (plemiće) i plebejce (obične građane), a između njih je stoljećima trajala borba za prava.',
  },
  {
    naslov: 'Julius Cezar i Rimsko Carstvo',
    tekst: 'Julius Cezar bio je sjajan vojskovođa koji je osvojio Galiju i postao najmoćniji čovjek u Rimu. Htio se proglasiti doživotnim diktatorom, ali su ga senatori uboli noževima 44. g. pr. Kr.\n\nNakon dugih građanskih ratova, Cezarov posvojenica Oktavijan pobijedio je sve suparnike i 27. g. pr. Kr. postao prvi rimski car pod imenom August. Time je Republika završila, a počelo je Carstvo.',
  },
  {
    naslov: 'Rimsko društvo — staleži',
    tekst: 'Rimsko društvo imalo je tri glavna staleža:\n\n• Patriciji su bili rimski plemići s punim političkim pravima. Dolazili su iz starih rimskih obitelji i dugo su jedini smjeli biti konzuli ili senatori.\n\n• Plebejci su bili slobodni građani bez plemićkog porijekla. Kroz borbu su s vremenom izborili mnoga prava — mogli su birati vlastite zaštitinike (tribune) i naposljetku sami postajati konzuli.\n\n• Robovi nisu imali nikakva prava. Bili su zarobljenici iz ratova ili kupljene osobe. Mogli su biti prodani, dani ili slobođeni po volji svog gospodara. Spartakus je vodio veliku robovsku pobunu 73. – 71. g. pr. Kr.',
  },
  {
    naslov: 'Rimska vojska',
    tekst: 'Osnova rimske moći bila je vojska. Osnovna vojna jedinica zvala se legija — oko 5000 vojnika podijeljenih u manje jedinice zvane kohorte.\n\nRimski vojnik-legionar nosio je kratki mač gladius, koplje pilum, pravokutni štit scutum i metalnu kacigu galea. Vojnici su gradili logore (castra) gdje god bi se zaustavili, a mreža rimskih cesta (poput Via Appiae) bila je uglavnom izgrađena radi vojnih potreba.',
  },
  {
    naslov: 'Svakodnevni život',
    tekst: 'Bogati Rimljani živjeli su u raskošnim kućama s unutrašnjim dvorištem (atrium) i vrtom — takve se kuće zvale villa. Siromašniji su živjeli u višekatnim stambenim zgradama zvanim insula.\n\nSredište javnog života bio je forum — gradski trg okružen hramovima, tržnicom i sudnicom. Terme (javne kupelji) bile su mjesto za kupanje, vježbanje i razgovor. Za zabavu su Rimljani odlazili u amfiteatar (gladijatorske borbe) ili na Circus Maximus (trke konjskih kola).',
  },
  {
    naslov: 'Kultura i graditeljstvo',
    tekst: 'Rimljani su bili majstori graditeljstva. Izgradili su:\n\n• Koloseum — najveći amfiteatar, primao do 50 000 gledatelja\n• Akvedukte — kamene kanale koji su dovodili svježu vodu s planina u grad\n• Ceste — gustu mrežu cesta koja je spajala dijelove carstva\n• Panteon — hram svim bogovima, danas jedan od najočuvanijih rimskih zdanja\n\nMozaici (slike od sitnih kamenih ili staklenih kockica) ukrašavali su podove i zidove. Latinskim jezikom, koji su koristili Rimljani, nastali su svi romanski jezici: talijanski, španjolski, francuski, rumunjski i drugi.',
  },
  {
    naslov: 'Rimska religija i kršćanstvo',
    tekst: 'Rimljani su štovali mnoštvo bogova, preuzimajući ih uglavnom od Grka i mijenjajući im imena:\n\n• Jupiter — vrhovni bog neba i gromova\n• Mars — bog rata\n• Venera — božica ljubavi i ljepote\n• Neptun — bog mora\n• Minerva — božica mudrosti\n\nCar Konstantin I. je Milanskim ediktom 313. g. dopustio slobodu kršćanstva u Carstvu. Car Teodozije I. proglasio je kršćanstvo jedinom državnom religijom 380. g.',
  },
  {
    naslov: 'Pad Zapadnog Rimskog Carstva',
    tekst: 'Carstvo je postalo preveliko za upravljanje. Car Teodozije I. podijelio ga je 395. g. na Zapadno (Rim) i Istočno (Konstantinopol).\n\nZapadno Rimsko Carstvo slabilo je zbog unutarnjih sukoba i napada germanskih naroda. Palo je 476. g. kada je germanski vojskovođa Odoakar svrgnuo posljednjeg cara Romula Augustula. Istočno Rimsko (Bizantsko) Carstvo nastavilo je postojati sve do 1453. g.',
  },
];

const karticeRim: Kartica[] = [
  { pojam: 'Patriciji', opis: 'Rimski plemići s punim političkim pravima; potjecali su iz starih rimskih obitelji' },
  { pojam: 'Plebejci', opis: 'Slobodni rimski građani bez plemićkog porijekla; s vremenom su izborili politička prava' },
  { pojam: 'Robovi', opis: 'Zarobljenici iz ratova bez ikakvih prava; mogli su biti prodani ili slobođeni' },
  { pojam: 'Konzuli', opis: 'Dvojica godišnje biranih čelnika rimske republike; vladali su zajedno' },
  { pojam: 'Senat', opis: 'Rimski zakonodavni organ sastavljen od patricija; donosio zakone i savjetovao konzule' },
  { pojam: 'Legija', opis: 'Osnovna vojna jedinica — oko 5000 vojnika podijeljenih u kohorte' },
  { pojam: 'Akvedukt', opis: 'Rimski vodovod — kameni kanal koji je dovodio svježu vodu s planina u grad' },
  { pojam: 'Forum', opis: 'Središnji gradski trg — središte javnog, političkog i trgovačkog života Rima' },
  { pojam: 'Terme', opis: 'Rimske javne kupelji — mjesto za kupanje, vježbanje i druatenje' },
  { pojam: 'Koloseum', opis: 'Najveći rimski amfiteatar (80. g.); primao do 50 000 gledatelja; gladijatorske borbe' },
  { pojam: 'Gladijatori', opis: 'Borci u areni (obično robovi ili zatvorenici) koji su se borili za zabavu publike' },
  { pojam: 'Pax Romana', opis: '"Rimski mir" — dugo mirno i stabilno razdoblje u Carstvu (27. pr. Kr. – 180. g.)' },
  { pojam: 'Latinski', opis: 'Jezik Rimljana; temelj romanskih jezika: talijanskog, španjolskog, francuskog, rumunjskog...' },
  { pojam: 'Toga', opis: 'Tipična rimska muška odjeća — dugi komad bijele vunene tkanine omotan oko tijela' },
  { pojam: '476. g.', opis: 'Godina pada Zapadnog Rimskog Carstva — Odoakar svrgnuo Romula Augustula' },
];

const pitanjaRim: Pitanje[] = [
  { p: 'Koji je grad bio središte Rimskog Carstva?', o: ['Atena', 'Rim', 'Kartaga', 'Aleksandrija'], t: 1, hint: 'Rim je osnovan 753. g. pr. Kr. uz rijeku Tibar i postao središte golemog carstva.' },
  { p: 'Kako su se zvali rimski plemići?', o: ['Plebejci', 'Robovi', 'Patriciji', 'Konzuli'], t: 2, hint: 'Patriciji su dolazili iz starih rimskih obitelji i dugo su jedini smjeli obnašati visoke dužnosti.' },
  { p: 'Kako su se zvali obični rimski građani?', o: ['Patriciji', 'Senatori', 'Plebejci', 'Gladijatori'], t: 2, hint: 'Plebejci su bili slobodni, ali bez plemićkog porijekla. S vremenom su izborili ista prava kao patriciji.' },
  { p: 'Koji je bio rimski zakonodavni organ?', o: ['Forum', 'Konzulat', 'Triumvirat', 'Senat'], t: 3, hint: 'Senat je bio savjetodavno i zakonodavno tijelo rimske republike, sastavljen od iskusnih patricija.' },
  { p: 'Kako se zvao najveći rimski amfiteatar?', o: ['Panteon', 'Forum Romanum', 'Koloseum', 'Circus Maximus'], t: 2, hint: 'Koloseum je izgrađen 80. g. i mogao je primiti do 50 000 gledatelja na gladijatorske borbe.' },
  { p: 'Tko je bio Julius Cezar?', o: ['Rimski car', 'Rimski vojskovođa i diktator', 'Rimski filozof', 'Rimski pjesnik'], t: 1, hint: 'Cezar je bio genijalni vojskovođa koji je osvojio Galiju, ali nikad nije bio car — ubili su ga senatori 44. g. pr. Kr.' },
  { p: 'Tko je bio prvi rimski car?', o: ['Julius Cezar', 'Neron', 'Oktavijan August', 'Kaligula'], t: 2, hint: 'Oktavijan, Cezarov posvojenica, pobijedio je sve rivale i 27. g. pr. Kr. postao prvi car pod imenom August.' },
  { p: 'Koji su jezik govorili Rimljani?', o: ['Grčki', 'Etrurski', 'Italski', 'Latinski'], t: 3, hint: 'Latinski je temelj svih romanskih jezika: talijanskog, španjolskog, francuskog, rumunjskog i portugailskog.' },
  { p: 'Što je bio akvedukt?', o: ['Rimska vojska', 'Rimski novac', 'Rimski vodovod', 'Rimski hram'], t: 2, hint: 'Akvdukt je bio kameni kanal koji je dovodio svježu vodu s planina u grad — genijalno rimsko inženjerstvo.' },
  { p: 'Tko je bio vrhovni rimski bog?', o: ['Mars', 'Neptun', 'Jupiter', 'Vulkan'], t: 2, hint: 'Jupiter je bio bog neba i gromova — rimska verzija grčkog Zeusa. Vlada svim ostalim bogovima.' },
  { p: 'Tko je bio rimski bog rata?', o: ['Jupiter', 'Neptun', 'Merkur', 'Mars'], t: 3, hint: 'Mars je bio bog rata i jedan od najvažnijih rimskih bogova. Rimljani su se smatrali njegovim potomcima.' },
  { p: 'Tko je bila rimska božica ljubavi?', o: ['Juno', 'Minerva', 'Diana', 'Venera'], t: 3, hint: 'Venera je rimska verzija grčke Afrodite — božica ljubavi, ljepote i plodnosti.' },
  { p: 'Što je bio rimski forum?', o: ['Vojni logor', 'Trg i centar javnog života', 'Hram', 'Kupelji'], t: 1, hint: 'Forum je bio središte rimskog grad: tamo su se obavljale trgovine, donosile presude i slavili trijumfi.' },
  { p: 'Kako se zvao rimski hipodrom?', o: ['Koloseum', 'Panteon', 'Circus Maximus', 'Forum'], t: 2, hint: 'Circus Maximus je bio golemi hipodrom u Rimu gdje su se odvijale trke konjskih kola (bigae, quadrigae).' },
  { p: 'Što su bile terme?', o: ['Rimske škole', 'Rimski hramovi', 'Rimske kupelji', 'Rimske tržnice'], t: 2, hint: 'Terme su bile javne kupelji — svaki Rimljanin mogao ih je koristiti, a bile su i mjesto za vježbanje i razgovor.' },
  { p: 'Tko je bio Spartakus?', o: ['Rimski car', 'Rimski senator', 'Rimski vojskovođa', 'Vođa robovske pobune'], t: 3, hint: 'Spartakus je bio gladijator koji je 73. g. pr. Kr. poveo veliku pobunu robova — gotovo 70 000 njih.' },
  { p: 'Kada je prema legendi osnovan Rim?', o: ['1000. g. pr. Kr.', '753. g. pr. Kr.', '500. g. pr. Kr.', '27. g. pr. Kr.'], t: 1, hint: 'Prema rimskoj legendi, Romul je osnovao Rim 753. g. pr. Kr. na sedam brežuljaka uz rijeku Tibar.' },
  { p: 'Tko je bio Romul?', o: ['Rimski car', 'Rimski bog', 'Legendarni osnivač Rima', 'Rimski senator'], t: 2, hint: 'Romul i Rem bili su blizanci, unuci albanskog kralja. Romul je ubio brata i po sebi nazvao grad Rim.' },
  { p: 'Što je bila rimska legija?', o: ['Novčana jedinica', 'Vojska od oko 5000 vojnika', 'Vrsta broda', 'Vrsta hrane'], t: 1, hint: 'Legija je bila osnovna rimska vojna jedinica — oko 5000 legionara podijeljenih u kohorte.' },
  { p: 'Kako su se zvali godišnji čelnici rimske republike?', o: ['Diktatori', 'Senatori', 'Tribuni', 'Konzuli'], t: 3, hint: 'Konzuli su se birali svake godine — uvijek dvojica, da niti jedan ne bi imao previše moći.' },
  { p: 'Što je bila toga?', o: ['Rimski mač', 'Rimska muška odjeća', 'Rimska kaciga', 'Rimski šator'], t: 1, hint: 'Toga je bila dugi komad bijele vunene tkanine omotan oko tijela — simbol rimskog građanstva.' },
  { p: 'Što je bio rimski denarius?', o: ['Rimski vojnik', 'Rimski hram', 'Rimski novac', 'Rimski brod'], t: 2, hint: 'Denarius je bio srebrni rimski novčić — osnovna platna jedinica Rimskog Carstva.' },
  { p: 'Tko su bili gladijatori?', o: ['Rimski svećenici', 'Borci u areni', 'Rimski filozofi', 'Rimski trgovci'], t: 1, hint: 'Gladijatori su obično bili robovi, zatvorenici ili dobrovoljci koji su se borili u amfiteatru.' },
  { p: 'Koji je rimski car prvi prihvatio kršćanstvo?', o: ['August', 'Neron', 'Dioklecijan', 'Konstantin'], t: 3, hint: 'Car Konstantin I. je 313. g. Milanskim ediktom dopustio slobodu kršćanstva u cijelom Carstvu.' },
  { p: 'Što je bio rimski triumf?', o: ['Vrsta hrane', 'Slavlje za pobjedonosnog vojskovođu', 'Vrsta sporta', 'Rimski zakon'], t: 1, hint: 'Triumf je bila vojna parada kojom je vojskovođa proslavljao pobjedu — prolazio je kroz Rim na kočiji.' },
  { p: 'Kako se zvao rimski kratki mač?', o: ['Scutum', 'Pilum', 'Gladius', 'Hasta'], t: 2, hint: 'Gladius je bio kratki rimski mač — od njega dolazi i riječ "gladijator".' },
  { p: 'Što je bio rimski štit?', o: ['Galea', 'Lorica', 'Scutum', 'Pilum'], t: 2, hint: 'Scutum je bio veliki pravokutni štit rimskog legionara, izrađen od drveta i presvučen kožom.' },
  { p: 'Tko su bili Etruščani?', o: ['Rimski robovi', 'Rimski vojnici', 'Rimski bogovi', 'Narod koji je živio u Italiji prije Rimljana'], t: 3, hint: 'Etruščani su bili razvijeni narod koji je živio sjeverno od Rima. Rimljani su od njih preuzeli puno kulture.' },
  { p: 'Kada je palo Zapadno Rimsko Carstvo?', o: ['27. g. pr. Kr.', '313. g.', '395. g.', '476. g.'], t: 3, hint: 'Germanski vojskovođa Odoakar svrgnuo je posljednjeg cara Romula Augustula 476. g. — kraj antike.' },
  { p: 'Koji je car podijelio carstvo na Istočno i Zapadno?', o: ['Dioklecijan', 'Teodozije I.', 'Konstantin', 'Justinijan'], t: 1, hint: 'Car Teodozije I. podijelio je Carstvo 395. g. između svojih sinova. Podjelba se pokazala trajnom.' },
  { p: 'Što je bila rimska Republika?', o: ['Vladavina jednog cara', 'Vrsta rimskog hrama', 'Oblik vlasti s izabranim predstavnicima', 'Rimska provincija'], t: 2, hint: 'Republika (509. – 27. g. pr. Kr.) je bio oblik vladavine u kojemu su konzuli i Senat vodili državu.' },
  { p: 'Što je bila rimska insula?', o: ['Otok', 'Stambena zgrada za siromašnije', 'Vojni logor', 'Hram'], t: 1, hint: 'Insula je bila višekatna stambena zgrada u kojoj su živjeli siromašniji Rimljani u gradovima.' },
  { p: 'Tko su bile Vestalke?', o: ['Rimske vojnikinje', 'Svećenice boginje Veste', 'Rimske plesačice', 'Rimske liječnice'], t: 1, hint: 'Vestalke su bile svećenice koje su čuvale sveti oganj u hramu boginje Veste. Imale su poseban status.' },
  { p: 'Koji je car dao spaliti Rim prema legendi?', o: ['Julius Cezar', 'August', 'Neron', 'Trajan'], t: 2, hint: 'Prema legendi, car Neron je svirao dok je gorjelo. Povjesničari su nesigurni je li to istina.' },
  { p: 'Što je bio rimski mozaik?', o: ['Vrsta hrane', 'Slika od malih kamenih ili staklenih kockica', 'Rimski ples', 'Vrsta oružja'], t: 1, hint: 'Mozaici su ukrašavali podove i zidove rimskih kuća i javnih zdanja — tiskovine malih tesera.' },
  { p: 'Što je bio Panteon?', o: ['Vojni logor', 'Kupelji', 'Tržnica', 'Hram svim bogovima'], t: 3, hint: 'Panteon (grč. "svi bogovi") je hram iz 125. g. — jedan od najljepše očuvanih antičkih zdanja.' },
  { p: 'Što je bio atrium u rimskoj kući?', o: ['Rimski rog', 'Rimska kaciga', 'Središnja dvorana rimske kuće', 'Rimski brod'], t: 2, hint: 'Atrium je bio otvorena dvorana u središtu rimske kuće kroz čiji je krov ulazilo svjetlo i kiša.' },
  { p: 'Što je značilo Pax Romana?', o: ['Rimski rat', 'Rimski car', 'Rimski mir', 'Rimski zakon'], t: 2, hint: 'Pax Romana (27. pr. Kr. – 180. g.) bio je period mira kada je Carstvo cvjetalo i trgovina napredovala.' },
  { p: 'Tko je bio Ciceron?', o: ['Rimski car', 'Rimski vojskovođa', 'Rimski govornik i filozof', 'Rimski bog'], t: 2, hint: 'Ciceron (106. – 43. g. pr. Kr.) bio je najslavniji rimski govornik, odvjetnik i filozof.' },
  { p: 'Koje je more Rimljani zvali Mare Nostrum?', o: ['Jadransko', 'Crno', 'Crveno', 'Sredozemno'], t: 3, hint: '"Mare Nostrum" znači "naše more" — Rimljani su kontrolirali cijelu obalu Sredozemlja.' },
  { p: 'Tko je bio Hannibal?', o: ['Rimski vojskovođa', 'Kartaški vojskovođa koji je napao Rim', 'Rimski car', 'Rimski senator'], t: 1, hint: 'Hannibal Barka je Carthaginian general koji je prešao Alpe s vojskom i slonovima i napao Italiju.' },
  { p: 'Koji je car vladao u doba Isusova rođenja?', o: ['Julius Cezar', 'Oktavijan August', 'Tiberije', 'Kaligula'], t: 1, hint: 'Isus Krist je rođen za vladavine prvog rimskog cara Oktavijana Augusta.' },
  { p: 'Što su bile rimske provincije?', o: ['Rimski hramovi', 'Rimski gradovi', 'Rimske škole', 'Osvojena područja kojima je upravljao Rim'], t: 3, hint: 'Provincijama su upravljali namjesnici koje je postavljao Senat ili car. Plaćale su porez Rimu.' },
  { p: 'Kojim je narodom Julius Cezar vladao u Galiji?', o: ['Germani', 'Grci', 'Gali', 'Hispanci'], t: 2, hint: 'Galija je bila područje današnje Francuske i Belgije. Cezar ju je osvojio između 58. i 51. g. pr. Kr.' },
  { p: 'Što je rimsko pravo?', o: ['Rimska religija', 'Sustav zakona koji je osnova europskog prava', 'Rimska vojska', 'Rimska valuta'], t: 1, hint: 'Rimski pravni sustav temelj je gotovo svih europskih pravnih sustava i danas.' },
  { p: 'Što je bila villa rustica?', o: ['Gradska kuća', 'Seosko imanje', 'Vojni logor', 'Hram'], t: 1, hint: 'Villa rustica je bilo seosko imanje na kojem su se uzgajali žito, masline, grožđe i stoka.' },
  { p: 'Kako se zvao rimski brod s tri reda vesala?', o: ['Birema', 'Trirema', 'Quadrirema', 'Pentirema'], t: 1, hint: 'Trirema je bila ratni brod s tri reda vesala — osnova rimske mornarice.' },
  { p: 'Koji je car proveo veliki progon kršćana?', o: ['August', 'Trajan', 'Neron', 'Hadrian'], t: 2, hint: 'Car Neron je optužio kršćane za požar Rima 64. g. i pokrenuo njihov sustavni progon.' },
  { p: 'Što je bio rimski Circus Maximus?', o: ['Tržnica', 'Hipodrom za trke kola', 'Vojni logor', 'Kazalište'], t: 1, hint: 'Circus Maximus mogao je primiti do 250 000 gledatelja — bio je najveće sportsko zdanje antičkog Rima.' },
  { p: 'Što je bila Via Appia?', o: ['Rimska tržnica', 'Važna rimska cesta do Brindisija', 'Rimski zakon', 'Vojni logor'], t: 1, hint: 'Via Appia ("Apijeva cesta") izgrađena je 312. g. pr. Kr. i bila je prva rimska velika cesta.' },
];

// ─── PRIRODA — TLO ───────────────────────────────────────────────────────────

const skriptaTlo: SekcijaSkripte[] = [
  {
    naslov: 'Što je tlo?',
    tekst: 'Tlo je gornji, rahli sloj Zemljine kore u kojemu rastu biljke i žive bezbroj organizama. Nije mrtvo — ono je živo, složeno i dragocjeno. Nastalo je kroz milijune godina raspadanjem stijena i ostataka živih bića.\n\nTlo je jedan od najvažnijih prirodnih resursa jer sva hrana koju jedemo potječe, izravno ili neizravno, iz tla.',
  },
  {
    naslov: 'Nastanak tla',
    tekst: 'Tlo nastaje iznimno sporo — za nastanak samo 1 cm tla potrebno je stotine do čak tisuće godina! Proces počinje raspadanjem matične stijene zbog djelovanja temperature (smrzavanja/odmrzavanja), vode, vjetra i živih organizama.\n\nOrganski ostaci (lišće, uginule životinje) se razgrađuju bakterijama i gljivama te se miješaju s mineralnim česticama stijena — nastaje humus.',
  },
  {
    naslov: 'Sastav tla',
    tekst: 'Tlo se sastoji od pet osnovnih dijelova:\n\n• Mineralne čestice — sitni komadići raspadnutih stijena\n• Humus — tamna, raspadnuta organska tvar koja daje tlu plodnost\n• Voda — u njoj su otopljeni minerali koje biljke upijaju korijenjem\n• Zrak — kisik potreban biljnim korijenima i mikroorganizmima\n• Živa bića — bakterije, gljive, gliste, kukci i drugi organizmi',
  },
  {
    naslov: 'Slojevi tla — horizonti',
    tekst: 'Tlo nije jednolično — podijeljeno je u vodoravne slojeve zvane horizonti:\n\n• Horizont A (humusni) — gornji, tamni sloj bogat hranjivim tvarima; ovdje rastu biljni korijeni\n• Horizont B (eluvijalni) — ispod, mineralne tvari isprane s gornjeg sloja; svjetlije je boje\n• Horizont C (matična stijena) — tvrdi, duboki sloj od kojeg s vremenom nastaje tlo\n\nŠto dublje kopamo, tlo je manje plodno.',
  },
  {
    naslov: 'Vrste tla',
    tekst: 'Najvažnije vrste tla su:\n\n• Ilovača — mješavina pijeska, gline i humusa; najplodnije tlo pogodno za uzgoj većine biljaka\n• Pijesak — krupne čestice, lako propušta vodu i minerale; nije plodnost\n• Glina — sitne čestice, dugo zadržava vodu; teško se obrađuje, ali u mješavini je korisna\n• Crnica — tamno, iznimno humusom bogato tlo; karakteristično za ravničarska područja; izvrsna plodnost\n• Crvena zemlja — tlo mediteranskog područja, crvene boje zbog željeznih minerala',
  },
  {
    naslov: 'Živa bića u tlu — edafon',
    tekst: 'Sva živa bića koja žive u tlu zajedno zovemo edafon. Tlo je dom milijardama organizama:\n\n• Bakterije i gljive — razgrađuju organske ostatke i stvaraju humus\n• Gliste — prokopavaju hodnike, prozračuju tlo i miješaju organske i mineralne tvari (Darwinove "seljačice Zemlje")\n• Kukci i ličinke — pomažu razgradnji organskog materijala\n• Krtice i miševi — kopaju hodnike i rahle tlo',
  },
  {
    naslov: 'Važnost tla',
    tekst: 'Tlo je temelj kopnenog života:\n\n• Na njemu rastu biljke koje su hrana svim životinjama i nama\n• Filtrira i čisti vodu koja prolazi kroz njega do podzemnih voda\n• Dom je milijardama živih bića\n• Vezuje ugljični dioksid i utječe na klimu\n\nBez tla nema ni hrane ni pitke vode. Radi toga je zaštita tla jedan od najvažnijih ekoloških zadataka.',
  },
  {
    naslov: 'Zaštita tla od erozije',
    tekst: 'Erozija je odnošenje i razaranje tla vodom i vjetrom. Ubrzava se krčenjem šuma, prekomjernim oranjem i nepravilnom obradom.\n\nKako zaštititi tlo?\n\n• Šume i travnjaci korijenjem drže tlo i usporavaju otjecanje vode\n• Terase na padinama zaustavljaju spiranje\n• Kompost i organska gnojiva obnavljaju plodnost\n• Smanjivanje upotrebe pesticida i kemikalija\n\nZa nastanak 1 cm tla treba stotine godina — ali erozija ga može odnijeti za jednu oluju.',
  },
];

const kartice_tlo: Kartica[] = [
  { pojam: 'Tlo', opis: 'Gornji, rahli sloj Zemljine kore nastao raspadanjem stijena i organskih ostataka; temelj kopnenog života' },
  { pojam: 'Humus', opis: 'Tamna, raspadnuta organska tvar u tlu nastala razgradnjom biljnih i životinjskih ostataka; daje tlu plodnost' },
  { pojam: 'Erozija', opis: 'Odnošenje i razaranje tla vodom ili vjetrom; ubrzava je krčenje šuma i prekomjerna obrada' },
  { pojam: 'Matična stijena', opis: 'Duboki, tvrdi sloj od kojeg postupno nastaje tlo; leži ispod svih horizonata' },
  { pojam: 'Ilovača', opis: 'Mješavina pijeska, gline i humusa; najplodnije i najpogodnije tlo za uzgoj biljaka' },
  { pojam: 'Horizont A', opis: 'Gornji, humusom bogat i tamni sloj tla; ovdje rastu biljni korijeni i živi su organizmi' },
  { pojam: 'Edafon', opis: 'Sva živa bića koja žive u tlu — od bakterija i gljiva do glista, kukaca i krtica' },
  { pojam: 'Gliste', opis: 'Korisne životinje u tlu koje prozračuju, miješaju i obogaćuju tlo organskim tvarima' },
  { pojam: 'Kompost', opis: 'Gnojivo nastalo razgradnjom organskih ostataka (lišće, kuhinjski otpad); obogaćuje i obnavlja tlo' },
  { pojam: 'Crnica', opis: 'Iznimno tamno i plodno tlo bogato humusom; karakteristično za ravničarska i stepska područja' },
  { pojam: 'pH tla', opis: 'Mjera kiselosti ili lužnatosti tla (1–14); neutralno tlo (pH 7) najpogodnije za većinu biljaka' },
  { pojam: 'Pijesak', opis: 'Tlo s krupnim česticama koje lako propušta vodu; niska plodnost jer minerali brzo ispiru' },
];

const pitanjaTlo: Pitanje[] = [
  { p: 'Od čega se tlo sastoji?', o: ['Samo od pijeska i gline', 'Samo od kamenja i vode', 'Od mineralnih čestica, humusa, vode, zraka i živih organizama', 'Od pijeska i vode'], t: 2, hint: 'Tlo je složena mješavina — bez svakog od ovih sastojaka biljke ne bi mogle rasti.' },
  { p: 'Što je humus?', o: ['Vrsta stijene', 'Raspadnuta organska tvar u tlu', 'Vrsta minerala', 'Kemijsko gnojivo'], t: 1, hint: 'Humus nastaje razgradnjom lišća, mrtvih životinja i biljaka. Tamna je boja tla znak da ima puno humusa.' },
  { p: 'Koji je najplodniji tip tla?', o: ['Pješčano', 'Glinasto', 'Stjenovito', 'Ilovasto'], t: 3, hint: 'Ilovača je mješavina pijeska, gline i humusa — ima idealnu strukturu za zadržavanje vode i minerala.' },
  { p: 'Što je erozija tla?', o: ['Gnojenje tla', 'Odnošenje tla vodom ili vjetrom', 'Oranje tla', 'Navodnjavanje tla'], t: 1, hint: 'Erozija je jedan od najvećih ekoloških problema — za nastanak tla trebaju tisuće godina, a kiša ga može odnijeti za sat.' },
  { p: 'Koji su najmanji organizmi koji žive u tlu?', o: ['Gliste', 'Krtice', 'Miševi', 'Bakterije'], t: 3, hint: 'Bakterije su mikroskopski sitne, ali u jednoj žlici tla može ih biti više nego ljudi na Zemlji!' },
  { p: 'Što je posebno za pješčano tlo?', o: ['Zadržava puno vode', 'S krupnim česticama lako propušta vodu', 'Najplodnije je', 'Sadrži najviše humusa'], t: 1, hint: 'Pijesak ima krupne čestice između kojih voda brzo prolazi — pa s njom otjecaju i minerali hranjive tvari.' },
  { p: 'Što je posebno za glinasto tlo?', o: ['Ima krupne čestice', 'Lako propušta vodu', 'Ima sitne čestice i zadržava vodu', 'Najplodnije je za uzgoj'], t: 2, hint: 'Glina ima sitne, plosnate čestice koje čvrsto drže vodu. Vlažna je ljepljiva, a suha se puca.' },
  { p: 'Što je matična stijena?', o: ['Najgornji sloj tla', 'Vrsta gline', 'Stijena od koje nastaje tlo', 'Artificijalno gnojivo'], t: 2, hint: 'Matična stijena je polazna točka za nastanak tla — temperatura, voda i organizmi je postupno razaraju.' },
  { p: 'Koliko vremena treba za nastanak 1 cm tla?', o: ['1 do 10 godina', '10 do 50 godina', 'Točno 100 godina', 'Stotine do tisuće godina'], t: 3, hint: 'Zato je tlo dragocjeno — jednom uništeno, može biti nepovratno izgubljeno za tisuće godina.' },
  { p: 'Zašto je tlo važno za biljke?', o: ['Pruža im toplinu i svjetlost', 'Štiti ih od vjetra', 'Daje im ugljični dioksid', 'Pruža im vodu, minerale i oslonac'], t: 3, hint: 'Biljne korijenje iz tla upijakuje vodu s otopljenim mineralima, a zemlja drži biljku uspravno.' },
  { p: 'Što su hranjive mineralne tvari u tlu?', o: ['Štetni organizmi', 'Dušik, fosfor i kalij koji hrane biljke', 'Vrsta gljiva', 'Vrsta insekata'], t: 1, hint: 'Dušik, fosfor i kalij su glavni minerali koje biljke trebaju za rast — zato ih dodajemo gnojivima.' },
  { p: 'Što uzrokuje degradaciju tla?', o: ['Kiša i sunce', 'Uzgoj voća', 'Pčele i kukci', 'Prekomjerna obrada, kemikalije, sječa šuma'], t: 3, hint: 'Bez šumskog pokrova i pravilne obrade tlo postaje siromašno, kompaktno i podložno eroziji.' },
  { p: 'Što je kompost?', o: ['Kemijsko gnojivo', 'Vrsta pesticida', 'Gnojivo od organskih ostataka', 'Vrsta tla'], t: 2, hint: 'Kompostiranjem kuhinjskog otpada i lišća dobivamo prirodno gnojivo bez kemikalija.' },
  { p: 'Zašto gliste pomažu tlu?', o: ['Jedu štetočine', 'Čuvaju tlo od kiše', 'Donose sjemenke', 'Prozračuju tlo i obogaćuju humusom'], t: 3, hint: 'Darwin ih je nazvao "seljačicama Zemlje" — gliste svakodnevno prozračuju i gnoje tlo.' },
  { p: 'Što je pH vrijednost tla?', o: ['Dubina tla', 'Težina tla', 'Temperatura tla', 'Mjera kiselosti ili lužnatosti tla'], t: 3, hint: 'Neutralno tlo (pH 7) najpogodnije je za većinu biljaka. Kiselo ili lužnato tlo ograničava rast.' },
  { p: 'Koje tlo je najlošije za uzgoj biljaka?', o: ['Ilovasto', 'Humozno', 'Crnica', 'Stjenovito'], t: 3, hint: 'Stjenovito tlo nema dovoljno humusa, vode ni minerala — biljke ne mogu uhvatiti korijenje.' },
  { p: 'Što su horizonti tla?', o: ['Boje tla', 'Vrsta minerala', 'Slojevi tla raspoređeni po dubini', 'Vrste biljaka'], t: 2, hint: 'Svaki horizont ima drugačiji sastav i boju. Horizont A (gornji) je najtamniji i najplodniji.' },
  { p: 'Što je crnica?', o: ['Vrsta kamena', 'Vrsta pijeska', 'Kemijsko gnojivo', 'Tamno, humusom bogato i plodno tlo'], t: 3, hint: 'Crnica je karakteristična za ravnice (npr. Slavonija, Ukrajina) — izvanredno plodna za uzgoj žitarica.' },
  { p: 'Zašto šume štite tlo od erozije?', o: ['Sjenom hladi tlo', 'Korijenjem drži tlo i usporava otjecanje vode', 'Lišćem pokriva tlo', 'Drvom blokira vjetar'], t: 1, hint: 'Mreža korijena stabala "šiva" tlo i usporava otjecanje kiše, sprečavajući spiranje.' },
  { p: 'Koji proces obnavlja kvalitetu tla?', o: ['Betoniranje', 'Odlaganje otpada', 'Navodnjavanje kemikalijama', 'Dodavanje organskih tvari i mineralnih gnojiva'], t: 3, hint: 'Organske tvari (kompost, stajsko gnojivo) obnavljaju humus i mikroorganizme koji čine tlo plodnim.' },
];

// ─── PRIDJEVI ────────────────────────────────────────────────────────────────

const skriptaPridjevi: SekcijaSkripte[] = [
  {
    naslov: 'Što je pridjev?',
    tekst: 'Pridjev (lat. adjectivum) je vrsta promjenjive riječi koja pobliže opisuje imenicu ili zamjenicu. Pridjev nam govori kakva je neka stvar, čija je ili od čega je napravljena.\n\nPrimjeri: visok dječak, mamina haljina, drvena stolica.\n\nPridjev stoji uz imenicu i uvijek se mora slagati s njom u rodu, broju i padežu.',
  },
  {
    naslov: 'Tri vrste pridjeva',
    tekst: 'U hrvatskom jeziku razlikujemo tri vrste pridjeva prema značenju:\n\n1. Opisni pridjevi — opisuju kakvo je što (kakav?, kakva?, kakvo?)\n2. Posvojni pridjevi — označavaju čije je što (čiji?, čija?, čije?)\n3. Gradivni pridjevi — označavaju od čega je nešto (od čega?, koji materijal?)',
  },
  {
    naslov: 'Opisni pridjevi',
    tekst: 'Opisni pridjevi odgovaraju na pitanja: kakav?, kakva?, kakvo?\n\nOpisuju osobinu, svojstvo ili stanje imenice.\n\nPrimjeri: visok, lijep, pametan, tužan, velik, malen, hladan, topao, brz, dobar...\n\nOpisni pridjevi jedini se mogu stupnjevati (uspoređivati): visok → viši → najviši.',
  },
  {
    naslov: 'Posvojni pridjevi',
    tekst: 'Posvojni pridjevi odgovaraju na pitanja: čiji?, čija?, čije?\n\nOznačavaju čija je neka stvar ili biće.\n\nPrimjeri: mamin (mamin kaput — čiji kaput? mamin), tatin (tatina torba), bratov (bratova bicikla), sestrino (sestrino kolo)\n\nTvore se dodavanjem nastavaka: -in, -ov/-ev, -ski/-čki/-ški.',
  },
  {
    naslov: 'Gradivni pridjevi',
    tekst: 'Gradivni pridjevi odgovaraju na pitanja: od čega?, koji (materijal)?\n\nOznačavaju od čega je neka stvar napravljena ili koja je njezina tvar.\n\nPrimjeri: drven/drveni (od drva), kameni (od kamena), zlatan (od zlata), stakleni (od stakla), željezni (od željeza)\n\nTvore se nastavcima: -en/-an, -ni, -ski.',
  },
  {
    naslov: 'Stupnjevi usporedbe',
    tekst: 'Opisni pridjevi mogu se stupnjevati — međusobno uspoređivati.\n\n• Pozitiv — osnovni oblik: visok, lijep, brz, dobar\n• Komparativ — drugi stupanj, "više": viši, ljepši, brži, bolji\n• Superlativ — treći, "najviše": najviši, najljepši, najbrži, najbolji\n\nSuperlativ = naj- + komparativ.\n\nPosebni oblici: dobar → bolji → najbolji; loš → gori → najgori; mali → manji → najmanji; velik → veći → najveći.',
  },
  {
    naslov: 'Rod, broj i padež pridjeva',
    tekst: 'Pridjevi se mijenjaju po:\n\n• Rodu: muški rod (visok dječak), ženski rod (visoka djevojčica), srednji rod (visoko stablo)\n• Broju: jednina (lijep dan) ili množina (lijepi dani)\n• Padežu: slaže se s imenicom u svim padežima\n\nPridjev se uvijek mora slagati s imenicom na koju se odnosi! Ako promijenimo imenicu, moramo promijeniti i pridjev.',
  },
  {
    naslov: 'Određeni i neodređeni oblik',
    tekst: 'Pridjevi u muškom rodu jednine imaju dva oblika:\n\n• Neodređeni oblik: visok čovjek (ne znamo koji čovjek — bilo koji visok čovjek)\n• Određeni oblik: visoki čovjek (određeni, poznati čovjek — onaj visoki čovjek kojeg znamo)\n\nU ženskom i srednjem rodu te množini nema ove razlike.\n\nPrimjeri: dobar učenik (neodređeni) ↔ dobri učenik (određeni); mlad (neo.) ↔ mladi (određeni)',
  },
];

const kartice_pridjevi: Kartica[] = [
  { pojam: 'Pridjev', opis: 'Vrsta promjenjive riječi koja opisuje imenicu — govori kakva je stvar, čija je ili od čega je' },
  { pojam: 'Opisni pridjev', opis: 'Odgovara na pitanja: kakav? kakva? kakvo? • Primjeri: visok, lijep, pametan, brz, hladan' },
  { pojam: 'Posvojni pridjev', opis: 'Odgovara na pitanja: čiji? čija? čije? • Primjeri: mamin, tatin, sestrin, bratov, učiteljev' },
  { pojam: 'Gradivni pridjev', opis: 'Odgovara na pitanja: od čega? koji materijal? • Primjeri: drven, kameni, zlatan, stakleni, željezni' },
  { pojam: 'Pozitiv', opis: 'Osnovni, prvi stupanj usporedbe • Primjeri: visok, lijep, brz, dobar, mali' },
  { pojam: 'Komparativ', opis: 'Drugi stupanj usporedbe — "više od" • Primjeri: viši, ljepši, brži, bolji, manji' },
  { pojam: 'Superlativ', opis: 'Treći, najviši stupanj — "najviše od svega" • Primjeri: najviši, najljepši, najbrži, najbolji, najmanji' },
  { pojam: 'Rod pridjeva', opis: 'Muški (visok), ženski (visoka), srednji (visoko) — slaže se s imenicom!' },
  { pojam: 'Broj pridjeva', opis: 'Jednina (lijep dan) ili množina (lijepi dani) — slaže se s imenicom!' },
  { pojam: 'Slaganje pridjeva', opis: 'Pridjev se mora slagati s imenicom u RODU, BROJU i PADEŽU — uvijek!' },
  { pojam: 'Određeni oblik', opis: '"Visoki dječak" — znamo koji je to dječak; oblik pokazuje određenost' },
  { pojam: 'Neodređeni oblik', opis: '"Visok dječak" — bilo koji visok dječak, ne znamo koji' },
];

const pitanjaPridjevi: Pitanje[] = [
  { p: 'Što je pridjev?', o: ['Vrsta glagola', 'Vrsta zamjenice', 'Vrsta prijedloga', 'Vrsta riječi koja opisuje imenicu'], t: 3, hint: 'Pridjev stoji uz imenicu i govori nam više o njoj — kakva je, čija je ili od čega je.' },
  { p: 'Koje su tri vrste pridjeva u hrvatskom jeziku?', o: ['Opisni, posvojni i gradivni', 'Opisni, glagolski i zamjenički', 'Posvojni, padežni i množinski', 'Opisni, padežni i rodski'], t: 0, hint: 'Svaka vrsta odgovara na drugačije pitanje: kakav? (opisni), čiji? (posvojni), od čega? (gradivni).' },
  { p: 'Na koje pitanje odgovaraju opisni pridjevi?', o: ['Čiji?', 'Od čega?', 'Kakav / Kakva / Kakvo?', 'Koji?'], t: 2, hint: 'Primjeri opisnih pridjeva: visok, lijep, pametan, hladan, brz, velik, mali...' },
  { p: 'Na koje pitanje odgovaraju posvojni pridjevi?', o: ['Kakav?', 'Od čega?', 'Koliki?', 'Čiji / Čija / Čije?'], t: 3, hint: 'Posvojni pridjevi označavaju čije je nešto: mamin, tatin, bratov, sestrin, učiteljev...' },
  { p: 'Na koje pitanje odgovaraju gradivni pridjevi?', o: ['Kakav?', 'Čiji?', 'Koliki?', 'Od čega je? / Koji materijal?'], t: 3, hint: 'Gradivni pridjevi označavaju materijal: drven (od drva), kameni (od kamena), zlatan (od zlata).' },
  { p: 'Koji je rod pridjeva "lijepa"?', o: ['Muški', 'Ženski', 'Srednji', 'Množina'], t: 1, hint: 'Pridjevi u ženskom rodu završavaju na -a: lijepa, visoka, pametna, brza...' },
  { p: 'Koji je rod pridjeva "visoko"?', o: ['Muški', 'Ženski', 'Srednji', 'Množina'], t: 2, hint: 'Pridjevi u srednjem rodu završavaju na -o ili -e: visoko, lijepo, pametno...' },
  { p: 'Koji je rod pridjeva "pametan"?', o: ['Muški', 'Ženski', 'Srednji', 'Množina'], t: 0, hint: 'Pridjevi u muškom rodu mogu završavati na suglasnik (-an, -at, -ak...) ili na -i.' },
  { p: 'Što je pozitiv pridjeva?', o: ['Drugi stupanj usporedbe', 'Treći stupanj usporedbe', 'Suprotni oblik pridjeva', 'Osnovni, prvi oblik pridjeva'], t: 3, hint: 'Pozitiv je jednostavno osnovan oblik pridjeva — još ga nismo uspoređivali s ničim.' },
  { p: 'Što je komparativ pridjeva?', o: ['Osnovni, prvi oblik', 'Treći, najveći stupanj', 'Oblik za ženski rod', 'Drugi stupanj usporedbe — viši'], t: 3, hint: 'Komparativom uspoređujemo dvije stvari: Ivan je viši od Petra. (viši = komparativ od visok)' },
  { p: 'Što je superlativ pridjeva?', o: ['Osnovan oblik', 'Drugi stupanj usporedbe', 'Oblik za množinu', 'Treći stupanj — najmanji ili najveći'], t: 3, hint: 'Superlativ = naj- + komparativ: naj + viši = najviši. Označava da nema ničega višeg.' },
  { p: 'Koji je komparativ pridjeva "brz"?', o: ['Najbrziji', 'Brži', 'Najbrži', 'Brze'], t: 1, hint: 'Komparativ od "brz" je "brži" — tvorimo ga dodavanjem -ji (-iji, -ji, -i).' },
  { p: 'Koji je superlativ pridjeva "lijep"?', o: ['Ljepši', 'Lijepi', 'Najljepši', 'Najljeplje'], t: 2, hint: 'Superlativ = naj- + komparativ: ljepši → naj + ljepši = najljepši.' },
  { p: 'Koji je komparativ pridjeva "dobar"?', o: ['Dobriji', 'Bolji', 'Najbolji', 'Dobro'], t: 1, hint: '"Dobar" je poseban slučaj — komparativ je "bolji" (ne "dobriji"), superlativ "najbolji".' },
  { p: 'Koji je superlativ pridjeva "loš"?', o: ['Lošiji', 'Gore', 'Lošan', 'Najgori'], t: 3, hint: '"Loš" je poseban slučaj — komparativ "gori", superlativ "najgori" (ne "najlošiji").' },
  { p: '"Drvena" je koja vrsta pridjeva?', o: ['Opisni', 'Posvojni', 'Gradivni', 'Zamjenički'], t: 2, hint: '"Drvena" znači od drva — odgovara na pitanje "od čega?" pa je gradivni pridjev.' },
  { p: '"Sestrin" je koja vrsta pridjeva?', o: ['Opisni', 'Posvojni', 'Gradivni', 'Zamjenički'], t: 1, hint: '"Sestrin" znači čiji je (sestrtin) — odgovara na pitanje "čiji?" pa je posvojni pridjev.' },
  { p: '"Pametan" je koja vrsta pridjeva?', o: ['Opisni', 'Posvojni', 'Gradivni', 'Zamjenički'], t: 0, hint: '"Pametan" opisuje kakva je osoba — odgovara na pitanje "kakav?" pa je opisni pridjev.' },
  { p: 'Koji je posvojni pridjev od imenice "mama"?', o: ['Mamski', 'Mamin', 'Mame', 'Mamljiv'], t: 1, hint: 'Posvojni pridjev od osoba ženskog roda tvori se nastavkom -in: mama → mamin.' },
  { p: 'Koji je posvojni pridjev od imenice "tata"?', o: ['Tatanski', 'Tatast', 'Tatin', 'Tatica'], t: 2, hint: 'Posvojni pridjev od "tata" je "tatin": tatina torba, tatini ključevi.' },
  { p: 'Koji je gradivni pridjev za "drvo"?', o: ['Drvast', 'Drveni', 'Drven', 'Drvljiv'], t: 2, hint: '"Drven" (ili "drveni") je gradivni pridjev koji znači "napravljen od drva".' },
  { p: 'Koji je gradivni pridjev za "zlato"?', o: ['Zlatast', 'Zlatiti', 'Zlatan', 'Zlatljiv'], t: 2, hint: '"Zlatan" znači napravljen od zlata ili boje zlata — tvori se nastavkom -an.' },
  { p: 'Koji je komparativ pridjeva "mali"?', o: ['Maliji', 'Manji', 'Najmanji', 'Maleni'], t: 1, hint: '"Mali" je poseban — komparativ je "manji", superlativ "najmanji". Korijen se mijenja.' },
  { p: 'Koji je komparativ pridjeva "velik"?', o: ['Velikiji', 'Veći', 'Najveći', 'Velikan'], t: 1, hint: '"Velik" → "veći" → "najveći". Komparativ se ne tvori pravilno (-iji) nego "veći".' },
  { p: 'Po čemu se pridjev mijenja?', o: ['Samo po rodu', 'Samo po broju', 'Samo po padežu', 'Rodu, broju i padežu'], t: 3, hint: 'Pridjev se mora slagati s imenicom — ako promijenimo imenicu, mijenjamo i pridjev u sve tri kategorije.' },
  { p: 'Koji je superlativ pridjeva "star"?', o: ['Stariji', 'Starac', 'Najstariji', 'Starost'], t: 2, hint: '"Star" → "stariji" → "najstariji". Komparativ se tvori nastavkom -iji.' },
  { p: 'Koji je superlativ pridjeva "visok"?', o: ['Viši', 'Visok', 'Najviši', 'Visočan'], t: 2, hint: '"Visok" → "viši" → "najviši". Komparativ je "viši", a superlativ naj + viši = "najviši".' },
  { p: 'U rečenici "Plava lopta valja niz ulicu" — koji je pridjev?', o: ['Lopta', 'Plava', 'Valja', 'Ulicu'], t: 1, hint: '"Plava" opisuje imenicu "lopta" (kakva lopta? — plava). Lopta je imenica, valja je glagol.' },
  { p: 'Što je određeni oblik pridjeva?', o: ['Oblik bez nastavka (npr. "visok")', 'Superlativni oblik', 'Komparativni oblik', 'Oblik s nastavkom za određenost (npr. "visoki")'], t: 3, hint: '"Visoki dječak" (određeni) — znamo koji. "Visok dječak" (neodređeni) — bilo koji.' },
  { p: 'Koji je komparativ pridjeva "jak"?', o: ['Jakiji', 'Jaki', 'Jači', 'Najjači'], t: 2, hint: '"Jak" → "jači" → "najjači". Korijen se malo mijenja (k → č) što je uobičajeno u hrvatskom.' },
];

// ─── TEME ────────────────────────────────────────────────────────────────────

export const teme: Tema[] = [
  {
    id: 'rimsko-drustvo',
    naziv: 'Rimsko društvo',
    predmet: 'Povijest',
    opis: 'Život, kultura i povijest Starog Rima — od osnivanja do pada Carstva',
    ikona: '🏛️',
    boja: 'amber',
    skripta: skriptaRim,
    kartice: karticeRim,
    pitanja: pitanjaRim,
  },
  {
    id: 'priroda-tlo',
    naziv: 'Priroda — Tlo',
    predmet: 'Priroda',
    opis: 'Sastav, nastanak, vrste i važnost tla za život na Zemlji',
    ikona: '🌱',
    boja: 'green',
    skripta: skriptaTlo,
    kartice: kartice_tlo,
    pitanja: pitanjaTlo,
  },
  {
    id: 'pridjevi',
    naziv: 'Hrvatski — Pridjevi',
    predmet: 'Hrvatski jezik',
    opis: 'Vrste pridjeva, stupnjevi usporedbe i slaganje s imenicama',
    ikona: '📝',
    boja: 'blue',
    skripta: skriptaPridjevi,
    kartice: kartice_pridjevi,
    pitanja: pitanjaPridjevi,
  },
];

export function getTema(id: string): Tema | undefined {
  return teme.find((t) => t.id === id);
}

export const TEMA_IDS = teme.map((t) => t.id);
