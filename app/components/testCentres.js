const testCenters = [
    {
        "name": "Aberdeen (Scotland) Test Centre - Pearson VUE",
        "address": "Ground Floor East Wing, Migvie House, 23 North Silver Street, Aberdeen, United Kingdom, AB10 1RJ",
        "lat": 57.1469238,
        "lng": -2.1063004
    },
    {
        "name": "Aberystwyth (Wales) Test Centre - Pearson VUE",
        "address": "Ground Floor, 33 North Parade, Aberystwyth, SY23 2JN",
        "lat": 52.4155879,
        "lng": -4.0821185
    },
    {
        "name": "Aldershot Test Centre - Pearson VUE",
        "address": "Ground Floor, 1 London House, Pickford Street, Aldershot, GU11 1TY",
        "lat": 51.2486588,
        "lng": -0.760464
    },
    {
        "name": "Andover Test Centre - Pearson VUE",
        "address": "Portland House First Floor, 55-57 High Street, Andover, United Kingdom, SP10 1LP",
        "lat": 51.2082505,
        "lng": -1.4791109
    },
    {
        "name": "Aylesbury Test Centre - Pearson VUE",
        "address": "Unit 2a, Ground Floor, Midshires Business Park, Smeaton Close, Aylesbury, United Kingdom, HP19 8HL",
        "lat": 51.8204214,
        "lng": -0.8375799
    },
    {
        "name": "Ayr (Scotland) Test Centre - Pearson VUE",
        "address": "1st Floor, 7A Boswell Park, Ayr, KA7 1NP",
        "lat": 55.461886,
        "lng": -4.6318395
    },
    {
        "name": "Ballymena (Northern Ireland) Test Centre - Pearson VUE",
        "address": "Units 3 & 4 The Tower Centre, Wellington Street, Ballymena, BT43 6AH",
        "lat": 54.8657411,
        "lng": -6.276066
    },
    {
        "name": "Bangor (Wales) Test Centre - Pearson VUE",
        "address": "Bangor PPC, Suite 2, 30 Dean Street, Bangor, United Kingdom, LL57 1UR",
        "lat": 53.2289695,
        "lng": -4.1234065
    },
    {
        "name": "Barnstaple Test Centre - Pearson VUE",
        "address": "Riverside Court, Offices - Unit 1 and 4, Castle Street, Barnstaple, EX31 1DR",
        "lat": 51.07999,
        "lng": -4.0624
    },
    {
        "name": "Barrow Test Centre - Pearson VUE",
        "address": "111 Duke Street, Barrow in Furness, LA14 1XA",
        "lat": 54.113421,
        "lng": -3.2306613
    },
    {
        "name": "Basildon Test Centre - Pearson VUE",
        "address": "Southgate House, Suite 1A - First Floor, Town Square, Basildon, SS14 1BN",
        "lat": 51.56993,
        "lng": 0.4583
    },
    {
        "name": "Belfast (Northern Ireland) Test Centre - Pearson VUE",
        "address": "1st Floor, 119 Royal Avenue, Belfast, BT1 1FF",
        "lat": 38.0266291,
        "lng": -84.5047222
    },
    {
        "name": "Berwick Test Centre - Pearson VUE",
        "address": "William Edgar Building, 56-58 Castlegate, Berwick, TD15 1JT",
        "lat": 55.77261,
        "lng": -2.00786
    },
    {
        "name": "Birmingham Test Centre - Pearson VUE",
        "address": "First Floor, 155 Great Charles Street, Queensway, Birmingham, B3 3LP",
        "lat": 52.4818363,
        "lng": -1.904872
    },
    {
        "name": "Blackpool Test Centre - Pearson VUE",
        "address": "Darwin Court, Unit 9A Ground Floor, Blackpool Technology Park, Blackpool, FY2 0JN",
        "lat": 53.85368,
        "lng": -3.02229
    },
    {
        "name": "Bolton Test Centre - Pearson VUE",
        "address": "34 Queensbrook, Bolton Technology Exchange, Bolton, BL1 4AY",
        "lat": 53.5788774,
        "lng": -2.4389255
    },
    {
        "name": "Boston Test Centre - Pearson VUE",
        "address": "3 Bridge Street, Boston, Lincolnshire, PE21 8QF",
        "lat": 52.976401,
        "lng": -0.0249195
    },
    {
        "name": "Bournemouth Test Centre - Pearson VUE",
        "address": "Roddis House 3rd floor, Old Christchurch Rd, Bournemouth, BH1 1LG",
        "lat": 50.7204649,
        "lng": -1.8769795
    },
    {
        "name": "Bradford Test Centre - Pearson VUE",
        "address": "1st Floor Caspian House, 61 East parade, Bradford, BD1 5EP",
        "lat": 53.79451,
        "lng": -1.74437
    },
    {
        "name": "Bridgend (Wales) Test Centre - Pearson VUE",
        "address": "2nd Floor, Brackla House, Brackla Street, Bridgend, CF31 1BZ",
        "lat": 51.5050518,
        "lng": -3.5741471
    },
    {
        "name": "Brighton Test Centre - Pearson VUE",
        "address": "Citygate - Ground Floor, 185 Dyke Road, Hove, Brighton, BN3 1TL",
        "lat": 50.83297,
        "lng": -0.14993
    },
    {
        "name": "Bristol Test Centre - Pearson VUE",
        "address": "Building 340, The Crescent, Bristol Business Park, Bristol, BS16 1EJ",
        "lat": 51.5018859,
        "lng": -2.5428521
    },
    {
        "name": "Builth Wells (Wales) Test Centre - Pearson VUE",
        "address": "Rear of Spar Buildings, Groe Street, Builth Wells, LD2 3BL",
        "lat": 52.1493457,
        "lng": -3.4023712
    },
    {
        "name": "Bury St. Edmunds Test Centre - Pearson VUE",
        "address": "2nd Floor St Edmunds House, Lower Baxter Street, Bury St Edmunds, IP33 1ET",
        "lat": 52.2458023,
        "lng": 0.7147011
    },
    {
        "name": "Cambridge Test Centre - Pearson VUE",
        "address": "Second Floor, St Andrews House, 59, St.Andrews Street, Cambridge, CB2 3BZ",
        "lat": 52.2046202,
        "lng": 0.1227891
    },
    {
        "name": "Canterbury Test Centre - Pearson VUE",
        "address": "Suite E, The Clock Tower, Whitefriars Shopping Centre, St George's Street, Canterbury, CT1 2LE",
        "lat": 51.2775561,
        "lng": 1.083052
    },
    {
        "name": "Cardiff (Wales) Test Centre - Pearson VUE",
        "address": "Ground Floor, I Caspian Point, Caspian Way, Cardiff Bay, CF10 4DQ",
        "lat": 51.4668381,
        "lng": -3.1584701
    },
    {
        "name": "Carlisle Test Centre - Pearson VUE",
        "address": "10a Lowther Street, Carlisle, CA3 8DA",
        "lat": 54.8935342,
        "lng": -2.9332649
    },
    {
        "name": "Chatham Test Centre - Pearson VUE",
        "address": "14-16 High Street, Chatham, ME4 4EP",
        "lat": 51.3831743,
        "lng": 0.5179188
    },
    {
        "name": "Chelmsford Test Centre - Pearson VUE",
        "address": "1st Floor Grosvenor House, 51 New London Rd, Chelmsford, CM2 0ND",
        "lat": 51.7315922,
        "lng": 0.4728447
    },
    {
        "name": "Cheltenham Test Centre - Pearson VUE",
        "address": "18 to 20 Albion Street, Cheltenham, GL52 2LP",
        "lat": 51.9011008,
        "lng": -2.0722816
    },
    {
        "name": "Chester Test Centre - Pearson VUE",
        "address": "1 Corbridge House, The Square, Seller Street, Chester, CH1 3AN",
        "lat": 53.1933685,
        "lng": -2.8829494
    },
    {
        "name": "Chesterfield Test Centre - Pearson VUE",
        "address": "Suite 1B, 1st Floor, 6-8 Corporation St, Chesterfield, S41 7TP",
        "lat": 53.2368675,
        "lng": -1.4228878
    },
    {
        "name": "Chichester Test Centre - Pearson VUE",
        "address": "Metro House, Northgate, Chichester, PO19 1BE",
        "lat": 50.84049,
        "lng": -0.7789199
    },
    {
        "name": "Clydebank (Scotland) Test Centre - Pearson VUE",
        "address": "1st floor, Erskine House, North Avenue, Clydebank, G81 2DR",
        "lat": 55.90649,
        "lng": -4.40559
    },
    {
        "name": "Colchester Test Centre - Pearson VUE",
        "address": "Wellington House, Butt Road, Colchester, CO3 3DA",
        "lat": 51.8851887,
        "lng": 0.8947719
    },
    {
        "name": "Corby Test Centre - Pearson VUE",
        "address": "Corby Innovation Hub, Bangrave Road South, Corby, United Kingdom, NN17 1NN",
        "lat": 52.49174,
        "lng": -0.64947
    },
    {
        "name": "Coventry Test Centre - Pearson VUE",
        "address": "2nd Floor, 9 Little Park Street, Coventry, CV1 2UR",
        "lat": 52.4067113,
        "lng": -1.5087015
    },
    {
        "name": "Crawley Test Centre - Pearson VUE",
        "address": "First floor Belgrave House, Station Way, Crawley, RH10 1HU",
        "lat": 51.1127852,
        "lng": -0.1883818
    },
    {
        "name": "Cromer Test Centre - Pearson VUE",
        "address": "Merchants Place, 16, Church Street, Cromer, NR27 9ES",
        "lat": 52.9306416,
        "lng": 1.3021945
    },
    {
        "name": "Derby Test Centre - Pearson VUE",
        "address": "Ground Floor East Wing, 100 Mansfield Road, Derby, DE1 3TT",
        "lat": 52.929594,
        "lng": -1.4720825
    },
    {
        "name": "Doncaster Test Centre - Pearson VUE",
        "address": "Office 6 Silver House, Silver Street, Doncaster, DN1 1HL",
        "lat": 53.52348,
        "lng": -1.13119
    },
    {
        "name": "Dudley Test Centre - Pearson VUE",
        "address": "Trafalgar House, 47 -49 King Street, Dudley, DY2 8PS",
        "lat": 52.50842,
        "lng": -2.0844999
    },
    {
        "name": "Dumfries (Scotland) Test Centre - Pearson VUE",
        "address": "77 - 79 Whitesands, Unit 3, Dumfries, DG1 2RX",
        "lat": 55.06563,
        "lng": -3.60974
    },
    {
        "name": "Dundee (Scotland) Test Centre - Pearson VUE",
        "address": "Unit 2, 14 - 22 Exchange St, Dundee, DD1 3DE",
        "lat": 56.46076,
        "lng": -2.96727
    },
    {
        "name": "Eastbourne Test Centre - Pearson VUE",
        "address": "Senlac House, Ground Floor, 53-58 Seaside, Eastbourne, BN22 7NE",
        "lat": 50.77152,
        "lng": 0.29517
    },
    {
        "name": "Edinburgh (Scotland) Test Centre - Pearson VUE",
        "address": "Suite 1, 2nd floor, Cairncross House, 25 Union Street, Edinburgh, EH1 3LR",
        "lat": 55.9582664,
        "lng": -3.1862802
    },
    {
        "name": "Elgin Test Centre - Pearson VUE",
        "address": "7 Southfield Drive, (Near Linkwood Medical Centre), Elgin, IV30 6GR",
        "lat": 57.6369404,
        "lng": -3.294491
    },
    {
        "name": "Exeter Test Centre - Pearson VUE",
        "address": "Ground Floor, Unit 11, The Depot, Belgrave Road, Exeter, EX1 2FW",
        "lat": 50.7265922,
        "lng": -3.5232409
    },
    {
        "name": "Fareham Test Centre - Pearson VUE",
        "address": "Thackery House, 189-199 West Street, Fareham, PO16 0EN",
        "lat": 50.85275,
        "lng": -1.18588
    },
    {
        "name": "Fort William (Scotland) Test Centre - Pearson VUE",
        "address": "The Nevis Centre (off Camanachd Cres), An Aird, Fort William, PH33 6AN",
        "lat": 56.8221345,
        "lng": -5.1044991
    },
    {
        "name": "Frome Test Centre - Pearson VUE",
        "address": "2 Baywell House (under archway), Tucker Close, Frome, BA11 5LS",
        "lat": 51.22931,
        "lng": -2.30838
    },
    {
        "name": "Gairloch Test Centre - Pearson VUE",
        "address": "Harbour Gairloch, Gairloch, IV21 2BQ",
        "lat": 57.7129253,
        "lng": -5.6795865
    },
    {
        "name": "Galashiels (Scotland) Test Centre - Pearson VUE",
        "address": "45 High Street, Galashiels, Scottish Borders, TD1 1RY",
        "lat": 55.6177949,
        "lng": -2.8110201
    },
    {
        "name": "Glasgow (Scotland) Test Centre - Pearson VUE",
        "address": "Suite 325, Pentagon Centre, 36-38 Washington Street, Glasgow, G3 8AZ",
        "lat": 55.8582261,
        "lng": -4.2685832
    },
    {
        "name": "Gloucester Test Centre - Pearson VUE",
        "address": "Eastgate House, 121 - 131 Eastgate Street, Gloucester, GL1 1PX",
        "lat": 51.86266,
        "lng": -2.24
    },
    {
        "name": "Grantham Test Centre - Pearson VUE",
        "address": "1st Floor, The George Centre, Guildhall Street, Grantham, NG31 6NJ",
        "lat": 52.9115285,
        "lng": -0.6435407
    },
    {
        "name": "Greenock (Scotland) Test Centre - Pearson VUE",
        "address": "Ground Floor Victory Court, Cartsburn Maritime, Arthur Street, Greenock, PA15 4RT",
        "lat": 55.94208,
        "lng": -4.7429
    },
    {
        "name": "Grimsby Test Centre - Pearson VUE",
        "address": "Unit 8/9, Acorn Business Park, Moss Road, Grimsby, DN32 0LW",
        "lat": 53.5624814,
        "lng": -0.0806091
    },
    {
        "name": "Guildford Test Centre - Pearson VUE",
        "address": "71 North Street, Guildford, GU1 4AW",
        "lat": 51.2369752,
        "lng": -0.5722222
    },
    {
        "name": "Harlow Test Centre - Pearson VUE",
        "address": "Cambridge House, 1st Floor, Suite 1, Cambridge Road, Harlow, CM20 2EQ",
        "lat": 51.790776,
        "lng": 0.1325015
    },
    {
        "name": "Harrogate Test Centre - Pearson VUE",
        "address": "30 Victoria Avenue, Harrogate, HG1 5PR",
        "lat": 53.9913774,
        "lng": -1.5332239
    },
    {
        "name": "Hastings Test Centre - Pearson VUE",
        "address": "Philips House, Drury Lane, Ponswood Industrial Estate, St Leonards on Sea, TN38 9BA",
        "lat": 50.8680501,
        "lng": 0.5475653
    },
    {
        "name": "Haverfordwest Test Centre - Pearson VUE",
        "address": "Ground Floor, 33 Bridge Street, Haverfordwest, SA61 2AL",
        "lat": 51.8028962,
        "lng": -4.968943
    },
    {
        "name": "Helmsdale Test Centre - Pearson VUE",
        "address": "The Bridge Hotel, Dunrobin Street, Highlands, Helmsdale, KW8 6JA",
        "lat": 58.1167854,
        "lng": -3.6534261
    },
    {
        "name": "Hereford Test Centre - Pearson VUE",
        "address": "Ground Floor Penn House, 9-10 Broad Street, Hereford, HR4 9AP",
        "lat": 52.054818,
        "lng": -2.7170492
    },
    {
        "name": "Horley Test Centre - Pearson VUE",
        "address": "77 Victoria Road, Horley, Surrey, RH6 7QH",
        "lat": 51.1712319,
        "lng": -0.162942
    },
    {
        "name": "Huddersfield Test Centre - Pearson VUE",
        "address": "5th Floor, Ramsden House, New Street, Huddersfield, HD1 2TW",
        "lat": 53.6440278,
        "lng": -1.7832201
    },
    {
        "name": "Hull Test Centre - Pearson VUE",
        "address": "Unit 14/15 Kingston House South, Bond Street, Hull;, HU1 3EN",
        "lat": 53.74611,
        "lng": -0.33916
    },
    {
        "name": "Huntly (Scotland) Test Centre - Pearson VUE",
        "address": "The Linden Centre, Castle Street, Huntly, AB54 4SH",
        "lat": 57.4549448,
        "lng": -2.7811696
    },
    {
        "name": "Inverness (Scotland) Test Centre - Pearson VUE",
        "address": "2nd Floor, 1-3 Church Street, Inverness, IV1 1DY",
        "lat": 57.4784937,
        "lng": -4.2266666
    },
    {
        "name": "Ipswich Test Centre - Pearson VUE",
        "address": "Hubbard House, Second Floor,, 6 Civic Drive, Ipswich, IP1 2QA",
        "lat": 52.0595694,
        "lng": 1.14745
    },
    {
        "name": "Isle of Arran Test Centre - Pearson VUE",
        "address": "Auchrannie Country House &, Hotel, Brodick, Isle of Arran, KA27 8BZ",
        "lat": 55.57597,
        "lng": -5.15799
    },
    {
        "name": "Isle of Benbecula Test Centre - Pearson VUE",
        "address": "Caladh Trust Centre, Balivanich East Camp, Balivanich, Isle of Benbecula, HS7 5LA",
        "lat": 57.4723529,
        "lng": -7.3739838
    },
    {
        "name": "Isle of Islay Test Centre - Pearson VUE",
        "address": "Argyll & Bute Councils Service Point, Jamieson Street, Bowmore, Isle of Islay, PA43 7HZ",
        "lat": 55.75702,
        "lng": -6.28034
    },
    {
        "name": "Isle of Mull Test Centre - Pearson VUE",
        "address": "Mull and Iona Community Trust, An Roth Community Enterprise Centre, Craignure, Isle of Mull, PA65 6AY",
        "lat": 56.4702368,
        "lng": -5.705852
    },
    {
        "name": "Isle of Scilly Test Centre - Pearson VUE",
        "address": "Porthmellon Enterprise Centre, porthmellon Business Park, St Marys, Isles of Scilly, TR21 0JY",
        "lat": 49.9166133,
        "lng": -6.3085836
    },
    {
        "name": "Isle of Wight Test Centre - Pearson VUE",
        "address": "48 Lugley Street, Newport, Isle of Wight, PO30 5HD",
        "lat": 50.700617,
        "lng": -1.2958422
    },
    {
        "name": "Kendal Test Centre - Pearson VUE",
        "address": "Office Suites 2, 50 Kentgate Place, Kendal, LA9 6EQ",
        "lat": 54.3310532,
        "lng": -2.7428249
    },
    {
        "name": "Kings Lynn Test Centre - Pearson VUE",
        "address": "Mission Hall, Ship Lane, Off St.Anns Street, Kings Lynn, PE30 1LT",
        "lat": 52.7574925,
        "lng": 0.3969913
    },
    {
        "name": "Kirkwall Test Centre - Pearson VUE",
        "address": "Albert Hotel, 7 Mounthoolie Place, Kirkwall, KW15 1JZ",
        "lat": 58.9836955,
        "lng": -2.9599685
    },
    {
        "name": "Kyle of Lochalsh Test Centre - Pearson VUE",
        "address": "Lochalsh Hotel - Ferry Road, Ross Shire, Kyle of Lochalsh, IV40 8AF",
        "lat": 57.2801213,
        "lng": -5.7176981
    },
    {
        "name": "Launceston Test Centre - Pearson VUE",
        "address": "Opposite Orchard Electrics, Newport Industrial Estate, Launceston, PL15 8EX",
        "lat": 50.64055,
        "lng": -4.35873
    },
    {
        "name": "Leeds Test Centre - Pearson VUE",
        "address": "Gallery House 1st Floor, The Headrow, Leeds, LS1 5RD",
        "lat": 53.7993873,
        "lng": -1.5474445
    },
    {
        "name": "Leicester Test Centre - Pearson VUE",
        "address": "Suite 3A Third Floor, Rutland Centre, 56 Halford Street, Leicester, LE1 1TQ",
        "lat": 52.635195,
        "lng": -1.1281264
    },
    {
        "name": "Lerwick Test Centre - Pearson VUE",
        "address": "Islesburgh Community Centre, King Harald St, Lerwick, ZE1 0EQ",
        "lat": 60.15296,
        "lng": -1.14832
    },
    {
        "name": "Lincoln Test Centre - Pearson VUE",
        "address": "1st Floor, Queensgate House, 12 Silver St, Lincoln, LN2 1DY",
        "lat": 53.2295244,
        "lng": -0.5394094
    },
    {
        "name": "Liverpool Test Centre - Pearson VUE",
        "address": "Lower Ground Floor, 5 Covent Gardens, Liverpool, L2 8UD",
        "lat": 53.40686,
        "lng": -2.99356
    },
    {
        "name": "London - Croydon Test Centre - Pearson VUE",
        "address": "Second Floor - Central House, 27 Park Street, Croydon (London), CR0 1YD",
        "lat": 51.3734926,
        "lng": -0.0993318
    },
    {
        "name": "London - Ilford Test Centre - Pearson VUE",
        "address": "253 High road, Ilford, Essex, Ilford London, IG1 1NE",
        "lat": 51.5598357,
        "lng": 0.0767018
    },
    {
        "name": "London - Kingston Test Centre - Pearson VUE",
        "address": "4th floor, Drapers Court, Kingston Hall Road, Kingston Upon Thames  (London), KT1 2BQ",
        "lat": 51.40733,
        "lng": -0.3062
    },
    {
        "name": "London - Mile End C Test Centre - Pearson VUE",
        "address": "3 Quebec Wharf, 14 Thomas Road, Limehouse B, London, E14 7AF",
        "lat": 51.5148355,
        "lng": -0.0275178
    },
    {
        "name": "London - Sidcup Test Centre - Pearson VUE",
        "address": "Planwell House, LEFA Business Park, Edgington Way, Sidcup  (London), DA14 5BH",
        "lat": 51.41534,
        "lng": 0.12165
    },
    {
        "name": "London - Slough Test Centre - Pearson VUE",
        "address": "Brooklands House, Brookland Business Centre, Petersfield Avenue, Slough, SL2 5DY",
        "lat": 51.5138698,
        "lng": -0.5892831
    },
    {
        "name": "London - Southgate Test Centre - Pearson VUE",
        "address": "1st Floor Crown House, 47 Chase Side, Southgate (London), N14 5BP",
        "lat": 51.6326397,
        "lng": -0.1290808
    },
    {
        "name": "London - Southwark Test Centre - Pearson VUE",
        "address": "10 Holyrood Street, London, Southwark, SE1 2EL",
        "lat": 51.5035841,
        "lng": -0.0826022
    },
    {
        "name": "London - Staines Test Centre - Pearson VUE",
        "address": "First Floor, 11/17 Kingston Road, Staines, TW18 4QX",
        "lat": 51.4347403,
        "lng": -0.5049489
    },
    {
        "name": "London - Uxbridge Test Centre - Pearson VUE",
        "address": "5-7 Pantile Walk, Pavillions Shopping Centre (inside), Uxbridge, (Note: test centre is located inside the Pavillions Shopping Centre), UB8 1LP",
        "lat": 51.5465,
        "lng": -0.48167
    },
    {
        "name": "London - Watford Test Centre - Pearson VUE",
        "address": "1st Floor, Cassiobury House, 11-19 Station Rd, Watford, WD17 1AP",
        "lat": 51.6636312,
        "lng": -0.3979718
    },
    {
        "name": "Londonderry (Northern Ireland) Test Centre - Pearson VUE",
        "address": "Ground Floor City Factory, 19 Queen Street, Londonderry, BT48 7EF",
        "lat": 38.0266291,
        "lng": -84.5047222
    },
    {
        "name": "Lowestoft Test Centre - Pearson VUE",
        "address": "2nd Floor Waveney Chambers, 3-7 Waveney Road, Lowestoft, NR32 1BN",
        "lat": 52.4740177,
        "lng": 1.7525968
    },
    {
        "name": "Luton Test Centre - Pearson VUE",
        "address": "70 - 78 Collingdon Street, Luton, LU1 1RX",
        "lat": 51.8819721,
        "lng": -0.4219608
    },
    {
        "name": "Manchester Test Centre - Pearson VUE",
        "address": "Blue Zone, Ground Floor , Suites 3 & 4, Universal Square, Devonshire Street North, Manchester, M12 6JH",
        "lat": 53.47073,
        "lng": -2.21427
    },
    {
        "name": "Mansfield Test Centre - Pearson VUE",
        "address": "Ground Floor, Nth Notts Business Centre, 32-34 Rosemary Street, Mansfield, NG18 1QL",
        "lat": 53.14531,
        "lng": -1.20319
    },
    {
        "name": "Merthyr Tydfil (Wales) Test Centre - Pearson VUE",
        "address": "Ty Kier Hardie, Riverside Court, Ground Floor Suite, Merthyr Tydfil, CF47 8LD",
        "lat": 51.74799,
        "lng": -3.38274
    },
    {
        "name": "Middlesbrough Test Centre - Pearson VUE",
        "address": "Cleveland Business Centre, Watson Street, Middlesbrough, TS1 2RQ",
        "lat": 54.57517,
        "lng": -1.22965
    },
    {
        "name": "Middleton Test Centre - Pearson VUE",
        "address": "UTASS Building, 9-11 Chapel Row, Middleton-in-Teesdale, Barnard Castle, DL12 0SN",
        "lat": 54.6238215,
        "lng": -2.0810654
    },
    {
        "name": "Milton Keynes Test Centre - Pearson VUE",
        "address": "Ashton House West, Ground Floor, Silbury Boulevard, Milton Keynes, MK9 2AH",
        "lat": 52.04157,
        "lng": -0.7642099
    },
    {
        "name": "Morpeth Test Centre - Pearson VUE",
        "address": "Unit 7, Telford Court, Loansdean, Morpeth, NE61 2DB",
        "lat": 55.15419,
        "lng": -1.6884
    },
    {
        "name": "New Romney Test Centre - Pearson VUE",
        "address": "St Marys Village Hall, St Marys Bay,New Romney, TN29 0SW",
        "lat": 51.0089,
        "lng": 0.97788
    },
    {
        "name": "Newcastle Upon Tyne Test Centre - Pearson VUE",
        "address": "Collingwood House, 3 Collingwood Street, Newcastle Upon Tyne, NE1 1JW",
        "lat": 54.9700274,
        "lng": -1.6123078
    },
    {
        "name": "Newport (Isle of Wight) Test Centre - Pearson VUE",
        "address": "48 Lugley Street, Newport (Isle of Wight), PO30 5HD",
        "lat": 50.700617,
        "lng": -1.2958422
    },
    {
        "name": "Newport Gwent (Wales) Test Centre - Pearson VUE",
        "address": "6th Floor Clarence House (South Wales), Clarence Place, Newport (Gwent), NP19 7AA",
        "lat": 51.5910221,
        "lng": -2.9921801
    },
    {
        "name": "Newry (Northern Ireland) Test Centre - Pearson VUE",
        "address": "2nd floor, 12 John Mitchel Place, Newry, BT34 2BP",
        "lat": 54.1727163,
        "lng": -6.3380382
    },
    {
        "name": "Northallerton Test Centre - Pearson VUE",
        "address": "First Floor, Carrick House, Thurston Road, Northallerton, United Kingdom, DL6 2NA",
        "lat": 54.35035,
        "lng": -1.44247
    },
    {
        "name": "Northampton Test Centre - Pearson VUE",
        "address": "Third Floor, Charles House, 61-69 Derngate, Northampton, NN1 1UE",
        "lat": 52.23645,
        "lng": -0.89179
    },
    {
        "name": "Norwich Test Centre - Pearson VUE",
        "address": "1st Floor, 11 Prince of Wales Road, Norwich, NR1 1BD",
        "lat": 52.6293001,
        "lng": 1.2999046
    },
    {
        "name": "Nottingham Test Centre - Pearson VUE",
        "address": "Chiltern House, Castle Gate, Nottingham, NG1 7AR",
        "lat": 52.9507172,
        "lng": -1.1504159
    },
    {
        "name": "Oban (Scotland) Test Centre - Pearson VUE",
        "address": "Corran Halls, No. 54 The Esplanade, Oban, PA34 5AB",
        "lat": 56.41934,
        "lng": -5.47837
    },
    {
        "name": "Oldham Test Centre - Pearson VUE",
        "address": "5A - 6A Whitney Court Southlink Business Park, Hamilton Street, Oldham, OL4 1DE",
        "lat": 53.5406552,
        "lng": -2.1009615
    },
    {
        "name": "Omagh (Northern Ireland) Test Centre - Pearson VUE",
        "address": "Anderson House, 41 Market Street, Omagh, BT78 1EE",
        "lat": 54.6000268,
        "lng": -7.3002522
    },
    {
        "name": "Oxford Test Centre - Pearson VUE",
        "address": "Top Floor (Buzzer 1), 58 St Aldates, Oxford, OX1 1ST",
        "lat": 51.74754,
        "lng": -1.25676
    },
    {
        "name": "Penzance Test Centre - Pearson VUE",
        "address": "Knights Warehouse Bread Street, (Corner of Bread St & Belgravia St), Penzance, Cornwall, TR18 2EQ",
        "lat": 50.11926,
        "lng": -5.53657
    },
    {
        "name": "Peterborough Test Centre - Pearson VUE",
        "address": "Pearson Professional Centre, Ground Floor, East Wing, Stuart House, St Johns Street, Peterborough, PE1 5DD",
        "lat": 52.5743348,
        "lng": -0.2359571
    },
    {
        "name": "Pitlochry (Scotland) Test Centre - Pearson VUE",
        "address": "Fishers Hotel, 75 -79 Atholl Road, Pitlochry, PH16 5BN",
        "lat": 56.7030819,
        "lng": -3.7346506
    },
    {
        "name": "Plymouth Test Centre - Pearson VUE",
        "address": "Princess Court, 1st Floor, Princess Street, Plymouth, PL1 2EX",
        "lat": 50.36872,
        "lng": -4.14276
    },
    {
        "name": "Portadown (Northern Ireland) Test Centre - Pearson VUE",
        "address": "Lismore House, 23 Church Street, Portadown, BT62 3LN",
        "lat": 38.0266291,
        "lng": -84.5047222
    },
    {
        "name": "Portree Test Centre - Pearson VUE",
        "address": "CO-OP Supermarket, Dunvegan Road, Portree, IV51 9HQ",
        "lat": 57.4177478,
        "lng": -6.2088788
    },
    {
        "name": "Portsmouth Test Centre - Pearson VUE",
        "address": "Ground Floor Annex - Enterprise House, Ismbard Brunel Road, Portsmouth, PO1 2AN",
        "lat": 50.7979,
        "lng": -1.09027
    },
    {
        "name": "Preston Test Centre - Pearson VUE",
        "address": "Ground Floor Norwest Court, Guildhall Street, Preston, PR1 3NU",
        "lat": 53.7565559,
        "lng": -2.6994693
    },
    {
        "name": "Reading Test Centre - Pearson VUE",
        "address": "First Floor, Greyfriars Gate, 5 - 7 Greyfriars Road, Reading, RG1 1NU",
        "lat": 51.4579485,
        "lng": -0.9758556
    },
    {
        "name": "Redditch Test Centre - Pearson VUE",
        "address": "Second Floor Grosvenor House, Prospect Hill, Redditch, B97 4DL",
        "lat": 52.30916,
        "lng": -1.93964
    },
    {
        "name": "Rhyl (Wales) Test Centre - Pearson VUE",
        "address": "Pearson Centre - Rhyl, 3 Bodfor Street, Rhyl, LL18 1AS",
        "lat": 53.3192221,
        "lng": -3.4903266
    },
    {
        "name": "Salford Test Centre - Pearson VUE",
        "address": "Unit 1A Ground Floor, Sovereign Point, 31 The Quays, Salford Quays, Salford, M50 3AX",
        "lat": 53.47065,
        "lng": -2.29143
    },
    {
        "name": "Salisbury Test Centre - Pearson VUE",
        "address": "Suite 104, Ground Floor, Warner House, 123 Castle Street, Salisbury, SP1 3TB",
        "lat": 51.0739856,
        "lng": -1.7969689
    },
    {
        "name": "Scarborough Test Centre - Pearson VUE",
        "address": "Suite 2, 29-30 St Nicholas Street, Scarborough, YO11 2HF",
        "lat": 54.2820469,
        "lng": -0.3987294
    },
    {
        "name": "Scunthorpe Test Centre - Pearson VUE",
        "address": "Haldenby House (Unit 2A), Doncaster Road, Scunthorpe, DN15 7DQ",
        "lat": 53.5894919,
        "lng": -0.685593
    },
    {
        "name": "Sheffield Test Centre - Pearson VUE",
        "address": "Orchard House 3rd floor, Leopold Street, Sheffield, S1 2GY",
        "lat": 53.3815987,
        "lng": -1.4707966
    },
    {
        "name": "Shrewsbury Test Centre - Pearson VUE",
        "address": "Suite 2 Canon Court West, Abbey Lawn, Abbey Foregate, Shrewsbury, SY2 5DE",
        "lat": 52.7091013,
        "lng": -2.7427375
    },
    {
        "name": "Skipton Test Centre - Pearson VUE",
        "address": "Suite 3, First floor, High St House (access via Newmarket St), High St, Skipton, BD23 2HU",
        "lat": 53.96057,
        "lng": -2.01656
    },
    {
        "name": "Southampton Test Centre - Pearson VUE",
        "address": "SECOND FLOOR SOUTH SUITE, ANGLO CITY HOUSE, 2-6 SHIRLEY ROAD, SOUTHAMPTON, SO15 3EU",
        "lat": 50.9086601,
        "lng": -1.416585
    },
    {
        "name": "Southend on Sea Test Centre - Pearson VUE",
        "address": "2nd floor, Dencora Court, Tylers Avenue, Southend on Sea, SS1 2BB",
        "lat": 51.53743,
        "lng": 0.7157
    },
    {
        "name": "Southport Test Centre - Pearson VUE",
        "address": "Suite 6 Gordon House, 3-5 Leicester Street, Southport, PR9 0ER",
        "lat": 53.65361,
        "lng": -3.00018
    },
    {
        "name": "St Helens Test Centre - Pearson VUE",
        "address": "2nd Floor Century House, Hardshaw Street, St Helens, WA10 1QU",
        "lat": 53.45318,
        "lng": -2.73509
    },
    {
        "name": "Stevenage Test Centre - Pearson VUE",
        "address": "Middlesex House, Meadway Technology Park, Rutherford Close, Stevenage, SG1 2EF",
        "lat": 51.9087064,
        "lng": -0.2187641
    },
    {
        "name": "Stirling (Scotland) Test Centre - Pearson VUE",
        "address": "Hillside House Suite 1A, Laurelhill Business Park, Stirling, FK7 9JQ",
        "lat": 56.11035,
        "lng": -3.94669
    },
    {
        "name": "Stockport Test Centre - Pearson VUE",
        "address": "Ground Floor Kingsgate, Wellington Road North, Stockport, SK4 1LW",
        "lat": 53.4120363,
        "lng": -2.1663426
    },
    {
        "name": "Stoke on Trent Test Centre - Pearson VUE",
        "address": "Unit 8a Whittle Court, Town Road Business Quarter, Hanley, Stoke on Trent, ST1 2QE",
        "lat": 53.0325599,
        "lng": -2.17204
    },
    {
        "name": "Stornoway (Scotland) Test Centre - Pearson VUE",
        "address": "Custom House, 1 Quay Street, Stornoway, HS1 2XX",
        "lat": 58.2078443,
        "lng": -6.3911817
    },
    {
        "name": "Stranraer (Scotland) Test Centre - Pearson VUE",
        "address": "The Millennium Centre, 75 George Street, Stranraer, DG9 7JP",
        "lat": 54.9045574,
        "lng": -5.0294852
    },
    {
        "name": "Stratford Upon Avon Test Centre - Pearson VUE",
        "address": "2nd Floor, Packwood House, Guild Street, Stratford upon Avon, CV37 6RP",
        "lat": 52.1937148,
        "lng": -1.7048499
    },
    {
        "name": "Sunderland Test Centre - Pearson VUE",
        "address": "2nd Floor Havelock Buildings, High Street West, Sunderland, SR1 1TZ",
        "lat": 54.9075275,
        "lng": -1.3812678
    },
    {
        "name": "Sutton Coldfield Test Centre - Pearson VUE",
        "address": "Ground Floor, 31-33 Birmingham Road, Sutton Coldfield, B72 1QE",
        "lat": 52.5586722,
        "lng": -1.8263908
    },
    {
        "name": "Swansea (Wales) Test Centre - Pearson VUE",
        "address": "2nd Floor Grove House, 3 Grove Place, Swansea, SA1 5DF",
        "lat": 51.6223977,
        "lng": -3.9461527
    },
    {
        "name": "Swindon Test Centre - Pearson VUE",
        "address": "Ambrose House, Grd Flr, South Suite, 30-33 Milton Road, Swindon, SN1 5JA",
        "lat": 51.5600232,
        "lng": -1.7898373
    },
    {
        "name": "Tarbert (Scotland) Test Centre - Pearson VUE",
        "address": "Templer Arts and Leisure Centre, Harbour Street, Tarbert, PA29 6UD",
        "lat": 55.8646169,
        "lng": -5.4103242
    },
    {
        "name": "Taunton Test Centre - Pearson VUE",
        "address": "Ground Floor, Victoria House, Victoria Street, Taunton, TA1 3FA",
        "lat": 51.0148796,
        "lng": -3.0899814
    },
    {
        "name": "Tongue (Scotland) Test Centre - Pearson VUE",
        "address": "The Tongue Hotel, Tongue, Sutherland, Tongue, IV27 4XD",
        "lat": 58.4769,
        "lng": -4.4178
    },
    {
        "name": "Torquay Test Centre - Pearson VUE",
        "address": "Castle Circus House, Rooms 36 - 38, 136 Union Street, Torquay, TQ2 5QB",
        "lat": 50.4677265,
        "lng": -3.5317116
    },
    {
        "name": "Truro Test Centre - Pearson VUE",
        "address": "Palace Buildings, Quay Street, Truro, TR1 2HE",
        "lat": 50.2626353,
        "lng": -5.0482729
    },
    {
        "name": "Tunbridge Wells Test Centre - Pearson VUE",
        "address": "Foundation House, Coach and Horses Passage, The Pantiles, Royal Tunbridge Wells, TN2 5NP",
        "lat": 51.1259281,
        "lng": 0.2583582
    },
    {
        "name": "Ullapool Test Centre - Pearson VUE",
        "address": "Macphail Centre, Ullapool High School, Mill Street, Ullapool, IV26 2UN",
        "lat": 57.8984836,
        "lng": -5.1550143
    },
    {
        "name": "Weymouth Test Centre - Pearson VUE",
        "address": "Phoenix House, St. Nicholas Street, Weymouth, DT4 8AA",
        "lat": 50.6081411,
        "lng": -2.4556672
    },
    {
        "name": "Wick (Caithness) Test Centre - Pearson VUE",
        "address": "MacKays Hotel, 46 Union Street, Wick, KW1 5ED",
        "lat": 58.4406601,
        "lng": -3.0929726
    },
    {
        "name": "Wigan Test Centre - Pearson VUE",
        "address": "Ground & Basement, 38 - 40 Market Street, Wigan, WN1 1HX",
        "lat": 53.5480725,
        "lng": -2.6338243
    },
    {
        "name": "Wolverhampton Test Centre - Pearson VUE",
        "address": "2nd Floor Derwent House, 42-46 Waterloo Road, Wolverhampton, WV1 4XB",
        "lat": 52.58741,
        "lng": -2.13231
    },
    {
        "name": "Worcester Test Centre - Pearson VUE",
        "address": "3rd Floor Haswell House, Block B1, St. Nicholas Street, Worcester, WR1 1UN",
        "lat": 52.1936915,
        "lng": -2.2203462
    },
    {
        "name": "Worthing Test Centre - Pearson VUE",
        "address": "Pearson Professional Centres, Unit 2, Chatsworth House, 39 Chatsworth Road, Worthing, BN11 1LY",
        "lat": 50.8131719,
        "lng": -0.3686985
    },
    {
        "name": "Wrexham Test Centre - Pearson VUE",
        "address": "Unit 7, 3, Henblas Street, Wrexham, United Kingdom, LL13 8AE",
        "lat": 53.0463923,
        "lng": -2.992926
    },
    {
        "name": "Yeovil Test Centre - Pearson VUE",
        "address": "The Coach House, Ground Floor, St Nicholas Close, Penn Hill, Yeovil, BA20 1SF",
        "lat": 50.9394747,
        "lng": -2.632424
    },
    {
        "name": "York Test Centre - Pearson VUE",
        "address": "Stirling House, Station Business Park, Holgate Park Drive, York, YO26 4GB",
        "lat": 53.95729,
        "lng": -1.10851
    }
]


module.exports = testCenters