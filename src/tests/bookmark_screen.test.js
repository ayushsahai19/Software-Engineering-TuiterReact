/**
 * @file Implement unit tests for bookmarks screen.
 */
 import React from 'react'
 import {act, create} from "react-test-renderer"
 import Bookmarks from "../components/bookmarks";
 import {render, screen} from "@testing-library/react";
 import {HashRouter} from "react-router-dom";
 import Tuits from "./react-test-renderer/tuits/tuits";
 
 const MOCKED_TUITS =
     [{tuit: "kanishka's tuit", postBy: "789", _id: "9999", stats: {bookmarks:12}},
         {tuit: "nisha's tuit", postBy: "123", _id: "6655", stats: {bookmarks:191}}];
 
 
jest.mock('axios');
 test('renders bookmarks screen',() => {
      render(
         <HashRouter>
             <Bookmarks/>
         </HashRouter>
     );
 
     const bookmarksTab = screen.getByText(/Bookmark/i);
     expect(bookmarksTab).toBeInTheDocument();
 });
 
 


 test('renders a list of tuits on the screen', () => {
     let tuitsRender
     act(() => {
         tuitsRender = create(
             <Tuits
                 tuits={MOCKED_TUITS}/>
         )
     })
     const root = tuitsRender.root
     const testTuit = root.findAllByProps({
         className: 'ttr-tuit'
     })
     expect(testTuit.length).toBe(MOCKED_TUITS.length)
     testTuit.forEach((ttrTuit, ndx) => {
         expect(ttrTuit.props.children).toBe(MOCKED_TUITS[ndx].tuit)
     })
 })
 
 test('renders bookmarked tuit under bookmark screen', async () => {
     let tuitsRender
     act(() => {
         tuitsRender = create(
             <Bookmarks Tuits={MOCKED_TUITS}/>
         )
     })
 
     const root = tuitsRender.root
     const ttrTuits = root.findAllByProps({
         className: 'tuit-content'
     })
     ttrTuits.forEach((ttrTuit, ndx) => {
         expect(ttrTuit.props.children[0]).toBe(MOCKED_TUITS[ndx].tuit)
     })
 })