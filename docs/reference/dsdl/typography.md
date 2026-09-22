# Digital Services Design Language typography reference


## Foundational tokens

### Font families

Fonts are imported as [variable fonts](https://fonts.google.com/knowledge/introducing_type/introducing_variable_fonts)
from [Google Fonts](https://fonts.google.com).

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400..700&family=Noto+Sans:ital,wght@0,400..600;1,400..600&family=Source+Code+Pro&display=swap');
```

#### Weights and styles imported

All three fonts are variable

- **Space Grotesk:** 400–700, regular only (no italic available)
- **Noto Sans:** 400–600, regular and italic
  - We use the 600 weight for bold instead of the typical 700.
- **Source Code Pro:** 400, regular only

#### Font stack variables

```css
:root {
  --dsdl-heading-font-stack: 'Space Grotesk', system-ui;
  --dsdl-body-font-stack: 'Noto Sans', system-ui;
  --dsdl-monospace-font-stack: 'Source Code Pro', 'Cascadia Code', Menlo, Consolas, 'DejaVu Sans Mono', monospace;
}
```


### Font size

```css
:root {
  --text-base:    16;
  --text-xxs:     calc(10 / var(--text-base) * 1rem);
  --text-xs:      calc(12 / var(--text-base) * 1rem);
  --text-s:       calc(14 / var(--text-base) * 1rem);
  --text-m:       calc(16 / var(--text-base) * 1rem);
  --text-l:       calc(20 / var(--text-base) * 1rem);
  --text-xl:      calc(24 / var(--text-base) * 1rem);
  --text-xxl:     calc(32 / var(--text-base) * 1rem);
  --text-xxxl:    calc(40 / var(--text-base) * 1rem);
  --text-xxxxl:   calc(48 / var(--text-base) * 1rem);
  --text-display: calc(64 / var(--text-base) * 1rem);
}
```

Our font size calculations based on browsers' default font size of 16px.
That value is assigned to `--text-base` and then used in the gnarly calculation
to determine the appropriate `rem` value, given the desired pixel value.


### Line height

```css
:root {
  --line-height-extra-tight: 1.125;
  --line-height-tight:       1.25;
  --line-height-normal:      1.5;
  --line-height-loose:       1.625;
}
```


### Body color

```css
:root {
  --dsdl-body-color: var(--dsdl-black);
}
```


## Core type styles

The above foundations are used in combination to create our matrix of twelve core type styles –
three sizes each in the categories of headlines, titles, subtitles, and body.

<table class="dsdl-core-type-matrix">
  <thead>
    <tr>
      <td></td>
      <th>Large</th>
      <th>Medium</th>
      <th>Small</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="type-table-row-header">Headline</th>
      <td><!-- Headline L -->
        ```
        var(--text-headline-l)
        ```
        <dl class="dsdl-type-specs">
          <dt>font-size:</dt>
            <dd>40px</dd>
          <dt>font-weight:</dt>
            <dd>700</dd>
          <dt>line-height:</dt>
            <dd>1.25</dd>
        </dl>
        <div class="text-headline-l">A wizard’s job is to vex chumps quickly in fog.</div>
      </td>
      <td><!-- Headline M -->
        ```
        var(--text-headline-m)
        ```
        <dl class="dsdl-type-specs">
          <dt>font-size:</dt>
            <dd>32px</dd>
          <dt>font-weight:</dt>
            <dd>700</dd>
          <dt>line-height:</dt>
            <dd>1.25</dd>
        </dl>
        <div class="text-headline-m">A wizard’s job is to vex chumps quickly in fog.</div>
      </td>
      <td><!-- Headline S -->
        ```
        var(--text-headline-s)
        ```
        <dl class="dsdl-type-specs">
          <dt>font-size:</dt>
            <dd>24px</dd>
          <dt>font-weight:</dt>
            <dd>700</dd>
          <dt>line-height:</dt>
            <dd>1.25</dd>
        </dl>
        <div class="text-headline-s">A wizard’s job is to vex chumps quickly in fog.</div>
      </td>
    </tr>
    <tr>
      <th class="type-table-row-header">Title</th>
      <td><!-- Title L -->
        ```
        var(--text-title-l)
        ```
        <dl class="dsdl-type-specs">
          <dt>font-size:</dt>
            <dd>32px</dd>
          <dt>font-weight:</dt>
            <dd>600</dd>
          <dt>line-height:</dt>
            <dd>1.25</dd>
        </dl>
        <div class="text-title-l">A wizard’s job is to vex chumps quickly in fog.</div>
      </td>
      <td><!-- Title M -->
        ```
        var(--text-title-m)
        ```
        <dl class="dsdl-type-specs">
          <dt>font-size:</dt>
            <dd>24px</dd>
          <dt>font-weight:</dt>
            <dd>600</dd>
          <dt>line-height:</dt>
            <dd>1.25</dd>
        </dl>
        <div class="text-title-m">A wizard’s job is to vex chumps quickly in fog.</div>
      </td>
      <td><!-- Title S -->
        ```
        var(--text-title-s)
        ```
        <dl class="dsdl-type-specs">
          <dt>font-size:</dt>
            <dd>16px</dd>
          <dt>font-weight:</dt>
            <dd>600</dd>
          <dt>line-height:</dt>
            <dd>1.5</dd>
        </dl>
        <div class="text-title-s">A wizard’s job is to vex chumps quickly in fog.</div>
      </td>
    </tr>
    <tr>
      <th class="type-table-row-header">Subtitle</th>
      <td><!-- Subtitle L -->
        ```
        var(--text-subtitle-l)
        ```
        <dl class="dsdl-type-specs">
          <dt>font-size:</dt>
            <dd>24px</dd>
          <dt>font-weight:</dt>
            <dd>500</dd>
          <dt>line-height:</dt>
            <dd>1.25</dd>
        </dl>
        <div class="text-subtitle-l">A wizard’s job is to vex chumps quickly in fog.</div>
      </td>
      <td><!-- Subtitle M -->
        ```
        var(--text-subtitle-m)
        ```
        <dl class="dsdl-type-specs">
          <dt>font-size:</dt>
            <dd>20px</dd>
          <dt>font-weight:</dt>
            <dd>500</dd>
          <dt>line-height:</dt>
            <dd>1.5</dd>
        </dl>
        <div class="text-subtitle-m">A wizard’s job is to vex chumps quickly in fog.</div>
      </td>
      <td><!-- Subtitle S -->
        ```
        var(--text-subtitle-s)
        ```
        <dl class="dsdl-type-specs">
          <dt>font-size:</dt>
            <dd>16px</dd>
          <dt>font-weight:</dt>
            <dd>500</dd>
          <dt>line-height:</dt>
            <dd>1.5</dd>
        </dl>
        <div class="text-subtitle-s">A wizard’s job is to vex chumps quickly in fog.</div>
      </td>
    </tr>
    <tr>
      <th class="type-table-row-header">Body</th>
      <td><!-- Body L -->
        ```
        var(--text-body-l)
        ```
        <dl class="dsdl-type-specs">
          <dt>font-size:</dt>
            <dd>16px</dd>
          <dt>font-weight:</dt>
            <dd>400</dd>
          <dt>line-height:</dt>
            <dd>1.5</dd>
        </dl>
        <div class="text-body-l">A wizard’s job is to vex chumps quickly in fog.</div>
      </td>
      <td><!-- Body M -->
        ```
        var(--text-body-m)
        ```
        <dl class="dsdl-type-specs">
          <dt>font-size:</dt>
            <dd>14px</dd>
          <dt>font-weight:</dt>
            <dd>400</dd>
          <dt>line-height:</dt>
            <dd>1.625</dd>
        </dl>
        <div class="text-body-m">A wizard’s job is to vex chumps quickly in fog.</div>
      </td>
      <td><!-- Body S -->
        ```
        var(--text-body-s)
        ```
        <dl class="dsdl-type-specs">
          <dt>font-size:</dt>
            <dd>12px</dd>
          <dt>font-weight:</dt>
            <dd>400</dd>
          <dt>line-height:</dt>
            <dd>1.625</dd>
        </dl>
        <div class="text-body-s">A wizard’s job is to vex chumps quickly in fog.</div>
      </td>
    </tr>
  </tbody>
</table>

### Extras

<!-- <ul class="dsdl-extra-type-styles"> -->
<ul class="dsdl-extra-type-styles">
  <li>
    <h4>Display</h4>
    ```
    var(--text-display)
    ```
    <dl class="dsdl-type-specs">
      <dt>font-size:</dt>
        <dd>64px</dd>
      <dt>font-weight:</dt>
        <dd>600</dd>
      <dt>line-height:</dt>
        <dd>1.125</dd>
    </dl>
    <div class="text-display">A wizard’s job is to vex chumps quickly in fog.</div>
  </li>
  <li>
    <h4>Small caps</h4>
    ```
    var(--text-small-caps)
    ```
    <dl class="dsdl-type-specs">
      <dt>font-size:</dt>
        <dd>12px</dd>
      <dt>font-weight:</dt>
        <dd>400</dd>
      <dt>line-height:</dt>
        <dd>1.625</dd>
      <dt>text-transform:</dt>
        <dd>uppercase</dd>
    </dl>
    <div class="text-small-caps">A wizard’s job is to vex chumps quickly in fog.</div>
  </li>
  <li>
    <h4>Caption</h4>
    ```
    var(--text-caption)
    ```
    <dl class="dsdl-type-specs">
      <dt>font-size:</dt>
        <dd>12px</dd>
      <dt>font-weight:</dt>
        <dd>400</dd>
      <dt>line-height:</dt>
        <dd>1.625</dd>
    </dl>
    <div class="text-caption">A wizard’s job is to vex chumps quickly in fog.</div>
  </li>
  <li>
    <h4>Footnote</h4>
    ```
    var(--text-footnote)
    ```
    <dl class="dsdl-type-specs">
      <dt>font-size:</dt>
        <dd>10px</dd>
      <dt>font-weight:</dt>
        <dd>400</dd>
      <dt>line-height:</dt>
        <dd>1.625</dd>
    </dl>
    <div class="text-footnote">A wizard’s job is to vex chumps quickly in fog.</div>
  </li>
  <li>
    <h4>Code</h4>
    ```
    var(--text-code)
    ```
    <dl class="dsdl-type-specs">
      <dt>font-size:</dt>
        <dd>16px</dd>
      <dt>font-weight:</dt>
        <dd>400</dd>
      <dt>line-height:</dt>
        <dd>1.625</dd>
    </dl>
    <div class="text-code">A wizard’s job is to vex chumps quickly in fog.</div>
  </li>
</ul>
