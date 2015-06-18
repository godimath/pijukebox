<body id="body">
<script src="/scripts.js"></script>
<link rel="stylesheet" href="/style.css">
<button class=button onclick=refreshPage("/")>Homepage</button>
<p><p>
<?php
	if(isset($_POST["submit"])){
		$background = str_replace("#", "", $_POST["background"]);
		$button = str_replace("#", "", $_POST["button"]);
		$buttontext = str_replace("#","", $_POST["buttontext"]);
		$text = str_replace("#","",$_POST["text"]);

		echo shell_exec("../scripts/bash/create-style-sheet.sh $background $button $buttontext $text");
	}
?>
<button class=button id=example onclick=dontClickMe()>Example Button</button>
<p class=text id=exampleText>Example Text</p>

<form action=/settings.php method=post>
<p class=text>Background Color: <input onchange=setBackgroundColor() id=backgroundColor type=color name=background></p>
<p class=text>Button Color: <input onchange=setButtonColor() id=buttonColor type=color name=button></p>
<p class=text>Button Text Color: <input onchange=setButtonTextColor() id=buttonText type=color name=buttontext></p>
<p class=text>Text Color: <input onchange=setTextColor() id=textColor type=color name=text></p>

<input class=button type=submit name=submit value="Update Skin">
</form>

<form action=/ method=post>
<button class="button" onclick=sendMusicAction('s')>Try to Fix, Click if not playing</button>
<input id="action" name="action" value="" style="visibility:hidden">
</form>

</body>
