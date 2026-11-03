/* Deutsch Trainer — Goethe-aligned vocabulary pack.
   Organised the way the Goethe-Zertifikat Wortlisten are: by level and by
   thematic field (Person, Wohnen, Arbeit, Gesundheit, Behörden, Medien,
   Umwelt, Bildung, Gesellschaft …), extended through B2/C1/C2 with the
   abstract vocabulary those exams expect. Original wording throughout.
   Shape matches EXTRA_VOCAB so index.html merges it with dedup;
   `lv` = 2 A1 · 3 A2 · 4 B1 · 5 B2 · 6 C1 · 7 C2                        */
window.GOETHE_VOCAB = (function(){
const nouns=[],verbs=[],adjs=[],phrases=[];
const N=(de,en,g,pl,lv)=>nouns.push({de,en,g,pl,lv});
const V=(inf,en,pp,pt,lv,extra)=>verbs.push(Object.assign({inf,en,pp,pt,lv},extra||{}));
const A=(de,en,lv,opp)=>adjs.push(opp?{de,en,lv,opp}:{de,en,lv});
const P=(de,en,lv)=>phrases.push({de,en,lv});

/* ═══════════════ A1 — Person, Familie, Alltag ═══════════════ */
N('Vorname','first name','m','Vornamen',2);      N('Nachname','surname','m','Nachnamen',2);
N('Familienname','family name','m','Familiennamen',2); N('Geburtsort','place of birth','m','Geburtsorte',2);
N('Geburtsdatum','date of birth','n','Geburtsdaten',2); N('Anschrift','address','f','Anschriften',2);
N('Postleitzahl','postcode','f','Postleitzahlen',2); N('Hausnummer','house number','f','Hausnummern',2);
N('Staatsangehörigkeit','nationality','f','Staatsangehörigkeiten',2);
N('Personalausweis','ID card','m','Personalausweise',2); N('Reisepass','passport','m','Reisepässe',2);
N('Unterschrift','signature','f','Unterschriften',2); N('Formular','form','n','Formulare',2);
N('Ehefrau','wife','f','Ehefrauen',2);           N('Ehemann','husband','m','Ehemänner',2);
N('Enkel','grandchild','m','Enkel',2);           N('Nichte','niece','f','Nichten',2);
N('Neffe','nephew','m','Neffen',2);              N('Verwandte','relative','f','Verwandten',2);
N('Nachbarin','neighbour (f)','f','Nachbarinnen',2); N('Kollegin','colleague (f)','f','Kolleginnen',2);
N('Freundin','girlfriend / friend (f)','f','Freundinnen',2);
N('Hochzeit','wedding','f','Hochzeiten',2);      N('Geburtstag','birthday','m','Geburtstage',2);
N('Termin','appointment','m','Termine',2);       N('Uhrzeit','time of day','f','Uhrzeiten',2);
N('Vormittag','morning (before noon)','m','Vormittage',2); N('Nachmittag','afternoon','m','Nachmittage',2);
N('Mitternacht','midnight','f',null,2);          N('Viertelstunde','quarter of an hour','f','Viertelstunden',2);
N('Feiertag','public holiday','m','Feiertage',2);N('Jahreszeit','season','f','Jahreszeiten',2);

/* A1 — Wohnen */
N('Miete','rent','f','Mieten',2);                N('Vermieter','landlord','m','Vermieter',2);
N('Mieter','tenant','m','Mieter',2);             N('Erdgeschoss','ground floor','n','Erdgeschosse',2);
N('Stock','floor, storey','m','Stockwerke',2);   N('Aufzug','lift','m','Aufzüge',2);
N('Treppe','stairs','f','Treppen',2);            N('Keller','cellar','m','Keller',2);
N('Balkon','balcony','m','Balkone',2);           N('Flur','hallway','m','Flure',2);
N('Heizung','heating','f','Heizungen',2);        N('Waschmaschine','washing machine','f','Waschmaschinen',2);
N('Kühlschrank','fridge','m','Kühlschränke',2);  N('Herd','stove','m','Herde',2);
N('Geschirr','dishes','n',null,2);               N('Handtuch','towel','n','Handtücher',2);
N('Kissen','pillow','n','Kissen',2);             N('Decke','blanket / ceiling','f','Decken',2);
N('Schrank','cupboard','m','Schränke',2);        N('Teppich','carpet','m','Teppiche',2);
N('Steckdose','socket','f','Steckdosen',2);      N('Schlüssel','key','m','Schlüssel',2);
N('Mülltonne','bin','f','Mülltonnen',2);         N('Garage','garage','f','Garagen',2);

/* A1 — Essen & Einkaufen */
N('Bäckerei','bakery','f','Bäckereien',2);       N('Metzgerei','butcher’s','f','Metzgereien',2);
N('Markt','market','m','Märkte',2);              N('Kasse','checkout','f','Kassen',2);
N('Quittung','receipt','f','Quittungen',2);      N('Tüte','bag','f','Tüten',2);
N('Preis','price','m','Preise',2);               N('Angebot','special offer','n','Angebote',2);
N('Rabatt','discount','m','Rabatte',2);          N('Pfand','deposit (bottles)','n',null,2);
N('Scheibe','slice','f','Scheiben',2);           N('Packung','pack','f','Packungen',2);
N('Löffel','spoon','m','Löffel',2);              N('Gabel','fork','f','Gabeln',2);
N('Messer','knife','n','Messer',2);              N('Teller','plate','m','Teller',2);
N('Tasse','cup','f','Tassen',2);                 N('Glas','glass','n','Gläser',2);
N('Zwiebel','onion','f','Zwiebeln',2);           N('Kartoffel','potato','f','Kartoffeln',2);
N('Möhre','carrot','f','Möhren',2);              N('Gurke','cucumber','f','Gurken',2);
N('Nudeln','pasta','p','Nudeln',2);              N('Reis','rice','m',null,2);
N('Joghurt','yoghurt','m','Joghurts',2);         N('Quark','curd cheese','m',null,2);
N('Marmelade','jam','f','Marmeladen',2);         N('Honig','honey','m',null,2);
N('Sahne','cream','f',null,2);                   N('Essig','vinegar','m',null,2);
N('Gewürz','spice','n','Gewürze',2);             N('Beilage','side dish','f','Beilagen',2);
N('Nachtisch','dessert','m','Nachtische',2);     N('Vorspeise','starter','f','Vorspeisen',2);
N('Hauptgericht','main course','n','Hauptgerichte',2); N('Speisekarte','menu','f','Speisekarten',2);
N('Trinkgeld','tip','n','Trinkgelder',2);        N('Rechnung','bill','f','Rechnungen',2);

/* A1 verbs */
V('buchstabieren','to spell','buchstabiert','buchstabierte',2);
V('ausfüllen','to fill in','ausgefüllt','füllte aus',2);
V('unterschreiben','to sign','unterschrieben','unterschrieb',2);
V('wiederholen','to repeat','wiederholt','wiederholte',2);
V('bezahlen','to pay','bezahlt','bezahlte',2);
V('kosten','to cost','gekostet','kostete',2);
V('mitbringen','to bring along','mitgebracht','brachte mit',2);
V('aufräumen','to tidy up','aufgeräumt','räumte auf',2);
V('putzen','to clean','geputzt','putzte',2);
V('spülen','to wash up','gespült','spülte',2);
V('kochen','to cook','gekocht','kochte',2);
V('backen','to bake','gebacken','backte',2);
V('schneiden','to cut','geschnitten','schnitt',2);
V('probieren','to try, taste','probiert','probierte',2);
V('frühstücken','to have breakfast','gefrühstückt','frühstückte',2);
V('einladen','to invite','eingeladen','lud ein',2,{du:'lädst ein',er:'lädt ein'});
V('anrufen','to call','angerufen','rief an',2);
V('abholen','to pick up','abgeholt','holte ab',2);
V('mitkommen','to come along','mitgekommen','kam mit',2,{aux:'sein'});
V('zurückkommen','to come back','zurückgekommen','kam zurück',2,{aux:'sein'});

/* A1 adjectives & phrases */
A('verheiratet','married',2,'ledig');  A('ledig','single',2,'verheiratet');
A('geschieden','divorced',2);          A('berufstätig','employed, working',2);
A('müde','tired',2,'wach');            A('wach','awake',2,'müde');
A('satt','full (not hungry)',2,'hungrig'); A('durstig','thirsty',2);
A('lecker','delicious',2);             A('frisch','fresh',2);
A('günstig','cheap, good value',2,'teuer'); A('preiswert','reasonably priced',2);
P('Wie schreibt man das?','How do you spell that?',2);
P('Können Sie das bitte buchstabieren?','Could you spell that, please?',2);
P('Ich verstehe das nicht.','I don’t understand that.',2);
P('Sprechen Sie bitte langsamer.','Please speak more slowly.',2);
P('Wie heißt das auf Deutsch?','What is that called in German?',2);
P('Entschuldigung, wie komme ich zum Bahnhof?','Excuse me, how do I get to the station?',2);
P('Ich hätte gern einen Kaffee.','I would like a coffee.',2);
P('Zusammen oder getrennt?','Together or separately?',2);
P('Stimmt so, danke.','Keep the change, thanks.',2);
P('Ich bin zum ersten Mal hier.','This is my first time here.',2);

/* ═══════════════ A2 — Arbeit, Gesundheit, Reisen ═══════════════ */
N('Arbeitsplatz','workplace','m','Arbeitsplätze',3); N('Arbeitgeber','employer','m','Arbeitgeber',3);
N('Arbeitnehmer','employee','m','Arbeitnehmer',3);   N('Abteilung','department','f','Abteilungen',3);
N('Chefin','boss (f)','f','Chefinnen',3);            N('Gehalt','salary','n','Gehälter',3);
N('Lohn','wage','m','Löhne',3);                      N('Vollzeit','full-time','f',null,3);
N('Teilzeit','part-time','f',null,3);                N('Überstunde','overtime hour','f','Überstunden',3);
N('Pause','break','f','Pausen',3);                   N('Feierabend','end of the working day','m',null,3);
N('Urlaub','holiday','m','Urlaube',3);               N('Krankmeldung','sick note','f','Krankmeldungen',3);
N('Bewerbung','application','f','Bewerbungen',3);    N('Lebenslauf','CV','m','Lebensläufe',3);
N('Vorstellungsgespräch','job interview','n','Vorstellungsgespräche',3);
N('Praktikum','internship','n','Praktika',3);        N('Ausbildung','vocational training','f','Ausbildungen',3);
N('Zeugnis','certificate, report','n','Zeugnisse',3);N('Vertrag','contract','m','Verträge',3);
N('Kündigung','notice, termination','f','Kündigungen',3);
N('Besprechung','meeting','f','Besprechungen',3);    N('Kunde','customer','m','Kunden',3);
N('Schicht','shift','f','Schichten',3);              N('Werkstatt','workshop','f','Werkstätten',3);

/* A2 — Gesundheit */
N('Gesundheit','health','f',null,3);                 N('Krankheit','illness','f','Krankheiten',3);
N('Beschwerden','symptoms','p','Beschwerden',3);     N('Schmerz','pain','m','Schmerzen',3);
N('Fieber','fever','n',null,3);                      N('Husten','cough','m',null,3);
N('Schnupfen','a cold','m',null,3);                  N('Erkältung','cold','f','Erkältungen',3);
N('Grippe','flu','f','Grippen',3);                   N('Allergie','allergy','f','Allergien',3);
N('Verletzung','injury','f','Verletzungen',3);        N('Unfall','accident','m','Unfälle',3);
N('Notaufnahme','emergency room','f','Notaufnahmen',3); N('Krankenkasse','health insurer','f','Krankenkassen',3);
N('Versicherungskarte','insurance card','f','Versicherungskarten',3);
N('Rezept','prescription / recipe','n','Rezepte',3); N('Medikament','medication','n','Medikamente',3);
N('Tablette','tablet','f','Tabletten',3);            N('Salbe','ointment','f','Salben',3);
N('Impfung','vaccination','f','Impfungen',3);         N('Operation','operation','f','Operationen',3);
N('Behandlung','treatment','f','Behandlungen',3);     N('Facharzt','specialist','m','Fachärzte',3);
N('Wartezimmer','waiting room','n','Wartezimmer',3); N('Sprechstunde','consultation hours','f','Sprechstunden',3);

/* A2 — Reisen & Verkehr */
N('Fahrkarte','ticket','f','Fahrkarten',3);           N('Fahrplan','timetable','m','Fahrpläne',3);
N('Gleis','platform, track','n','Gleise',3);          N('Haltestelle','stop','f','Haltestellen',3);
N('Verspätung','delay','f','Verspätungen',3);          N('Anschluss','connection','m','Anschlüsse',3);
N('Umstieg','change (of train)','m','Umstiege',3);     N('Rückfahrt','return trip','f','Rückfahrten',3);
N('Hinfahrt','outward trip','f','Hinfahrten',3);       N('Strecke','route','f','Strecken',3);
N('Entfernung','distance','f','Entfernungen',3);       N('Richtung','direction','f','Richtungen',3);
N('Kreuzung','crossroads','f','Kreuzungen',3);         N('Ampel','traffic light','f','Ampeln',3);
N('Parkplatz','parking space','m','Parkplätze',3);     N('Führerschein','driving licence','m','Führerscheine',3);
N('Tankstelle','petrol station','f','Tankstellen',3);  N('Panne','breakdown','f','Pannen',3);
N('Stau','traffic jam','m','Staus',3);                 N('Unterkunft','accommodation','f','Unterkünfte',3);
N('Ferienwohnung','holiday flat','f','Ferienwohnungen',3); N('Jugendherberge','youth hostel','f','Jugendherbergen',3);
N('Empfang','reception','m',null,3);                   N('Aussicht','view','f','Aussichten',3);
N('Sehenswürdigkeit','sight','f','Sehenswürdigkeiten',3); N('Ausflug','excursion','m','Ausflüge',3);
N('Gepäck','luggage','n',null,3);                      N('Koffer','suitcase','m','Koffer',3);

/* A2 verbs */
V('sich bewerben','to apply','beworben','bewarb',3,{du:'bewirbst dich',er:'bewirbt sich'});
V('verdienen','to earn','verdient','verdiente',3);
V('kündigen','to give notice','gekündigt','kündigte',3);
V('einstellen','to hire, to set','eingestellt','stellte ein',3);
V('vereinbaren','to arrange','vereinbart','vereinbarte',3);
V('verschieben','to postpone','verschoben','verschob',3);
V('absagen','to cancel','abgesagt','sagte ab',3);
V('zusagen','to accept, confirm','zugesagt','sagte zu',3);
V('untersuchen','to examine','untersucht','untersuchte',3);
V('verschreiben','to prescribe','verschrieben','verschrieb',3);
V('wehtun','to hurt','wehgetan','tat weh',3);
V('sich erholen','to recover','erholt','erholte',3);
V('sich verletzen','to injure oneself','verletzt','verletzte',3);
V('umsteigen','to change (trains)','umgestiegen','stieg um',3,{aux:'sein'});
V('abfahren','to depart','abgefahren','fuhr ab',3,{aux:'sein'});
V('ankommen','to arrive','angekommen','kam an',3,{aux:'sein'});
V('reservieren','to reserve','reserviert','reservierte',3);
V('übernachten','to stay overnight','übernachtet','übernachtete',3);
V('besichtigen','to visit, view','besichtigt','besichtigte',3);
V('sich beschweren','to complain','beschwert','beschwerte',3);
V('empfehlen','to recommend','empfohlen','empfahl',3,{du:'empfiehlst',er:'empfiehlt'});
V('vergleichen','to compare','verglichen','verglich',3);
V('entscheiden','to decide','entschieden','entschied',3);
V('erklären','to explain','erklärt','erklärte',3);
V('beschreiben','to describe','beschrieben','beschrieb',3);
V('erzählen','to tell','erzählt','erzählte',3);
V('erreichen','to reach','erreicht','erreichte',3);
V('versuchen','to try','versucht','versuchte',3);
V('schaffen','to manage, achieve','geschafft','schaffte',3);
V('aufhören','to stop','aufgehört','hörte auf',3);

/* A2 adjectives & phrases */
A('pünktlich','punctual',3,'unpünktlich');  A('zuverlässig','reliable',3);
A('höflich','polite',3,'unhöflich');        A('geduldig','patient',3,'ungeduldig');
A('neugierig','curious',3);                 A('ordentlich','tidy',3,'unordentlich');
A('aufmerksam','attentive',3);              A('vorsichtig','careful',3);
A('erfolgreich','successful',3);            A('arbeitslos','unemployed',3);
A('krankgeschrieben','signed off sick',3);  A('erschöpft','exhausted',3);
A('gesund','healthy',3,'krank');            A('schwindlig','dizzy',3);
A('kostenlos','free of charge',3);          A('inklusive','included',3);
A('besetzt','occupied, engaged',3,'frei');  A('ausgebucht','fully booked',3);
P('Ich möchte einen Termin vereinbaren.','I’d like to make an appointment.',3);
P('Könnten Sie das bitte wiederholen?','Could you repeat that, please?',3);
P('Wie lange dauert das?','How long does that take?',3);
P('Muss ich umsteigen?','Do I have to change?',3);
P('Von welchem Gleis fährt der Zug?','Which platform does the train leave from?',3);
P('Ich habe seit drei Tagen Fieber.','I have had a fever for three days.',3);
P('Nehmen Sie regelmäßig Medikamente?','Do you take medication regularly?',3);
P('Ich bin krankgeschrieben.','I am signed off sick.',3);
P('Das passt mir gut.','That suits me well.',3);
P('Das kommt für mich nicht infrage.','That is out of the question for me.',3);
P('Ich kümmere mich darum.','I’ll take care of it.',3);
P('Darf ich Ihnen eine Frage stellen?','May I ask you a question?',3);

/* ═══════════════ B1 — Behörden, Medien, Umwelt, Bildung ═══════════════ */
N('Behörde','public authority','f','Behörden',4);     N('Amt','office, authority','n','Ämter',4);
N('Einwohnermeldeamt','registration office','n','Einwohnermeldeämter',4);
N('Ausländerbehörde','immigration office','f','Ausländerbehörden',4);
N('Antrag','application','m','Anträge',4);            N('Genehmigung','permit','f','Genehmigungen',4);
N('Bescheinigung','certificate, confirmation','f','Bescheinigungen',4);
N('Unterlagen','documents','p','Unterlagen',4);        N('Frist','deadline','f','Fristen',4);
N('Gebühr','fee','f','Gebühren',4);                    N('Steuer','tax','f','Steuern',4);
N('Beitrag','contribution, fee','m','Beiträge',4);     N('Versicherung','insurance','f','Versicherungen',4);
N('Vollmacht','power of attorney','f','Vollmachten',4);N('Nachweis','proof','m','Nachweise',4);
N('Anmeldung','registration','f','Anmeldungen',4);     N('Abmeldung','deregistration','f','Abmeldungen',4);
N('Aufenthaltstitel','residence permit','m','Aufenthaltstitel',4);
N('Zuständigkeit','responsibility, jurisdiction','f','Zuständigkeiten',4);
N('Sachbearbeiter','case worker','m','Sachbearbeiter',4);
N('Widerspruch','objection','m','Widersprüche',4);     N('Bescheid','official decision','m','Bescheide',4);

/* B1 — Medien & Kommunikation */
N('Nachricht','message, news item','f','Nachrichten',4); N('Sendung','broadcast','f','Sendungen',4);
N('Zuschauer','viewer','m','Zuschauer',4);              N('Leser','reader','m','Leser',4);
N('Schlagzeile','headline','f','Schlagzeilen',4);        N('Artikel','article','m','Artikel',4);
N('Bericht','report','m','Berichte',4);                  N('Meldung','news report','f','Meldungen',4);
N('Quelle','source','f','Quellen',4);                    N('Werbung','advertising','f',null,4);
N('Beitrag','post, contribution','m','Beiträge',4);      N('Kommentar','comment','m','Kommentare',4);
N('Umfrage','survey','f','Umfragen',4);                  N('Statistik','statistics','f','Statistiken',4);
N('Veröffentlichung','publication','f','Veröffentlichungen',4);
N('Datenschutz','data protection','m',null,4);           N('Passwort','password','n','Passwörter',4);
N('Benutzerkonto','user account','n','Benutzerkonten',4);N('Anwendung','application, app','f','Anwendungen',4);
N('Bildschirm','screen','m','Bildschirme',4);            N('Netzwerk','network','n','Netzwerke',4);
N('Verbindung','connection','f','Verbindungen',4);       N('Störung','disruption','f','Störungen',4);

/* B1 — Umwelt */
N('Umwelt','environment','f',null,4);                    N('Umweltschutz','environmental protection','m',null,4);
N('Klimawandel','climate change','m',null,4);            N('Klima','climate','n',null,4);
N('Luftverschmutzung','air pollution','f',null,4);       N('Abfall','waste','m','Abfälle',4);
N('Mülltrennung','waste separation','f',null,4);         N('Verpackung','packaging','f','Verpackungen',4);
N('Rohstoff','raw material','m','Rohstoffe',4);          N('Energie','energy','f','Energien',4);
N('Strom','electricity','m',null,4);                     N('Kohle','coal','f',null,4);
N('Windkraft','wind power','f',null,4);                  N('Solaranlage','solar system','f','Solaranlagen',4);
N('Verbrauch','consumption','m',null,4);                 N('Einsparung','saving','f','Einsparungen',4);
N('Art','species, kind','f','Arten',4);                  N('Lebensraum','habitat','m','Lebensräume',4);
N('Hochwasser','flooding','n',null,4);                   N('Dürre','drought','f','Dürren',4);
N('Folge','consequence','f','Folgen',4);                 N('Maßnahme','measure','f','Maßnahmen',4);

/* B1 — Bildung */
N('Bildung','education','f',null,4);                     N('Hochschule','university, college','f','Hochschulen',4);
N('Studiengang','degree programme','m','Studiengänge',4);N('Vorlesung','lecture','f','Vorlesungen',4);
N('Seminar','seminar','n','Seminare',4);                 N('Prüfung','exam','f','Prüfungen',4);
N('Note','grade','f','Noten',4);                          N('Abschluss','degree, completion','m','Abschlüsse',4);
N('Stipendium','scholarship','n','Stipendien',4);        N('Kenntnisse','knowledge, skills','p','Kenntnisse',4);
N('Fähigkeit','ability','f','Fähigkeiten',4);            N('Fortschritt','progress','m','Fortschritte',4);
N('Wiederholung','repetition','f','Wiederholungen',4);   N('Aufgabe','task','f','Aufgaben',4);
N('Lösung','solution','f','Lösungen',4);                  N('Fehler','mistake','m','Fehler',4);
N('Erklärung','explanation','f','Erklärungen',4);        N('Beispiel','example','n','Beispiele',4);
N('Weiterbildung','further training','f','Weiterbildungen',4);
N('Teilnehmer','participant','m','Teilnehmer',4);

/* B1 verbs */
V('beantragen','to apply for','beantragt','beantragte',4);
V('genehmigen','to approve','genehmigt','genehmigte',4);
V('ablehnen','to reject','abgelehnt','lehnte ab',4);
V('einreichen','to submit','eingereicht','reichte ein',4);
V('bestätigen','to confirm','bestätigt','bestätigte',4);
V('mitteilen','to inform','mitgeteilt','teilte mit',4);
V('informieren','to inform','informiert','informierte',4);
V('hinweisen','to point out','hingewiesen','wies hin',4);
V('berücksichtigen','to take into account','berücksichtigt','berücksichtigte',4);
V('voraussetzen','to presuppose','vorausgesetzt','setzte voraus',4);
V('ermöglichen','to make possible','ermöglicht','ermöglichte',4);
V('verursachen','to cause','verursacht','verursachte',4);
V('vermeiden','to avoid','vermieden','vermied',4);
V('verringern','to reduce','verringert','verringerte',4);
V('zunehmen','to increase','zugenommen','nahm zu',4);
V('abnehmen','to decrease','abgenommen','nahm ab',4);
V('steigen','to rise','gestiegen','stieg',4,{aux:'sein'});
V('sinken','to fall','gesunken','sank',4,{aux:'sein'});
V('sich entwickeln','to develop','entwickelt','entwickelte',4);
V('vergleichen','to compare','verglichen','verglich',4);
V('behaupten','to claim','behauptet','behauptete',4);
V('bezweifeln','to doubt','bezweifelt','bezweifelte',4);
V('zustimmen','to agree','zugestimmt','stimmte zu',4);
V('widersprechen','to contradict','widersprochen','widersprach',4);
V('begründen','to justify','begründet','begründete',4);
V('zusammenfassen','to summarise','zusammengefasst','fasste zusammen',4);
V('sich beziehen','to refer','bezogen','bezog',4);
V('betreffen','to concern','betroffen','betraf',4);
V('bestehen','to consist, to pass','bestanden','bestand',4);
V('teilnehmen','to take part','teilgenommen','nahm teil',4);
V('sich gewöhnen','to get used to','gewöhnt','gewöhnte',4);
V('verzichten','to do without','verzichtet','verzichtete',4);
V('sich lohnen','to be worth it','gelohnt','lohnte',4);
V('gelten','to be valid','gegolten','galt',4,{du:'giltst',er:'gilt'});
V('vorschlagen','to suggest','vorgeschlagen','schlug vor',4,{du:'schlägst vor',er:'schlägt vor'});

/* B1 adjectives & phrases */
A('zuständig','responsible, in charge',4);     A('gültig','valid',4,'ungültig');
A('erforderlich','required',4);                A('möglich','possible',4,'unmöglich');
A('wahrscheinlich','probable',4,'unwahrscheinlich');
A('deutlich','clear, marked',4);               A('erheblich','considerable',4);
A('umstritten','controversial',4);             A('eindeutig','unambiguous',4);
A('sinnvoll','sensible',4,'sinnlos');          A('nachhaltig','sustainable',4);
A('umweltfreundlich','eco-friendly',4);        A('sparsam','economical',4);
A('verantwortlich','responsible',4);           A('abhängig','dependent',4,'unabhängig');
A('üblich','usual',4,'ungewöhnlich');          A('ausreichend','sufficient',4);
A('verständlich','understandable',4);          A('überzeugend','convincing',4);
A('vorläufig','provisional',4);                A('endgültig','final',4);
P('Ich rufe wegen des Termins an.','I’m calling about the appointment.',4);
P('Welche Unterlagen brauche ich?','Which documents do I need?',4);
P('Bis wann muss ich das einreichen?','By when do I have to submit this?',4);
P('Dafür bin ich nicht zuständig.','That’s not my area of responsibility.',4);
P('Meiner Meinung nach ist das übertrieben.','In my opinion that is exaggerated.',4);
P('Da stimme ich dir völlig zu.','I completely agree with you.',4);
P('Da bin ich anderer Meinung.','I disagree there.',4);
P('Ein wichtiger Grund dafür ist, dass …','An important reason for that is that …',4);
P('Das hängt davon ab, ob …','That depends on whether …',4);
P('Das kommt darauf an.','That depends.',4);
P('Es lohnt sich auf jeden Fall.','It is definitely worth it.',4);
P('Ich würde vorschlagen, dass wir …','I would suggest that we …',4);

/* ═══════════════ B2 — Gesellschaft, Wirtschaft, Arbeit ═══════════════ */
N('Gesellschaft','society','f','Gesellschaften',5);   N('Entwicklung','development','f','Entwicklungen',5);
N('Zusammenhang','connection, context','m','Zusammenhänge',5);
N('Voraussetzung','prerequisite','f','Voraussetzungen',5);
N('Auswirkung','effect','f','Auswirkungen',5);        N('Ursache','cause','f','Ursachen',5);
N('Verhältnis','ratio, relationship','n','Verhältnisse',5);
N('Anteil','share, proportion','m','Anteile',5);      N('Zunahme','increase','f','Zunahmen',5);
N('Rückgang','decline','m','Rückgänge',5);            N('Durchschnitt','average','m',null,5);
N('Tendenz','trend','f','Tendenzen',5);               N('Herausforderung','challenge','f','Herausforderungen',5);
N('Chance','opportunity','f','Chancen',5);            N('Risiko','risk','n','Risiken',5);
N('Nachteil','disadvantage','m','Nachteile',5);       N('Vorteil','advantage','m','Vorteile',5);
N('Gleichberechtigung','equal rights','f',null,5);    N('Vielfalt','diversity','f',null,5);
N('Integration','integration','f',null,5);            N('Vorurteil','prejudice','n','Vorurteile',5);
N('Benachteiligung','disadvantaging','f','Benachteiligungen',5);
N('Wohlstand','prosperity','m',null,5);               N('Armut','poverty','f',null,5);
N('Rente','pension','f','Renten',5);                  N('Pflege','care','f',null,5);
N('Betreuung','support, childcare','f',null,5);       N('Wohnungsmarkt','housing market','m','Wohnungsmärkte',5);
N('Wirtschaft','economy','f',null,5);                 N('Unternehmen','company','n','Unternehmen',5);
N('Branche','industry, sector','f','Branchen',5);     N('Gewinn','profit','m','Gewinne',5);
N('Verlust','loss','m','Verluste',5);                 N('Umsatz','turnover','m','Umsätze',5);
N('Kosten','costs','p','Kosten',5);                   N('Investition','investment','f','Investitionen',5);
N('Fachkräftemangel','skilled-worker shortage','m',null,5);
N('Arbeitsmarkt','labour market','m','Arbeitsmärkte',5);
N('Gewerkschaft','trade union','f','Gewerkschaften',5);N('Streik','strike','m','Streiks',5);
N('Tarifvertrag','collective agreement','m','Tarifverträge',5);
N('Digitalisierung','digitalisation','f',null,5);     N('Automatisierung','automation','f',null,5);
N('Produktivität','productivity','f',null,5);          N('Flexibilität','flexibility','f',null,5);
N('Vereinbarkeit','compatibility (work & family)','f',null,5);
N('Bürokratie','bureaucracy','f',null,5);              N('Reform','reform','f','Reformen',5);
N('Gesetz','law','n','Gesetze',5);                     N('Verordnung','regulation','f','Verordnungen',5);
N('Verpflichtung','obligation','f','Verpflichtungen',5);N('Einschränkung','restriction','f','Einschränkungen',5);
N('Spielraum','leeway','m','Spielräume',5);            N('Kompromiss','compromise','m','Kompromisse',5);
N('Debatte','debate','f','Debatten',5);                N('Argument','argument','n','Argumente',5);
N('Einwand','objection','m','Einwände',5);             N('Standpunkt','standpoint','m','Standpunkte',5);
N('Begründung','justification','f','Begründungen',5);  N('Schlussfolgerung','conclusion','f','Schlussfolgerungen',5);

/* B2 verbs */
V('zurückführen','to attribute to','zurückgeführt','führte zurück',5);
V('zusammenhängen','to be connected','zusammengehangen','hing zusammen',5);
V('beeinflussen','to influence','beeinflusst','beeinflusste',5);
V('bewirken','to bring about','bewirkt','bewirkte',5);
V('fördern','to promote','gefördert','förderte',5);
V('behindern','to hinder','behindert','behinderte',5);
V('ausgleichen','to balance out','ausgeglichen','glich aus',5);
V('abwägen','to weigh up','abgewogen','wog ab',5);
V('einschätzen','to assess','eingeschätzt','schätzte ein',5);
V('einräumen','to concede','eingeräumt','räumte ein',5);
V('entgegenhalten','to counter','entgegengehalten','hielt entgegen',5);
V('relativieren','to put into perspective','relativiert','relativierte',5);
V('hinterfragen','to question critically','hinterfragt','hinterfragte',5);
V('verdeutlichen','to clarify','verdeutlicht','verdeutlichte',5);
V('unterstreichen','to underline, stress','unterstrichen','unterstrich',5);
V('veranschaulichen','to illustrate','veranschaulicht','veranschaulichte',5);
V('umsetzen','to implement','umgesetzt','setzte um',5);
V('durchsetzen','to push through','durchgesetzt','setzte durch',5);
V('bewältigen','to cope with','bewältigt','bewältigte',5);
V('scheitern','to fail','gescheitert','scheiterte',5,{aux:'sein'});
V('verschärfen','to intensify','verschärft','verschärfte',5);
V('entlasten','to relieve','entlastet','entlastete',5);
V('belasten','to burden','belastet','belastete',5);
V('verlagern','to shift','verlagert','verlagerte',5);
V('vernachlässigen','to neglect','vernachlässigt','vernachlässigte',5);
V('gewährleisten','to guarantee','gewährleistet','gewährleistete',5);
V('erheben','to raise, collect','erhoben','erhob',5);
V('ermitteln','to determine','ermittelt','ermittelte',5);
V('erörtern','to discuss','erörtert','erörterte',5);
V('darlegen','to set out','dargelegt','legte dar',5);

/* B2 adjectives & phrases */
A('maßgeblich','decisive',5);                  A('ausschlaggebend','crucial',5);
A('nachvollziehbar','comprehensible',5);       A('plausibel','plausible',5);
A('differenziert','nuanced',5,'pauschal');     A('pauschal','sweeping, blanket',5,'differenziert');
A('vorrangig','of primary importance',5);      A('nachrangig','of secondary importance',5);
A('unzureichend','inadequate',5,'ausreichend');A('unverzichtbar','indispensable',5);
A('weitreichend','far-reaching',5);            A('bedenklich','worrying',5);
A('fraglich','questionable',5);                A('tragfähig','viable',5);
A('verbindlich','binding',5,'unverbindlich');  A('beträchtlich','substantial',5);
A('geringfügig','marginal',5,'beträchtlich');  A('wesentlich','essential',5);
A('zweifellos','undoubtedly',5);               A('vermeintlich','supposed, alleged',5);
P('Die Debatte wird oft verkürzt geführt.','The debate is often conducted too simplistically.',5);
P('Häufig wird eingewandt, dass …','It is often objected that …',5);
P('Dieses Argument greift zu kurz.','That argument falls short.',5);
P('Entscheidend ist meines Erachtens, dass …','In my view the decisive point is that …',5);
P('Vor diesem Hintergrund plädiere ich für …','Against this background I argue for …',5);
P('Zusammenfassend lässt sich sagen, dass …','In summary one can say that …',5);
P('Da haben Sie insofern recht, als …','You are right insofar as …',5);
P('Ich sehe das etwas anders, und zwar weil …','I see it somewhat differently, namely because …',5);
P('Einigen wir uns darauf, dass …','Let us agree that …',5);
P('Das lässt sich kaum pauschal beantworten.','That can hardly be answered in blanket terms.',5);
P('Darf ich kurz einhaken?','May I jump in briefly?',5);
P('Lassen Sie mich das an einem Beispiel verdeutlichen.','Let me illustrate that with an example.',5);

/* ═══════════════ C1 — abstrakt, wissenschaftlich, publizistisch ═══════════════ */
N('Erkenntnis','insight, finding','f','Erkenntnisse',6);
N('Annahme','assumption','f','Annahmen',6);           N('These','thesis','f','Thesen',6);
N('Hypothese','hypothesis','f','Hypothesen',6);        N('Befund','finding','m','Befunde',6);
N('Nachweis','evidence','m','Nachweise',6);            N('Beleg','piece of evidence','m','Belege',6);
N('Widerspruch','contradiction','m','Widersprüche',6); N('Ambivalenz','ambivalence','f','Ambivalenzen',6);
N('Perspektive','perspective','f','Perspektiven',6);   N('Deutung','interpretation','f','Deutungen',6);
N('Zusammenspiel','interplay','n',null,6);             N('Wechselwirkung','interaction','f','Wechselwirkungen',6);
N('Rahmenbedingung','framework condition','f','Rahmenbedingungen',6);
N('Zielsetzung','objective','f','Zielsetzungen',6);    N('Umsetzung','implementation','f','Umsetzungen',6);
N('Verfahren','procedure','n','Verfahren',6);          N('Kriterium','criterion','n','Kriterien',6);
N('Gewichtung','weighting','f','Gewichtungen',6);      N('Abgrenzung','demarcation','f','Abgrenzungen',6);
N('Verallgemeinerung','generalisation','f','Verallgemeinerungen',6);
N('Einschätzung','assessment','f','Einschätzungen',6); N('Vorbehalt','reservation','m','Vorbehalte',6);
N('Zugeständnis','concession','n','Zugeständnisse',6); N('Zumutung','imposition','f','Zumutungen',6);
N('Selbstverständlichkeit','matter of course','f','Selbstverständlichkeiten',6);
N('Verantwortlichkeit','accountability','f','Verantwortlichkeiten',6);
N('Glaubwürdigkeit','credibility','f',null,6);         N('Transparenz','transparency','f',null,6);
N('Legitimation','legitimation','f','Legitimationen',6);N('Aufsicht','supervision','f','Aufsichten',6);
N('Zuschreibung','attribution','f','Zuschreibungen',6);N('Wahrnehmung','perception','f','Wahrnehmungen',6);
N('Aufmerksamkeit','attention','f',null,6);            N('Zumessung','allocation','f','Zumessungen',6);
N('Nachhaltigkeit','sustainability','f',null,6);        N('Beliebigkeit','arbitrariness','f',null,6);
N('Verbindlichkeit','bindingness, commitment','f',null,6);
N('Dringlichkeit','urgency','f',null,6);                N('Tragweite','significance, scope','f',null,6);
N('Spannungsfeld','field of tension','n','Spannungsfelder',6);
N('Gemeinplatz','commonplace, platitude','m','Gemeinplätze',6);
N('Zuspitzung','exaggeration for effect','f','Zuspitzungen',6);
N('Nuance','nuance','f','Nuancen',6);                   N('Tonfall','tone','m','Tonfälle',6);

/* C1 verbs */
V('unterstellen','to impute, assume','unterstellt','unterstellte',6);
V('suspendieren','to suspend','suspendiert','suspendierte',6);
V('präzisieren','to make precise','präzisiert','präzisierte',6);
V('differenzieren','to differentiate','differenziert','differenzierte',6);
V('abstrahieren','to abstract','abstrahiert','abstrahierte',6);
V('schlussfolgern','to conclude','geschlussfolgert','schlussfolgerte',6);
V('herleiten','to derive','hergeleitet','leitete her',6);
V('widerlegen','to refute','widerlegt','widerlegte',6);
V('untermauern','to substantiate','untermauert','untermauerte',6);
V('einwenden','to object','eingewandt','wandte ein',6);
V('relativieren','to qualify','relativiert','relativierte',6);
V('verfehlen','to miss (the point)','verfehlt','verfehlte',6);
V('aufgreifen','to take up','aufgegriffen','griff auf',6);
V('zuspitzen','to sharpen, exaggerate','zugespitzt','spitzte zu',6);
V('nahelegen','to suggest','nahegelegt','legte nahe',6);
V('beanstanden','to object to','beanstandet','beanstandete',6);
V('beziffern','to quantify','beziffert','bezifferte',6);
V('veranlassen','to prompt','veranlasst','veranlasste',6);
V('zurechnen','to attribute','zugerechnet','rechnete zu',6);
V('vorwegnehmen','to anticipate','vorweggenommen','nahm vorweg',6);
V('aufrechterhalten','to maintain','aufrechterhalten','hielt aufrecht',6);
V('tarnen','to disguise','getarnt','tarnte',6);
V('verdecken','to conceal','verdeckt','verdeckte',6);
V('beiläufig erwähnen','to mention in passing','erwähnt','erwähnte',6);

/* C1 adjectives & phrases */
A('haltbar','tenable',6,'unhaltbar');          A('unhaltbar','untenable',6,'haltbar');
A('stichhaltig','sound, valid',6);             A('schlüssig','coherent',6);
A('zwingend','compelling',6);                  A('voreilig','premature',6);
A('einschlägig','relevant, pertinent',6);      A('exemplarisch','exemplary, illustrative',6);
A('vordergründig','superficial',6);            A('vielschichtig','multi-layered',6);
A('ambivalent','ambivalent',6);                A('vermeintlich','ostensible',6);
A('gleichwohl','nevertheless (adv.)',6);       A('mithin','consequently (adv.)',6);
A('insofern','insofar (adv.)',6);              A('ohnehin','anyway (adv.)',6);
A('keineswegs','by no means',6);               A('mitnichten','by no means (formal)',6);
A('hinreichend','sufficient',6);               A('weitgehend','largely',6);
P('Die Frage lässt sich kaum pauschal beantworten.','The question can hardly be answered in blanket terms.',6);
P('Zunächst ist zu unterscheiden zwischen … und …','First one must distinguish between … and …',6);
P('Dem Argument ist entgegenzuhalten, dass …','Against that argument it must be said that …',6);
P('Dies gilt umso mehr, als …','This holds all the more since …',6);
P('Man wird einräumen müssen, dass …','One will have to concede that …',6);
P('Gleichwohl halte ich daran fest, dass …','Nevertheless I maintain that …',6);
P('Vor diesem Hintergrund erscheint es geboten, …','Against this background it seems necessary to …',6);
P('Abschließend sei darauf hingewiesen, dass …','Finally, let it be noted that …',6);
P('Das Argument greift nur, wenn man unterstellt, dass …','The argument only holds if one assumes that …',6);
P('Ich möchte meine These vorweg formulieren.','Let me state my thesis up front.',6);

/* ═══════════════ C2 — Stil, Nuance, Idiomatik ═══════════════ */
N('Gepflogenheit','custom, practice','f','Gepflogenheiten',7);
N('Beiläufigkeit','casualness','f','Beiläufigkeiten',7);
N('Anmaßung','presumption','f','Anmaßungen',7);
N('Beflissenheit','assiduousness','f',null,7);
N('Unbehagen','unease','n',null,7);
N('Vorbehalt','caveat','m','Vorbehalte',7);
N('Nachdruck','emphasis','m',null,7);
N('Tragik','tragedy (quality)','f',null,7);
N('Ironie','irony','f','Ironien',7);
N('Pointe','punchline, point','f','Pointen',7);
N('Lesart','reading, interpretation','f','Lesarten',7);
N('Trugschluss','fallacy','m','Trugschlüsse',7);
N('Scheinargument','specious argument','n','Scheinargumente',7);
N('Zirkelschluss','circular reasoning','m','Zirkelschlüsse',7);
N('Allgemeinplatz','platitude','m','Allgemeinplätze',7);
N('Umdeutung','reinterpretation','f','Umdeutungen',7);
N('Ambiguität','ambiguity','f','Ambiguitäten',7);
N('Zurückhaltung','restraint','f',null,7);
N('Souveränität','composure, sovereignty','f',null,7);
N('Gelassenheit','equanimity','f',null,7);
N('Bequemlichkeit','convenience, laziness','f','Bequemlichkeiten',7);
N('Entrüstung','indignation','f',null,7);
N('Schwerpunktverlagerung','shift of emphasis','f','Schwerpunktverlagerungen',7);

/* C2 verbs */
V('einräumen','to grant, concede','eingeräumt','räumte ein',7);
V('bestreiten','to dispute','bestritten','bestritt',7);
V('unterlaufen','to slip past, circumvent','unterlaufen','unterlief',7);
V('verwässern','to water down','verwässert','verwässerte',7);
V('überspitzen','to overstate','überspitzt','überspitzte',7);
V('unterminieren','to undermine','unterminiert','unterminierte',7);
V('kaschieren','to cover up','kaschiert','kaschierte',7);
V('schönreden','to whitewash','schöngeredet','redete schön',7);
V('anprangern','to denounce','angeprangert','prangerte an',7);
V('einhegen','to contain, fence in','eingehegt','hegte ein',7);
V('sich aufdrängen','to suggest itself forcefully','aufgedrängt','drängte auf',7);
V('nachjustieren','to fine-tune','nachjustiert','justierte nach',7);
V('auslagern','to outsource','ausgelagert','lagerte aus',7);
V('vorenthalten','to withhold','vorenthalten','enthielt vor',7);
V('zugestehen','to concede','zugestanden','gestand zu',7);
V('abwiegeln','to play down','abgewiegelt','wiegelte ab',7);

/* C2 adjectives & phrases */
A('trügerisch','deceptive',7);                 A('abwegig','far-fetched',7);
A('stringent','rigorous',7);                   A('kursorisch','cursory',7);
A('eklatant','glaring, blatant',7);            A('marginal','marginal',7);
A('subtil','subtle',7);                        A('polemisch','polemical',7);
A('apodiktisch','apodictic, dogmatic',7);      A('konziliant','conciliatory',7);
A('lapidar','terse',7);                        A('wohlfeil','cheap, facile',7);
A('verquer','skewed, convoluted',7);           A('schlagend','striking, conclusive',7);
A('belanglos','inconsequential',7);            A('tiefgreifend','profound',7);
P('So zugespitzt die These klingt, so wenig lässt sie sich verwerfen.','However pointed the thesis sounds, it cannot simply be dismissed.',7);
P('Was auf den ersten Blick … erscheint, erweist sich als …','What at first seems … turns out to be …',7);
P('Die entscheidende Unterscheidung dürfte darin liegen, dass …','The decisive distinction probably lies in the fact that …',7);
P('Bleibt also festzuhalten:','So it remains to be noted:',7);
P('Das ist ein starkes Argument; ich würde es sogar verschärfen.','That is a strong argument; I would even sharpen it.',7);
P('In diesem Punkt möchte ich meine Position korrigieren.','On this point I would like to correct my position.',7);
P('Worauf es mir letztlich ankommt, ist Folgendes:','What ultimately matters to me is the following:',7);
P('So weit würde ich nicht gehen.','I would not go that far.',7);
P('Ich fürchte, wir reden aneinander vorbei.','I’m afraid we are talking past each other.',7);
P('Das halte ich für an den Haaren herbeigezogen.','I consider that far-fetched.',7);

return {nouns,verbs,adjs,phrases};
})();
