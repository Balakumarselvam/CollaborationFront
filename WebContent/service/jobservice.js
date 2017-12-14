/**
 * jobservice
 */
app.factory('JobService',function($http){
	var jobService={}
	var BASE_URL="http://localhost:8080/project2backend"
		jobService.saveJob=function(job){
		console.log(job);
		return $http.post(BASE_URL+"/savejob",job)
		}
		jobService.listAllJobs=function(){
			return $http.get(BASE_URL+"/getalljob")
		}
		jobService.getJobById=function(id){
			alert('entering job in user service')
			return $http.get(BASE_URL+"/getjobbyid/"+id)
		}
		return jobService;
})