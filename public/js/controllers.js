'use strict';

/* Controllers */

var pacmanControllers = angular.module('pacmanControllers', []);

pacmanControllers.controller('gameController', ['$scope', 'Cell', 'Grid', 'Pacman', function($scope, Cell, Grid, Pacman) {
    
 

  setupGame()

  

  function setupGame() {
    var cell = new Cell
    var board = new Grid
    board.factory(Cell)
    var pacman = new Pacman
    board.placing(pacman, '1:1')

    $scope.pacman = pacman
    $scope.cellName = cell.name
    $scope.boardSize = board.size
    $scope.board = board
    $scope.isResponded = false
  }


     $scope.keypress = function(keyEvent) {
       ($scope.isResponded == true) ? $scope.isResponded = false : $scope.isResponded = true
      
        console.log('Which?',keyEvent.which)
        console.log('type',keyEvent.type)
        console.log('keypress', keyEvent);
    };

//key event pacman.move
//watch on table to update content
//imgsrc to render the pacman in the the grid







 }]);


