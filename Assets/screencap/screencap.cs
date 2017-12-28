using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.IO;

public class screencap : MonoBehaviour {

	public static bool screenCapOn = true;
	 
     public static string ScreenShotName(int width, int height) {
         return string.Format("{0}/screenshots/screen_{1}x{2}_{3}.png", 
                              Directory.GetCurrentDirectory(), 
                              width, height, 
                              System.DateTime.Now.ToString("yyyy-MM-dd_HH-mm-ss"));
     }
 	 
   
 
	public static void GetScreen() {

		if(screenCapOn){
		// setup output directory
		string appDir = Directory.GetCurrentDirectory();
		Directory.CreateDirectory(appDir + "/screenshots");
		
		
		//setup image width and height
		int resWidth = Camera.main.pixelWidth; 
		int resHeight = Camera.main.pixelHeight;
		
		//get file name
		string filename = ScreenShotName(resWidth, resHeight);
		
		//save screen shot
		Debug.Log(string.Format("Took screenshot to: {0}", filename));
		Application.CaptureScreenshot(filename);
        } 
     }


 }