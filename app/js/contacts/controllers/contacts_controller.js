  app.controller('ContactsController', ['$scope', '$http', function($scope, $http) {
    $scope.contacts = [];
    $scope.errors = [];
    $scope.newContact = null;

    $scope.getAll = function() {
      $http.get('/api/contact')
        .then(function(res) {
          $scope.contacts = res.data;
        }, function(err) {
          console.log(err.data);
        });
    };

    $scope.create = function(contact) {
      $http.post('/api/contact', contact)
        .then(function(res) {
          $scope.contacts.push(res.data);
          $scope.newContact = null;
        }, function(err) {
          console.log(err.data)
        });
    };

    $scope.update = function(contact) {
      contact.editing = false;
      $http.put('/api/contact/' + contact._id, contact)
        .then(function(res) {
          console.log('this contact has a been modified');
        }, function(err) {
          $scope.errors.push('could not get contact: ' + contact.name);
          console.log(err.data);
        });
    };

    $scope.remove = function(contact) {
      $scope.contacts.splice($scope.contacts.indexOf(contact), 1);
      $http.delete('/api/contact/' + contact._id)
        .then(function(res) {
          console.log('contact deleted');
        }, function(err) {
          console.log(err.data);
          $scope.errors.push('could not delete contact: ' + contact.name);
          $scope.getAll();
        });
    };
  }]);
