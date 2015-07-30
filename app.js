angular.module("demoApp",['ui.router'])
  .config(["$stateProvider", "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state("home",{
          url: "/home",
          templateUrl: "/index.html",
          controller: "BookController"
        })
        .state("cart",{
          url: "/cart",
          templateUrl: "/cart.html",
          controller: "CartController"
        });
      $urlRouterProvider.otherwise("home");
    }])
  .service("orderBookService",[function(){
    var obj = {
      orderBooks: [],
      totalBooks: 0
    };

    obj.addBooks = function(newBook) {
      for(i=0; i < obj.orderBooks.length;i++){
        if(obj.orderBooks[i].title == newBook.title){
          obj.orderBooks[i].orderQuantity += 1;
          obj.totalBooks += 1;
          return;
        }
      }
        obj.orderBooks.push(newBook);
        obj.orderBooks[i].orderQuantity += 1;
        obj.totalBooks += 1;
    };

    obj.getBooks = function() {
      return obj.orderBooks;
    };

    return obj;
  }])
  .controller("BookController",[ "$scope","orderBookService", function($scope, orderBookService) {
  $scope.orderBooks = orderBookService.orderBooks;

  $scope.books = [
          {title: "Awakening of intelligence", author: "Krishnamurti", price: 40, orderQuantity: 0},
          {title: "AngularJS cookBook", author: "Ari Lerner", price: 30, orderQuantity: 0},
          {title: "C++ Programming", author: "Bjane Stroustroup", price: 35, orderQuantity: 0},
          {title: "Java Programming", author: "Daniel Liang", price: 37, orderQuantity: 0},
          {title: "Ruby on Rails", author: "Michael Hartl", price: 38, orderQuantity: 0}
        ];
  $scope.amount = function(book){
    return book.price * book.orderQuantity;
  };
  }])
  .controller("CartController",
    ["$scope","orderBookService",
      function($scope,orderBookService) {
        $scope.order = orderBookService;

        $scope.addToCart = function(book){
          orderBookService.addBooks(book);
        };
  }]);

