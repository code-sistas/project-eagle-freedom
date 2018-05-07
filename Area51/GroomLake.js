const axios = require('axios')

module.exports = {
    getComp: (req, res, next) => {
        axios.get('https://lms.devmountain.com/api/v1/courses/3/outcome_results/?user_id=72&include=[outcomes]', {headers: {Authorization: req.headers.authorization}}).then(result => {
            let {linked, outcome_results} = result.data
            console.log(linked["[outcomes]"][0])
            // console.log('-------------------------------------',outcome_results)
            linked["[outcomes]"].forEach((val,i,arr) => {
                console.log(val)
            })

            //the object that gets sent: id, title, description, alignments, passed 
            
            res.send(result.data)
        })

    }
}