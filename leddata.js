

/* ********** GENERAL SCRIPTING **********************

		This templates shows what you can do in this is module script
		All the code outside functions will be executed each time this script is loaded, meaning at file load, when hitting the "reload" button or when saving this file
*/


// You can add custom parameters to use in your script here, they will be replaced each time this script is saved
var led1Value = script.addIntParameter("Led1Value","Description of my int param",0,0,60);
var led2Value = script.addIntParameter("Led2Value","Description of my int param",0,0,60);
var led1Data = script.addStringParameter("led1Data","Description of my string param",'{"seg":{"i":[0,0,[255,0,0]]}}');	//This will add a float number parameter (slider), default value of 0.1, with a range between 0 and 1
var led2Data = script.addStringParameter("led2Data","Description of my string param",'{"seg":{"i":[0,0,[255,0,0]]}}');	//This will add a float number parameter (slider), default value of 0.1, with a range between 0 and 1
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

var myFileParam = script.addFileParameter("My File Param", "Description of my file param");					//Adds a file parameter to browse for a file. Can have a third argument "directoryMode" 										
*/


//you can also declare custom internal variable
//var myValue = 5;

/*
 The init() function will allow you to init everything you want after the script has been checked and loaded
 WARNING it also means that if you change values of your parameters by hand and set their values inside the init() function, they will be reset to this value each time the script is reloaded !
*/
function init()
{
	led1Value.set(root.customVariables.led.variables.led1.led1.get());
	led2Value.set(root.customVariables.led.variables.led2.led2.get());
	led1Data.set(root.customVariables.led.variables.led1data.led1data.get());
	led2Data.set(root.customVariables.led.variables.led2data.led2data.get());
	//myFloatParam.set(5); //The .set() function set the parameter to this value.
	//myColorParam.set([1,.5,1,1]);	//for a color parameter, you need to pass an array with 3 (RGB) or 4 (RGBA) values.
	//myP2DParam.set([1.5,-5]); // for a Point2D parameter, you need to pass 2 values (XY)
	//myP3DParam.set([1.5,2,-3]); // for a Point3D parameter, you need to pass 3 values (XYZ)
}

/*root.customVariables.led.variables.led1data.led1data
 This function will be called each time a parameter of your script has changed
*/
function scriptParameterChanged(param)
{
	//You can use the script.log() function to show an information inside the logger panel. To be able to actuallt see it in the logger panel, you will have to turn on "Log" on this script.
	script.log("Parameter changed : "+param.name); //All parameters have "name" property
	if(param.is(led1Value))
	{		
 
			root.customVariables.led.variables.led1data.led1data.set('{"seg":{"i":[0,'+param.get()+',[255,0,0]]}}');
			script.log("Value is "+param.get());
			
			
	
	}	
	else if(param.is(led2Value)) 
		{
			
			root.customVariables.led.variables.led2data.led2data.set('{"seg":{"i":[0,'+param.get()+',[255,0,0]]}}');
			script.log("Value is "+param.get());
			
			
			
	
		}	
	
	
}

/*
 This function, if you declare it, will launch a timer at 50hz, calling this method on each tick
*/

function update(deltaTime)
{
	
	led1Value.set(root.customVariables.led.variables.led1.led1.get());
	led2Value.set(root.customVariables.led.variables.led2.led2.get());

}

/*
 This function, if you declare it, will be called when after a user has made a choice from a okCancel box or YesNoCancel box that you launched from this script 
*/
/*
function messageBoxCallback(id, result)
{
	script.log("Message box callback : "+id+" > "+result); //deltaTime is the time between now and last update() call, util.getTime() will give you a timestamp relative to either the launch time of the software, or the start of the computer.
}
*/

/* ********** FILTER SPECIFIC SCRIPTING **********************

	The "local" variable refers to the object containing the scripts. In this case, the local variable refers to the filter.
	It means that you can access any control inside  this filter by accessing it through its address.
*/

/*
 This function will be called each time the filter is processed, and expects a return value.
 This function only exists because the script is in a filter
 The "inputs" argument is an array of all the parameters that are being filtered. Each element can be either a single value or an array of values itself (if it's a Color or Point 2D/3D for instance)

 The minValues and max Values are arrays of the same size as inputs, containing the value range of the input if applicable 

 If this filter is inside a multiplexed mapping, multiplexIndex is the current index of the multiplex list

 The result must be an array of the same size as the inputValues

*/
