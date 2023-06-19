import React, {useContext} from 'react';

// import {useReactMediaRecorder} from 'react-media-recorder';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css';
import {ContextObj} from './Context'


function Interface(): JSX.Element {
    const {startRecording, stopRecording, mediaBlobUrl} = useContext(ContextObj);
    return (
        <div className='card'>
            <div className='img-div mt-3 mb-3'>
                <img src='../interface.png'/>
            </div>
            <div className='textDiv'></div>
            <div className='btn'>
                <button type='button' onClick={startRecording} className='btn btn-danger mt-2'>Start!</button>
                <button type='button' onClick={stopRecording} className='btn btn-primary mt-2'>Stop!</button>
            </div>
            <audio src = {mediaBlobUrl} controls autoPlay loop/>
        </div>
    );
};

export default Interface;