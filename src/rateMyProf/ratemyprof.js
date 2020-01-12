//Web scraping with node
const rp = require("request-promise");

let profData;

function getProfData() {
  const options = {
    url: `https://solr-aws-elb-production.ratemyprofessors.com//solr/rmp/select/?solrformat=true&rows=3000&wt=json&json.wrf=noCB&callback=noCB&q=*%3A*+AND+schoolid_s%3A1077&defType=edismax&qf=teacherfirstname_t%5E2000+teacherlastname_t%5E2000+teacherfullname_t%5E2000+autosuggest&bf=pow(total_number_of_ratings_i%2C2.1)&sort=total_number_of_ratings_i+desc&siteName=rmp&rows=20&start=0&fl=pk_id+teacherfirstname_t+teacherlastname_t+total_number_of_ratings_i+averageratingscore_rf+schoolid_s&fq=`,
    json: true
  };

  rp(options).then(data => {
    data = data.substring(5, data.length - 1);
    data = JSON.parse(data);

    profData = new Map();
    for (let prof of data.response.docs) {
      let pname = (
        prof.teacherfirstname_t.substring(0, 1) + prof.teacherlastname_t
      )
        .toLowerCase()
        .replace(/\s+/g, "");
      profData.set(pname, prof.averageratingscore_rf);
    }
  });
}

function getProfRating(profName) {
  const rating = profData.get(profName);
  return rating;
}

export default getProfData;
