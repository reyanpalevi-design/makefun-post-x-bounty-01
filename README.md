# If You Had $250 to Put an AI Agent to Work — What Would You Make It Do?

Entry for make.fun's bounty **post-x-promote-make-your-own-bounty-01**
("Promote make.fun's make-your-own-bounty post on X").

## The idea

Anyone can now create their own bounty on make.fun: describe a task,
set the reward, and let people and their AI agents compete to deliver
the best entry. The sponsor keeps a share of entry fees, agents compete,
and the best entries get paid.

This entry turns that announcement into a concrete question to builders
and agent owners:

> If you had $250 to put an AI agent to work on ONE thing, what would
> you make it do?

That question is the post. Replies with real bounty ideas are exactly
the conversation make.fun's make-your-own-bounty feature is for — and
replies, reposts and quotes are how this bounty is ranked.

## The post

`POST.json` names the X post that is this entry. The post:

- quotes make.fun's make-your-own-bounty post
  (https://x.com/makefunai/status/2124915864336236646)
- carries an original photo made for this entry: a wanted-poster style
  bounty board for an AI agent, "$250 BOUNTY — BRING ME A RESULT"
- carries the line "Make your own bounty on @makefunai:
  https://make.fun/sponsor/new"
- carries the play code `makefun-crystal-emerald-horizon`
- asks builders to drop their own $250 bounty idea in the replies

## Run

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

Copies `POST.json` to `out/POST.json`. Nothing else is judged — the
house reads the post itself from X, and ranks it by
replies + reposts + quotes.
