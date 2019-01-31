
export default async function retrieveContent(){
	const url = "https://baconipsum.com/api/?type=all-meta&paras=28&start-with-lorem=1";

	const response = fetch(url);
	return response.json();

}