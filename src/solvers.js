/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = [];
  
  var rowGenerator = function (n, rowNumber) {
    var result = [];
    for (var i = 0; i < n; i++) {
      if (i === rowNumber) {
        result.push(1);
      } else {
        result.push(0);
      }
    }
    return result;
  };  

  for (var i = 0; i < n; i++) {
    solution.push(rowGenerator(n, i));
  }

  console.log(solution);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // var solution = undefined; //fixme
  var solutionCount = 0;
  var checkBoards = function (n, board, rowOptions, colOptions, tempRowOptions, tempColOptions) {
    // If Board is empty return
    // if (n === 0) {
    //   return;
    // }
    board = board || new Board({n:n});
    console.log('start board', board.rows());
    debugger;

    // console.log('start rowOptions', rowOptions)
    rowOptions = rowOptions || _.range(n);
    // console.log('start colOptions', colOptions)
    colOptions = colOptions || _.range(n);


    if (rowOptions.length === 0 && colOptions.length === 0) { // exit when you ran out of options
      // console.log(board.rows());
      solutionCount++;
      return;
    }
    // if (rookCount !== n) {
    //   //may need to add if (rookcount !== n)
    //   return;
    // }
    tempRowOptions = tempRowOptions || rowOptions.slice();
    tempColOptions = tempColOptions || colOptions.slice();
    for (var i = 0; i < tempRowOptions.length; i++) {
      for (var j = 0; j < tempColOptions.length; j++) {
        var rightCoordinate = rowOptions[i]; //item in rowOptions
        var leftCoordinate = colOptions[j];
        board.togglePiece(rightCoordinate, leftCoordinate);        
        rowOptions.splice(i, 1); // remove that coordinate from options        
        colOptions.splice(j, 1); // remove that coordinate from options
        // rowOptions.splice(r, 1);
        // colOptions.splice(c, 1);
        checkBoards(n, board, rowOptions, colOptions, tempRowOptions, tempColOptions);
        console.log('n', n, 'board', board.rows(), 'rowOptions', rowOptions, 'colOptions', colOptions);
      }
    }
  };
  checkBoards(4);
  // checkBoards(n);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
