'use strict'


describe('pacman controllers', function() {

  beforeEach(module('pacmanApp'));
  beforeEach(module('pacmanServices'))

  describe('gameController', function() {
    var scope, ctrl, cell, createBoard, board, pacman, createCell, createPacman

    beforeEach(inject(function($rootScope, $controller, $injector) {
       
       scope = $rootScope.$new()
       ctrl = $controller('gameController', {$scope: scope})
       createCell = function() {
            return $injector.get('Cell')
        }
        createBoard = function() {
            return $injector.get('Grid')
        }
         createPacman = function() {
            return $injector.get('Pacman')
        }


        cell = createCell()
        board = createBoard()
        pacman = createPacman()

      }))


      it('the cell service should be available for testing the gameController', function() {
        expect(cell).toBeTruthy();
      })

       it('the grid service should be available for testing the gameController', function() {
        expect(board).toBeTruthy();
      })

      it('the pacman service should be available for testing the gameController', function() {
        expect(pacman).toBeTruthy();
      })





  })


})