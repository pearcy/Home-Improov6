import React from 'react';
import Firebase from '../firebase';
// import { firebase } from '../firebase';

export const Checkbox = ({ id }) => {
    const archiveTask = () => {
        Firebase
        .firestore()
        .collection('tasks')
        .doc(id)
        .update({
            archived: true,
        });
    };

    return (  // onClick activates function above
        <div 
        className="checkbox-holder" 
        data-testid="checkbox-action"
        onClick={()=> archiveTask()}
        >    
            <span className="checkbox" />

        </div>  
    );
};