#Zombie Outbreak

##Contents
---
  * What It Is
  * What We Used
  * Challenges and Solutions
  * MVP
  * Our Stretch Goals
  * Authors
  * Screenshots
  * Github Link
  * Code Examples

##What It Is
---
This is a collaborative project where we made a game utilizing the front-end knowledge gained so far. We made an interactive game where the user has to prevent the growing zombie horde from getting to the center of the city by whatever means necessary. As time goes on, the game increases in diffulty with respectively equal perks for getting that far. Survive as long as you can!

##What We Used
---
The following languages and APIs were used:
  * HTML
  * CSS / SASS
  * JavaScript
  * jQuery
  * Leaflet
  * Math (lots and lots of math)

##Challenges and Solutions
---
This project was not without its stumbling blocks from the beginning. We solved most problems in a timely manner, but at times we had to pivot entirely in order to work within the restrictions of the API.

  * Challenge #1: Switching APIs
	At the beginning of our project, we were originally going to use the Mapbox API to build our game, but upon closer inspection we realized Mapbox was actually a plugin for the Leaflet API, which had much broader functionality and a variety of features and plugins that would better suit our needs. This was early in the project though, so we were able to convert our current code base into Leaflet and be at the same place. Pivot 1.

  * Challenge #2: Rogue scripts in the bottom of our code
  	We moved along for a while figuring out how to generate random markers on the map, which worked well. Then we hit another snag - for some reason we couldn't add event listeners to our markers (zombies), and no one could figure out why. For a few hours we were paralyzed combing through the code, and examples online trying to find a solution or workaround. By finally isolating each bit of code in our index.html page, we found a rogue Mapbox script that was messing everything up. Once it was commented out the click listener worked. And we could click zombies and they'd disappear. Bingo.

  * Challenge #3: Implementing different zombie weapons 
    Zombies could now be eliminated by clicking directly on them on the map, but that wasn't good enough. We wanted special tools that could kill multiple zombies at once. We came up with a radius blast that wiped them out (by identifying the markers inside its radius and removing them as well as taking them off of an array list), we also had a chainsaw function that would appear



##MVP (Minimum Viable Product)
---
The MVP for this project was achieved relatively quickly once we got a general idea of the power and scope of the Leaflet API, which is quite extensive. 

Our first MVP iteration included:
  * The zombies randomly generating inside our predefined map bounds.
  * Being able to click the zombies and remove them from the map (i.e. kill them).
  * End the game when the zombies overtook the map beyond the point of redemption.

Since we got a working code base of these features done with days to go, we moved on to our stretch goals detailed below.  

##Our Stretch Goals
---
We got to work on our stretch goals almost before the MVP was done, and they've evolved over time as we hit roadblocks along the way and got better acquainted with the intricacies of Leaflet.

Our second game iteration, which we dubbed the IVP (Intermediate Viable Product), included the following features:
  * A menu item to keep track of game features like upgraded weapon options (bombs and chainsaws), a score counter to count the zombies eliminated and a start / restart button for the game.
  * Better CSS styling of the game.
  * Randomly dropping the starting zombies outside a certain radius of the middle point of the city and then having them slowly move towards the center where the homebase would be set up.

Because we were ambitious, we even defined a third set of goals we dubbed the AVP (Advanced Viable Product). This was where our dreams for this game's scope got really lofty:
  * Make the zombie outbreak national in scope instead of limiting it to the city of Atlanta.
  * Create different levels of weapons doing different levels of damage to the zombie hordes as the map gets more and more crowded with them.
  * Build a storyline giving players some background in to what's happening and how to fight the outbreak. Set up multiple landmarks on the map as places to defend.
  * Add in a cheesy zombie video.

It's safe to say the plans for this game got bigger and grander as the week progressed.

##Authors
---
  * Eric Ettensohn
  * Paige Niedringhaus
  * David Pirie
  * JT Townsend

##Github Link
---
[Github](https://github.com/paigen11/frontend-project)

##Screenshots
---
TBD
![alt text]()

##Code Examples
---
TBD