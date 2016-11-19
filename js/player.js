/* this is the player javascript file.It will handle sound loops 
functionalities */

	
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


              
// global log counter variable 
                  var logCounter = 0; 

              // array that stores playing audio objects / global variable 
              var ButtonsPlaying = []; 
              var sessionStorage = [];   // session_storage array that stores all of the newly created array elements 
              

            //this id is passed as an argument to the playpause method to test later on. 
			function playPause(buttonID){

                    // this id is get access to the dom elements that contains the id
					var property = document.getElementById(buttonID);  
					var button; 
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
						ButtonsPlaying.push(button); 


					}
					else {
						button.pause();
						property.style.backgroundColor = "rgba(80,80,80,0.7)";
						property.style.borderRadius = "0px";

						// traverses through the array to remove paused objects 
						for (var i=0; i < ButtonsPlaying.length; i++){
                         
                         if (ButtonsPlaying[i].paused){
                         	ButtonsPlaying.splice(i,1); 
                         }

					}
                        
                       }
              
                    console.log(ButtonsPlaying.length); 
              

				}
                  
                 


           function log(){
           	           
           	        logCounter++; 
                    
                    console.log("this the end of the session" + ButtonsPlaying.length );
                    var newElement = document.createElement("p"); 
                    
                    var playButton= document.createElement("button"); //test  create the element

                    newElement.innerText = "Logging Button" + " "+ logCounter+ "  has "+ ButtonsPlaying.length +" objects";   // confirmation of how many audio objects are playing

                    playButton.innerText = "log"+ logCounter;  // test


                     newElement.className = "loggingStyle"; 
                     playButton.className = "testbuton";   // test
                     playButton.id = "newbutton"+logCounter;          // assinging the id of newbutton a concatinated string
                     playButton.onclick =  function() { getData(this.id); };   // playbutton fires only when clicked

                     var destinationNode2 = document.getElementsByTagName('div')[2]; //test- pick the destination parent node/tag

                         destinationNode2.appendChild(playButton);

                     var destinationNode = document.getElementsByTagName('div')[2]; //test- pick the destination parent node/tag

                         destinationNode.appendChild(newElement);      // test





                         }





                         // test storing the objects selected into the newly created blue play button
                         
                       function getData(newbuttonID){

                       var loggedButtons =  new Array();                 //create a new array that stores audio combination

                       for(var x=0; x < ButtonsPlaying.length; x++){

                       loggedButtons[x] = jQuery.extend(true, {}, ButtonsPlaying[x]);   // using jqury for deep copy

                       window.anime = loggedButton;    // this is suppose to be act like a global session storage 

                       anime.push(newbuttonID);  // pushing the id to the end of  the array





                       // lets see if this works 
                       // i want to create a global storage objects that holds an array of window.animes elements 


                            }                       
                       loggedButtons[0] = 2;           // this is too test if the deep copy works/ this will removed in later 

                           
                      console.log(ButtonsPlaying, "this the orginal");

                       // checking if the elements from the global variable is getting store in new loggedButton
                       console.log(anime, "this is the deep copy");

                       // checking  to see  if the js created id attribute was passed to the getData method
                       console.log(document.getElementById(newbuttonID)) ;  


                       pauseplay(anime,newbuttonID); 


                       }
               
                      function pauseplay(new_global_array, newbuttonId){
                        
                       
                      for (var index =0; index < new_global_array.length; index++){

                         if(new_global_array[index].paused){
                         new_global_array[index].play; 

                       }
                      else{
                        new_global_array[index].paused; 

                      }


                  }
              }
                       
  

                       
                       
                      

                 





                        
                    

                  
                



           
                     //playingAudio = function(NEWARRAY){
						//for (var i=0; i < NEWARRAY.length; i++){
						//	NEWARRAY[i]
                    // }


                  


                 

                      

				



           	
           





