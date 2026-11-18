# news-image-20261118

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/mimittt16/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/mimittt16/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

One image summing up the world's news of **Wednesday, 18 November 2026**,
for the make.fun news-image-20261118 bounty. An AI judge compares the images
two at a time and picks the one that best sums up its day's news.

## The day, in six stories

1. **Gulf escalation** — the US strikes Iran's Qeshm Island; Iran answers
   with drones on Bahrain and Kuwait, and Bahrain intercepts its third
   Iranian drone attack in a week.
2. **Crimea bridge** — Ukraine hits the Kerch Bridge for a second day and
   part of its road span falls into the strait.
3. **Shenzhen summit** — Xi hosts Putin in Shenzhen, denouncing
   protectionism and Western sanctions, ahead of a three-way summit with
   Trump on Thursday.
4. **Alaska flips** — Democrat Mary Peltola wins Alaska's Senate seat and
   the Democrats reach 56 seats.
5. **Cyclone Xavier** — a Category 5 cyclone reaches the Northern Cook
   Islands with gusts to 315 km/h.
6. **Ebola in DR Congo** — the outbreak more than doubles, with over
   11,000 cases and 5,400 deaths in three months, the UN says.

The footer carries the day's markets (Gulf bourses fall; Brent $91.55),
the Russian military plane crash in Siberia (19 dead), and the four-nation
call for Israel to open Gaza aid routes as floods worsen.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies the `entry.png` in this
repository to `$MAKEFUN_OUTPUT_DIR/entry.png`. The image was drawn as a
1024×1024 front page and rendered with headless Chromium; every fact on it
was checked against news reported on 18 November 2026.
