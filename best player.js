
/* ********** GENERAL SCRIPTING **********************

		This templates shows what you can do in this is module script
		All the code outside functions will be executed each time this script is loaded, meaning at file load, when hitting the "reload" button or when saving this file
*/


// You can add custom parameters to use in your script here, they will be replaced each time this script is saved
//var param1 = root.customVariables.players.variables.p1.p1;	//This will add a float number parameter (slider), default value of 0.1, with a range between 0 and 1
//var param2 = root.customVariables.players.variables.p2.p2;		//This will add a float number parameter (slider), default value of 0.1, with a range between 0 and 1
var score1 = script.addIntParameter("Score1","Description of my int param",0,0,100);
var score2 = script.addIntParameter("Score2","Description of my int param",0,0,100);
//Here are all the type of parameters you can create
/*
var myTrigger = script.addTrigger("My Trigger", "Trigger description"); 									//This will add a trigger (button)
var myBoolParam = script.addBoolParameter("My Bool Param","Description of my bool param",false); 			//This will add a boolean parameter (toggle), defaut unchecked
var myFloatParam = script.addFloatParameter("My Float Param","Description of my float param",.1,0,1); 		//This will add a float number parameter (slider), default value of 0.1, with a range between 0 and 1
var myIntParam = script.addIntParameter("My Int Param","Description of my int param",2,0,10); 				//This will add an integer number parameter (stepper), default value of 2, with a range between 0 and 10
var myStringParam = script.addStringParameter("My String Param","Description of my string param", "cool");	//This will add a string parameter (text field), default value is "cool"
var myColorParam = script.addColorParameter("My Color Param","Description of my color param",0xff0000ff); 	//This will add a color parameter (color picker), default value of opaque blue (ARGB)
var myP2DParam = script.addPoint2DParameter("My P2D Param","Description of my p2d param"); 					//This will add a point 2d parameter
var myP3DParam = script.addPoint3DParameter("My P3D Param","Description of my p3d param"); 					//This will add a point 3d parameter
var myTargetParam = script.addTargetParameter("My Target Param","Description of my target param"); 			//This will add a target parameter (to reference another parameter)
var myEnumParam = script.addEnumParameter("My Enum Param","Description of my enum param",					//This will add a enum parameter (dropdown with options)
											"Option 1", 1,													//Each pair of values after the first 2 arguments define an option and its linked data
											"Option 2", 5,												    //First argument of an option is the label (string)
											"Option 3", "banana"											//Second argument is the value, it can be whatever you want
											); 	
*/


//you can also declare custom internal variable
//var myValue = 5;

/*
 The init() function will allow you to init everything you want after the script has been checked and loaded
 WARNING it also means that if you change values of your parameters by hand and set their values inside the init() function, they will be reset to this value each time the script is reloaded !
*/
function init()
{
	score1.set(root.customVariables.players.variables.p1.p1.get());
	score2.set(root.customVariables.players.variables.p2.p2.get());
	//myFloatParam.set(5); //The .set() function set the parameter to this value.
	//myColorParam.set([1,.5,1,1]);	//for a color parameter, you need to pass an array with 3 (RGB) or 4 (RGBA) values.
	//myP2DParam.set([1.5,-5]); // for a Point2D parameter, you need to pass 2 values (XY)
	//myP3DParam.set([1.5,2,-3]); // for a Point3D parameter, you need to pass 3 values (XYZ)
}

/*
 This function will be called each time a parameter of your script has changed
*/
function scriptParameterChanged(param)
{
	
	 if(param.is(score1) || param.is(score2))
	{
		if(score1.get() > score2.get())
		{
			local.setValid(true);
	
			root.customVariables.worstPlayer.variables.player1.player1.set(false);	
			root.customVariables.worstPlayer.variables.spread.spread.set((score1.get() - score2.get()));
			
			

		} 
		
		else 
		{
			local.setValid(false);
			root.customVariables.worstPlayer.variables.player1.player1.set(true);
			root.customVariables.worstPlayer.variables.spread.spread.set((score2.get() - score1.get()));
	
		}	
	}
	
	

}

/*
 This function, if you declare it, will launch a timer at 50hz, calling this method on each tick
*/

function update(deltaTime)
{
	
	//Condition check and validate
	score1.set(root.customVariables.players.variables.p1.p1.get());
	score2.set(root.customVariables.players.variables.p2.p2.get());


	

}


/* ********** CONDITION SPECIFIC SCRIPTING **********************

	The "local" variable refers to the object containing the scripts. In this case, the local variable refers to the condition.
	It means that you can access any control inside  this condition by accessing it through its address.
	The condition has a method .setValid() which validate or invalidate this condition.
	You can check its usage in the scriptParameterChanged
*/
