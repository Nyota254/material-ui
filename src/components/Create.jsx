import React,{useState} from 'react'
import  Typography  from '@material-ui/core/Typography'
import  { Button }  from '@material-ui/core'
import { Container } from '@material-ui/core'
// import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import SendIcon from '@material-ui/icons/Send';
// import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Radio from '@material-ui/core/Radio'
import { RadioGroup } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    btn: {
        fontSize:60,
        backgroundColor:'violet',
        '&:hover' : {
            backgroundColor:'blue'
        }
    },
    title : {
        textDecoration : 'underline',
        marginBottom:20
    },

    field: {
        marginTop:20,
        marginBottom:20,
        display:'block'
    }
})

// import  ButtonGroup  from '@material-ui/core/ButtonGroup'
//Typography component h1h2h3h4h6 p 

function Create() {
    const classes = useStyles()
    const history = useHistory()
    const [title,setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [errorState,setErrorState] = useState(false);
    const [category, setCategory] = useState('todos')

const handleSubmit = (e) => {
    e.preventDefault()
    setErrorState(false)
    if(title && details ){
        fetch('http://localhost:8000/notes',{
            method:'POST',
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({title,details,category})
        }).then(()=>history.push('/'))
    }

    if(!title || !details){
        setErrorState(true)
    }
    
}

    return (
        <Container>
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Create a New Note
            </Typography>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    onChange={(e)=>setTitle(e.target.value)}                    
                    label="Note Title"
                    variant="outlined"
                    color="secondary"
                    className={classes.field}
                    fullWidth
                    required
                    error={errorState}
                 />
                 <TextField
                    onChange={(e)=>setDetails(e.target.value)}
                    label="Details"
                    variant="outlined"
                    color="secondary"
                    className={classes.field}
                    multiline
                    rows={4}
                    fullWidth
                    required
                 />
                <FormControl className={classes.field}>
                <FormLabel>Note Category</FormLabel>
                <RadioGroup value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                <FormControlLabel value="money" control={<Radio/>} label="Money"/>
                <FormControlLabel value="todos" control={<Radio/>} label="Todos"/>
                <FormControlLabel value="reminders" control={<Radio/>} label="Reminders"/>
                <FormControlLabel value="work" control={<Radio/>} label="Work"/>
                </RadioGroup>
                </FormControl>

                 <Button
                type="submit"
                color="secondary"
                variant="contained"
                endIcon={<SendIcon/>}
            >
                Submit
            </Button>
            </form>


            {/* <Button type="submit">Submit</Button>
            <Button type="submit" variant="contained" color="secondary">Submit</Button>
            <Button type="submit" variant="outlined" color="secondary">Submit</Button>
            <ButtonGroup color="secondary">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup> */}

            {/* Icons */}
            <br/>
            {/* <AcUnitOutlinedIcon/>
            <AcUnitOutlinedIcon color="secondary" fontSize="large"/>
            <AcUnitOutlinedIcon color="secondary" fontSize="small"/>
            <AcUnitOutlinedIcon color="action" fontSize="large"/>
            <AcUnitOutlinedIcon color="error" fontSize="large"/>
            <AcUnitOutlinedIcon color="disabled" fontSize="large"/> */}
        </Container>
    )
}

export default Create
