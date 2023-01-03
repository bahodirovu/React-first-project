import React, { useCallback, useEffect, useState } from "react";
import { makeStyles } from '@mui/styles'
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Item from "./Item";
import axios from "axios";
import Loading from "../UI/Loading/Loading";

const useStyles = makeStyles((theme)=>({
    ItemList:{
        display:'flex',
        width:"80%",
        height:"80%"
    },
    ItemListSideBar:{
        background:"#9575cd",
        display:'flex',
        flexDirection:"column",
        alignItems:"center",
        width:"30%",
        texAlign:"center",
        boxShadow:"0 19px 38px rgba(0,0,0,.3), 0 15px 12px rgba(0,0,0,.1)",
        zIndex:2
    },
    ItemListTitle:{
        fontSize:"1rem",
        color:"#fff",
        fontWeight: "bold",
        margin:10
    },
    ImgSideBar:{
        width:"50%",
        // boxShadow:"0 19px 38px rgba(0,0,0,.3), 0 15px 12px rgba(0,0,0,.1)",
        borderRadius:"50%"
    },
    ItemListSticker:{
        height:"90%",
        width:'70%',
        background:"#fff",
        alignItems:"center",
        boxShadow:"0 19px 38px rgba(0,0,0,.3), 0 15px 12px rgba(0,0,0,.1)",
    }
}))

function ItemList(){
    const classes = useStyles();
    const [joke,setJoke] = useState(null)
    
    async function getEmoji(){
        let newEmoji= []
        for(let i =0; i<7; i++){
            const response = await axios.get('https://icanhazdadjoke.com/', {
                headers:{
                    Accept:'application/json'
                }
            })
            newEmoji.push({id:i, text:response.data.joke, votes:0})
        }
        setJoke(newEmoji)
    }
    useEffect(()=>{
        getEmoji()
    },[])

    const handleVote = useCallback((id,offset)=>{
        const filterEmoji = joke.filter(item=> item.id !== id)
        const emoj = joke.find(item =>item.id === id)
        emoj.votes += offset
        filterEmoji.push(emoj)
        filterEmoji.sort((a,b) => b.votes - a.votes )
        setJoke(filterEmoji)

    },[joke,setJoke])

    if(joke){
        return(
            <Box className={classes.ItemList}>
                <Box className={classes.ImgSideBar}>
                    <Typography className={classes.ItemListTitle}>
                        Random
                        <br/>
                        Emojis
                    </Typography>
                        <img
                        className={classes.ImgSideBar}
                        src="https://www.telegraph.co.uk/content/dam/technology/2017/11/01/emoji_update_2017_3_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.png?imwidth=900"
                        alt="ImageSideBar" 
                        />
                    </Box>
                    <Box className={classes.ItemListSticker}>
                        {joke.map(item =>(
                            <Item 
                            votes ={item.votes}
                            text = {item.text}
                            key={item.id}
                            upVote={()=> handleVote(item.id,1)}
                            downVote={()=> handleVote(item.id,-1)}
                            />
                        ))}
                    </Box>
            </Box>
        )
    }else{
        <div>
            <Loading></Loading>
        </div>
    }
}
export default ItemList;