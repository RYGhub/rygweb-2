app.controller("MembriController", ['$scope', function($scope)
{
	var membrilist = [
		{
			name: "Steffo",
			desc: "Master e fondatore della Royal Games, gestisce il sito e il server di Mumble, programma, fa robe, il tutto mentre gioca a dei roguelike. E' gelatodipendente, e odia la gente che lo ringrazia e Times New Roman.",
			icon: "St",
			steamid: "76561198034314260",
			csgo: {
				rank: "Nova Oro I"
			},
			dota: {
				solo: 1729,
				party: 1275
			},
			hs: "15",
			lol: {
				id: "5234835",
				rank: "Unranked"
			},
			osu: {
				id: "6348077",
				nrank: 385,
				trank: 768,
				crank: 220,
				brank: 236
			},
			steamtrade: "https://steamcommunity.com/tradeoffer/new/?partner=74048532&token=Xf2otcS6",
			starcraft: {
				terran: 5,
				protoss: 5,
				zerg: 5
			},
			telegram: "Steffo"
		},
		{
			name: "Il Nemesis",
			desc: "Il Nemesis è nella Royal Games dagli inizi. Ha una grande passione per gli FPS di ogni genere e per i sandbox; inoltre adora gli horror. è noto in RYG per la sua mira, lo stealth e per le sue battute terribili, che tiene nel bat-armadio. Inoltre gestisce un canale Youtube (a tempo perso), programma sciocchezze in C++ e organizza le escursioni in RYG (Stia tranquillo ragioniere, è un organizzazione Nemesis!).",
			icon: "Ne",
			steamid: "76561198071012695",
			csgo: {
				rank: "Argento III"
			},
			dota: {},
			osu: {
				id: "6347545",
				nrank: 12,
				trank: 57,
				crank: 8,
				brank: 117
			},
			starcraft: {
				terran: 3,
				zerg: 2
			},
			telegram: "EvilBalu"
		},
		{
			name: "Fulz",
			desc: "Fulz è uno dei fondatori della Royal Games. E' famoso per i suoi rage e per la sua passione per i giochi realistici e storici.",
			icon: "PuntoEsclamativo",
			steamid: "76561198035547490",
			csgo: {
				rank: "Nova Oro II"
			},
			dota: {},
			osu: {
				id: "6360948",
				nrank: 1,
				trank: 44,
				crank: 0,
				brank: 10
			},
			starcraft: {
				terran: 5,
				protoss: 5,
				zerg: 4
			},
			telegram: "Fultz"
		},
		{
			name: "Il Gattopardo ♥",
			desc: "Il Gattopardo è un ragazzo molto simpaaaaaaaatico, ma odia perdere. Quindi non giocate con lui a Dota o a CSGO se non siete sicuri di vincere. Gioca troppo a Osu!.",
			icon: "G%E2%99%A5",
			steamid: "76561198111021344",
			csgo: {
				rank: "Nova Oro II"
			},
			dota: {
				solo: 1624,
				party: 1489
			},
			hs: "16",
			lol: {
				id: "70817146",
				rank: "Unranked"
			},
			osu: {
				id: "6344933",
				nrank: 332,
				trank: 50,
				crank: 65,
				brank: 15
			},
			steamtrade: "https://steamcommunity.com/tradeoffer/new/?partner=150755616&token=COOLUajh",
			telegram: "IlGattopardo"
		},
		{
			name: "Frankez",
			desc: "Frankez è uno dei fondatori della Royal Games. E' il mercante del gruppo: passa il tempo a scambiare (e a scammare) oggetti di Dota 2 e CS:GO. Possiede anche uno dei pochi PC con Windows Vista, il quale ha un criceto come processore e un topolino come scheda video.",
			icon: "Fr",
			steamid: "76561198071099951",
			csgo: {
				rank: "Nova Oro II"
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
				nrank: 61,
				trank: 542,
				crank: 12,
				brank: 20
			},
			steamtrade: "https://steamcommunity.com/tradeoffer/new/?partner=110834223&token=puEW13H7",
			starcraft: {
				terran: 5,
				protoss: 5,
				zerg: 5
			},
			telegram: "FrankFrankFrank"
		},
		{
			name: "Fedececco",
			desc: "Bella a tutti ragazzi io sono Fedececco e benvenuti a questo nuovo sito! Sapete cosa fa un'ape su una foglia? Apeggia! Haha. Ecco ciao e arrivederci al prossimo video! Se vi è piaciuto ricordatevi di mettere un Mi Piace, iscrivervi e commentare!",
			icon: "Fe",
			steamid: "76561198109189938",
			csgo: {
				rank: "Argento Elite"
			},
			dota: {
				party: 1038
			},
			osu: {
				id: "6398259",
				nrank: 3
			},
			starcraft: {
				terran: 2
			},
			telegram: "FedYal"
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
			},
			telegram: "ActerRYG"
		},
		{
			name: "Sensei",
			desc: "Un uomo vissuto, pieno di esperienza, con una lunga barba. Si dice che porti sempre con sè un arsenale di AK acquistati in Russia. Sicario fedele di Putin, nessuno ha mai scoperto la sua vera identità ed è sopravvissuto per diffonderla.",
			icon: "Se",
			steamid: "76561198121094516",
			csgo: {
				rank: "Nova Oro III"
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
			hs: "14",
			lol: {
				id: "48787994",
				rank: "Silver"
			},
			dota: {},
			osu: {
				id: "6075080",
				nrank: 11,
				trank: 35,
				crank: 0,
				brank: 11,
			},
			csgo: {
				rank: "Argento III"
			},
			steamtrade: "https://steamcommunity.com/tradeoffer/new/?partner=120111485&token=Kf65Veqd",
			telegram: "HeisenDoc"
		},
		{
			name: "Supermatte",
			desc: "Qualcosa che diverte. Furbuffo.",
			icon: "Sm",
			steamid: "76561198115852550",
			dota: {},
			csgo: {},
			steamtrade: "https://steamcommunity.com/tradeoffer/new/?partner=155586822&token=Nxm5PTQA",
			telegram: "SuperMatteMB"
		},
		{
			name: "Igor",
			desc: "E' un giocatore? Un pazzo? Uno stalker? Un fantasma? Nessuno lo sa, nessuno lo ha mai visto. Ma una cosa è certa... Più un gioco è scemo e incasinato più lui è bravo. Inoltre, ha vinto più volte la medaglia del Gran Maestro.",
			icon: "Ia",
			steamid: "76561198161867082",
			dota: {},
			telegram: "PeraEMela99"
		},
		{
			name: "Barboll",
			desc: "Barboll è uno specialista nel giocare a Terraria e prendere virus. Se volete prendere un virus per la prima volta nella vostra vita, chiedete a lui!",
			icon: "Ba",
			steamid: "76561198128738388",
			dota: {},
			csgo: {},
			osu: {
				id: "6636216",
				nrank: 10,
				trank: 17,
				crank: 5
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
				rank: "Nova Oro II"
			},
			dota: {
				party: 693
			},
			osu: {
				id: "6348397",
				nrank: 12,
				trank: 45,
				crank: 17,
				brank: 6
			},
			steamtrade: "https://steamcommunity.com/tradeoffer/new/?partner=102512496&token=rVcbDtzi",
			telegram: "Cosimo03"
		},
		{
			name: "Alby",
			desc: "Cugino di Steffo, carica video random su YouTube. E' impossibile farlo tacere.",
			icon: "Al",
			steamid: "76561198071383448",
			hs: "25",
			csgo: {},
			osu: {
				id: "6474988"
			},
			telegram: "Albertino04"
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
				nrank: 61,
				trank: 25,
				crank: 1,
				brank: 0
			},
			telegram: "Voltaggio"
		},
		{
			name: "Alle2002",
			desc: "Membro della Royal Games che non si vede online da parecchio. Chissà cosa sta facendo.",
			icon: "Ar",
			steamid: "76561198052996311"
		},
		{
			name: "Jummi",
			desc: "Amico di Alby, gioca a tutti i free to play che trova.",
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
			},
			telegram: "Tauei"
		},
		{
			name: "Saitorlock",
			desc: "Amico (?) di Cosimo che ha preso CSGO e non l'ha mai pagato, per poi non essersi fatto più vedere...",
			icon: "Sh",
			steamid: "76561198089120441",
			osu: {
				id: "6562407",
				nrank: 0
			},
			telegram: "Saitorlock"
		},
		{
			name: "iEmax",
			desc: "",
			icon: "Ex",
			steamid: "76561198149695151",
			csgo: {
				rank: "Capo Argento Elite"
			},
			steamtrade: "https://steamcommunity.com/tradeoffer/new/?partner=189429423&token=lvXiglzH",
			telegram: "iEmax"
		},
		{
			name: "Alleanderl",
			desc: "",
			icon: "Aa",
			steamid: "76561198154175301",
			telegram: "Alleanderl",
			lol: {
				id: "75341036",
				rank: "Unranked"
			},
			hs: "14"
		},
		{
			name: "Bobby",
			desc: "",
			icon: "By",
			steamid: "76561198131868211",
			telegram: "Boni3099",
		},
		{
			name: "MrDima",
			desc: "",
			icon: "Mr",
			telegram: "MrDima98",
			hs: "12"
		},
		{
			name: "Adry",
			desc: "",
			icon: "Ay",
			telegram: "Adry99",
			hs: "18"
		}
	]
	
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