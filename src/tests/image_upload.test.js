/**
 * @file Implement unit tests for image upload button.
 */
 
 import Home from "../components/home";
 import { act } from 'react-dom/test-utils';
 import {screen, render, fireEvent, waitFor} from "@testing-library/react";
 import {HashRouter} from "react-router-dom";
import MyMedia from "../components/profile/media";
 
 const MOCKED_TUIT =
     {tuit: "nisha's tuit", postBy: "112", _id: "1938", stats: {bookmarks: 10}, image: "abc.jpeg"};
 
 let imageTuitMock = jest.fn();


 test('media screen is rendered',() => {
      render(
         <HashRouter>
             <MyMedia/>
         </HashRouter>
     );
 
     const mediaTab = screen.getByText(/media/i);
     expect(mediaTab).toBeInTheDocument();
 });


 test('tuit renders image button', async() => {
     await act( async () => render(
         <HashRouter>
             <Home tuit={MOCKED_TUIT} openModal = {imageTuitMock}/>
         </HashRouter>
     ));
    const image = screen.getByTestId('test-imageButton');
     await fireEvent.click(image);
     expect(MOCKED_TUIT.image).toBe('abc.jpeg');
 })

