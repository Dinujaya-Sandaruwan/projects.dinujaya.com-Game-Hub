function shortenText(text: string): string {
	if (text.length <= 25) {
		return text;
	} else {
		return text.slice(0, 20) + "...";
	}
}

export default shortenText;
