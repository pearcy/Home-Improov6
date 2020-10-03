import { useState, useEffect } from 'react';
import moment from 'moment';
import { firebase } from '../firebase';
import { collatedtasksExist } from '../helpers';


export const useTasks = selectedProject => { // passing in a selectedProject, regular function (not props), useTasks is a custom hook, 
    const [tasks, setTasks] = userState([]);  // array of tasks, initialize with empty array
    // users, setUsers - this updates state
    const [archivedTasks, setArchivedTasks] = userState([]); // initialize with empty array

    useEffect(() => {  // pass in anonymous function, returns an object, 
        let unsubscribe = firebase
        .firestore()  // call firstore (firebase method)
        .collections('tasks') // get our tasks
        .where('userId', '==', 'alskdjfals'); // use userId used in Firebase // where id = alskdjfals // alskdjfals

        unsubscribe = 
        selectedProject && !collatedtasksExist(selectedProject) ? // if it doesn't exist, then = ? // change back to let, if we don't have any collated tasks be want to unsbuscribe
        (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
        : selectedProject === 'TODAY' // : = else,  
        ? (unsubscribe = unsubscribe.where(   // ? = then, 
            'date', 
            '==', 
            moment().format('DD/MM/YYYY')
            )) 
            : selectedProject === 'INBOX' || selectedProject === 0
            ? (unsbuscribe = unsubsribe.where('date', '==', ''))
            : unsubscribe;

        unsubscribe = unsubscribe.onSnapshot(snapshot => {
            const newTasks = snapshot.docs.map(task => ({
                id: task.id,
                ...task.data(),
                
            }));

            setTasks(    // call our hook
                selectedProject === 'NEXT_7' 
                ? newTasks.filter(
                    task => moment(task.date, 'DD-M-YYYY').diff(moment(), 'days') <= 7 &&
                    task.archived !==true
                )
                : newTasks.filter(task => task.archived !==true)  
            );

            setArchivedTasks(newTasks.filter(task => task.archived !== false)); // give me all of the tasks that are true (not false)
        });

        return () => unsubscribe(); // return unsubscribed, we don't want to be checking for projects all the time

    }, [selectedProject]); //  pass in an empty array, run once // when this changes rerun useTasks (line 8)
    // watch for changes in firebase

    return { tasks, archivedTasks }; 
  

}

export const useProjects = () => {
    const [projects, setProjects] = useState([]); // give it an empty array

    useEffect(() => {  // refresh the projects and get a fresh snapshot
        firebase
        .firestore() // firebase methods - go to firstore
        .collection('projects') // get me the collection
        .where('userId', '==', 'alskdjfals')  // where user id = this // change this to the user id in Firebase
        .orderBy('projectId')
        .get()  // just get once because it's not going to be changing as often as tasks
        .then(snapshot => {
            const allProjects = snapshot.docs.map(project => ({
                ...project.data(), // give me all of the project data
                docId: project.id, // always need docId (in case you want to delete, etc.)
            }));

            if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {  // we don't want to run this everytime so we want to do a comparison to see if the project changed
                setProjects(allProjects);
            }
        });
    }, [projects]);  // watch for projects 

    return { projects, setProjects }; // same as with tasks, return projects
};




