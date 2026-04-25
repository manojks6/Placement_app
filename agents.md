# agents.md — Placement App AI Coding Guide

> Audited: 2026-04-25 | Stack: React 18 + Express + MongoDB Atlas + Axios

---

## Project Map (Memorize This — Never Re-Read Unnecessarily)

```
Placement_App/
├── backend/
│   ├── index.js          ← Express server, port 8000
│   ├── rout.js           ← GET /dsa, GET /aptitude, GET /
│   ├── .env              ← DATABASE_URL (MongoDB Atlas)
│   └── Mongo/
│       ├── MongoDB.js    ← connectDB() via mongoose
│       ├── MongoModels.js← AptitudeModel, DsaModel (Schema: Topic, QA[])
│       ├── MongoData.js  ← one-time seeder (currently disabled)
│       └── Model_query.txt ← scratch queries, NOT executed code
├── frontend/
│   └── src/
│       ├── App.js        ← BrowserRouter: /, /dsa, /aptitude, /resources
│       ├── Pages/        ← Home.js, Dsa.js, Aptitude.js, Resources.js
│       ├── Components/   ← Navbar.js, Answer.js, Footer.js
│       └── CSS/          ← one CSS file per component
```

**Schema (both models are identical):**
```js
{ Topic: String, QA: [{ question: String, answer: String }] }
```

**API base URL (hardcoded in frontend):** `http://localhost:8000`

---

## 1. Rules to Reduce Token Usage

- **Never read `node_modules/`, `package-lock.json`, `App.test.js`, `reportWebVitals.js`, `setupTests.js`, `logo.svg`** — zero AI value.
- **Never read `Model_query.txt`** unless explicitly asked about seeding. It is scratch notes, not active code.
- **Never read all CSS files at once.** CSS files are tiny (<1KB each). Only read if the task is explicitly about styling.
- **`MongoData.js` is a one-time seeder.** Do not load it for backend logic tasks.
- **Assume `AptitudeModel` and `DsaModel` share the same schema** — no need to re-read `MongoModels.js` unless schema change is requested.
- **Assume API base URL is `http://localhost:8000`** — it's hardcoded in both `Dsa.js` and `Aptitude.js`.
- **Assume `cors`, `express.json()`, `express-async-handler`, `mongoose`, `axios`, `react-router-dom` are already installed.**

---

## 2. Smaller Prompt Strategy

**Instead of:** "Go through the whole project and tell me how to add a new topic"
**Use:** "Add a new route `/interview` returning `InterviewModel.find({})`. Model schema same as DsaModel."

**Template for this project:**
```
Task: [add route | fix bug | add component | style fix]
File(s): [exact filename]
Change: [one sentence]
Context: [only if not obvious from project map above]
```

**Avoid pasting entire file contents in prompts.** Reference by filename instead.

---

## 3. Read Only Needed Files

| Task | Files to Read | Files to SKIP |
|---|---|---|
| Add new API route | `rout.js`, `MongoModels.js` | Everything else |
| Fix DB connection | `MongoDB.js`, `.env` | All frontend |
| Add new page | `App.js` + new Page file | CSS, backend, other pages |
| Fix a component | That component's `.js` + `.css` only | All other files |
| Add new Mongoose model | `MongoModels.js` only | `MongoData.js`, routes |
| Style a page | That page's `.css` only | All `.js` files |
| Add seed data | `MongoData.js` only | Everything else |
| Navbar change | `Navbar.js` + `Navbar.css` | All pages |

---

## 4. Shorter Outputs by Default

- **Default:** Return only the changed/added code block. No full-file reprints.
- **No explanations unless asked.** Just diff-style changes.
- **For bug fixes:** State the bug in one sentence, show the fix only.
- **For new features:** Show only the new code + where to insert it.
- **Skip "Here's what I did" summaries** unless the user asks for an explanation.

**Example — good output:**
```js
// rout.js — add after /aptitude route
router.route("/interview").get(
  expressHandler(async (req, res) => {
    const x = await InterviewModel.find({});
    res.json(x);
  })
);
```

**Example — wasteful output:** Reprinting all 24 lines of `rout.js` with 2 lines changed.

---

## 5. Fewer Tool Calls

- **Max 2 file reads per task** for simple changes (bug fix, add route, style tweak).
- **Max 4 file reads** for feature additions (new page + route + model).
- **Never read a file "just to be safe."** Use the Project Map above.
- **Batch reads:** If you must read multiple files, read them in one parallel call — never sequentially for independent files.
- **Do not re-read a file you already read in the same session** unless the user edited it.

**Minimum reads for common tasks:**
| Task | Max reads |
|---|---|
| Fix typo / console.log | 0 (use project map) |
| Add route | 1 (`rout.js`) |
| Add model | 1 (`MongoModels.js`) |
| Add React page | 1 (`App.js`) + write new file |
| Debug fetch error | 2 (`Dsa.js` or `Aptitude.js` + `rout.js`) |

---

## 6. Smart Retry Rules

