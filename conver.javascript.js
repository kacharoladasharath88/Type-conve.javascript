<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Numbers</h1>
<h2>The Number() Method</h2>

<p>The Number() metod converts a variable (or value) into a number:</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
Number("3.14") + "<br>" +
Number(Math.PI) + "<br>" +
Number("    ") + "<br>" +
Number("") + "<br>" +
Number("99 88") + "<br>" +
Number("John") + "<br>";
</script>

</body>
</html>
