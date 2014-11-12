'use strict'


describe('pacman controllers', function() {

  beforeEach(module('pacmanApp'));
  beforeEach(module('pacmanServices'))

  describe('gameController', function() {
    var scope, ctrl, cell, createCell, corridor,createCorridor, pacman, createPacman, wall, createWall, dot, createDot, ghost, createGhost,
    maze, createMaze, layout, createLayout

    // dot, createCorridor, wall, createWall, createDot, ghost, createGhost, pacman, createPacman,  layout, createLayout

    beforeEach(inject(function($rootScope, $controller, $injector) {

       scope = $rootScope.$new()
       ctrl = $controller('gameController', {$scope: scope})

        createCorridor = function() {
            return $injector.get('Corridor')
        }
        createCell = function() {
            return $injector.get('Cell')
        }
        createWall = function() {
            return $injector.get('Wall')
        }
        createDot = function() {
            return $injector.get('Dot')
        }
        createGhost = function() {
            return $injector.get('Ghost')
        }
        createPacman = function() {
            return $injector.get('Pacman')
        }
        createMaze = function() {
            return $injector.get('Maze')
        }
        createLayout = function() {
            return $injector.get('Layout')
        }

        wall = createWall()
        corridor = createCorridor()
        cell = createCell(corridor)
        dot = createDot()
        ghost = createGhost()
        pacman = createPacman()
        maze = createMaze()
        layout = createLayout()


      }))


     it('the corridor service should be available for testing the gameController', function() {
        expect(corridor).toBeTruthy();
      })

     it('the cell service should be available for testing the gameController', function() {
        expect(cell).toBeTruthy();
      })

      it('the wall service should be available for testing the gameController', function() {
        expect(wall).toBeTruthy();
      })

      it('the dot service should be available for testing the gameController', function() {
        expect(dot).toBeTruthy();
      })

       it('the ghost service should be available for testing the gameController', function() {
        expect(ghost).toBeTruthy();
      })

        it('the pacman service should be available for testing the gameController', function() {
        expect(pacman).toBeTruthy();
      })

      it('the maze service should be available for testing the gameController', function() {
        expect(maze).toBeTruthy();
      })

      it('the layout service should be available for testing the gameController', function() {
        expect(layout.length).toEqual(443);
      })






    })


})