- **If a file read fails once:** Try the exact path from the project map above. Do not guess alternate paths.
- **If MongoDB connection fails at runtime:** Check `.env` → `DATABASE_URL` format first. Do not touch `MongoDB.js`.
- **If `axios.get` fails:** Confirm backend is running on port 8000 and the route exists in `rout.js`. No code change needed.
- **If `MongoData.js` seeder throws:** Check that `f()` is uncommented in `MongoDB.js` line 6. Re-comment after seeding.
- **Max 2 retries** on any tool call. If it fails twice, report and stop.
- **Never retry reading `node_modules`** for any reason.

---

## 7. Cheap Mode vs Full Mode

### ⚡ Cheap Mode (use by default)
- Read only files directly relevant to the task
- Output only changed lines
- No summaries, no explanations
- Assume project map is correct
- No confirmation questions for obvious tasks
- Max 3 tool calls per task

**Trigger:** All routine tasks — add route, fix bug, update component, add style.

### 🔍 Full Mode (use only when explicitly needed)
- Read all relevant files before making changes
- Output full modified file
- Explain reasoning
- Verify adjacent files for side effects

**Trigger:** Only when user says "review the whole X", "audit", "refactor", "something is broken and I don't know why", or when adding a feature that touches 4+ files.

---

## 8. Safe Assumptions (Don't Ask — Just Do)

| Situation | Safe Assumption |
|---|---|
| New route needed | Use `express-async-handler` pattern from `rout.js` |
| New model needed | Copy `Dsa` schema from `MongoModels.js`, same structure |
| New page needed | Add `<Route>` in `App.js`, create file in `Pages/`, import CSS from `CSS/` |
| CSS file for new component | Create in `CSS/ComponentName.css`, import in component |
| API URL for new frontend fetch | `http://localhost:8000/routename` |
| State pattern for new data page | Same `useState([])` + `useEffect` + `axios.get` as `Dsa.js` |
| Export pattern | `export default FunctionName` (no named exports in this project) |
| Seeder is disabled | `f()` is commented out in `MongoDB.js` — leave it that way unless seeding |
| `.env` port | Backend is always port 8000 |
| CORS | Already enabled globally in `index.js` |

---

## 9. Quality vs Cost Balance

- **Make targeted edits** — surgical changes only. Never rewrite a working file.
- **Reuse existing patterns** — both `Dsa.js` and `Aptitude.js` are identical in structure. Clone, don't redesign.
- **Don't gold-plate.** This is a focused placement prep app. Keep components small and single-purpose.
- **One schema fits all** — before creating a new Mongoose schema, confirm it can't reuse `{ Topic, QA[] }`.
- **If a task is unclear:** Make one safe assumption, state it in one line, then implement. Don't ask multiple questions.

---

## Top Token Waste Issues Found (Audit Results)

| # | Waste | Location | Impact |
|---|---|---|---|
| 1 | `Model_query.txt` (5.4KB of scratch SQL/queries) gets read unnecessarily | `Mongo/` | Medium |
| 2 | `MongoData.js` contains 193 lines of hardcoded Java strings — high token cost if read | `Mongo/MongoData.js` | High |
| 3 | `Dsa.js` and `Aptitude.js` are near-identical — reading both is redundant | `Pages/` | Medium |
| 4 | `package-lock.json` is 733KB — never read this | `frontend/` | Critical |
| 5 | `console.log(Topics)` left in `Dsa.js` (line 32) — generates noise in debug sessions | `Dsa.js` | Low |
| 6 | Commented-out code in `MongoModels.js` (lines 48–80) adds ~30 lines of dead tokens | `MongoModels.js` | Low |
| 7 | `App.test.js`, `setupTests.js`, `reportWebVitals.js` — boilerplate, never relevant | `src/` | Low |

---

## Quick Fixes

```js
// 1. Remove debug log — Dsa.js line 32
- console.log(Topics);

// 2. Fix middleware order — index.js (cors/json BEFORE listen)
+ app.use(cors());
+ app.use(express.json());
+ app.use(routs);
  app.listen(8000, () => console.log("Listening at: 8000"));

// 3. Fix broken import — MongoData.js line 1
- const { A, DsaModel } = require("./MongoModels");
+ const { DsaModel } = require("./MongoModels");

// 4. Clean dead code — MongoModels.js lines 48–80
  (delete all commented-out old schema code)
```

---

## Estimated Token Savings

| Fix | Tokens Saved Per Session |
|---|---|
| Never read `package-lock.json` | ~180,000 tokens |
| Never read `MongoData.js` unless seeding | ~800 tokens |
| Never read `Model_query.txt` unless asked | ~1,400 tokens |
| Skip `App.test.js` + `setupTests.js` + `reportWebVitals.js` | ~300 tokens |
| Read 1 page instead of both `Dsa.js` + `Aptitude.js` | ~600 tokens |
| Remove dead comments in `MongoModels.js` | ~400 tokens (permanently) |
| Cheap mode vs full mode by default | ~40–60% reduction overall |

> **Total estimated per-session savings: 60–70% fewer tokens** on routine tasks by following this guide.
