


// ----------------------- Functions Library -------------------------------------- //

function Randomly_Place(object) {
	
}

function Character_Next_To(object, direction) {
	
}

function Move_Character() {
	
}

function Create_Object() {
	
}



// ---------------------------- Classes -------------------------------- //

function GameState() {
	this.score
	this.level
	this.CharacterList
	this.ItemList
}


function Character() {
	this.images = ["left.png","right.png","up.png","down.png"]; 
	this.position
	this.height
	this.width

	this.actionImages
	this.Move_Character()
}

function Flower() {
	this.type 
	this.bloom_time
	this.points
	this.position
	this.height
	this.width

	this.ImageList = ["flower_before.png", "flower.png", "flower_after.png"];
	this.ImageEaten = "eaten_flower.png";
	
	this.bloom()
	this.eat()
}

function Obstacle() {
	this.type
	this.height
	this.width

	this.OvercomeImage
}

function Enemy() {
	this.image
	this.position
	this.height
	this.width

	this.MovementFunction()
	this.victorious()
	this.defeated()
}

// ---------------------------------- Game ------------------------------------ //

Dino = new Character();