// WE ARE NOT USING THIS CODE RIGHT NOW. WE RAN OUT OF TIME.
// WE ARE NOT USING THIS CODE RIGHT NOW. WE RAN OUT OF TIME.
// WE ARE NOT USING THIS CODE RIGHT NOW. WE RAN OUT OF TIME.
// WE ARE NOT USING THIS CODE RIGHT NOW. WE RAN OUT OF TIME.

// "use strict";


// app.controller("OneBoardCtrl", function ($routeParams, $scope, $location, PinFactory) {


//   PinFactory.getSingleBoard($routeParams.boardId)
//   .then( (singleBoard) => {
//     console.log("inside getSingleBoard", singleBoard);
//     console.log($routeParams.boardId)
//     let boardId = $routeParams.boardId
//     $scope.board = singleBoard;
//     console.log($scope.board);
//     PinFactory.getUserPins(boardId)
//       .then( (pinsOnBoard) => {
//         return pinsOnBoard;
//       });
//     return singleBoard;
//   });

//   $scope.editOneBoard = () => {
//     PinFactory.updateBoard($routeParams.boardId)
//     //what is the name of her editboard object to be passed in here?
//       .then( (response) => {
//         $location.url("/oneBoard/:{boardId}");
//       });
//   };

//   $scope.deleteOneBoard = (boardId) => {
//     console.log("you are in deleteOneBoard");
//     PinFactory.deleteABoard(boardId)
//     .then( (response) => {
//       $location.url("/allBoards");
//       //how delete the pins on this board too?
//     });
//   };

//   $scope.deletePinOnBoard = (pinId) => {
//     console.log("you are in deletePinOnBoard");
//     PinFactory.deletePin(pinId)
//       .then( (response) => {
//         $location.url("/oneBoard/:{boardId}");
//       });
//   };
// });
