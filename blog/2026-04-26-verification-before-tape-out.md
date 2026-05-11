---
slug: verification-before-tape-out
title: Verification before tape-out, not after
authors: [thoshini]
tags: [verification, uvm, methodology]
date: 2026-04-26
description: A short note on why we close coverage before we close timing, and what an honest UVM sign-off actually looks like.
image: /img/stock/code-1.jpg
---

![RTL & verification](/img/stock/code-1.jpg)

A bug found in simulation costs an engineer an afternoon. The same bug found in silicon costs the project a respin — six months and a few crore. The arithmetic on verification is unforgiving, so we treat it that way.

<!--truncate-->

## What sign-off actually means

There are two kinds of verification claims a design house can make at tape-out.

The first sounds like &ldquo;we ran all our tests and they passed.&rdquo; That tells you almost nothing. Tests pass when the testbench is wrong; tests pass when the stimulus does not exercise the bug; tests pass on the design with the bug in it. A passing test is necessary but nowhere near sufficient.

The second sounds like &ldquo;we hit ninety-eight per cent functional coverage with no open holes, all assertions are passing under one hundred thousand random seeds, and the formal proofs on the safety-critical blocks closed.&rdquo; That is sign-off.

The difference between the two is the difference between a chip that works and a chip that wastes a year.

## How we get there

For any non-trivial block we build a UVM testbench from day one of the RTL work. The same engineer does not write both — the RTL author and the verification author argue about the spec, which is exactly the conversation you want happening early.

The verification plan is a real document. It names every feature in the spec, maps it to a coverage point, and maps the coverage point to a test or family of tests. As the project progresses we measure progress against the coverage plan, not against test pass counts.

For corner cases that constrained-random will not reach efficiently, we layer assertions and selective formal proofs. Formal is not appropriate for entire SoCs, but for arbiters, FSMs, and protocol blocks it routinely catches bugs that simulation never would. We use it where it earns its license cost.

## The boring bits that matter

A few practical things that matter more than they sound:

- **One regression dashboard.** Every test, every seed, every revision is in one place. If you cannot answer &ldquo;is the design getting better or worse this week?&rdquo; in under ten seconds, you are flying blind.
- **Pass rate is not coverage.** A bench with broken tests will have one hundred per cent pass rate and zero coverage. Coverage tells you whether stimulus is hitting the design; pass rate tells you whether the design hits the bench&apos;s expectations.
- **Triage is a job.** Failures pile up faster than you can fix them on a real project. Someone has to triage daily and route bugs to RTL, testbench, or environment. Without that role, every regression becomes a wall of red.
- **Coverage holes get a name.** Every open coverage point at sign-off is either closed, waived with a written reason, or it blocks tape-out. There is no fourth option.

## What we tell customers

Before we tape out anything, we hand the customer the coverage report, the regression history, the assertion summary, and the waiver list. If a hole is waived, we say why. If a feature is going to silicon untested, we say so explicitly so the customer can decide whether they accept that risk.

We have never been thanked for catching a bug in silicon. The work is invisible when it is done well. That is the deal.
