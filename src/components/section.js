import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const Section = ({ item, sectionData, setSectionData }) => {

    const [values, setValues] = React.useState({
        name: item.name,
        description: item.description,
        image: item?.image,
    });

    const handleChange = (prop) => (event) => {

        event.preventDefault()

        setValues({ ...values, [prop]: event.target.value })
    };

    const handleImage = e => {

        e.preventDefault()

        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setValues({ ...values, image: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    React.useEffect(() => {

        // alert(item.id)

        setSectionData(sectionData.length && sectionData.map((section) => {

            if (section.id === item.id) {
                return {
                    ...section,
                    name: values.name,
                    description: values.description,
                    image: values.image
                }
            }
            return section
        }))

    }, [values])

    return (
        <>
            <div className="my-3">
                <div className="my-3 py-3">
                    <Grid container spacing={3} >
                        <Grid container xs={12} md={4} alignItems="center" justify="center" >
                            <p className="mx-4">
                                Section Name
                            </p>
                        </Grid>
                        <Grid container xs={12} md={8} className="d-flex justify-content-center justify-content-lg-start" >
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                value={values.name}
                                onChange={handleChange('name')}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'name',
                                }}
                                style={{ width: "75%", maxWidth: "600px", color: "red" }}
                                placeholder="Add section name here"
                                labelWidth={2}
                                defaultValue={values.name}
                            />
                        </Grid>
                    </Grid>
                </div>
                <div className="my-3 py-3">
                    <Grid container spacing={3} >
                        <Grid container xs={12} md={4} alignItems="center" justify="center" >
                            <p className="mx-4">
                                Section Description
                            </p>
                        </Grid>
                        <Grid container xs={12} md={8} className="d-flex justify-content-center justify-content-lg-start" >
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                value={values.description}
                                onChange={handleChange('description')}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'description',
                                }}
                                style={{ width: "75%", maxWidth: "600px" }}
                                placeholder="Add section details here"
                                labelWidth={2}
                                defaultValue={values.description}
                            />
                        </Grid>
                    </Grid>
                </div>
                <div className="my-3 py-3">
                    <Grid container spacing={3} >
                        <Grid container xs={12} md={4} alignItems="center" justify="center" >
                            <p className="mx-4">

                            </p>
                        </Grid>
                        <Grid container xs={12} md={8} className="d-flex justify-content-center justify-content-md-start" >
                            <input
                                accept="image/*"
                                id={item.id}
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) => handleImage(e)}
                            />
                            <label htmlFor={item.id}>
                                <Button variant="contained" color="primary" startIcon={<CloudUploadIcon />} component="span">
                                    Image
                                </Button>
                            </label>
                        </Grid>
                    </Grid>
                </div>
                <div className="my-3 py-3">
                    <Grid container spacing={3} >
                        <Grid container xs={12} md={4} alignItems="center" justify="center" >
                            <p className="mx-4">

                            </p>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default Section