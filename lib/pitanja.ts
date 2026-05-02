export interface Pitanje {
  p: string;   // pitanje
  o: string[]; // 4 opcije
  t: number;   // indeks točnog odgovora (0-3)
}

export interface Tema {
  id: string;
  naziv: string;
  opis: string;
  ikona: string;
  boja: string;     // Tailwind color name
  pitanja: Pitanje[];
}

// ─── RIMSKO DRUŠTVO ─────────────────────────────────────────────────────────

const rimskoDrustvo: Pitanje[] = [
  { p: 'Koji je grad bio središte Rimskog Carstva?', o: ['Atena', 'Rim', 'Kartaga', 'Aleksandrija'], t: 1 },
  { p: 'Kako su se zvali rimski plemići?', o: ['Plebejci', 'Robovi', 'Patriciji', 'Konzuli'], t: 2 },
  { p: 'Kako su se zvali obični rimski građani?', o: ['Patriciji', 'Senatori', 'Plebejci', 'Gladijatori'], t: 2 },
  { p: 'Koji je bio rimski zakonodavni organ?', o: ['Forum', 'Konzulat', 'Triumvirat', 'Senat'], t: 3 },
  { p: 'Kako se zvao najveći rimski amfiteatar?', o: ['Panteon', 'Forum Romanum', 'Koloseum', 'Circus Maximus'], t: 2 },
  { p: 'Tko je bio Julius Cezar?', o: ['Rimski car', 'Rimski vojskovođa i diktator', 'Rimski filozof', 'Rimski pjesnik'], t: 1 },
  { p: 'Tko je bio prvi rimski car?', o: ['Julius Cezar', 'Neron', 'Oktavijan August', 'Kaligula'], t: 2 },
  { p: 'Koji su jezik govorili Rimljani?', o: ['Grčki', 'Etrurski', 'Italski', 'Latinski'], t: 3 },
  { p: 'Što je bio akvedukt?', o: ['Rimska vojska', 'Rimski novac', 'Rimski vodovod', 'Rimski hram'], t: 2 },
  { p: 'Tko je bio vrhovni rimski bog?', o: ['Mars', 'Neptun', 'Jupiter', 'Vulkan'], t: 2 },
  { p: 'Tko je bio rimski bog rata?', o: ['Jupiter', 'Neptun', 'Merkur', 'Mars'], t: 3 },
  { p: 'Tko je bila rimska božica ljubavi?', o: ['Juno', 'Minerva', 'Diana', 'Venera'], t: 3 },
  { p: 'Što je bio rimski forum?', o: ['Vojni logor', 'Trg i centar javnog života', 'Hram', 'Kupelji'], t: 1 },
  { p: 'Kako se zvao rimski hipodrom?', o: ['Koloseum', 'Panteon', 'Circus Maximus', 'Forum'], t: 2 },
  { p: 'Što su bile terme?', o: ['Rimske škole', 'Rimski hramovi', 'Rimske kupelji', 'Rimske tržnice'], t: 2 },
  { p: 'Tko je bio Spartacus?', o: ['Rimski car', 'Rimski senator', 'Rimski vojskovođa', 'Vođa robovske pobune'], t: 3 },
  { p: 'Kada je prema legendi osnovan Rim?', o: ['1000. g. pr. Kr.', '753. g. pr. Kr.', '500. g. pr. Kr.', '27. g. pr. Kr.'], t: 1 },
  { p: 'Tko je bio Romul?', o: ['Rimski car', 'Rimski bog', 'Legendarni osnivač Rima', 'Rimski senator'], t: 2 },
  { p: 'Što je bila rimska legija?', o: ['Novčana jedinica', 'Vojska od oko 5000 vojnika', 'Vrsta broda', 'Vrsta hrane'], t: 1 },
  { p: 'Kako su se zvali dvojica godišnjih čelnika rimske republike?', o: ['Diktatori', 'Senatori', 'Tribuni', 'Konzuli'], t: 3 },
  { p: 'Što je bila toga?', o: ['Rimski mač', 'Rimska muška odjeća', 'Rimska kaciga', 'Rimska hrana'], t: 1 },
  { p: 'Što je bio rimski denarius?', o: ['Rimski vojnik', 'Rimski hram', 'Rimski novac', 'Rimski brod'], t: 2 },
  { p: 'Tko su bili gladijatori?', o: ['Rimski svećenici', 'Borci u areni', 'Rimski filozofi', 'Rimski trgovci'], t: 1 },
  { p: 'Koji je rimski car prvi prihvatio kršćanstvo?', o: ['August', 'Neron', 'Dioklecijan', 'Konstantin'], t: 3 },
  { p: 'Što je bio rimski triumf?', o: ['Vrsta hrane', 'Slavlje za pobjedonosnog vojskovođu', 'Vrsta sporta', 'Rimski zakon'], t: 1 },
  { p: 'Kako se zvao rimski kratki mač?', o: ['Scutum', 'Pilum', 'Gladius', 'Hasta'], t: 2 },
  { p: 'Što je bio rimski štit?', o: ['Galea', 'Lorica', 'Scutum', 'Gladius'], t: 2 },
  { p: 'Tko su bili Etruščani?', o: ['Rimski robovi', 'Rimski vojnici', 'Rimski bogovi', 'Narod koji je živio u Italiji prije Rimljana'], t: 3 },
  { p: 'Kada je palo Zapadno Rimsko Carstvo?', o: ['27. g. pr. Kr.', '313. g.', '395. g.', '476. g.'], t: 3 },
  { p: 'Koji je rimski car podijelio carstvo na Istočno i Zapadno?', o: ['Dioklecijan', 'Teodozije I', 'Konstantin', 'Justinijan'], t: 1 },
  { p: 'Što je bila rimska Republika?', o: ['Vladavina jednog cara', 'Vrsta rimskog hrama', 'Oblik vlasti s izabranim predstavnicima', 'Rimska provincija'], t: 2 },
  { p: 'Što je bila rimska insula?', o: ['Otok', 'Stambena zgrada za siromašnije', 'Vojni logor', 'Hram'], t: 1 },
  { p: 'Tko su bile Vestalke?', o: ['Rimske vojnikinje', 'Svećenice boginje Veste', 'Rimske plesačice', 'Rimske liječnice'], t: 1 },
  { p: 'Koji je rimski car dao spaliti Rim prema legendi?', o: ['Julius Cezar', 'August', 'Neron', 'Trajan'], t: 2 },
  { p: 'Što je bio rimski mozaik?', o: ['Vrsta hrane', 'Slika od malih kamenih ili staklenih kockica', 'Rimski ples', 'Vrsta oružja'], t: 1 },
  { p: 'Što je bio rimski Panteon?', o: ['Vojni logor', 'Kupelji', 'Tržnica', 'Hram svim bogovima'], t: 3 },
  { p: 'Što je bio atrium u rimskoj kući?', o: ['Rimski rog', 'Rimska kaciga', 'Središnja dvorana rimske kuće', 'Rimski brod'], t: 2 },
  { p: 'Što je značilo Pax Romana?', o: ['Rimski rat', 'Rimski car', 'Rimski mir', 'Rimski zakon'], t: 2 },
  { p: 'Tko je bio Ciceron?', o: ['Rimski car', 'Rimski vojskovođa', 'Rimski govornik i filozof', 'Rimski bog'], t: 2 },
  { p: 'Koje je more Rimljani zvali Mare Nostrum (naše more)?', o: ['Jadransko', 'Crno', 'Crveno', 'Sredozemno'], t: 3 },
  { p: 'Tko je bio Hannibal?', o: ['Rimski vojskovođa', 'Kartaški vojskovođa koji je napao Rim', 'Rimski car', 'Rimski senator'], t: 1 },
  { p: 'Koji je rimski car vladao u doba Isusova rođenja?', o: ['Julius Cezar', 'Oktavijan August', 'Tiberije', 'Kaligula'], t: 1 },
  { p: 'Što su bile rimske provincije?', o: ['Rimski hramovi', 'Rimski gradovi', 'Rimske škole', 'Osvojena područja kojima je upravljao Rim'], t: 3 },
  { p: 'Koji je Julius Cezar pobijedio u ratu Gale?', o: ['Pompeius', 'Oktavijan', 'Julius Cezar', 'Kras'], t: 2 },
  { p: 'Što je rimsko pravo?', o: ['Rimska religija', 'Sustav zakona koji je osnova europskog prava', 'Rimska vojska', 'Rimska valuta'], t: 1 },
  { p: 'Što je bila villa rustica?', o: ['Gradska kuća', 'Seosko imanje', 'Vojni logor', 'Hram'], t: 1 },
  { p: 'Kako se zvao rimski brod s tri reda vesala?', o: ['Birema', 'Trirema', 'Quadrirema', 'Pentirema'], t: 1 },
  { p: 'Koji je rimski car proveo veliki progon kršćana?', o: ['August', 'Trajan', 'Neron', 'Hadrian'], t: 2 },
  { p: 'Što je bila rimska inkvizicija s robovima na rimskim brodovima?', o: ['Veslač', 'Kormilar', 'Kapetan', 'Vojnik'], t: 0 },
  { p: 'Što je bio Rimski put (Via Appia)?', o: ['Tržnica', 'Važna rimska cesta', 'Rimski zakon', 'Vojni logor'], t: 1 },
];

