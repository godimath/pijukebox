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

		shell_exec("../scripts/bash/create-style-sheet.sh $background $button $buttontext $text");
	}
?>
<button class=button id=example onclick=dontClickMe()>Example Button</button>
<p class=text id=exampleText>Example Text</p>

<form action=/settings.php method=post>
<p class=text>Background Color: <input type=color value="#5b2067" onchange=setBackgroundColor() id=backgroundColor name=background></p>
<p class=text>Button Color: <input value="#102457" onchange=setButtonColor() id=buttonColor type=color name=button></p>
<p class=text>Button Text Color: <input value="#d4dde4" onchange=setButtonTextColor() id=buttonText type=color name=buttontext></p>
<p class=text>Text Color: <input value="#d4dde4" onchange=setTextColor() id=textColor type=color name=text></p>

<input class=button type=submit name=submit value="Update Skin">
</form>

<form action=/ method=post>
<button class="button" onclick=sendMusicAction('s')>Try to Fix, Click if not playing</button>
<input id="action" name="action" value="" style="visibility:hidden">
</form>

</body>
<script>setCurrentColor()</script>
