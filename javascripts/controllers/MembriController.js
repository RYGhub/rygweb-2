app.controller("MembriController", ['$scope', function($scope)
{
	var membrilist = [
		{
			name: "Steffo",
			desc: "Master e fondatore della Royal Games, gestisce il sito e il server di Mumble, programma, fa robe, il tutto mentre gioca a dei roguelike. E' gelatodipendente, e odia la gente che lo ringrazia e Times New Roman.",
			icon: "St",
			steamid: "76561198034314260",
			csgo: {
				rank: "Capo Argento Elite"
			},
			dota: {
				solo: 1679,
				party: 1275
			},
			hs: "15",
			lol: {
				id: "5234835",
				rank: "Unranked"
			},
			osu: {
				id: "6348077",
				nrank: 192,
				trank: 627,
				crank: 211,
				brank: 161
			},
			steamtrade: "https://steamcommunity.com/tradeoffer/new/?partner=74048532&token=Xf2otcS6",
			starcraft: {
				terran: 5,
				protoss: 5,
				zerg: 5
			}
		},
		{
			name: "Il Nemesis",
			desc: "Il Nemesis è nella Royal Games dagli inizi. Ha una grande passione per gli FPS di ogni genere e per i sandbox; inoltre adora gli horror. è noto in RYG per la sua mira, lo stealth e per le sue battute terribili, che tiene nel bat-armadio. Inoltre gestisce un canale Youtube (a tempo perso), programma sciocchezze in C++ e organizza le escursioni in RYG (Stia tranquillo ragioniere, è un organizzazione Nemesis!).",
			icon: "Ne",
			steamid: "76561198071012695",
			csgo: {
				rank: "Argento IV"
			},
			dota: {},
			osu: {
				id: "6347545",
				nrank: 12,
				trank: 43,
				crank: 8,
				brank: 90
			},
			starcraft: {
				terran: 3,
				zerg: 2
			}
		},
		{
			name: "Fulz",
			desc: "Fulz è uno dei fondatori della Royal Games. E' famoso per i suoi rage e per la sua passione per i giochi realistici e storici.",
			icon: "PuntoEsclamativo",
			steamid: "76561198035547490",
			csgo: {
				rank: "Nova Oro I"
			},
			dota: {},
			osu: {
				id: "6360948",
				nrank: 0,
				trank: 44,
				crank: 0,
				brank: 9
			},
			starcraft: {
				terran: 5,
				protoss: 5,
				zerg: 4
			}
		},
		{
			name: "Il Gattopardo ♥",
			desc: "Il Gattopardo è un ragazzo molto simpaaaaaaaatico, ma odia perdere. Quindi non giocate con lui a Dota o a CSGO se non siete sicuri di vincere. Gioca troppo a Osu!.",
			icon: "G%E2%99%A5",
			steamid: "76561198111021344",
			csgo: {
				rank: "Capo Argento Elite"
			},
			dota: {
				solo: 1607,
				party: 1557
			},
			hs: "16",
			lol: {
				id: "70817146",
				rank: "Unranked"
			},
			osu: {
				id: "6344933",
				nrank: 250,
				trank: 34,
				crank: 61,
				brank: 14
			},
			steamtrade: "https://steamcommunity.com/tradeoffer/new/?partner=150755616&token=COOLUajh",
			starcraft: {
				
			}
		},
		{
			name: "Frankez",
			desc: "Frankez è uno dei fondatori della Royal Games. E' il mercante del gruppo: passa il tempo a scambiare (e a scammare) oggetti di Dota 2 e CS:GO. Possiede anche uno dei pochi PC con Windows Vista, il quale ha un criceto come processore e un topolino come scheda video.",
			icon: "Fr",
			steamid: "76561198071099951",
			csgo: {
				rank: "Nova Oro I"
			},
			dota: {
				solo: 1534,
				party: 1566
			},
			hs: "16",
			lol: {
				id: "67783386",
				rank: "Unranked"
			},
			osu: {
				id: "6348346",
				nrank: 5,
				trank: 535,
				crank: 13,
				brank: 18
			},
			steamtrade: "https://steamcommunity.com/tradeoffer/new/?partner=110834223&token=puEW13H7",
			starcraft: {
				terran: 5,
				protoss: 5,
				zerg: 5
			}
		},
		{
			name: "Fedececco",
			desc: "Bella a tutti ragazzi io sono Fedececco e benvenuti a questo nuovo sito! Sapete cosa fa un'ape su una foglia? Apeggia! Haha. Ecco ciao e arrivederci al prossimo video! Se vi è piaciuto ricordatevi di mettere un Mi Piace, iscrivervi e commentare!",
			icon: "Fe",
			steamid: "76561198109189938",
			csgo: {
				rank: "Argento IV"
			},
			dota: {
				party: 1038
			},
			osu: {
				id: "6398259",
				nrank: 0
			},
			starcraft: {
				terran: 2
			}
		},
		{
			name: "Acter",
			desc: "Unico membro che gioca alla Playstation 3 invece che al PC perchè il suo PC è un fossile. Gli piacciono gli sparatutto e Minecraft.",
			icon: "Ac",
			steamid: "76561198146704979",
			dota: {},
			csgo: {},
			osu: {
				id: "6348964",
				nrank: 11,
				trank: 2,
				crank: 1,
				brank: 3
			}
		},
		{
			name: "Sensei",
			desc: "Un uomo vissuto, pieno di esperienza, con una lunga barba. Si dice che porti sempre con sè un arsenale di AK acquistati in Russia. Sicario fedele di Putin, nessuno ha mai scoperto la sua vera identità ed è sopravvissuto per diffonderla.",
			icon: "Se",
			steamid: "76561198121094516",
			csgo: {
				rank: "Argento IV"
			},
			dota: {
				solo: 951,
				party: 1150
			},
			osu: {
				id: "6624356",
				nrank: 1,
				trank: 8,
				crank: 9,
				brank: 0
			}
		},
		{
			name: "Heisenberg",
			desc: "Heisenberg, o meglio il Dr. Heisenberg, è un musicista polistrumentista, un \"programmatore\" e un videogiocatore. I suoi giochi preferiti sono League of Legends e Hearthstone, ma si diverte a giocare anche a giochi come Dota 2, Payday 2 e CS:GO con altri membri della Royal Games o a altro come Ori and the Blind Forest, Dragonball Xenoverse, Far Cry 3, Skyrim e Dragon Age: Inquisition. Inoltre è un grande fan di Breaking Bad.",
			icon: "He",
			steamid: "76561198080377213",
			hs: "15",
			lol: {
				id: "48787994",
				rank: "Silver"
			},
			dota: {},
			osu: {
				id: "6075080",
				nrank: 11,
				trank: 36,
				brank: 11
			},
			csgo: {},
			steamtrade: "https://steamcommunity.com/tradeoffer/new/?partner=120111485&token=Kf65Veqd"
		},
		{
			name: "Supermatte",
			desc: "Qualcosa che diverte. Furbuffo.",
			icon: "Sm",
			steamid: "76561198115852550",
			dota: {},
			csgo: {},
			steamtrade: "https://steamcommunity.com/tradeoffer/new/?partner=155586822&token=Nxm5PTQA"
		},
		{
			name: "Igor",
			desc: "E' un giocatore? Un pazzo? Uno stalker? Un fantasma? Nessuno lo sa, nessuno lo ha mai visto. Ma una cosa è certa... Più un gioco è scemo e incasinato più lui è bravo. Inoltre, ha vinto più volte la medaglia del Gran Maestro.",
			icon: "Ia",
			steamid: "76561198161867082",
			dota: {
				
			}
		},
		{
			name: "Bompasgamer",
			desc: "Perchè lui è BOOOOOOOOOMP; è uno YouTuber, è uno YouTuber...",
			icon: "Tji",
			steamid: "76561198081682483",
			csgo: {}
		},
		{
			name: "Barboll",
			desc: "",
			icon: "Ba",
			steamid: "76561198128738388",
			dota: {},
			csgo: {},
			osu: {
				id: "6636216",
				nrank: 10,
				trank: 18,
				crank: 6
			},
			starcraft: {
				terran: 3,
				protoss: 5
			}
		},
		{
			name: "Fillo",
			desc: "Membro sconosciuto della Community. Nessuno sa la sua vera età.",
			icon: "Fil",
			steamid: "76561198103292029",
			csgo: {
				rank: "Argento III"
			},
			dota: {}
		},
		{
			name: "Cosimo",
			desc: "Membro che appare e scompare dalla chat vocale a suo piacimento senza alcun senso logico. A volte c'è, a volte non c'è.",
			icon: "Co",
			steamid: "76561198062778224",
			csgo: {
				rank: "Capo Argento Elite"
			},
			dota: {},
			osu: {
				id: "6348397",
				nrank: 12,
				trank: 45,
				crank: 17,
				brank: 7
			},
			steamtrade: "https://steamcommunity.com/tradeoffer/new/?partner=102512496&token=rVcbDtzi"
		},
		{
			name: "Alby",
			desc: "Cugino di Steffo, carica video random su YouTube.",
			icon: "Al",
			steamid: "76561198071383448",
			hs: "25",
			csgo: {},
			osu: {
				id: "6474988"
			}
		},
		{
			name: "Voltaggio",
			desc: "",
			icon: "Ad",
			steamid: "76561198147601821",
			dota: {
				solo: 1418,
				party: 1517
			},
			osu: {
				id: "6601959",
				nrank: 48,
				trank: 25,
				crank: 1,
				brank: 0
			}
		},
		{
			name: "Alle",
			desc: "",
			icon: "Ar",
			steamid: "76561198052996311"
		},
		{
			name: "Jummi",
			desc: "",
			icon: "Jm",
			steamid: "76561198169975999"
		},
		{
			name: "Tauei",
			desc: "",
			icon: "Tu",
			steamid: "76561198104305298",
			hs: "15",
			csgo: {},
			osu: {
				id: "6100342",
				nrank: 76,
				trank: 55,
				crank: 21,
				brank: 4
			},
			starcraft: {
				terran: 4,
				zerg: 2,
				protoss: 5
			}
		},
		{
			name: "Saitorlock",
			desc: "",
			icon: "Sh",
			steamid: "76561198089120441",
			osu: {
				id: "6562407",
				nrank: 0
			}
		},
		{
			name: "iEmax",
			desc: "",
			icon: "Ex",
			steamid: "76561198149695151",
			csgo: {
				rank: "Argento Elite"
			},
			steamtrade: "https://steamcommunity.com/tradeoffer/new/?partner=189429423&token=lvXiglzH"
		}
	]
	
	for(var i=0; i < membrilist.length; i++)
	{
		if(membrilist[i].dota)
		{
			if(!membrilist[i].dota.solo && !membrilist[i].dota.party)
			{
				membrilist[i].dota.toranked = Math.floor(membrilist[i].dota.level / 13  * 100);
				if(membrilist[i].dota.toranked > 100)
				{
					membrilist[i].dota.toranked = 100;
				}
			}
		}
	};
	
	$scope.membri = [];
	
	for(var i=0; i < Math.ceil(membrilist.length) / 3; i++)
	{
		if(membrilist[i * 3] && membrilist[i * 3 + 1] && membrilist[i * 3 + 2])
		{
			$scope.membri[i] = [membrilist[i * 3], membrilist[i * 3 + 1], membrilist[i * 3 + 2]];
		}
		else if(membrilist[i * 3] && membrilist[i * 3 + 1])
		{
			$scope.membri[i] = [membrilist[i * 3], membrilist[i * 3 + 1]];
		}
		else if(membrilist[i * 3])
		{
			$scope.membri[i] = [membrilist[i * 3]];
		}
	};
}]);