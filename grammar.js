/* Deutsch Trainer — grammar reference lessons.
   Explanations in the chosen support language (en/fa); German stays German.
   lv: 1=A0 2=A1 3=A2 4=B1 5=B2 · sk = skill for the "Practise this" button.  */
window.GRAMMAR=[

/* ============ A0 ============ */
{id:'alphabet',ic:'🔤',lv:1,sk:'Beginner',
 title:{en:'The German alphabet',fa:'الفبای آلمانی'},
 sub:{en:'26 letters + ä ö ü ß',fa:'۲۶ حرف + ä ö ü ß'},
 blocks:[
  {type:'text',md:{en:'German uses the same 26 Latin letters as English, plus four special ones: <b>ä, ö, ü</b> (called <i>Umlaute</i>) and <b>ß</b> (called <i>Eszett</i> or "sharp s"). The Umlaute change the vowel sound; <b>ß</b> is always pronounced like a sharp "ss".',
        fa:'آلمانی همان ۲۶ حرف لاتین انگلیسی را دارد، به‌علاوهٔ چهار حرف ویژه: <b>ä، ö، ü</b> (اوملاوت) و <b>ß</b> (اِس‌تسِت). اوملاوت‌ها صدای مصوت را عوض می‌کنند و <b>ß</b> همیشه مثل «س» محکم تلفظ می‌شود.'}},
  {type:'examples',items:[
   {de:'Apfel',en:'apple (a)',say:'Apfel'},
   {de:'Bär',en:'bear (ä)',say:'Bär'},
   {de:'schön',en:'beautiful (ö)',say:'schön'},
   {de:'Tür',en:'door (ü)',say:'Tür'},
   {de:'Straße',en:'street (ß)',say:'Straße'}]},
  {type:'tip',md:{en:'If you can\'t type ä ö ü ß, you may write <b>ae oe ue ss</b> instead — Germans understand it.',
        fa:'اگر نمی‌توانی ä ö ü ß تایپ کنی، می‌توانی به‌جایشان <b>ae oe ue ss</b> بنویسی — آلمانی‌ها متوجه می‌شوند.'}}
 ]},

{id:'greetings',ic:'👋',lv:1,sk:'Beginner',
 title:{en:'Greetings & politeness',fa:'سلام و ادب'},
 sub:{en:'Say hello, thanks, sorry',fa:'سلام، تشکر، عذرخواهی'},
 blocks:[
  {type:'text',md:{en:'The most useful first words. German has an informal <b>du</b> (you) for friends and a formal <b>Sie</b> for strangers — greetings change slightly with each.',
        fa:'مهم‌ترین کلمه‌های اول. آلمانی برای دوستان <b>du</b> (تو) غیررسمی و برای غریبه‌ها <b>Sie</b> رسمی دارد؛ سلام‌ها کمی فرق می‌کنند.'}},
  {type:'examples',items:[
   {de:'Hallo',en:'Hello',say:'Hallo'},
   {de:'Guten Morgen',en:'Good morning',say:'Guten Morgen'},
   {de:'Guten Tag',en:'Good day / Hello (formal)',say:'Guten Tag'},
   {de:'Guten Abend',en:'Good evening',say:'Guten Abend'},
   {de:'Tschüss',en:'Bye (informal)',say:'Tschüss'},
   {de:'Auf Wiedersehen',en:'Goodbye (formal)',say:'Auf Wiedersehen'},
   {de:'Danke',en:'Thank you',say:'Danke'},
   {de:'Bitte',en:'Please / You\'re welcome',say:'Bitte'},
   {de:'Entschuldigung',en:'Sorry / Excuse me',say:'Entschuldigung'}]},
  {type:'tip',md:{en:'<b>Bitte</b> is a hero word: it means "please", "you\'re welcome", and "here you go" — all three!',
        fa:'<b>Bitte</b> یک کلمهٔ پرکاربرد است: هم «لطفاً»، هم «خواهش می‌کنم» و هم «بفرمایید» معنی می‌دهد!'}}
 ]},

{id:'numbers',ic:'🔢',lv:1,sk:'Numbers',
 title:{en:'Numbers 0–20',fa:'اعداد ۰ تا ۲۰'},
 sub:{en:'Counting basics',fa:'مبانی شمارش'},
 blocks:[
  {type:'text',md:{en:'Learn 0–12 by heart. From 13–19, German adds <b>-zehn</b> ("teen") to the unit: <i>drei</i> + <i>zehn</i> = <b>dreizehn</b> (13).',
        fa:'۰ تا ۱۲ را حفظ کن. از ۱۳ تا ۱۹، آلمانی <b>-zehn</b> («ده») را به عدد یکان اضافه می‌کند: <i>drei</i> + <i>zehn</i> = <b>dreizehn</b> (۱۳).'}},
  {type:'table',head:['#','Deutsch','#','Deutsch'],rows:[
   ['0','null','11','elf'],['1','eins','12','zwölf'],['2','zwei','13','dreizehn'],
   ['3','drei','14','vierzehn'],['4','vier','15','fünfzehn'],['5','fünf','16','sechzehn'],
   ['6','sechs','17','siebzehn'],['7','sieben','18','achtzehn'],['8','acht','19','neunzehn'],
   ['9','neun','20','zwanzig'],['10','zehn','','']]},
  {type:'tip',md:{en:'Careful: <b>sechzehn</b> (16) and <b>siebzehn</b> (17) drop letters — not "sechszehn" or "siebenzehn".',
        fa:'دقت کن: <b>sechzehn</b> (۱۶) و <b>siebzehn</b> (۱۷) حروفی را حذف می‌کنند — نه «sechszehn» و نه «siebenzehn».'}}
 ]},

/* ============ A1 ============ */
{id:'articles',ic:'📘',lv:2,sk:'Articles',
 title:{en:'Articles: der, die, das',fa:'حروف تعریف: der, die, das'},
 sub:{en:'The three genders',fa:'سه جنس دستوری'},
 blocks:[
  {type:'text',md:{en:'Every German noun has a <b>gender</b>: masculine (<b class="deword">der</b>), feminine (<b class="deword">die</b>) or neuter (<b class="deword">das</b>). This is grammatical, not about biology — a table is masculine, a door is feminine! The plural article is always <b>die</b>.',
        fa:'هر اسم آلمانی یک <b>جنس</b> دارد: مذکر (<b class="deword">der</b>)، مؤنث (<b class="deword">die</b>) یا خنثی (<b class="deword">das</b>). این دستوری است، نه زیستی — «میز» مذکر و «در» مؤنث است! حرف تعریف جمع همیشه <b>die</b> است.'}},
  {type:'table',head:['','maskulin','feminin','neutrum','Plural'],rows:[
   ['der/die/das','*der','*die','*das','*die']],cap:{en:'the definite article ("the")',fa:'حرف تعریف معین («the»)'}},
  {type:'examples',items:[
   {de:'der Mann',en:'the man (m)',say:'der Mann'},
   {de:'die Frau',en:'the woman (f)',say:'die Frau'},
   {de:'das Kind',en:'the child (n)',say:'das Kind'},
   {de:'die Kinder',en:'the children (pl)',say:'die Kinder'}]},
  {type:'tip',md:{en:'Always learn a noun <b>with its article</b> — say "das Haus", never just "Haus". The article is part of the word!',
        fa:'همیشه اسم را <b>همراه حرف تعریفش</b> یاد بگیر — بگو «das Haus»، نه فقط «Haus». حرف تعریف بخشی از کلمه است!'}},
  {type:'text',md:{en:'Some helpful patterns: nouns ending in <b>-ung, -heit, -keit, -schaft, -tion</b> are feminine (die). Ending in <b>-chen, -lein</b> are neuter (das). Days, months and seasons are masculine (der).',
        fa:'چند الگوی مفید: اسم‌هایی که به <b>-ung، -heit، -keit، -schaft، -tion</b> ختم می‌شوند مؤنث‌اند (die). آن‌هایی که به <b>-chen، -lein</b> ختم می‌شوند خنثی‌اند (das). روزها، ماه‌ها و فصل‌ها مذکرند (der).'}}
 ]},

{id:'pronouns',ic:'🙋',lv:2,sk:'Verbs',
 title:{en:'Personal pronouns',fa:'ضمایر شخصی'},
 sub:{en:'ich, du, er, sie, es…',fa:'ich، du، er، sie، es…'},
 blocks:[
  {type:'text',md:{en:'Pronouns replace people or things. German has two words for "you": <b>du</b> (one friend) and <b>ihr</b> (several friends), plus <b>Sie</b> (formal, always capitalised).',
        fa:'ضمایر جای افراد یا چیزها را می‌گیرند. آلمانی دو «تو» دارد: <b>du</b> (یک دوست) و <b>ihr</b> (چند دوست)، و <b>Sie</b> (رسمی، همیشه با حرف بزرگ).'}},
  {type:'table',head:['Deutsch','English','فارسی'],rows:[
   ['ich','I','من'],['du','you (informal)','تو'],['er','he','او (مرد)'],
   ['sie','she','او (زن)'],['es','it','آن'],['wir','we','ما'],
   ['ihr','you (plural)','شما'],['sie','they','آن‌ها'],['Sie','you (formal)','شما (رسمی)']]},
  {type:'tip',md:{en:'<b>sie</b> can mean "she", "they" <i>or</i> (capitalised) "you (formal)" — the verb ending and context tell you which.',
        fa:'<b>sie</b> می‌تواند «او (زن)»، «آن‌ها» یا (با حرف بزرگ) «شما (رسمی)» باشد — پایانهٔ فعل و بافت مشخص می‌کند کدام است.'}}
 ]},

{id:'present',ic:'⚡',lv:2,sk:'Verbs',
 title:{en:'Present tense',fa:'زمان حال'},
 sub:{en:'Conjugating regular verbs',fa:'صرف فعل‌های باقاعده'},
 blocks:[
  {type:'text',md:{en:'To conjugate a regular verb, take the stem (infinitive minus <b>-en</b>) and add an ending for each person. Example: <b class="deword">spielen</b> (to play) → stem <b>spiel-</b>.',
        fa:'برای صرف فعل باقاعده، بن را بگیر (مصدر منهای <b>-en</b>) و برای هر شخص یک پایانه اضافه کن. مثال: <b class="deword">spielen</b> (بازی کردن) → بن <b>spiel-</b>.'}},
  {type:'table',head:['','spielen','ending'],rows:[
   ['ich','*spiele','-e'],['du','*spielst','-st'],['er/sie/es','*spielt','-t'],
   ['wir','*spielen','-en'],['ihr','*spielt','-t'],['sie/Sie','*spielen','-en']]},
  {type:'examples',items:[
   {de:'Ich spiele Fußball.',en:'I play football.',say:'Ich spiele Fußball.'},
   {de:'Du wohnst in Berlin.',en:'You live in Berlin.',say:'Du wohnst in Berlin.'},
   {de:'Wir lernen Deutsch.',en:'We learn German.',say:'Wir lernen Deutsch.'}]},
  {type:'tip',md:{en:'German present tense covers English "I play" AND "I am playing" — there is no separate continuous form.',
        fa:'زمان حال آلمانی هم «بازی می‌کنم» و هم «در حال بازی هستم» را می‌رساند — فرم استمراری جدا وجود ندارد.'}}
 ]},

{id:'seinhaben',ic:'🔑',lv:2,sk:'Verbs',
 title:{en:'sein & haben',fa:'sein و haben'},
 sub:{en:'to be & to have',fa:'بودن و داشتن'},
 blocks:[
  {type:'text',md:{en:'The two most important verbs, and both irregular — memorise them. <b class="deword">sein</b> = to be, <b class="deword">haben</b> = to have.',
        fa:'دو فعل مهم که هر دو بی‌قاعده‌اند — حفظشان کن. <b class="deword">sein</b> = بودن، <b class="deword">haben</b> = داشتن.'}},
  {type:'table',head:['','sein (to be)','haben (to have)'],rows:[
   ['ich','*bin','*habe'],['du','*bist','*hast'],['er/sie/es','*ist','*hat'],
   ['wir','*sind','*haben'],['ihr','*seid','*habt'],['sie/Sie','*sind','*haben']]},
  {type:'examples',items:[
   {de:'Ich bin müde.',en:'I am tired.',say:'Ich bin müde.'},
   {de:'Sie ist Ärztin.',en:'She is a doctor.',say:'Sie ist Ärztin.'},
   {de:'Wir haben Zeit.',en:'We have time.',say:'Wir haben Zeit.'},
   {de:'Hast du Hunger?',en:'Are you hungry?',say:'Hast du Hunger?'}]}
 ]},

{id:'wordorder',ic:'🧩',lv:2,sk:'Sentences',
 title:{en:'Word order & questions',fa:'ترتیب کلمات و سؤال'},
 sub:{en:'The verb goes second',fa:'فعل در جایگاه دوم'},
 blocks:[
  {type:'text',md:{en:'The golden rule: in a normal statement, the <b>conjugated verb is always the second element</b>. You can start with something else (time, place), but the verb still comes second.',
        fa:'قاعدهٔ طلایی: در جملهٔ خبری، <b>فعل صرف‌شده همیشه عنصر دوم است</b>. می‌توانی با چیز دیگری (زمان، مکان) شروع کنی، اما فعل باز هم دوم می‌آید.'}},
  {type:'examples',items:[
   {de:'Ich lerne heute Deutsch.',en:'I learn German today.',say:'Ich lerne heute Deutsch.'},
   {de:'Heute lerne ich Deutsch.',en:'Today I learn German.',say:'Heute lerne ich Deutsch.'}]},
  {type:'text',md:{en:'For <b>yes/no questions</b>, put the verb first: <i>Lernst du Deutsch?</i> For <b>W-questions</b>, start with the question word (wer, was, wo, wann, warum, wie), then the verb.',
        fa:'برای سؤال <b>بله/خیر</b>، فعل را اول بگذار: <i>Lernst du Deutsch?</i> برای <b>سؤال با کلمهٔ پرسشی</b>، با کلمهٔ پرسشی شروع کن (wer، was، wo، wann، warum، wie) و بعد فعل.'}},
  {type:'examples',items:[
   {de:'Wo wohnst du?',en:'Where do you live?',say:'Wo wohnst du?'},
   {de:'Was machst du?',en:'What are you doing?',say:'Was machst du?'},
   {de:'Wann kommst du?',en:'When are you coming?',say:'Wann kommst du?'}]}
 ]},

/* ============ A2 ============ */
{id:'nomakk',ic:'🎯',lv:3,sk:'Cases',
 title:{en:'Nominative & Accusative',fa:'نومیناتیو و آکوزاتیو'},
 sub:{en:'Subject vs direct object',fa:'فاعل در برابر مفعول مستقیم'},
 blocks:[
  {type:'text',md:{en:'German marks a word\'s job with <b>cases</b>. The <b>Nominative</b> is the subject (who does the action). The <b>Accusative</b> is the direct object (who receives it). Only the <b>masculine</b> article changes: <b class="deword">der → den</b>.',
        fa:'آلمانی نقش کلمه را با <b>حالت (case)</b> نشان می‌دهد. <b>نومیناتیو</b> فاعل است (چه‌کسی کار را انجام می‌دهد). <b>آکوزاتیو</b> مفعول مستقیم است. فقط حرف تعریف <b>مذکر</b> تغییر می‌کند: <b class="deword">der → den</b>.'}},
  {type:'table',head:['','mask.','fem.','neut.','Plural'],rows:[
   ['Nominativ','der','die','das','die'],
   ['Akkusativ','*den','die','das','die']],cap:{en:'only masculine der → den',fa:'فقط مذکر der → den'}},
  {type:'examples',items:[
   {de:'Der Mann sieht den Hund.',en:'The man sees the dog.',say:'Der Mann sieht den Hund.'},
   {de:'Ich kaufe einen Apfel.',en:'I buy an apple.',say:'Ich kaufe einen Apfel.'},
   {de:'Sie liest das Buch.',en:'She reads the book.',say:'Sie liest das Buch.'}]},
  {type:'tip',md:{en:'Trick: swap subject and object — "Der Mann sieht den Hund" vs "Den Hund sieht der Mann" mean the same, because <b>den</b> marks the object no matter where it stands.',
        fa:'ترفند: فاعل و مفعول را جابه‌جا کن — «Der Mann sieht den Hund» و «Den Hund sieht der Mann» یک معنی دارند، چون <b>den</b> هرجا باشد مفعول را مشخص می‌کند.'}}
 ]},

{id:'dativ',ic:'🎁',lv:3,sk:'Cases',
 title:{en:'The Dative case',fa:'حالت داتیو'},
 sub:{en:'The indirect object',fa:'مفعول غیرمستقیم'},
 blocks:[
  {type:'text',md:{en:'The <b>Dative</b> marks the indirect object — usually the receiver (to whom / for whom). All articles change in the Dative.',
        fa:'<b>داتیو</b> مفعول غیرمستقیم را نشان می‌دهد — معمولاً گیرنده (به چه‌کسی / برای چه‌کسی). همهٔ حروف تعریف در داتیو تغییر می‌کنند.'}},
  {type:'table',head:['','mask.','fem.','neut.','Plural'],rows:[
   ['Nominativ','der','die','das','die'],
   ['Akkusativ','den','die','das','die'],
   ['Dativ','*dem','*der','*dem','*den']],cap:{en:'plural also adds -n to the noun',fa:'در جمع به اسم هم -n اضافه می‌شود'}},
  {type:'examples',items:[
   {de:'Ich gebe dem Kind einen Ball.',en:'I give the child a ball.',say:'Ich gebe dem Kind einen Ball.'},
   {de:'Ich helfe der Frau.',en:'I help the woman.',say:'Ich helfe der Frau.'},
   {de:'Das Buch gehört dem Mann.',en:'The book belongs to the man.',say:'Das Buch gehört dem Mann.'}]},
  {type:'tip',md:{en:'Some verbs <b>always</b> take the Dative: <b class="deword">helfen</b> (help), <b class="deword">danken</b> (thank), <b class="deword">gehören</b> (belong), <b class="deword">gefallen</b> (please), <b class="deword">antworten</b> (answer). Learn them as a set.',
        fa:'بعضی فعل‌ها <b>همیشه</b> داتیو می‌گیرند: <b class="deword">helfen</b> (کمک)، <b class="deword">danken</b> (تشکر)، <b class="deword">gehören</b> (تعلق)، <b class="deword">gefallen</b> (خوش آمدن)، <b class="deword">antworten</b> (پاسخ). با هم حفظشان کن.'}}
 ]},

{id:'plural',ic:'🧺',lv:3,sk:'Plurals',
 title:{en:'Plural nouns',fa:'اسم جمع'},
 sub:{en:'Five plural patterns',fa:'پنج الگوی جمع'},
 blocks:[
  {type:'text',md:{en:'German has no single plural rule — there are five main patterns. The plural article is always <b>die</b>. The best strategy: learn each noun\'s plural together with the word.',
        fa:'آلمانی یک قاعدهٔ واحد برای جمع ندارد — پنج الگوی اصلی هست. حرف تعریف جمع همیشه <b>die</b> است. بهترین کار: جمع هر اسم را همراه خود کلمه یاد بگیر.'}},
  {type:'table',head:['pattern','singular','plural'],rows:[
   ['-e','der Tisch','die Tisch*e'],
   ['-er (+Umlaut)','das Kind','die Kind*er'],
   ['-en / -n','die Frau','die Frau*en'],
   ['-s','das Auto','die Auto*s'],
   ['— (Umlaut only)','der Vater','die V*äter']]},
  {type:'examples',items:[
   {de:'ein Buch → zwei Bücher',en:'one book → two books',say:'zwei Bücher'},
   {de:'ein Apfel → drei Äpfel',en:'one apple → three apples',say:'drei Äpfel'},
   {de:'ein Kind → viele Kinder',en:'one child → many children',say:'viele Kinder'}]},
  {type:'tip',md:{en:'Feminine nouns almost always take <b>-en / -n</b> in the plural. Words borrowed from English/French often take <b>-s</b>.',
        fa:'اسم‌های مؤنث تقریباً همیشه در جمع <b>-en / -n</b> می‌گیرند. کلمه‌های قرضی از انگلیسی/فرانسه اغلب <b>-s</b> می‌گیرند.'}}
 ]},

{id:'modals',ic:'🔧',lv:3,sk:'Verbs',
 title:{en:'Modal verbs',fa:'افعال کمکی وجهی'},
 sub:{en:'können, müssen, wollen…',fa:'können، müssen، wollen…'},
 blocks:[
  {type:'text',md:{en:'Modal verbs express ability, necessity, permission or wish. They send the <b>main verb to the end</b> as an infinitive: <i>Ich <b>kann</b> gut <b>schwimmen</b></i>.',
        fa:'افعال وجهی توانایی، ضرورت، اجازه یا خواست را می‌رسانند. فعل اصلی را به‌صورت مصدر <b>به آخر جمله</b> می‌فرستند: <i>Ich <b>kann</b> gut <b>schwimmen</b></i>.'}},
  {type:'table',head:['','können','müssen','wollen','dürfen'],rows:[
   ['meaning','can','must','want','may'],
   ['ich','kann','muss','will','darf'],
   ['du','kannst','musst','willst','darfst'],
   ['er/sie/es','kann','muss','will','darf'],
   ['wir','können','müssen','wollen','dürfen']]},
  {type:'examples',items:[
   {de:'Ich kann Deutsch sprechen.',en:'I can speak German.',say:'Ich kann Deutsch sprechen.'},
   {de:'Du musst jetzt gehen.',en:'You must go now.',say:'Du musst jetzt gehen.'},
   {de:'Wir wollen Pizza essen.',en:'We want to eat pizza.',say:'Wir wollen Pizza essen.'}]},
  {type:'tip',md:{en:'Note: <b>ich</b> and <b>er/sie/es</b> have the <i>same</i> form for modals (kann, muss, will…) — no -t ending.',
        fa:'توجه: <b>ich</b> و <b>er/sie/es</b> در افعال وجهی فرم <i>یکسان</i> دارند (kann، muss، will…) — بدون پایانهٔ -t.'}}
 ]},

{id:'separable',ic:'✂️',lv:3,sk:'Verbs',
 title:{en:'Separable verbs',fa:'افعال جداشدنی'},
 sub:{en:'aufstehen, einkaufen…',fa:'aufstehen، einkaufen…'},
 blocks:[
  {type:'text',md:{en:'Many German verbs have a <b>prefix</b> that splits off and jumps to the <b>end</b> of the sentence in the present tense: <b class="deword">aufstehen</b> (to get up) → <i>Ich stehe um 7 Uhr <b>auf</b></i>.',
        fa:'بسیاری از فعل‌های آلمانی یک <b>پیشوند</b> دارند که در زمان حال جدا می‌شود و به <b>آخر</b> جمله می‌پرد: <b class="deword">aufstehen</b> (بیدار شدن) → <i>Ich stehe um 7 Uhr <b>auf</b></i>.'}},
  {type:'examples',items:[
   {de:'Ich stehe früh auf.',en:'I get up early.',say:'Ich stehe früh auf.'},
   {de:'Wir kaufen im Supermarkt ein.',en:'We shop at the supermarket.',say:'Wir kaufen im Supermarkt ein.'},
   {de:'Er ruft dich später an.',en:'He calls you later.',say:'Er ruft dich später an.'}]},
  {type:'tip',md:{en:'Common separable prefixes: <b>auf-, ein-, an-, aus-, mit-, ab-, zu-, vor-</b>. If you can stress the prefix when speaking, it usually separates.',
        fa:'پیشوندهای جداشدنی رایج: <b>auf-، ein-، an-، aus-، mit-، ab-، zu-، vor-</b>. اگر هنگام گفتن بتوانی روی پیشوند تأکید کنی، معمولاً جدا می‌شود.'}}
 ]},

{id:'perfekt',ic:'⏱️',lv:3,sk:'Verbs',
 title:{en:'Perfekt (spoken past)',fa:'زمان گذشتهٔ گفتاری (Perfekt)'},
 sub:{en:'haben/sein + participle',fa:'haben/sein + اسم مفعول'},
 blocks:[
  {type:'text',md:{en:'The <b>Perfekt</b> is how Germans usually talk about the past. Build it with a helper verb (<b>haben</b> or <b>sein</b>) + the <b>past participle</b> at the end. Regular participles: <b>ge- + stem + -t</b> (gespielt, gemacht).',
        fa:'<b>Perfekt</b> شیوهٔ معمول آلمانی‌ها برای صحبت دربارهٔ گذشته است. با یک فعل کمکی (<b>haben</b> یا <b>sein</b>) + <b>اسم مفعول</b> در آخر ساخته می‌شود. اسم مفعول باقاعده: <b>ge- + بن + -t</b> (gespielt، gemacht).'}},
  {type:'examples',items:[
   {de:'Ich habe Fußball gespielt.',en:'I played football.',say:'Ich habe Fußball gespielt.'},
   {de:'Sie hat einen Kuchen gebacken.',en:'She baked a cake.',say:'Sie hat einen Kuchen gebacken.'},
   {de:'Wir sind nach Berlin gefahren.',en:'We drove to Berlin.',say:'Wir sind nach Berlin gefahren.'}]},
  {type:'tip',md:{en:'Use <b>sein</b> (not haben) for verbs of <b>movement or change of state</b>: gehen → ist gegangen, fahren → ist gefahren, werden → ist geworden.',
        fa:'برای فعل‌های <b>حرکت یا تغییر حالت</b> از <b>sein</b> (نه haben) استفاده کن: gehen → ist gegangen، fahren → ist gefahren، werden → ist geworden.'}}
 ]},

/* ============ B1 ============ */
{id:'praeteritum',ic:'⏳',lv:4,sk:'Verbs',
 title:{en:'Präteritum (written past)',fa:'گذشتهٔ نوشتاری (Präteritum)'},
 sub:{en:'The simple past',fa:'گذشتهٔ ساده'},
 blocks:[
  {type:'text',md:{en:'The <b>Präteritum</b> is the simple past used mainly in writing and stories. Regular verbs add <b>-te</b>: <i>spielen → spielte</i>. But <b>sein, haben</b> and modal verbs use it even in speech.',
        fa:'<b>Präteritum</b> گذشتهٔ ساده است که بیشتر در نوشتار و داستان به‌کار می‌رود. فعل‌های باقاعده <b>-te</b> می‌گیرند: <i>spielen → spielte</i>. اما <b>sein، haben</b> و افعال وجهی حتی در گفتار هم از آن استفاده می‌کنند.'}},
  {type:'table',head:['infinitive','Präteritum (er)','Perfekt'],rows:[
   ['sein','war','ist gewesen'],['haben','hatte','hat gehabt'],
   ['gehen','ging','ist gegangen'],['kommen','kam','ist gekommen'],
   ['sehen','sah','hat gesehen'],['essen','aß','hat gegessen']]},
  {type:'examples',items:[
   {de:'Ich war gestern krank.',en:'I was ill yesterday.',say:'Ich war gestern krank.'},
   {de:'Er hatte keine Zeit.',en:'He had no time.',say:'Er hatte keine Zeit.'},
   {de:'Sie ging nach Hause.',en:'She went home.',say:'Sie ging nach Hause.'}]},
  {type:'tip',md:{en:'In everyday speech, say <b>war/hatte</b> (Präteritum) but use the <b>Perfekt</b> for most other verbs: "Ich <b>habe</b> gegessen", not "Ich aß".',
        fa:'در گفتار روزمره، <b>war/hatte</b> (Präteritum) بگو ولی برای بیشتر فعل‌های دیگر از <b>Perfekt</b> استفاده کن: «Ich <b>habe</b> gegessen»، نه «Ich aß».'}}
 ]},

{id:'prepositions',ic:'🧭',lv:4,sk:'Prepositions',
 title:{en:'Prepositions & cases',fa:'حروف اضافه و حالت‌ها'},
 sub:{en:'Which case follows?',fa:'کدام حالت می‌آید؟'},
 blocks:[
  {type:'text',md:{en:'Every preposition forces a case on the noun after it. Some always take Accusative, some always Dative, and the <b>two-way</b> ones switch: <b>Accusative for motion</b> (wohin?), <b>Dative for location</b> (wo?).',
        fa:'هر حرف اضافه یک حالت را به اسم بعدش تحمیل می‌کند. بعضی همیشه آکوزاتیو، بعضی همیشه داتیو، و <b>دوطرفه‌ها</b> عوض می‌شوند: <b>آکوزاتیو برای حرکت</b> (wohin؟)، <b>داتیو برای مکان</b> (wo؟).'}},
  {type:'table',head:['always Akk.','always Dativ','two-way'],rows:[
   ['durch','aus','an'],['für','bei','auf'],['gegen','mit','in'],
   ['ohne','nach','über'],['um','seit / von / zu','unter / vor / neben']]},
  {type:'examples',items:[
   {de:'Ich gehe in die Schule.',en:'I go into the school. (motion → Akk)',say:'Ich gehe in die Schule.'},
   {de:'Ich bin in der Schule.',en:'I am in the school. (location → Dativ)',say:'Ich bin in der Schule.'},
   {de:'Das Geschenk ist für dich.',en:'The gift is for you. (Akk)',say:'Das Geschenk ist für dich.'}]},
  {type:'tip',md:{en:'Memorise the Dative group as a chant: <b>aus, bei, mit, nach, seit, von, zu</b> — they never change.',
        fa:'گروه داتیو را مثل یک ورد حفظ کن: <b>aus، bei، mit، nach، seit، von، zu</b> — هیچ‌وقت تغییر نمی‌کنند.'}}
 ]},

{id:'adjektiv',ic:'🎨',lv:4,sk:'Adjectives',
 title:{en:'Adjective endings',fa:'پایانهٔ صفت‌ها'},
 sub:{en:'The famous ending tables',fa:'جدول‌های معروف پایانه'},
 blocks:[
  {type:'text',md:{en:'When an adjective sits <b>before</b> a noun, it takes an ending that depends on gender, case, and the article before it. After <b>der/die/das</b> (definite), the endings are easy: mostly <b>-e</b> or <b>-en</b>.',
        fa:'وقتی صفت <b>قبل از</b> اسم می‌آید، پایانه‌ای می‌گیرد که به جنس، حالت و حرف تعریفِ قبلش بستگی دارد. بعد از <b>der/die/das</b> (معین)، پایانه‌ها ساده‌اند: بیشتر <b>-e</b> یا <b>-en</b>.'}},
  {type:'table',head:['after der-word','mask.','fem.','neut.','Plural'],rows:[
   ['Nominativ','-e','-e','-e','-en'],
   ['Akkusativ','*-en','-e','-e','-en'],
   ['Dativ','-en','-en','-en','-en']],cap:{en:'"weak" endings after the definite article',fa:'پایانهٔ «ضعیف» بعد از حرف تعریف معین'}},
  {type:'examples',items:[
   {de:'der rote Apfel',en:'the red apple (Nom)',say:'der rote Apfel'},
   {de:'Ich sehe den roten Apfel.',en:'I see the red apple. (Akk)',say:'Ich sehe den roten Apfel.'},
   {de:'mit dem roten Auto',en:'with the red car (Dativ)',say:'mit dem roten Auto'}]},
  {type:'tip',md:{en:'Rule of thumb: after a der-word, only the Nominative (and neuter/fem Accusative) get <b>-e</b>; almost everything else gets <b>-en</b>.',
        fa:'قاعدهٔ سرانگشتی: بعد از der-word، فقط نومیناتیو (و آکوزاتیو خنثی/مؤنث) <b>-e</b> می‌گیرد؛ تقریباً بقیه <b>-en</b> می‌گیرند.'}}
 ]},

{id:'komparativ',ic:'📏',lv:4,sk:'Adjectives',
 title:{en:'Comparative & superlative',fa:'صفت برتر و برترین'},
 sub:{en:'bigger, the biggest',fa:'بزرگ‌تر، بزرگ‌ترین'},
 blocks:[
  {type:'text',md:{en:'Add <b>-er</b> for the comparative and <b>am …-sten</b> for the superlative. Many short adjectives also add an Umlaut: <i>groß → größer → am größten</i>.',
        fa:'برای صفت برتر <b>-er</b> و برای برترین <b>am …-sten</b> اضافه کن. بسیاری از صفت‌های کوتاه اوملاوت هم می‌گیرند: <i>groß → größer → am größten</i>.'}},
  {type:'table',head:['adjective','comparative','superlative'],rows:[
   ['klein','kleiner','am kleinsten'],['groß','größer','am größten'],
   ['alt','älter','am ältesten'],['gut','*besser','*am besten'],
   ['viel','*mehr','*am meisten'],['gern','*lieber','*am liebsten']]},
  {type:'examples',items:[
   {de:'Anna ist größer als Tom.',en:'Anna is taller than Tom.',say:'Anna ist größer als Tom.'},
   {de:'Das ist das beste Buch.',en:'That is the best book.',say:'Das ist das beste Buch.'}]},
  {type:'tip',md:{en:'Use <b>als</b> for "than": <i>schneller <b>als</b> ich</i>. And watch the irregulars — <b>gut → besser → am besten</b>, like English good/better/best.',
        fa:'برای «از/نسبت به» از <b>als</b> استفاده کن: <i>schneller <b>als</b> ich</i>. مراقب بی‌قاعده‌ها باش — <b>gut → besser → am besten</b>، مثل good/better/best انگلیسی.'}}
 ]},

/* ============ B2 ============ */
{id:'konjunktiv',ic:'🌙',lv:5,sk:'Verbs',
 title:{en:'Konjunktiv II',fa:'وجه شرطی (Konjunktiv II)'},
 sub:{en:'polite & unreal',fa:'مؤدبانه و غیرواقعی'},
 blocks:[
  {type:'text',md:{en:'The <b>Konjunktiv II</b> expresses wishes, polite requests and unreal "if" situations — like English "would/could". The everyday form is <b>würde + infinitive</b>, but <b>hätte, wäre, könnte</b> are used directly.',
        fa:'<b>Konjunktiv II</b> آرزو، درخواست مؤدبانه و شرط غیرواقعی را می‌رساند — مثل «would/could» انگلیسی. فرم روزمره <b>würde + مصدر</b> است، اما <b>hätte، wäre، könnte</b> مستقیم به‌کار می‌روند.'}},
  {type:'table',head:['verb','Konjunktiv II','meaning'],rows:[
   ['sein','wäre','would be'],['haben','hätte','would have'],
   ['können','könnte','could'],['werden','würde','would']]},
  {type:'examples',items:[
   {de:'Ich hätte gern einen Kaffee.',en:'I would like a coffee.',say:'Ich hätte gern einen Kaffee.'},
   {de:'Könnten Sie mir helfen?',en:'Could you help me?',say:'Könnten Sie mir helfen?'},
   {de:'Wenn ich reich wäre, würde ich reisen.',en:'If I were rich, I would travel.',say:'Wenn ich reich wäre, würde ich reisen.'}]},
  {type:'tip',md:{en:'For politeness, swap <i>Ich will</i> for <b>Ich hätte gern</b>, and <i>Kannst du?</i> for <b>Könntest du?</b> — instantly friendlier.',
        fa:'برای ادب، <i>Ich will</i> را با <b>Ich hätte gern</b> و <i>Kannst du?</i> را با <b>Könntest du?</b> عوض کن — فوراً مؤدبانه‌تر می‌شود.'}}
 ]},

{id:'passiv',ic:'🔄',lv:5,sk:'Verbs',
 title:{en:'The passive voice',fa:'وجه مجهول'},
 sub:{en:'werden + participle',fa:'werden + اسم مفعول'},
 blocks:[
  {type:'text',md:{en:'The passive focuses on the <b>action</b>, not who does it. German builds it with <b class="deword">werden</b> + the past participle. The agent (if named) uses <b>von</b> + Dative.',
        fa:'مجهول روی <b>عمل</b> تمرکز می‌کند، نه فاعل. آلمانی آن را با <b class="deword">werden</b> + اسم مفعول می‌سازد. عامل (اگر ذکر شود) با <b>von</b> + داتیو می‌آید.'}},
  {type:'examples',items:[
   {de:'Das Haus wird gebaut.',en:'The house is being built.',say:'Das Haus wird gebaut.'},
   {de:'Das Haus wurde 1920 gebaut.',en:'The house was built in 1920.',say:'Das Haus wurde 1920 gebaut.'},
   {de:'Der Brief wurde von Anna geschrieben.',en:'The letter was written by Anna.',say:'Der Brief wurde von Anna geschrieben.'}]},
  {type:'tip',md:{en:'Present passive uses <b>wird</b>, past passive uses <b>wurde</b> — both plus the participle at the end.',
        fa:'مجهول حال از <b>wird</b> و مجهول گذشته از <b>wurde</b> استفاده می‌کند — هر دو به‌علاوهٔ اسم مفعول در آخر.'}}
 ]},

{id:'nebensatz',ic:'🔗',lv:5,sk:'Sentences',
 title:{en:'Subordinate clauses',fa:'جملات پیرو'},
 sub:{en:'weil, dass, wenn, obwohl',fa:'weil، dass، wenn، obwohl'},
 blocks:[
  {type:'text',md:{en:'Conjunctions like <b>weil</b> (because), <b>dass</b> (that), <b>wenn</b> (if/when) and <b>obwohl</b> (although) send the <b>conjugated verb to the very end</b> of the clause.',
        fa:'حروف ربطی مثل <b>weil</b> (چون)، <b>dass</b> (که)، <b>wenn</b> (اگر/وقتی) و <b>obwohl</b> (اگرچه) فعل صرف‌شده را <b>به انتهای</b> جملهٔ پیرو می‌فرستند.'}},
  {type:'examples',items:[
   {de:'Ich bleibe zu Hause, weil ich krank bin.',en:'I stay home because I am ill.',say:'Ich bleibe zu Hause, weil ich krank bin.'},
   {de:'Ich weiß, dass du recht hast.',en:'I know that you are right.',say:'Ich weiß, dass du recht hast.'},
   {de:'Wenn es regnet, bleiben wir hier.',en:'If it rains, we stay here.',say:'Wenn es regnet, bleiben wir hier.'}]},
  {type:'tip',md:{en:'Comma + conjunction + … + <b>verb at the end</b>. And if the sentence <i>starts</i> with the wenn-clause, the main verb comes right after the comma: "Wenn es regnet, <b>bleiben</b> wir hier."',
        fa:'ویرگول + حرف ربط + … + <b>فعل در آخر</b>. و اگر جمله با بند wenn <i>شروع</i> شود، فعل اصلی درست بعد از ویرگول می‌آید: «Wenn es regnet, <b>bleiben</b> wir hier.»'}}
 ]}

];
