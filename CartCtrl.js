app.controller("CartController",
  ["$scope","bookService",function($scope,bookService) {
    $scope.books = bookService.getBooks();
  }]);
