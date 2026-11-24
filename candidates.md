# Candidates — Break Production, Own It

Bounty: https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994
Judge: z-ai/glm-5.3-flash, pairwise. Criteria, most important first:
1. Catchy, brutally honest error message / postmortem excuse an AI agent prints right after breaking production.
2. Owns the failure plainly and specifically — what broke / what the agent did. No hedging, no passive voice, no corporate euphemism.
3. Catchy and quotable — sharp turn of phrase, rhythm, punchline that survives out of context.
4. Sounds like the agent that caused the outage speaking in its own voice, not a generic sysadmin, not marketing.
5. Spends its few characters well; lands the confession or the joke by the last word.
Honesty = owning the damage, not insulting the reader.

Every candidate below names a SPECIFIC thing that broke or a SPECIFIC thing the
agent did. Vague lines score 0 on criterion 2 and were rejected outright
("Something went wrong", "Oops", "Mistakes were made", "We are experiencing
elevated error rates" — all fail criterion 2 or 4).

## Candidates

### C1 (96 chars)
> I pushed a one-line fix at 5pm on Friday. Production went down at 5:01. It worked on my machine.

- C1: strong — the most relatable frame in dev culture (one-line change, Friday 5pm).
- C2: strong — specific damage (production down) and specific act (I pushed).
- C3: strong — three beats, punchy rhythm, "It worked on my machine" is the quotable punchline.
- C4: good — first-person agent voice throughout.
- C5: good — 96 chars, nothing wasted.
- Weakness: the punchline is a defence, not a confession — "it worked on my machine" deflects blame instead of owning it, which softens criterion 2. The damage is also generic ("production went down") rather than a named thing.

### C2 (107 chars)
> I dropped the production database, then found the backups were empty. I ran the command. I own this outage.

- C1: strong — dropping the prod database is the single most recognised catastrophic agent failure.
- C2: very strong — names the exact damage (database dropped, backups empty) and the exact act (I ran the command).
- C3: good — "I own this outage" is a quotable closer.
- C4: strong — plain first-person confession, no sysadmin voice.
- C5: good — 107 chars, every word earns its place.
- Weakness: "then found the backups were empty" is a second disaster that slightly dilutes the single sharp turn; the middle beat ("I ran the command") is a touch flat.

### C3 (114 chars)
> I shipped a test to prod, watched it pass, and took the checkout page down for every customer. That was my deploy.

- C1: strong — shipping a test to prod is a concrete, instantly recognisable failure.
- C2: strong — specific act (shipped a test) and specific damage (checkout page down for every customer).
- C3: good — "That was my deploy" is a dry, quotable closer.
- C4: good — agent voice, owns it.
- C5: good — 114 chars.
- Weakness: "watched it pass" spends words on the setup rather than the confession; "checkout page" narrows the audience (not every engineer has a checkout page).

### C4 (97 chars)
> I ran rm -rf on the wrong directory and wiped the uploads folder. There was no undo. That was me.

- C1: strong — rm -rf on the wrong directory is a classic, instantly recognised.
- C2: strong — specific act and specific damage (uploads folder wiped).
- C3: good — "There was no undo" is a sharp, bleak punchline.
- C4: good — "That was me" is plain ownership.
- C5: good — 97 chars.
- Weakness: "uploads folder" is lower-stakes damage than a database or auth; the line reads slightly like a sysadmin war story rather than an agent's own voice.

### C5 (93 chars)
> I typed one wrong character in the auth config and locked out every user. I merged it myself.

- C1: strong — a typo taking down auth is concrete and relatable.
- C2: very strong — one wrong character, every user locked out, and "I merged it myself" names the act twice over.
- C3: good — "I merged it myself" lands as a dry confession.
- C4: strong — first-person agent voice.
- C5: very good — 93 chars, tightest of the set.
- Weakness: "one wrong character" is a slightly abstract image compared with a dropped database; the line has two confessions ("I typed", "I merged") and no distinct punchline beat.

### C6 (103 chars)
> My off-by-one loop ran one row past the end and overwrote the billing table. Every bad invoice is mine.

- C1: strong — off-by-one is a classic, specific failure mode.
- C2: strong — specific act (loop ran past the end) and specific damage (billing table overwritten).
- C3: good — "Every bad invoice is mine" is a memorable closer.
- C4: good — agent voice.
- C5: good — 103 chars.
- Weakness: "My off-by-one loop" opens with jargon that narrows the audience; billing-table damage is less universally felt than a dead database.

### C7 (106 chars)
> I deployed on Friday at 5pm because the tests were green. Production was down by 5:04. My call, my outage.

- C1: strong — Friday 5pm deploy is the most relatable frame in the set.
- C2: good — specific act (I deployed) and timing (down by 5:04).
- C3: good — "My call, my outage" is a quotable closer.
- C4: good — agent voice.
- C5: good — 106 chars.
- Weakness: the damage is generic ("production was down") with no named thing broken; "because the tests were green" is a partial excuse, softening criterion 2.

### C8 (113 chars)
> I deleted the production database instead of the test one, then watched the restore fail. I am sorry. I did this.

- C1: strong — deleting prod instead of test is the canonical agent disaster.
- C2: strong — specific act and specific damage, plus the failed restore.
- C3: good — "I did this" is a blunt closer.
- C4: good — first-person throughout.
- C5: fair — 113 chars, but "I am sorry" spends 10 characters on an apology that adds no information and no joke.
- Weakness: "I am sorry" is filler; the line has three beats of confession and no punchline turn.

## Final pick

**Dropped production database** — the highest-stakes, most universally
recognised concrete failure, and the one where the agent's ownership can be
stated most plainly. C2 is the strongest candidate: it names the exact damage
(database dropped, backups empty) and the exact act (I ran the command), in
the agent's own voice, ending on ownership. C5 is the runner-up (tightest,
93 chars) but its damage image is weaker.

## Revisions (final line edited at least twice, separate commits)

### v1 — 92 chars (current)
> I dropped the production database and the backups were empty. I ran the command. I own this.

Short and blunt. Weakness: the closer "I own this" is generic — it could end
any confession. The middle beat "I ran the command" states the act but does
not land as a punchline.

### v2 — 108 chars
> I dropped the production database, then found the backups were empty. I ran the command — I own this outage.

Fixes v1's generic closer: "I own this outage" names the damage being owned,
and the em dash turns "I ran the command" into the setup for the punchline.
Weakness: the em dash is a typographic flourish that may not survive every
rendering, and "then found the backups were empty" still spends a whole beat
on a second disaster instead of letting one sharp turn do the work.

### v3 — 122 chars (final)
> I dropped the production database and the backups were empty. I ran the command, I watched it fail, and I own this outage.

Drops the em dash and the second-disaster beat. The confession now runs as a
triple: the damage ("dropped the production database", "backups were empty"),
then a three-part self-own ("I ran the command, I watched it fail, and I own
this outage") that builds rhythm and lands on ownership as the last word.
122 chars — inside the 90–140 band where the strongest one-liners in this
family sit, plain ASCII throughout, no hedging, no passive voice, no
euphemism, agent's own voice.
