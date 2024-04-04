#!/bin/bash

bq query \
    --quiet \
    --headless \
    --format=csv \
    --use_legacy_sql=false \
    --max_rows=500 \
    "SELECT * FROM \`mart_transit_database.dim_mobility_mart_providers\` ORDER BY \`ntd_id\`" \
> src/metadata/providers/providers.csv
