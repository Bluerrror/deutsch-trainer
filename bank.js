/* Deutsch Trainer — authored, hand-verified question bank.
   Natural sentences, mini-dialogues and common learner traps that complement
   the rule-based generators. Each item:
   {lv:1-5 (A0-B2), sk:skill, s:sentence-with-___ (or big:word), a:answer,
    o:[distractors], ex:explanation, tr:English hint, say:read-aloud text}   */
window.BANKDATA=[

/* ================= A0 (lv 1) — first words & survival ================= */
{lv:1,sk:'Beginner',s:'A: Hallo! Wie ___ es dir?  B: Gut, danke!',a:'geht',o:['gehen','ist','hat'],ex:'“Wie geht es dir?” = How are you?',tr:'How are you?',say:'Wie geht es dir?'},
{lv:1,sk:'Beginner',s:'A: ___ heißt du?  B: Ich heiße Anna.',a:'Wie',o:['Was','Wer','Wo'],ex:'“Wie heißt du?” = What is your name?',tr:'What is your name?',say:'Wie heißt du?'},
{lv:1,sk:'Beginner',s:'A: Woher kommst du?  B: Ich ___ aus Iran.',a:'komme',o:['kommen','kommt','bin'],ex:'ich komme = I come.',tr:'I come from Iran.',say:'Ich komme aus Iran.'},
{lv:1,sk:'Beginner',s:'Danke! — ___ !',a:'Bitte',o:['Tschüss','Hallo','Ja'],ex:'“Bitte” also means “you’re welcome”.',tr:'You’re welcome!',say:'Bitte'},
{lv:1,sk:'Beginner',s:'Am Morgen sagt man: „Guten ___!“',a:'Morgen',o:['Abend','Nacht','Tag'],ex:'Guten Morgen = good morning.',tr:'Good morning!',say:'Guten Morgen'},
{lv:1,sk:'Beginner',s:'Am Abend sagt man: „Guten ___!“',a:'Abend',o:['Morgen','Tag','Nacht'],ex:'Guten Abend = good evening.',tr:'Good evening!',say:'Guten Abend'},
{lv:1,sk:'Beginner',s:'Zum Abschied sagt man oft: „___!“',a:'Tschüss',o:['Hallo','Danke','Bitte'],ex:'Tschüss = bye (informal).',tr:'Bye!',say:'Tschüss'},
{lv:1,sk:'Beginner',s:'Frage: „Sprichst du Deutsch?“  Antwort (nein): „___.“',a:'Nein',o:['Ja','Bitte','Danke'],ex:'Nein = no.',tr:'No.',say:'Nein'},
{lv:1,sk:'Beginner',s:'Ich verstehe das nicht. Können Sie das bitte ___?',a:'wiederholen',o:['essen','schlafen','kaufen'],ex:'wiederholen = to repeat.',tr:'Can you repeat that?',say:'Können Sie das bitte wiederholen?'},
{lv:1,sk:'Beginner',s:'1, 2, 3, 4, ___',a:'fünf',o:['sechs','vier','acht'],ex:'After vier (4) comes fünf (5).',tr:'five',say:'fünf'},
{lv:1,sk:'Beginner',s:'zwei + drei = ___',a:'fünf',o:['vier','sechs','sieben'],ex:'2 + 3 = 5 = fünf.',tr:'five',say:'fünf'},
{lv:1,sk:'Beginner',s:'zehn - vier = ___',a:'sechs',o:['fünf','sieben','acht'],ex:'10 − 4 = 6 = sechs.',tr:'six',say:'sechs'},
{lv:1,sk:'Beginner',s:'Die Sonne ist oft ___.',a:'gelb',o:['blau','schwarz','grün'],ex:'gelb = yellow.',tr:'The sun is often yellow.',say:'gelb'},
{lv:1,sk:'Beginner',s:'Das Gras ist ___.',a:'grün',o:['rot','blau','grau'],ex:'grün = green.',tr:'The grass is green.',say:'grün'},
{lv:1,sk:'Beginner',s:'Der Himmel ist ___.',a:'blau',o:['braun','gelb','rosa'],ex:'blau = blue.',tr:'The sky is blue.',say:'blau'},

/* ================= A1 (lv 2) — everyday sentences ================= */
{lv:2,sk:'Verbs',s:'Ich ___ jeden Morgen einen Kaffee.',a:'trinke',o:['trinkst','trinkt','trinken'],ex:'ich → -e: ich trinke.',tr:'I drink a coffee every morning.',say:'Ich trinke jeden Morgen einen Kaffee.'},
{lv:2,sk:'Verbs',s:'Er ___ gern Fußball.',a:'spielt',o:['spiele','spielst','spielen'],ex:'er → -t: er spielt.',tr:'He likes playing football.',say:'Er spielt gern Fußball.'},
{lv:2,sk:'Verbs',s:'Wir ___ in Berlin.',a:'wohnen',o:['wohnt','wohnst','wohne'],ex:'wir → -en: wir wohnen.',tr:'We live in Berlin.',say:'Wir wohnen in Berlin.'},
{lv:2,sk:'Verbs',s:'___ du gern Musik?',a:'Hörst',o:['Höre','Hört','Hören'],ex:'du → -st: du hörst.',tr:'Do you like listening to music?',say:'Hörst du gern Musik?'},
{lv:2,sk:'Articles',s:'Das ist ___ Mann. Er ist mein Vater.',a:'ein',o:['eine','einen','einem'],ex:'Mann is masculine → ein (Nominativ).',tr:'That is a man.',say:'Das ist ein Mann.'},
{lv:2,sk:'Articles',s:'Ich habe ___ Katze zu Hause.',a:'eine',o:['ein','einen','einem'],ex:'Katze is feminine, Akkusativ → eine.',tr:'I have a cat at home.',say:'Ich habe eine Katze zu Hause.'},
{lv:2,sk:'Articles',s:'___ Buch liegt auf dem Tisch.',a:'Das',o:['Der','Die','Den'],ex:'Buch is neuter → das.',tr:'The book is on the table.',say:'Das Buch liegt auf dem Tisch.'},
{lv:2,sk:'Vocabulary',s:'Ich habe Hunger. Ich möchte etwas ___.',a:'essen',o:['trinken','schlafen','lesen'],ex:'Hunger → essen (to eat).',tr:'I’m hungry, I want to eat.',say:'Ich möchte etwas essen.'},
{lv:2,sk:'Vocabulary',s:'Ich habe Durst. Ich möchte etwas ___.',a:'trinken',o:['essen','kaufen','gehen'],ex:'Durst → trinken (to drink).',tr:'I’m thirsty, I want to drink.',say:'Ich möchte etwas trinken.'},
{lv:2,sk:'Vocabulary',s:'Es ist Nacht. Ich gehe jetzt ___.',a:'schlafen',o:['essen','arbeiten','laufen'],ex:'Night → schlafen (to sleep).',tr:'It’s night, I’m going to sleep.',say:'Ich gehe jetzt schlafen.'},
{lv:2,sk:'Numbers',s:'Ein Tag hat ___ Stunden.',a:'vierundzwanzig',o:['zwölf','sechzig','sieben'],ex:'A day has 24 hours.',tr:'A day has 24 hours.',say:'vierundzwanzig'},
{lv:2,sk:'Numbers',s:'Eine Woche hat ___ Tage.',a:'sieben',o:['fünf','zwölf','dreißig'],ex:'A week has 7 days.',tr:'A week has 7 days.',say:'sieben'},
{lv:2,sk:'Phrases',s:'Im Restaurant: „Die ___, bitte!“ (Sie möchten zahlen)',a:'Rechnung',o:['Speisekarte','Küche','Tür'],ex:'die Rechnung = the bill.',tr:'The bill, please!',say:'Die Rechnung, bitte!'},
{lv:2,sk:'Phrases',s:'Am Telefon: „___, wer ist da?“',a:'Hallo',o:['Tschüss','Danke','Gute Nacht'],ex:'Answering the phone → Hallo.',tr:'Hello, who’s there?',say:'Hallo, wer ist da?'},
{lv:2,sk:'Sentences',s:'Wortstellung: Wähle den richtigen Satz.',big:'',a:'Ich lerne heute Deutsch.',o:['Ich Deutsch lerne heute.','Heute Deutsch ich lerne.','Lerne ich heute Deutsch.'],ex:'The verb is the 2nd element: Ich (1) lerne (2) …',tr:'I am learning German today.',say:'Ich lerne heute Deutsch.'},

/* ================= A2 (lv 3) — cases, modals, daily life ================= */
{lv:3,sk:'Cases',s:'Ich sehe ___ Hund im Park. (Akkusativ, maskulin)',a:'den',o:['der','dem','des'],ex:'sehen + Akkusativ, der→den.',tr:'I see the dog in the park.',say:'Ich sehe den Hund im Park.'},
{lv:3,sk:'Cases',s:'Ich helfe ___ Frau. (Dativ, feminin)',a:'der',o:['die','den','dem'],ex:'helfen + Dativ, die→der.',tr:'I help the woman.',say:'Ich helfe der Frau.'},
{lv:3,sk:'Cases',s:'Ich gebe ___ Kind einen Apfel. (Dativ, neutrum)',a:'dem',o:['das','der','den'],ex:'Indirect object → Dativ, das→dem.',tr:'I give the child an apple.',say:'Ich gebe dem Kind einen Apfel.'},
{lv:3,sk:'Prepositions',s:'Ich fahre ___ dem Bus zur Arbeit.',a:'mit',o:['für','ohne','durch'],ex:'mit + Dativ (means of transport).',tr:'I go to work by bus.',say:'Ich fahre mit dem Bus zur Arbeit.'},
{lv:3,sk:'Prepositions',s:'Das Geschenk ist ___ dich!',a:'für',o:['mit','von','bei'],ex:'für + Akkusativ (for you).',tr:'The gift is for you!',say:'Das Geschenk ist für dich!'},
{lv:3,sk:'Prepositions',s:'Die Katze schläft ___ dem Sofa. (wo? = location)',a:'auf',o:['auf den','über','an'],ex:'Wechselpräposition, location → Dativ: auf dem.',tr:'The cat sleeps on the sofa.',say:'Die Katze schläft auf dem Sofa.'},
{lv:3,sk:'Verbs',s:'___ du mir helfen? Ich finde den Weg nicht.',a:'Kannst',o:['Kann','Könnt','Konntest'],ex:'du + können → kannst.',tr:'Can you help me?',say:'Kannst du mir helfen?'},
{lv:3,sk:'Verbs',s:'Man ___ hier nicht rauchen. Es ist verboten.',a:'darf',o:['muss','kann','will'],ex:'Prohibition → dürfen: man darf nicht.',tr:'You mustn’t smoke here.',say:'Man darf hier nicht rauchen.'},
{lv:3,sk:'Verbs',s:'Ich ___ heute lange arbeiten. Ich habe keine Wahl.',a:'muss',o:['darf','kann','möchte'],ex:'Necessity → müssen: ich muss.',tr:'I have to work late today.',say:'Ich muss heute lange arbeiten.'},
{lv:3,sk:'Verbs',s:'Am Wochenende ___ ich gern lange. (Perfekt hint: schlafen)',a:'schlafe',o:['schlafen','schläfst','geschlafen'],ex:'Present: ich schlafe.',tr:'On weekends I like to sleep in.',say:'Am Wochenende schlafe ich gern lange.'},
{lv:3,sk:'Verbs',s:'Gestern ___ ich einen Film gesehen.',a:'habe',o:['bin','hatte','war'],ex:'sehen → Perfekt with haben: ich habe … gesehen.',tr:'Yesterday I watched a film.',say:'Gestern habe ich einen Film gesehen.'},
{lv:3,sk:'Verbs',s:'Er ___ gestern nach Hause gegangen.',a:'ist',o:['hat','war','wird'],ex:'gehen (motion) → Perfekt with sein: er ist … gegangen.',tr:'He went home yesterday.',say:'Er ist gestern nach Hause gegangen.'},
{lv:3,sk:'Sentences',s:'Verbinde: „Ich bleibe zu Hause, ___ ich krank bin.“',a:'weil',o:['denn ich','dass','wenn'],ex:'Reason with weil → verb at the end (bin).',tr:'I stay home because I’m sick.',say:'Ich bleibe zu Hause, weil ich krank bin.'},
{lv:3,sk:'Sentences',s:'„___ das Wetter schön ist, gehen wir spazieren.“',a:'Wenn',o:['Weil','Dass','Ob'],ex:'Condition → wenn.',tr:'If the weather is nice, we go for a walk.',say:'Wenn das Wetter schön ist, gehen wir spazieren.'},

/* ================= B1 (lv 4) — connectors, past, adjectives ================= */
{lv:4,sk:'Verbs',s:'Als ich klein war, ___ ich jeden Sommer ans Meer.',a:'fuhr',o:['fahre','gefahren','fahren'],ex:'Präteritum of fahren → fuhr.',tr:'When I was little, I went to the sea every summer.',say:'Als ich klein war, fuhr ich jeden Sommer ans Meer.'},
{lv:4,sk:'Verbs',s:'Er sagte, dass er müde ___.',a:'sei',o:['ist','war','wäre'],ex:'Indirect speech → Konjunktiv I: sei.',tr:'He said that he was tired.',say:'Er sagte, dass er müde sei.'},
{lv:4,sk:'Adjectives',s:'Ich möchte den ___ Mantel kaufen. (der rote Mantel, Akkusativ)',a:'roten',o:['rote','roter','rotes'],ex:'After den (der-word, Akk. mask.) → weak -en.',tr:'I’d like to buy the red coat.',say:'Ich möchte den roten Mantel kaufen.'},
{lv:4,sk:'Adjectives',s:'Das ist ein ___ Auto. (ein-word, neutrum, Nom.)',a:'schnelles',o:['schnelle','schneller','schnellen'],ex:'After ein (neuter, Nom.) → mixed -es.',tr:'That’s a fast car.',say:'Das ist ein schnelles Auto.'},
{lv:4,sk:'Adjectives',s:'Mit ___ Wetter macht Wandern mehr Spaß. (gutes Wetter, Dativ)',a:'gutem',o:['gutes','guten','gute'],ex:'No article, Dativ neuter → strong -em: gutem.',tr:'With good weather hiking is more fun.',say:'Mit gutem Wetter macht Wandern mehr Spaß.'},
{lv:4,sk:'Prepositions',s:'Ich warte schon eine Stunde ___ den Bus.',a:'auf',o:['für','an','über'],ex:'warten auf + Akkusativ.',tr:'I’ve been waiting for the bus for an hour.',say:'Ich warte auf den Bus.'},
{lv:4,sk:'Prepositions',s:'Ich interessiere mich sehr ___ Geschichte.',a:'für',o:['auf','an','über'],ex:'sich interessieren für + Akkusativ.',tr:'I’m very interested in history.',say:'Ich interessiere mich für Geschichte.'},
{lv:4,sk:'Prepositions',s:'Ich denke oft ___ meine Familie.',a:'an',o:['auf','für','über'],ex:'denken an + Akkusativ.',tr:'I often think of my family.',say:'Ich denke oft an meine Familie.'},
{lv:4,sk:'Sentences',s:'„Ich weiß nicht, ___ er heute kommt.“ (yes/no)',a:'ob',o:['dass','wenn','weil'],ex:'Indirect yes/no question → ob.',tr:'I don’t know whether he’s coming today.',say:'Ich weiß nicht, ob er heute kommt.'},
{lv:4,sk:'Sentences',s:'Der Mann, ___ dort steht, ist mein Lehrer.',a:'der',o:['den','dem','das'],ex:'Relative pronoun, subject, masculine → der.',tr:'The man standing there is my teacher.',say:'Der Mann, der dort steht, ist mein Lehrer.'},
{lv:4,sk:'Adjectives',s:'München ist ___ als Hamburg? Nein, kleiner.',a:'größer',o:['groß','am größten','mehr groß'],ex:'Comparative of groß → größer.',tr:'Is Munich bigger than Hamburg?',say:'München ist größer als Hamburg.'},

/* ================= B2 (lv 5) — nuance, Konjunktiv, style ================= */
{lv:5,sk:'Verbs',s:'Wenn ich Zeit hätte, ___ ich mehr reisen.',a:'würde',o:['werde','wurde','will'],ex:'Konjunktiv II (unreal) → würde + Infinitiv.',tr:'If I had time, I’d travel more.',say:'Wenn ich Zeit hätte, würde ich mehr reisen.'},
{lv:5,sk:'Verbs',s:'An deiner Stelle ___ ich zum Arzt gehen.',a:'würde',o:['werde','bin','hätte'],ex:'Giving advice → würde + Infinitiv.',tr:'In your place I’d see a doctor.',say:'An deiner Stelle würde ich zum Arzt gehen.'},
{lv:5,sk:'Verbs',s:'Das Haus ___ 1920 gebaut. (Passiv, Vergangenheit)',a:'wurde',o:['ist','hat','war'],ex:'Passive past → wurde + Partizip II.',tr:'The house was built in 1920.',say:'Das Haus wurde 1920 gebaut.'},
{lv:5,sk:'Verbs',s:'Ich hätte gestern gern geholfen, aber ich ___ keine Zeit.',a:'hatte',o:['habe','hätte','bin'],ex:'Real past fact → Präteritum: ich hatte.',tr:'I’d have liked to help yesterday, but I had no time.',say:'Ich hatte keine Zeit.'},
{lv:5,sk:'Sentences',s:'„___ es regnete, gingen wir spazieren.“ (concession)',a:'Obwohl',o:['Weil','Damit','Indem'],ex:'Concession → obwohl (although).',tr:'Although it was raining, we went for a walk.',say:'Obwohl es regnete, gingen wir spazieren.'},
{lv:5,sk:'Sentences',s:'Ich lerne Deutsch, ___ ich in Deutschland arbeiten kann. (purpose)',a:'damit',o:['weil','obwohl','sodass'],ex:'Purpose → damit.',tr:'I learn German so that I can work in Germany.',say:'Ich lerne Deutsch, damit ich in Deutschland arbeiten kann.'},
{lv:5,sk:'Prepositions',s:'___ des schlechten Wetters fand das Fest statt. (trotz + Genitiv)',a:'Trotz',o:['Wegen','Während','Statt'],ex:'trotz + Genitiv = despite.',tr:'Despite the bad weather, the party took place.',say:'Trotz des schlechten Wetters fand das Fest statt.'},
{lv:5,sk:'Prepositions',s:'___ des Regens sind wir zu Hause geblieben. (reason + Genitiv)',a:'Wegen',o:['Trotz','Ohne','Für'],ex:'wegen + Genitiv = because of.',tr:'Because of the rain we stayed home.',say:'Wegen des Regens sind wir zu Hause geblieben.'},
{lv:5,sk:'Adjectives',s:'Das ist das ___ Buch, das ich je gelesen habe.',a:'beste',o:['gute','besser','am besten'],ex:'Superlative before a noun → das beste.',tr:'That’s the best book I’ve ever read.',say:'Das ist das beste Buch, das ich je gelesen habe.'},
{lv:5,sk:'Verbs',s:'Er tut so, ___ ob er alles wüsste.',a:'als',o:['dass','wenn','wie'],ex:'“als ob” + Konjunktiv = as if.',tr:'He acts as if he knew everything.',say:'Er tut so, als ob er alles wüsste.'}

];
