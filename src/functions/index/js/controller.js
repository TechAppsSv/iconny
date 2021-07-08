(function () {
    'use strict';
    angular
        .module('MyApp')
        .controller('AppCtrl', AppCtrl);
  
        function AppCtrl ($scope, $log) {
          var tabs = [
                { title: 'One', content:`xd`},
                { title: 'Two', content:`xd`}
                
              ],
          selected = null,
          previous = null;
      $scope.tabs = tabs;
      $scope.selectedIndex = 2;
      $scope.$watch('selectedIndex', function(current, old){
        previous = selected;
        selected = tabs[current];

      });
      $scope.addTab = function (title, view) {
        view = view || title + " Content View";
        tabs.push({ title: title, content: view, disabled: false});
      };
      $scope.removeTab = function (tab) {
        var index = tabs.indexOf(tab);
        tabs.splice(index, 1);
      };
    }
  })();
  
  