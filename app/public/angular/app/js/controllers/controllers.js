refugeesApp.controller('testController', function() {
  var self = this;
  self.name = 'Rufus';
  self.changeName = function() {
    self.name = 'Winnie';
    console.log(self.name);
  };
});
