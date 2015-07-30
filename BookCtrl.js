angular.module("demoApp")
  .controller("BookController",[ "$scope","bookService", 
    function($scope, bookService) {
    $scope.books = bookService.books;

    $scope.books = [
    					{title: "Awakening of intelligence", author: "Krishnamurti", price: 40},
    					{title: "AngularJS cookBook", author: "Ari Lerner", price: 30},
    					{title: "C++ Programming", author: "Bjane Stroustroup", price: 35},
    					{title: "Java Programming", author: "Daniel Liang", price: 37},
    					{title: "Ruby on Rails", author: "Michael Hartl", price: 38}
    				];
    $scope.addToBookList = function(book){
      bookService.addBooks(book);
    };
}]);
