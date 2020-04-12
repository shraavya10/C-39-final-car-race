class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }
//to get the information on the playerCount
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

//update the count
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
//To update the name and distance of the player
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  //to get all the players' information using a static function
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
