<div align="center">

<img src="docs/icon.png" width="120" alt="Deutsch Trainer icon" />

# Deutsch Trainer

**A beautiful, offline-first German trainer — from A0 to C2.**
All four skills in Goethe-Zertifikat formats, 55 grammar lessons, slang, idioms and a 1,200-word dictionary — in a fast Duolingo-style app that installs to your home screen. No account, no ads, no tracking.

[![Open the app](https://img.shields.io/badge/▶_Open_the_app-Live-25b06e?style=for-the-badge)](https://bluerrror.github.io/deutsch-trainer/)
&nbsp;
![PWA](https://img.shields.io/badge/PWA-installable-5566d6?style=for-the-badge)
![Offline](https://img.shields.io/badge/works-offline-1f9d6a?style=for-the-badge)
![No build step](https://img.shields.io/badge/dependencies-zero-3f6fe0?style=for-the-badge)

</div>

---

## ✨ Features

### 🎓 Exam trainer — all four skills
- **Lesen** — short texts, small ads to match, true/false and multiple choice, in Goethe task shapes.
- **Hören** — announcements, voicemail, radio, interviews and discussions, spoken by your device, with slow replay and a transcript you can unlock after answering.
- **Schreiben** — guided writing tasks with content points to tick off, a tappable phrase bank, a live word counter, a saved draft, a self-check list and a full model answer.
- **Sprechen** — Goethe-style speaking prompts with a preparation/speaking timer, Redemittel, examiner tips, a model answer you can hear and shadow, and optional self-recording (stays on your device).
- **Full mock exam** — the four parts back to back at your level.

### 📘 Grammar — 55 lessons, A0 → C2
Clear explanations in English or Persian, with tables, contrast cards, numbered steps, rule and warning boxes, mini-dialogues with audio, and an **inline quick-check quiz** in most lessons.
From the alphabet, negation, possessives and W-questions, through cases, relative clauses, da-/wo-compounds, the n-declension and Futur II, up to Konjunktiv I and reported speech, the passive and its four substitutes, nominal style, extended participial attributes, Funktionsverbgefüge, Modalpartikeln, register, idioms and essay architecture.

### 🧠 12 exercise types
Multiple choice · **select-all** · **tap the word in the sentence** · **multi-gap cloze** · **sort into buckets** · **letter scramble** · sentence builder · match pairs · typing · dictation · listening · picture.
Plus conversation questions with a real dialogue on screen, reading-comprehension texts, odd-one-out, and false-friend traps.

### 🗣️ Living German
- **Slang & regional** — krass, Bock haben, Moin, Servus, Grüezi, gell — each with its neutral equivalent so you never use it in the wrong place.
- **Redemittel** — 60 phrases grouped by what they *do*: giving an opinion, agreeing, disagreeing, complaining, presenting, hedging.
- **Idioms & proverbs** — with their emotional colour marked, because using a negative one by mistake is worse than using none.
- **Conversations** — 12 multi-turn dialogues (café, station, doctor, flat hunting, office, job interview, diplomatic disagreement) where you pick the line that fits.
- **Pronunciation** — the fifteen rules that let you read any German word aloud correctly.

### 📈 Course & progress
- **33-unit course path** across seven levels (A0 · A1 · A2 · B1 · B2 · C1 · C2) with locks, star ratings and a boss lesson per unit.
- **Adaptive engine** — targets your weakest skill and resurfaces mistakes on a Leitner schedule.
- **204 hand-written questions** blended with ~114 rule-based generators, so questions stay fresh.
- **Massive dictionary** — 1,265 nouns with articles and plurals, 380 verbs with past forms, 223 adjectives, 175 phrases, all searchable, all with audio, including a Goethe-aligned wordlist by level and theme.
- XP, hearts, streaks, combos, daily quests, a reward chest and an achievements wall.

### ⚙️ Built for real phones
Installable PWA · works fully offline after first load · English **or** Persian (فارسی) explanations · four German voices · safe-area and landscape layouts · tablet and desktop breakpoints · honours *reduce motion* · progress never leaves your device.

## 📱 Screenshots

<div align="center">
<img src="docs/screen-home.png" width="200" alt="Home with daily quests" />
&nbsp;
<img src="docs/screen-course.png" width="200" alt="Course path" />
&nbsp;
<img src="docs/screen-practice.png" width="200" alt="Practice tab" />
&nbsp;
<img src="docs/screen-words.png" width="200" alt="Dictionary" />
&nbsp;
<img src="docs/screen-listening.png" width="200" alt="Listening question" />
&nbsp;
<img src="docs/screen-match.png" width="200" alt="Match pairs" />
&nbsp;
<img src="docs/screen-typing.png" width="200" alt="Typing question" />
&nbsp;
<img src="docs/screen-results.png" width="200" alt="Lesson results" />
</div>

## 🚀 Install on your iPhone (≈2 minutes)

1. Open **Safari** on your iPhone and go to **[bluerrror.github.io/deutsch-trainer](https://bluerrror.github.io/deutsch-trainer/)**.
2. Wait a few seconds so it caches for offline use.
3. Tap the **Share** button (□↑) → **Add to Home Screen** → **Add**.

You'll get a **"D" icon** on your home screen that opens **fullscreen** and **works offline**. On Android/Chrome, use the **⋮ menu → Install app**.

## 🤖 Install on Android

Download the ready-made app: **[deutsch-trainer.apk](https://github.com/Bluerrror/deutsch-trainer/releases/latest/download/deutsch-trainer.apk)** (from the [Releases](https://github.com/Bluerrror/deutsch-trainer/releases) page).

1. Open the downloaded file on your phone.
2. If asked, allow installing from this source.
3. Launch **Deutsch Trainer** from your app drawer — fullscreen, offline-capable (requires Chrome installed).

Alternatively, open the web app in Chrome and use **⋮ → Install app**.

## 🧠 Question types

| Type | What you do |
| --- | --- |
| Multiple choice | Pick the correct article, case, ending, form… |
| Select all | Tick *every* correct option — no partial credit |
| Tap the word | Find the dative object, the mistake, the particle |
| Multi-gap | Fill two or three blanks from one word bank |
| Sort | Drop words into der/die/das, haben/sein, formal/casual |
| Scramble | Rebuild a word from its letters |
| Sentence build | Order word tiles into a correct sentence |
| Conversation | Read a dialogue and choose the line that fits |
| Reading | Short text, then comprehension questions |
| Listening | Hear German, choose the word, phrase or meaning |
| Dictation | Hear a whole sentence and type it |
| Typing · Match · Picture · True/false | Write it, pair it, see it, judge it |

## 🛠️ Tech

- **Vanilla HTML, CSS and JavaScript. Zero dependencies, no build step.**
- `index.html` holds the app; the content lives in plain data files beside it:
  `vocab.js` · `goethe.js` (Goethe-aligned wordlist) · `bank.js` (authored questions) ·
  `grammar.js` (55 lessons) · `advanced.js` (B1–C2 grammar data) ·
  `spoken.js` (slang, Redemittel, conversations, drills) · `exams.js` (four-skill tasks) ·
  `fa.js` (Persian pack).
- Installable **PWA**: [`manifest.webmanifest`](manifest.webmanifest) + a service worker ([`sw.js`](sw.js)) for offline caching.
- **Web Speech API** for pronunciation, **MediaRecorder** for speaking practice, **Web Audio API** for sound effects, `navigator.vibrate` for haptics.
- Hosted free on **GitHub Pages**.

## 💻 Run locally

```bash
git clone https://github.com/Bluerrror/deutsch-trainer.git
cd deutsch-trainer
python3 -m http.server 8000      # then open http://localhost:8000
```

> Open via a local server (not `file://`) so the service worker and manifest load correctly.

## 📄 License

Released under the [MIT License](LICENSE).

<div align="center">
<sub>Made with ❤️ for German learners · <a href="https://bluerrror.github.io/deutsch-trainer/">Open the app →</a></sub>
</div>
