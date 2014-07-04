function slideNotice(text)
	{
		$('#slideNotice').html('<h3>' + text +'</h3>').slideDown().delay(1500).slideUp();
	}
	

$(document).ready(function()
{
	$('#save').click(function()
	{
		//insert/update/delete/ user settings
		
		slideNotice('Your settings have been saved!');
	})
	
	$('#delete').click(function()
	{
		//insert/update/delete/ user settings
		
		slideNotice('Your Account have been Deleted!');
	})
});

