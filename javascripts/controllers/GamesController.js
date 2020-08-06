app.controller("GamesController", ['$scope', function ($scope)
{
	var gamelist = [
		//name: nome
		//desc: descrizione
		//dl: download gratuito
		//dlpass: download con password
		//dlmagnet: download con torrent
		{
			name: "Terraria",
			desc: "Combatti mostri e costruisci case in questo gioco sandbox di avventura. Adatto a persone a principianti e a piccoli gruppi di amici.",
			dlpass: "https://mega.co.nz/#!fkVh0KZD"
		},
		{
			name: "Bombsquad",
			desc: "Party game fino a 32 giocatori che usa smartphone come controller. Fantastico per gruppi di amici riuniti in un unico luogo con smartphone a disposizione.",
			dl: "http://www.files.froemling.net/bombsquad/builds/"
		},
		{
			name: "Frozen Synapse",
			desc: "Complesso gioco di strategia a turni. Adatto a persone a cui piacciono sfide strategiche di un alto livello.",
			dlmagnet: "magnet:?xt=urn:btih:XSGOUKXMRDYDO4XAOECJE7V3F3AT7BWB&dn=frozensynapse-win-32-1339710386.exe&tr=http%3a%2f%2ftracker.humblebundle.com%3a2710%2fannounce"
		},
		{
			name: "Osu!",
			desc: "Gioco musicale singleplayer e multiplayer. Moltissime canzoni e 4 modalità diverse disponibili. Adatto a tutti quelli a cui piace ascoltare musica.",
			dl: "http://m1.ppy.sh/r/osu!install.exe"
		},
		{
			name: "Kingdom Rush",
			desc: "Gioco strategico nel quale devi sconfiggere diversi nemici usando torri di vari tipi o un eroe. Adatto a chi vuole rilassarsi o agli amanti dei Tower Defense.",
			dlmagnet: "magnet:?xt=urn:btih:80472dec8a66bc55a410a07348cbecb6639f532b&dn=KingdomRush_win.zip&tr=http%3a%2f%2ftracker.humblebundle.com%3a2710%2fannounce&ws=http%3a%2f%2ffiles.humblebundle.com%2fKingdomRush_win.zip%3fkey%3dwebseed%26ttl%3d1408225933%26t%3d1286be4b43c762ce03d945fe44de0e29"
		},
		{
			name: "Outlast",
			desc: "Gioco horror ambientato in un manicomio in cui vengono fatti esperimenti su umani. Devi filmare con una telecamera abbastanza elementi da poterci fare un articolo su un giornale. Ma per poter pubblicare l'articolo, devi uscire vivo dal manicomio, pieno di esseri con la voglia di ucciderti che non puoi attaccare, ma puoi solo scappare. Adatto agli appassionati del genere horror.",
			dlmagnet: "magnet:?xt=urn:btih:4be35a29f7a7bbceb2b954000c8044a33f5a53d5&dn=Outlast-DRMFree-Patch2.zip&tr=http%3a%2f%2ftracker.humblebundle.com%3a2710%2fannounce&ws=http%3a%2f%2ffiles.humblebundle.com%2fOutlast-DRMFree-Patch2.zip%3fkey%3dwebseed%26ttl%3d1401922006%26t%3da45a1e77913392582686a183bbcccf14"
		}
	]
	
	$scope.giochi = [];
	
	for(var i=0; i < Math.ceil(gamelist.length) / 3; i++)
	{
		$scope.giochi[i] = [gamelist[i * 3], gamelist[i * 3 + 1], gamelist[i * 3 + 2]];
	}
}]);