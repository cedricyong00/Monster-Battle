# Monster-Battle
A recreation of pokemon's battle scene concept, while adding in new features, like looping the game until the player loses to the computer.

User would have 4 different attacks to choose from, with each having their own effectiveness of damage and accuracy. The user also has 3 different buffs that can either help them sustain longer in the battle or win the battle more effectively.

Language used for the game : Javascript, CSS, HTML

Game URL : cedricyong00.github.io/Monster-Battle

Planned future enhancements : 
- Adding of visual effects for the attacks
- Support of mobile's screen resolution

Pseudocode :
1) Define required constants
   - Define the possible attacks that my monster and opponent's are possible to choose from (minimum 4), each containing a different attack damage and accuracy
   - Define all the buffs and potions that will affect the game
   - Define the nature of elements of the monsters

2) Define required variables used to track the state of the game
   - Use a turn variable to define whose turn it is
   - Use 'HP' as a variable to track the health of the pokemon

3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
   - Store 'Stage' variable to determine which level of the game the player is at
   - Store the opponent's monster variable in the data and increases the difficulty of it as the game progresses
     
4) Upon loading the app should:
  4.1) Initialize the state variables
   - Initialize whose turn it would be first
   - Initialize the display format where the monsters would be in the middle and followed by the health bar above and below the monster's image
  4.2) Render those values to the page
     - Render the message to declare the winner if the health goes to 0
     - Render the message of the end-result of the attack that the user chose, after including the consideration of the attack and damage, followed by the effectiveness of the damage.

5) Handle a player clicking
    - Attack and update the monster's health
    - Heals the health if a potion is used and update it
    - Buff the attack for only the next turn if buff is used

6) Handle a player clicking the replay button
    - Restarts the game
  
7) Handle a player hovering over the elements
   - Pop-ups a brief explanation of the element