// ─── PRIRODA — TLO ──────────────────────────────────────────────────────────

const prirodaTlo: Pitanje[] = [
  { p: 'Od čega se tlo sastoji?', o: ['Samo od pijeska i gline', 'Samo od kamenja i vode', 'Od mineralnih čestica, humusa, vode, zraka i živih organizama', 'Od pijeska i vode'], t: 2 },
  { p: 'Što je humus?', o: ['Vrsta stijene', 'Raspadnuta organska tvar u tlu', 'Vrsta minerala', 'Kemijsko gnojivo'], t: 1 },
  { p: 'Koji je najplodniji tip tla?', o: ['Pješčano', 'Glinasto', 'Stjenovito', 'Ilovasto'], t: 3 },
  { p: 'Što je erozija tla?', o: ['Gnojenje tla', 'Odnošenje tla vodom ili vjetrom', 'Oranje tla', 'Navodnjavanje tla'], t: 1 },
  { p: 'Koji su najmanji organizmi koji žive u tlu?', o: ['Gliste', 'Krtice', 'Miševi', 'Bakterije'], t: 3 },
  { p: 'Što je posebno za pješčano tlo?', o: ['Zadržava puno vode', 'S krupnim česticama lako propušta vodu', 'Najplodnije je', 'Sadrži najviše humusa'], t: 1 },
  { p: 'Što je posebno za glinasto tlo?', o: ['Ima krupne čestice', 'Lako propušta vodu', 'Ima sitne čestice i zadržava vodu', 'Najplodnije je za uzgoj'], t: 2 },
  { p: 'Što je matična stijena?', o: ['Najgornji sloj tla', 'Vrsta gline', 'Stijena od koje nastaje tlo', 'Artificijalno gnojivo'], t: 2 },
  { p: 'Koliko vremena treba za nastanak 1 cm tla?', o: ['1 do 10 godina', '10 do 50 godina', 'Točno 100 godina', 'Stotine do tisuće godina'], t: 3 },
  { p: 'Zašto je tlo važno za biljke?', o: ['Pruža im toplinu i svjetlost', 'Štiti ih od vjetra', 'Daje im ugljični dioksid', 'Pruža im vodu, minerale i oslonac'], t: 3 },
  { p: 'Što su hranjive mineralne tvari u tlu?', o: ['Štetni organizmi', 'Dušik, fosfor i kalij koji hrane biljke', 'Vrsta gljiva', 'Vrsta insekata'], t: 1 },
  { p: 'Što uzrokuje degradaciju tla?', o: ['Kiša i sunce', 'Uzgoj voća', 'Pčele i kukci', 'Prekomjerna obrada, kemikalije, sječa šuma'], t: 3 },
  { p: 'Što je kompost?', o: ['Kemijsko gnojivo', 'Vrsta pesticida', 'Gnojivo od organskih ostataka', 'Vrsta tla'], t: 2 },
  { p: 'Zašto gliste pomažu tlu?', o: ['Jedu štetočine', 'Čuvaju tlo od kiše', 'Donose sjemenke', 'Prozračuju tlo i obogaćuju humusom'], t: 3 },
  { p: 'Što je pH vrijednost tla?', o: ['Dubina tla', 'Težina tla', 'Temperatura tla', 'Mjera kiselosti ili lužnatosti tla'], t: 3 },
  { p: 'Koje tlo je najlošije za uzgoj biljaka?', o: ['Ilovasto', 'Humozno', 'Crnica', 'Stjenovito'], t: 3 },
  { p: 'Što su horizonti tla?', o: ['Boje tla', 'Vrsta minerala', 'Slojevi tla raspoređeni po dubini', 'Vrste biljaka'], t: 2 },
  { p: 'Što je crnica?', o: ['Vrsta kamena', 'Vrsta pijeska', 'Kemijsko gnojivo', 'Tamno, humusom bogato i plodno tlo'], t: 3 },
  { p: 'Zašto šume štite tlo od erozije?', o: ['Sjenom hladi tlo', 'Korijenjem drži tlo i usporava otjecanje vode', 'Lišćem pokriva tlo', 'Drvom blokira vjetar'], t: 1 },
  { p: 'Koji proces obnavlja kvalitetu tla?', o: ['Betoniranje', 'Odlaganje otpada', 'Navodnjavanje kemikalijama', 'Dodavanje organskih tvari i mineralnih gnojiva'], t: 3 },
];

