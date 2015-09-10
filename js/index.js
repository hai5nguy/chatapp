angular
  .module('app', ['btford.socket-io'])
  .factory('mySocket', function (socketFactory) {
  return socketFactory();
  })
  .controller('SocketCtrl', function($scope, mySocket){
    $scope.chats = [{name: 'Matt', message: 'Hello World'}];
    $scope.message="";
    //This function works
    $scope.addToChat=function(chat){
      $scope.chats.push(chat);
      mySocket.emit('chat1', {user: 'mcarson000', message: $scope.message});
      $scope.message ="";
    };
    //This doesn't log incoming message
    $scope.$on('socket:broadcast', function(event, data) {
      $scope.$apply(function() {
      console.log(data);
      });
    });
  });
