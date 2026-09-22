# Digital Services Design Language color reference


## Brand colors

<ul class="brand-colors">
  <li style="background: var(--calitp-brand-blue); color: #fff">
    <h3>Cal-ITP Blue</h3>

    (blue-70)

    ```
    var(--calitp-brand-blue)
    ```
  </li>
  <li style="background: var(--calitp-brand-cyan); color: #000">
    <h3>Cal-ITP Cyan</h3>

    (cyan-40)

    ```
    var(--calitp-brand-cyan)
    ```
  </li>
  <li style="background: var(--calitp-brand-yellow); color: #000">
    <h3>Cal-ITP Yellow</h3>

    (yellow-30)

    ```
    var(--calitp-brand-yellow)
    ```
  </li>
</ul>


## Full palette

<div class="color-reference">
  {# Start the first color group's table #}
  <table>
    <tr>
      <th>Swatch</th>
      <th>Name</th>
      <th>Hex</th>
      <th>RGB</th>
      <th>CSS Variable</th>
    </tr>
    {% for color in dsdlColors %}{# Loop through every color in _data/dsdlColors.json #}
      {% if loop.previtem is defined and color.group != loop.previtem.group %}
        {# If we have changed groups, start a new table #}
  </table>
  <table>
    <tr>
      <th>Swatch</th>
      <th>Name</th>
      <th>Hex</th>
      <th>RGB</th>
      <th>CSS Variable</th>
    </tr>
      {% endif %}
      {# Output the individual color swatch #}
      <tr>
        <td class="swatch" style="background: var(--dsdl-{{ color.group }}-{{ color.level }});"></td>
        <td class="name">
          {{ color.group }} {{ color.level }}
          {{ "<br>(DSDL Black)" if color.level == 100 and color.group == 'slate' }}
        </td>
        <td class="hex">
          ```
          {{ color.hex }}
          ```
        </td>
        <td class="rgb">
          ```
          {{ color.rgb }}
          ```
        </td>
        <td class="css">
          ```
          var(--dsdl-{{ color.group }}-{{ color.level }})
          ```
        </td>
      </tr>
    {% endfor %}
  </table> {# Close the last color group's table #}
</div>
