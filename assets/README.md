# Project assets

## Autumn color editions

Active images edited on 2026-09-10 with the built-in OpenAI image-generation tool. Original scenes are retained as source files; the page imports the `-fall.png` versions. Layout, crops and animation hooks are unchanged.

### illustrations/welcome-table-hero-fall.png

Color-only edit of this exact photograph for autumn. Turn the existing green foliage into natural antique-gold, amber, copper and restrained deep burgundy fall foliage. Keep warm ivory sunbeams and warm charcoal shadows. Palette harmony #B08A45 #6E2639 #F5F1E8 #291D20. Preserve exact table, all chairs, pottery, plant, tree trunks, every object's position and shape, crop, perspective, light direction, exposure, photorealistic style and central empty space. No objects added or removed, no fallen leaves added, no scene redesign. Only colors change.

### illustrations/quiet-garden-fall.png

Color-only autumn recoloring of this exact textured illustration. Existing foliage becomes antique gold, muted copper/rust, tawny beige and subtle deep maroon; warm ivory sky/mountains and taupe landscape; water reflects warm muted autumn hues. Palette #B08A45 #6E2639 #F5F1E8 #EAE3D6 #291D20. Preserve the exact composition, tree and leaf silhouettes, bench, path, pond, hills, all textures and object positions. Keep the small bright pink flower on the right by the water exactly in place and pink. Do not add falling leaves or any objects. Do not change style, framing, forms or lighting. Colors only.

### illustrations/deep-roots-fall.png

Color-only recoloring of this exact cut-paper seedling illustration for autumn. Left leaf antique gold #B08A45, right leaf muted maroon #6E2639, warm brown stem, ivory/cream roots and background #F5F1E8 #EAE3D6, deep warm charcoal-maroon soil #291D20. Preserve precisely the two leaves, every root shape, stem, silhouette, position, texture, shadows and wide composition. No new elements, no wilting, no redesign. Only colors change.


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

## Maroon and gold logo

`public/images/providence-logo-maroon-gold.png` is the active header/footer logo, recolored with the built-in image-generation model from the approved `providence-logo.png`. Prompt: preserve the exact square composition, shapes, lettering and margins; change dark elements to deep maroon #6E2639 and green hills/subtitle/rules to antique gold #B08A45; retain the white background. The original is retained as the approved source.

## Favicon and platform icons

`branding/favicon-master.png` was generated with the built-in image model from the approved maroon/gold church logo. Prompt: extract only the circular cross, hills and winding path; preserve the emblem, omit lettering, use maroon and gold on ivory, and center with generous app-icon safety margins. PNG exports were resized with Sharp; the ICO packages 16, 32 and 48 pixel versions.

Next.js serves `src/app/favicon.ico`, `src/app/icon.png` (32px), and `src/app/apple-icon.png` (180px). `public/icons/` contains 192px and 512px browser/Android icons plus a maskable 512px version, registered by `src/app/manifest.ts`. These brand assets are separate from Phosphor interface icons.

Browser favicon exports now use `branding/favicon-rounded.png`, edited with the built-in image model to round only the ivory background corners (22% radius) with transparent outer corners. The symbol is preserved. Apple touch and maskable icons retain opaque backgrounds because their platforms apply their own corner masks.
