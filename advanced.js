/* Deutsch Trainer — advanced grammar data (B1 → C2).
   Pure data only; the generators that consume it live in index.html.
   Every German form here is hand-checked.                              */
window.ADVDATA = (function(){

/* ===================== relative pronouns ===================== */
/* [case][gender] — gender keys: m f n p */
const REL = {
  nom:{m:'der',  f:'die',  n:'das',  p:'die'},
  akk:{m:'den',  f:'die',  n:'das',  p:'die'},
  dat:{m:'dem',  f:'der',  n:'dem',  p:'denen'},
  gen:{m:'dessen',f:'deren',n:'dessen',p:'deren'}
};
/* carrier sentences: {head, g, nom, akk, dat, gen} — ___ is the pronoun slot */
const RELSENT = [
  {head:'der Mann',   g:'m', en:'the man',     nom:'___ dort steht',            akk:'___ ich gestern traf',        dat:'___ ich geholfen habe',        gen:'___ Auto neu ist'},
  {head:'die Frau',   g:'f', en:'the woman',   nom:'___ Deutsch unterrichtet',  akk:'___ ich sehr schätze',        dat:'___ ich das Buch gab',         gen:'___ Sohn studiert'},
  {head:'das Kind',   g:'n', en:'the child',   nom:'___ im Garten spielt',      akk:'___ wir gestern sahen',       dat:'___ ich ein Eis kaufte',       gen:'___ Mutter Ärztin ist'},
  {head:'die Leute',  g:'p', en:'the people',  nom:'___ hier arbeiten',         akk:'___ ich eingeladen habe',     dat:'___ ich vertraue',             gen:'___ Kinder hier spielen'},
  {head:'der Kollege',g:'m', en:'the colleague',nom:'___ immer zu spät kommt',  akk:'___ alle mögen',              dat:'___ ich vertraue',             gen:'___ Büro neben mir liegt'},
  {head:'die Stadt',  g:'f', en:'the city',    nom:'___ am Fluss liegt',        akk:'___ ich oft besuche',         dat:'___ ich viel verdanke',        gen:'___ Altstadt berühmt ist'},
  {head:'das Haus',   g:'n', en:'the house',   nom:'___ am Ende der Straße steht',akk:'___ sie gekauft haben',     dat:'___ ich den Namen gab',        gen:'___ Dach undicht ist'},
  {head:'die Bücher', g:'p', en:'the books',   nom:'___ auf dem Tisch liegen',  akk:'___ ich gelesen habe',        dat:'___ ich viel verdanke',        gen:'___ Autoren unbekannt sind'},
  {head:'der Zug',    g:'m', en:'the train',   nom:'___ um acht fährt',         akk:'___ wir verpasst haben',      dat:'___ wir nachlaufen',           gen:'___ Verspätung ärgerlich ist'},
  {head:'die Lehrerin',g:'f',en:'the teacher', nom:'___ uns Grammatik erklärt', akk:'___ wir alle lieben',         dat:'___ ich eine Mail schrieb',    gen:'___ Unterricht spannend ist'}
];
/* relative pronoun after a preposition: prep + case */
const RELPREP = [
  {p:'mit',  c:'dat', head:'der Stift',  g:'m', tail:'ich schreibe',          en:'the pen I write with'},
  {p:'über', c:'akk', head:'das Thema',  g:'n', tail:'wir gesprochen haben',  en:'the topic we talked about'},
  {p:'auf',  c:'akk', head:'der Moment', g:'m', tail:'ich gewartet habe',     en:'the moment I waited for'},
  {p:'von',  c:'dat', head:'die Firma',  g:'f', tail:'ich dir erzählt habe',  en:'the company I told you about'},
  {p:'in',   c:'dat', head:'das Dorf',   g:'n', tail:'ich geboren bin',       en:'the village I was born in'},
  {p:'für',  c:'akk', head:'die Freunde',g:'p', tail:'ich alles tue',         en:'the friends I do everything for'},
  {p:'bei',  c:'dat', head:'die Firma',  g:'f', tail:'sie arbeitet',          en:'the company she works at'},
  {p:'an',   c:'akk', head:'der Tag',    g:'m', tail:'wir uns trafen',        en:'the day we met'}
];

/* ===================== Konjunktiv I — indirect speech ===================== */
/* 3rd person singular: the only form that is reliably distinct */
const K1 = [
  {inf:'sein',    ind:'ist',     k1:'sei',      en:'to be'},
  {inf:'haben',   ind:'hat',     k1:'habe',     en:'to have'},
  {inf:'werden',  ind:'wird',    k1:'werde',    en:'to become'},
  {inf:'können',  ind:'kann',    k1:'könne',    en:'can'},
  {inf:'müssen',  ind:'muss',    k1:'müsse',    en:'must'},
  {inf:'wollen',  ind:'will',    k1:'wolle',    en:'to want'},
  {inf:'sollen',  ind:'soll',    k1:'solle',    en:'should'},
  {inf:'dürfen',  ind:'darf',    k1:'dürfe',    en:'may'},
  {inf:'wissen',  ind:'weiß',    k1:'wisse',    en:'to know'},
  {inf:'gehen',   ind:'geht',    k1:'gehe',     en:'to go'},
  {inf:'kommen',  ind:'kommt',   k1:'komme',    en:'to come'},
  {inf:'fahren',  ind:'fährt',   k1:'fahre',    en:'to drive'},
  {inf:'sehen',   ind:'sieht',   k1:'sehe',     en:'to see'},
  {inf:'lesen',   ind:'liest',   k1:'lese',     en:'to read'},
  {inf:'nehmen',  ind:'nimmt',   k1:'nehme',    en:'to take'},
  {inf:'sprechen',ind:'spricht', k1:'spreche',  en:'to speak'},
  {inf:'bleiben', ind:'bleibt',  k1:'bleibe',   en:'to stay'},
  {inf:'arbeiten',ind:'arbeitet',k1:'arbeite',  en:'to work'},
  {inf:'brauchen',ind:'braucht', k1:'brauche',  en:'to need'},
  {inf:'geben',   ind:'gibt',    k1:'gebe',     en:'to give'}
];
/* full reported-speech transforms: direct → indirect */
const REPORT = [
  {d:'„Ich bin müde.“',               i:'Er sagte, er ___ müde.',               a:'sei',    o:['ist','wäre','war'],        en:'He said he was tired.'},
  {d:'„Ich habe keine Zeit.“',        i:'Sie behauptete, sie ___ keine Zeit.',  a:'habe',   o:['hat','hätte','hatte'],     en:'She claimed she had no time.'},
  {d:'„Ich kann nicht kommen.“',      i:'Er erklärte, er ___ nicht kommen.',    a:'könne',  o:['kann','konnte','könnte'],  en:'He explained he could not come.'},
  {d:'„Ich werde anrufen.“',          i:'Sie versprach, sie ___ anrufen.',      a:'werde',  o:['wird','würde','wurde'],    en:'She promised she would call.'},
  {d:'„Ich weiß nichts davon.“',      i:'Er beteuerte, er ___ nichts davon.',   a:'wisse',  o:['weiß','wüsste','wusste'],  en:'He insisted he knew nothing.'},
  {d:'„Wir müssen warten.“',          i:'Sie meinte, sie ___ warten.',          a:'müssten',o:['müssen','musste','müsse'], en:'She said they had to wait.'},
  {d:'„Ich habe das gesehen.“',       i:'Er sagte, er ___ das gesehen.',        a:'habe',   o:['hat','hätte','haben'],     en:'He said he had seen it.'},
  {d:'„Ich war in Berlin.“',          i:'Sie erzählte, sie ___ in Berlin gewesen.',a:'sei', o:['ist','wäre','war'],        en:'She said she had been in Berlin.'},
  {d:'„Das stimmt nicht.“',           i:'Er bestritt, dass das ___.',           a:'stimme', o:['stimmt','stimmte','gestimmt'],en:'He denied that it was true.'},
  {d:'„Ich darf das nicht sagen.“',   i:'Sie antwortete, sie ___ das nicht sagen.',a:'dürfe',o:['darf','durfte','dürfte'],en:'She answered she was not allowed to say.'}
];

/* ===================== connectors & word order ===================== */
/* kind: 'k0' = coordinating, verb stays 2nd in its own clause (position 0)
         'adv' = conjunctional adverb, takes position 1 → verb inverts
         'sub' = subordinating, verb goes last                          */
const CONN = [
  {w:'und',          kind:'k0',  en:'and',            fa:'و'},
  {w:'aber',         kind:'k0',  en:'but',            fa:'اما'},
  {w:'oder',         kind:'k0',  en:'or',             fa:'یا'},
  {w:'denn',         kind:'k0',  en:'because (coord.)',fa:'چون'},
  {w:'sondern',      kind:'k0',  en:'but rather',     fa:'بلکه'},
  {w:'deshalb',      kind:'adv', en:'therefore',      fa:'بنابراین'},
  {w:'deswegen',     kind:'adv', en:'for that reason',fa:'به همین دلیل'},
  {w:'daher',        kind:'adv', en:'hence',          fa:'از این رو'},
  {w:'trotzdem',     kind:'adv', en:'nevertheless',   fa:'با این حال'},
  {w:'dennoch',      kind:'adv', en:'yet, still',     fa:'با وجود این'},
  {w:'außerdem',     kind:'adv', en:'besides',        fa:'به‌علاوه'},
  {w:'allerdings',   kind:'adv', en:'however',        fa:'هرچند'},
  {w:'jedoch',       kind:'adv', en:'however',        fa:'ولی'},
  {w:'folglich',     kind:'adv', en:'consequently',   fa:'در نتیجه'},
  {w:'stattdessen',  kind:'adv', en:'instead',        fa:'به‌جای آن'},
  {w:'infolgedessen',kind:'adv', en:'as a result',    fa:'در پی آن'},
  {w:'weil',         kind:'sub', en:'because',        fa:'چون'},
  {w:'dass',         kind:'sub', en:'that',           fa:'که'},
  {w:'wenn',         kind:'sub', en:'if / when',      fa:'اگر / وقتی'},
  {w:'als',          kind:'sub', en:'when (past, once)',fa:'وقتی (گذشته)'},
  {w:'obwohl',       kind:'sub', en:'although',       fa:'هرچند'},
  {w:'damit',        kind:'sub', en:'so that',        fa:'تا اینکه'},
  {w:'während',      kind:'sub', en:'while',          fa:'در حالی که'},
  {w:'bevor',        kind:'sub', en:'before',         fa:'پیش از آنکه'},
  {w:'nachdem',      kind:'sub', en:'after',          fa:'پس از آنکه'},
  {w:'seitdem',      kind:'sub', en:'since (time)',   fa:'از زمانی که'},
  {w:'falls',        kind:'sub', en:'in case',        fa:'در صورتی که'},
  {w:'sobald',       kind:'sub', en:'as soon as',     fa:'به‌محض اینکه'},
  {w:'solange',      kind:'sub', en:'as long as',     fa:'تا زمانی که'},
  {w:'indem',        kind:'sub', en:'by (doing)',     fa:'با اینکه (روش)'},
  {w:'sodass',       kind:'sub', en:'so that (result)',fa:'به طوری که'},
  {w:'zumal',        kind:'sub', en:'especially since',fa:'خصوصاً که'},
  {w:'wohingegen',   kind:'sub', en:'whereas',        fa:'در حالی که'},
  {w:'sofern',       kind:'sub', en:'provided that',  fa:'به شرط آنکه'}
];
/* two-part connectors */
const TWOPART = [
  {a:'entweder',b:'oder',       en:'either … or',               ex:'Wir fahren entweder nach Wien ___ nach Prag.'},
  {a:'weder',   b:'noch',       en:'neither … nor',             ex:'Er trinkt weder Kaffee ___ Tee.'},
  {a:'sowohl',  b:'als auch',   en:'both … and',                ex:'Sie spricht sowohl Russisch ___ Chinesisch.'},
  {a:'nicht nur',b:'sondern auch',en:'not only … but also',     ex:'Das Buch ist nicht nur lang, ___ langweilig.'},
  {a:'zwar',    b:'aber',       en:'admittedly … but',          ex:'Es ist zwar teuer, ___ es lohnt sich.'},
  {a:'je',      b:'desto',      en:'the … the',                 ex:'Je mehr ich lerne, ___ besser verstehe ich.'},
  {a:'einerseits',b:'andererseits',en:'on the one hand … on the other',ex:'Einerseits will ich bleiben, ___ muss ich gehen.'}
];
/* adverbial clause types — classify the conjunction */
const ADVTYPE = [
  {w:'weil',    t:'kausal (reason)',        en:'because'},
  {w:'da',      t:'kausal (reason)',        en:'since'},
  {w:'obwohl',  t:'konzessiv (concession)', en:'although'},
  {w:'wenngleich',t:'konzessiv (concession)',en:'even though'},
  {w:'damit',   t:'final (purpose)',        en:'so that'},
  {w:'sodass',  t:'konsekutiv (result)',    en:'so that (result)'},
  {w:'nachdem', t:'temporal (time)',        en:'after'},
  {w:'bevor',   t:'temporal (time)',        en:'before'},
  {w:'während', t:'temporal (time)',        en:'while'},
  {w:'falls',   t:'konditional (condition)',en:'in case'},
  {w:'sofern',  t:'konditional (condition)',en:'provided that'},
  {w:'indem',   t:'modal (means)',          en:'by (doing)'},
  {w:'ohne dass',t:'modal (means)',         en:'without (doing)'},
  {w:'wohingegen',t:'adversativ (contrast)',en:'whereas'},
  {w:'je … desto',t:'proportional',         en:'the … the'}
];

/* ===================== weak (n-) declension ===================== */
const NDEKL = [
  {nom:'der Junge',   obl:'den Jungen',    en:'the boy'},
  {nom:'der Name',    obl:'den Namen',     en:'the name'},
  {nom:'der Mensch',  obl:'den Menschen',  en:'the human'},
  {nom:'der Nachbar', obl:'den Nachbarn',  en:'the neighbour'},
  {nom:'der Kunde',   obl:'den Kunden',    en:'the customer'},
  {nom:'der Student', obl:'den Studenten', en:'the student'},
  {nom:'der Herr',    obl:'den Herrn',     en:'the gentleman'},
  {nom:'der Kollege', obl:'den Kollegen',  en:'the colleague'},
  {nom:'der Experte', obl:'den Experten',  en:'the expert'},
  {nom:'der Präsident',obl:'den Präsidenten',en:'the president'},
  {nom:'der Polizist',obl:'den Polizisten',en:'the police officer'},
  {nom:'der Journalist',obl:'den Journalisten',en:'the journalist'},
  {nom:'der Zeuge',   obl:'den Zeugen',    en:'the witness'},
  {nom:'der Patient', obl:'den Patienten', en:'the patient'},
  {nom:'der Soldat',  obl:'den Soldaten',  en:'the soldier'}
];

/* ===================== da- / wo- compounds ===================== */
const DAWO = [
  {v:'warten',           p:'auf',  da:'darauf',  wo:'worauf',  en:'to wait for'},
  {v:'denken',           p:'an',   da:'daran',   wo:'woran',   en:'to think of'},
  {v:'sich freuen',      p:'über', da:'darüber', wo:'worüber', en:'to be happy about'},
  {v:'sich interessieren',p:'für', da:'dafür',   wo:'wofür',   en:'to be interested in'},
  {v:'sprechen',         p:'über', da:'darüber', wo:'worüber', en:'to talk about'},
  {v:'sich erinnern',    p:'an',   da:'daran',   wo:'woran',   en:'to remember'},
  {v:'abhängen',         p:'von',  da:'davon',   wo:'wovon',   en:'to depend on'},
  {v:'sich beschäftigen',p:'mit',  da:'damit',   wo:'womit',   en:'to deal with'},
  {v:'teilnehmen',       p:'an',   da:'daran',   wo:'woran',   en:'to take part in'},
  {v:'sich kümmern',     p:'um',   da:'darum',   wo:'worum',   en:'to take care of'},
  {v:'bestehen',         p:'aus',  da:'daraus',  wo:'woraus',  en:'to consist of'},
  {v:'rechnen',          p:'mit',  da:'damit',   wo:'womit',   en:'to reckon with'},
  {v:'sich bewerben',    p:'um',   da:'darum',   wo:'worum',   en:'to apply for'},
  {v:'zweifeln',         p:'an',   da:'daran',   wo:'woran',   en:'to doubt'},
  {v:'verzichten',       p:'auf',  da:'darauf',  wo:'worauf',  en:'to do without'},
  {v:'sich gewöhnen',    p:'an',   da:'daran',   wo:'woran',   en:'to get used to'},
  {v:'leiden',           p:'unter',da:'darunter',wo:'worunter',en:'to suffer from'},
  {v:'sich ärgern',      p:'über', da:'darüber', wo:'worüber', en:'to be annoyed about'},
  {v:'bitten',           p:'um',   da:'darum',   wo:'worum',   en:'to ask for'},
  {v:'sich konzentrieren',p:'auf', da:'darauf',  wo:'worauf',  en:'to concentrate on'}
];

/* ===================== Funktionsverbgefüge (noun + verb) ===================== */
const FVG = [
  {n:'eine Entscheidung',v:'treffen',   verb:'entscheiden',      en:'to make a decision'},
  {n:'einen Antrag',     v:'stellen',   verb:'beantragen',       en:'to file an application'},
  {n:'Kritik',           v:'üben',      verb:'kritisieren',      en:'to voice criticism'},
  {n:'in Betracht',      v:'ziehen',    verb:'erwägen',          en:'to take into consideration'},
  {n:'zur Verfügung',    v:'stellen',   verb:'bereitstellen',    en:'to make available'},
  {n:'Rücksicht',        v:'nehmen',    verb:'berücksichtigen',  en:'to show consideration'},
  {n:'eine Rolle',       v:'spielen',   verb:'wichtig sein',     en:'to play a role'},
  {n:'Abschied',         v:'nehmen',    verb:'sich verabschieden',en:'to say goodbye'},
  {n:'zum Ausdruck',     v:'bringen',   verb:'ausdrücken',       en:'to express'},
  {n:'in Frage',         v:'stellen',   verb:'bezweifeln',       en:'to call into question'},
  {n:'einen Beitrag',    v:'leisten',   verb:'beitragen',        en:'to make a contribution'},
  {n:'Maßnahmen',        v:'ergreifen', verb:'handeln',          en:'to take measures'},
  {n:'Verantwortung',    v:'übernehmen',verb:'verantworten',     en:'to take responsibility'},
  {n:'Einfluss',         v:'nehmen',    verb:'beeinflussen',     en:'to exert influence'},
  {n:'zur Sprache',      v:'bringen',   verb:'ansprechen',       en:'to bring up'},
  {n:'Bezug',            v:'nehmen',    verb:'sich beziehen',    en:'to refer to'},
  {n:'eine Frage',       v:'stellen',   verb:'fragen',           en:'to ask a question'},
  {n:'Hilfe',            v:'leisten',   verb:'helfen',           en:'to render assistance'},
  {n:'einen Fehler',     v:'machen',    verb:'sich irren',       en:'to make a mistake'},
  {n:'Anspruch',         v:'erheben',   verb:'beanspruchen',     en:'to lay claim to'}
];

/* ===================== Modalpartikeln ===================== */
const MODPART = [
  {w:'doch', s:'Komm ___ mit!',              en:'softens an invitation — “do come along!”', fa:'دعوت را نرم‌تر می‌کند'},
  {w:'mal',  s:'Sag ___, wie heißt du?',     en:'casual, lightens a question',             fa:'سؤال را خودمانی می‌کند'},
  {w:'denn', s:'Wo bist du ___?',            en:'friendly curiosity in a question',        fa:'کنجکاوی دوستانه'},
  {w:'ja',   s:'Das ist ___ klar!',          en:'“as we both know” — shared knowledge',    fa:'دانش مشترک'},
  {w:'eben', s:'Das habe ich ___ gesagt.',   en:'“exactly / precisely that”',              fa:'همین را گفتم'},
  {w:'wohl', s:'Er ist ___ krank.',          en:'probably — a guess',                      fa:'احتمالاً'},
  {w:'bloß', s:'Was hast du ___ gemacht?',   en:'urgency or worry in a question',          fa:'نگرانی یا فوریت'},
  {w:'schon',s:'Das wird ___ gehen.',        en:'reassurance — “it’ll be fine”',           fa:'اطمینان‌دادن'},
  {w:'etwa', s:'Hast du das ___ vergessen?', en:'disbelief — “surely not?”',               fa:'ناباوری'},
  {w:'ruhig',s:'Nimm ___ noch ein Stück.',   en:'“feel free to” — permission',             fa:'اجازه‌دادن'},
  {w:'eigentlich',s:'Was willst du ___?',    en:'“actually” — mild shift of topic',        fa:'در واقع'},
  {w:'halt', s:'So ist das ___.',            en:'resignation — “that’s just how it is”',   fa:'تسلیم‌شدن'}
];

/* ===================== genitive prepositions ===================== */
const GENPREP = [
  {p:'wegen',     en:'because of'},   {p:'während',   en:'during'},
  {p:'trotz',     en:'despite'},      {p:'statt',     en:'instead of'},
  {p:'aufgrund',  en:'on account of'},{p:'infolge',   en:'as a result of'},
  {p:'innerhalb', en:'within'},       {p:'außerhalb', en:'outside of'},
  {p:'anhand',    en:'on the basis of'},{p:'angesichts',en:'in view of'},
  {p:'bezüglich', en:'regarding'},    {p:'hinsichtlich',en:'with regard to'},
  {p:'mithilfe',  en:'with the help of'},{p:'zugunsten',en:'in favour of'},
  {p:'anlässlich',en:'on the occasion of'},{p:'ungeachtet',en:'regardless of'}
];
/* genitive noun phrases: m/n → des …(e)s, f/p → der … */
const GENNOUN = [
  {de:'der Vater',  g:'m', gen:'des Vaters',   en:'the father'},
  {de:'das Kind',   g:'n', gen:'des Kindes',   en:'the child'},
  {de:'die Mutter', g:'f', gen:'der Mutter',   en:'the mother'},
  {de:'die Eltern', g:'p', gen:'der Eltern',   en:'the parents'},
  {de:'der Hund',   g:'m', gen:'des Hundes',   en:'the dog'},
  {de:'das Auto',   g:'n', gen:'des Autos',    en:'the car'},
  {de:'die Firma',  g:'f', gen:'der Firma',    en:'the company'},
  {de:'der Film',   g:'m', gen:'des Films',    en:'the film'},
  {de:'das Wetter', g:'n', gen:'des Wetters',  en:'the weather'},
  {de:'die Reise',  g:'f', gen:'der Reise',    en:'the trip'},
  {de:'der Zug',    g:'m', gen:'des Zuges',    en:'the train'},
  {de:'die Kinder', g:'p', gen:'der Kinder',   en:'the children'}
];

/* ===================== passive ===================== */
/* active → Vorgangspassiv (werden + PP) */
const PASSIV = [
  {act:'Der Mechaniker repariert das Auto.', pas:'Das Auto ___ repariert.',      a:'wird',   t:'Präsens', en:'The car is being repaired.'},
  {act:'Man baut die Brücke neu.',           pas:'Die Brücke ___ neu gebaut.',   a:'wird',   t:'Präsens', en:'The bridge is being rebuilt.'},
  {act:'Die Firma stellte zehn Leute ein.',  pas:'Zehn Leute ___ eingestellt.',  a:'wurden', t:'Präteritum',en:'Ten people were hired.'},
  {act:'Ein Arzt hat ihn untersucht.',       pas:'Er ___ untersucht worden.',    a:'ist',    t:'Perfekt', en:'He has been examined.'},
  {act:'Man wird das Gesetz ändern.',        pas:'Das Gesetz ___ geändert werden.',a:'wird', t:'Futur I', en:'The law will be changed.'},
  {act:'Man muss die Regel beachten.',       pas:'Die Regel muss ___ werden.',   a:'beachtet',t:'Modal',  en:'The rule must be observed.'},
  {act:'Der Chef hat die Mail geschrieben.', pas:'Die Mail ___ geschrieben worden.',a:'ist', t:'Perfekt', en:'The mail has been written.'},
  {act:'Sie öffneten den Laden um acht.',    pas:'Der Laden ___ um acht geöffnet.',a:'wurde',t:'Präteritum',en:'The shop was opened at eight.'}
];
/* werden-passive (process) vs sein-passive (state) */
const ZUSTAND = [
  {s:'Die Tür ___ gerade geöffnet. (jemand öffnet sie jetzt)',  a:'wird',  o:['ist'], ex:'Vorgangspassiv: the action is happening.'},
  {s:'Die Tür ___ geöffnet. (sie steht offen)',                 a:'ist',   o:['wird'],ex:'Zustandspassiv: the result is described.'},
  {s:'Das Fenster ___ schon repariert — es funktioniert wieder.',a:'ist',o:['wird'],ex:'Zustandspassiv: finished state.'},
  {s:'Das Fenster ___ im Moment repariert.',                    a:'wird',  o:['ist'], ex:'Vorgangspassiv: in progress.'},
  {s:'Der Brief ___ gestern geschrieben.',                      a:'wurde', o:['war'], ex:'Vorgangspassiv Präteritum: the writing happened.'},
  {s:'Der Laden ___ seit Montag geschlossen.',                  a:'ist',   o:['wird'],ex:'Zustandspassiv: a lasting state.'}
];
/* Passiversatzformen — passive alternatives */
const PASSERS = [
  {pas:'Das kann man leicht reparieren.',       a:'man',        en:'“man” + active = passive meaning'},
  {pas:'Das lässt sich leicht reparieren.',     a:'sich lassen',en:'sich lassen + infinitive'},
  {pas:'Das ist leicht reparierbar.',           a:'-bar',       en:'adjective in -bar'},
  {pas:'Das ist leicht zu reparieren.',         a:'sein + zu',  en:'sein + zu + infinitive'}
];

/* ===================== nominalisation (Verbalstil ↔ Nominalstil) ===================== */
const NOMINAL = [
  {clause:'weil er krank war',          nom:'wegen seiner Krankheit',     prep:'wegen',   en:'because of his illness'},
  {clause:'nachdem er angekommen war',  nom:'nach seiner Ankunft',        prep:'nach',    en:'after his arrival'},
  {clause:'obwohl es regnete',          nom:'trotz des Regens',           prep:'trotz',   en:'despite the rain'},
  {clause:'bevor er abreiste',          nom:'vor seiner Abreise',         prep:'vor',     en:'before his departure'},
  {clause:'während sie studierte',      nom:'während ihres Studiums',     prep:'während', en:'during her studies'},
  {clause:'indem man übt',              nom:'durch Üben',                 prep:'durch',   en:'by practising'},
  {clause:'falls es nötig ist',         nom:'bei Bedarf',                 prep:'bei',     en:'if needed'},
  {clause:'seit er hier arbeitet',      nom:'seit seinem Arbeitsbeginn',  prep:'seit',    en:'since he started working'},
  {clause:'damit die Qualität steigt',  nom:'zur Steigerung der Qualität',prep:'zu',      en:'to raise quality'},
  {clause:'weil der Zug Verspätung hatte',nom:'aufgrund der Verspätung',  prep:'aufgrund',en:'because of the delay'},
  {clause:'wenn man das Gerät benutzt', nom:'bei der Benutzung des Geräts',prep:'bei',    en:'when using the device'},
  {clause:'obwohl alle protestierten',  nom:'ungeachtet aller Proteste',  prep:'ungeachtet',en:'regardless of all protests'}
];

/* ===================== subjective modal verbs (Vermutung) ===================== */
const SUBJMOD = [
  {s:'Er ___ krank sein — er sieht furchtbar aus.',   a:'muss',   en:'must be (near certainty)'},
  {s:'Sie ___ etwa fünfzig sein, schätze ich.',       a:'dürfte', en:'is probably (polite estimate)'},
  {s:'Das ___ stimmen, aber ich bin nicht sicher.',   a:'kann',   en:'might be true (possible)'},
  {s:'Er ___ sehr reich sein, sagen die Leute.',      a:'soll',   en:'is said to be (hearsay)'},
  {s:'Sie ___ Ärztin sein, behauptet sie jedenfalls.',a:'will',   en:'claims to be (self-claim)'},
  {s:'Er ___ jetzt zu Hause sein, es ist schon spät.',a:'wird',   en:'will be / is presumably'},
  {s:'Das ___ schwierig werden, fürchte ich.',        a:'könnte', en:'could become (tentative)'}
];
const SUBJMOD_MEAN = [
  {w:'muss',   en:'I am almost certain'},
  {w:'dürfte', en:'I estimate politely — probably'},
  {w:'kann',   en:'it is possible'},
  {w:'könnte', en:'it is conceivable — tentative'},
  {w:'soll',   en:'other people say so (hearsay)'},
  {w:'will',   en:'he/she claims it himself/herself'},
  {w:'mag',    en:'granted, it may be so (concession)'}
];

/* ===================== participles as adjectives ===================== */
const PARTIZIP = [
  {inf:'schlafen', p1:'schlafend',   p2:'geschlafen',  n:'das Kind',    ph1:'das schlafende Kind',      en1:'the sleeping child',   ph2:null,                        en2:null},
  {inf:'kochen',   p1:'kochend',     p2:'gekocht',     n:'das Wasser',  ph1:'das kochende Wasser',      en1:'the boiling water',    ph2:'das gekochte Ei',           en2:'the boiled egg'},
  {inf:'lesen',    p1:'lesend',      p2:'gelesen',     n:'das Buch',    ph1:'der lesende Mann',         en1:'the reading man',      ph2:'das gelesene Buch',         en2:'the book that was read'},
  {inf:'reparieren',p1:'reparierend',p2:'repariert',   n:'das Auto',    ph1:null,                       en1:null,                   ph2:'das reparierte Auto',       en2:'the repaired car'},
  {inf:'weinen',   p1:'weinend',     p2:'geweint',     n:'das Kind',    ph1:'das weinende Kind',        en1:'the crying child',     ph2:null,                        en2:null},
  {inf:'schreiben',p1:'schreibend',  p2:'geschrieben', n:'der Brief',   ph1:null,                       en1:null,                   ph2:'der geschriebene Brief',    en2:'the written letter'},
  {inf:'steigen',  p1:'steigend',    p2:'gestiegen',   n:'die Preise',  ph1:'die steigenden Preise',    en1:'the rising prices',    ph2:'die gestiegenen Preise',    en2:'the prices that have risen'},
  {inf:'bellen',   p1:'bellend',     p2:'gebellt',     n:'der Hund',    ph1:'der bellende Hund',        en1:'the barking dog',      ph2:null,                        en2:null}
];
/* extended participial attribute → relative clause */
const ERWPART = [
  {attr:'der gestern reparierte Wagen',              rel:'der Wagen, der gestern repariert wurde',       en:'the car that was repaired yesterday'},
  {attr:'die in Berlin lebende Künstlerin',          rel:'die Künstlerin, die in Berlin lebt',           en:'the artist living in Berlin'},
  {attr:'das vom Chef unterschriebene Dokument',     rel:'das Dokument, das vom Chef unterschrieben wurde',en:'the document signed by the boss'},
  {attr:'die seit Jahren steigenden Mieten',         rel:'die Mieten, die seit Jahren steigen',          en:'the rents that have been rising for years'},
  {attr:'der um sechs Uhr abfahrende Zug',           rel:'der Zug, der um sechs Uhr abfährt',            en:'the train departing at six'},
  {attr:'die gestern beschlossenen Maßnahmen',       rel:'die Maßnahmen, die gestern beschlossen wurden',en:'the measures decided yesterday'},
  {attr:'das vor zwei Wochen erschienene Buch',      rel:'das Buch, das vor zwei Wochen erschienen ist', en:'the book published two weeks ago'},
  {attr:'die an der Konferenz teilnehmenden Experten',rel:'die Experten, die an der Konferenz teilnehmen',en:'the experts taking part in the conference'}
];

/* ===================== word formation ===================== */
const WORDFORM = [
  {base:'bilden',   out:'die Bildung',     suf:'-ung',   en:'education'},
  {base:'wohnen',   out:'die Wohnung',     suf:'-ung',   en:'flat'},
  {base:'lösen',    out:'die Lösung',      suf:'-ung',   en:'solution'},
  {base:'frei',     out:'die Freiheit',    suf:'-heit',  en:'freedom'},
  {base:'krank',    out:'die Krankheit',   suf:'-heit',  en:'illness'},
  {base:'möglich',  out:'die Möglichkeit', suf:'-keit',  en:'possibility'},
  {base:'freundlich',out:'die Freundlichkeit',suf:'-keit',en:'friendliness'},
  {base:'der Freund',out:'die Freundschaft',suf:'-schaft',en:'friendship'},
  {base:'die Wissenschaft',out:'der Wissenschaftler',suf:'-ler',en:'scientist'},
  {base:'lehren',   out:'der Lehrer',      suf:'-er',    en:'teacher'},
  {base:'malen',    out:'der Maler',       suf:'-er',    en:'painter'},
  {base:'essen',    out:'essbar',          suf:'-bar',   en:'edible'},
  {base:'lesen',    out:'lesbar',          suf:'-bar',   en:'legible'},
  {base:'die Arbeit',out:'arbeitslos',     suf:'-los',   en:'unemployed'},
  {base:'der Sinn', out:'sinnvoll',        suf:'-voll',  en:'meaningful'},
  {base:'der Freund',out:'freundlich',     suf:'-lich',  en:'friendly'},
  {base:'der Durst',out:'durstig',         suf:'-ig',    en:'thirsty'},
  {base:'sparen',   out:'sparsam',         suf:'-sam',   en:'thrifty'},
  {base:'möglich',  out:'unmöglich',       suf:'un-',    en:'impossible'},
  {base:'das Haus', out:'das Häuschen',    suf:'-chen',  en:'little house'},
  {base:'erkennen', out:'die Erkenntnis',  suf:'-nis',   en:'insight'},
  {base:'der Berg', out:'das Gebirge',     suf:'Ge-',    en:'mountain range'}
];
/* verb prefixes and what they do */
const VPREFIX = [
  {pre:'ver-', base:'sprechen', out:'versprechen', en:'to promise',      note:'often changes the meaning completely'},
  {pre:'be-',  base:'suchen',   out:'besuchen',    en:'to visit',        note:'makes the verb transitive'},
  {pre:'ent-', base:'decken',   out:'entdecken',   en:'to discover',     note:'removal or beginning'},
  {pre:'zer-', base:'brechen',  out:'zerbrechen',  en:'to shatter',      note:'destruction'},
  {pre:'er-',  base:'finden',   out:'erfinden',    en:'to invent',       note:'achieving a result'},
  {pre:'miss-',base:'verstehen',out:'missverstehen',en:'to misunderstand',note:'something goes wrong'},
  {pre:'über-',base:'setzen',   out:'übersetzen',  en:'to translate',    note:'inseparable here — stress on “setzen”'},
  {pre:'ver-', base:'kaufen',   out:'verkaufen',   en:'to sell',         note:'reverses the direction'}
];

/* ===================== idioms (C1/C2) ===================== */
const IDIOM = [
  {de:'die Daumen drücken',            en:'to keep one’s fingers crossed',  gap:'die ___ drücken',        w:'Daumen'},
  {de:'nur Bahnhof verstehen',         en:'to not understand a thing',      gap:'nur ___ verstehen',      w:'Bahnhof'},
  {de:'die Nase voll haben',           en:'to be fed up',                   gap:'die ___ voll haben',     w:'Nase'},
  {de:'Schwein haben',                 en:'to be lucky',                    gap:'___ haben',              w:'Schwein'},
  {de:'den Nagel auf den Kopf treffen',en:'to hit the nail on the head',    gap:'den ___ auf den Kopf treffen',w:'Nagel'},
  {de:'unter vier Augen',              en:'in private, just the two of us', gap:'unter vier ___',         w:'Augen'},
  {de:'über den Berg sein',            en:'to be out of the woods',         gap:'über den ___ sein',      w:'Berg'},
  {de:'ins Fettnäpfchen treten',       en:'to put one’s foot in it',        gap:'ins ___ treten',         w:'Fettnäpfchen'},
  {de:'jemandem einen Bären aufbinden',en:'to pull someone’s leg',          gap:'jemandem einen ___ aufbinden',w:'Bären'},
  {de:'die Flinte ins Korn werfen',    en:'to throw in the towel',          gap:'die Flinte ins ___ werfen',w:'Korn'},
  {de:'auf dem Holzweg sein',          en:'to be on the wrong track',       gap:'auf dem ___ sein',       w:'Holzweg'},
  {de:'um den heißen Brei herumreden', en:'to beat around the bush',        gap:'um den heißen ___ herumreden',w:'Brei'},
  {de:'den Faden verlieren',           en:'to lose one’s train of thought', gap:'den ___ verlieren',      w:'Faden'},
  {de:'Hand und Fuß haben',            en:'to make good sense',             gap:'___ und Fuß haben',      w:'Hand'},
  {de:'jemanden im Stich lassen',      en:'to leave someone in the lurch',  gap:'jemanden im ___ lassen', w:'Stich'},
  {de:'Öl ins Feuer gießen',           en:'to add fuel to the fire',        gap:'___ ins Feuer gießen',   w:'Öl'},
  {de:'sich ins Zeug legen',           en:'to go all out',                  gap:'sich ins ___ legen',     w:'Zeug'},
  {de:'mit dem linken Fuß aufstehen',  en:'to wake up on the wrong side of the bed',gap:'mit dem linken ___ aufstehen',w:'Fuß'},
  {de:'jemandem ein Dorn im Auge sein',en:'to be a thorn in someone’s side',gap:'ein ___ im Auge sein',   w:'Dorn'},
  {de:'da liegt der Hund begraben',    en:'that’s the crux of the matter',  gap:'da liegt der ___ begraben',w:'Hund'},
  {de:'etwas auf die lange Bank schieben',en:'to put something off',        gap:'auf die lange ___ schieben',w:'Bank'},
  {de:'jemanden auf die Palme bringen',en:'to drive someone up the wall',   gap:'auf die ___ bringen',    w:'Palme'},
  {de:'aus dem Häuschen sein',         en:'to be beside oneself with joy',  gap:'aus dem ___ sein',       w:'Häuschen'},
  {de:'Tomaten auf den Augen haben',   en:'to be oblivious to the obvious', gap:'___ auf den Augen haben',w:'Tomaten'}
];
/* proverbs */
const SPRICHWORT = [
  {de:'Übung macht den Meister.',               en:'Practice makes perfect.'},
  {de:'Morgenstund hat Gold im Mund.',          en:'The early bird catches the worm.'},
  {de:'Wer zuletzt lacht, lacht am besten.',    en:'He who laughs last laughs best.'},
  {de:'Aller Anfang ist schwer.',               en:'All beginnings are difficult.'},
  {de:'Es ist noch kein Meister vom Himmel gefallen.',en:'No one is born an expert.'},
  {de:'Lügen haben kurze Beine.',               en:'Lies have short legs.'},
  {de:'Der Apfel fällt nicht weit vom Stamm.',  en:'The apple does not fall far from the tree.'},
  {de:'Wer die Wahl hat, hat die Qual.',        en:'He who has a choice has the agony.'},
  {de:'Viele Köche verderben den Brei.',        en:'Too many cooks spoil the broth.'},
  {de:'Reden ist Silber, Schweigen ist Gold.',  en:'Speech is silver, silence is gold.'}
];

/* ===================== register & style (C1/C2) ===================== */
const REGISTER = [
  {casual:'kriegen',        formal:'erhalten',      en:'to receive'},
  {casual:'kaufen',         formal:'erwerben',      en:'to acquire'},
  {casual:'anfangen',       formal:'beginnen',      en:'to begin'},
  {casual:'helfen',         formal:'unterstützen',  en:'to support'},
  {casual:'zeigen',         formal:'darlegen',      en:'to set out'},
  {casual:'reden über',     formal:'erörtern',      en:'to discuss'},
  {casual:'genug',          formal:'hinreichend',   en:'sufficient'},
  {casual:'wichtig',        formal:'maßgeblich',    en:'decisive'},
  {casual:'schnell',        formal:'zügig',         en:'promptly'},
  {casual:'jetzt',          formal:'derzeit',       en:'currently'},
  {casual:'fast',           formal:'nahezu',        en:'almost'},
  {casual:'viel',           formal:'erheblich',     en:'considerably'},
  {casual:'aber',           formal:'jedoch',        en:'however'},
  {casual:'deshalb',        formal:'infolgedessen', en:'consequently'},
  {casual:'am Ende',        formal:'abschließend',  en:'finally'},
  {casual:'zuerst',         formal:'zunächst',      en:'initially'},
  {casual:'ziemlich gut',   formal:'durchaus zufriedenstellend',en:'quite satisfactory'},
  {casual:'kaputt machen',  formal:'beschädigen',   en:'to damage'},
  {casual:'rausfinden',     formal:'ermitteln',     en:'to determine'},
  {casual:'sich kümmern um',formal:'betreuen',      en:'to look after'}
];

/* ===================== Konjunktiv II ===================== */
const K2 = [
  {inf:'sein',   k2:'wäre',    en:'would be'},
  {inf:'haben',  k2:'hätte',   en:'would have'},
  {inf:'werden', k2:'würde',   en:'would become'},
  {inf:'können', k2:'könnte',  en:'could'},
  {inf:'müssen', k2:'müsste',  en:'would have to'},
  {inf:'dürfen', k2:'dürfte',  en:'would be allowed'},
  {inf:'sollen', k2:'sollte',  en:'should'},
  {inf:'wollen', k2:'wollte',  en:'would want'},
  {inf:'wissen', k2:'wüsste',  en:'would know'},
  {inf:'gehen',  k2:'ginge',   en:'would go'},
  {inf:'kommen', k2:'käme',    en:'would come'},
  {inf:'geben',  k2:'gäbe',    en:'would give'},
  {inf:'bleiben',k2:'bliebe',  en:'would stay'},
  {inf:'tun',    k2:'täte',    en:'would do'},
  {inf:'finden', k2:'fände',   en:'would find'},
  {inf:'brauchen',k2:'bräuchte',en:'would need'}
];
/* wishes, polite requests, unreal conditions, past subjunctive */
const K2USE = [
  {s:'Wenn ich Zeit ___, würde ich mitkommen.',       a:'hätte',   o:['habe','hatte','haben'],  ex:'Unreal condition → Konjunktiv II hätte.', en:'If I had time…'},
  {s:'___ Sie mir bitte helfen?',                     a:'Könnten', o:['Können','Konnten','Könnte'],ex:'Polite request → Konjunktiv II.',    en:'Could you help me, please?'},
  {s:'Ich ___ gern noch einen Kaffee.',               a:'hätte',   o:['habe','hatte','haben'],  ex:'“Ich hätte gern …” = polite ordering.',  en:'I would like another coffee.'},
  {s:'Wenn er früher gekommen ___, hätten wir ihn gesehen.',a:'wäre',o:['ist','war','würde'],   ex:'Past unreal: wäre/hätte + Partizip II.', en:'If he had come earlier…'},
  {s:'An deiner Stelle ___ ich das nicht tun.',       a:'würde',   o:['werde','wurde','will'],  ex:'Advice: “An deiner Stelle würde ich …”.',en:'In your place I wouldn’t do that.'},
  {s:'Es ___ schön, wenn du kommen könntest.',        a:'wäre',    o:['ist','war','sei'],       ex:'Hypothetical → wäre.',                   en:'It would be nice if you could come.'},
  {s:'Ich ___ nicht gedacht, dass das so schwer ist.',a:'hätte',   o:['habe','hatte','würde'],  ex:'Past subjunctive: hätte + Partizip II.', en:'I wouldn’t have thought…'},
  {s:'Fast ___ ich den Zug verpasst!',                a:'hätte',   o:['habe','hatte','bin'],    ex:'“Fast hätte ich …” = I almost did.',     en:'I almost missed the train!'},
  {s:'___ ich doch mehr gelernt!',                    a:'Hätte',   o:['Habe','Hatte','Wäre'],   ex:'Wish about the past → Hätte ich doch …!',en:'If only I had studied more!'},
  {s:'Er tut so, als ___ er alles wüsste.',           a:'ob',      o:['wenn','dass','wie'],     ex:'“als ob” + Konjunktiv II = as if.',      en:'He acts as if he knew everything.'}
];

/* ===================== Infinitiv mit zu ===================== */
const INFZU = [
  {s:'Ich fahre in die Stadt, ___ einzukaufen.',          a:'um',      o:['ohne','anstatt','damit'], ex:'um … zu = purpose (“in order to”).', en:'to go shopping'},
  {s:'Er ging weg, ___ ein Wort zu sagen.',               a:'ohne',    o:['um','anstatt','damit'],   ex:'ohne … zu = without doing.',         en:'without saying a word'},
  {s:'___ zu lernen, spielte er den ganzen Tag.',         a:'Anstatt', o:['Um','Ohne','Damit'],      ex:'anstatt … zu = instead of doing.',   en:'instead of studying'},
  {s:'Ich habe vergessen, die Mail ___ schreiben.',       a:'zu',      o:['um','für','zum'],         ex:'Many verbs take a plain zu-infinitive.',en:'to write the mail'},
  {s:'Es ist wichtig, pünktlich ___ sein.',               a:'zu',      o:['um','zum','für'],         ex:'After “es ist + adjective” → zu + infinitive.',en:'to be punctual'},
  {s:'Er behauptet, alles verstanden ___ haben.',         a:'zu',      o:['um','und','dass'],        ex:'Perfect infinitive: zu haben / zu sein.',en:'to have understood everything'},
  {s:'Sie beginnt, Deutsch ___ lernen.',                  a:'zu',      o:['um','für','zum'],         ex:'beginnen + zu + Infinitiv.',          en:'to start learning German'},
  {s:'Ich lasse mein Auto reparieren — ich brauche nichts ___ tun.',a:'zu',o:['um','für','und'],     ex:'brauchen + nicht + zu + Infinitiv.',  en:'I don’t need to do anything'}
];

/* ===================== Futur II & tense nuance ===================== */
const FUTUR = [
  {s:'Morgen um diese Zeit ___ ich die Prüfung geschafft haben.',a:'werde',o:['werden','wurde','würde'],ex:'Futur II: werden + Partizip II + haben/sein.',en:'By this time tomorrow I will have passed.'},
  {s:'Er ___ das sicher schon erledigt haben.',           a:'wird',  o:['werde','wurde','würde'],  ex:'Futur II also expresses a strong assumption about the past.',en:'He will surely have done it already.'},
  {s:'Bis Freitag ___ wir umgezogen sein.',               a:'werden',o:['wird','wurde','würden'],  ex:'Futur II with sein-verbs.',          en:'By Friday we will have moved.'},
  {s:'Sie ___ den Zug wohl verpasst haben.',              a:'wird',  o:['werden','wurde','würde'], ex:'“wohl” + Futur II = probably happened.',en:'She has probably missed the train.'}
];

/* ===================== reflexive & reciprocal ===================== */
const REFLEX = [
  {s:'Ich wasche ___ jeden Morgen.',           a:'mich', o:['mir','sich','dich'],  ex:'Direct reflexive → accusative: mich.', en:'I wash myself.'},
  {s:'Ich wasche ___ die Hände.',              a:'mir',  o:['mich','sich','dir'],  ex:'With a second object the reflexive is dative: mir.',en:'I wash my hands.'},
  {s:'Er freut ___ über das Geschenk.',        a:'sich', o:['ihn','ihm','es'],     ex:'sich freuen über + Akkusativ.',        en:'He is happy about the gift.'},
  {s:'Wir treffen ___ um acht.',               a:'uns',  o:['sich','euch','unser'],ex:'Reciprocal: wir treffen uns = we meet each other.',en:'We meet at eight.'},
  {s:'Kannst du ___ das vorstellen?',          a:'dir',  o:['dich','du','dein'],   ex:'sich etwas vorstellen → dative reflexive.',en:'Can you imagine that?'},
  {s:'Sie interessiert ___ für Kunst.',        a:'sich', o:['ihr','sie','ihre'],   ex:'sich interessieren für + Akkusativ.',  en:'She is interested in art.'},
  {s:'Setzt ___ bitte!',                       a:'euch', o:['sich','uns','dich'],  ex:'ihr-form imperative → euch.',          en:'Please sit down!'},
  {s:'Ich kann ___ nicht entscheiden.',        a:'mich', o:['mir','sich','meine'], ex:'sich entscheiden → accusative.',       en:'I can’t decide.'}
];

/* ===================== comparison ===================== */
const COMPARE = [
  {adj:'gut',   comp:'besser',  sup:'am besten',   en:'good'},
  {adj:'viel',  comp:'mehr',    sup:'am meisten',  en:'much'},
  {adj:'gern',  comp:'lieber',  sup:'am liebsten', en:'gladly'},
  {adj:'hoch',  comp:'höher',   sup:'am höchsten', en:'high'},
  {adj:'nah',   comp:'näher',   sup:'am nächsten', en:'near'},
  {adj:'groß',  comp:'größer',  sup:'am größten',  en:'big'},
  {adj:'alt',   comp:'älter',   sup:'am ältesten', en:'old'},
  {adj:'jung',  comp:'jünger',  sup:'am jüngsten', en:'young'},
  {adj:'lang',  comp:'länger',  sup:'am längsten', en:'long'},
  {adj:'kurz',  comp:'kürzer',  sup:'am kürzesten',en:'short'},
  {adj:'warm',  comp:'wärmer',  sup:'am wärmsten', en:'warm'},
  {adj:'kalt',  comp:'kälter',  sup:'am kältesten',en:'cold'},
  {adj:'stark', comp:'stärker', sup:'am stärksten',en:'strong'},
  {adj:'schnell',comp:'schneller',sup:'am schnellsten',en:'fast'},
  {adj:'teuer', comp:'teurer',  sup:'am teuersten',en:'expensive'},
  {adj:'dunkel',comp:'dunkler', sup:'am dunkelsten',en:'dark'}
];

/* ===================== negation ===================== */
const NEGATION = [
  {s:'Ich habe ___ Zeit.',               a:'keine', o:['nicht','kein','nichts'], ex:'Noun with no article → kein-. “Zeit” is feminine.', en:'I have no time.'},
  {s:'Das ist ___ mein Auto.',           a:'nicht', o:['kein','keine','nichts'], ex:'Possessive already there → negate with nicht.',     en:'That is not my car.'},
  {s:'Er ist ___ Lehrer.',               a:'kein',  o:['nicht','keine','nichts'],ex:'Professions without article → kein.',               en:'He is not a teacher.'},
  {s:'Ich kenne ___ hier.',              a:'niemanden',o:['nichts','keiner','nicht'],ex:'niemanden = nobody (accusative).',              en:'I know nobody here.'},
  {s:'Ich verstehe ___.',                a:'nichts',o:['nicht','kein','niemand'],ex:'nichts = nothing.',                                 en:'I understand nothing.'},
  {s:'Ich war ___ in Japan.',            a:'noch nie',o:['nicht mehr','kein','nichts'],ex:'noch nie = never yet.',                       en:'I have never been to Japan.'},
  {s:'Sie wohnt ___ in Köln.',           a:'nicht mehr',o:['noch nie','kein','nichts'],ex:'nicht mehr = no longer.',                     en:'She no longer lives in Cologne.'},
  {s:'Ich habe ___ Geld dabei.',         a:'kein',  o:['nicht','keine','nichts'],ex:'Geld is neuter → kein Geld.',                        en:'I have no money with me.'}
];

/* ===================== imperative ===================== */
const IMPER = [
  {inf:'kommen', du:'Komm!',     ihr:'Kommt!',     sie:'Kommen Sie!',    en:'come'},
  {inf:'gehen',  du:'Geh!',      ihr:'Geht!',      sie:'Gehen Sie!',     en:'go'},
  {inf:'warten', du:'Warte!',    ihr:'Wartet!',    sie:'Warten Sie!',    en:'wait'},
  {inf:'sein',   du:'Sei!',      ihr:'Seid!',      sie:'Seien Sie!',     en:'be'},
  {inf:'haben',  du:'Hab!',      ihr:'Habt!',      sie:'Haben Sie!',     en:'have'},
  {inf:'nehmen', du:'Nimm!',     ihr:'Nehmt!',     sie:'Nehmen Sie!',    en:'take'},
  {inf:'geben',  du:'Gib!',      ihr:'Gebt!',      sie:'Geben Sie!',     en:'give'},
  {inf:'lesen',  du:'Lies!',     ihr:'Lest!',      sie:'Lesen Sie!',     en:'read'},
  {inf:'fahren', du:'Fahr!',     ihr:'Fahrt!',     sie:'Fahren Sie!',    en:'drive'},
  {inf:'sprechen',du:'Sprich!',  ihr:'Sprecht!',   sie:'Sprechen Sie!',  en:'speak'},
  {inf:'aufstehen',du:'Steh auf!',ihr:'Steht auf!',sie:'Stehen Sie auf!',en:'get up'},
  {inf:'anrufen',du:'Ruf an!',   ihr:'Ruft an!',   sie:'Rufen Sie an!',  en:'call'}
];

/* ===================== possessives ===================== */
const POSS = [
  {p:'ich',en:'my',   m:'mein',  f:'meine', n:'mein',  pl:'meine'},
  {p:'du', en:'your', m:'dein',  f:'deine', n:'dein',  pl:'deine'},
  {p:'er', en:'his',  m:'sein',  f:'seine', n:'sein',  pl:'seine'},
  {p:'sie',en:'her',  m:'ihr',   f:'ihre',  n:'ihr',   pl:'ihre'},
  {p:'wir',en:'our',  m:'unser', f:'unsere',n:'unser', pl:'unsere'},
  {p:'ihr',en:'your (pl)',m:'euer',f:'eure', n:'euer',  pl:'eure'},
  {p:'sie',en:'their',m:'ihr',   f:'ihre',  n:'ihr',   pl:'ihre'},
  {p:'Sie',en:'your (formal)',m:'Ihr',f:'Ihre',n:'Ihr',pl:'Ihre'}
];

/* ===================== ordinals & dates ===================== */
const ORDINAL = [
  {n:1,w:'erste'},{n:2,w:'zweite'},{n:3,w:'dritte'},{n:4,w:'vierte'},{n:5,w:'fünfte'},
  {n:6,w:'sechste'},{n:7,w:'siebte'},{n:8,w:'achte'},{n:9,w:'neunte'},{n:10,w:'zehnte'},
  {n:11,w:'elfte'},{n:12,w:'zwölfte'},{n:16,w:'sechzehnte'},{n:20,w:'zwanzigste'},
  {n:21,w:'einundzwanzigste'},{n:30,w:'dreißigste'},{n:100,w:'hundertste'}
];

/* ===================== multi-select question sets ===================== */
/* each: prompt, items[{t, ok}] — “select every correct one” */
const MULTI = [
  {lv:3,sk:'Prepositions',q:'Which prepositions always take the <b>Dativ</b>?',
   items:[{t:'mit',ok:1},{t:'bei',ok:1},{t:'seit',ok:1},{t:'für',ok:0},{t:'ohne',ok:0},{t:'durch',ok:0}],
   ex:'Dativ only: aus, bei, mit, nach, seit, von, zu. Akkusativ only: durch, für, gegen, ohne, um, bis.'},
  {lv:3,sk:'Prepositions',q:'Which prepositions always take the <b>Akkusativ</b>?',
   items:[{t:'für',ok:1},{t:'ohne',ok:1},{t:'gegen',ok:1},{t:'mit',ok:0},{t:'zu',ok:0},{t:'aus',ok:0}],
   ex:'durch, für, gegen, ohne, um, bis — “DOGFUB”.'},
  {lv:3,sk:'Prepositions',q:'Which of these are <b>two-way</b> prepositions (Akk or Dat)?',
   items:[{t:'in',ok:1},{t:'auf',ok:1},{t:'unter',ok:1},{t:'mit',ok:0},{t:'für',ok:0},{t:'seit',ok:0}],
   ex:'an, auf, hinter, in, neben, über, unter, vor, zwischen — motion = Akk, place = Dat.'},
  {lv:3,sk:'Verbs',q:'Which verbs form the Perfekt with <b>sein</b>?',
   items:[{t:'gehen',ok:1},{t:'fahren',ok:1},{t:'aufstehen',ok:1},{t:'kaufen',ok:0},{t:'lesen',ok:0},{t:'arbeiten',ok:0}],
   ex:'sein is used for movement and change of state: gehen, fahren, kommen, aufstehen, einschlafen, werden…'},
  {lv:3,sk:'Cases',q:'Which verbs take a <b>Dativ</b> object?',
   items:[{t:'helfen',ok:1},{t:'danken',ok:1},{t:'gefallen',ok:1},{t:'sehen',ok:0},{t:'kaufen',ok:0},{t:'finden',ok:0}],
   ex:'helfen, danken, gehören, gefallen, antworten, folgen, gratulieren, passen, schmecken take the Dativ.'},
  {lv:2,sk:'Articles',q:'Which nouns are <b>feminine</b> (die)?',
   items:[{t:'Zeitung',ok:1},{t:'Freiheit',ok:1},{t:'Übung',ok:1},{t:'Mädchen',ok:0},{t:'Hund',ok:0},{t:'Haus',ok:0}],
   ex:'-ung, -heit, -keit, -schaft, -ion, -ei, -ie are feminine. -chen/-lein are always neuter.'},
  {lv:4,sk:'Clauses',q:'After which words does the verb go to the <b>end</b>?',
   items:[{t:'weil',ok:1},{t:'obwohl',ok:1},{t:'dass',ok:1},{t:'deshalb',ok:0},{t:'denn',ok:0},{t:'und',ok:0}],
   ex:'Subordinating conjunctions send the verb last. “denn/und/aber/oder/sondern” do not change the order; “deshalb” takes position 1 and inverts.'},
  {lv:4,sk:'Connectors',q:'Which connectors cause <b>inversion</b> (verb right after them)?',
   items:[{t:'deshalb',ok:1},{t:'trotzdem',ok:1},{t:'außerdem',ok:1},{t:'weil',ok:0},{t:'und',ok:0},{t:'aber',ok:0}],
   ex:'Conjunctional adverbs occupy position 1, so the verb follows immediately: “Deshalb bleibe ich hier.”'},
  {lv:5,sk:'Passive',q:'Which sentences carry a <b>passive</b> meaning?',
   items:[{t:'Das Auto wird repariert.',ok:1},{t:'Das lässt sich reparieren.',ok:1},{t:'Das ist reparierbar.',ok:1},{t:'Er repariert das Auto.',ok:0},{t:'Das Auto ist teuer.',ok:0},{t:'Er will reparieren.',ok:0}],
   ex:'Besides werden + Partizip II, German uses man, sich lassen, -bar and sein + zu as passive substitutes.'},
  {lv:5,sk:'Konjunktiv',q:'Which forms are <b>Konjunktiv II</b>?',
   items:[{t:'wäre',ok:1},{t:'hätte',ok:1},{t:'käme',ok:1},{t:'war',ok:0},{t:'hatte',ok:0},{t:'kam',ok:0}],
   ex:'Konjunktiv II of strong verbs = Präteritum stem + Umlaut + -e: war → wäre, kam → käme.'},
  {lv:6,sk:'Style',q:'Which expressions belong to <b>formal written</b> German?',
   items:[{t:'infolgedessen',ok:1},{t:'hinsichtlich',ok:1},{t:'nahezu',ok:1},{t:'kriegen',ok:0},{t:'echt gut',ok:0},{t:'halt',ok:0}],
   ex:'Formal register prefers Latin-derived connectors and precise prepositions; “kriegen/halt/echt” are colloquial.'},
  {lv:6,sk:'Clauses',q:'Which are <b>genitive</b> prepositions?',
   items:[{t:'wegen',ok:1},{t:'trotz',ok:1},{t:'innerhalb',ok:1},{t:'seit',ok:0},{t:'nach',ok:0},{t:'gegen',ok:0}],
   ex:'wegen, trotz, während, statt, aufgrund, innerhalb, außerhalb, hinsichtlich… all govern the Genitiv.'},
  {lv:7,sk:'Idioms',q:'Which idioms mean roughly “to fail / to give up”?',
   items:[{t:'die Flinte ins Korn werfen',ok:1},{t:'das Handtuch werfen',ok:1},{t:'über den Berg sein',ok:0},{t:'Schwein haben',ok:0},{t:'den Nagel auf den Kopf treffen',ok:0}],
   ex:'“die Flinte ins Korn werfen” and “das Handtuch werfen” both mean to give up.'},
  {lv:7,sk:'Style',q:'Which sentences are stylistically <b>nominal</b> (Nominalstil)?',
   items:[{t:'Nach seiner Ankunft begann die Sitzung.',ok:1},{t:'Wegen des Regens blieben wir zu Hause.',ok:1},{t:'Nachdem er angekommen war, begann die Sitzung.',ok:0},{t:'Weil es regnete, blieben wir zu Hause.',ok:0}],
   ex:'Nominalstil packs the action into a noun after a preposition; Verbalstil uses a subordinate clause.'}
];

/* ===================== tap-the-word question sets ===================== */
/* each: prompt, words[], hit = index of the word to tap */
const TAPSET = [
  {lv:3,sk:'Cases',q:'Tap the <b>accusative object</b>.',words:['Ich','kaufe','einen','Apfel','.'],hit:3,ex:'“einen Apfel” is the direct object → Akkusativ. The tapped noun is its head.'},
  {lv:3,sk:'Cases',q:'Tap the <b>dative object</b>.',words:['Er','gibt','dem','Kind','ein','Buch','.'],hit:3,ex:'“dem Kind” is the indirect object → Dativ.'},
  {lv:3,sk:'Cases',q:'Tap the <b>subject</b> of the sentence.',words:['Heute','kommt','mein','Bruder','nach','Hause','.'],hit:3,ex:'“mein Bruder” is the subject → Nominativ, even though it is not first.'},
  {lv:2,sk:'Verbs',q:'Tap the <b>conjugated verb</b>.',words:['Am','Montag','fahre','ich','nach','Berlin','.'],hit:2,ex:'The finite verb sits in position 2 — here after the time phrase.'},
  {lv:3,sk:'Verbs',q:'Tap the <b>separable prefix</b>.',words:['Ich','stehe','jeden','Tag','um','sechs','auf','.'],hit:6,ex:'aufstehen splits: “stehe … auf”. The prefix goes to the very end.'},
  {lv:4,sk:'Clauses',q:'Tap the word that sends the verb to the <b>end</b>.',words:['Ich','bleibe','zu','Hause',',','weil','es','regnet','.'],hit:5,ex:'“weil” is subordinating → the verb “regnet” lands last.'},
  {lv:4,sk:'Clauses',q:'Tap the <b>relative pronoun</b>.',words:['Der','Mann',',','den','ich','traf',',','ist','Arzt','.'],hit:3,ex:'“den” is accusative masculine — the object of “traf”.'},
  {lv:3,sk:'Adjectives',q:'Tap the word with the <b>wrong ending</b>.',words:['Ich','sehe','einen','großer','Hund','.'],hit:3,ex:'After “einen” (Akk m) the mixed ending is -en: “einen großen Hund”.'},
  {lv:3,sk:'Cases',q:'Tap the <b>mistake</b> in this sentence.',words:['Ich','helfe','den','Mann','.'],hit:2,ex:'helfen takes the Dativ → “Ich helfe dem Mann.”'},
  {lv:4,sk:'Verbs',q:'Tap the <b>Partizip II</b>.',words:['Wir','haben','den','Film','gestern','gesehen','.'],hit:5,ex:'Perfekt = haben/sein + Partizip II at the end.'},
  {lv:5,sk:'Passive',q:'Tap the word that makes this sentence <b>passive</b>.',words:['Das','Haus','wird','nächstes','Jahr','gebaut','.'],hit:2,ex:'“wird” + Partizip II = Vorgangspassiv.'},
  {lv:5,sk:'Connectors',q:'Tap the word that must be followed by the <b>verb</b>.',words:['Es','regnete',',','trotzdem','gingen','wir','spazieren','.'],hit:3,ex:'“trotzdem” fills position 1, so the verb “gingen” comes straight after.'},
  {lv:6,sk:'Clauses',q:'Tap the <b>genitive</b> noun phrase head.',words:['Wegen','des','schlechten','Wetters','bleiben','wir','hier','.'],hit:3,ex:'“Wetters” carries the genitive -s after “wegen”.'},
  {lv:6,sk:'Style',q:'Tap the <b>colloquial</b> word that does not fit a formal report.',words:['Der','Antrag','wurde','leider','nicht','gekriegt','.'],hit:5,ex:'“gekriegt” is colloquial — a report would say “erhalten” or “genehmigt”.'},
  {lv:7,sk:'Style',q:'Tap the <b>Modalpartikel</b>.',words:['Das','ist','ja','wirklich','erstaunlich','!'],hit:2,ex:'“ja” here is a Modalpartikel signalling shared surprise — not the answer “yes”.'},
  {lv:7,sk:'Clauses',q:'Tap the head of the <b>extended participial attribute</b>.',words:['Die','gestern','beschlossenen','Maßnahmen','treten','morgen','in','Kraft','.'],hit:2,ex:'“beschlossenen” is the participle; everything before it modifies it.'}
];

/* ===================== multi-gap sentences ===================== */
/* s: sentence with ___ for each gap, a: answers in order, extra: distractor tiles */
const GAPSET = [
  {lv:2,sk:'Verbs',s:'Ich ___ Anna und ___ aus Wien.',a:['heiße','komme'],extra:['heißt','kommt'],ex:'ich heiße · ich komme — the ich-form ends in -e.',tr:'My name is Anna and I come from Vienna.'},
  {lv:2,sk:'Articles',s:'___ Hund ist groß, aber ___ Katze ist klein.',a:['Der','die'],extra:['Das','den'],ex:'der Hund (m) · die Katze (f).',tr:'The dog is big, but the cat is small.'},
  {lv:3,sk:'Cases',s:'Ich gebe ___ Kind ___ Ball.',a:['dem','den'],extra:['der','dem'],ex:'Indirect object dative “dem Kind”, direct object accusative “den Ball”.',tr:'I give the child the ball.'},
  {lv:3,sk:'Prepositions',s:'Ich fahre ___ Bus ___ Arbeit.',a:['mit dem','zur'],extra:['mit der','zum'],ex:'mit + Dativ (dem Bus) · zu + Dativ, zu der → zur Arbeit.',tr:'I take the bus to work.'},
  {lv:3,sk:'Verbs',s:'Gestern ___ ich ins Kino ___ .',a:['bin','gegangen'],extra:['habe','gegangt'],ex:'gehen forms the Perfekt with sein: ich bin gegangen.',tr:'Yesterday I went to the cinema.'},
  {lv:4,sk:'Clauses',s:'Ich weiß nicht, ___ er heute ___ .',a:['ob','kommt'],extra:['dass','kommen'],ex:'Indirect yes/no question → “ob”; the verb goes last.',tr:'I don’t know whether he is coming today.'},
  {lv:4,sk:'Adjectives',s:'Ich habe ___ neu___ Auto gekauft.',a:['ein','es'],extra:['einen','en'],ex:'das Auto is neuter: ein neues Auto (mixed, Akk n → -es).',tr:'I bought a new car.'},
  {lv:4,sk:'Verbs',s:'Als ich klein ___ , ___ wir in Hamburg.',a:['war','wohnten'],extra:['bin','wohnen'],ex:'Narrative past → Präteritum in both clauses.',tr:'When I was little we lived in Hamburg.'},
  {lv:5,sk:'Passive',s:'Die Brücke ___ letztes Jahr ___ .',a:['wurde','gebaut'],extra:['ist','bauen'],ex:'Vorgangspassiv Präteritum: wurde + Partizip II.',tr:'The bridge was built last year.'},
  {lv:5,sk:'Konjunktiv',s:'Wenn ich reich ___ , ___ ich um die Welt reisen.',a:['wäre','würde'],extra:['bin','werde'],ex:'Unreal condition: wäre … würde + Infinitiv.',tr:'If I were rich I would travel the world.'},
  {lv:5,sk:'Connectors',s:'Es war spät, ___ ___ wir noch weiter.',a:['trotzdem','arbeiteten'],extra:['obwohl','arbeiten'],ex:'“trotzdem” takes position 1 → the verb follows immediately.',tr:'It was late, nevertheless we kept working.'},
  {lv:6,sk:'Konjunktiv',s:'Der Minister sagte, er ___ nichts davon gewusst und ___ sofort gehandelt.',a:['habe','habe'],extra:['hat','hätte'],ex:'Indirect speech → Konjunktiv I “habe” in both clauses.',tr:'The minister said he had known nothing and had acted at once.'},
  {lv:6,sk:'Style',s:'___ des schlechten Wetters wurde die Veranstaltung ___ .',a:['Aufgrund','abgesagt'],extra:['Wegen dem','abgesagen'],ex:'aufgrund + Genitiv; Vorgangspassiv “wurde abgesagt”.',tr:'Due to the bad weather the event was cancelled.'},
  {lv:6,sk:'Clauses',s:'Je länger ich warte, ___ ___ werde ich.',a:['desto','nervöser'],extra:['umso mehr','nervös'],ex:'je + comparative … desto + comparative; the second clause inverts.',tr:'The longer I wait, the more nervous I get.'},
  {lv:7,sk:'Style',s:'Die ___ Jahren ___ Mieten belasten viele Haushalte.',a:['seit','steigenden'],extra:['vor','gestiegen'],ex:'Extended participial attribute: “die seit Jahren steigenden Mieten”.',tr:'Rents, rising for years, burden many households.'},
  {lv:7,sk:'Idioms',s:'Er hat den Nagel ___ den ___ getroffen.',a:['auf','Kopf'],extra:['an','Punkt'],ex:'“den Nagel auf den Kopf treffen” = to hit the nail on the head.',tr:'He hit the nail on the head.'}
];

/* ===================== dictation sentences (listen & type) ===================== */
const DICTATE = [
  {lv:2,s:'Ich wohne in Berlin.',           en:'I live in Berlin.'},
  {lv:2,s:'Wie geht es dir heute?',         en:'How are you today?'},
  {lv:2,s:'Das Wetter ist schön.',          en:'The weather is nice.'},
  {lv:3,s:'Ich habe gestern einen Film gesehen.',en:'I watched a film yesterday.'},
  {lv:3,s:'Können Sie mir bitte helfen?',   en:'Could you help me, please?'},
  {lv:3,s:'Wir fahren mit dem Zug nach München.',en:'We are going to Munich by train.'},
  {lv:4,s:'Ich bleibe zu Hause, weil es regnet.',en:'I am staying home because it is raining.'},
  {lv:4,s:'Nachdem wir gegessen hatten, gingen wir spazieren.',en:'After we had eaten we went for a walk.'},
  {lv:4,s:'Der Mann, den ich getroffen habe, ist Arzt.',en:'The man I met is a doctor.'},
  {lv:5,s:'Das Haus wird nächstes Jahr renoviert.',en:'The house will be renovated next year.'},
  {lv:5,s:'Wenn ich mehr Zeit hätte, würde ich Klavier lernen.',en:'If I had more time I would learn piano.'},
  {lv:5,s:'Trotz des schlechten Wetters war die Reise schön.',en:'Despite the bad weather the trip was nice.'},
  {lv:6,s:'Der Sprecher betonte, die Lage sei ernst.',en:'The speaker stressed the situation was serious.'},
  {lv:6,s:'Aufgrund der steigenden Kosten müssen wir sparen.',en:'Due to rising costs we have to economise.'},
  {lv:7,s:'Die gestern beschlossenen Maßnahmen treten morgen in Kraft.',en:'The measures decided yesterday take effect tomorrow.'},
  {lv:7,s:'Hinsichtlich der Finanzierung bestehen noch erhebliche Unklarheiten.',en:'Regarding the funding, considerable uncertainty remains.'}
];

/* ===================== dialogue: pick the fitting reply ===================== */
const DIALOG = [
  {lv:2,a:'Guten Tag! Wie heißen Sie?',  r:'Ich heiße Müller.',   o:['Es geht mir gut.','Danke schön.','Bis morgen!'],ex:'A name question needs a name.'},
  {lv:2,a:'Wie geht es dir?',            r:'Danke, gut!',         o:['Ich heiße Anna.','Um acht Uhr.','In Berlin.'],ex:'“Wie geht es dir?” asks about your well-being.'},
  {lv:2,a:'Woher kommst du?',            r:'Aus Spanien.',        o:['Nach Hause.','Um zehn.','Mit dem Bus.'],ex:'woher = where from → aus + country.'},
  {lv:3,a:'Was möchten Sie trinken?',    r:'Einen Kaffee, bitte.',o:['Ja, gerne morgen.','Zum Bahnhof.','Seit drei Jahren.'],ex:'A drinks order takes the accusative.'},
  {lv:3,a:'Wie lange wohnst du hier?',   r:'Seit drei Jahren.',   o:['Vor drei Jahren.','In drei Jahren.','Um drei.'],ex:'“seit” + Dativ for an ongoing period.'},
  {lv:3,a:'Entschuldigung, wo ist der Bahnhof?',r:'Gehen Sie hier geradeaus.',o:['Ja, bitte.','Mir geht es gut.','Ich bin Lehrer.'],ex:'A “wo” question needs a direction.'},
  {lv:4,a:'Könnten Sie das bitte wiederholen?',r:'Natürlich, gern.',o:['Nein, ich bin müde.','Um sieben Uhr.','Aus Berlin.'],ex:'A polite request gets a polite agreement.'},
  {lv:4,a:'Hättest du Lust, ins Kino zu gehen?',r:'Ja, das wäre schön.',o:['Ja, ich habe es.','Nein, es regnet nicht.','Seit gestern.'],ex:'An invitation in Konjunktiv II is answered in kind.'},
  {lv:5,a:'Es tut mir leid, ich habe den Termin vergessen.',r:'Das ist kein Problem, machen wir einen neuen.',o:['Danke, gleichfalls.','Ich komme aus Wien.','Das Wetter ist gut.'],ex:'An apology is met with reassurance.'},
  {lv:5,a:'Wie stehen Sie zu diesem Vorschlag?',r:'Im Prinzip einverstanden, allerdings mit einer Einschränkung.',o:['Ja, bitte einen Kaffee.','Seit letztem Jahr.','Nach Hamburg.'],ex:'An opinion question needs a stance, not a fact.'},
  {lv:6,a:'Darf ich Sie kurz unterbrechen?',r:'Bitte, sprechen Sie.',o:['Ich bin satt, danke.','Um halb acht.','Mit dem Fahrrad.'],ex:'Formal permission → formal consent.'},
  {lv:6,a:'Worauf stützt sich Ihre Einschätzung?',r:'Auf die Daten des letzten Quartals.',o:['Darauf freue ich mich.','Seit zwei Wochen.','In die Stadt.'],ex:'“worauf” is answered with “auf + Akkusativ”.'},
  {lv:7,a:'Ich fürchte, wir reden aneinander vorbei.',r:'Dann lassen Sie uns noch einmal von vorn beginnen.',o:['Ja, der Kaffee ist gut.','Das war vor einem Jahr.','Ich nehme den Zug.'],ex:'“aneinander vorbeireden” = to talk past each other.'},
  {lv:7,a:'Das ist doch an den Haaren herbeigezogen!',r:'Dann legen Sie bitte Ihre Gegenargumente dar.',o:['Danke für die Blumen.','Seit heute Morgen.','Nach Berlin, bitte.'],ex:'“an den Haaren herbeigezogen” = far-fetched; the reply invites counter-arguments.'}
];

return {REL,RELSENT,RELPREP,K1,REPORT,CONN,TWOPART,ADVTYPE,NDEKL,DAWO,FVG,MODPART,
        GENPREP,GENNOUN,PASSIV,ZUSTAND,PASSERS,NOMINAL,SUBJMOD,SUBJMOD_MEAN,
        PARTIZIP,ERWPART,WORDFORM,VPREFIX,IDIOM,SPRICHWORT,REGISTER,K2,K2USE,
        INFZU,FUTUR,REFLEX,COMPARE,NEGATION,IMPER,POSS,ORDINAL,
        MULTI,TAPSET,GAPSET,DICTATE,DIALOG};
})();
