angular.module('SortingHat', [])
    .controller('SortCtrl', SortCtrl)
    //.directive('house', houseDirective);

function SortCtrl ($scope)
    {
        $scope.students = [];
        $scope.first;
        $scope.last;
        $scope.house;
	$scope.image = '{{image}}';
	$scope.sortForm= {
		FirstName: '',
		LastName: '',
	};
            $scope.Sort = function()
            {
                var nameVal=0;
                var fLen = $scope.sortForm.FirstName.length;
		var lLen = $scope.sortForm.LastName.length;
		var hse;
		var houseNum;
                for (var i=0; i<fLen; i++)
                {
                        nameVal += $scope.sortForm.FirstName.charCodeAt(i);
			//console.log($scope.sortForm.FirstName.charCodeAt(i));
			//console.log(nameVal);
                }
		for (var i=0; i<lLen; i++)
		{
			nameVal += $scope.sortForm.LastName.charCodeAt(i);
			//console.log($scope.sortForm.LastName.charCodeAt(i));
		}
		houseNum = nameVal % 4;
		console.log(nameVal);
		console.log('checkk');
		console.log(houseNum);
		if (houseNum == 0)
		{
			hse = 'Slytherin';
		}
		else if (houseNum == 1)
		{
			hse = 'Ravenclaw';
		}
		else if (houseNum == 2)
		{
			hse = 'Gryffindor';
		}
		else if (houseNum == 3)
		{
			hse = 'Hufflepuff';
		}
                $scope.students.push
                ({
         		first: sortForm.FirstName,
                        last:  sortForm.LastName,
			house: hse
                });
		$scope.image = hse;
            };
    }
/*
function houseDirective () {
	return {
	  scope: {
		student: '='
	},
	restrict: 'E',
	replace: 'true',
	template: (
		'<div class="House">' +
			'<img src="{{student.house}}.png" />' +
			'<p>You\'re in {{student.house}}!</p>' +
		'</div>'
	)};
}*/
