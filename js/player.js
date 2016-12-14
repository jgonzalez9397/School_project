/* This is the player javascript file. It will handle audio-file,storage, and playback 
functionalities */



	         // list of all the audio files in my local computer
			const audioButton11 = new Audio("music/audio/audiobutton11.wav");
			const audioButton12 = new Audio("music/audio/audioButton12.wav");
			const audioButton13 = new Audio("music/audio/audioButton13.wav");
			const audioButton14 = new Audio("music/audio/audioButton14.wav");
			const audioButton15 = new Audio("music/audio/audioButton15.wav");
			const audioButton16 = new Audio("music/audio/audioButton16.wav");

			const audioButton21 = new Audio("music/audio/audioButton21.wav");
			const audioButton22 = new Audio("music/audio/audioButton22.wav");
			const audioButton23 = new Audio("music/audio/audioButton23.wav");
			const audioButton24 = new Audio("music/audio/audioButton24.wav");
			const audioButton25 = new Audio("music/audio/audioButton25.wav");
			const audioButton26 = new Audio("music/audio/audioButton26.wav");

			const audioButton31 = new Audio("music/audio/audioButton31.wav");
			const audioButton32 = new Audio("music/audio/audioButton32.wav");
			const audioButton33 = new Audio("music/audio/audioButton33.wav");
			const audioButton34 = new Audio("music/audio/audioButton34.wav");
			const audioButton35 = new Audio("music/audio/audioButton35.wav");
			const audioButton36 = new Audio("music/audio/audioButton36.wav");

			const audioButton41 = new Audio("music/audio/audioButton41.wav");
			const audioButton42 = new Audio("music/audio/audioButton42.wav");
			const audioButton43 = new Audio("music/audio/audioButton43.wav");
			const audioButton44 = new Audio("music/audio/audioButton44.wav");
			const audioButton45 = new Audio("music/audio/audioButton45.wav");
			const audioButton46 = new Audio("music/audio/audioButton46.wav");

			const audioButton51 = new Audio("music/audio/audioButton51.wav");
			const audioButton52 = new Audio("music/audio/audioButton52.wav");
			const audioButton53 = new Audio("music/audio/audioButton53.wav");
			const audioButton54 = new Audio("music/audio/audioButton54.wav");
			const audioButton55 = new Audio("music/audio/audioButton55.wav");
			const audioButton56 = new Audio("music/audio/audioButton56.wav");

			// array stores all the audio objects to be compared with object-local variable
			var Global_Audio_Array = [audioButton11,audioButton12,audioButton13,audioButton14,
			audioButton15,audioButton16,audioButton21,audioButton22,audioButton23,audioButton24,
			audioButton25,audioButton26,audioButton31,audioButton32,audioButton33,audioButton34, 
			audioButton35,audioButton36,audioButton41,audioButton42,audioButton43,audioButton44,
			audioButton45,audioButton46,audioButton51, audioButton52,audioButton53,audioButton54,
			audioButton55,audioButton56]; 


              
             // global log counter variable 
              var logCounter = 0; 

              var ButtonsPlaying = [];    // array that stores playing audio objects / global variable 

              var testingID = []; 

              // ButtonID is the value passed by the node when clicked 
			  function playPause(buttonID){




                    // gets access to the node in the dom to alter its css styling 
					var property = document.getElementById(buttonID);  
					
					//contains the current audio-file of the audio-box clicked
					var button; 
					//contains the css styling color of the audio-box clicked
					var color;             
                    

					switch (buttonID){
						
						case "button11":
								button = audioButton11;                // stores audio object in button variable
								color = "#4183D7";
								break;
						case "button12":
								button = audioButton12;
								color = "#D2527F";
								break;
						case "button13":
								button = audioButton13;
								color = "#F1A9A0";
								break;
						case "button14":
								button = audioButton14;
								color = "#87D37C";
								break;				
						case "button15":
								button = audioButton15;
								color = "#FDE3A7";
								break;				
						case "button16":
								button = audioButton16;
								color = "#4ECDC4";
								break;		
						
						case "button21":
								button = audioButton21;
								color = "#E9D460";
								break;
						case "button22":
								button = audioButton22;
								color = "#68C3A3";
								break;	
						case "button23":
								button = audioButton23;
								color = "#ECECEC";
								break;
						case "button24":
								button = audioButton24;
								color = "#8E44AD";
								break;
						case "button25":
								button = audioButton25;
								color = "#F89406";
								break;	
						case "button26":
								button = audioButton26;
								color = "#D24D57";
								break;	

						case "button31":
								button = audioButton31;
								color = "#9684A3";
								break;
						case "button32":
								button = audioButton32;
								color = "#344146";
								break;	
						case "button33":
								button = audioButton33;
								color = "#D98B3A";
								break;
						case "button34":
								button = audioButton34;
								color = "#249991";
								break;
						case "button35":
								button = audioButton35;
								color = "#ACA46F";
								break;	
						case "button36":
								button = audioButton36;
								color = "#6B9B61";
								break;	

						case "button41":
								button = audioButton41;
								color = "#8BC418";
								break;
						case "button42":
								button = audioButton42;
								color = "#C4A956";
								break;	
						case "button43":
								button = audioButton43;
								color = "#E35252";
								break;
						case "button44":
								button = audioButton44;
								color = "#84CCD1";
								break;
						case "button45":
								button = audioButton45;
								color = "#467E8F";
								break;	
						case "button46":
								button = audioButton46;
								color = "#D35400";
								break;	

						case "button51":
								button = audioButton51;
								color = "#DB8D17";
								break;
						case "button52":
								button = audioButton52;
								color = "#D8A9A1";
								break;	
						case "button53":
								button = audioButton53;
								color = "#449BB5";
								break;
						case "button54":
								button = audioButton54;
								color = "#ECF0F1";
								break;
						case "button55":
								button = audioButton55;
								color = "#AEA8D3";
								break;	
						case "button56":
								button = audioButton56;
								color = "#767D30";
								break;								
					}




	
                    				
					if(button.paused){
						button.play();                      // play audio object 
						button.loop = true;                 // audio object is playing in a loop
						property.style.backgroundColor = color;
						property.style.borderRadius = "250px";
						ButtonsPlaying.push(button);        // pushing the audio object into the ButtonsPlaying(global array)
                        testingID.push(property) ;          // pushing the id of the same audio object into another testingID(another global variale)

					}
					else {
						button.pause();
						property.style.backgroundColor = "rgba(80,80,80,0.7)";
						property.style.borderRadius = "0px";

						// traverses through the global ButtonsPlaying array to remove paused objects 
						for (var i=0; i < ButtonsPlaying.length; i++){
                         
                        if (ButtonsPlaying[i].paused){
                         	
                         	ButtonsPlaying.splice(i,1);    // removes the audio object into the ButtonsPlaying(global array)


                         	testingID.splice(i, 1);        // removes the id of the same audio object into another testingID(another global variale)

                                }
					        }
                        }
                    console.log(ButtonsPlaying.length); 
                    console.log( testingID);  	//!!!!!!!!!!!!!!!!!!!!!
              }

                 
                    var test;    //running total
                  

                 function log(){

      				    myFunction();   // calling function 

      				    /*function is responsible for creating a "snackbar" to inform the user to
      				     click the refesh button after logging the audio files */
   					    function myFunction() {
   							// Get the snackbar DIV
    						var x = document.getElementById("snackbar")


						if (ButtonsPlaying.length > 0 ){
 
 							x.innerText = "Great! Now Click Refresh!";  
 								x.className = "show";
 								     x.style.backgroundColor = "blue";  
 								 }

						else {
	 					x.innerText = "sorry try again" ;  // confirmation of how many audio objects are playing
   						 // Add the "show" class to DIV
    				    x.className = "show";
     					x.style.backgroundColor = "red";
						}

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

                    	
          	        logCounter++; 
                    
                    console.log("this the end of the session" + ButtonsPlaying.length );

                    var feedback = document.createElement("p"); 
                    
                    var playButton= document.createElement("button"); //test  create the element

                    

                    if (ButtonsPlaying.length === 0 ){

                    feedback.innerText = "ERROR NO AUDIO FILES "   // confirmation of how many audio objects are playing
                    
                    feedback.className = "NologgedFiles"; 
                    playButton.style.opacity = 0.4;   // connecting the " playButton " node object with css styling

                     }
                     else{

                     // confirmation of how many audio objects are playing
                    feedback.innerText =  ButtonsPlaying.length + " audio files ready for playback";   
                    
                    // connecting the " feedback " node object with css styling 
                    feedback.className = "loggingStyle";  


                     }





                    playButton.innerText = "Log " +logCounter;   
                    


                    playButton.className = "testbuton";   // connecting the " playButton " node object with css styling
                 
                   
                     test = "newbutton"+logCounter;           // adding the new ID number as string to the test variable 

                     playButton.setAttribute("id", test);     // adding a ID string to the  new "playButton"


                     console.log(test, " testing if its a another string ");
                     console.log(playButton.id, "this is the log string fuck!!!"); // this is good 
                     
                     playButton.onclick =  function() { pauseplay(this.id); };   // playbutton fires only when clicked



                     var destinationNode2 = document.getElementsByTagName('div')[2]; //test- pick the destination parent node/tag

                         destinationNode2.appendChild(playButton);

                     var destinationNode = document.getElementsByTagName('div')[2]; //test- pick the destination parent node/tag

                         destinationNode.appendChild(feedback);      // test


                            

                          hello();

               			function hello() {
                        
                        //create a new array that stores audio combination
  					    var loggedButtons = [];                 

                           for(var x=0; x < ButtonsPlaying.length; x++){

                                 // using jqury for deep copy of the Temp array
                                 loggedButtons[x] = jQuery.extend(true, {}, ButtonsPlaying[x]); 
  
                          }
                         // meant to test if a deep copy did occure and both objects are referencing the same address
                        console.log(loggedButtons, "this the copy");     
                        console.log(ButtonsPlaying, "this the global");     

                            
					    // the copy of the Temp array is now permatently stored in a sessionStorage
						sessionStorage.setItem(test,JSON.stringify(loggedButtons));     
                           
                           
             		            } 
							}


                       function refresh(){


               	               // this is where all the buttons that have been clicked get turned off for the next log
                            for (var num=0;  num < ButtonsPlaying.length; num++){

                    		     console.log("Turn off all button after after the refresh button is clicked ");
 	                                   
                        	         
     									 if (!(ButtonsPlaying[num].paused)){

            						     testingID[num].style.backgroundColor = "rgba(80,80,80,0.7)";
						                 testingID[num].style.borderRadius = "0px";
									 
									 	 ButtonsPlaying[num].pause();
									 	 ButtonsPlaying.splice(num,1); 
									 	 testingID.splice(num,1); 
									 	 
									 	 // index next index gets skipped somewhere aroud this part of the code

									 	 num -= 1;      // every other index was getting skipped so this line moves to the previous index

									 						
								         }
								        
								     }

							 console.log("what is the size of this array :"+ ButtonsPlaying.length);
                   	
                              }

                       



						 // test is the ID of the logg button that been clicked
	                    function pauseplay(test){                      				

                        		var object = [];

                                // first looks for an session storage objects that has the test/id then traverses though every index determined by length 
                                for (var index=0; index <(JSON.parse(sessionStorage.getItem(test)).length); index++ ) {     
                           
   								// assigning the object in the session storage to the new temp object array called "Object".Passed by value. 
                    			object.push((JSON.parse(sessionStorage.getItem(test))[index]));     	

 					}

                          /* searches and compares every index in a Copy Session Storage(Object) with the "Global_Audio_Array(global)" 
                           until the correct audio files are played or paused */
                           for (var i =0; i < object.length; i++){     

                              
                                  
                                  for (var x=0; x < Global_Audio_Array.length; x++){
                                              

                                              

                                      if (object[i].src === Global_Audio_Array[x].src){

                                             console.log(object[i]+ "and global "+ Global_Audio_Array[x]+ "are the same"); 
                                               if(Global_Audio_Array[x].paused){

                                                Global_Audio_Array[x].play(); 
                                                var variable = Global_Audio_Array[x].id;
                                                console.log(variable);

               									


                                                }

                                              else  {
 							                  Global_Audio_Array[x].pause();


                                             }
                                              

                                        }

                                      else{

                                         console.log("not a match..next"); 
                            	
                            	}
                            }
                        }
               }
           



   









                  


                 

                      

				



           	
           





