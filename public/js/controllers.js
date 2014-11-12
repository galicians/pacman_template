'use strict';

/* Controllers */

var pacmanControllers = angular.module('pacmanControllers', []);

pacmanControllers.controller('gameController', ['$scope','Cell' ,'Corridor','Pacman', 'Wall', 'Dot', 'Ghost', 'Maze', 'Layout', function($scope, Cell, Corridor, Pacman, Wall, Dot, Ghost, Maze, Layout) {


      var cell = new Cell
      var corridor = new Corridor
      var pacman = new Pacman
      var wall = new Wall
      var dot = new Dot
      var ghost = new Ghost
      var maze = new Maze(30, 30)
      var layout = Layout
      maze.generate(new Cell)
      // maze.cells[0].content = 'hello'
      // console.log(maze.cells[0].content)
      maze.populateWalls(layout, wall)
      console.log(maze)
      // layout.forEach(function(position) { console.log(maze.cells[position].content) } )




      // var array = []
      // layout.forEach( function(position) { array.push(position)})
      // console.log(array)
     //  console.log(cell)
     // console.log( corridor)
     // console.log( pacman)
     // console.log( wall)
     // console.log( dot)
     //  console.log(ghost)
      // console.log(maze)
     //  console.log(layout)


      // maze.place(arrayWalls)




  // setupGame()

 }]);


  // function setupGame() {
  //   var cell = new Cell
  //   var board = new Grid
  //   board.factory(Cell)
  //   var pacman = new Pacman
  //   board.placing(pacman, '1:1')
  //   $scope.cell = cell
  //   $scope.pacman = pacman
  //   $scope.cellName = cell.name
  //   $scope.boardSize = board.size
  //   $scope.board = board
  //   $scope.isResponded = false
  // }


  //    $scope.keypress = function(keyEvent) {
  //      ($scope.isResponded == true) ? $scope.isResponded = false : $scope.isResponded = true
  //       console.log('pacman initial pos',  $scope.pacman.currentCell)
  //       $scope.board.removeContent(Cell,  $scope.pacman.currentCell)
  //       $scope.pacman.move(keyEvent.keyIdentifier)
  //       $scope.board.placing( $scope.pacman,  $scope.pacman.currentCell)
  //       console.log('pacman final pos',  $scope.pacman.currentCell)
  //   };

      // $scope.board.$watch()
      // function()
      // // angular.copy( $scope.pacman.board )
      // return

//watch on table to update content
//imgsrc to render the pacman in the the grid










