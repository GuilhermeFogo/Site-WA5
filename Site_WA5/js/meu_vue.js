$(document).ready(function(){

    $('#app').text('Home > Agendamento Online');
    $('#conteudo'). text('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'+
		'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'+
		'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'+
		'consequat');

    var data = $('#data').val();

    if (data!="dd/mm/aaaa") {

    	var dia = new Date();
    	var dd = dia. getDate();
    	var mm = dia.getMonth() + 1;
    	var yyyy = dia.getFullYear();

    	$('#data').text("Hoje é "+dd+"/"+ mm+"/"+ yyyy);    	

    }


    $('.telefone').text('7833-5533');
    $('.telefone2').text('11 9833-5539');
    $('.telefone1').text('11 8933-5530');
    $('.endereco').text('Av.Joao,123 Jd. Bela Vista Santo André-SP');
    $('.email').text('info@exemplo.com');
});