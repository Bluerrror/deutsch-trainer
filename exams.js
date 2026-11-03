/* Deutsch Trainer — four skills in Goethe exam formats.
   LESEN · HÖREN · SCHREIBEN · SPRECHEN, organised by level the way the
   Goethe-Zertifikat modules are (A1 Start Deutsch 1 … C2 Großes Deutsches
   Sprachdiplom). Task shapes mirror the official parts; all texts are
   original material written for this app.
   lv: 1=A0 2=A1 3=A2 4=B1 5=B2 6=C1 7=C2                               */
window.EXAMS = (function(){

/* ============================================================
   LESEN — reading
   kinds: 'tf'      → statement true/false against a short text
          'mc'      → multiple choice on a text
          'matchads'→ match people to small ads (Goethe A2/B1 Teil 2)
   ============================================================ */
const LESEN = [

/* ---------- A1 ---------- */
{lv:2,part:'Lesen Teil 1',kind:'tf',title:'SMS von Mehmet',
 text:'Hallo Lisa,\nich komme heute später. Mein Bus hat Verspätung. Ich bin um 19 Uhr da. Kannst du schon Brot kaufen?\nLiebe Grüße\nMehmet',
 items:[{s:'Mehmet kommt früher als geplant.',a:false,ex:'Er schreibt „ich komme heute später“.'},
        {s:'Lisa soll Brot kaufen.',a:true,ex:'„Kannst du schon Brot kaufen?“'},
        {s:'Mehmet kommt um 19 Uhr.',a:true,ex:'„Ich bin um 19 Uhr da.“'}]},

{lv:2,part:'Lesen Teil 2',kind:'mc',title:'Am Schwimmbad',
 text:'STADTBAD NORD\nMontag – Freitag: 7:00 – 21:00\nSamstag: 8:00 – 18:00\nSonntag geschlossen\nKinder bis 6 Jahre frei.\nEintritt Erwachsene: 5,50 €',
 qs:[{q:'Sie wollen am Sonntag schwimmen. Was machen Sie?',a:'Sie können nicht — am Sonntag ist geschlossen.',
      o:['Sie kommen um 8 Uhr.','Sie zahlen 5,50 €.','Sie kommen bis 18 Uhr.'],ex:'„Sonntag geschlossen“.'},
     {q:'Was kostet der Eintritt für ein Kind von 5 Jahren?',a:'nichts',o:['5,50 €','2,75 €','Das steht nicht da.'],
      ex:'„Kinder bis 6 Jahre frei.“'}]},

{lv:2,part:'Lesen Teil 3',kind:'tf',title:'Notiz an der Tür',
 text:'Liebe Nachbarn,\nam Mittwoch kommt der Handwerker. Von 9 bis 12 Uhr gibt es kein Wasser.\nBitte stellen Sie am Dienstag Wasser bereit.\nDanke!\nHausverwaltung',
 items:[{s:'Am Mittwoch gibt es morgens kein Wasser.',a:true,ex:'„Von 9 bis 12 Uhr gibt es kein Wasser.“'},
        {s:'Die Nachbarn sollen am Mittwoch Wasser kaufen.',a:false,ex:'Sie sollen es am <b>Dienstag</b> bereitstellen.'}]},

/* ---------- A2 ---------- */
{lv:3,part:'Lesen Teil 1',kind:'mc',title:'E-Mail aus dem Urlaub',
 text:'Hallo Ayşe,\nwir sind seit Montag auf Rügen. Das Wetter ist leider nicht so gut, es regnet jeden Tag ein bisschen. Trotzdem gehen wir viel spazieren. Das Hotel ist sehr schön und das Frühstück ist super.\nNächstes Jahr fahren wir wieder hin — dann aber im August.\nViele Grüße\nJana',
 qs:[{q:'Wie findet Jana den Urlaub?',a:'Insgesamt gut, nur das Wetter nicht.',
      o:['Schlecht, sie will nach Hause.','Perfekt, auch das Wetter.','Sie schreibt nichts darüber.'],
      ex:'„leider nicht so gut … Trotzdem …“ plus „sehr schön“ und „super“.'},
     {q:'Wann will Jana wiederkommen?',a:'im August nächsten Jahres',o:['nie wieder','im Winter','am Montag'],
      ex:'„Nächstes Jahr … dann aber im August.“'}]},

{lv:3,part:'Lesen Teil 2',kind:'matchads',title:'Kleinanzeigen: Wohnen',
 intro:'Vier Personen suchen etwas. Welche Anzeige passt?',
 ads:[{k:'A',t:'1-Zimmer-Wohnung, 30 m², möbliert, zentral, 480 € warm, sofort frei.'},
      {k:'B',t:'WG-Zimmer bei 3 Studenten, 18 m², nur an Nichtraucher, 350 €.'},
      {k:'C',t:'Haus mit Garten, 4 Zimmer, ruhige Lage am Stadtrand, 1.200 €.'},
      {k:'D',t:'Zimmer für 2 Monate zur Untermiete, komplett eingerichtet, 300 €.'}],
 people:[{p:'Tom macht ein Praktikum von Mai bis Juni und braucht nur kurz ein Zimmer.',a:'D',ex:'„für 2 Monate zur Untermiete“.'},
         {p:'Familie Cheng hat zwei Kinder und möchte, dass sie draußen spielen können.',a:'C',ex:'„Haus mit Garten“.'},
         {p:'Nina studiert und möchte nicht allein wohnen. Sie raucht nicht.',a:'B',ex:'„WG-Zimmer … nur an Nichtraucher“.'},
         {p:'Herr Baier fängt nächste Woche einen Job in der Innenstadt an und hat keine Möbel.',a:'A',ex:'„möbliert, zentral, sofort frei“.'}]},

{lv:3,part:'Lesen Teil 3',kind:'tf',title:'Aus der Hausordnung',
 text:'HAUSORDNUNG\n1. Von 22:00 bis 7:00 Uhr ist Nachtruhe.\n2. Das Treppenhaus ist kein Abstellplatz. Fahrräder gehören in den Keller.\n3. Müll wird getrennt: Papier (blau), Verpackung (gelb), Restmüll (schwarz).\n4. Grillen auf dem Balkon ist nicht erlaubt.',
 items:[{s:'Man darf sein Fahrrad im Treppenhaus abstellen.',a:false,ex:'„Fahrräder gehören in den Keller.“'},
        {s:'Nach 22 Uhr muss es leise sein.',a:true,ex:'„Von 22:00 bis 7:00 Uhr ist Nachtruhe.“'},
        {s:'Papier kommt in die gelbe Tonne.',a:false,ex:'Papier → blau, Verpackung → gelb.'},
        {s:'Auf dem Balkon darf nicht gegrillt werden.',a:true,ex:'„Grillen auf dem Balkon ist nicht erlaubt.“'}]},

/* ---------- B1 ---------- */
{lv:4,part:'Lesen Teil 1',kind:'mc',title:'Forumsbeitrag: Handy in der Schule',
 text:'Ich bin Lehrerin an einer Gesamtschule und wir haben vor einem Jahr Handys im Unterricht verboten. Das Ergebnis hat mich überrascht: Die Schüler sind wacher, und in den Pausen reden sie wieder miteinander statt auf Displays zu schauen. Natürlich gibt es Nachteile — manchmal bräuchten wir das Handy für Recherchen. Dafür haben wir jetzt Tablets, die in der Schule bleiben. Ein komplettes Verbot halte ich trotzdem für falsch; Jugendliche müssen lernen, mit Medien umzugehen.',
 qs:[{q:'Wie bewertet die Lehrerin das Handyverbot?',a:'Überwiegend positiv, aber nicht als Komplettlösung.',
      o:['Sie lehnt es völlig ab.','Sie findet es perfekt und will es ausweiten.','Sie äußert sich nicht dazu.'],
      ex:'Positiv überrascht, nennt aber Nachteile und lehnt ein komplettes Verbot ab.'},
     {q:'Was hat sich in den Pausen verändert?',a:'Die Schüler sprechen wieder miteinander.',
      o:['Die Pausen sind kürzer.','Es gibt mehr Streit.','Nichts hat sich verändert.'],
      ex:'„in den Pausen reden sie wieder miteinander“.'},
     {q:'Welche Lösung nutzt die Schule für Recherchen?',a:'schuleigene Tablets',o:['private Laptops','gar keine','die Handys der Lehrer'],
      ex:'„Dafür haben wir jetzt Tablets, die in der Schule bleiben.“'}]},

{lv:4,part:'Lesen Teil 2',kind:'matchads',title:'Kursangebote der Volkshochschule',
 intro:'Wer passt zu welchem Kurs?',
 ads:[{k:'A',t:'Deutsch für den Beruf — Bewerbung, Telefonieren, E-Mails. Dienstags 18–20 Uhr.'},
      {k:'B',t:'Nähen für Anfänger — eigene Maschine nicht nötig. Samstags 10–13 Uhr.'},
      {k:'C',t:'Rückenfit 50+ — sanfte Übungen, kleine Gruppe. Montags 9 Uhr.'},
      {k:'D',t:'Fotografie am Wochenende — Praxis draußen, eigene Kamera erforderlich.'},
      {k:'E',t:'Konversationskurs Spanisch B1 — nur Sprechen, kein Grammatikbuch.'}],
 people:[{p:'Herr Osei arbeitet tagsüber und will lernen, bessere Bewerbungen zu schreiben.',a:'A',ex:'Abends und berufsbezogen.'},
         {p:'Frau Lange ist 62 und hat oft Rückenschmerzen.',a:'C',ex:'„Rückenfit 50+ — sanfte Übungen“.'},
         {p:'Jonas hat eine Spiegelreflexkamera und will endlich richtig damit umgehen können.',a:'D',ex:'„eigene Kamera erforderlich“.'},
         {p:'Marta kann schon Spanisch lesen, traut sich aber nicht zu sprechen.',a:'E',ex:'„nur Sprechen“.'}]},

{lv:4,part:'Lesen Teil 3',kind:'tf',title:'Informationen zum Praktikum',
 text:'PRAKTIKUM IM STADTARCHIV\nDauer: mindestens 6 Wochen, Beginn jederzeit möglich.\nVoraussetzung: laufendes Studium, gute Deutschkenntnisse (mind. B2).\nVergütung: 450 € pro Monat.\nBewerbung: Lebenslauf und kurzes Motivationsschreiben per E-Mail. Zeugnisse bitte erst auf Nachfrage.\nAnsprechpartnerin: Frau Dr. Henkel.',
 items:[{s:'Man kann das Praktikum für vier Wochen machen.',a:false,ex:'„mindestens 6 Wochen“.'},
        {s:'Das Praktikum ist unbezahlt.',a:false,ex:'„Vergütung: 450 € pro Monat“.'},
        {s:'Zeugnisse muss man sofort mitschicken.',a:false,ex:'„erst auf Nachfrage“.'},
        {s:'Ein Motivationsschreiben ist Teil der Bewerbung.',a:true,ex:'„Lebenslauf und kurzes Motivationsschreiben“.'}]},

/* ---------- B2 ---------- */
{lv:5,part:'Lesen Teil 1',kind:'mc',title:'Kommentar: Vier-Tage-Woche',
 text:'Die Debatte um die Vier-Tage-Woche wird gern als Streit zwischen Faulheit und Fleiß geführt. Das verfehlt den Kern. Entscheidend ist nicht, wie viele Stunden jemand am Platz sitzt, sondern was dabei herauskommt. Pilotprojekte in Island und Großbritannien zeigen: Wo Abläufe zuvor verschlankt wurden, blieb die Produktivität stabil, teilweise stieg sie sogar. Wo man lediglich einen Tag strich, ohne etwas zu verändern, geriet der Betrieb unter Druck. Die Vier-Tage-Woche ist also kein Geschenk, sondern eine Organisationsaufgabe — und genau daran scheitern viele Unternehmen.',
 qs:[{q:'Welche These vertritt der Autor?',a:'Die Vier-Tage-Woche funktioniert nur mit vorher reformierten Abläufen.',
      o:['Die Vier-Tage-Woche senkt immer die Produktivität.','Wer weniger arbeitet, ist fauler.','Arbeitszeit spielt überhaupt keine Rolle.'],
      ex:'„Wo Abläufe zuvor verschlankt wurden … Wo man lediglich einen Tag strich … geriet der Betrieb unter Druck.“'},
     {q:'Wie bewertet der Autor die übliche Debatte?',a:'als am Kern vorbeigehend',o:['als sachlich und hilfreich','als zu wissenschaftlich','als abgeschlossen'],
      ex:'„Das verfehlt den Kern.“'},
     {q:'„kein Geschenk, sondern eine Organisationsaufgabe“ — was heißt das?',
      a:'Sie erfordert Arbeit an den Strukturen, sie wird nicht einfach gewährt.',
      o:['Sie kostet die Firmen nichts.','Sie ist gesetzlich vorgeschrieben.','Sie gilt nur für Geschenke.'],
      ex:'„sondern“ korrigiert: nicht Wohltat, sondern Aufgabe.'}]},

{lv:5,part:'Lesen Teil 2',kind:'tf',title:'Aus einem Arbeitsvertrag',
 text:'§ 4 Arbeitszeit\nDie regelmäßige wöchentliche Arbeitszeit beträgt 38 Stunden. Mehrarbeit ist bis zu 10 Stunden monatlich mit dem Grundgehalt abgegolten; darüber hinausgehende Stunden werden auf einem Arbeitszeitkonto erfasst und sind innerhalb von sechs Monaten abzubauen.\n§ 5 Urlaub\nDer Urlaubsanspruch beträgt 30 Arbeitstage im Kalenderjahr. Nicht genommener Urlaub verfällt am 31. März des Folgejahres.',
 items:[{s:'Überstunden werden grundsätzlich extra bezahlt.',a:false,ex:'Bis 10 Stunden monatlich sind sie „mit dem Grundgehalt abgegolten“.'},
        {s:'Mehr als 10 Überstunden im Monat landen auf einem Zeitkonto.',a:true,ex:'„darüber hinausgehende Stunden werden auf einem Arbeitszeitkonto erfasst“.'},
        {s:'Resturlaub kann unbegrenzt angespart werden.',a:false,ex:'Er „verfällt am 31. März des Folgejahres“.'},
        {s:'Es gibt 30 Urlaubstage pro Jahr.',a:true,ex:'„30 Arbeitstage im Kalenderjahr“.'}]},

/* ---------- C1 ---------- */
{lv:6,part:'Lesen Teil 1',kind:'mc',title:'Wissenschaftstext: Sprache und Denken',
 text:'Die Annahme, die Muttersprache bestimme das Denken, hat eine lange und wechselhafte Karriere. In ihrer starken Fassung — Sprache als Gefängnis des Geistes — ist sie empirisch kaum zu halten: Menschen unterscheiden Farben, die ihre Sprache nicht benennt, und erwerben Begriffe, für die ihnen zunächst das Wort fehlt. Haltbar ist eine schwächere Lesart. Sprachliche Kategorien lenken Aufmerksamkeit; wer eine Sprache spricht, die Richtungen absolut angibt — nördlich, südlich statt links, rechts —, orientiert sich im Raum messbar anders. Sprache schafft also keine Mauern, aber sie legt Trampelpfade.',
 qs:[{q:'Welche Position nimmt der Text ein?',a:'Die starke Version ist unhaltbar, eine schwache Version ist belegbar.',
      o:['Sprache determiniert das Denken vollständig.','Sprache hat keinen Einfluss auf das Denken.','Die Frage ist wissenschaftlich nicht untersuchbar.'],
      ex:'„empirisch kaum zu halten … Haltbar ist eine schwächere Lesart.“'},
     {q:'Was belegt das Beispiel mit den Himmelsrichtungen?',a:'Sprachliche Kategorien lenken die Aufmerksamkeit.',
      o:['Manche Menschen können sich nicht orientieren.','Farbwörter fehlen in vielen Sprachen.','Alle Sprachen sind gleich aufgebaut.'],
      ex:'„orientiert sich im Raum messbar anders“ illustriert die Lenkung der Aufmerksamkeit.'},
     {q:'Wie ist „keine Mauern, aber Trampelpfade“ zu verstehen?',a:'Sprache verbietet nichts, erleichtert aber bestimmte Denkwege.',
      o:['Sprache blockiert das Denken.','Sprache ist völlig beliebig.','Es geht um Stadtplanung.'],
      ex:'Mauer = Verbot, Trampelpfad = eingeübte, bequeme Route.'}]},

/* ---------- C2 ---------- */
{lv:7,part:'Lesen Teil 1',kind:'mc',title:'Essay: Über das Zuhören',
 text:'Dass wir schlechte Zuhörer sind, ist ein Gemeinplatz; dass wir es aus Höflichkeit sind, wird selten gesagt. Wer zuhört, wie es die Ratgeberliteratur empfiehlt — nickend, spiegelnd, bestätigend —, betreibt häufig eine Form der Vorwegnahme: Er hat das Gesagte bereits eingeordnet, bevor es zu Ende gesprochen ist, und quittiert nur noch. Echtes Zuhören wäre demgegenüber eine Zumutung, denn es setzte die Bereitschaft voraus, die eigene Deutung zu suspendieren. Genau dies aber kostet, was im Gespräch am knappsten ist: nicht Zeit, sondern Souveränität.',
 qs:[{q:'Was kritisiert der Autor an der empfohlenen Zuhörtechnik?',
      a:'Sie quittiert nur, weil das Gesagte schon vorab eingeordnet wurde.',
      o:['Sie dauert zu lange.','Sie ist unhöflich.','Sie wird kaum angewendet.'],
      ex:'„eine Form der Vorwegnahme … quittiert nur noch“.'},
     {q:'Was ist nach dem Text die eigentliche Kosten des Zuhörens?',a:'der Verzicht auf die eigene Deutungshoheit',
      o:['viel Zeit','Geld','technische Hilfsmittel'],
      ex:'„nicht Zeit, sondern Souveränität“ — die eigene Deutung suspendieren.'},
     {q:'Welchen Ton hat der Text?',a:'essayistisch-zugespitzt, mit bewusster Paradoxie',
      o:['sachlich-neutral berichtend','werbend','belehrend-einfach'],
      ex:'„Zumutung“, „Gemeinplatz“, die Pointe am Ende — typische Essayistik.'}]}
];

/* ============================================================
   HÖREN — listening (all audio is produced by the device voice)
   kinds: 'tf'  → true/false after hearing a short text
          'mc'  → multiple choice after hearing
   ============================================================ */
const HOEREN = [
/* ---------- A1 ---------- */
{lv:2,part:'Hören Teil 1',kind:'mc',title:'Ansage am Bahnsteig',
 say:'Achtung auf Gleis drei. Der Regionalexpress nach Leipzig, Abfahrt zwölf Uhr vierzig, fällt heute aus. Bitte benutzen Sie den Zug um dreizehn Uhr zehn von Gleis fünf.',
 qs:[{q:'Was ist das Problem?',a:'Der Zug um 12:40 fällt aus.',o:['Der Zug ist zu voll.','Das Gleis ist gesperrt.','Der Zug kommt früher.'],
      ex:'„fällt heute aus“ = is cancelled.'},
     {q:'Von welchem Gleis fährt der Ersatzzug?',a:'Gleis 5',o:['Gleis 3','Gleis 13','Gleis 10'],ex:'„von Gleis fünf“.'}]},

{lv:2,part:'Hören Teil 2',kind:'tf',title:'Nachricht auf der Mailbox',
 say:'Hallo, hier ist Doktor Berger. Ihr Termin am Donnerstag um zehn Uhr geht leider nicht. Können Sie am Freitag um elf kommen? Rufen Sie bitte zurück. Danke.',
 items:[{s:'Der Termin am Donnerstag bleibt.',a:false,ex:'„geht leider nicht“.'},
        {s:'Der neue Termin ist Freitag um elf.',a:true,ex:'„am Freitag um elf“.'},
        {s:'Man soll zurückrufen.',a:true,ex:'„Rufen Sie bitte zurück.“'}]},

/* ---------- A2 ---------- */
{lv:3,part:'Hören Teil 1',kind:'mc',title:'Im Radio: Wetter',
 say:'Und nun das Wetter. Am Vormittag ist es stark bewölkt, am Nachmittag kommt Regen aus dem Westen. Die Temperaturen liegen bei vierzehn Grad. Morgen wird es freundlicher, aber kühler, nur noch zehn Grad.',
 qs:[{q:'Wie wird das Wetter am Nachmittag?',a:'Es regnet.',o:['Es schneit.','Es ist sonnig.','Es ist neblig.'],ex:'„am Nachmittag kommt Regen“.'},
     {q:'Was sagt der Bericht über morgen?',a:'freundlicher, aber kälter',o:['wärmer und sonnig','genauso wie heute','sehr windig'],
      ex:'„freundlicher, aber kühler, nur noch zehn Grad“.'}]},

{lv:3,part:'Hören Teil 2',kind:'tf',title:'Durchsage im Supermarkt',
 say:'Liebe Kundinnen und Kunden, heute und morgen sind alle Bio-Joghurts im Angebot: zwei für einen Euro fünfzig. Außerdem suchen wir noch Aushilfen für das Wochenende. Fragen Sie an der Information.',
 items:[{s:'Das Angebot gilt nur heute.',a:false,ex:'„heute und morgen“.'},
        {s:'Zwei Joghurts kosten 1,50 €.',a:true,ex:'„zwei für einen Euro fünfzig“.'},
        {s:'Der Supermarkt sucht Personal.',a:true,ex:'„suchen wir noch Aushilfen“.'}]},

/* ---------- B1 ---------- */
{lv:4,part:'Hören Teil 1',kind:'mc',title:'Telefonat: Kurs anmelden',
 say:'Volkshochschule Mitte, guten Tag. — Guten Tag, ich möchte mich für den Töpferkurs anmelden. — Der Kurs am Mittwoch ist leider voll. Wir haben aber noch Plätze im Kurs am Samstagmorgen, zehn Termine, hundertzwanzig Euro. Material ist inklusive. — Gut, dann nehme ich den Samstag.',
 qs:[{q:'Warum nimmt die Person nicht den Mittwochskurs?',a:'Er ist ausgebucht.',o:['Er ist zu teuer.','Er fängt zu früh an.','Er findet nicht statt.'],
      ex:'„ist leider voll“.'},
     {q:'Was kostet der Samstagskurs?',a:'120 € inklusive Material',o:['120 € plus Material','10 € pro Termin plus Material','Das wird nicht gesagt.'],
      ex:'„hundertzwanzig Euro. Material ist inklusive.“'}]},

{lv:4,part:'Hören Teil 2',kind:'mc',title:'Interview: Fahrrad in der Stadt',
 say:'Herr Krause, Sie fahren jeden Tag mit dem Rad zur Arbeit. Warum? — Vor allem aus Zeitgründen. Mit dem Auto stehe ich im Stau, mit dem Rad brauche ich immer gleich lang, zwanzig Minuten. Gesund ist es natürlich auch. Was mich ärgert, sind die Radwege: Viele enden plötzlich mitten auf der Straße. Da müsste die Stadt wirklich nachbessern.',
 qs:[{q:'Was ist Herrn Krauses Hauptgrund?',a:'Die Fahrzeit ist berechenbar.',o:['Es ist billiger.','Es ist umweltfreundlicher.','Er hat kein Auto.'],
      ex:'„Vor allem aus Zeitgründen … immer gleich lang“.'},
     {q:'Was kritisiert er?',a:'Radwege, die plötzlich aufhören',o:['zu wenige Parkplätze','das Wetter','die Preise für Fahrräder'],
      ex:'„Viele enden plötzlich mitten auf der Straße.“'}]},

/* ---------- B2 ---------- */
{lv:5,part:'Hören Teil 1',kind:'mc',title:'Diskussion: Homeoffice',
 say:'Ich halte die Debatte für verkürzt. Produktivität lässt sich nicht an Anwesenheit messen. — Da widerspreche ich nicht grundsätzlich, aber Teams brauchen informellen Austausch, und der entsteht im Flur, nicht im Kalender. — Einverstanden. Deshalb plädiere ich für feste Präsenztage, nicht für Präsenzpflicht.',
 qs:[{q:'Worauf können sich beide einigen?',a:'auf feste Präsenztage statt einer generellen Pflicht',
      o:['auf vollständiges Homeoffice','auf eine Rückkehr ins Büro an allen Tagen','auf nichts'],
      ex:'„Deshalb plädiere ich für feste Präsenztage, nicht für Präsenzpflicht.“'},
     {q:'Welches Argument bringt die zweite Person?',a:'Informeller Austausch entsteht nur vor Ort.',
      o:['Homeoffice ist technisch unmöglich.','Anwesenheit misst Produktivität.','Die Mieten sind zu hoch.'],
      ex:'„der entsteht im Flur, nicht im Kalender“.'}]},

/* ---------- C1 ---------- */
{lv:6,part:'Hören Teil 1',kind:'mc',title:'Vortrag: Lesen am Bildschirm',
 say:'Die Befunde sind eindeutiger, als man erwarten würde. Beim Lesen längerer Sachtexte am Bildschirm sinkt das Textverständnis messbar, und zwar nicht wegen der Technik, sondern wegen des Leseverhaltens: Wir überfliegen, springen, scrollen weiter. Interessant ist der Nebeneffekt — wer am Bildschirm liest, überschätzt sein Verständnis regelmäßig. Das Papier hat also keinen magischen Vorteil; es erzwingt lediglich Langsamkeit.',
 qs:[{q:'Worauf führt der Vortrag das schlechtere Verständnis zurück?',a:'auf das veränderte Leseverhalten, nicht auf das Medium selbst',
      o:['auf schlechte Bildschirme','auf fehlende Beleuchtung','auf zu kleine Schrift'],
      ex:'„nicht wegen der Technik, sondern wegen des Leseverhaltens“.'},
     {q:'Welchen Nebeneffekt nennt der Sprecher?',a:'Leser am Bildschirm überschätzen ihr Verständnis.',
      o:['Sie lesen schneller und besser.','Sie werden müde.','Sie merken sich Bilder besser.'],
      ex:'„überschätzt sein Verständnis regelmäßig“.'},
     {q:'Wie bewertet er Papier?',a:'ohne magischen Vorteil, aber es erzwingt Langsamkeit',
      o:['als klar überlegen in jeder Hinsicht','als veraltet','als irrelevant'],
      ex:'„keinen magischen Vorteil; es erzwingt lediglich Langsamkeit“.'}]}
];

/* ============================================================
   SCHREIBEN — writing
   Goethe-style tasks with content points, a Redemittel bank,
   a self-check list and a model answer to compare against.
   ============================================================ */
const SCHREIBEN = [
{lv:2,part:'Schreiben Teil 2',title:'Kurze Nachricht an eine Freundin',min:30,
 task:'Du bist krank und kannst heute nicht zum Deutschkurs kommen. Schreibe deiner Freundin Maria eine kurze Nachricht.',
 points:['Sag, dass du krank bist.','Sag, dass du nicht kommst.','Bitte sie, dir die Hausaufgaben zu schicken.'],
 phrases:['Hallo Maria,','Ich bin krank.','Ich kann heute nicht kommen.','Kannst du mir bitte … schicken?','Liebe Grüße','Danke!'],
 check:['Anrede am Anfang („Hallo Maria,“)','Alle drei Punkte genannt','Gruß am Ende','Verb an Position 2'],
 model:'Hallo Maria,\n\nich bin leider krank und kann heute nicht zum Kurs kommen. Kannst du mir bitte die Hausaufgaben schicken? Das wäre sehr nett.\n\nLiebe Grüße\nSam'},

{lv:3,part:'Schreiben Teil 1',title:'E-Mail: Termin verschieben',min:40,
 task:'Du hast am Donnerstag einen Termin beim Zahnarzt, kannst aber nicht kommen. Schreibe eine E-Mail an die Praxis.',
 points:['Nenne deinen Termin (Tag und Uhrzeit).','Erkläre, warum du nicht kommen kannst.','Frag nach einem neuen Termin.'],
 phrases:['Sehr geehrte Damen und Herren,','ich habe am Donnerstag um … einen Termin.','Leider muss ich arbeiten.',
          'Könnten Sie mir einen neuen Termin geben?','Vielen Dank im Voraus.','Mit freundlichen Grüßen'],
 check:['Formelle Anrede („Sehr geehrte Damen und Herren,“)','Grund genannt','Frage nach neuem Termin','Formeller Gruß'],
 model:'Sehr geehrte Damen und Herren,\n\nich habe am Donnerstag um 15 Uhr einen Termin in Ihrer Praxis. Leider muss ich an diesem Tag länger arbeiten und kann den Termin nicht einhalten.\n\nKönnten Sie mir bitte einen neuen Termin geben? Nächste Woche wäre ich am Montag oder Mittwoch frei.\n\nVielen Dank im Voraus.\n\nMit freundlichen Grüßen\nSam Yildiz'},

{lv:4,part:'Schreiben Teil 1',title:'Forumsbeitrag: Soll man Sport in der Schule pflichtmäßig machen?',min:80,
 task:'Du liest einen Online-Artikel über Sportunterricht. Schreibe einen Forumsbeitrag: Sag deine Meinung und begründe sie mit einem Beispiel.',
 points:['Nimm Stellung (dafür oder dagegen).','Gib mindestens zwei Begründungen.','Nenne ein Beispiel aus deiner Erfahrung.','Schließe mit einem Fazit.'],
 phrases:['Ich finde, dass …','Meiner Meinung nach …','Ein wichtiger Grund dafür ist, dass …','Außerdem …',
          'Aus meiner eigenen Erfahrung …','Allerdings muss man bedenken, dass …','Zusammenfassend würde ich sagen, dass …'],
 check:['Klare Position','Zwei Begründungen mit „weil“ oder „deshalb“','Ein konkretes Beispiel','Fazit am Ende','Absätze statt einem Block'],
 model:'Ich finde, dass Sportunterricht in der Schule Pflicht bleiben sollte.\n\nEin wichtiger Grund dafür ist, dass viele Kinder sich sonst kaum bewegen. Außerdem lernt man im Mannschaftssport, zusammenzuarbeiten und auch zu verlieren — das ist im Alltag mindestens so nützlich wie Mathematik.\n\nAus meiner eigenen Erfahrung weiß ich allerdings, dass der Unterricht oft demotiviert: Wer nicht sportlich ist, wird vor der ganzen Klasse vorgeführt. Deshalb würde ich die Note abschaffen, nicht das Fach.\n\nZusammenfassend würde ich sagen, dass Sport bleiben muss — aber ohne Leistungsdruck.'},

{lv:5,part:'Schreiben Teil 1',title:'Forumskommentar: Autofreie Innenstädte',min:150,
 task:'In einem Online-Forum wird diskutiert, ob Innenstädte autofrei werden sollen. Schreibe einen Kommentar, in dem du Argumente abwägst und zu einem eigenen Schluss kommst.',
 points:['Führe in das Thema ein.','Nenne zwei Argumente der Gegenseite und entkräfte sie.','Begründe deine eigene Position.','Formuliere einen Schluss mit Vorschlag.'],
 phrases:['Die Debatte um … wird oft verkürzt geführt.','Häufig wird eingewandt, dass …','Dieses Argument greift jedoch zu kurz, denn …',
          'Einerseits …, andererseits …','Entscheidend ist meines Erachtens, dass …','Vor diesem Hintergrund plädiere ich für …',
          'Zusammenfassend lässt sich sagen, dass …'],
 check:['Einleitung, Hauptteil, Schluss','Gegenargumente genannt UND entkräftet','Konnektoren: jedoch, allerdings, folglich, dennoch',
        'Eigene Position klar begründet','Konkreter Vorschlag am Ende','Keine Umgangssprache („kriegen“, „echt“)'],
 model:'Die Debatte um autofreie Innenstädte wird häufig als Streit zwischen Autofahrern und Radfahrern geführt. Das verfehlt den Kern: Es geht um die Frage, wofür öffentlicher Raum da ist.\n\nHäufig wird eingewandt, der Einzelhandel verliere Kundschaft. Die Erfahrungen aus Städten wie Pontevedra oder Groningen sprechen dagegen — dort sind die Umsätze nach der Umgestaltung gestiegen, weil mehr Menschen länger blieben. Ein zweiter Einwand betrifft ältere oder mobilitätseingeschränkte Personen. Dieser Punkt ist berechtigt, lässt sich aber durch Ausnahmegenehmigungen und einen dichten Nahverkehr lösen, nicht durch den Verzicht auf die Reform.\n\nEntscheidend ist meines Erachtens, dass Fläche eine endliche Ressource ist. Ein parkendes Auto belegt rund zwölf Quadratmeter, die als Spielfläche, Grün oder Außengastronomie weit mehr Menschen zugutekämen.\n\nVor diesem Hintergrund plädiere ich für eine stufenweise Umsetzung: zunächst autofreie Kernzonen mit klaren Ausnahmen, begleitet von einem Ausbau des Nahverkehrs. Zusammenfassend lässt sich sagen, dass nicht das Auto das Problem ist, sondern seine Selbstverständlichkeit im Zentrum.'},

{lv:5,part:'Schreiben Teil 2',title:'Formelle Beschwerde',min:100,
 task:'Du hast online ein Gerät gekauft, das beschädigt ankam. Der Verkäufer reagiert nicht. Schreibe eine formelle Beschwerde.',
 points:['Nenne Bestellnummer und Datum.','Beschreibe das Problem sachlich.','Beschreibe, was du bereits versucht hast.','Nenne eine klare Forderung mit Frist.'],
 phrases:['Sehr geehrte Damen und Herren,','mit Bezug auf meine Bestellung Nr. … vom …','leider musste ich feststellen, dass …',
          'Bereits am … habe ich Sie darüber informiert.','Ich fordere Sie daher auf, … bis zum … zu …',
          'Andernfalls sehe ich mich gezwungen, …','Mit freundlichen Grüßen'],
 check:['Sachlicher Ton, keine Beschimpfungen','Alle Fakten (Nummer, Datum) genannt','Passiv oder Nominalstil verwendet',
        'Konkrete Frist','Formelle Anrede und Gruß'],
 model:'Sehr geehrte Damen und Herren,\n\nmit Bezug auf meine Bestellung Nr. 4471-A vom 3. März muss ich Sie erneut auf einen Mangel hinweisen. Das gelieferte Gerät wies bereits bei Erhalt einen Riss im Gehäuse auf; eine Inbetriebnahme war nicht möglich.\n\nBereits am 5. März habe ich Sie hierüber per E-Mail informiert und Fotos beigefügt. Eine Reaktion ist bis heute nicht erfolgt.\n\nIch fordere Sie daher auf, bis zum 25. März entweder ein einwandfreies Ersatzgerät zu liefern oder den Kaufpreis in Höhe von 249 Euro zu erstatten. Andernfalls sehe ich mich gezwungen, rechtliche Schritte einzuleiten.\n\nMit freundlichen Grüßen\nSam Yildiz'},

{lv:6,part:'Schreiben',title:'Stellungnahme: Künstliche Intelligenz in der Hochschulbildung',min:220,
 task:'Schreiben Sie eine Stellungnahme für eine Hochschulzeitung: Sollen KI-Werkzeuge beim Schreiben von Hausarbeiten erlaubt sein?',
 points:['Problemaufriss mit präziser Fragestellung.','Differenzierte Abwägung mindestens dreier Aspekte.',
         'Einordnung in einen größeren Zusammenhang.','Eigene, begründete Position mit Einschränkung.'],
 phrases:['Die Frage, ob …, lässt sich kaum pauschal beantworten.','Zunächst ist zu unterscheiden zwischen … und …',
          'Hinsichtlich … bestehen erhebliche Unterschiede.','Dem Argument, …, ist entgegenzuhalten, dass …',
          'Dies gilt umso mehr, als …','Vor diesem Hintergrund erscheint es geboten, …',
          'Abschließend sei darauf hingewiesen, dass …'],
 check:['Nominalstil und Passiv angemessen eingesetzt','Konnektoren variiert (zudem, indes, gleichwohl, insofern)',
        'Keine Wiederholung derselben Satzmuster','Position differenziert, nicht schwarz-weiß',
        'Erweiterte Partizipialattribute oder Relativsätze verwendet','Register durchgehend formal'],
 model:'Die Frage, ob KI-Werkzeuge beim Verfassen von Hausarbeiten zulässig sein sollen, lässt sich kaum pauschal beantworten. Zunächst ist zu unterscheiden zwischen Werkzeugen, die sprachlich glätten, und solchen, die Inhalte erzeugen.\n\nGegen eine generelle Erlaubnis wird vorgebracht, die Prüfungsleistung sei nicht mehr zurechenbar. Dem ist insofern zuzustimmen, als die klassische Hausarbeit tatsächlich Autorschaft unterstellt. Allerdings hat diese Unterstellung schon vor der Verfügbarkeit solcher Systeme getrogen; die seit Jahren beklagte Praxis des Ghostwritings belegt es.\n\nHinsichtlich der Kompetenzentwicklung bestehen erhebliche Unterschiede: Wer sich eine Argumentation generieren lässt, überspringt genau den Schritt, in dem Verstehen entsteht. Wer hingegen einen eigenen Entwurf überarbeiten lässt, nutzt das System wie ein Lektorat — eine Praxis, die nie beanstandet wurde.\n\nVor diesem Hintergrund erscheint es geboten, nicht das Werkzeug zu regulieren, sondern die Prüfungsform. Mündliche Verteidigungen, Zwischenstände und begleitende Reflexionsberichte machen Autorschaft überprüfbar, ohne eine Technik zu verbieten, die sich ohnehin nicht kontrollieren lässt.\n\nAbschließend sei darauf hingewiesen, dass jedes Verbot, dessen Einhaltung nicht festgestellt werden kann, vor allem eines bewirkt: Es bestraft die Ehrlichen.'},

{lv:7,part:'Schreiben',title:'Essay: Über Höflichkeit',min:300,
 task:'Schreiben Sie einen Essay von rund 300 Wörtern zu der These: „Höflichkeit ist eine Form der Rücksichtslosigkeit, weil sie das Unangenehme verschweigt.“',
 points:['Entfalte die These und nimm sie zunächst ernst.','Prüfe sie an einem konkreten Fall.',
         'Führe eine Gegenperspektive ein.','Entwickle eine eigene, nicht-triviale Pointe.'],
 phrases:['So zugespitzt die These klingt, so wenig lässt sie sich einfach verwerfen.',
          'Zu denken wäre etwa an …','Gerade darin liegt die Schwierigkeit:','Was auf den ersten Blick … erscheint, erweist sich bei näherem Hinsehen als …',
          'Man könnte einwenden, …','Die entscheidende Unterscheidung dürfte darin liegen, dass …','Bleibt also festzuhalten:'],
 check:['Eigene Gedankenführung, keine Aufzählung von Allgemeinplätzen','Stilistische Variation: Parenthese, Doppelpunkt-Pointe, Inversion',
        'Konzessive Strukturen (gleichwohl, zwar … doch, so … auch)','Präzises, nicht geschwollenes Vokabular',
        'Eine Pointe, die über die These hinausgeht','Länge rund 300 Wörter'],
 model:'So zugespitzt die These klingt, so wenig lässt sie sich einfach verwerfen. Höflichkeit verlangt tatsächlich, dass man nicht alles sagt, was zutrifft — und wer schweigt, entscheidet damit über den anderen mit, ohne ihn zu fragen.\n\nZu denken wäre etwa an das Arbeitszeugnis, in dem „stets bemüht“ eine Katastrophe bedeutet, die niemand ausspricht. Der Verfasser bleibt höflich, der Betroffene bleibt ahnungslos, und die nächste Bewerbung scheitert an einem Satz, den er nicht entschlüsseln kann. Hier ist die These kaum zu widerlegen: Die Form schützt den Sprecher, nicht den Angesprochenen.\n\nMan könnte einwenden, dass Offenheit ihrerseits eine Zumutung sei. Das trifft zu, nur beschreibt es ein anderes Problem. Wer rücksichtslos offen ist, nimmt dem anderen die Fassung; wer rücksichtslos höflich ist, nimmt ihm die Information. Beides sind Formen der Bequemlichkeit, und beide tarnen sich als Charakter.\n\nDie entscheidende Unterscheidung dürfte darin liegen, dass Höflichkeit nicht Schweigen bedeutet, sondern Takt: die Wahl des Zeitpunkts, des Tons, des Adressaten. Gerade darin liegt die Schwierigkeit — Takt ist aufwendig, Schweigen ist billig, und beides sieht von außen gleich aus.\n\nBleibt also festzuhalten: Nicht die Höflichkeit ist rücksichtslos, sondern ihre Verwendung als Ausrede. Die Frage lautet nie, ob man etwas sagt, sondern ob man bereit ist, den Aufwand zu tragen, es sagbar zu machen. Wer darauf verzichtet und sich auf die gute Form beruft, hat die Form nicht verstanden, sondern nur ihre Oberfläche geborgt.'}
];

/* ============================================================
   SPRECHEN — speaking
   Each task: a Goethe-style prompt, preparation + speaking time,
   Redemittel, and a model answer the learner can hear and shadow.
   ============================================================ */
const SPRECHEN = [
{lv:2,part:'Sprechen Teil 1',title:'Sich vorstellen',prep:30,talk:60,
 task:'Stellen Sie sich vor. Sprechen Sie über: Name · Alter · Land · Wohnort · Sprachen · Beruf · Hobby.',
 phrases:['Ich heiße …','Ich bin … Jahre alt.','Ich komme aus …','Ich wohne in …','Ich spreche …','Ich bin … von Beruf.','Mein Hobby ist …'],
 model:'Ich heiße Sam Yildiz. Ich bin dreißig Jahre alt und komme aus der Türkei. Jetzt wohne ich in Hamburg. Ich spreche Türkisch, Englisch und ein bisschen Deutsch. Ich bin Ingenieur von Beruf. Mein Hobby ist Fußball — ich spiele jeden Samstag.',
 tips:['Sprich langsam und deutlich — Tempo bringt keine Punkte.','Sieben Punkte, sieben kurze Sätze. Das genügt.','Übe deinen Namen buchstabieren: „Y-I-L-D-I-Z“.']},

{lv:2,part:'Sprechen Teil 2',title:'Um etwas bitten',prep:20,talk:40,
 task:'Sie sind im Kurs. Bitten Sie Ihre Partnerin um einen Stift, ein Blatt Papier und ihre Telefonnummer.',
 phrases:['Entschuldigung, hast du …?','Kannst du mir bitte … geben?','Darf ich … haben?','Wie ist deine Telefonnummer?','Danke schön!'],
 model:'Entschuldigung, hast du einen Stift für mich? — Danke! Und kannst du mir bitte auch ein Blatt Papier geben? — Super. Wie ist eigentlich deine Telefonnummer? Ich schreibe sie auf.',
 tips:['„Kannst du …?“ ist höflicher als ein Imperativ.','„bitte“ und „danke“ kosten nichts und bringen Punkte.']},

{lv:3,part:'Sprechen Teil 1',title:'Über sich erzählen: Wohnen',prep:40,talk:90,
 task:'Erzählen Sie über Ihre Wohnung: Wie wohnen Sie? Mit wem? Was gefällt Ihnen, was nicht? Wie möchten Sie gern wohnen?',
 phrases:['Ich wohne in einer Wohnung mit … Zimmern.','Ich wohne allein / mit meiner Familie / in einer WG.',
          'Am besten gefällt mir …','Was mir nicht gefällt, ist …','Am liebsten würde ich …','In der Zukunft möchte ich …'],
 model:'Ich wohne in einer kleinen Wohnung im dritten Stock, mit zwei Zimmern, Küche und Bad. Ich wohne allein, aber meine Schwester besucht mich oft. Am besten gefällt mir der Balkon — dort trinke ich morgens Kaffee. Was mir nicht gefällt, ist der Lärm von der Straße. Am liebsten würde ich später ein kleines Haus mit Garten haben, aber hier in der Stadt ist das sehr teuer.',
 tips:['Ein Kontrast („am besten … / was mir nicht gefällt …“) zeigt mehr Sprache als eine Liste.','Ein Satz mit „würde“ hebt dich auf A2+ Niveau.']},

{lv:3,part:'Sprechen Teil 3',title:'Etwas zusammen planen',prep:40,talk:90,
 task:'Planen Sie mit Ihrer Partnerin einen Ausflug am Wochenende: Wohin? Wann? Wie hinfahren? Was mitnehmen?',
 phrases:['Wollen wir …?','Hast du Lust, … zu …?','Ich hätte einen Vorschlag: …','Wie wäre es mit …?',
          'Das passt mir gut / nicht so gut.','Dann treffen wir uns um … am …','Was nehmen wir mit?'],
 model:'Ich hätte einen Vorschlag: Wollen wir am Sonntag an den See fahren? — Wie wäre es mit dem Zug um neun? Dann sind wir um zehn da. — Ich bringe etwas zu essen mit, kannst du Getränke mitnehmen? Und nimm bitte eine Decke mit. Dann treffen wir uns um Viertel vor neun am Hauptbahnhof, einverstanden?',
 tips:['Mach Vorschläge und reagiere auf den anderen — das ist die eigentliche Prüfungsleistung.','Ende mit einer Zusammenfassung: wann, wo, wer bringt was.']},

{lv:4,part:'Sprechen Teil 1',title:'Gemeinsam etwas planen: Abschiedsfeier',prep:60,talk:120,
 task:'Eine Kollegin verlässt die Firma. Planen Sie zusammen die Abschiedsfeier: Ort, Zeitpunkt, Essen, Geschenk, Einladung, Kosten.',
 phrases:['Ich würde vorschlagen, dass wir …','Was hältst du davon, wenn …?','Einverstanden, aber vielleicht sollten wir …',
          'Das ist ein guter Punkt, allerdings …','Wie teilen wir die Kosten auf?','Dann wäre das also geklärt.'],
 model:'Ich würde vorschlagen, dass wir die Feier im Innenhof machen — da passen alle rein und es kostet nichts. Was hältst du davon, wenn wir Freitag nach der Arbeit anfangen, so gegen siebzehn Uhr? — Einverstanden, aber vielleicht sollten wir vorher fragen, ob sie überhaupt eine große Feier möchte. Beim Essen wäre ich für etwas Einfaches: Jeder bringt etwas mit. Als Geschenk könnten wir Geld sammeln und einen Gutschein kaufen — ich würde zwanzig Euro pro Person vorschlagen. Die Einladung schreibe ich heute noch, wenn du die Kollegen aus dem zweiten Stock übernimmst. Dann wäre das also geklärt.',
 tips:['B1 Teil 1 wird für das <i>Verhandeln</i> bewertet: zustimmen, einwenden, einen Kompromiss finden.',
       'Benutze „würde“, „könnten“, „sollten“ — Konjunktiv II klingt kooperativ.']},

{lv:4,part:'Sprechen Teil 2',title:'Präsentation: Ein Thema aus meinem Land',prep:90,talk:180,
 task:'Halten Sie eine kurze Präsentation über ein Fest oder einen Brauch in Ihrem Land. Struktur: Thema nennen · von eigenen Erfahrungen berichten · Situation in Ihrem Land · Vor- und Nachteile · eigene Meinung · Abschluss.',
 phrases:['Ich möchte heute über … sprechen.','Zuerst erzähle ich von meinen eigenen Erfahrungen.',
          'In meinem Land ist es so, dass …','Ein Vorteil ist …, ein Nachteil dagegen …',
          'Ich persönlich finde …','Damit komme ich zum Schluss. Vielen Dank für Ihre Aufmerksamkeit.'],
 model:'Ich möchte heute über das Neujahrsfest Nouruz sprechen. Zuerst erzähle ich von meinen eigenen Erfahrungen: Als Kind war Nouruz für mich das wichtigste Fest im Jahr, wichtiger als mein Geburtstag. Wir haben zwei Wochen vorher die Wohnung geputzt — das nennt man „Hausputz“ — und dann sieben Dinge auf den Tisch gestellt, die alle mit einem bestimmten Buchstaben anfangen. In meinem Land ist es so, dass die Feiertage dreizehn Tage dauern und fast alle Geschäfte zu sind. Ein Vorteil ist, dass wirklich alle Familien zusammenkommen; ein Nachteil dagegen ist der Druck: Man muss alle Verwandten besuchen, auch die, die man nicht mag. Ich persönlich finde, dass Feste nur funktionieren, wenn sie freiwillig bleiben. Damit komme ich zum Schluss — vielen Dank für Ihre Aufmerksamkeit.',
 tips:['Halte dich sichtbar an die sechs Folien/Punkte: die Prüfer haken sie ab.',
       'Erzähle ein konkretes Detail — das ist einprägsamer und sprachlich reicher als Allgemeines.']},

{lv:5,part:'Sprechen Teil 1',title:'Vortrag mit Stellungnahme',prep:180,talk:240,
 task:'Halten Sie einen Vortrag: „Sollten soziale Netzwerke ab 16 Jahren erlaubt sein?“ Nennen Sie Vorschläge, wägen Sie Vor- und Nachteile ab und begründen Sie Ihre Position.',
 phrases:['Ich habe mich für das Thema … entschieden, weil …','Für eine Altersgrenze spricht zunächst, dass …',
          'Dagegen lässt sich einwenden, dass …','Besonders problematisch erscheint mir …',
          'Eine denkbare Lösung wäre, …','Abschließend möchte ich betonen, dass …'],
 model:'Ich habe mich für dieses Thema entschieden, weil es fast jede Familie betrifft. Für eine Altersgrenze spricht zunächst, dass Jugendliche den Algorithmen strukturell unterlegen sind: Die Systeme sind darauf optimiert, Aufmerksamkeit zu binden, und das trifft ein sich entwickelndes Belohnungssystem besonders hart. Dagegen lässt sich einwenden, dass Verbote in diesem Bereich schlecht funktionieren — wer sechzehn sein muss, gibt eben an, sechzehn zu sein. Besonders problematisch erscheint mir zudem, dass ein Verbot genau jene Jugendlichen ausschließt, für die diese Netzwerke der einzige Zugang zu einer Community ist. Eine denkbare Lösung wäre daher, nicht den Zugang zu regulieren, sondern das Geschäftsmodell: keine personalisierte Werbung und keine endlosen Feeds für Minderjährige. Abschließend möchte ich betonen, dass das Problem nicht das Alter der Nutzer ist, sondern das Design der Plattformen.',
 tips:['B2 verlangt Abwägung: Jedes Argument braucht ein Gegenargument.','Benutze Konnektoren statt „und dann“: zunächst, zudem, dagegen, daher, abschließend.',
       'Ein eigener Lösungsvorschlag hebt dich deutlich.']},

{lv:5,part:'Sprechen Teil 2',title:'Diskussion: auf Argumente reagieren',prep:60,talk:150,
 task:'Diskutieren Sie: „Soll die Universität Anwesenheitspflicht einführen?“ Reagieren Sie auf die Argumente Ihrer Partnerin, widersprechen Sie höflich und finden Sie am Ende einen Kompromiss.',
 phrases:['Da haben Sie insofern recht, als …','Ich sehe das etwas anders, und zwar weil …',
          'Darf ich kurz einhaken?','Das würde ich so nicht sagen.','Einigen wir uns darauf, dass …',
          'Können wir festhalten, dass …?'],
 model:'Da haben Sie insofern recht, als Anwesenheit das Durchfallen senkt — das zeigen die Zahlen. Ich sehe das trotzdem etwas anders, und zwar weil die Korrelation nicht die Richtung klärt: Vielleicht kommen einfach die motivierten Studierenden häufiger. Darf ich kurz einhaken? Mein Hauptpunkt ist ein anderer: Eine Pflicht trifft Studierende mit Nebenjob oder Kind am härtesten, also genau die, die ohnehin die wenigsten Reserven haben. Einigen wir uns darauf, dass Anwesenheit dort sinnvoll ist, wo wirklich interagiert wird — in Seminaren und Laboren —, in der Vorlesung aber nicht? Können wir das so festhalten?',
 tips:['Höfliches Widersprechen ist der Prüfungsinhalt: erst einräumen, dann widersprechen.',
       'Frag am Ende aktiv nach Einigung — das zeigt Gesprächssteuerung.']},

{lv:6,part:'Sprechen Teil 1',title:'Monolog: Thesen vertreten',prep:180,talk:240,
 task:'Nehmen Sie Stellung: „Lebenslanges Lernen ist eine Zumutung, die man als Chance verkauft.“ Entwickeln Sie eine differenzierte Position.',
 phrases:['Die These ist bewusst zugespitzt, trifft aber einen realen Punkt.','Zu unterscheiden ist dabei zwischen … und …',
          'Dem Argument, …, ist entgegenzuhalten, dass …','Dies gilt umso mehr, als …',
          'Man wird einräumen müssen, dass …','Gleichwohl halte ich daran fest, dass …'],
 model:'Die These ist bewusst zugespitzt, trifft aber einen realen Punkt. Zu unterscheiden ist dabei zwischen dem Lernen, das jemand selbst wählt, und jenem, das als Anpassungsleistung verlangt wird. Wer sich mit vierzig in eine neue Software einarbeitet, weil das Unternehmen umstellt, erlebt das kaum als Selbstverwirklichung. Dem Argument, Weiterbildung erhöhe die Beschäftigungsfähigkeit, ist entgegenzuhalten, dass sie zugleich die Verantwortung verschiebt: Wer arbeitslos wird, hat sich eben nicht genug qualifiziert. Dies gilt umso mehr, als die Kosten — Zeit, Geld, Energie — überwiegend privat getragen werden. Man wird einräumen müssen, dass Lernen auch befreit; das Gegenbeispiel ist leicht gefunden. Gleichwohl halte ich daran fest, dass der Begriff „Chance“ hier eine Zumutung verdeckt, und zwar genau dann, wenn er im Singular auftritt: Eine Chance, die man nicht ablehnen kann, ist keine.',
 tips:['C1 bewertet Differenzierung und Textkohäsion, nicht Lautstärke der Meinung.',
       'Baue eine Konzession ein („Man wird einräumen müssen …“) und halte danach deine Position.',
       'Schließe mit einer Formulierung, die den Gedanken weiterdreht, nicht nur zusammenfasst.']},

{lv:7,part:'Sprechen',title:'Freier Vortrag mit Verteidigung',prep:300,talk:300,
 task:'Halten Sie einen Vortrag zu einem selbstgewählten Thema von gesellschaftlicher Relevanz und verteidigen Sie Ihre These anschließend gegen Einwände.',
 phrases:['Ich möchte meine These vorweg formulieren, damit Sie sie prüfen können:',
          'Der Einwand liegt nahe — er greift jedoch nur, wenn man unterstellt, dass …',
          'Lassen Sie mich die Unterscheidung präzisieren.','Das ist ein starkes Argument; ich würde es sogar verschärfen:',
          'In diesem Punkt möchte ich meine Position korrigieren.','Worauf es mir letztlich ankommt, ist Folgendes:'],
 model:'Ich möchte meine These vorweg formulieren, damit Sie sie prüfen können: Die Debatte über Transparenz verwechselt regelmäßig Sichtbarkeit mit Kontrolle. Dass Daten offenliegen, heißt nicht, dass jemand sie liest; dass jemand sie liest, heißt nicht, dass er handeln kann. Der Einwand liegt nahe, Transparenz sei immerhin eine notwendige Bedingung — er greift jedoch nur, wenn man unterstellt, dass die Kapazität zur Auswertung mit der Datenmenge wächst. Genau das ist nicht der Fall; sie wird im Gegenteil knapper, je mehr veröffentlicht wird. Das ist ein starkes Argument gegen mich; ich würde es sogar verschärfen: Wer Transparenz fordert, verlagert Arbeit auf die Öffentlichkeit und entlastet die Institution, die eigentlich prüfen müsste. Worauf es mir letztlich ankommt, ist Folgendes: Transparenz ersetzt keine Aufsicht. Sie ist das Versprechen, dass jemand hinsehen könnte — und oft genügt dieses Versprechen schon, damit niemand es tut.',
 tips:['Formuliere die These vorweg und lade zum Widerspruch ein — souveräne Gesprächsführung.',
       'Verschärfe ein Gegenargument selbst, bevor du es beantwortest. Das ist die höchste Stufe.',
       'Korrigiere offen einen eigenen Punkt, wenn es zutrifft; das wirkt stark, nicht schwach.']}
];

return {LESEN,HOEREN,SCHREIBEN,SPRECHEN};
})();
