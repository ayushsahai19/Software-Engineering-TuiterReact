/**
 * @file Implement unit tests for bookmarks button.
 */
 import TuitStats from "../components/tuits/tuit-stats";
 import { act } from 'react-dom/test-utils';
 import {screen, render, fireEvent, waitFor} from "@testing-library/react";
 import {HashRouter} from "react-router-dom";
 
 const MOCKED_TUIT =
     {tuit: "nisha's tuit", postBy: "112", _id: "1938", stats: {bookmarks: 10}};
 
 let bookmarkTuitMock = jest.fn();
 
 test('tuit renders bookmark button', async() => {
     await act( async () => render(
         <HashRouter>
             <TuitStats tuit= {MOCKED_TUIT} 
             bookmarkTuit={bookmarkTuitMock} />
         </HashRouter>
     ));
 
     const bookmarkButton = screen.getByTestId('test-bookmarkButton');
     expect(bookmarkButton).toBeInTheDocument();
 })
 
 test('bookmark button will trigger bookmarkTuit function', async() => {
     await act( async () => render(
         <HashRouter>
             <TuitStats tuit={MOCKED_TUIT} bookmarkTuit={bookmarkTuitMock}/>
         </HashRouter>
     ));
 
     const bookmarkButton = screen.getByTestId('test-bookmarkButton');
     await fireEvent.click(bookmarkButton);
     expect(screen.getByText(MOCKED_TUIT.stats.bookmarks)).toBeInTheDocument();
 })