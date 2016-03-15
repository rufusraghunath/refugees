refugeesApp.controller("BarCtrl", function ($scope) {

  $scope.labels = [
    'Western African', 'Western Mediterranean', 'Central Mediterranean', 'Eastern Mediterranean', 'Circular', 'Western Balkan', 'Eastern Borders'
  ];

  $scope.dataSets = [{
    comparison: 'Overall mortality',
    data: [4.69, 1.24, 1.97, 0.07, 0.00, 0.01, 0.00]
  }];

  $scope.incidentYear = {
    comparison: 'Incidents per year',
    data: [{
            name: '2000',
            type: 'year',
            data: [12, 95, 40, 18, 3, 3, 1]
          }, {
            name: '2001',
            type: 'year',
            data: [10, 67, 17, 27, 0, 1, 0]
          }, {
            name: '2002',
            type: 'year',
            data: [15, 42, 35, 46, 0, 3, 0]
          }, {
            name: '2003',
            type: 'year',
            data: [35, 59, 43, 14, 0, 2, 2]
          }, {
            name: '2004',
            type: 'year',
            data: [50, 44, 51, 28, 0, 1, 1]
          }, {
            name: '2005',
            type: 'year',
            data: [26, 46, 28, 22, 0, 0, 1]
          }, {
            name: '2006',
            type: 'year',
            data: [78, 39, 54, 23, 0, 0, 1]
          }, {
            name: '2007',
            type: 'year',
            data: [60, 40, 84, 30, 1, 0, 0]
          }, {
            name: '2008',
            type: 'year',
            data: [40, 55, 78, 28, 1, 1, 0]
          }, {
            name: '2009',
            type: 'year',
            data: [11, 44, 31, 16, 0, 1, 1]
          }, {
            name: '2010',
            type: 'year',
            data: [0, 24, 13, 16, 0, 0, 2]
          }, {
            name: '2011',
            type: 'year',
            data: [3, 35, 72, 17, 0, 0, 0]
          }, {
            name: '2012',
            type: 'year',
            data: [2, 20, 31, 20, 0, 0, 0]
          }, {
            name: '2013',
            type: 'year',
            data: [1, 8, 17, 10, 0, 0, 0]
          }, {
            name: '2014',
            type: 'year',
            data: [1, 7, 49, 10, 0, 0, 0]
          }, {
            name: '2015',
            type: 'year',
            data: [3, 14, 45, 88, 0, 8, 0]
          }, {
            name: '2016',
            type: 'year',
            data: [0, 0, 4, 23, 0, 2, 0]
          }]
  };

  $scope.incidentMonth = {
    comparison: 'Incidents per month',
    data: [{
            name: 'Jan',
            type: 'month',
            data: [44, 98, 86, 44, 0, 3, 2]
          }, {
            name: 'Feb',
            type: 'month',
            data: [17, 47, 21, 17, 0, 1, 1]
          }, {
            name: 'Mar',
            type: 'month',
            data: [21, 42, 43, 21, 0, 1, 0]
          }, {
            name: 'Apr',
            type: 'month',
            data: [34, 43, 48, 34, 0, 1, 0]
          }, {
            name: 'May',
            type: 'month',
            data: [21, 46, 70, 21, 0, 1, 1]
          }, {
            name: 'Jun',
            type: 'month',
            data: [13, 38, 90, 13, 0, 2, 0]
          }, {
            name: 'Jul',
            type: 'month',
            data: [45, 55, 65, 45, 0, 2, 1]
          }, {
            name: 'Aug',
            type: 'month',
            data: [39, 55, 87, 39, 1, 1, 0]
          }, {
            name: 'Sep',
            type: 'month',
            data: [24, 51, 57, 24, 0, 3, 0]
          }, {
            name: 'Oct',
            type: 'month',
            data: [21, 46, 64, 21, 1, 2, 1]
          }, {
            name: 'Nov',
            type: 'month',
            data: [26, 45, 32, 26, 0, 2, 1]
          }, {
            name: 'Dec',
            type: 'month',
            data: [42, 73, 24, 42, 1, 3, 2]
          }]
  };

  $scope.incidentCause = {
    comparison: 'Incidents per cause',
    data: [{
            name: 'Authorities-related violence',
            type: 'cause',
            data: [2, 20, 3, 8, 0, 1, 0]
          }, {
            name: 'Drowning/exhaustion',
            type: 'cause',
            data: [217, 413, 446, 267, 1, 6, 6]
          }, {
            name: 'Malicious intent',
            type: 'cause',
            data: [0, 10, 18, 2,  0, 3, 0]
          }, {
            name: 'Other',
            type: 'cause',
            data: [0, 2, 0, 1,  0, 2, 0]
          }, {
            name: 'Suicide',
            type: 'cause',
            data: [2, 10, 3, 0, 0,  0, 2, 1]
          }, {
            name: 'Unknown',
            type: 'cause',
            data: [124, 155, 194, 111, 2, 1, 1]
          }, {
            name: 'Violent accidental death',
            type: 'cause',
            data: [2, 29, 12, 47, 2, 7, 1]
          }]
    };

  $scope.selected = $scope.incidentCause.data[0];

  $scope.chartTitle = $scope.selected.name;

  $scope.chartType = $scope.selected.type;

  $scope.data = [
    $scope.incidentCause.data[0].data
  ];

  $scope.changeData = function() {
    $scope.data = [
      $scope.selected.data
    ];
    $scope.changeTitle();
  };

  $scope.changeTitle = function() {
    $scope.chartType = $scope.selected.type;
    $scope.chartTitle = $scope.selected.name;
  };



});
