#pragma strict
import System.IO;




static var screenCapOn : boolean  = true;
	 
static function  ScreenShotName(width: int, height: int) : String
{
 return String.Format("{0}/screenshots/screen_{1}x{2}_{3}.png", 
                      Directory.GetCurrentDirectory(), 
                      width, height, 
                      System.DateTime.Now.ToString("yyyy-MM-dd_HH-mm-ss"));
}


static function Grab() {

	if(screenCapOn){
	// setup output directory
	var appDir : String = Directory.GetCurrentDirectory();
	Directory.CreateDirectory(appDir + "/screenshots");
	
	
	//setup image width and height
	var resWidth : int = Camera.main.pixelWidth; 
	var resHeight : int = Camera.main.pixelHeight;
	
	//get file name
	var filename : String = ScreenShotName(resWidth, resHeight);
	
	//save screen shot
	Debug.Log(String.Format("Took screenshot to: {0}", filename));
	Application.CaptureScreenshot(filename);
    } 
 }
