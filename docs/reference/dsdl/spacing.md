# Digital Services Design Language spacing reference

Spacing in the DSDL is based on an 8px reference point.

<table class="dsdl-spacing-reference">
  <thead>
    <tr>
      <th>Sample</th>
      <th>Variable</th>
      <th>px</th>
      <th>rem</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="spacing-sample" style="height: var(--spacing-05);">
          <span class="visually-hidden">A box illustrating the size of something using spacing 05 (half)</span>
        </div>
      </td>
      <td>
        ```
        var(--spacing-05)
        ```
      </td>
      <td>4px</td>
      <td>0.25rem</td>
    </tr>
    <tr>
      <td>
        <div class="spacing-sample" style="height: var(--spacing-1);">
          <span class="visually-hidden">A box illustrating the size of something using spacing 1</span>
        </div>
      </td>
      <td>
        ```
        var(--spacing-1)
        ```
      </td>
      <td>8px</td>
      <td>0.5rem</td>
    </tr>
    <tr>
      <td>
        <div class="spacing-sample" style="height: var(--spacing-2);">
          <span class="visually-hidden">A box illustrating the size of something using spacing 2</span>
        </div>
      </td>
      <td>
        ```
        var(--spacing-2)
        ```
      </td>
      <td>16px</td>
      <td>1rem</td>
    </tr>
    <tr>
      <td>
        <div class="spacing-sample" style="height: var(--spacing-2-05);">
          <span class="visually-hidden">A box illustrating the size of something using spacing 2-05 (two and a half)</span>
        </div>
      </td>
      <td>
        ```
        var(--spacing-2-05)
        ```
      </td>
      <td>20px</td>
      <td>1.25rem</td>
    </tr>
    <tr>
      <td>
        <div class="spacing-sample" style="height: var(--spacing-3);">
          <span class="visually-hidden">A box illustrating the size of something using spacing 3</span>
        </div>
      </td>
      <td>
        ```
        var(--spacing-3)
        ```
      </td>
      <td>24px</td>
      <td>1.5rem</td>
    </tr>
    <tr>
      <td>
        <div class="spacing-sample" style="height: var(--spacing-4);">
          <span class="visually-hidden">A box illustrating the size of something using spacing 4</span>
        </div>
      </td>
      <td>
        ```
        var(--spacing-4)
        ```
      </td>
      <td>32px</td>
      <td>2rem</td>
    </tr>
    <tr>
      <td>
        <div class="spacing-sample" style="height: var(--spacing-5);">
          <span class="visually-hidden">A box illustrating the size of something using spacing 5</span>
        </div>
      </td>
      <td>
        ```
        var(--spacing-5)
        ```
      </td>
      <td>40px</td>
      <td>2.5rem</td>
    </tr>
    <tr>
      <td>
        <div class="spacing-sample" style="height: var(--spacing-6);">
          <span class="visually-hidden">A box illustrating the size of something using spacing 6</span>
        </div>
      </td>
      <td>
        ```
        var(--spacing-6)
        ```
      </td>
      <td>48px</td>
      <td>3rem</td>
    </tr>
    <tr>
      <td>
        <div class="spacing-sample" style="height: var(--spacing-7);">
          <span class="visually-hidden">A box illustrating the size of something using spacing 7</span>
        </div>
      </td>
      <td>
        ```
        var(--spacing-7)
        ```
      </td>
      <td>56px</td>
      <td>3.5rem</td>
    </tr>
    <tr>
      <td>
        <div class="spacing-sample" style="height: var(--spacing-8);">
          <span class="visually-hidden">A box illustrating the size of something using spacing 8</span>
        </div>
      </td>
      <td>
        ```
        var(--spacing-8)
        ```
      </td>
      <td>64px</td>
      <td>4rem</td>
    </tr>
    <tr>
      <td>
        <div class="spacing-sample" style="height: var(--spacing-9);">
          <span class="visually-hidden">A box illustrating the size of something using spacing 9</span>
        </div>
      </td>
      <td>
        ```
        var(--spacing-9)
        ```
      </td>
      <td>72px</td>
      <td>4.5rem</td>
    </tr>
    <tr>
      <td>
        <div class="spacing-sample" style="height: var(--spacing-10);">
          <span class="visually-hidden">A box illustrating the size of something using spacing 10</span>
        </div>
      </td>
      <td>
        ```
        var(--spacing-10)
        ```
      </td>
      <td>80px</td>
      <td>5rem</td>
    </tr>
    <tr>
      <td>
        <div class="spacing-sample" style="height: var(--spacing-15);">
          <span class="visually-hidden">A box illustrating the size of something using spacing 15</span>
        </div>
      </td>
      <td>
        ```
        var(--spacing-15)
        ```
      </td>
      <td>120px</td>
      <td>7.5rem</td>
    </tr>
    <tr>
      <td>
        <div class="spacing-sample" style="height: var(--spacing-20);">
          <span class="visually-hidden">A box illustrating the size of something using spacing 20</span>
        </div>
      </td>
      <td>
        ```
        var(--spacing-20)
        ```
      </td>
      <td>160px</td>
      <td>10rem</td>
    </tr>
  </tbody>
</table>

Note: For lines we want to be exactly 1 logical pixel without scaling, we use a `1px` value directly.
