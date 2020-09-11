# Background and Context

Transportation technology is improving rapidly, prompting innovation across both public and private sectors. Traditional transit is becoming more technologically enabled through GPS vehicle tracking, data standards such as GTFS, advanced routing and dispatch systems, and other developments. Travelers today have a more consistent view than ever before of available transportation options, often in real-time, via online mapping services and journey planning applications. With improvements in information access and the emergence of a common transportation lexicon across public and private sectors, the lines between public transportation, demand responsive transit, and non-traditional mobility services are blurring. 

However, many public transportation agencies aren't able to quickly adopt new technologies, and the digital divide continues to present barriers for many travelers. Furthermore, inconsistencies in payment systems make it difficult, and in some cases impossible, to have a consistent and reliable transit experience. The greatest benefits from technological advances will require greater interoperability, increased access to technology, and streamlined customer service. To better understand the size and scale of opportunities for integration, the Cal-ITP team has compiled a list of transportation providers across the state of California.

# About the Data

This dataset includes known transportation providers in California, covering both public transit operators and special services that may not fall within standard definitions of transit. Each provider entry includes its headquarters city, counties where active, the associated National Transit Database ID (if available), the website URL, and key attributes from the NTD. It's currently limited to providers who operate their own services. This list is a living document that will be updated regularly with new service provider information. If you have comments, additions, or corrections to this dataset, please contact _____________________.

# History

This list was created in April, 2019, by consultant Trillium Transit under contract to Cal-ITP, and was compiled from a variety of sources, including Trillium contacts, State Controller's State Transit Assistance (STA) summary, American Public Transportation Association (APTA) database, California Transit Association (CTA) members, and the National Transit Database (NTD). 


# Column Definitions

- provider: Name of service provider (Source: Cal-ITP)
- ntd_id: National Transit Database ID (Source: NTD)
- voms_dr: 2018 Vehicles Operating at Maximum Service, Demand Response (Source: NTD)**
- voms: 2018 Vehicles Operating at Maximum Service (Source: NTD)*
- upt_dr: 2018 Total Unlinked Passenger Trips, Demand Response (Source: NTD)**	
- upt: 2018 Total Unlinked Passenger Trips (Source: NTD)*
- fares_dr: 2018 Total Passenger Fare Revenue, Demand Response (Source: NTD)**
- fares: 2018 Total Passenger Fare Revenue (Source: NTD)*
- contact_city: City included in agency's contact address	(Source: Cal-ITP)
- service_county: County (or counties) with mapped services (Source: Cal-ITP) 	
- url: URL of agency website (Source: Cal-ITP)
- gtfs: URL for most recent static General Transit Feed Specification (GTFS) feed (Source: transitfeeds.com)
- gtfs_rt_service_alerts:	URL for most recent real-time GTFS feed (Source: transitfeeds.com)
- gtfs_rt_trip_updates: URL for most recent trip-updates component of real-time GTFS feed (Source: transitfeeds.com)
- gtfs_rt_vehicle_locations: URL for most recent vehicle-locations component of real-time GTFS feed (Source: transitfeeds.com)

*Includes NTD mode categories Motorbus (MB), Bus Rapid Transit (RB), Cable Car (CC), Commuter Bus (CB), Commuter Rail (CR), Heavy Rail (HR), Hybrid Rail (YR), Inclined Plane (IP), Jitney (JT), Light Rail (LR), Monorail/Automated  Guideway (MG), Streetcar Rail (SR), Trolleybus (TB), Demand Response (DR) and Demand Response Taxi (DT)

**Includes NTD mode categories Demand Response (DR) and Demand Response Taxi (DT)

# Glossary

**Demand Response (DR):** A transit mode comprised of passenger cars, vans or small buses operating in response to calls from passengers or their agents to the transit operator, who then dispatches a vehicle to pick up the passengers and transport them to their destinations. 

**Demand Response Taxi (DT):** A special form of the demand response mode operated through taxicab providers. The mode is always purchased transportation type of service.

**Fare Revenues:** All income received directly from passengers, paid either in cash or through pre-paid tickets, passes, etc. It includes donations from those passengers who donate money on the vehicle. It includes the reduced fares paid by passengers in a user-side subsidy arrangement. 

**General Transit Feed Specification (GTFS):** A common format for public transportation schedules and associated geographic information. GTFS "feeds" let public transit agencies publish their transit data and developers write applications that consume that data in an interoperable way.

**GTFS Realtime:** A feed specification that allows public transportation agencies to provide realtime updates about their fleet to application developers. It is an extension to GTFS (General Transit Feed Specification), an open data format for public transportation schedules and associated geographic information.

**National Transit Database (NTD):** A reporting system that collects public transportation financial and operating information.

**Unlinked Passenger Trips (UPT):** The number of passengers who board public transportation vehicles. Passengers are counted each time they board vehicles no matter how many vehicles they use to travel from their origin to their destination.

**Vehicles Operating at Maximum Service (VOMS):** The number of revenue vehicles operated to meet the annual maximum service requirement. This is the revenue vehicle count during the peak season of the year; on the week and day that maximum service is provided. 


