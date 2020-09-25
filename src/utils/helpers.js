export function formatDate(date) {
	var pubDate = new Date(date)
	var month = (pubDate.getMonth() + 1).toString()
	var day = (pubDate.getDate()).toString()
	var year = (pubDate.getFullYear()).toString()
	var pubFormat = month + "-" + day + "-" + year
	return pubFormat
}