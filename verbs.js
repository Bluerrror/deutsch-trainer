/* Deutsch Trainer — irregular & strong verb tables.
   Every form hand-checked. Fields:
     inf  infinitive          en   meaning
     du/er present forms ONLY when they are irregular (vowel change)
     pt   Präteritum (ich/er — the 1st/3rd sg form)
     pp   Partizip II         aux  haben | sein
     k2   Konjunktiv II (er)  cls  strong | mixed | modal | irregular
     lv   2=A1 3=A2 4=B1 5=B2 6=C1
   Verbs whose Perfekt can take either auxiliary carry aux2.                */
window.VERBS_IRR = [
/* ---------- the three pillars ---------- */
{inf:'sein',   en:'to be',        du:'bist', er:'ist',  pt:'war',    pp:'gewesen',   aux:'sein',  k2:'wäre',   cls:'irregular',lv:2,imp:'sei'},
{inf:'haben',  en:'to have',      du:'hast', er:'hat',  pt:'hatte',  pp:'gehabt',    aux:'haben', k2:'hätte',  cls:'irregular',lv:2,imp:'hab'},
{inf:'werden', en:'to become',    du:'wirst',er:'wird', pt:'wurde',  pp:'geworden',  aux:'sein',  k2:'würde',  cls:'irregular',lv:2,imp:'werde'},

/* ---------- modal verbs ---------- */
{inf:'können', en:'can, to be able',du:'kannst',er:'kann',pt:'konnte',pp:'gekonnt',  aux:'haben', k2:'könnte', cls:'modal',lv:2,note:'Partizip as a modal: „hat kommen können“'},
{inf:'müssen', en:'must, to have to',du:'musst',er:'muss',pt:'musste',pp:'gemusst',  aux:'haben', k2:'müsste', cls:'modal',lv:2,note:'Partizip as a modal: „hat gehen müssen“'},
{inf:'dürfen', en:'may, to be allowed',du:'darfst',er:'darf',pt:'durfte',pp:'gedurft',aux:'haben',k2:'dürfte', cls:'modal',lv:2},
{inf:'sollen', en:'should, ought to',du:'sollst',er:'soll',pt:'sollte',pp:'gesollt', aux:'haben', k2:'sollte', cls:'modal',lv:2},
{inf:'wollen', en:'to want',      du:'willst',er:'will',pt:'wollte', pp:'gewollt',   aux:'haben', k2:'wollte', cls:'modal',lv:2},
{inf:'mögen',  en:'to like',      du:'magst',er:'mag',  pt:'mochte', pp:'gemocht',   aux:'haben', k2:'möchte', cls:'modal',lv:2},
{inf:'wissen', en:'to know (a fact)',du:'weißt',er:'weiß',pt:'wusste',pp:'gewusst',  aux:'haben', k2:'wüsste', cls:'mixed',lv:2,imp:'wisse'},

/* ---------- A1 core strong verbs ---------- */
{inf:'gehen',  en:'to go',        pt:'ging',   pp:'gegangen',  aux:'sein', k2:'ginge',  cls:'strong',lv:2},
{inf:'kommen', en:'to come',      pt:'kam',    pp:'gekommen',  aux:'sein', k2:'käme',   cls:'strong',lv:2},
{inf:'stehen', en:'to stand',     pt:'stand',  pp:'gestanden', aux:'haben',k2:'stünde', cls:'strong',lv:2,note:'South Germany/Austria: ist gestanden'},
{inf:'sehen',  en:'to see',       du:'siehst',er:'sieht',pt:'sah',pp:'gesehen',aux:'haben',k2:'sähe',cls:'strong',lv:2,imp:'sieh'},
{inf:'geben',  en:'to give',      du:'gibst',er:'gibt',pt:'gab', pp:'gegeben',  aux:'haben',k2:'gäbe',  cls:'strong',lv:2,imp:'gib'},
{inf:'nehmen', en:'to take',      du:'nimmst',er:'nimmt',pt:'nahm',pp:'genommen',aux:'haben',k2:'nähme',cls:'strong',lv:2,imp:'nimm'},
{inf:'finden', en:'to find',      pt:'fand',   pp:'gefunden',  aux:'haben',k2:'fände',  cls:'strong',lv:2},
{inf:'bleiben',en:'to stay',      pt:'blieb',  pp:'geblieben', aux:'sein', k2:'bliebe', cls:'strong',lv:2},
{inf:'heißen', en:'to be called', pt:'hieß',   pp:'geheißen',  aux:'haben',k2:'hieße',  cls:'strong',lv:2},
{inf:'lesen',  en:'to read',      du:'liest',er:'liest',pt:'las',pp:'gelesen',  aux:'haben',k2:'läse',  cls:'strong',lv:2,imp:'lies'},
{inf:'sprechen',en:'to speak',    du:'sprichst',er:'spricht',pt:'sprach',pp:'gesprochen',aux:'haben',k2:'spräche',cls:'strong',lv:2,imp:'sprich'},
{inf:'essen',  en:'to eat',       du:'isst', er:'isst', pt:'aß',  pp:'gegessen', aux:'haben',k2:'äße',   cls:'strong',lv:2,imp:'iss'},
{inf:'trinken',en:'to drink',     pt:'trank',  pp:'getrunken', aux:'haben',k2:'tränke', cls:'strong',lv:2},
{inf:'fahren', en:'to drive, go', du:'fährst',er:'fährt',pt:'fuhr',pp:'gefahren',aux:'sein',aux2:'haben',k2:'führe',cls:'strong',lv:2,note:'haben when it takes an object: „Er hat das Auto gefahren.“'},
{inf:'laufen', en:'to run, walk', du:'läufst',er:'läuft',pt:'lief',pp:'gelaufen',aux:'sein',k2:'liefe',cls:'strong',lv:2},
{inf:'schlafen',en:'to sleep',    du:'schläfst',er:'schläft',pt:'schlief',pp:'geschlafen',aux:'haben',k2:'schliefe',cls:'strong',lv:2},
{inf:'tragen', en:'to carry, wear',du:'trägst',er:'trägt',pt:'trug',pp:'getragen',aux:'haben',k2:'trüge',cls:'strong',lv:2},
{inf:'schreiben',en:'to write',   pt:'schrieb',pp:'geschrieben',aux:'haben',k2:'schriebe',cls:'strong',lv:2},
{inf:'treffen',en:'to meet',      du:'triffst',er:'trifft',pt:'traf',pp:'getroffen',aux:'haben',k2:'träfe',cls:'strong',lv:2,imp:'triff'},
{inf:'helfen', en:'to help',      du:'hilfst',er:'hilft',pt:'half',pp:'geholfen',aux:'haben',k2:'hülfe',cls:'strong',lv:2,note:'takes the Dativ',imp:'hilf'},
{inf:'tun',    en:'to do',        pt:'tat',    pp:'getan',     aux:'haben',k2:'täte',   cls:'irregular',lv:2},
{inf:'denken', en:'to think',     pt:'dachte', pp:'gedacht',   aux:'haben',k2:'dächte', cls:'mixed',lv:2},
{inf:'bringen',en:'to bring',     pt:'brachte',pp:'gebracht',  aux:'haben',k2:'brächte',cls:'mixed',lv:2},
{inf:'kennen', en:'to know (be acquainted)',pt:'kannte',pp:'gekannt',aux:'haben',k2:'kennte',cls:'mixed',lv:2},

/* ---------- A2 ---------- */
{inf:'halten', en:'to hold, stop',du:'hältst',er:'hält',pt:'hielt',pp:'gehalten',aux:'haben',k2:'hielte',cls:'strong',lv:3,imp:'halt'},
{inf:'fallen', en:'to fall',      du:'fällst',er:'fällt',pt:'fiel',pp:'gefallen',aux:'sein',k2:'fiele',cls:'strong',lv:3},
{inf:'gefallen',en:'to please, be liked',du:'gefällst',er:'gefällt',pt:'gefiel',pp:'gefallen',aux:'haben',k2:'gefiele',cls:'strong',lv:3,note:'takes the Dativ: „Das Bild gefällt mir.“',imp:'gefall'},
{inf:'waschen',en:'to wash',      du:'wäschst',er:'wäscht',pt:'wusch',pp:'gewaschen',aux:'haben',k2:'wüsche',cls:'strong',lv:3},
{inf:'vergessen',en:'to forget',  du:'vergisst',er:'vergisst',pt:'vergaß',pp:'vergessen',aux:'haben',k2:'vergäße',cls:'strong',lv:3,note:'no ge- — the prefix ver- is inseparable',imp:'vergiss'},
{inf:'verlieren',en:'to lose',    pt:'verlor', pp:'verloren',  aux:'haben',k2:'verlöre',cls:'strong',lv:3},
{inf:'verstehen',en:'to understand',pt:'verstand',pp:'verstanden',aux:'haben',k2:'verstünde',cls:'strong',lv:3},
{inf:'beginnen',en:'to begin',    pt:'begann', pp:'begonnen',  aux:'haben',k2:'begänne',cls:'strong',lv:3},
{inf:'bekommen',en:'to get, receive',pt:'bekam',pp:'bekommen', aux:'haben',k2:'bekäme',cls:'strong',lv:3,note:'false friend — NOT “to become”'},
{inf:'steigen',en:'to climb, rise',pt:'stieg', pp:'gestiegen', aux:'sein', k2:'stiege',cls:'strong',lv:3},
{inf:'fliegen',en:'to fly',       pt:'flog',   pp:'geflogen',  aux:'sein', k2:'flöge', cls:'strong',lv:3},
{inf:'ziehen', en:'to pull, move',pt:'zog',    pp:'gezogen',   aux:'haben',aux2:'sein',k2:'zöge',cls:'strong',lv:3,note:'sein when it means “to move house”: „Er ist nach Köln gezogen.“'},
{inf:'schließen',en:'to close',   pt:'schloss',pp:'geschlossen',aux:'haben',k2:'schlösse',cls:'strong',lv:3},
{inf:'singen', en:'to sing',      pt:'sang',   pp:'gesungen',  aux:'haben',k2:'sänge', cls:'strong',lv:3},
{inf:'schwimmen',en:'to swim',    pt:'schwamm',pp:'geschwommen',aux:'sein',k2:'schwämme',cls:'strong',lv:3},
{inf:'sitzen', en:'to sit',       pt:'saß',    pp:'gesessen',  aux:'haben',k2:'säße',  cls:'strong',lv:3},
{inf:'liegen', en:'to lie, be located',pt:'lag',pp:'gelegen',  aux:'haben',k2:'läge',  cls:'strong',lv:3},
{inf:'bitten', en:'to ask, request',pt:'bat',  pp:'gebeten',   aux:'haben',k2:'bäte',  cls:'strong',lv:3,note:'bitten um + Akkusativ'},
{inf:'lassen', en:'to let, leave',du:'lässt',er:'lässt',pt:'ließ',pp:'gelassen',aux:'haben',k2:'ließe',cls:'strong',lv:3,note:'with an infinitive the Partizip is „lassen“: „Ich habe es reparieren lassen.“'},
{inf:'schlagen',en:'to hit, beat',du:'schlägst',er:'schlägt',pt:'schlug',pp:'geschlagen',aux:'haben',k2:'schlüge',cls:'strong',lv:3},
{inf:'wachsen',en:'to grow',      du:'wächst',er:'wächst',pt:'wuchs',pp:'gewachsen',aux:'sein',k2:'wüchse',cls:'strong',lv:3},
{inf:'fangen', en:'to catch',     du:'fängst',er:'fängt',pt:'fing',pp:'gefangen',aux:'haben',k2:'finge',cls:'strong',lv:3},
{inf:'nennen', en:'to name, call',pt:'nannte', pp:'genannt',   aux:'haben',k2:'nennte',cls:'mixed',lv:3},
{inf:'rennen', en:'to run fast',  pt:'rannte', pp:'gerannt',   aux:'sein', k2:'rennte',cls:'mixed',lv:3},
{inf:'brennen',en:'to burn',      pt:'brannte',pp:'gebrannt',  aux:'haben',k2:'brennte',cls:'mixed',lv:3},
{inf:'springen',en:'to jump',     pt:'sprang', pp:'gesprungen',aux:'sein', k2:'spränge',cls:'strong',lv:3},
{inf:'schneiden',en:'to cut',     pt:'schnitt',pp:'geschnitten',aux:'haben',k2:'schnitte',cls:'strong',lv:3},
{inf:'scheinen',en:'to shine, seem',pt:'schien',pp:'geschienen',aux:'haben',k2:'schiene',cls:'strong',lv:3},

/* ---------- B1 ---------- */
{inf:'empfehlen',en:'to recommend',du:'empfiehlst',er:'empfiehlt',pt:'empfahl',pp:'empfohlen',aux:'haben',k2:'empföhle',cls:'strong',lv:4,imp:'empfiehl'},
{inf:'sterben',en:'to die',       du:'stirbst',er:'stirbt',pt:'starb',pp:'gestorben',aux:'sein',k2:'stürbe',cls:'strong',lv:4,imp:'stirb'},
{inf:'werfen', en:'to throw',     du:'wirfst',er:'wirft',pt:'warf',pp:'geworfen',aux:'haben',k2:'würfe',cls:'strong',lv:4,imp:'wirf'},
{inf:'brechen',en:'to break',     du:'brichst',er:'bricht',pt:'brach',pp:'gebrochen',aux:'haben',aux2:'sein',k2:'bräche',cls:'strong',lv:4,imp:'brich'},
{inf:'treten', en:'to step, kick',du:'trittst',er:'tritt',pt:'trat',pp:'getreten',aux:'sein',aux2:'haben',k2:'träte',cls:'strong',lv:4,imp:'tritt'},
{inf:'messen', en:'to measure',   du:'misst',er:'misst',pt:'maß',pp:'gemessen',aux:'haben',k2:'mäße',cls:'strong',lv:4,imp:'miss'},
{inf:'raten',  en:'to advise, guess',du:'rätst',er:'rät',pt:'riet',pp:'geraten',aux:'haben',k2:'riete',cls:'strong',lv:4,note:'takes the Dativ when it means “advise”',imp:'rat'},
{inf:'gelten', en:'to be valid, count',du:'giltst',er:'gilt',pt:'galt',pp:'gegolten',aux:'haben',k2:'gälte',cls:'strong',lv:4,imp:'gilt'},
{inf:'gelingen',en:'to succeed',  pt:'gelang',pp:'gelungen',  aux:'sein', k2:'gelänge',cls:'strong',lv:4,note:'impersonal + Dativ: „Es ist mir gelungen.“'},
{inf:'gewinnen',en:'to win',      pt:'gewann', pp:'gewonnen',  aux:'haben',k2:'gewänne',cls:'strong',lv:4},
{inf:'verschwinden',en:'to disappear',pt:'verschwand',pp:'verschwunden',aux:'sein',k2:'verschwände',cls:'strong',lv:4},
{inf:'leiden', en:'to suffer',    pt:'litt',   pp:'gelitten',  aux:'haben',k2:'litte', cls:'strong',lv:4,note:'leiden unter/an + Dativ'},
{inf:'streiten',en:'to argue',    pt:'stritt', pp:'gestritten',aux:'haben',k2:'stritte',cls:'strong',lv:4},
{inf:'greifen',en:'to grab',      pt:'griff',  pp:'gegriffen', aux:'haben',k2:'griffe',cls:'strong',lv:4},
{inf:'schweigen',en:'to be silent',pt:'schwieg',pp:'geschwiegen',aux:'haben',k2:'schwiege',cls:'strong',lv:4},
{inf:'leihen', en:'to lend, borrow',pt:'lieh', pp:'geliehen',  aux:'haben',k2:'liehe', cls:'strong',lv:4},
{inf:'heben',  en:'to lift',      pt:'hob',    pp:'gehoben',   aux:'haben',k2:'höbe',  cls:'strong',lv:4},
{inf:'bieten', en:'to offer',     pt:'bot',    pp:'geboten',   aux:'haben',k2:'böte',  cls:'strong',lv:4},
{inf:'riechen',en:'to smell',     pt:'roch',   pp:'gerochen',  aux:'haben',k2:'röche', cls:'strong',lv:4},
{inf:'gießen', en:'to pour, water',pt:'goss',  pp:'gegossen',  aux:'haben',k2:'gösse', cls:'strong',lv:4},
{inf:'binden', en:'to tie, bind', pt:'band',   pp:'gebunden',  aux:'haben',k2:'bände', cls:'strong',lv:4},
{inf:'sinken', en:'to sink, fall',pt:'sank',   pp:'gesunken',  aux:'sein', k2:'sänke', cls:'strong',lv:4},
{inf:'klingen',en:'to sound',     pt:'klang',  pp:'geklungen', aux:'haben',k2:'klänge',cls:'strong',lv:4},
{inf:'zwingen',en:'to force',     pt:'zwang',  pp:'gezwungen', aux:'haben',k2:'zwänge',cls:'strong',lv:4},
{inf:'beweisen',en:'to prove',    pt:'bewies', pp:'bewiesen',  aux:'haben',k2:'bewiese',cls:'strong',lv:4},
{inf:'reiten', en:'to ride',      pt:'ritt',   pp:'geritten',  aux:'sein', aux2:'haben',k2:'ritte',cls:'strong',lv:4},
{inf:'senden', en:'to send; to broadcast',pt:'sandte',pp:'gesandt',aux:'haben',k2:'sendete',cls:'mixed',lv:4,note:'regular (sendete/gesendet) when it means “to broadcast”'},
{inf:'wenden', en:'to turn',      pt:'wandte', pp:'gewandt',   aux:'haben',k2:'wendete',cls:'mixed',lv:4,note:'regular (wendete/gewendet) for turning a car or a pancake'},

/* ---------- B2 / C1 ---------- */
{inf:'befehlen',en:'to order, command',du:'befiehlst',er:'befiehlt',pt:'befahl',pp:'befohlen',aux:'haben',k2:'beföhle',cls:'strong',lv:5,imp:'befiehl'},
{inf:'stehlen',en:'to steal',     du:'stiehlst',er:'stiehlt',pt:'stahl',pp:'gestohlen',aux:'haben',k2:'stähle',cls:'strong',lv:5,imp:'stiehl'},
{inf:'erschrecken',en:'to be startled',du:'erschrickst',er:'erschrickt',pt:'erschrak',pp:'erschrocken',aux:'sein',k2:'erschräke',cls:'strong',lv:5,note:'regular and transitive when it means “to frighten someone”',imp:'erschrick'},
{inf:'weisen', en:'to point, direct',pt:'wies',pp:'gewiesen',  aux:'haben',k2:'wiese', cls:'strong',lv:5},
{inf:'schieben',en:'to push, shove',pt:'schob',pp:'geschoben', aux:'haben',k2:'schöbe',cls:'strong',lv:5},
{inf:'schmelzen',en:'to melt',    du:'schmilzt',er:'schmilzt',pt:'schmolz',pp:'geschmolzen',aux:'sein',k2:'schmölze',cls:'strong',lv:5,imp:'schmilz'},
{inf:'wiegen', en:'to weigh',     pt:'wog',    pp:'gewogen',   aux:'haben',k2:'wöge',  cls:'strong',lv:5},
{inf:'betrügen',en:'to deceive',  pt:'betrog', pp:'betrogen',  aux:'haben',k2:'betröge',cls:'strong',lv:5},
{inf:'verderben',en:'to spoil',   du:'verdirbst',er:'verdirbt',pt:'verdarb',pp:'verdorben',aux:'sein',aux2:'haben',k2:'verdürbe',cls:'strong',lv:5,imp:'verdirb'},
{inf:'schaffen',en:'to create',   pt:'schuf',  pp:'geschaffen',aux:'haben',k2:'schüfe',cls:'strong',lv:5,note:'regular (schaffte/geschafft) when it means “to manage, achieve”'},
{inf:'weichen',en:'to yield, give way',pt:'wich',pp:'gewichen',aux:'sein', k2:'wiche', cls:'strong',lv:6},
{inf:'gedeihen',en:'to thrive',   pt:'gedieh', pp:'gediehen',  aux:'sein', k2:'gediehe',cls:'strong',lv:6},
{inf:'erlöschen',en:'to go out, expire',du:'erlischst',er:'erlischt',pt:'erlosch',pp:'erloschen',aux:'sein',k2:'erlösche',cls:'strong',lv:6,imp:'erlisch'},
{inf:'bergen', en:'to salvage, hold',du:'birgst',er:'birgt',pt:'barg',pp:'geborgen',aux:'haben',k2:'bärge',cls:'strong',lv:6,imp:'birg'}
];

/* Präsens is fully regular for every verb above except sein/haben/werden and the
   modals; the du/er fields carry the only irregular forms. This table drives the
   conjugation trainer in index.html.                                          */
window.VERB_PRONOUNS=['ich','du','er/sie/es','wir','ihr','sie/Sie'];
