/*
  `updateFooter` is specific to the Contracts table in `contracts/view.html`.
  
  It integrates with `smart-table.js` to be called when data is filtered.
*/
const updateFooter = filters => {
  const productFilters = filters.filter(f => f.field === "product" && f.type === "like");
  
  const footnotes = $("ol.footnote-listing").children("li");
  footnotes.each((i, elem) => {
    const _dataAttr = $(elem).attr("data-products");
    
    const footnoteProducts = _dataAttr ? _dataAttr.split(",") : [];
    const selectedProducts = new Set(productFilters.map(f => f.value));
    const intersection = new Set(footnoteProducts.filter(p => selectedProducts.has(p)));

    const footnoteHasProducts = footnoteProducts.length !== 0;
    const footnoteMatchesFilters = intersection.size !== 0;
    const noProductFilters = productFilters.length === 0;

    if (footnoteHasProducts && (footnoteMatchesFilters || noProductFilters)) {
      $(elem).show();
    } else {
      $(elem).hide();
    }
  });
};

smartTableCallbacks.dataFiltered.push(updateFooter);
