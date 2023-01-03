import React, { useCallback } from "react";
import { Box } from "@mui/system";
import { makeStyles } from '@mui/styles'
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Typography } from "@mui/material";


const useStyles = makeStyles((theme)=>({
    item:{
        display:'flex',
        alignItems:'center',
        justifyContent:"center",
        fontWeight:400,
        borderBottom:'1px solid teal'
    },
    itemBtn:{
        display:'flex',
        marginRight:'1rem',
        justifyContent:'center',
        alignItems:'center',
        width:'15%'
    },
    arrowIcon:{
        fontSize:'2rem',
        margin:10,
        cursor:'pointer'
    },
    voteLevel:{
        fontSize:20
    },
    itemText:{
        width:'75%',
        fontSize:'1.2rem'
    },
    itemEmoji:{
        fontSize:'1.5rem',
        margin:'0.6rem',
        marginLeft:'auto',
        borderRadius:'50%',
        boxShadow:"0 19px 38px rgba(0,0,0,.3), 0 15px 12px rgba(0,0,0,.1)",
    }
}));


function Item(props){
    const classes = useStyles();
    const {votes,text} = props;
    const getEmoji = useCallback((votes)=>{
        if(votes>=9){
            return "em em-rolling_on_the_floor_laughing"
        }else if(votes>=6){
            return "em em-laughing"
        }else if(votes >= 3){
            return 'em em-slightly_smiling_face'
        }else if(votes >=0){
            return 'em em-neutral_face'
        }else{
            return 'em em-angry'
        }
    },[])
    return(
        <Box className ={classes.item}>
            <Box className={classes.itemBtn}>
                <ArrowUpward onClick={props.upVote} className={classes.arrowIcon}/>
                <Typography className={classes.voteLevel}>{votes}</Typography>
                <ArrowDownward onClick={props.downVote} className={classes.arrowIcon}/>
            </Box>
            <Box className={classes.itemText}>
                {text}
            </Box>
            <Box className={classes.itemEmoji}>
                <i className={getEmoji(votes)}/>
            </Box>
        </Box>
    )

}
export default Item;