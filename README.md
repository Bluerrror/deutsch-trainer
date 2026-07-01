<div align="center">

<img src="docs/icon.png" width="120" alt="Deutsch Trainer icon" />

# Deutsch Trainer

**A beautiful, offline-first German trainer — from A1 to B2.**
Grammar, vocabulary, listening and more, in a fast Duolingo-style app that installs to your home screen. No account, no ads, no tracking.

[![Open the app](https://img.shields.io/badge/▶_Open_the_app-Live-25b06e?style=for-the-badge)](https://bluerrror.github.io/deutsch-trainer/)
&nbsp;
![PWA](https://img.shields.io/badge/PWA-installable-5566d6?style=for-the-badge)
![Offline](https://img.shields.io/badge/works-offline-1f9d6a?style=for-the-badge)
![No build step](https://img.shields.io/badge/dependencies-zero-3f6fe0?style=for-the-badge)

</div>

---

## ✨ Features

- **🎧 Listening** — hear real German pronunciation (your device's built-in voices) and tap or type what you hear.
- **🔗 Match pairs** — quick German ↔ English matching drills.
- **⌨️ Typing** — produce the language yourself, with smart answer-checking (umlaut/ß tolerant).
- **🧩 Sentence builder** — tap word tiles into the correct German word order.
- **🖼️ Picture questions** — connect images to words.
- **📘 Full grammar coverage** — articles (der/die/das), all four cases, adjective endings, prepositions, two-way prepositions, verb + case, present tense, modal verbs, Perfekt, Präteritum, separable verbs, Konjunktiv II, plurals, numbers.
- **🎮 Duolingo-style game feel** — XP, hearts, daily goal ring, streaks, combos, sound effects, haptics and confetti.
- **📈 Progress tracking** — levels, weekly XP chart, per-skill mastery, a 4-week activity heatmap, and an achievements wall.
- **💾 Saves on your device** — progress persists locally; nothing leaves your phone.
- **📴 Fully offline** — after the first load, it runs with no internet.

## 📱 Screenshots

<div align="center">
<img src="docs/screen-home.png" width="200" alt="Home" />
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

## 🧠 Question types

| Type | What you do |
| --- | --- |
| Multiple choice | Pick the correct article, case, ending, form… |
| Listening | Hear German, choose the word/meaning |
| Type it | Write the German word from an image or prompt |
| Listen & type | Hear a word and type it |
| Match pairs | Match German words to their English meaning |
| Sentence build | Order word tiles into a correct sentence |
| True / false | Judge whether a translation is right |
| Picture | Match an image to the right word |

## 🛠️ Tech

- A **single `index.html`** — vanilla HTML, CSS and JavaScript. **Zero dependencies, no build step.**
- Installable **PWA**: [`manifest.webmanifest`](manifest.webmanifest) + a service worker ([`sw.js`](sw.js)) for offline caching.
- **Web Speech API** for pronunciation, **Web Audio API** for sound effects, `navigator.vibrate` for haptics.
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
