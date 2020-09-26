export function formatDate(date) {
	const monthString = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	var pubDate = new Date(date)
	var month = monthString[pubDate.getMonth()]
	var day = (pubDate.getDate()).toString()
	var year = (pubDate.getFullYear()).toString()
	var pubFormat = month + " " + day + ", " + year
	return pubFormat
}