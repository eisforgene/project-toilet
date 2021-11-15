import React from 'react';
import {  Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { ADDTOILET } from '../utils/mutations'
import { useMutation } from '@apollo/client';

const ToiletForm = () => {
    
// addToilet(overallRating: Int!, location: String!, genderNeutral: Boolean!, cleanliness: Int!, changingTable: Boolean!, handicapAccessible: Int!, toiletPaper: Boolean!, keys: Boolean!, comment: String!): Toilet

    const [addToilet, {error}] = useMutation(ADDTOILET)
    const handleFormSubmit = async event => {
        
        event.preventDefault();
        
        try {

            await addToilet ({
                variables: { }
            })
        } catch (e) {
            console.error(e)
        }

    }

    return(
        <>
        <h1>Form</h1>
 
        <Form>
            <FormGroup>
                <Label for="overallRating">Overall Score?</Label>
                <Input type="select" name="overallRating" id="overallRating">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="genderNeutral">Gender Neutral?</Label>
                <Input type="select" name="genderNeutral" id="genderNeutral">
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="cleanliness">Clean?</Label>
                <Input type="select" name="cleanliness" id="cleanliness">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="changingTable">Changing Table?</Label>
                <Input type="select" name="changingTable" id="changingTable">
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="handicapAccessible">Handicap Accessible?</Label>
                <Input type="select" name="handicapAccessible" id="handicapAccessible">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="toiletPaper">Toilet Paper?</Label>
                <Input type="select" name="toiletPaper" id="toiletPaper">
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="keys">Key Required?</Label>
                <Input type="select" name="keys" id="keys">
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="comment">comment</Label>
                <Input type="textarea" id="comment" name="comment" placeholder="Enter a comment"></Input>
            </FormGroup>
            <Button>Submit</Button>
        </Form>
        
        </>
    )
}

export default ToiletForm;