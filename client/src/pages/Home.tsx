import React, {
    useEffect,
    useState,
} from 'react';
import axios from 'axios';


const {
    LinkedinScraper,
    relevanceFilter,
    timeFilter,
    typeFilter,
    experienceLevelFilter,
    remoteFilter,
    events,
} = require('linkedin-jobs-scraper');

const scraper = new LinkedinScraper({
    headless: true,
    slowMo: 200,
    args: [
        '--lang=en-GB',
    ],
});

(async () => {
    // [...]
    console.log("woah")
    await scraper.run({
            query: '',
            options: {
                filters: {
                    companyJobsUrl:
                        'https://www.linkedin.com/jobs/airbnb-jobs-worldwide?f_C=6649043%2C309694&trk=job-results_see-all-jobs-link&position=1&pageNum=0',
                },
            },
        },
        {
            optimize: true,
            locations: [ 'United States' ],
            limit: 10,
        });

    // [...]
})();


const Home = () => {
    const [ welcomeMsg, setWelcomeMsg ] = useState<string>('');


    useEffect(() => {
        (async () => {
            const res = await axios.get('/api/start');
            setWelcomeMsg(res.data.msg);
        })();
    }, []);

    return (
        <div className="App-header">
            <p>{ welcomeMsg }</p>
        </div>
    );
};

export default Home;
