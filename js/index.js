angular
  .module('app', [])
  .controller('SocketCtrl', ['$scope', function($scope){
    $scope.chats = [{name: 'Matt', message: 'Hello World'}];
    $scope.message="";
    $scope.addToChat=function(chat){
      $scope.chats.push(chat);
      $scope.message ="";
    }
  }]);
