'use strict';

/* Services */
var pacmanServices = angular.module('pacmanServices',[])




pacmanServices.factory('Cell', [ function() {

  var Cell = function(){
  this.content
  this.temporaryContent = null;
  }
  return Cell

}])

pacmanServices.factory('Corridor', [ function() {

  var Corridor = function(){
  this.name = 'available'
  }
  return Corridor

}])


pacmanServices.factory('Pacman', [ function() {

  var Pacman = function(){
  this.lifeCount = 3
  this.pointCount = 0
  this.location = 466;
  this.name = 'pacman'

};

  Pacman.prototype.loseLife = function() {
    var self = this
    self.lifeCount -=1;
  };

  Pacman.prototype.gainOnePoint = function() {
    var self = this
    self.pointCount +=1;
  };

  Pacman.prototype.moveRight = function() {
    var self = this
    self._leaveCell(self.location);
    if (self.maze.cells[self.location + 1].content instanceof Wall){
      return self.location}
    else{
      self.location +=1;
      self._enterCell(self.location)
    }
  };

  Pacman.prototype.moveLeft = function() {
    var self = this
    self._leaveCell(self.location);
     if (self.maze.cells[self.location - 1].content instanceof Wall){
      return self.location}
    else{
      self.location -=1;
      self._enterCell(self.location)
    }
  };

  Pacman.prototype.moveUp = function() {
    var self = this
    self._leaveCell(self.location);
     if (self.maze.cells[self.location - self.maze.width].content instanceof Wall){
      return self.location}
    else{
      self.location -=self.maze.width;
      self._enterCell(self.location)
    }
  };

  Pacman.prototype.moveDown = function() {
    var self = this
    self._leaveCell(self.location);
    if (self.maze.cells[self.location + self.maze.width].content instanceof Wall){
      return self.location}
    else{
      self.location += self.maze.width;
      self._enterCell(self.location)
    }
  };

  Pacman.prototype._leaveCell = function(location) {
    var self = this
    self.maze.cells[location].content = new Corridor;
  };

  Pacman.prototype._enterCell = function(location) {
    var self = this
    self._checkGhost(location);
    self._eatDot(location);
    self.maze.cells[location].content = self
  };

  Pacman.prototype._eatDot = function(location) {
    var self = this
    if(self.maze.cells[location].content instanceof Dot)
      self.pointCount +=1;
  };

  Pacman.prototype._checkGhost = function(location) {
    var self = this
    if(self.maze.cells[location].content instanceof Ghost)
      self.lifeCount -=1;
  };

  return Pacman

}])

pacmanServices.factory('Wall', [ function() {

  var Wall = function(){
  this.name = 'wall'
  }
  return Wall

}])

function Dot(){
  this.name = 'dot'
};

pacmanServices.factory('Dot', [ function() {

  var Dot = function(){
  this.name = 'dot'
  }
  return Dot

}])


pacmanServices.factory('Ghost', [ function() {

  var Ghost = function() {
    this.name = 'ghost'
    this.location = 253; 
  };

  Ghost.prototype.moveRight = function() {
    var self = this
    self._leaveCell(self.location);
    if (self.maze.cells[self.location + 1].content instanceof Wall){
      return self.location}
    else{
      self.location +=1;
      self._enterCell(self.location)
    }
  };

  Ghost.prototype.moveLeft = function() {
    var self = this
    self._leaveCell(self.location);
     if (self.maze.cells[self.location - 1].content instanceof Wall){
      return self.location}
    else{
      self.location -=1;
      self._enterCell(self.location)
    }
  };

  Ghost.prototype.moveUp = function() {
    var self = this
    self._leaveCell(self.location);
     if (self.maze.cells[self.location - self.maze.width].content instanceof Wall){
      return self.location}
    else{
      self.location -= self.maze.width;
      self._enterCell(self.location)
    }
  };

  Ghost.prototype.moveDown = function() {
    var self = this
    self._leaveCell(self.location);
    if (self.maze.cells[self.location + self.maze.width].content instanceof Wall){
      return self.location}
    else{
      self.location += self.maze.width;
      self._enterCell(self.location)
    }
  };

  Ghost.prototype._leaveCell = function(location) {
    var self = this
    self.maze.cells[location].content = self.maze.cells[location].temporaryContent;
  };

  Ghost.prototype._enterCell = function(location) {
    var self = this
    self.maze.cells[location].temporaryContent = self.maze.cells[location].content
    self.maze.cells[location].content = self;
  };

  return Ghost

}])




