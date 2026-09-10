# Project assets

Landing-page illustrations and future supporting media live here. Interface icons use Phosphor; the approved logo remains in `public/images/`.

## Generated illustrations

Generated on 2026-09-07 using the built-in OpenAI image-generation model/tool (not the CLI). Final PNGs are imported directly into Next.js image components. These depict symbolic subjects, not the actual congregation or church grounds.

- `illustrations/quiet-garden.png`: current story illustration, the user-approved bench illustration with the pink flower moved beside the water on the right. Edited using the built-in image model on 2026-09-07. Bottom- and right-biased cropping preserves the flower.
- `illustrations/church-community.png`: previous community garden illustration, retained as an unused alternative.
- `illustrations/deep-roots.png`: decorative seedling accent beside “Deep roots.” Generated using the community illustration as a style reference. Keep empty alt text for this decorative use.

## Exact generation prompts

### Church community

Create a finished wide 3:1 horizontal editorial illustration for a church website story section. A symbolic welcoming multigenerational community of five simplified people, adults, an elder and a child, caring for a shared garden beside a gently winding path. Warm belonging, kindness and growth. Keep the people and essential narrative clustered in the central third so a narrow mobile center crop still works. Scenic organic forms extend to both edges. Quiet dark charcoal lower foreground with minimal detail for an existing white HTML caption (do NOT draw text). Sophisticated textured cut-paper editorial art, subtle paper grain, restrained organic silhouettes, human warmth, no photorealism, no cartoon outlines. Strict palette sage #B6CC9D, muted green #A1B887, gray-green #CED1C3 and charcoal #191C21, a little warm offwhite. No lettering, logos, watermarks, church buildings or identifiable real people. Full bleed rectangular bitmap; no rounded corners, frame, UI or mockup.

### Deep roots

Generate a separate finished horizontal 2:1 illustration asset using the attached community garden illustration ONLY as a style and color reference. A single bold sage-green seedling with two broad leaves and a short stem above several thick interwoven roots in charcoal soil. Show both leaves and roots clearly in one compact centered silhouette. Extremely simple forms, minimal detail: must read in a tiny 88 by 41 pixel pill-shaped website accent. Match the reference's textured cut-paper editorial style, subtle paper grain, sage #B6CC9D, muted green #A1B887, gray-green #CED1C3 and charcoal #191C21. Restrained depth, warm organic forms. Whole plant inside central 65% with breathing room; light gray-green upper background and charcoal lower soil. Full-bleed rectangular illustration, NOT a UI or pill mockup. No people, text, logos, watermarks, photorealism or decorative frame.


### Quiet garden revision

Built-in image edit: move only the existing pink flower, stem, and leaves to the right near the pond (approximately 77% across and 77% down). Restore the original ground and preserve all other scene details, colors, framing, and paper texture. User approved this preview before implementation.

### Welcome table hero

`illustrations/welcome-table-hero.png` is the user-approved, model-generated photographic hero. Prompt direction: a humble rustic table with an inviting empty chair in a sunlit garden, muted sage foliage and charcoal shadows, calm central space for the headline, no people, signage, or actual church grounds. Generated using the built-in image model and approved for the hero. The original woodland photograph is retained unused in `public/images/hero.jpg`.

## Daily devotional scripture

`content/devotional-verses.json` contains 48 curated verses retrieved verbatim from bible-api.com in the public-domain World English Bible translation. Each entry records its reference and source URL. The devotional rotates deterministically every 48 days, using the church's America/New_York calendar date. No network service is needed to display a verse. The reflection prompt is site copy, not scripture.
