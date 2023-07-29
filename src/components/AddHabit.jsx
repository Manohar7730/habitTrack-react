import { useState } from "react";
import { addHabit } from "../actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

function AddHabit() {
  return (
    <Container>
      <h2>Add New Habit</h2>
      <Form>
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description:</Form.Label>
          <Form.Control />
        </Form.Group>
        <Button variant="primary">Add Habit</Button>
      </Form>
    </Container>
  );
}

export default AddHabit;
