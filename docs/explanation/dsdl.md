# Digital Services Design Language overview

The Digital Services Design Language is an ongoing effort to unify the user experience across all of Cal-ITP's websites and applications – calitp.org, [California Mobility Marketplace](https://camobilitymarketplace.com) (MobiMart), and [Cal-ITP Benefits](https://benefits.calitp.org).

End users will benefit from a consistent feeling across each product, increasing usability through predictability and building trust in the Cal-ITP brand.

For our own efforts in maintaining these products, using a unified structure of color, spacing, type, and components will reduce error and increase speed for both design and dev, while including flexibility to meet specific product needs.

For example, a comprehensive color palette is included. Each product can draw on different parts of it and feel unified while maintaining its own individual identity. Similarly, we have base styles and sizes for typography, but can use different font stacks to adapt to each product.


## Colors

### Brand colors

<ul class="brand-colors">
  <li style="background: var(--calitp-brand-blue); color: #fff">
    <h4>Cal-ITP Blue</h4>
    <div>(blue 70)</div>
  </li>
  <li style="background: var(--calitp-brand-cyan); color: #000">
    <h4>Cal-ITP Cyan</h4>
    <div>(cyan 40)</div>
  </li>
  <li style="background: var(--calitp-brand-yellow); color: #000">
    <h4>Cal-ITP Yellow</h4>
    <div>(yellow 30)</div>
  </li>
</ul>

### Full palette

When paired with black, the values of the colors in the 10–50 range have been selected to have a color contrast that complies with WCAG 2.2 Level AA (at least 4.5:1), and the values in the 60–100 range have compliant contrast when paired with white.

<div class="dsdl-colors">
  {# Start the first color group's list #}
  <ol>
    {% for color in dsdlColors %}{# Loop through every color in _data/dsdlColors.json #}
      {% if loop.previtem is defined and color.group != loop.previtem.group %}
        {# If we have changed groups, start a new list #}
  </ol>
  <ol>
      {% endif %}
      {# Output the individual color swatch #}
      <li style="background: {{ color.hex }};
                color: {{"#000" if color.level <= 50 else "#fff" }}">
        {{ color.group }}<br>{{ color.level }}
        {{ "<br>(DSDL Black)" if color.level == 100 and color.group == 'slate' }}
      </li>
    {% endfor %}
  </ol> {# Close the last color group's list #}
</div>


## Typography

To maintain flexibility across products, we use a set scale with multiple typeface options for brand typefaces (larger, stylized typefaces used for emphasis and headlines, or "display" copy) and base typefaces (highly legible typefaces used for body copy, smaller captions and labels, etc.).

### Typefaces

calitp.org and MobiMart use Space Grotesk as their brand typeface and Noto Sans as their base typeface. Cal-ITP Benefits (including the back-end admin interface) uses Noto Sans as both brand and base typeface.

![The MobiMart hero with Space Grotesk and Noto Sans fonts labeled on it](../images/mobimart-hero-fonts.png)

#### Space Grotesk {: .font-heading }

Space Grotesk is a proportional sans-serif typeface with modern feeling and strong readability. It has a sense of urbanity and trustworthiness, with strong, clean lines.
{: .font-heading }

[See it on Google Fonts](https://fonts.google.com/specimen/Space+Grotesk)
{: .font-heading }

#### Noto Sans {: .font-body }

Noto is designed specifically for accessibility and global communication, offering high-quality fonts with various weights and widths in sans, serif, mono, and other styles. This font family supports over 1,000 languages and 150 scripts. It’s a contemporary, aesthetic font with high legibility. It supports scripts of California’s main languages: English, Spanish, Mandarin + Cantonese, Tagalog, Vietnamese, Korean, Armenian, Arabic, Russian, Farsi, Hindi, and Japanese.
{: .font-body }

[See it on Google Fonts](https://fonts.google.com/noto/specimen/Noto+Sans)
{: .font-body }

#### Source Code Pro {: .font-monospace }

Source Code Pro is an open-source monospace typeface designed to work well in user interface and coding environments. It is used on Cal-ITP products when fixed-width type is appropriate, such as displaying code.
{: .font-monospace }

[See it on Google Fonts](https://fonts.google.com/specimen/Source+Code+Pro)
{: .font-monospace }

### Core style matrix and type hierarchy

Headlines                        | Titles                     | Subtitles                        | Body
-------------------------------- | -------------------------- | -------------------------------- | ------------------------
Headline L {: .text-headline-l .vertical-align-baseline } | Title L {: .text-title-l .vertical-align-baseline } | Subtitle L {: .text-subtitle-l .vertical-align-baseline } | Body L {: .text-body-l .vertical-align-baseline }
Headline M {: .text-headline-m .vertical-align-baseline } | Title M {: .text-title-m .vertical-align-baseline } | Subtitle M {: .text-subtitle-m .vertical-align-baseline } | Body M {: .text-body-m .vertical-align-baseline }
Headline S {: .text-headline-s .vertical-align-baseline } | Title S {: .text-title-s .vertical-align-baseline } | Subtitle S {: .text-subtitle-s .vertical-align-baseline } | Body S {: .text-body-s .vertical-align-baseline }

- Heading 1 (Headline L)
{: .text-headline-l .list-style-none }
- Heading 2 (Headline M)
{: .text-headline-m .list-style-none }
- Heading 3 (Title M)
{: .text-title-m .list-style-none }
- Heading 4 (Subtitle M)
{: .text-subtitle-m .list-style-none }
- Heading 5 (Title S)
{: .text-title-s .list-style-none }
- Heading 6 (Subtitle S)
{: .text-subtitle-s .list-style-none }

### Additional common styles

- Display
{: .text-display .list-style-none }
- Small caps
{: .text-small-caps .list-style-none }
- Caption
{: .text-caption .list-style-none }
- Footnote
{: .text-footnote .list-style-none }
- Code
{: .text-code .list-style-none }
