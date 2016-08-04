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
  var checkBoards = function (board, rowOptions, colOptions) {
    board = board || new Board({n:n});
    rowOptions = rowOptions || range(n);
    colOptions = colOptions || range(n);

    if (rowOptions.length === 0 || colOptions.length === 0) { // exit when you ran out of options
      solutionCount++;
    }

    for (var r = 0; r < rowOptions.length; r++) {
      for (var c = 0; c < colOptions.length; c++) {
        Board = Board.toggle(r,c);
        rowOptions = rowOptions.splice(r, 1);
        colOptions = colOptions.splice(c, 1);
        checkBoards(Board, rowOptions, colOptions);
      }
    }
  }
  checkBoards(n);
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
