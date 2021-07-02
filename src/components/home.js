import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';
import Section from './section';
import NewSection from './newSection';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    const [project, setProject] = React.useState(null)

    const [sectionData, setSectionData] = React.useState([])

    const [newSection, setNewSection] = React.useState({})

    React.useEffect(() => {

        if (localStorage.getItem('myData')) {

            setSectionData(JSON.parse(localStorage.getItem('myData')));
        }
        else if (sectionData.length === 0) {

            setNewSection({
                id: uuidv4(),
                name: '',
                description: '',
                image: '',
            })
        }

        if (localStorage.getItem('project'))
            setProject(JSON.parse(localStorage.getItem('project')));

    }, [])

    // project name & sections array - empty or load from local storage
    // new empty section to be visible
    // if default section empty then disable add button & create alert
    // save & view - sections array then push new section & re-initialize new section

    const handleSubmit = (event) => {

        event.preventDefault()

        if (newSection.name === '') {

            alert('Enter Section Name')
            return
        }

        if (newSection.description === '') {
            alert('Enter Section Description')
            return
        }

        if (newSection.image === '') {
            alert('Enter Section Image')
            return
        }

        if (newSection.id) {
            setSectionData([...sectionData, newSection])
        }

        setNewSection({})

        window.location = '/view'
    }

    React.useEffect(() => {

        // console.log(newSection);

        if (sectionData.length)
            localStorage.setItem('myData', JSON.stringify(sectionData));

        if (project)
            localStorage.setItem('project', JSON.stringify(project));

    }, [sectionData, project])

    const handleChange = () => (event) => {

        setProject(event.target.value);
    };
    return (
        <>
            <div className="align-items-center">

                <h1 style={{ marginLeft: "4%", paddingTop: "5%" }}>Edit Projects</h1>

                <div className="my-4 py-4 my-md-5">
                    <Grid container spacing={3} >
                        <Grid container xs={12} md={4} alignItems="center" justify="center" >
                            <p className="mx-4">
                                Project Name
                            </p>
                        </Grid>
                        <Grid container xs={12} md={8} className="d-flex justify-content-center justify-content-lg-start" >
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                value={project}
                                onChange={handleChange()}
                                aria-describedby="outlined-weight-helper-text"
                                style={{ width: "75%", maxWidth: "600px" }}
                                placeholder="Add project name here"
                                labelWidth={2}
                            />
                        </Grid>
                    </Grid>
                </div>

                <div className="my-3">
                    {
                        sectionData.length && sectionData.map((item) => {
                            return (
                                <Section key={item.id}
                                    item={item}
                                    sectionData={sectionData}
                                    setSectionData={setSectionData}
                                />
                            )
                        })
                    }
                    {/* add default section */}

                    {
                        newSection?.id ? (
                            <NewSection
                                newSection={newSection}
                                setNewSection={setNewSection}
                            />
                        ) : (
                            <>
                            </>
                        )
                    }

                    <div className="my-3 py-3">
                        <Grid container spacing={3} >
                            <Grid container xs={12} md={4} alignItems="center" justify="center" >
                                <p className="mx-4">

                                </p>
                            </Grid>
                            <Grid container xs={12} md={8} className="d-flex justify-content-center" >
                                <Button
                                    variant="contained"
                                    className="mx-2"
                                    style={{ backgroundColor: "#00e676" }}
                                    onClick={(e) => {

                                        e.preventDefault()

                                        if (!newSection?.id) {

                                            setNewSection({
                                                id: uuidv4(),
                                                name: '',
                                                description: '',
                                                image: '',
                                            })
                                        }
                                    }}
                                    startIcon={<AddIcon />}
                                >
                                    Add Section
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className="mx-2"
                                    type="submit"
                                    onClick={(e) => handleSubmit(e)}
                                    endIcon={<SendIcon />}
                                >
                                    View
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home