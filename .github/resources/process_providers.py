import json
import pandas as pd

providers_file = 'src/metadata/providers/providers.csv'

df = pd.read_csv(providers_file)
city_lookup = pd.read_csv('src/metadata/cities_to_county.csv')
city_to_county = dict(zip(city_lookup['City'], city_lookup['County']))

lookup_records = df[df['counties_served'].isna()]['ntd_id']

# Fill in the null values for counties served with the HQ county
for record in lookup_records:
  city = df[df['ntd_id'] == record]['hq_city'].values[0]

  try:
    county = city_to_county[city] or city_to_county[f'City of {city}']
    df.loc[df['ntd_id'] == record, 'hq_county'] = county
    df.loc[df['ntd_id'] == record, 'counties_served'] = county

  except KeyError:
    print("No county found for city: ", city)

df.to_csv(providers_file, index=False)

# Do a group by for the counties served
county_counts = df['counties_served'].str.split(';') \
  .explode('counties_served') \
  .value_counts()

geojson_file = 'src/metadata/providers/counties.geojson'
geojson = json.load(open(geojson_file))

# Add the county counts to the geojson
for feature in geojson['features']:
  county_name = feature['properties']['county']

  if county_name in county_counts:
    feature['properties']['num_providers'] = int(county_counts[county_name])
  else:
    feature['properties']['num_providers'] = 0

# Write the geojson back to the file
with open(geojson_file, 'w') as f:
  json.dump(geojson, f, indent=2)
