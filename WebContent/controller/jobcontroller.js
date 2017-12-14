/**
 * jobcontroller
 */
app.controller('JobController',function($scope,$location,JobService){
	$scope.showJobDetails=false;
	$scope.saveJob=function(){
		JobService.saveJob($scope.job).then(function(response){
			 console.log(response.data)
			 alert("job added")
			},function(response){
			 $scope.error=response.data;
			 console.log(response.status)
			 if(response.status==401)
				 $location.path('/login')
		     $location.path('/savejob')
		})
	}
	$scope.getJobById=function(id){
		console.log("job id is" +id);
		$scope.showJobDetails=true
		JobService.getJobById(id).then(function(response){
			 $scope.job=response.data
			},function(response){
			 $scope.error=response.data;
			 console.log(response.status)
			 if(response.status==401)
				 $location.path('/login')
		  })
	}
	function listAllJobs(){
		JobService.listAllJobs().then(function(response){
			 $scope.jobs=response.data
			 console.log(response.status)
			 console.log(response.data)
			},function(response){
			 $scope.error=response.data;
			 console.log(response.status)
			 if(response.status==401)
				 $location.path('/login')
		  })
	}
	listAllJobs()
})