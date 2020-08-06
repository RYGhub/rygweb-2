app.controller("FondiController", ['$scope', function ($scope)
{
	$scope.progetti = [
		{
			name: "Server di Minecraft",
			desc: "Un server di Minecraft aperto a qualsiasi ora del giorno per un mese.",
			curr: 0,
			max: 5
		},
		{
			name: "Dominio ufficiale",
			desc: "Registrare il dominio royalgames.net per un anno.",
			curr: 0,
			max: 10
		},
		{
			name: "Server di Mumble indipendente",
			desc: "Un server di Mumble indipendente dall'Internet di Steffo e dal caricamento di video di persone in casa sua.",
			curr: 0,
			max: 2
		}
	];
	
	for(var i = 0; i < $scope.progetti.length; i++)
	{
		$scope.progetti[i].percentuale = ($scope.progetti[i].curr / $scope.progetti[i].max * 100);
		if($scope.progetti[i].percentuale > 100)
		{
			$scope.progetti[i].percentuale = 100;
		}
	};
}]);
