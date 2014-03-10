Meteor.methods({
	'addProject':function(project){
		Projects.insert(project);
	}
})