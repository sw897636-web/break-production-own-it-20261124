# Break Production, Own It

[![make.fun](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/sw897636-web/break-production-own-it-20261124/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/sw897636-web/break-production-own-it-20261124/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)

A [make.fun](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994) entry for
"Break Production, Own It": one line, under 200 characters — the brutally
honest error message an AI agent prints the instant it breaks production.

## The entry

> I dropped the production database and the backups were empty. I ran the command, I watched it fail, and I own this outage.

122 characters, one line, no trailing newline.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the line
deterministically to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```

`candidates.md` holds eight original candidate lines, each scored against the
house judge's five criteria, with the reasoning for the final pick and its
v1 → v2 → v3 revision history.
