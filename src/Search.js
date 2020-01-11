import React from "react";

class Search extends React.Component {
    constructor() {
        super();
        this.state = {};

        this.search = this.search.bind(this);
    }

    search(searchTerm) {
        var url = new URL("https://api.ucsb.edu/academics/curriculums/v1/classes/search?"); // GOLD API
        var params = {
            quarter: 20201,
            pageNumber: 1,
            // pageSize: 10,
            includeClassSections: true,
            deptCode: searchTerm
        };

        url += new URLSearchParams(params).toString();

        fetch(url, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'ucsb-api-version': '1.0',
                'ucsb-api-key': 'Ci6LtaGYVEQETL1Q5vzBgpw1oirtt5Aa'
            }
        }).then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    render() {
        return <h1>Hello Gaucho Class!</h1>;
    }
}

export default App;
