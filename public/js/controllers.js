'use strict';

/* Controllers */

var pacmanControllers = angular.module('pacmanControllers', []);

pacmanControllers.controller('gameController', ['$scope','Cell' ,'Corridor', 'Wall', 'Pacman', 'Dot', 'Ghost', 'Maze',  function($scope, Cell, Grid, Pacman, Corridor, Maze) {
      
  
      // var cell = new Cell
      // var pacman = new Pacman
      // var maze = new Maze(30, 30)
     

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










