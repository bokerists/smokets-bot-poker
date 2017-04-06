
/// <reference path="custom-types.d.ts" />

exports = module.exports = {

  VERSION: 'Superstar poker typescript-player',

  bet: function (gamestate : IGamestate) : number {

    //
    // gamestate contains info about the state of the game.
    // check the documentation at https://bot-poker.herokuapp.com/wiki#gamestate for further info about the data structure.

    //
    // you just have to return the amount that you want to bet.



    // enjoy the game!

    //
    // currently we just fold every single hand.

    'use strict';

    console.log(`Currently playing tournament ${gamestate.tournamentId}`);

    return 0;

  }

};