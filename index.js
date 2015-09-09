angular
  .module('app')
  .controller('SocketCtrl', ['$scope', function($scope){
    $scope.chats = [{name: 'Matt', message: 'Hello World'}];
  }])
