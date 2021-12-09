import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Popup = ({ show, setShow }) => {
    const handleClose = () => setShow(false);
    return (
        <>
            <Modal show={show && window.innerWidth > 500} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Food for Thought: Baking is a Form of Self-Care</Modal.Title>
                </Modal.Header>
                <Modal.Body>I have always been a dessert person. Yet it wasn’t until quarantine times last year that I became the baker in the family. The slow drag of the zoom semester—waking up at 5 am for discussion, missing out on social aspects of college life, wearing sweatpants every day—made me anxious and stressed out. But at least I could bake. Through these long months, I have been constantly experimenting with different recipes and ingredients. Lemon-shaped peach jellies, mini basque cheesecakes, matcha flower biscuits, copycat Aunt Stella’s choco-chip cookies, birthday Scottish shortbreads, and more. The steady whisking and whipping against the mixing bowl always quiet my racing thoughts. For me, dessert isn't just dessert.. With my non-professional skills in baking, I use my illustrated recipes to show how baking can be a creative, mindful, appreciative, and joyful process. I  hope my  recipes will empower readers to experiment with new ingredients and techniques with a heaping spoonful of joy — we are all dessert people :)</Modal.Body>

            </Modal>
        </>
    )
}


export default Popup;

