export const capiptalizeFirstLetter = (string) => {
	return string?.charAt(0).toUpperCase() + string?.slice(1).toLowerCase();
};

export const getInitials = (string) => {
	var parts = string.split(" ");
	var initials = "";
	for (var i = 0; i < parts.length; i++) {
		if (parts[i].length > 0 && parts[i] !== "") {
			initials += parts[i][0];
		}
	}
	if (parts.length === 1) {
		initials += parts[0][parts[0].length - 1].toUpperCase();
	}

	return initials.toUpperCase();
};
