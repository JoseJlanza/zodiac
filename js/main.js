//zodiac signs 

 //an array with multiple objects, each with multiple properties. Use a for loop to console.log the various properties.

var zodiac = [   
     {
        sign : "Aries",
        Strengths: "Courageous, determined, confident, enthusiastic, optimistic, honest, passionate",
        weakness :  "Impatient, moody, short-tempered, impulsive, aggressive",
        img:""
      },
      {
        sign : "Taurus",
        Strengths : "Reliable, patient, practical, devoted, responsible, stable",
        weakness : "Stubborn, possessive, uncompromising",
        img :""
            
      },
      {
        sign : "Gemini",
        Strengths : "Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas.",
        weakness : "Nervous, inconsistent, indecisive",
        img:  "img/png/gemini.png"
      },
      {
        sign : "Cancer",
        Strengths : "Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive",
        weakness : "Moody, pessimistic, suspicious, manipulative, insecure",
        img: "img/png/cancer.png"
      },
      {
        sign : "Leo",
        Strengths : "Creative, passionate, generous, warm-hearted, cheerful, humorous",
        weakness : "Arrogant, stubborn, self-centered, lazy, inflexible",
        img: "img/png/leo.png"
      },
      {
        sign : "Virgo",
        Strengths : "Loyal, analytical, kind, hardworking, practical",
        weakness : "Shyness, worry, overly critical of self and others, all work and no play",
        img: "img/png/virgo.png"
      },
      {
        sign : "Libra",
        Strengths : "  Cooperative,diplomatic, gracious, fair-minded, social",
        weakness : "Indecisive, avoids confrontations, will carry a grudge, self-pity",
        img: "img/png/libra.png"
      },
      {
        sign : "Scorpio",
        Strengths : "Resourceful, brave, passionate, stubborn, a true friend",
        weakness : " Distrusting, jealous, secretive, violent",
        img: "img/png/scorpio.png"
      },
      {
        sign : "Sagittarius",
        Strengths :"Generous, idealistic, great sense of humor ",
        weakness : " Promises more than can deliver, very impatient, will say anything no matter how undiplomatic",
        img: "img/png/sag.png"
      },
      {
        sign : "capricorn" ,
        Strengths : "Responsible, disciplined, self-control, good managers",
        weakness : " Know-it-all, unforgiving, condescending, expecting the worst",
        img: "img/png/capricorn.png"
      },
      {
        sign : "Aquarius",
        Strengths : "rogressive, original, independent, humanitarian",
        weakness : "Runs from emotional expression, temperamental, uncompromising, aloof",
        img: "img/png/aquarius.png"
      },
      {
        sign : "Pisces",
        Strengths : " Compassionate, artistic, intuitive, gentle, wise, musical",
        weakness : "Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr",
        img: "img/png/pisces.png"
    }
  ];


// this is code so the enter key also fires (runs/inivokes/instantiates the function)

var btn = document.getElementById ('userdata');
btn.addEventListener('keypress',function enterKey(e) {
  if(e.keyCode == 13) {
    horoscope();
  };

}, false);

//function to determine user horoscope, function fires on user clickinig button line 24 index.html

 function horoscope() {

  //store the tag with id="sign" in var userData

  var userdata = document.getElementById("userdata");

  //confirms the element exists and what value the user submits
  console.log(userdata);

  console.log("users value is: " + userdata.value);

  //loop through zodiac array one item at a time
   for(var i = 0; i < zodiac.length; i = i + 1) {
    // check what the users value is before using it in a condition
     console.log("users value lowercase is: " + userdata.value.toLowerCase());
    //check the current item's sign in the zodiac array
     console.log("current zodiac in loop is: " + zodiac[i].sign);

    //if the value of the user typed in, changed to all Lowercase letters, is equal to one of our signs, then we do something 

     if(userdata.value.toLowerCase() === zodiac[i].sign.toLowerCase()){

      //confirm the if statement ran
       console.log("if statement ran");

      //check some values in the console before updating HTML
      console.log("users typed in: " + userdata.value);
       console.log("current image value is: " + zodiac[i].img);
      console.log("current Strengths value is: " + zodiac[i].Strengths);
      console.log("current weakness value is: " + zodiac[i].weakness);

      //get element with id="userSign" and change the text to the user input 
      document.getElementById("yourSign").textContent = userdata.value;

      // get element with id="icon" and change source attribute to current zodiac image path
      document.getElementById("icon").src = zodiac[i].img;

      //get element with id="your horoscope".textContent to this concatenated string
      document.getElementById("yourHoroscope").textContent = "Your strengths: " + zodiac[i].Strengths;
      // get element with id="yourWeakness".textContent to this concatenate string 
      document.getElementById("yourWeakness").textContent = "Your weakness : "
      + zodiac[i].weakness;

      // stop the function because we found a match and added the data to the screen!!! 
      return; 
     };

    //comfirm no match is found,if thats the case
    console.log("no matches were found, user failed to type in a correct zodiac sign");
    //if no match is found, do opposite of above, mostly clearing content and images

    document.getElementById("yourSign").textContent = "Not one of the signs. Try again";
    document.getElementById("yourHoroscope").textContent = "";
    document.getElementById("icon").src = "";
    document.getElementById("yourWeakness").textContent = "";
  };

};

 	
 





