app.controller("NewsController", ['$scope', function ($scope)
{
	var newslist = [
		{
			time: "2015-07-20",
			text: "Sensei ha battuto Fulz in un duello di CS:GO!"
		},
		{
			time: "2015-07-31",
			text: "Ho resettato la votazione perchè c'era un piiiiiiccolo bug. Votate di nuovo!"
		}
	];
	
	$scope.events = [
		{
		}
	]
	
	$scope.list = [];
	for(var i=0; i < newslist.length; i++)
	{
		$scope.list[i] = newslist[newslist.length - 1 - i];
	};
}]);
