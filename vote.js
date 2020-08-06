function cookie()
{
	$(".nonvotato").hide();
	$(".votato").show(300);
	$(".incorso").toggleClass("disabled");
};

function vota(voto)
{
		$.get("vota-" + voto + ".php");
		cookie();
		$("#voto-" + voto).text(parseInt($("#voto-" + voto).text()) + 1);
		return false;
};