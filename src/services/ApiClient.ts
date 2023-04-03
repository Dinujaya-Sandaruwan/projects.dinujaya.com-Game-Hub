import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "8d9eadda1185441a907fab687b28ef73",
	},
});
