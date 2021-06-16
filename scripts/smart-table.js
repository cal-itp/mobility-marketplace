$(function () {
  const smartTables = document.querySelectorAll('[data-role="smart-table"]');
  const buildPill = (body) => `
    <div class="pill">
      <span class="sr-only">Filtered by:</span>
      <span class="body">${body}</span>
  
      <button class="pill__close">
        <span class="sr-only">Clear filter</span>
      </button>
    </div>
  `;

  smartTables.forEach((tableContainer) => {
    const filterableCols = tableContainer.getAttribute('data-filterable-cols').split(',');
    const pillContainer = tableContainer.querySelector('.filterable-table__pills');
    const table = tableContainer.querySelector('table');

    const tabulator = new Tabulator(table, {
      layout: 'fitColumns',
      cellClick: (e, cell) => {
        const colDefinition = cell.getColumn().getDefinition();
        const colName = colDefinition['field'];

        if (filterableCols.indexOf(colName) < 0) {
          return;
        }

        const cellValue = cell.getValue().trim();

        const $pill = $(buildPill(cellValue));
        $pill.find('.pill__close').on('click', () => {
          pillContainer.removeChild($pill[0]);
          tabulator.clearFilter();
        });

        tabulator.setFilter(colName, "like", cellValue);
        pillContainer.appendChild($pill[0]);
      },
    });
  });
});
