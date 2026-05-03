import type { Tema } from '../types';

export const likovnaTeme: Tema[] = [
  // ── ELEMENTI LIKOVNOG JEZIKA ─────────────────────────────────────────────────
  {
    id: 'likovna-elementi',
    naziv: 'Elementi likovnog jezika',
    predmet: 'Likovna kultura',
    opis: 'Točka, crta, ploha, volumen, tekstura, boja, ton i prostor kao temeljni elementi likovnog izražavanja',
    ikona: '🎨',
    boja: 'pink',
    skripta: [
      {
        naslov: 'Točka, crta i ploha',
        tekst: 'Najmanji element likovnog jezika je točka. Gomilanjem točaka nastaje ton ili tekstura.\n\nCrta je niz točaka u smjeru kretanja. Vrste crta:\n• Ravna crta — daje dojam reda i mirnoće\n• Krivulja — mekoća, organičnost\n• Lomljena (cik-cak) crta — nemir, dinamičnost\n• Tanka crta — lakoća, tanka crta — grubost\n\nPloha nastaje kada crta zatvori prostor. Može biti:\n• Geometrijska (krug, kvadrat, trokut)\n• Slobodna (organska, nepravilna)\n• Pozitivna (lik) ili negativna (pozadina)',
      },
      {
        naslov: 'Boja i ton',
        tekst: 'Boja je jedan od najvažnijih elemenata likovnog jezika.\n\nSvojstva boje:\n• Ton (vrijednost) — stupanj svjetline boje (svjetlo/tamno)\n• Zasićenost — intenzitet čistoće boje\n• Nijansa — sama boja (crvena, plava, žuta...)\n\nPodjela boja:\n• Primarne boje: crvena, žuta, plava — ne mogu se dobiti miješanjem\n• Sekundarne boje: narančasta, zelena, ljubičasta — nastaju miješanjem primarnih\n• Tople boje: crvena, narančasta, žuta — djeluju aktivno i blisko\n• Hladne boje: plava, zelena, ljubičasta — djeluju mirno i udaljeno\n\nTon boje mijenjamo dodavanjem bijele (svjetliji ton) ili crne boje (tamniji ton).',
      },
      {
        naslov: 'Volumen, tekstura i prostor',
        tekst: 'Volumen je trodimenzionalnost — zauzimanje prostora u sve tri dimenzije (visina, širina, dubina). Na plohi se dojam volumena postiže sjenčanjem.\n\nTekstura je površinska struktura predmeta:\n• Stvarna (taktilna) tekstura — osjećamo je dodirom (hrapava, glatka, mekana)\n• Vizualna (optička) tekstura — dojam teksture na ravnoj plohi (crtanjem ili tiskom)\n\nProstor u likovnoj umjetnosti:\n• Realni prostor — skulptura i arhitektura zauzimaju pravi 3D prostor\n• Iluzija prostora — na slici se dubina postiže perspektivom, preklapanjem i gradacijom veličine\n• Linearna perspektiva — paralelne linije se "sužavaju" prema točki nedogleda na horizontu',
      },
      {
        naslov: 'Kompozicija i likovni principi',
        tekst: 'Kompozicija je raspored likovnih elemenata na plohi ili u prostoru.\n\nTemeljni principi kompozicije:\n• Ravnoteža — simetrična (jednako s obje strane) ili asimetrična (vizualni balans)\n• Ritam — ponavljanje elemenata stvara ritam (kao u glazbi)\n• Kontrast — suprotnosti naglašavaju razlike (tamno/svjetlo, veliko/malo)\n• Dominanta — jedan element privlači pažnju više od ostalih\n• Proporcija — omjer veličina između dijelova kompozicije\n• Harmonija — skladnost svih elemenata zajedno\n\nZlatni rez (omjer 1:1,618) je proporcija koja se smatra najljepšom — koriste je arhitekti i slikari.',
      },
    ],
    kartice: [
      { pojam: 'Točka', opis: 'Najmanji element likovnog jezika; gomilanjem točaka nastaje ton ili tekstura' },
      { pojam: 'Crta', opis: 'Niz točaka u smjeru kretanja; može biti ravna, krivulja ili lomljena' },
      { pojam: 'Ploha', opis: 'Nastaje kada crta zatvori prostor; može biti geometrijska ili slobodna (organska)' },
      { pojam: 'Primarne boje', opis: 'Crvena, žuta i plava — ne mogu se dobiti miješanjem drugih boja' },
      { pojam: 'Sekundarne boje', opis: 'Narančasta, zelena i ljubičasta — nastaju miješanjem dviju primarnih boja' },
      { pojam: 'Tople boje', opis: 'Crvena, narančasta i žuta — djeluju aktivno, energično i blisko' },
      { pojam: 'Hladne boje', opis: 'Plava, zelena i ljubičasta — djeluju mirno, hladno i udaljeno' },
      { pojam: 'Tekstura', opis: 'Površinska struktura; stvarna (taktilna, osjetimo dodirom) ili vizualna (optička, dojam na plohi)' },
      { pojam: 'Volumen', opis: 'Trodimenzionalnost predmeta; na slici se postiže sjenčanjem' },
      { pojam: 'Linearna perspektiva', opis: 'Tehnika prikaza dubine prostora — paralelne linije se sužavaju prema točki nedogleda' },
      { pojam: 'Kompozicija', opis: 'Raspored likovnih elemenata na plohi ili u prostoru prema principima ravnoteže, ritma i kontrasta' },
      { pojam: 'Zlatni rez', opis: 'Proporcija 1:1,618 smatrana najljepšom; koriste je slikari, arhitekti i dizajneri' },
    ],
    pitanja: [
      {
        p: 'Koji je najmanji element likovnog jezika?',
        o: ['Točka', 'Crta', 'Ploha', 'Boja'],
        t: 0,
      },
      {
        p: 'Koje su tri primarne boje?',
        o: ['Crvena, žuta i plava', 'Crvena, zelena i plava', 'Narančasta, zelena i ljubičasta', 'Bijela, crna i siva'],
        t: 0,
      },
      {
        p: 'Što nastaje miješanjem crvene i žute boje?',
        o: ['Ljubičasta', 'Narančasta', 'Zelena', 'Smeđa'],
        t: 1,
      },
      {
        p: 'Koje boje ubrajamo u tople boje?',
        o: ['Plava, zelena i ljubičasta', 'Crvena, zelena i plava', 'Crvena, narančasta i žuta', 'Siva, bijela i crna'],
        t: 2,
      },
      {
        p: 'Što je tekstura u likovnoj umjetnosti?',
        o: ['Vrsta boje koja se koristi', 'Veličina likovnog rada', 'Površinska struktura predmeta, stvarna ili vizualna', 'Raspored boja u kompoziciji'],
        t: 2,
      },
      {
        p: 'Kako na slici (plohi) postižemo dojam volumena?',
        o: ['Korištenjem samo toplih boja', 'Crtanjem samo ravnih linija', 'Sjenčanjem i gradacijom tona', 'Miješanjem primarnih boja'],
        t: 2,
      },
      {
        p: 'Što je linearna perspektiva?',
        o: ['Tehnika nanošenja boje debelim slojevima', 'Vrsta teksture na slikarskom platnu', 'Prikaz 3D prostora gdje se linije sužavaju prema točki nedogleda', 'Postupak izrade skulpture'],
        t: 2,
      },
      {
        p: 'Što nastaje miješanjem plave i žute boje?',
        o: ['Narančasta', 'Ljubičasta', 'Smeđa', 'Zelena'],
        t: 3,
      },
      {
        p: 'Koji princip kompozicije opisuje ponavljanje elemenata?',
        o: ['Kontrast', 'Proporcija', 'Dominanta', 'Ritam'],
        t: 3,
      },
      {
        p: 'Što je ploha u likovnoj umjetnosti?',
        o: ['Trodimenzionalni oblik koji zauzima prostor', 'Linija koja se ne zatvara', 'Prostor koji nastaje zatvaranjem crte', 'Vrsta teksture na skulpturi'],
        t: 2,
      },
      {
        p: 'Kako mijenjamo ton boje da bude svjetliji?',
        o: ['Dodajemo crnu boju', 'Dodajemo komplementarnu boju', 'Dodajemo bijelu boju', 'Mješamo s toplom bojom'],
        t: 2,
      },
      {
        p: 'Što je dominanta u kompoziciji?',
        o: ['Najmanji element u slici', 'Ravnoteža između lijevog i desnog dijela', 'Ponavljanje istog elementa', 'Element koji privlači pažnju više od ostalih'],
        t: 3,
      },
      {
        p: 'Koje su sekundarne boje?',
        o: ['Crvena, žuta i plava', 'Bijela, crna i siva', 'Narančasta, zelena i ljubičasta', 'Tirkizna, magenta i žuta'],
        t: 2,
      },
      {
        p: 'Koja vrsta crte daje dojam nemira i dinamičnosti?',
        o: ['Ravna horizontalna crta', 'Blaga krivulja', 'Lomljena (cik-cak) crta', 'Tanka vertikalna crta'],
        t: 2,
      },
      {
        p: 'Što je "zlatni rez" u likovnoj umjetnosti?',
        o: ['Tehnika rezanja papira', 'Vrsta zlatne boje', 'Proporcija 1:1,618 koja se smatra estetski najskladnijom', 'Okvir za sliku'],
        t: 2,
      },
      {
        p: 'Što opisuje pojam "ton boje"?',
        o: ['Naziv (hue) same boje kao što su crvena ili plava', 'Stupanj zasićenosti boje', 'Stupanj svjetline ili tamnoće boje', 'Temperatura boje'],
        t: 2,
      },
      {
        p: 'Kakav dojam daju hladne boje?',
        o: ['Aktivnost i toplinu', 'Energičnost i bliskost', 'Nered i dinamiku', 'Mirnoću i udaljenost'],
        t: 3,
      },
      {
        p: 'Što je simetrična ravnoteža u kompoziciji?',
        o: ['Jedan element je veći od ostalih', 'Elementi su raspodijeljeni jednako s obje strane zamišljene osi', 'Ponavljanje istog elementa u nizu', 'Suprotstavljanje tamnih i svjetlih površina'],
        t: 1,
      },
      {
        p: 'Što nastaje miješanjem crvene i plave boje?',
        o: ['Zelena', 'Narančasta', 'Ljubičasta', 'Smeđa'],
        t: 2,
      },
      {
        p: 'Koja je razlika između stvarne i vizualne teksture?',
        o: ['Nema razlike između njih', 'Stvarna se vidi, a vizualna osjeća', 'Stvarna se osjeća dodirom, vizualna je samo dojam na plohi', 'Stvarna je samo u skulpturi, vizualna samo u grafici'],
        t: 2,
      },
      {
        p: 'Što je "točka nedogleda" u perspektivi?',
        o: ['Centar slike gdje je žarište zbivanja', 'Najsvjetlija točka na slici', 'Točka na horizontu prema kojoj se sužavaju paralelne linije', 'Najmanji detalj na slici'],
        t: 2,
      },
      {
        p: 'Što je kontrast kao likovni princip?',
        o: ['Suprotnosti koje naglašavaju razlike (tamno/svjetlo, veliko/malo)', 'Ponavljanje jednakih elemenata', 'Ravnomjerni raspored svih elemenata', 'Proporcija između dijelova slike'],
        t: 0,
      },
      {
        p: 'Koliko dimenzija ima pravi volumen?',
        o: ['Jednu (dužina)', 'Dvije (dužina i širina)', 'Tri (dužina, širina i visina)', 'Četiri (uključujući i vrijeme)'],
        t: 2,
      },
      {
        p: 'Što je harmonija u kompoziciji?',
        o: ['Naglašeni kontrast između elemenata', 'Dominacija jedne boje nad svim ostalima', 'Kaotičan raspored elemenata', 'Skladnost i usklađenost svih elemenata zajedno'],
        t: 3,
      },
      {
        p: 'Koja primarna boja nedostaje u nizu: crvena, ___, plava?',
        o: ['Zelena', 'Narančasta', 'Žuta', 'Ljubičasta'],
        t: 2,
      },
      {
        p: 'Što su "organske plohe"?',
        o: ['Plohe s pravilnim geometrijskim oblicima', 'Plohe koje nastaju samo sjenčanjem', 'Plohe slobodnih, nepravilnih oblika koje nalikuju oblicima iz prirode', 'Plohe napravljene od organskih materijala'],
        t: 2,
      },
    ],
  },

  // ── LIKOVNE TEHNIKE ──────────────────────────────────────────────────────────
  {
    id: 'likovna-tehnike',
    naziv: 'Likovne tehnike',
    predmet: 'Likovna kultura',
    opis: 'Crtanje, slikanje, grafika i skulptura — alati, materijali i postupci u različitim likovnim tehnikama',
    ikona: '🖌️',
    boja: 'yellow',
    skripta: [
      {
        naslov: 'Tehnike crtanja',
        tekst: 'Crtanje je najosnovnija likovna aktivnost — bilježenje oblika linijama.\n\nGlavna sredstva crtanja:\n• Olovka (grafitna) — mekana (B, 2B, 6B) za tamne linije i sjenčanje; tvrda (H, 2H) za precizne tanke linije\n• Ugljen — mekano crtalo od spaljenog drveta; daje duboke tamne tonove, lako se briše i razmazuje\n• Tuš (tinta) — crna tekućina za pero ili kist; daje oštri kontrast, ne briše se\n• Flomaster i olovke u boji — za ilustracije i skice u boji\n• Kreda i pastel — na papiru s hrapavom teksturom; bogati pigmenti\n\nSjenčanje olovkom:\n• Šrafura — paralelne linije\n• Križna šrafura — mreža linija\n• Modelirano sjenčanje — blagim pritiskom mijenjamo intenzitet',
      },
      {
        naslov: 'Tehnike slikanja',
        tekst: 'Slikanje koristi boje pomiješane s vezivom za nanošenje na podlogu.\n\nGlavne tehnike slikanja:\n• Tempera — boja s vodenim vezivom; brzo se suši, pokrivna je, koristi se na papiru ili kartonu; idealna za školu\n• Akvarel — prozirna vodena boja; nanosi se od svjetlih prema tamnim tonovima; prozirnost je glavna odlika\n• Uljene boje (ulje) — boja vezana uljanim medijem (laneno ulje); sporo se suši, moguće miješanje; koristi se na platnu\n• Gvaš — gusta neprozirna vodena boja; poput tempere ali kremaste konsistencije\n• Pastel u boji — suhe krede bogate pigmentom; ne koristi tekuće vezivo\n• Freska — slikanje na svježoj mokroj žbuci; boja se upija u žbuku; trajan\n\nPodloge: papir, karton, platno (canvas), drvo, žbuka.',
      },
      {
        naslov: 'Grafičke tehnike',
        tekst: 'Grafika je tehnika umnožavanja — s matrice se otiskuje više primjeraka iste slike.\n\nVrste grafičkih tehnika:\n• Visoki tisak (reljefi) — boja se nanosi na ispupčeni dio matrice; drvorez (woodcut), linorez (linocut)\n  - Drvorez: urezivanje u drvenu ploču dlijetom\n  - Linorez: lakši za rad, matrica od linoleuma\n• Duboki tisak (intaglio) — boja se uvlači u udubine; bakrorez, bakropis (etching)\n• Plošni tisak — matrica nije ni ispupčena ni udubljena; litografija (kamen)\n• Sitotisak (seriografija) — boja prolazi kroz otvorene površine sita; moderni plakati\n\nOtisak (print) je konačan proizvod grafike. Svaki otisak je "original" i broji se (npr. 3/20).',
      },
      {
        naslov: 'Skulptura i prostorne tehnike',
        tekst: 'Skulptura je trodimenzionalna likovna forma — postoji u stvarnom prostoru.\n\nTehnike obrade:\n• Klesanje (oduzimanje) — materijal se uklanja: kamen, drvo, led, sapun\n• Modeliranje (dodavanje) — materijal se dodaje i oblikuje: glina, plastelinka, vosak\n• Lijevanje — tekući materijal se ulijeva u kalup: bronca, gips, beton\n• Konstruiranje/montaža — spajanje raznih materijala: metal, drvo, žica, otpadni predmeti\n\nMaterijali za modeliranje u školi:\n• Glina (keramička) — prirodni materijal; suši se i peče u keramičkoj peći\n• Plastelinka — ne suši se; za privremene radove\n• Gips — miješa se s vodom; bijelo se stvrdnjava\n\nReljef = polu-trodimenzionalna skulptura pričvršćena na podlogu (visoki i niski reljef)',
      },
      {
        naslov: 'Mješovite i suvremene tehnike',
        tekst: 'Suvremena likovna umjetnost koristi razne kombinacije tehnika i materijala.\n\n• Kolaž — lijepljenje isječaka papira, fotografija i različitih materijala na podlogu\n• Frottage — tehnika dobivanja otiska teksture trljanjem olovke/ugljena po papiru položenom na hrapavu površinu\n• Monotypija — otiskivanje s glatke površine (staklo, plastika) gdje nema mogućnosti ponavljanja\n• Digitalna grafika i ilustracija — računalni alati (Photoshop, Illustrator, Procreate)\n• Instalacija — trodimenzionalni radovi koji zauzimaju prostor galerije ili javnog prostora\n• Performans — tijelo i akcija su likovni medij\n\nU suvremenom likovnom odgoju važno je eksperimentiranje i istraživanje raznih materijala bez straha od "pogreške".',
      },
    ],
    kartice: [
      { pojam: 'Tempera', opis: 'Brzo sušeća, pokrivna vodena boja; idealna za školu; koristi se na papiru i kartonu' },
      { pojam: 'Akvarel', opis: 'Prozirna vodena boja koja se nanosi od svjetlih prema tamnim tonovima; prozirnost je osnovna odlika' },
      { pojam: 'Uljene boje', opis: 'Pigment vezan u lanenom ulju; sporo se suše; koriste se na platnu (canvas)' },
      { pojam: 'Ugljen (crtalo)', opis: 'Mekano crtalo od spaljenog drveta; daje tamne tonove, lako se briše i razmazuje' },
      { pojam: 'Drvorez', opis: 'Tehnika visokog tiska; slika se urezuje dlijetom u drvenu ploču; boja se nanosi na ispupčene dijelove' },
      { pojam: 'Linorez', opis: 'Tehnika visokog tiska na linoleumskoj matrici; lakši za obradu od drvoreza' },
      { pojam: 'Grafika (tisak)', opis: 'Tehnika umnožavanja likovnih radova; s matrice se otiskuje više jednakih primjeraka' },
      { pojam: 'Modeliranje', opis: 'Skulptorska tehnika dodavanja i oblikovanja materijala (glina, plastelinka, vosak)' },
      { pojam: 'Klesanje', opis: 'Skulptorska tehnika oduzimanja materijala (kamen, drvo); uklanjamo višak dok ne dobijemo oblik' },
      { pojam: 'Kolaž', opis: 'Tehnika lijepljenja raznih materijala (papir, fotografije) na podlogu; pionir je bio Picasso' },
      { pojam: 'Freska', opis: 'Tehnika slikanja na svježoj mokroj žbuci; boja se trajno upija u zid' },
      { pojam: 'Reljef', opis: 'Polu-trodimenzionalna skulptura pričvršćena na ravnu podlogu; može biti visoki ili niski reljef' },
    ],
    pitanja: [
      {
        p: 'Koja likovna tehnika koristi prozirne vodene boje nanesene od svjetlog prema tamnom?',
        o: ['Tempera', 'Akvarel', 'Uljene boje', 'Gvaš'],
        t: 1,
      },
      {
        p: 'Što je drvorez?',
        o: ['Tehnika modeliranja gline', 'Slikanje na drvenoj podlozi uljanim bojama', 'Tehnika visokog tiska gdje se urezuje u drvenu ploču', 'Vrsta skulpture od drveta'],
        t: 2,
      },
      {
        p: 'Koji materijal koristimo za modeliranje u školi jer se može peći u peći?',
        o: ['Plastelinka', 'Vosak', 'Keramička glina', 'Gips'],
        t: 2,
      },
      {
        p: 'Što je grafika kao likovna tehnika?',
        o: ['Isključivo digitalni crtež na računalu', 'Tehnika umnožavanja — s matrice se otiskuje više jednakih primjeraka', 'Vrsta akvarela na papiru', 'Klesanje u kamenu'],
        t: 1,
      },
      {
        p: 'Koja olovka je mekša i daje tamnije linije: 6B ili 2H?',
        o: ['2H je mekša', '6B i 2H su jednako mekane', '6B je mekša', 'Tvrđa olovka uvijek daje tamnije linije'],
        t: 2,
      },
      {
        p: 'Što je kolaž?',
        o: ['Tehnika sjenčanja olovkom', 'Tehnika lijepljenja raznih materijala na podlogu', 'Vrsta grafičkog tiska', 'Modeliranje plastelinom'],
        t: 1,
      },
      {
        p: 'Na kojoj podlozi se tradicionalno nanose uljene boje?',
        o: ['Mokra žbuka', 'Karton', 'Platno (canvas)', 'Linoleum'],
        t: 2,
      },
      {
        p: 'Što je freska?',
        o: ['Crteж ugljenom na papiru', 'Tehnika kolaža s isječcima iz novina', 'Slikanje na svježoj mokroj žbuci; boja se upija u zid', 'Vrsta akvarela na svilenom papiru'],
        t: 2,
      },
      {
        p: 'Koji crtački alat daje oštar kontrast i ne može se brisati?',
        o: ['Mekana olovka (6B)', 'Ugljen', 'Tuš (tinta)', 'Bijela kreda'],
        t: 2,
      },
      {
        p: 'Što je tehnika "klesanja" u skulpturi?',
        o: ['Dodavanje materijala sloj po sloj', 'Uklanjanje (oduzimanje) materijala dok ne ostane željeni oblik', 'Ulijevanje u kalup', 'Spajanje gotovih predmeta'],
        t: 1,
      },
      {
        p: 'Što je linorez?',
        o: ['Tehnika visokog tiska na linoleumskoj matrici', 'Tehnika dubokog tiska na bakrenoj ploči', 'Vrsta slikanja voštanim bojama', 'Modeliranje u linoleumu'],
        t: 0,
      },
      {
        p: 'Koja skulptorska tehnika koristi kalup?',
        o: ['Modeliranje', 'Klesanje', 'Lijevanje', 'Konstruiranje'],
        t: 2,
      },
      {
        p: 'Što je "visoki tisak" u grafici?',
        o: ['Tisak s visokih zgrada', 'Tehnika gdje se boja nanosi na udubine matrice', 'Tehnika gdje se boja nanosi na ispupčene dijelove matrice', 'Tehnika tiska bez matrice'],
        t: 2,
      },
      {
        p: 'Koji materijal koristi sjenčanje tehnikom "šrafure"?',
        o: ['Akvarel', 'Olovka ili tuš', 'Glina', 'Uljene boje'],
        t: 1,
      },
      {
        p: 'Što je "monotypija"?',
        o: ['Otiskivanje s glatke površine gdje se ne može ponoviti isti otisak', 'Tehnika s mnogo istih otisaka', 'Vrsta kolaža s jednom bojom', 'Sculptura od jednog materijala'],
        t: 0,
      },
      {
        p: 'Što je "reljef" u skulpturi?',
        o: ['Slobodna stojeća figura', 'Polu-trodimenzionalna skulptura pričvršćena na ravnu podlogu', 'Tehnika modeliranja gline', 'Grafička tehnika tiska'],
        t: 1,
      },
      {
        p: 'Koja tehnika slikanja je najsporije sušeća i koristi se na platnu?',
        o: ['Akvarel', 'Tempera', 'Uljene boje', 'Gvaš'],
        t: 2,
      },
      {
        p: 'Što je frottage tehnika?',
        o: ['Slikanje prstima', 'Dobivanje otiska teksture trljanjem olovke po papiru na hrapavoj površini', 'Prskanje boje na papir', 'Crtanje ugljenom na žbuci'],
        t: 1,
      },
      {
        p: 'Koja tehnika crtanja koristi mrežu prekriženih linija za sjenčanje?',
        o: ['Točkanje (stippling)', 'Modelirano sjenčanje', 'Šrafura', 'Križna šrafura'],
        t: 3,
      },
      {
        p: 'Što je tempera i zašto je pogodna za školu?',
        o: ['Prozirna boja koja se nanosi razrijeđena; rijetko dostupna', 'Pokrivna vodena boja koja se brzo suši; pristupačna i jednostavna za rad', 'Boja vezana uljem; potrebna posebna sredstva za čišćenje', 'Suha kredastica bez vode; skuplja od ostalih'],
        t: 1,
      },
      {
        p: 'Koji je primarni alat za tehniku "bakroreza"?',
        o: ['Dlijeto i drvena ploča', 'Pero i tinta na papiru', 'Igla ili burin i bakrena ploča', 'Sito i gumeni valjak'],
        t: 2,
      },
      {
        p: 'Što je sitotisak (seriografija)?',
        o: ['Tehnika gdje boja prolazi kroz otvorene površine finog sita na podlogu', 'Tehnika visokog tiska s drvenom pločom', 'Duboki tisak na aluminiju', 'Tehnika kolažiranja s mrežicom'],
        t: 0,
      },
      {
        p: 'Koji materijal se ne suši i koristi za privremene radove?',
        o: ['Keramička glina', 'Gips', 'Brončana masa', 'Plastelinka'],
        t: 3,
      },
      {
        p: 'Što znači broj "3/20" na grafičkom otisku?',
        o: ['Slika je nastala u 20 dana', 'Treći primjerak od ukupno 20 otisnutih', 'Dimenzije rada su 3 × 20 cm', 'Cijena rada je 20 kuna'],
        t: 1,
      },
      {
        p: 'Koja slikarska tehnika se naziva "akvarelom" i po čemu je posebna?',
        o: ['Gusta neprozirna boja nanesena na karton', 'Boja pomiješana s uljem i lakom', 'Prozirna vodena boja — prozirnost otkriva bijelu podlogu papira', 'Boja pomiješana s pijeskom za teksturu'],
        t: 2,
      },
    ],
  },

  // ── LIKOVNA POVIJEST ─────────────────────────────────────────────────────────
  {
    id: 'likovna-povijest',
    naziv: 'Poznati umjetnici i pravci',
    predmet: 'Likovna kultura',
    opis: 'Najvažniji likovni pravci i umjetnici — renesansa, impresionizam, kubizam, hrvatska naivna umjetnost i Meštrović',
    ikona: '🖼️',
    boja: 'purple',
    skripta: [
      {
        naslov: 'Renesansa i Leonardo da Vinci',
        tekst: 'Renesansa (talij. rinascimento = preporod) je pokret koji se razvio u Italiji između 14. i 16. stoljeća. Označio je povratak antičkim idealima i interes za čovjeka i prirodu.\n\nGlavne odlike renesanse:\n• Realizam u prikazu ljudskog tijela\n• Linearna perspektiva i prostor\n• Sjaj i harmonija kompozicije\n\nLeonardo da Vinci (1452.–1519.):\n• Univerzalni genij: slikar, skulptor, arhitekt, inžinjer, znanstvenik\n• Najpoznatija djela: Mona Lisa (La Gioconda), Posljednja večera (freska)\n• Izumio je sfumato tehniku — mekani prijelazi bez oštrih rubova\n• Studirao anatomiju crteži tijela i prirode\n\nOstali renesansni majstori: Michelangelo (Sikstinska kapela), Raphael (Madonne), Botticelli (Proljeće).',
      },
      {
        naslov: 'Impresionizam — Monet i Van Gogh',
        tekst: 'Impresionizam je nastao u Francuskoj oko 1870. godine. Impresionisti su slikali brzo, kratkim potezima četke, hvatajući trenutni dojam svjetla i atmosfere.\n\nGlavne odlike impresionizma:\n• Kratki slobodni potezi četke\n• Slikanje na plein-airu (na otvorenom, u prirodi)\n• Hvatanje svjetlosti u određenom trenutku\n• Živahne boje bez crnih sjena\n\nClaude Monet (1840.–1926.):\n• Француски slikar, osnivač impresionizma\n• Serije: Vodene ljiljane, Katedrale u Rouenu, Plaštice sijena\n• Naziv "impresionizam" dolazi od slike "Impresija, izlazak sunca" (1872.)\n\nVincent van Gogh (1853.–1890.):\n• Postimpresionist; karakteristični debeli uzburkani potezi\n• Najpoznatija djela: Zvjezdana noć, Suncokret, Autoportreti\n• Koristio čiste, intenzivne boje izravno iz tube',
      },
      {
        naslov: 'Kubizam — Pablo Picasso',
        tekst: 'Kubizam je revolucionarni pravac nastao u Parizu oko 1907.–1914. godine. Razložio je oblike na geometrijske fragmente prikazujući predmet iz više kutova istovremeno.\n\nGlavne odlike kubizma:\n• Razlaganje oblika na geometrijske fragmente\n• Prikaz predmeta iz više kutova istovremeno\n• Neutralne boje (smeđa, siva, okera)\n• Dvoplošnost — slika izgleda "razbijeno"\n\nPablo Picasso (1881.–1973.):\n• Španjolski slikar, jedan od najutjecajnijih u 20. st.\n• Suosnivač kubizma zajedno s Georgesom Braqueuem\n• Najpoznatija djela: Guernica, Gospođice s Avignona (Les Demoiselles d\'Avignon), Weeping Woman\n• Prošao kroz mnoga stilska razdoblja: plavo, ružičasto, kubizam, neoklasicizam\n\nGuernica (1937.) — monumentalna slika o bombardiranju baskijskog grada; protest protiv rata i nasilja.',
      },
      {
        naslov: 'Gustav Klimt i secesija',
        tekst: 'Secesija (Art Nouveau) je pokret s kraja 19. i početka 20. st. koji je odbacio akademsku tradiciju i uveo dekorativnost, organičke oblike i bogatstvo ornamenta.\n\nGustav Klimt (1862.–1918.):\n• Austrijski slikar, osnivač Bečke secesije (1897.)\n• Karakteristični zlatni listići (pravim zlatom) na slikama\n• Najbogatija dekoracija i ornamentika, spoj figuralnog i apstraktnog\n• Najpoznatija djela: Ljubav (The Kiss / Poljubac), Judita, Portret Adele Bloch-Bauer\n\nOdlike Klimtovog stila:\n• Bogati zlatni ukrasi i mozaički uzorci\n• Spoj realnog portreta i apstraktne dekoracije\n• Ženski likovi su središnji motiv\n\nZlatna faza — naziv za Klimtovo najprepoznatljivije stvaralaštvo (1899.–1910.).',
      },
      {
        naslov: 'Hrvatska likovna baština — Naivci i Meštrović',
        tekst: 'Hrvatska naivna umjetnost — Hlebinska škola\n\nNaivna umjetnost je spontano, neprofesionalno slikarstvo seljačkih i samoučenih umjetnika.\n\nKrsto Hegedušić (1901.–1975.):\n• Akdemski slikar koji je otkrio i poticao seljačke slikare u Hlebinama\n• Osnivač Grupe Zemlja i Hlebinske škole\n\nIvan Generalić (1914.–1992.):\n• Najpoznatiji hrvatski naivni slikar\n• Slikao na staklu (tehnika: slika se nacrta iza stakla)\n• Teme: seoske scene, zima, folklor, životinje\n• Najpoznatija djela: Zimska idila, Svadbeni kočijaš\n\nIvan Meštrović (1883.–1962.):\n• Najpoznatiji hrvatski kipar\n• Akademski obrazovan u Beču i Parizu\n• Teme: mitologija, biblija, hrvatska povijest\n• Najvažnija djela: Zdenac života (Zagreb), Grgur Ninski (Split), Indijanac na konju (Chicago), Crkva Presvetog Otkupitelja na Otavicama',
      },
    ],
    kartice: [
      { pojam: 'Renesansa', opis: 'Likovni i kulturni pokret 14.–16. st. u Italiji; povratak antičkim idealima, realizam i perspektiva' },
      { pojam: 'Leonardo da Vinci', opis: 'Renesansni univerzalni genij; autor Mone Lise i Posljednje večere; izumio sfumato tehniku' },
      { pojam: 'Sfumato', opis: 'Leonardova tehnika mekih prijelaza boje bez oštrih rubova; daje dojam dubine i atmosfere' },
      { pojam: 'Impresionizam', opis: 'Francuski pokret ~1870.; kratki potezi četke, slikanje na otvorenom, hvatanje trenutnog svjetla' },
      { pojam: 'Claude Monet', opis: 'Osnivač impresionizma; autor serija Vodenih ljiljana; naziv pravca dolazi od njegove slike' },
      { pojam: 'Vincent van Gogh', opis: 'Postimpresionist; Zvjezdana noć i Suncokret; uzburkani debeli potezi i intenzivne boje' },
      { pojam: 'Kubizam', opis: 'Pravac oko 1907.–1914.; razlaganje oblika na geometrijske fragmente; prikaz iz više kutova' },
      { pojam: 'Pablo Picasso', opis: 'Suosnivač kubizma; autor Guernice i Gospođica s Avignona; jedan od najutjecajnijih u 20. st.' },
      { pojam: 'Gustav Klimt', opis: 'Austrijski osnivač Bečke secesije; zlatni ukrasi i ornamentika; autor Poljupca' },
      { pojam: 'Ivan Generalić', opis: 'Najpoznatiji hrvatski naivni slikar Hlebinske škole; slikao na staklu; teme seoskog života' },
      { pojam: 'Ivan Meštrović', opis: 'Najpoznatiji hrvatski kipar; Grgur Ninski u Splitu, Zdenac života u Zagrebu' },
      { pojam: 'Hlebinska škola', opis: 'Hrvatska naivna slikarska škola iz Hlebina; osnivač Krsto Hegedušić; najpoznatiji Ivan Generalić' },
    ],
    pitanja: [
      {
        p: 'Kojoj likovnoj epohi pripada Leonardo da Vinci?',
        o: ['Barok', 'Renesansa', 'Impresionizam', 'Kubizam'],
        t: 1,
      },
      {
        p: 'Koje je najpoznatije djelo Leonarda da Vincija?',
        o: ['Zvjezdana noć', 'Guernica', 'Mona Lisa (La Gioconda)', 'Poljubac'],
        t: 2,
      },
      {
        p: 'Što je sfumato tehnika?',
        o: ['Tehnika mozaičnog zlatnog ukrašavanja', 'Meki prijelazi boje bez oštrih rubova', 'Slikanje na svježoj žbuci', 'Razlaganje oblika na kocke'],
        t: 1,
      },
      {
        p: 'Koji je slikarski pravac karakteriziran kratkim potezima četke i slikanjem na otvorenom (plein-air)?',
        o: ['Kubizam', 'Renesansa', 'Impresionizam', 'Secesija'],
        t: 2,
      },
      {
        p: 'Tko je osnivač impresionizma i po čijoj je slici pravac dobio ime?',
        o: ['Vincent van Gogh — po Zvjezdanoj noći', 'Pablo Picasso — po Guernici', 'Claude Monet — po slici "Impresija, izlazak sunca"', 'Gustav Klimt — po Poljupcu'],
        t: 2,
      },
      {
        p: 'Po čemu je prepoznatljivo slikarstvo Vincenta van Gogha?',
        o: ['Zlatni listići i ornamentika', 'Geometrijski fragmenti iz više kutova', 'Mona Lisa izraz lica', 'Debeli uzburkani potezi i intenzivne čiste boje'],
        t: 3,
      },
      {
        p: 'Što je glavna odlika kubizma?',
        o: ['Zlatni ukrasi i dekorativnost', 'Razlaganje oblika na geometrijske fragmente i prikaz iz više kutova', 'Meki prijelazi boje bez rubova', 'Slikanje prirode na otvorenom'],
        t: 1,
      },
      {
        p: 'Tko je autor slike Guernica i što ona prikazuje?',
        o: ['Monet; prikazuje vodene ljiljane', 'Van Gogh; prikazuje zvjezdano nebo', 'Picasso; prikazuje stravičnost bombardiranja baskijskog grada', 'Klimt; prikazuje ženski portret'],
        t: 2,
      },
      {
        p: 'Što je karakteristično za Klimtov slikarski stil?',
        o: ['Tamne hladne boje bez ukrasa', 'Geometrijska apstrakcija bez likova', 'Bogati zlatni ukrasi i ornamentika na figurama', 'Kratki impresionistički potezi četke'],
        t: 2,
      },
      {
        p: 'Što je Bečka secesija i tko ju je osnovao?',
        o: ['Češka filmska škola; osnovao Kafka', 'Austrijska likovna skupina koja je odbila akademizam; osnovao Klimt 1897.', 'Bečki kubistički krug; osnovao Picasso', 'Austrijska naivna škola; osnovao Generalić'],
        t: 1,
      },
      {
        p: 'Koji je najpoznatiji hrvatski naivni slikar?',
        o: ['Ivan Meštrović', 'Krsto Hegedušić', 'Ivan Generalić', 'Vlaho Bukovac'],
        t: 2,
      },
      {
        p: 'Koje je posebno naivnu tehniku Ivan Generalić koristio?',
        o: ['Freska na žbuci', 'Ulje na platnu', 'Mozaik od staklenih kockica', 'Slikanje na staklu (obrnuto)'],
        t: 3,
      },
      {
        p: 'Tko je Ivan Meštrović?',
        o: ['Hrvatski naivni slikar Hlebinske škole', 'Osnivač kubizma u Zagrebu', 'Najpoznatiji hrvatski kipar', 'Impresionistički slikar iz Dalmacije'],
        t: 2,
      },
      {
        p: 'Gdje se nalazi skulptura Grgur Ninski Ivana Meštrovića?',
        o: ['Zagreb (Zrinjevac)', 'Dubrovnik (Stradun)', 'Split (Peristil)', 'Rijeka (Korzo)'],
        t: 2,
      },
      {
        p: 'Tko je Krsto Hegedušić i koja je njegova uloga u hrvatskoj likovnoj umjetnosti?',
        o: ['Akademski kipar iz Splita; pokrenuo modernu arhitekturu', 'Akademski slikar koji je otkrio i vodio naivne seljačke slikare u Hlebinama', 'Najpoznatiji impresionist iz Dubrovnika', 'Utemeljitelj Bečke secesije u Hrvatskoj'],
        t: 1,
      },
      {
        p: 'Koja slika Vincenta van Gogha prikazuje spiralno nebo s vihorom oblaka?',
        o: ['Suncokret', 'Autoportret sa zabojom uha', 'Krumpiri', 'Zvjezdana noć'],
        t: 3,
      },
      {
        p: 'U kojoj zemlji je nastao impresionizam?',
        o: ['Italija', 'Španjolska', 'Austrija', 'Francuska'],
        t: 3,
      },
      {
        p: 'Što je Hlebinska škola?',
        o: ['Glazbena akademija u Hlebinama', 'Skupina akademskih slikara iz Varaždina', 'Hrvatski naivni likovni pokret seljačkih slikara iz Hlebina', 'Moderna skulptorska škola iz Koprivnice'],
        t: 2,
      },
      {
        p: 'Koji renesansni umjetnik je naslikao strop Sikstinske kapele u Vatikanu?',
        o: ['Leonardo da Vinci', 'Rafael (Raphael)', 'Michelangelo', 'Botticelli'],
        t: 2,
      },
      {
        p: 'Što je "plein-air" slikanje?',
        o: ['Slikanje u zatvorenoj sobi pod posebnim rasvjetljenjem', 'Slikanje u prirodi, na otvorenom zraku', 'Tehnika brzog sušenja boje', 'Slikanje na mokroj površini'],
        t: 1,
      },
      {
        p: 'Koje je najpoznatije Klimtovo djelo?',
        o: ['Guernica', 'Zvjezdana noć', 'Mona Lisa', 'Poljubac (The Kiss)'],
        t: 3,
      },
      {
        p: 'Koji slikarski pravac je Pablo Picasso suosnovao?',
        o: ['Impresionizam', 'Kubizam', 'Renesansu', 'Romantizam'],
        t: 1,
      },
      {
        p: 'Koji je legendarni Meštrovićev rad u Chicagu?',
        o: ['Zdenac života', 'Grgur Ninski', 'Indijanac na konju', 'Pietà'],
        t: 2,
      },
      {
        p: 'Čime su se razlikovali postimpresionistu Van Gogh od klasičnih impresionista?',
        o: ['Slikao je samo portrete', 'Koristio je isključivo akvarelne boje', 'Koristio je deblje nanose boje i snažniji osobni izraz emocija', 'Slikao je geometrijske oblike'],
        t: 2,
      },
      {
        p: 'Što je "naivna umjetnost"?',
        o: ['Akademski istrenirani stil 19. stoljeća', 'Spontano, neprofesionalno slikarstvo samoučenih ili seljačkih umjetnika', 'Vrsta apstraktne moderne umjetnosti', 'Stilska pojava isključivo u Parizu'],
        t: 1,
      },
    ],
  },
];
