var child = function(arg) {
	require("child_process").exec(arg, function(error, stdout, stderr) {
		if (error !== null) {
			console.log("exec error: " + error);
			return error;
		}
		// Validate stdout / stderr to see if service is already running
		// perhaps.
	});
	return "ok";
};

var service = function(status) {
	if (status == "on") {
		child("net start OracleOraDB18Home1TNSListener");
		child("lsnrctl services");
		status = true;
	} else if (status == "off") {
		child("net stop OracleOraDB18Home1TNSListener");
		status = false;
	}
};
module.exports = service;
