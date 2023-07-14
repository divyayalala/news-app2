import React from 'react'
import { Fragment } from 'react'
import {Card,CardBody,CardText,CardTitle,CardSubtitle,Button} from 'reactstrap'
import axios from 'axios'

export const Cardcontent = (props) => {
    const buttonHandler=()=>{
        const newsobj = {
            title:props.item.title,
            urlToImage : props.item.urlToImage,
            author:props.item.author
        }
        axios.post("http://localhost:3001/news",newsobj)
        .then((res)=>{
            console.log(`data added ${res}`)
        })
        .catch((err)=>{
            console.log("error posting data")
        })
    }
    return (
        <Fragment>
            <Card className='float-left m-4'
                style={{
                    width: '18rem'
                }}
            >
                <img
                    alt="Sample"
                    src={props.item.urlToImage}
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {props.item.title}
                    </CardTitle>
                    <CardText>
                     {props.item.description}
                    </CardText>
                    <Button onClick={buttonHandler}>
                        Read Later
                    </Button>
                </CardBody>
            </Card>
        </Fragment>
    )
}
