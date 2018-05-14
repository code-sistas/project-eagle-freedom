const axios = require('axios')

module.exports = {
    getComp: (req, res, next) => {
        axios.get('https://lms.devmountain.com/api/v1/courses/3/outcome_results/?user_id=72&include=[outcomes]', { headers: { Authorization: req.headers.authorization } }).then(result => {
            let { linked, outcome_results } = result.data
            // console.log(linked["[outcomes]"][0])
            // console.log('-------------------------------------',outcome_results)
            linked["[outcomes]"].forEach((val, i, arr) => {
                // console.log(val)
            })

            //the object that gets sent: id, title, description, alignments, passed 
            res.send(result.data)
        })

    },

    sortOutcomes: (req, res) => {
        //the api endpoint is paginated, so I used an IFFE and recursion to pull all the data we need, and saved it to allresults. Allresults is then sorted in the "else" statement, and sent to the frontend. 
        let allresults = []
        let num = 1;
        (function sort(num) {
            axios.get(`https://lms.devmountain.com/api/v1/courses/3/outcome_groups?page=${num}`, { headers: { Authorization: req.headers.authorization } }).then(results => {
                axios.get(`https://lms.devmountain.com/api/v1/courses/3/outcome_results/?include="outcome_paths"`, { headers: { Authorization: req.headers.authorization } }).then(response => {
                    axios.get('https://lms.devmountain.com/api/v1/courses/3/assignments', { headers: { Authorization: req.headers.authorization } }).then(finalres => {

                        if (results.data.length > 0) {
                            allresults.push(...results.data)
                            num++
                            sort(num)
                        }
                        else {
                            //sort all data and send back
                            var server = []
                            var react = []
                            var webdev = []
                            var db = []
                            var rejects = []
                            allresults.forEach((outcome, index) => {
                                //check to see if all properties needed exist.
                                if (outcome.parent_outcome_group && outcome.id && outcome.title) {
                                    var tempobj = {
                                        title: outcome.title,
                                        category: outcome.parent_outcome_group.title,
                                        id: outcome.id,
                                        parentid: outcome.parent_outcome_group.id,
                                        parts: []
                                    }
                                    switch (tempobj.parentid) {
                                        case 1:
                                            webdev.push(tempobj);
                                            break;
                                        case 7:
                                            react.push(tempobj);
                                            break;
                                        case 41:
                                            server.push(tempobj);
                                            break;
                                        case 42:
                                            db.push(tempobj);
                                            break;
                                    }
                                }
                                //this is for the ONE annoying, random outcome, that breaks everything, and that we don't need (and whose mother is the only one who loves him)
                                else {
                                    rejects.push(outcome)
                                }
                            })

                            let finalobj = {
                                react,
                                server,
                                webdev,
                                db,
                            }

                            //matching child competencies to their parent

                            let outComes = [...response.data.linked['"outcome_paths"']]
                            let masteries = [...response.data.outcome_results]

                            outComes.forEach(val => {
                                let mastery = false

                                for (let key in finalobj) {
                                    finalobj[key].forEach(parent => {

                                        if (val.parts[1].name === parent.title) {

                                            //checks to see if there's mastery
                                            masteries.forEach(master => {
                                                if (+master.links.learning_outcome === val.id) {
                                                    mastery = true
                                                }
                                            })

                                            parent.parts.push({ name: val.parts[2].name, mastery })
                                        }
                                    })
                                }
                            })

                            res.send(finalobj)
                        }
                    })
                })
            }).catch(e => console.log(e))
        })(num)
    },

    getAss: (req, res) => {

        let allresults = []
        let num = 1;

        (function getPages(page) {
            axios.get(`https://lms.devmountain.com/api/v1/courses/3/outcome_rollups/?user_ids=72&page=${page}`, { headers: { Authorization: req.headers.authorization } }).then(result => {
                if (result.data.rollups.length > 0) {
                    result.data.rollups[0].scores.forEach(val => {
                        val.title === 'Assessment Competencies' ? allresults.push(val) : null
                    })
                    page++
                    getPages(page)
                } else {
                    axios.get('https://lms.devmountain.com/api/v1/courses/3/assignments/132', { headers: { Authorization: req.headers.authorization } }).then(response => {
                        let { rubric } = response.data
                        let tempArr = []

                        rubric.forEach(parent => {
                            let mastery = false
                            let { id, description } = parent

                            allresults.forEach(val => {
                                if (parent.outcome_id === +val.links.outcome) mastery = true
                            })
                            
                            tempArr.push({ id, mastery, description })
                        })
                        res.send(tempArr)
                    })
                }
            })
        })(num)
    }
}