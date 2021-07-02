import React from 'react'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper';

const View = () => {

    const sectionData = JSON.parse(localStorage.getItem('myData'));
    const project = JSON.parse(localStorage.getItem('project'));

    React.useEffect(() => {

    }, [sectionData, project])

    return (
        <>
            <div className="align-items-center">

                <h1 style={{ marginLeft: "4%", paddingTop: "5%", paddingBottom: "2%" }}>View Projects</h1>
                <h2 className="d-flex justify-content-center my-4 py-4">
                    {project}
                </h2>
                {
                    sectionData && sectionData.map((section) => {
                        return (
                            <Paper elevation={2} className="my-5">
                                <Container maxWidth="md" style={{ padding: "25px" }}>
                                    <Container maxWidth="md" style={{ fontWeight: "bold", padding: "10px" }}>
                                        {section.name}
                                    </Container>
                                    <Container maxWidth="md" className="d-flex justify-content-center" style={{ padding: "10px" }}>
                                        {section.description}
                                    </Container>
                                    <Container maxWidth="md" className="d-flex justify-content-center" style={{ padding: "10px" }}>
                                        <img src={section.image} style={{ height: '250px', width: '250px' }} />
                                    </Container>
                                </Container>
                            </Paper>
                        )
                    })
                }
                <Container fluid className="my-5" style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                        variant="contained"
                        color="primary"
                        className="mx-2"
                        onClick={
                            () => {
                                window.location = '/'
                            }
                        }
                        endIcon={<EditIcon />}
                    >
                        Edit
                    </Button>
                </Container>
            </div>
        </>
    )
}

export default View