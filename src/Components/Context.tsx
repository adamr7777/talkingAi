import React, {createContext, useState, useEffect} from 'react';
import {useReactMediaRecorder} from 'react-media-recorder';

export const ContextObj = createContext(null);

function ContextProv(props: any): JSX.Element {
    const [recordAudio, setRecordAudio] = useState('');
    const {status, startRecording, stopRecording, mediaBlobUrl} = useReactMediaRecorder({
        audio: true, blobPropertyBag: {type: 'audio/wav'}
    });

    useEffect(()=> {
        if (!mediaBlobUrl) return;
        console.log(mediaBlobUrl);
    }, [mediaBlobUrl])


    return (
        <ContextObj.Provider value={{startRecording, stopRecording, mediaBlobUrl}}>
            {props.children}
        </ContextObj.Provider>
    )
};

export default ContextProv;