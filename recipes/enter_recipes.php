
<!DOCTYPE html>
<html lang="en"> 
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<title>Enter Recipes</title>
		<link rel="stylesheet" type="text/css" href="style.css">
	</head>
	<body>
		<form>
			Recipe Name: <input type="text" name="recipe_name"><br/>
			<select name="category">
				<option value="Appetizer">Appetizer</option>
				<option value="Side Dish">Side Dish</option>
				<option value="Main Course">Main Course</option>
				<option value="Dessert">Dessert</option>
				<option value="Sauce">Sauce</option>
				<option value="Bread">Bread</option>
			</select><br/>
			Cooking Temperature: <input type="text" name="cook_temp" size="10"><br/>
			Cooking Time: <input type="text" name="cook_time"><br/>
			Servings: <input type="text" name="servings"><br/>
			Ingredients:<br/>
			Amount: <input type="text" name="amount1" size="4"> (cups/tbsp/etc)
				<input type="text" name="msrmt1"> Item: <input type="text" name="ingredient1"><br/>
			Amount: <input type="text" name="amount2" size="4"> (cups/tbsp/etc)
				<input type="text" name="msrmt2"> Item: <input type="text" name="ingredient2"><br/>
			Amount: <input type="text" name="amount3" size="4"> (cups/tbsp/etc)
				<input type="text" name="msrmt3"> Item: <input type="text" name="ingredient3"><br/>
			Amount: <input type="text" name="amount4" size="4"> (cups/tbsp/etc)
				<input type="text" name="msrmt4"> Item: <input type="text" name="ingredient4"><br/>
			Instructions: <input type="text" name="instructions"><br/>
		</form>
	</body>
</html>