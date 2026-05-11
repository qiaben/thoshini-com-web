---
slug: mature-nodes-not-heroics
title: Mature nodes, not heroics
authors: [thoshini]
tags: [process-node, fabless, engineering]
date: 2026-05-04
description: Why we default to mature process nodes — 180nm, 130nm, 65nm — for most parts, and the small set of cases where it actually makes sense to push down to 28nm or below.
image: /img/stock/wafer-1.jpg
---

![Wafer-level test](/img/stock/wafer-1.jpg)

When customers describe a new chip, the first question is almost always &ldquo;what node?&rdquo; — and the assumption is usually that smaller is better. It is not. Here is how we think about it.

<!--truncate-->

## What &ldquo;mature&rdquo; means

A mature node is one where the foundry process has been in volume production for a decade or more — 180nm, 130nm, 65nm, and increasingly 40nm now fall into this bucket. The process design kits are stable, the IP libraries are complete, the analog characterisation is well understood, and the yield is predictable. Mask costs are a fraction of an advanced node, multi-project shuttle slots are easy to book, and the foundry will actually quote you for small wafer volumes.

## Why we default here

For ninety per cent of the chips we build — power management ICs, sensor front-ends, small mixed-signal SoCs, custom digital glue — mature nodes are simply the right answer.

- **Cost.** A full reticle mask set at 180nm runs in low single-digit crores. At 28nm it is six to ten times that. At 7nm it is twenty times. For a product that ships fifty thousand parts, the mask amortisation alone kills the business case at advanced nodes.
- **Analog performance.** Most analog circuits get worse, not better, as you shrink. Headroom collapses, matching degrades, and the foundry analog libraries on advanced nodes are aimed at digital-heavy SoCs. For a power-management or sensor part, mature is genuinely better.
- **Yield.** Mature processes have been characterised to death. Yield is predictable, defect densities are low, and the foundry test infrastructure is fully built out.
- **Time to silicon.** Multi-project shuttle slots at 180nm or 65nm are available every quarter. You can be in silicon in eight to twelve months. Advanced nodes have longer queues and more rigorous qualification gates.

## When to go smaller

There are a handful of cases where pushing past mature is the right answer:

- **High-volume digital.** If you are shipping millions of units of a digital-heavy SoC, the per-die savings from a denser node eventually pay back the mask cost. The crossover is usually around five million units.
- **Power and performance constrained.** If the product needs the device to run for years on a coin cell, or to clock above several hundred megahertz at acceptable power, you eventually run out of room at mature nodes.
- **Existing IP commitment.** If the customer already owns sub-100nm IP and wants to reuse it, the node choice is partially made.

For everyone else, mature nodes are not a compromise. They are the right tool.

## What this means in practice

We start every engagement by talking through node selection explicitly. If the part can be built at 180nm and the volume is under five million, that is where we will recommend it goes. If there is a real reason to push smaller, we will say so — and we will say so before the first line of RTL is written, because the node decision drives almost every other choice on the project.

A part that works at 65nm beats a part that almost works at 7nm. The boring choice is usually the right one.
