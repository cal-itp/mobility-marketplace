/*
   # Smart Tables

   "Smart Tables" are defined as tables with data that can be configured via HTML
   attributes. See the `contracts/view.html` file as an example. These Smart
   Tables use the "Tabulator" project and will import HTML tables based on their
   HTML markup.

   For more information regarding Tabulator's behavior, go here:
     http://tabulator.info/docs/4.9/data#table

   Here are some notes:

   - A Smart Table is denoted by a `data-role` of `smart-table`
   - The `data-filterable-cols` takes a comma-separated list of column names (the
     lowercase variant of the HTML table header. For example, a "Product" column
     in the table will have a column name of `product`.
 */
$(function () {
  const smartTables = document.querySelectorAll('[data-role="smart-table"]');
  const buildPill = (body, colName) => `
    <div class="pill" data-column-name="${colName}">
      <span class="sr-only">Filtered by:</span>
      <span class="body">${body}</span>
  
      <button class="pill__close">
        <span class="sr-only">Clear filter</span>
      </button>
    </div>
  `;

  smartTables.forEach((tableContainer) => {
    const filterableCols = tableContainer.getAttribute('data-filterable-cols').replace(/[ ]+/g, '').split(',');
    const pillContainer = tableContainer.querySelector('.filterable-table__pills');
    const table = tableContainer.querySelector('table');

    if (filterableCols.length > 0 && pillContainer === null) {
      console.warn(`Smart Table with ID of #${tableContainer.getAttribute('id')} supports filtering but has no Pill Container.`);
    }

    const tabulator = new Tabulator(table, {
      layout: 'fitColumns',
      cellClick: (e, cell) => {
        const colDefinition = cell.getColumn().getDefinition();
        const colName = colDefinition['field'];

        if (pillContainer === null || filterableCols.indexOf(colName) < 0) {
          return;
        }

        const cellValue = cell.getValue().trim();

        const $pill = $(buildPill(cellValue, colName));
        $pill.find('.pill__close').on('click', function() {
          pillContainer.removeChild($pill[0]);
          tabulator.removeFilter(colName, "like", cellValue);
        });

        /** @type {Array<{field: string, type: string, value: any}>} */
        const filters = tabulator.getFilters();
        const filterExists = filters.some(filter => filter.field === colName);

        if (!filterExists) {
          tabulator.addFilter(colName, "like", cellValue);
          pillContainer.prepend($pill[0]);
        }
      },
    });
  });
});
