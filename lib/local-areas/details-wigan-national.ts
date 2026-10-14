import type { LocalDetail } from './types'

export const DETAILS_WIGAN_NATIONAL: Record<string, LocalDetail> = {
  // ── Wigan ───────────────────────────────────────────────────────────
  wigan: {
    scenarios: "Across Wigan we help shoppers at Robin Park and in the town centre, drivers on the M6 between Junctions 25 and 27, and residents from Standish to Leigh.",
    parking: "Retail parks give us plenty of space. Many town streets are terraced with kerbside parking; newer estates have drives.",
  },
  abram: {
    scenarios: "Abram call-outs include residents at home and drivers on the A573 between Wigan and Golborne.",
    parking: "Residential streets have room for kerbside work. On the A573 we move you to a side road first.",
  },
  'ashton-in-makerfield': {
    scenarios: "In Ashton-in-Makerfield we help shoppers in the town centre, drivers near the M6 and Haydock, and residents on the estates.",
    parking: "Town-centre car parks and residential drives both give us room to work.",
  },
  aspull: {
    scenarios: "Aspull call-outs are mostly at home on the high ground between Wigan and Blackrod, including New Springs.",
    parking: "Residential streets have a mix of drives and kerbside parking.",
  },
  astley: {
    scenarios: "Astley call-outs include drivers on the fast A580 East Lancs Road and residents near Astley Green Colliery Museum.",
    parking: "The A580 is too fast to work beside. We meet you in a side road or car park.",
  },
  atherton: {
    scenarios: "In Atherton we help shoppers in the town centre, commuters at the station and residents in Howe Bridge and Hag Fold.",
    parking: "Car parks and residential side streets give us safe space to work.",
  },
  bryn: {
    scenarios: "Bryn call-outs include residents at home and commuters at Bryn station, on the A49 between Wigan and Ashton.",
    parking: "Residential streets and the station area give us room to work.",
  },
  golborne: {
    scenarios: "In Golborne we help residents across the town and drivers near the A580 and the M6.",
    parking: "Residential streets have room for kerbside fitting; many homes have drives.",
  },
  'higher-end': {
    scenarios: "Billinge Higher End call-outs are mostly at home on the hill west of Wigan.",
    parking: "Some roads are steep, so we chock carefully or meet you at a flatter spot nearby.",
  },
  hindley: {
    scenarios: "Hindley call-outs include shoppers in the town centre, commuters at the station and residents on the estates.",
    parking: "Car parks and residential side streets give us safe space away from the A577 and A58.",
  },
  'ince-in-makerfield': {
    scenarios: "Ince sits just east of Wigan town centre, so we often reach residents quickly for flat tyres at home.",
    parking: "Terraced streets mean kerbside work is common.",
  },
  leigh: {
    scenarios: "In Leigh we help shoppers in the town centre, visitors to Leigh Sports Village and residents in Pennington and Westleigh.",
    parking: "Leigh Sports Village and town-centre car parks give us plenty of room to work.",
  },
  orrell: {
    scenarios: "Orrell sits at the M6 and M58 interchange, so motorway drivers with tyre damage often stop here, along with local residents.",
    parking: "Leave the motorway and stop in a quiet street or car park rather than on a slip road.",
  },
  shevington: {
    scenarios: "Shevington call-outs include residents in the village and drivers near M6 Junction 27.",
    parking: "Most homes have driveways, which makes fitting straightforward.",
  },
  standish: {
    scenarios: "In Standish we help residents on the newer estates, shoppers in the town and drivers near M6 Junction 27.",
    parking: "Estates have wide roads and drives. In the town centre we use car parks.",
  },
  tyldesley: {
    scenarios: "Tyldesley call-outs include residents in the town and Mosley Common, beside the guided busway.",
    parking: "Terraced streets and newer estates give us both kerbside and driveway options.",
  },
  winstanley: {
    scenarios: "Winstanley call-outs are mostly at home on the south-west side of Wigan.",
    parking: "Residential streets usually have drives or quiet kerbs.",
  },
  billinge: {
    scenarios: "In Billinge we help residents in the village and drivers on the roads between Wigan and St Helens.",
    parking: "Village streets have room for kerbside work; some roads are steep.",
  },
  'hindley-green': {
    scenarios: "Hindley Green call-outs include drivers on the A577 between Hindley and Atherton and residents either side.",
    parking: "Side streets give us safe space away from the main road.",
  },
  lowton: {
    scenarios: "In Lowton we help residents in the village and Lane Head and drivers on the A580 East Lancs Road.",
    parking: "Most homes have driveways. On the A580 we move you to a side road.",
  },
  pemberton: {
    scenarios: "Pemberton call-outs include residents across the area and commuters at Pemberton station.",
    parking: "Residential streets and the station area give us room to work.",
  },
  bickershaw: {
    scenarios: "Bickershaw call-outs are mostly at home along Bickershaw Lane, between Abram and Leigh.",
    parking: "Residential roads here are suitable for kerbside fitting.",
  },
  haigh: {
    scenarios: "In Haigh we help visitors to Haigh Woodland Park who return to a flat tyre, as well as residents in the village.",
    parking: "The park car parks give us safe space to work.",
  },
  newtown: {
    scenarios: "Newtown call-outs are mostly at home, between Wigan town centre and Pemberton.",
    parking: "Terraced streets mean kerbside work is common.",
  },
  'platt-bridge': {
    scenarios: "Platt Bridge sits where the A58 and A573 meet, so we help drivers at the junction and residents nearby.",
    parking: "We use side streets rather than the busy junction.",
  },
  scholes: {
    scenarios: "Scholes call-outs are mostly at home, just east of Wigan town centre.",
    parking: "Residential streets here are suitable for kerbside fitting.",
  },
  'spring-view': {
    scenarios: "In Spring View we help residents in Lower Ince and drivers on Warrington Road.",
    parking: "Residential streets give us safe space away from the main road.",
  },
  worthington: {
    scenarios: "Worthington call-outs include residents on the lanes north of Standish and visitors to Worthington Lakes.",
    parking: "Lanes are narrow, so we work on drives or in a safe lay-by.",
  },

  // ── Outside the ten boroughs ───────────────────────────────────────
  glossop: {
    scenarios: "In Glossop we help drivers on the A57 Snake Pass and A624, visitors heading into the Peak District, and residents in Hadfield and Gamesley.",
    parking: "Hill roads are exposed with few safe stopping places. We work in lay-bys, car parks or at your home.",
  },
  bristol: {
    scenarios: "In Bristol we can help drivers in the city centre and suburbs, and on the M32 and the approaches to the M4 and M5.",
    parking: "City streets are busy, so car parks and quiet side streets are usually the safest places to work.",
  },
  cardiff: {
    scenarios: "In Cardiff we can help drivers across the city and Cardiff Bay, and on the A470, A48 and M4 junctions.",
    parking: "We use car parks and quieter side streets away from the main routes.",
  },
  coventry: {
    scenarios: "In Coventry we can help drivers on and around the ring road, the A45 and A46, and near the M6.",
    parking: "The ring road has no safe stopping points, so leave at the next junction and stop in a side street or car park.",
  },
  basingstoke: {
    scenarios: "In Basingstoke we can help drivers around the Ringway, at the business parks and near M3 Junctions 6 and 7.",
    parking: "Business park car parks are ideal places to work, with permission from the site.",
  },
  edinburgh: {
    scenarios: "In Edinburgh we can help drivers across the city and on the A720 City Bypass and its junctions.",
    parking: "City-centre streets are narrow and busy, so car parks and side streets are best.",
  },
  leeds: {
    scenarios: "In Leeds we can help drivers in the city centre and suburbs, on the ring roads and near the M621.",
    parking: "We use car parks and quieter residential streets rather than busy main roads.",
  },
  leicester: {
    scenarios: "In Leicester we can help drivers across the city, on the outer ring road and near M1 Junction 21.",
    parking: "Retail and residential car parks give us safe space to work.",
  },
  'milton-keynes': {
    scenarios: "In Milton Keynes we can help drivers in Central Milton Keynes, on the grid roads and near M1 Junctions 13 and 14.",
    parking: "Grid roads are fast, so pull off into an estate road or car park before we arrive.",
  },
  solihull: {
    scenarios: "In Solihull we can help drivers in the town centre, Shirley and Knowle, and near the M42 junctions.",
    parking: "Town-centre car parks and residential drives give us room to work.",
  },
}
