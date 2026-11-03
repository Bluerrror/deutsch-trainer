/* Deutsch Trainer — spoken & living German.
   Slang, everyday expressions, Redemittel, multi-turn conversations,
   short reading texts, and data for the drill modes (sort / scramble).
   Register is marked so nothing colloquial is ever taught as neutral.   */
window.SPOKEN = (function(){

/* ===================== slang & colloquial (Umgangssprache) ===================== */
/* reg: 'ugs' = colloquial, 'jug' = youth slang, 'reg' = regional */
const SLANG = [
  {de:'krass',            en:'wild, intense (wow!)',            neutral:'erstaunlich',      reg:'jug', ex:'Das war echt krass!'},
  {de:'geil',             en:'awesome, great',                  neutral:'toll',             reg:'ugs', ex:'Die Party war geil.'},
  {de:'mega',             en:'mega, really (intensifier)',      neutral:'sehr',             reg:'jug', ex:'Das Essen war mega lecker.'},
  {de:'Bock haben',       en:'to feel like / be up for',        neutral:'Lust haben',       reg:'ugs', ex:'Hast du Bock auf Kino?'},
  {de:'keinen Bock haben',en:'to not feel like it',             neutral:'keine Lust haben', reg:'ugs', ex:'Ich hab keinen Bock mehr.'},
  {de:'chillen',          en:'to chill, relax',                 neutral:'sich entspannen',  reg:'jug', ex:'Wir chillen heute zu Hause.'},
  {de:'abhauen',          en:'to take off, split',              neutral:'weggehen',         reg:'ugs', ex:'Komm, wir hauen ab!'},
  {de:'die Kohle',        en:'cash, dough',                     neutral:'das Geld',         reg:'ugs', ex:'Ich hab keine Kohle dabei.'},
  {de:'die Knete',        en:'money (slang)',                   neutral:'das Geld',         reg:'ugs', ex:'Das kostet richtig Knete.'},
  {de:'labern',           en:'to blather, talk nonsense',       neutral:'viel reden',       reg:'ugs', ex:'Er labert nur rum.'},
  {de:'quatschen',        en:'to chat',                         neutral:'sich unterhalten', reg:'ugs', ex:'Wir haben lange gequatscht.'},
  {de:'der Quatsch',      en:'nonsense',                        neutral:'der Unsinn',       reg:'ugs', ex:'Red keinen Quatsch!'},
  {de:'der Kumpel',       en:'buddy, mate',                     neutral:'der Freund',       reg:'ugs', ex:'Das ist mein Kumpel Max.'},
  {de:'pennen',           en:'to crash, sleep',                 neutral:'schlafen',         reg:'ugs', ex:'Ich hab bis zwölf gepennt.'},
  {de:'der Kater',        en:'hangover',                        neutral:'—',                reg:'ugs', ex:'Ich habe einen fürchterlichen Kater.'},
  {de:'nervig',           en:'annoying',                        neutral:'störend',          reg:'ugs', ex:'Der Lärm ist echt nervig.'},
  {de:'nix',              en:'nothing (spoken “nichts”)',        neutral:'nichts',          reg:'ugs', ex:'Ich hab nix gehört.'},
  {de:'’ne / ’nen',       en:'spoken short form of eine/einen', neutral:'eine / einen',     reg:'ugs', ex:'Hast du ’ne Idee?'},
  {de:'Alter!',           en:'dude! (surprise or protest)',     neutral:'—',                reg:'jug', ex:'Alter, was machst du da?'},
  {de:'Läuft bei dir!',   en:'nice one! things are going well for you',neutral:'—',          reg:'jug', ex:'Neuer Job? Läuft bei dir!'},
  {de:'auf jeden',        en:'definitely (short for “auf jeden Fall”)',neutral:'auf jeden Fall',reg:'jug',ex:'Kommst du? — Auf jeden!'},
  {de:'der Hammer',       en:'amazing / outrageous',            neutral:'unglaublich',      reg:'ugs', ex:'Der Film war der Hammer.'},
  {de:'Das ist mir Wurst.',en:'I couldn’t care less.',          neutral:'Das ist mir egal.',reg:'ugs', ex:'Wohin wir gehen, ist mir Wurst.'},
  {de:'die Klamotten',    en:'clothes, gear',                   neutral:'die Kleidung',     reg:'ugs', ex:'Zieh dir warme Klamotten an.'},
  {de:'das Klo',          en:'loo, toilet',                     neutral:'die Toilette',     reg:'ugs', ex:'Wo ist hier das Klo?'},
  {de:'die Bude',         en:'place, pad (one’s flat)',         neutral:'die Wohnung',      reg:'ugs', ex:'Komm doch auf meine Bude.'},
  {de:'der Typ',          en:'guy',                             neutral:'der Mann',         reg:'ugs', ex:'Kennst du den Typ da?'},
  {de:'dufte / schnieke', en:'spiffy, great (older Berlin slang)',neutral:'schön',          reg:'reg', ex:'Das sieht ja dufte aus.'},
  {de:'Moin',             en:'hi (any time of day — the north)',neutral:'Hallo',            reg:'reg', ex:'Moin! Alles klar?'},
  {de:'Servus',           en:'hi / bye (Bavaria & Austria)',    neutral:'Hallo / Tschüss',  reg:'reg', ex:'Servus, wie geht’s?'},
  {de:'Grüß Gott',        en:'hello (the south, slightly formal)',neutral:'Guten Tag',      reg:'reg', ex:'Grüß Gott, Herr Huber!'},
  {de:'Grüezi',           en:'hello (Switzerland)',             neutral:'Guten Tag',        reg:'reg', ex:'Grüezi, wie geht es Ihnen?'},
  {de:'gell? / gelle?',   en:'right? (the south)',              neutral:'nicht wahr?',      reg:'reg', ex:'Schön hier, gell?'},
  {de:'ne?',              en:'right? (the north & centre)',     neutral:'nicht wahr?',      reg:'ugs', ex:'Das war gut, ne?'},
  {de:'Mahlzeit!',        en:'greeting around lunchtime',       neutral:'Guten Appetit',    reg:'ugs', ex:'Mahlzeit! Schon gegessen?'},
  {de:'Tschö / Ciao',     en:'bye (casual)',                    neutral:'Tschüss',          reg:'ugs', ex:'Tschö, bis morgen!'},
  {de:'Das geht klar.',   en:'That’s fine / will do.',          neutral:'In Ordnung.',      reg:'ugs', ex:'Morgen um acht? Das geht klar.'},
  {de:'Kein Ding.',       en:'No problem.',                     neutral:'Kein Problem.',    reg:'ugs', ex:'Danke! — Kein Ding.'},
  {de:'Alles klar?',      en:'All good? / you ok?',             neutral:'Wie geht es dir?', reg:'ugs', ex:'Hey, alles klar bei dir?'},
  {de:'Na?',              en:'“well?” — a whole greeting in one syllable',neutral:'Hallo, wie geht’s?',reg:'ugs',ex:'Na? Wie war der Tag?'}
];

/* ===================== everyday expressions & Redemittel ===================== */
/* grouped by communicative function — this is what exams test as “Redemittel” */
const REDEMITTEL = [
  /* --- opinion --- */
  {fn:'Opinion',      lv:3, de:'Ich finde, dass …',               en:'I think that …'},
  {fn:'Opinion',      lv:3, de:'Meiner Meinung nach …',           en:'In my opinion …'},
  {fn:'Opinion',      lv:4, de:'Ich bin der Ansicht, dass …',     en:'I take the view that …'},
  {fn:'Opinion',      lv:5, de:'Aus meiner Sicht spricht viel dafür, dass …',en:'From my perspective there is much to suggest that …'},
  {fn:'Opinion',      lv:6, de:'Ich neige zu der Auffassung, dass …',en:'I incline to the view that …'},
  /* --- agreeing --- */
  {fn:'Agreeing',     lv:2, de:'Genau!',                          en:'Exactly!'},
  {fn:'Agreeing',     lv:3, de:'Das sehe ich auch so.',           en:'I see it that way too.'},
  {fn:'Agreeing',     lv:4, de:'Da stimme ich dir völlig zu.',    en:'I completely agree with you.'},
  {fn:'Agreeing',     lv:5, de:'Dem kann ich nur beipflichten.',  en:'I can only concur.'},
  /* --- disagreeing --- */
  {fn:'Disagreeing',  lv:3, de:'Das stimmt nicht.',               en:'That’s not right.'},
  {fn:'Disagreeing',  lv:4, de:'Da bin ich anderer Meinung.',     en:'I disagree there.'},
  {fn:'Disagreeing',  lv:5, de:'Das kann ich so nicht stehen lassen.',en:'I can’t let that stand.'},
  {fn:'Disagreeing',  lv:6, de:'Dem möchte ich entschieden widersprechen.',en:'I would firmly contradict that.'},
  /* --- asking for help --- */
  {fn:'Asking',       lv:2, de:'Können Sie mir helfen?',          en:'Can you help me?'},
  {fn:'Asking',       lv:2, de:'Wie bitte?',                      en:'Pardon?'},
  {fn:'Asking',       lv:3, de:'Könnten Sie das bitte wiederholen?',en:'Could you repeat that, please?'},
  {fn:'Asking',       lv:3, de:'Was bedeutet das?',               en:'What does that mean?'},
  {fn:'Asking',       lv:4, de:'Könnten Sie das etwas genauer erklären?',en:'Could you explain that a bit more precisely?'},
  /* --- small talk --- */
  {fn:'Small talk',   lv:2, de:'Wie war dein Wochenende?',        en:'How was your weekend?'},
  {fn:'Small talk',   lv:2, de:'Schönes Wetter heute, nicht?',    en:'Nice weather today, isn’t it?'},
  {fn:'Small talk',   lv:3, de:'Was machst du so in deiner Freizeit?',en:'What do you do in your free time?'},
  {fn:'Small talk',   lv:3, de:'Lange nicht gesehen!',            en:'Long time no see!'},
  /* --- restaurant --- */
  {fn:'Restaurant',   lv:2, de:'Einen Tisch für zwei, bitte.',    en:'A table for two, please.'},
  {fn:'Restaurant',   lv:2, de:'Die Speisekarte, bitte.',         en:'The menu, please.'},
  {fn:'Restaurant',   lv:3, de:'Ich nehme das Schnitzel.',        en:'I’ll have the schnitzel.'},
  {fn:'Restaurant',   lv:3, de:'Zusammen oder getrennt?',         en:'Together or separately? (paying)'},
  {fn:'Restaurant',   lv:3, de:'Stimmt so!',                      en:'Keep the change!'},
  /* --- shopping --- */
  {fn:'Shopping',     lv:2, de:'Was kostet das?',                 en:'How much is that?'},
  {fn:'Shopping',     lv:3, de:'Haben Sie das auch in Größe M?',  en:'Do you have this in size M too?'},
  {fn:'Shopping',     lv:3, de:'Ich schaue mich nur um.',         en:'I’m just looking around.'},
  {fn:'Shopping',     lv:3, de:'Kann ich mit Karte zahlen?',      en:'Can I pay by card?'},
  /* --- directions & travel --- */
  {fn:'Travel',       lv:2, de:'Wo ist der Bahnhof?',             en:'Where is the station?'},
  {fn:'Travel',       lv:3, de:'Einmal nach Köln, hin und zurück.',en:'One return ticket to Cologne.'},
  {fn:'Travel',       lv:3, de:'Von welchem Gleis fährt der Zug?',en:'Which platform does the train leave from?'},
  {fn:'Travel',       lv:3, de:'Muss ich umsteigen?',             en:'Do I have to change trains?'},
  {fn:'Travel',       lv:4, de:'Der Zug hat zwanzig Minuten Verspätung.',en:'The train is twenty minutes late.'},
  /* --- doctor --- */
  {fn:'Doctor',       lv:3, de:'Ich habe Kopfschmerzen.',         en:'I have a headache.'},
  {fn:'Doctor',       lv:3, de:'Ich möchte einen Termin vereinbaren.',en:'I’d like to make an appointment.'},
  {fn:'Doctor',       lv:4, de:'Seit wann haben Sie die Beschwerden?',en:'Since when have you had these symptoms?'},
  {fn:'Doctor',       lv:4, de:'Nehmen Sie regelmäßig Medikamente?',en:'Do you take medication regularly?'},
  /* --- flat & bureaucracy --- */
  {fn:'Everyday life',lv:4, de:'Ich interessiere mich für die Wohnung.',en:'I’m interested in the flat.'},
  {fn:'Everyday life',lv:4, de:'Wie hoch sind die Nebenkosten?',  en:'How high are the utilities?'},
  {fn:'Everyday life',lv:4, de:'Ich muss mich anmelden.',         en:'I have to register (my address).'},
  {fn:'Everyday life',lv:5, de:'Könnten Sie mir sagen, welche Unterlagen ich brauche?',en:'Could you tell me which documents I need?'},
  /* --- phone & email --- */
  {fn:'Phone & mail', lv:3, de:'Könnte ich bitte Herrn Weber sprechen?',en:'Could I speak to Mr Weber, please?'},
  {fn:'Phone & mail', lv:4, de:'Ich rufe wegen des Termins an.',   en:'I’m calling about the appointment.'},
  {fn:'Phone & mail', lv:4, de:'Mit freundlichen Grüßen',         en:'Kind regards (letter closing)'},
  {fn:'Phone & mail', lv:5, de:'Bezug nehmend auf Ihr Schreiben vom 3. Mai …',en:'With reference to your letter of 3 May …'},
  {fn:'Phone & mail', lv:5, de:'Für Rückfragen stehe ich Ihnen gern zur Verfügung.',en:'I am happy to answer any questions.'},
  /* --- discussion & presentation --- */
  {fn:'Discussion',   lv:5, de:'Darf ich kurz etwas ergänzen?',   en:'May I briefly add something?'},
  {fn:'Discussion',   lv:5, de:'Lassen Sie mich das an einem Beispiel verdeutlichen.',en:'Let me illustrate that with an example.'},
  {fn:'Discussion',   lv:5, de:'Zusammenfassend lässt sich sagen, dass …',en:'In summary one can say that …'},
  {fn:'Discussion',   lv:6, de:'Einerseits …, andererseits muss man bedenken, dass …',en:'On the one hand …, on the other one must consider that …'},
  {fn:'Discussion',   lv:6, de:'Das Argument greift meines Erachtens zu kurz.',en:'In my view that argument falls short.'},
  {fn:'Discussion',   lv:7, de:'Diese Position lässt sich nur schwer aufrechterhalten.',en:'That position is hard to maintain.'},
  /* --- softening & politeness --- */
  {fn:'Politeness',   lv:3, de:'Entschuldigen Sie die Störung.',  en:'Sorry to bother you.'},
  {fn:'Politeness',   lv:4, de:'Wäre es möglich, dass …?',        en:'Would it be possible that …?'},
  {fn:'Politeness',   lv:4, de:'Ich hätte eine Frage.',           en:'I’d have a question.'},
  {fn:'Politeness',   lv:5, de:'Es wäre sehr freundlich, wenn Sie …',en:'It would be very kind if you …'},
  {fn:'Politeness',   lv:6, de:'Ich erlaube mir, Sie darauf hinzuweisen, dass …',en:'Allow me to point out that …'}
];

/* ===================== multi-turn conversations ===================== */
/* Each has lines[] of {who:'A'|'B', de, en} and one gap turn to choose.
   gapAt = index of the line the learner must supply.                  */
const CONVO = [
 {lv:2,sk:'Phrases',title:'Im Café',ic:'☕',
  lines:[{who:'A',de:'Guten Tag! Was möchten Sie?',en:'Hello! What would you like?'},
         {who:'B',de:'___',en:''},
         {who:'A',de:'Gern. Sonst noch etwas?',en:'Sure. Anything else?'},
         {who:'B',de:'Nein, danke. Das ist alles.',en:'No thanks, that’s all.'}],
  gapAt:1,a:'Einen Kaffee, bitte.',o:['Ich wohne in Berlin.','Es ist acht Uhr.','Mir geht es gut.'],
  ex:'An order needs an accusative object: “Einen Kaffee, bitte.”'},

 {lv:2,sk:'Phrases',title:'Erste Begegnung',ic:'👋',
  lines:[{who:'A',de:'Hallo! Ich bin Lena. Und du?',en:'Hi! I’m Lena. And you?'},
         {who:'B',de:'___',en:''},
         {who:'A',de:'Freut mich! Woher kommst du?',en:'Nice to meet you! Where are you from?'},
         {who:'B',de:'Aus dem Iran, aus Teheran.',en:'From Iran, from Tehran.'}],
  gapAt:1,a:'Ich heiße Sam.',o:['Ich habe Hunger.','Es regnet heute.','Um zehn Uhr.'],
  ex:'“Ich heiße …” / “Ich bin …” answers a name question.'},

 {lv:3,sk:'Phrases',title:'Am Bahnhof',ic:'🚆',
  lines:[{who:'A',de:'Entschuldigung, wann fährt der nächste Zug nach Hamburg?',en:'Excuse me, when does the next train to Hamburg leave?'},
         {who:'B',de:'Um 14:20, von Gleis 7.',en:'At 14:20, from platform 7.'},
         {who:'A',de:'___',en:''},
         {who:'B',de:'Nein, der fährt direkt.',en:'No, it goes direct.'}],
  gapAt:2,a:'Muss ich umsteigen?',o:['Wie heißen Sie?','Was kostet ein Kaffee?','Wo wohnen Sie?'],
  ex:'“umsteigen” = to change trains — the natural follow-up question.'},

 {lv:3,sk:'Phrases',title:'Beim Arzt',ic:'🩺',
  lines:[{who:'A',de:'Guten Tag, was fehlt Ihnen denn?',en:'Hello, what seems to be the problem?'},
         {who:'B',de:'___',en:''},
         {who:'A',de:'Seit wann haben Sie die Schmerzen?',en:'Since when have you had the pain?'},
         {who:'B',de:'Seit drei Tagen.',en:'For three days.'}],
  gapAt:1,a:'Ich habe starke Halsschmerzen.',o:['Ich bin Lehrer von Beruf.','Ich komme mit dem Bus.','Ich hätte gern ein Bier.'],
  ex:'“Was fehlt Ihnen?” asks about symptoms — answer with “Ich habe … schmerzen”.'},

 {lv:3,sk:'Phrases',title:'Einkaufen',ic:'🛍️',
  lines:[{who:'A',de:'Kann ich Ihnen helfen?',en:'Can I help you?'},
         {who:'B',de:'Ja, haben Sie dieses Hemd auch in Blau?',en:'Yes, do you have this shirt in blue too?'},
         {who:'A',de:'___',en:''},
         {who:'B',de:'Super, das nehme ich.',en:'Great, I’ll take it.'}],
  gapAt:2,a:'Ja, einen Moment — hier bitte.',o:['Nein, ich bin müde.','Um sieben Uhr abends.','Ich wohne in der Nähe.'],
  ex:'A shop assistant answers the availability question, then hands the item over.'},

 {lv:4,sk:'Phrases',title:'Eine Verabredung',ic:'📅',
  lines:[{who:'A',de:'Hättest du am Samstag Zeit?',en:'Would you have time on Saturday?'},
         {who:'B',de:'___',en:''},
         {who:'A',de:'Schade. Und am Sonntag?',en:'Shame. And on Sunday?'},
         {who:'B',de:'Sonntag passt mir gut.',en:'Sunday works well for me.'}],
  gapAt:1,a:'Leider nicht, da arbeite ich.',o:['Ja, ich heiße Tom.','Das kostet zehn Euro.','Ich wohne im dritten Stock.'],
  ex:'A refusal gives a reason: “Leider nicht, da …” with inversion after “da”.'},

 {lv:4,sk:'Phrases',title:'Wohnungssuche',ic:'🏠',
  lines:[{who:'A',de:'Guten Tag, ich rufe wegen der Wohnung an. Ist sie noch frei?',en:'Hello, I’m calling about the flat. Is it still available?'},
         {who:'B',de:'Ja, noch ist sie frei.',en:'Yes, it is still available.'},
         {who:'A',de:'___',en:''},
         {who:'B',de:'Die Nebenkosten betragen 150 Euro.',en:'The utilities come to 150 euros.'}],
  gapAt:2,a:'Wie hoch sind die Nebenkosten?',o:['Wie alt sind Sie?','Welche Farbe hat die Tür?','Haben Sie einen Hund?'],
  ex:'“Nebenkosten” (utilities) is the standard next question after the rent.'},

 {lv:5,sk:'Phrases',title:'Im Büro',ic:'💼',
  lines:[{who:'A',de:'Könnten Sie den Bericht bis Freitag fertigstellen?',en:'Could you finish the report by Friday?'},
         {who:'B',de:'___',en:''},
         {who:'A',de:'Verstehe. Dann verschieben wir die Frist auf Montag.',en:'I see. Then we’ll move the deadline to Monday.'},
         {who:'B',de:'Das wäre mir eine große Hilfe.',en:'That would be a great help to me.'}],
  gapAt:1,a:'Das wird knapp — mir fehlen noch einige Daten.',o:['Ich trinke keinen Kaffee.','Der Bus kommt um acht.','Mein Bruder wohnt in Wien.'],
  ex:'A professional hedge: name the obstacle instead of a flat “no”.'},

 {lv:5,sk:'Phrases',title:'Eine Beschwerde',ic:'📣',
  lines:[{who:'A',de:'Was kann ich für Sie tun?',en:'What can I do for you?'},
         {who:'B',de:'___',en:''},
         {who:'A',de:'Das tut mir leid. Haben Sie die Rechnung dabei?',en:'I’m sorry. Do you have the receipt with you?'},
         {who:'B',de:'Ja, hier ist sie.',en:'Yes, here it is.'}],
  gapAt:1,a:'Ich möchte mich über ein defektes Gerät beschweren.',o:['Ich suche die Toilette.','Ich hätte gern zwei Brötchen.','Ich komme aus Spanien.'],
  ex:'“sich beschweren über” + Akkusativ is the formula for a complaint.'},

 {lv:6,sk:'Discussion',title:'In der Diskussion',ic:'🗣️',
  lines:[{who:'A',de:'Homeoffice senkt die Produktivität — das zeigen mehrere Studien.',en:'Working from home lowers productivity — several studies show that.'},
         {who:'B',de:'___',en:''},
         {who:'A',de:'Da ist etwas dran. Aber wie messen Sie das?',en:'There’s something to that. But how do you measure it?'},
         {who:'B',de:'Anhand der Projektergebnisse, nicht der Anwesenheit.',en:'By project results, not attendance.'}],
  gapAt:1,a:'Das Argument greift meines Erachtens zu kurz — es ignoriert die Pendelzeit.',
  o:['Ich arbeite gern im Garten.','Der Kaffee hier ist sehr gut.','Ich war noch nie im Homeoffice.'],
  ex:'A C1 counter-argument names the weakness of the claim, not just disagreement.'},

 {lv:6,sk:'Discussion',title:'Beim Vorstellungsgespräch',ic:'🤝',
  lines:[{who:'A',de:'Warum haben Sie sich bei uns beworben?',en:'Why did you apply to us?'},
         {who:'B',de:'___',en:''},
         {who:'A',de:'Und wo sehen Sie Ihre Schwächen?',en:'And where do you see your weaknesses?'},
         {who:'B',de:'Ich neige dazu, zu viel selbst erledigen zu wollen.',en:'I tend to want to do too much myself.'}],
  gapAt:1,a:'Weil Ihr Team genau in dem Bereich arbeitet, auf den ich mich spezialisiert habe.',
  o:['Weil ich Geld brauche.','Weil es nah an meiner Wohnung ist.','Weil ich nichts anderes gefunden habe.'],
  ex:'Link your own specialisation to the employer — a relative clause with “auf den” does it elegantly.'},

 {lv:7,sk:'Style',title:'Diplomatisch widersprechen',ic:'♟️',
  lines:[{who:'A',de:'Wir sollten das Projekt sofort einstellen.',en:'We should stop the project immediately.'},
         {who:'B',de:'___',en:''},
         {who:'A',de:'Was schlagen Sie stattdessen vor?',en:'What do you propose instead?'},
         {who:'B',de:'Eine befristete Fortführung mit klaren Kriterien.',en:'A time-limited continuation with clear criteria.'}],
  gapAt:1,a:'So weit würde ich nicht gehen — die Datenlage lässt diesen Schluss kaum zu.',
  o:['Nein, das ist völlig falsch.','Mir ist das ehrlich gesagt Wurst.','Ja, machen wir das.'],
  ex:'“So weit würde ich nicht gehen” softens a hard disagreement — typical C2 hedging.'}
];

/* ===================== short reading texts + comprehension ===================== */
const READING = [
 {lv:3,sk:'Vocabulary',title:'Eine WG-Anzeige',
  text:'Wir sind drei Studenten und suchen eine neue Mitbewohnerin. Das Zimmer ist 14 m² groß, möbliert und kostet 390 Euro warm. Die Wohnung liegt im zweiten Stock, zehn Minuten vom Bahnhof. Wir kochen oft zusammen und putzen nach Plan. Interesse? Schreib uns einfach eine Nachricht!',
  qs:[{q:'Was kostet das Zimmer?',a:'390 Euro, Nebenkosten inklusive',o:['390 Euro plus Nebenkosten','14 Euro','Das steht nicht im Text'],
       ex:'„390 Euro warm“ means the utilities are already included.'},
      {q:'Wie weit ist es zum Bahnhof?',a:'zehn Minuten',o:['zwei Minuten','eine Stunde','direkt daneben'],
       ex:'„zehn Minuten vom Bahnhof“.'}]},

 {lv:4,sk:'Vocabulary',title:'Eine Mail an den Vermieter',
  text:'Sehr geehrter Herr Krüger, seit Montag funktioniert die Heizung in meiner Wohnung nicht mehr. Ich habe bereits zweimal angerufen, konnte Sie aber nicht erreichen. Da es nachts sehr kalt wird, bitte ich Sie, den Schaden bis Ende der Woche beheben zu lassen. Mit freundlichen Grüßen, A. Yildiz',
  qs:[{q:'Was ist das Problem?',a:'Die Heizung ist kaputt.',o:['Die Miete ist zu hoch.','Der Nachbar ist laut.','Das Wasser läuft nicht.'],
       ex:'„die Heizung funktioniert nicht mehr“.'},
      {q:'Was fordert die Mieterin?',a:'eine Reparatur bis Ende der Woche',o:['eine neue Wohnung','weniger Miete','einen Termin nächsten Monat'],
       ex:'„bitte ich Sie, den Schaden bis Ende der Woche beheben zu lassen“.'}]},

 {lv:5,sk:'Vocabulary',title:'Zeitungsmeldung',
  text:'Wegen eines Streiks im Nahverkehr mussten gestern tausende Pendler auf das Auto umsteigen. Die Folge waren kilometerlange Staus im Berufsverkehr. Die Gewerkschaft erklärte, man sei zu weiteren Gesprächen bereit, fordere jedoch eine deutliche Lohnerhöhung. Die Verkehrsbetriebe bezeichneten die Forderung als unrealistisch.',
  qs:[{q:'Warum gab es Staus?',a:'Wegen eines Streiks fuhren mehr Leute Auto.',o:['Wegen eines Unfalls.','Wegen des Wetters.','Wegen einer Baustelle.'],
       ex:'A causal chain: Streik → Umsteigen aufs Auto → Staus.'},
      {q:'„man sei bereit“ — warum steht hier „sei“?',a:'Es ist indirekte Rede (Konjunktiv I).',o:['Es ist ein Tippfehler.','Es ist Passiv.','Es ist Konjunktiv II.'],
       ex:'Reported speech in journalism uses Konjunktiv I to stay neutral.'}]},

 {lv:6,sk:'Style',title:'Aus einem Sachbuch',
  text:'Die seit Jahren steigende Zahl an Fernstudierenden hat die Hochschulen unter Druck gesetzt. Während klassische Präsenzformate nach wie vor geschätzt werden, verlangen Berufstätige zunehmend zeitlich flexible Angebote. Hinsichtlich der Betreuungsqualität bestehen allerdings erhebliche Unterschiede — ein Umstand, der in der öffentlichen Debatte häufig übersehen wird.',
  qs:[{q:'Was ist der Hauptpunkt des Textes?',a:'Flexible Angebote nehmen zu, die Betreuungsqualität schwankt stark.',
       o:['Präsenzstudium wird abgeschafft.','Fernstudium ist immer schlechter.','Hochschulen verlieren Studierende.'],
       ex:'The contrast marked by „allerdings“ carries the main point.'},
      {q:'„die seit Jahren steigende Zahl“ — welche Struktur ist das?',a:'ein erweitertes Partizipialattribut',
       o:['ein Relativsatz','ein Passivsatz','ein Konjunktiv II'],
       ex:'A participle (steigende) with its own modifier (seit Jahren) sitting before the noun.'}]},

 {lv:7,sk:'Style',title:'Kommentar',
  text:'Man kann der Reform kaum vorwerfen, sie sei nicht gut gemeint. Problematisch ist vielmehr, dass ihre Umsetzung denjenigen überlassen bleibt, die am wenigsten Spielraum haben. Wer Verantwortung delegiert, ohne Mittel mitzugeben, verlagert lediglich das Scheitern — und zwar dorthin, wo es am wenigsten sichtbar ist.',
  qs:[{q:'Wie bewertet der Autor die Reform?',a:'gut gemeint, aber in der Umsetzung verfehlt',
       o:['durchweg gelungen','böswillig geplant','technisch unmöglich'],
       ex:'„kaum vorwerfen … nicht gut gemeint“ concedes the intent; „problematisch ist vielmehr“ delivers the criticism.'},
      {q:'Was kritisiert „Verantwortung delegieren, ohne Mittel mitzugeben“?',a:'Pflichten ohne Ressourcen weitergeben',
       o:['zu viel Geld ausgeben','zu wenig delegieren','unklare Gesetze schreiben'],
       ex:'“ohne … zu” marks the missing element: the means.'}]}
];

/* ===================== sort-into-buckets drills ===================== */
/* buckets[] + items[{t, b:bucketIndex}] */
const SORTSET = [
 {lv:2,sk:'Articles',q:'Sort the nouns by their article',buckets:['der','die','das'],
  items:[{t:'Hund',b:0},{t:'Tisch',b:0},{t:'Blume',b:1},{t:'Zeitung',b:1},{t:'Haus',b:2},{t:'Buch',b:2}],
  ex:'Learn every noun with its article from day one — the gender is not guessable from the thing itself.'},
 {lv:2,sk:'Articles',q:'Sort by article — watch the endings',buckets:['der','die','das'],
  items:[{t:'Übung',b:1},{t:'Freiheit',b:1},{t:'Mädchen',b:2},{t:'Zimmer',b:2},{t:'Lehrer',b:0},{t:'Sommer',b:0}],
  ex:'-ung/-heit/-keit → die · -chen/-lein/-ment → das · -er (person/agent)/-ling → mostly der.'},
 {lv:3,sk:'Prepositions',q:'Which case does each preposition take?',buckets:['Akkusativ','Dativ'],
  items:[{t:'für',b:0},{t:'ohne',b:0},{t:'gegen',b:0},{t:'mit',b:1},{t:'bei',b:1},{t:'seit',b:1}],
  ex:'Akk: durch, für, gegen, ohne, um, bis · Dat: aus, bei, mit, nach, seit, von, zu.'},
 {lv:3,sk:'Verbs',q:'haben or sein in the Perfekt?',buckets:['haben','sein'],
  items:[{t:'kaufen',b:0},{t:'lesen',b:0},{t:'arbeiten',b:0},{t:'gehen',b:1},{t:'fahren',b:1},{t:'einschlafen',b:1}],
  ex:'sein for movement and change of state; haben for everything else.'},
 {lv:3,sk:'Verbs',q:'Separable or inseparable prefix?',buckets:['separable','inseparable'],
  items:[{t:'aufstehen',b:0},{t:'anrufen',b:0},{t:'einkaufen',b:0},{t:'verstehen',b:1},{t:'bekommen',b:1},{t:'erklären',b:1}],
  ex:'be-, ge-, er-, ver-, ent-, emp-, miss- are never separable. Stress tells you: AUFstehen vs. verSTEhen.'},
 {lv:4,sk:'Connectors',q:'Where does the verb go after each word?',buckets:['verb last','verb 2nd (inversion)','order unchanged'],
  items:[{t:'weil',b:0},{t:'obwohl',b:0},{t:'deshalb',b:1},{t:'trotzdem',b:1},{t:'und',b:2},{t:'aber',b:2}],
  ex:'Subordinating → last · conjunctional adverb → inversion · coordinating → nothing changes.'},
 {lv:5,sk:'Cases',q:'Which case does each preposition govern?',buckets:['Dativ','Genitiv'],
  items:[{t:'mit',b:0},{t:'nach',b:0},{t:'bei',b:0},{t:'wegen',b:1},{t:'trotz',b:1},{t:'während',b:1}],
  ex:'wegen, trotz, während, statt, aufgrund, innerhalb → Genitiv.'},
 {lv:5,sk:'Verbs',q:'Konjunktiv II or Präteritum?',buckets:['Konjunktiv II','Präteritum'],
  items:[{t:'wäre',b:0},{t:'hätte',b:0},{t:'käme',b:0},{t:'war',b:1},{t:'hatte',b:1},{t:'kam',b:1}],
  ex:'Konjunktiv II of strong verbs = Präteritum stem + Umlaut + -e.'},
 {lv:6,sk:'Style',q:'Formal writing or casual speech?',buckets:['formal','casual'],
  items:[{t:'hinsichtlich',b:0},{t:'infolgedessen',b:0},{t:'nahezu',b:0},{t:'kriegen',b:1},{t:'echt gut',b:1},{t:'halt',b:1}],
  ex:'Keep the registers apart: a Bewerbung needs the left column, a chat with friends the right.'},
 {lv:6,sk:'Passive',q:'Process or state?',buckets:['Vorgangspassiv','Zustandspassiv'],
  items:[{t:'wird geöffnet',b:0},{t:'wurde gebaut',b:0},{t:'ist geschlossen',b:1},{t:'war repariert',b:1}],
  ex:'werden + Partizip II = the action · sein + Partizip II = the resulting state.'},
 {lv:7,sk:'Idioms',q:'Does the idiom sound positive or negative?',buckets:['positive','negative'],
  items:[{t:'Schwein haben',b:0},{t:'über den Berg sein',b:0},{t:'den Nagel auf den Kopf treffen',b:0},
         {t:'ins Fettnäpfchen treten',b:1},{t:'auf dem Holzweg sein',b:1},{t:'die Nase voll haben',b:1}],
  ex:'Idioms carry their own emotional colour — using a negative one by mistake is a classic trap.'},
 {lv:7,sk:'Style',q:'Nominalstil or Verbalstil?',buckets:['Nominalstil','Verbalstil'],
  items:[{t:'nach seiner Ankunft',b:0},{t:'wegen des Regens',b:0},{t:'aufgrund der Verspätung',b:0},
         {t:'nachdem er ankam',b:1},{t:'weil es regnete',b:1},{t:'weil der Zug zu spät war',b:1}],
  ex:'Nominalstil compresses an action into a noun; it dominates official German.'}
];

/* ===================== letter-scramble words ===================== */
const SCRAMBLE = [
  {lv:2,w:'Haus',en:'house',art:'das'},      {lv:2,w:'Apfel',en:'apple',art:'der'},
  {lv:2,w:'Blume',en:'flower',art:'die'},    {lv:2,w:'Brot',en:'bread',art:'das'},
  {lv:2,w:'Schule',en:'school',art:'die'},   {lv:2,w:'Garten',en:'garden',art:'der'},
  {lv:3,w:'Fenster',en:'window',art:'das'},  {lv:3,w:'Bahnhof',en:'station',art:'der'},
  {lv:3,w:'Zeitung',en:'newspaper',art:'die'},{lv:3,w:'Flasche',en:'bottle',art:'die'},
  {lv:3,w:'Schlüssel',en:'key',art:'der'},   {lv:3,w:'Krankenhaus',en:'hospital',art:'das'},
  {lv:4,w:'Entscheidung',en:'decision',art:'die'},{lv:4,w:'Erfahrung',en:'experience',art:'die'},
  {lv:4,w:'Verspätung',en:'delay',art:'die'},{lv:4,w:'Umgebung',en:'surroundings',art:'die'},
  {lv:5,w:'Gesellschaft',en:'society',art:'die'},{lv:5,w:'Verantwortung',en:'responsibility',art:'die'},
  {lv:5,w:'Zusammenhang',en:'connection',art:'der'},{lv:5,w:'Voraussetzung',en:'prerequisite',art:'die'},
  {lv:6,w:'Nachhaltigkeit',en:'sustainability',art:'die'},{lv:6,w:'Wahrscheinlichkeit',en:'probability',art:'die'},
  {lv:6,w:'Auseinandersetzung',en:'dispute',art:'die'},{lv:7,w:'Rücksichtnahme',en:'consideration',art:'die'},
  {lv:7,w:'Unvoreingenommenheit',en:'impartiality',art:'die'}
];

/* ===================== false friends (classic learner traps) ===================== */
const FALSEFRIEND = [
  {de:'aktuell',   looks:'actually',  means:'current, up to date',   right:'eigentlich'},
  {de:'eventuell', looks:'eventually',means:'possibly, maybe',       right:'schließlich'},
  {de:'sensibel',  looks:'sensible',  means:'sensitive',             right:'vernünftig'},
  {de:'bekommen',  looks:'to become', means:'to get, to receive',    right:'werden'},
  {de:'Gift',      looks:'gift',      means:'poison',                right:'das Geschenk'},
  {de:'Rat',       looks:'rat',       means:'advice',                right:'die Ratte'},
  {de:'Chef',      looks:'chef',      means:'boss',                  right:'der Koch'},
  {de:'Gymnasium', looks:'gym',       means:'grammar school',        right:'die Turnhalle'},
  {de:'Handy',     looks:'handy',     means:'mobile phone',          right:'praktisch'},
  {de:'Rock',      looks:'rock',      means:'skirt',                 right:'der Felsen'},
  {de:'blamieren', looks:'to blame',  means:'to embarrass',          right:'beschuldigen'},
  {de:'Fabrik',    looks:'fabric',    means:'factory',               right:'der Stoff'},
  {de:'Kaution',   looks:'caution',   means:'deposit (rent)',        right:'die Vorsicht'},
  {de:'Rente',     looks:'rent',      means:'pension',               right:'die Miete'},
  {de:'spenden',   looks:'to spend',  means:'to donate',             right:'ausgeben'}
];

/* ===================== pronunciation drills ===================== */
const PRONOUN = [
  {de:'ch',  hint:'after a/o/u → harsh “ach”',       words:['Buch','Nacht','doch','suchen']},
  {de:'ch',  hint:'after i/e/ä/ö/ü → soft “ich”',    words:['ich','Milch','Küche','Bücher']},
  {de:'sch', hint:'always “sh”',                      words:['Schule','schön','waschen','Tisch']},
  {de:'st-', hint:'word-initial → “sht”',             words:['Stadt','Straße','Student','stehen']},
  {de:'sp-', hint:'word-initial → “shp”',             words:['sprechen','Sport','spät','Spiel']},
  {de:'v',   hint:'usually “f”',                      words:['Vater','von','vier','verstehen']},
  {de:'w',   hint:'always “v”',                       words:['Wasser','wir','Woche','warum']},
  {de:'z',   hint:'always “ts”',                      words:['Zeit','zehn','Zimmer','zusammen']},
  {de:'ß',   hint:'sharp “ss”, never “z”',            words:['Straße','groß','heiß','Fuß']},
  {de:'ei',  hint:'“eye”',                            words:['ein','mein','Zeit','weiß']},
  {de:'ie',  hint:'long “ee”',                        words:['Liebe','wie','nie','Bier']},
  {de:'eu / äu',hint:'“oy”',                          words:['neu','Leute','Häuser','träumen']},
  {de:'-ig', hint:'word-final → “ich”',               words:['richtig','wichtig','König','billig']},
  {de:'r',   hint:'final -er → a soft “uh”',          words:['Vater','Mutter','besser','Wasser']},
  {de:'h',   hint:'silent after a vowel — it only lengthens it',words:['gehen','sehen','Uhr','Schuhe']}
];

return {SLANG,REDEMITTEL,CONVO,READING,SORTSET,SCRAMBLE,FALSEFRIEND,PRONOUN};
})();
