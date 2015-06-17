<body id="body">
<script src="/scripts.js"></script>
<link rel="stylesheet" href="/style.css">
<a href=/>Homepage</a>
<p>
<a href=/settings.php>Refresh</a>
<?php
	if(isset($_POST["submit"])){
		$background = str_replace("#", "", $_POST["background"]);
		$button = str_replace("#", "", $_POST["button"]);
		$text = str_replace("#","", $_POST["text"]);
		echo shell_exec("../scripts/bash/create-style-sheet.sh $background $button $text");
	}
?>
<form action=/settings.php method=post>
Background Color: <input onchange=setBackgroundColor() id=backgroundColor type=color name=background><p>
Button Color: <input onchange=setButtonColor() id=buttonColor type=color name=button><p>
Button Text Color: <input onchange=setButtonTextColor() id=buttonText type=color name=text><p>

<input type=submit name=submit value=Submit>
</form>
<button class=button id=example>Example</button>
</body>