// ─── PRIDJEVI ────────────────────────────────────────────────────────────────

const pridjevi: Pitanje[] = [
  { p: 'Što je pridjev?', o: ['Vrsta glagola', 'Vrsta zamjenice', 'Vrsta prijedloga', 'Vrsta riječi koja opisuje imenicu'], t: 3 },
  { p: 'Koje su tri vrste pridjeva u hrvatskom jeziku?', o: ['Opisni, posvojni i gradivni', 'Opisni, glagolski i zamjenički', 'Posvojni, padežni i množinski', 'Opisni, padežni i rodski'], t: 0 },
  { p: 'Na koje pitanje odgovaraju opisni pridjevi?', o: ['Čiji?', 'Od čega?', 'Kakav / Kakva / Kakvo?', 'Koji?'], t: 2 },
  { p: 'Na koje pitanje odgovaraju posvojni pridjevi?', o: ['Kakav?', 'Od čega?', 'Koliki?', 'Čiji / Čija / Čije?'], t: 3 },
  { p: 'Na koje pitanje odgovaraju gradivni pridjevi?', o: ['Kakav?', 'Čiji?', 'Koliki?', 'Od čega je? / Koji (materijal)?'], t: 3 },
  { p: 'Koji je rod pridjeva "lijepa"?', o: ['Muški', 'Ženski', 'Srednji', 'Množina'], t: 1 },
  { p: 'Koji je rod pridjeva "visoko"?', o: ['Muški', 'Ženski', 'Srednji', 'Množina'], t: 2 },
  { p: 'Koji je rod pridjeva "pametan"?', o: ['Muški', 'Ženski', 'Srednji', 'Množina'], t: 0 },
  { p: 'Što je pozitiv pridjeva?', o: ['Drugi stupanj usporedbe', 'Treći stupanj usporedbe', 'Suprotni oblik pridjeva', 'Osnovan, prvi oblik pridjeva'], t: 3 },
  { p: 'Što je komparativ pridjeva?', o: ['Osnovan, prvi oblik', 'Treći, najveći stupanj', 'Oblik za ženski rod', 'Drugi stupanj usporedbe — viši'], t: 3 },
  { p: 'Što je superlativ pridjeva?', o: ['Osnovan oblik', 'Drugi stupanj usporedbe', 'Oblik za množinu', 'Treći stupanj — najmanji ili najveći oblik'], t: 3 },
  { p: 'Koji je komparativ pridjeva "brz"?', o: ['Najbrziji', 'Brži', 'Najbrži', 'Brze'], t: 1 },
  { p: 'Koji je superlativ pridjeva "lijep"?', o: ['Ljepši', 'Lijepi', 'Najljepši', 'Najljeplje'], t: 2 },
  { p: 'Koji je komparativ pridjeva "dobar"?', o: ['Dobriji', 'Bolji', 'Najbolji', 'Dobro'], t: 1 },
  { p: 'Koji je superlativ pridjeva "loš"?', o: ['Lošiji', 'Gore', 'Lošan', 'Najgori'], t: 3 },
  { p: '"Drvena" je koja vrsta pridjeva?', o: ['Opisni', 'Posvojni', 'Gradivni', 'Zamjenički'], t: 2 },
  { p: '"Sestrin" je koja vrsta pridjeva?', o: ['Opisni', 'Posvojni', 'Gradivni', 'Zamjenički'], t: 1 },
  { p: '"Pametan" je koja vrsta pridjeva?', o: ['Opisni', 'Posvojni', 'Gradivni', 'Zamjenički'], t: 0 },
  { p: 'Koji je posvojni pridjev od imenice "mama"?', o: ['Mamski', 'Mamin', 'Mame', 'Mamljiv'], t: 1 },
  { p: 'Koji je posvojni pridjev od imenice "tata"?', o: ['Tatanski', 'Tatast', 'Tatin', 'Tatica'], t: 2 },
  { p: 'Koji je gradivni pridjev za "drvo"?', o: ['Drvast', 'Drveni', 'Drven', 'Drvljiv'], t: 2 },
  { p: 'Koji je gradivni pridjev za "zlato"?', o: ['Zlatast', 'Zlatiti', 'Zlatan', 'Zlatljiv'], t: 2 },
  { p: 'Koji je komparativ pridjeva "mali"?', o: ['Maliji', 'Manji', 'Najmanji', 'Maleni'], t: 1 },
  { p: 'Koji je komparativ pridjeva "velik"?', o: ['Velikiji', 'Veći', 'Najveći', 'Velikan'], t: 1 },
  { p: 'Po čemu se pridjev mijenja?', o: ['Samo po rodu', 'Samo po broju', 'Samo po padežu', 'Rodu, broju i padežu'], t: 3 },
  { p: 'Koji je superlativ pridjeva "star"?', o: ['Stariji', 'Starac', 'Najstariji', 'Starost'], t: 2 },
  { p: 'Koji je superlativ pridjeva "visok"?', o: ['Viši', 'Visok', 'Najviši', 'Visočan'], t: 2 },
  { p: 'U rečenici "Plava lopta valja niz ulicu" — koji je pridjev?', o: ['Lopta', 'Plava', 'Valja', 'Ulicu'], t: 1 },
  { p: 'Što je određeni oblik pridjeva?', o: ['Oblik bez nastavka npr. "visok"', 'Superlativni oblik', 'Komparativni oblik', 'Oblik s nastavkom za određenost npr. "visoki"'], t: 3 },
  { p: 'Koji je komparativ pridjeva "jak"?', o: ['Jakiji', 'Jaki', 'Jači', 'Najjači'], t: 2 },
];

// ─── EXPORT ──────────────────────────────────────────────────────────────────

export const teme: Tema[] = [
  {
    id: 'rimsko-drustvo',
    naziv: 'Rimsko društvo',
    opis: '50 pitanja o životu, kulturi i povijesti Starog Rima',
    ikona: '🏛️',
    boja: 'amber',
    pitanja: rimskoDrustvo,
  },
  {
    id: 'priroda-tlo',
    naziv: 'Priroda — Tlo',
    opis: '20 pitanja o tlu, njegovom sastavu i važnosti',
    ikona: '🌱',
    boja: 'green',
    pitanja: prirodaTlo,
  },
  {
    id: 'pridjevi',
    naziv: 'Hrvatski — Pridjevi',
    opis: '30 pitanja o pridjevima u hrvatskom jeziku',
    ikona: '📝',
    boja: 'blue',
    pitanja: pridjevi,
  },
];

export function getTema(id: string): Tema | undefined {
  return teme.find((t) => t.id === id);
}
