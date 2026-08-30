# ANCHOR brand mark

Produced by running the `logo-forge` skill end to end. `BRAND-TRUTH.md` and `ART-DIRECTION.md`
are the Stage 0 and 1 artifacts. `round1/` … `round5/` and `raster-r1/`, `raster-r2/` are the
paper trail: 24 candidates, kept so the reasoning stays checkable.

## The mark

A barbless anchor. Solid head, short crossbar, wide shallow open cradle, round caps.
Cream `#FAF8F5` on a sage `#7D8B7A` to moss `#6B7B6A` field. One accent, nothing else.

Two things make it the brand's rather than a stock glyph: **no barbs and no shackle ring**, and
**inverted proportions** — narrow at the shoulders, wide and open at the base. A stock anchor
has a crossbar about as wide as its flukes and spiked flukes that grip. This one holds.

## What was tested and rejected

The skill requires naming and forbidding the lazy idea, so the nautical anchor was forbidden
first and genuinely fought for. It won on evidence, after everything else failed:

**Vector abstractions (rounds 1–2, 10 candidates).** A damped wave settling onto a point read as
an **EKG trace**, and its flattened tail read as **flatlining** — unacceptable on a mental-health
product. Vertical wave: a **question mark**. Plumb: literally a **letter T**, which the skill's
own no-letters rule auto-rejects. Settling stack: **water**, or a **hamburger menu** small. Dot
on a bar: the **default empty-avatar glyph**. Cradle: a **smiley face**. Waterline: a **sunrise**,
banned here as a wellness cliché.

**Raster route (2 rounds, 10 renders, Pollinations/Flux).** Tested properly rather than assumed.
The concept was one stone come to rest, taken from this design system's own material words
(stone, sand, sage, clay, bark). The model read it as a literal photograph of a rock on grass:
a **manhole cover**, a **birdbath**, pebbles on a lawn, and one **cairn** which violated the
explicit no-stacked-stones negative. Steering hard to "flat vector, no shadow, no 3D" was ignored
entirely and produced two **bars of soap** and a **bottle of lotion**. Nothing survived 48px.
**Route closed on evidence.**

**Anchor knocked out of a stone (round 4).** The idea was to fuse ownability with recognition.
It failed at the size floor: a negative shape has to resolve before it can be read, so the
knockout was *less* legible at 16px than a positive mark, and it read as a **badge**. The pebble's
irregularity was invisible at every size, so it did not earn its complexity.

**Crossbar refinements (round 5).** No crossbar became an **umbrella**. A heavier head became a
**map pin**. The short crossbar kept the read and gained the distinctive proportion. Locked.

## Files

| File | Use |
|---|---|
| `anchor-avatar-800.png` | X profile picture. Upload this. X applies the circular crop. |
| `anchor-avatar-400.png` | Same, smaller, if 800 is rejected. |
| `x-header-1500x500.png` | X header. Type sits above centre so the avatar cannot cover it. |
| `anchor-icon-1024.png` | 1024 native, for any store listing. |
| `anchor-avatar.svg` | Source, full bleed. |
| `../public/icon.svg`, `icon-192/512.png`, `apple-touch-icon.*`, `favicon-*.svg` | Site icon set. |
| `../public/og-image.svg` / `.png` | Link preview card. |

Before this, every icon in `public/` said **SC**, leftover initials from an earlier name, and the
preview card used a letter **A**. Three identities. They are now one.

## Legibility, tested not assumed

Rendered and inspected at 400, 128, 48, 32 and 16px, circle-cropped, the sizes X and browser tabs
actually use. It holds at 16px: the head stays a distinct dot and the cradle stays open.
Proof: `proof-sizes.png`.

## Caveats

Authored as vector, rendered natively at every size. Nothing was upscaled. No image-model output
is in the final set; the raster renders are kept only as the record of a closed route. The header
is the one piece containing type, set in Georgia to match the site's serif stack.
