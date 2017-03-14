<html>
        
<script>
var my_json='{FBI:[{name:"rose",age:"25"},{name:"jack",age:"23"}],NBA:[{name:"tom",sex:"man"},{name:"jack",sex:"women"}]}';
var my_object=eval('('+my_json+')');
document.writeln(my_object.FBI[1].name + my_object.FBI[1].age);
</script>
<body>
</body>
</html>