pacmanServices.factory('Maze', [ function() {

  var Maze = function(width, height){
    this.width = width;
    this.height = height;
    this.size = width * height;
    this.cells = [];
  };

  Maze.prototype.generate = function() {
    var self = this
    for(var i=0; i < self.size; i++){
        self.cells.push(new Cell)
    }
  };

  Maze.prototype.populateWalls = function(arrayWalls, wall) {
    var self = this
    arrayWalls.forEach( function(position) {  self.place(wall, position) })
  }


  Maze.prototype.addPacman = function(pacman) {
    var self = this
    self.pacman = pacman;
    self.pacman.maze = this;
  };

  Maze.prototype.place = function(object, index) {
    var self = this
    self.cells[index].content = object;
  };

  Maze.prototype.addGhost = function(ghost) {
    var self = this
    self.ghost = ghost;
    self.ghost.maze = this;
  };

  return Maze

}])

pacmanServices.factory('Layout', [ function() {

  var walls=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 37, 51, 60, 61, 63, 64, 65, 67, 69, 70, 72, 73, 74, 75, 76, 78, 79, 81, 83, 84, 85, 87, 88, 89, 90, 91, 93, 99, 102, 104, 106, 109, 111, 113, 120, 121, 123, 125, 126, 127, 129, 131, 132, 134, 136, 137, 139, 141, 143, 145, 146, 147, 148, 150, 151, 155, 159, 161, 164, 167, 169, 173, 178, 180, 181, 182, 183, 185, 187, 188, 189, 191, 197, 199, 200, 201, 202, 203, 206, 208, 210, 211, 215, 221, 227, 236, 238, 240, 241, 243, 244, 245, 247, 248, 249, 251, 257, 259, 260, 261, 262, 263, 264, 266, 268, 270, 271, 275, 279, 281, 287, 289, 296, 298, 300, 301, 302, 303, 305, 306, 307, 309, 311, 317, 319, 321, 322, 323, 324, 325, 326, 328, 330, 331, 339, 341, 347, 349, 360, 361, 363, 364, 365, 366, 367, 369, 371, 372, 373, 375, 376, 377, 379, 381, 382, 384, 386, 387, 388, 389, 390, 391, 414, 420, 421, 422, 423, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 438, 439, 440, 441, 442, 444, 445, 446, 447, 448, 450, 451, 459, 472, 474, 478, 480, 481, 483, 484, 485, 486, 487, 489, 491, 492, 493, 494, 496, 497, 498, 500, 502, 504, 506, 508, 510, 511, 515, 519, 521, 530, 532, 534, 536, 538, 540, 541, 542, 543, 545, 547, 549, 551, 553, 554, 555, 556, 557, 558, 560, 562, 566, 568, 570, 571, 575, 577, 579, 581, 590, 592, 593, 594, 596, 598, 600, 601, 603, 605, 607, 611, 613, 615, 616, 617, 618, 619, 620, 624, 626, 628, 630, 631, 633, 635, 637, 638, 639, 640, 641, 643, 645, 652, 654, 656, 658, 660, 661, 663, 665, 667, 673, 675, 677, 678, 679, 680, 682, 684, 686, 688, 690, 691, 693, 695, 697, 699, 700, 701, 702, 703, 705, 707, 712, 714, 718, 720, 721, 723, 725, 727, 735, 737, 739, 746, 748, 750, 751, 753, 757, 759, 760, 761, 762, 763, 765, 769, 771, 772, 773, 774, 775, 776, 778, 780, 781, 783, 785, 787, 793, 795, 797, 799, 808, 810, 811, 813, 815, 817, 819, 821, 823, 825, 827, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 840, 841, 845, 849, 851, 855, 857, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900]

  return walls
  
}])











