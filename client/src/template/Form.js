import React, { useState } from 'react';
import {  Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { ADDREVIEW } from '../utils/mutations'
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth'

const ReviewForm = () => {

const [addReview, {error}] = useMutation(ADDREVIEW)

    const [formState, setFormState] = useState({ overallRating: '', genderNeutral: '', cleanliness: '', handicapAccessible: '', toiletPaper: '', keys: '', comment: '' });


// update state based on form input changes
        const handleChange = async event => {
            const { name, value } = event.target;
            
            setFormState({
                ...formState,
                [name]: value
            });
        };
     

    const handleFormSubmit = async event => {

        event.preventDefault();

        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        navigator.geolocation.getCurrentPosition(position => {
        
            const { latitude, longitude } = position.coords

             const coordinates = latitude + 'X' + longitude 
            try {
            addReview({
                    variables: { coordinates: coordinates, ...formState}
                })
            } catch (e) {
                console.error(e)
                console.log(error)
            }

        })

    }


    return(
        <>
        <h1>Form</h1>
 
        <Form onSubmit={handleFormSubmit}>
            <FormGroup>
                <Label for="overallRating">Overall Score?</Label>
                <Input onBlur={handleChange} onChange={handleChange} defaultValue={'1'} type="select" name="overallRating" id="overallRating">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="genderNeutral">Gender Neutral?</Label>
                <Input onBlur={handleChange} onChange={handleChange} defaultValue={'No'} type="select" name="genderNeutral" id="genderNeutral">
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="cleanliness">Clean?</Label>
                <Input onBlur={handleChange} onChange={handleChange} defaultValue={'1'} type="select" name="cleanliness" id="cleanliness">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="changingTable">Changing Table?</Label>
                <Input onBlur={handleChange} onChange={handleChange} defaultValue={'No'} type="select" name="changingTable" id="changingTable">
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="handicapAccessible">Handicap Accessible?</Label>
                <Input onBlur={handleChange} onChange={handleChange} defaultValue={'1'} type="select" name="handicapAccessible" id="handicapAccessible">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="toiletPaper">Toilet Paper?</Label>
                <Input onBlur={handleChange} onChange={handleChange} defaultValue={'No'}type="select" name="toiletPaper" id="toiletPaper">
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="keys">Key Required?</Label>
                <Input onBlur={handleChange} onChange={handleChange} defaultValue={'No'} type="select" name="keys" id="keys">
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="comment">comment</Label>
                <Input onBlur={handleChange} onChange={handleChange} type="textarea" id="comment" name="comment" placeholder="Enter a comment"></Input>
            </FormGroup>
           <Button>Submit</Button>
        </Form> 
        
        </>
    )
}

export default ReviewForm;