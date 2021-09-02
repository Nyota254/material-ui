import React from 'react'
import { useHistory, useLocation } from 'react-router'
import { makeStyles } from '@material-ui/core'
import { Typography,Drawer  } from '@material-ui/core'
import { List,ListItem,ListItemIcon,ListItemText } from '@material-ui/core'
import { SubjectOutlined,AddCircleOutlineOutlined } from '@material-ui/icons'
import { AppBar,Toolbar,Avatar } from '@material-ui/core'
import {format} from 'date-fns'

const drawerWidth = 240

const useStyles = makeStyles((theme)=>{
    return {
        page:{
            background: '#f9f9f9',
            width:'100%',
            padding:theme.spacing(3)
        },
        drawer:{
            width:drawerWidth
        },
        drawerPaper:{
            width:drawerWidth
        },
        root:{
            display:'flex'
        },
        active:{
            background:'#f4f4f4'
        },
        title:{
            padding:theme.spacing(3)
        },
        appbar:{
            width:`calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        date:{flexGrow:1},
        avatar:{marginLeft:theme.spacing(2)}
}
})

const Layout = ({children}) => {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text:'My Notes',
            icon: <SubjectOutlined color="secondary"/>,
            path:'/'
        },
        {
            text:'Create Notes',
            icon: <AddCircleOutlineOutlined color="secondary"/>,
            path:'/create'
        },
    ]

    return (
        <div className={classes.root}>
            {/* app bar */}  
            <AppBar
            className={classes.appbar}
            elevation={0}
            >
                <Toolbar>
                    <Typography className={classes.date}>
                        Today is the {format(new Date(),'do MMMM Y')}
                    </Typography>
                    <Typography>
                        Mario
                    </Typography>
                    <Avatar src="./mario-av.png" className={classes.avatar}/>
                </Toolbar>
            </AppBar>


            {/* side drawer */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant="h5" className={classes.title}>
                        Ninja Notes
                    </Typography>

                    <List>
                        {
                            menuItems.map((item)=>(
                                <ListItem
                                    button
                                    key={item.text}
                                    onClick={() => history.push(item.path)}
                                    className={location.pathname == item.path ? classes.active : null}
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text}/>
                                </ListItem>
                            ))
                        }
                    </List>

                </div>
            </Drawer>
            
            <div className={classes.page}>
            <div className={classes.toolbar}></div>
            {children}
            </div>
        </div>
    )
}

export default Layout
