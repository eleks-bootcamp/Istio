import React, {useState} from 'react';

import './NewGoalStyle.css';
import NameNewGoal from "./NameNewGoal/NameNewGoal";
import PhotoNewGoal from "./PhotoNewGoal/PhotoNewGoal";


const NewGoal = ({setShowGoal, showNewGoal}) => {
    const [currentForm, setCurrentForm] = useState('nameGoal');


    if (currentForm === 'nameGoal'){
        return (
            <div className={'NewGoal'}>
                <NameNewGoal
                    setCurrentForm={setCurrentForm}
                    setShowGoal={setShowGoal}
                    showNewGoal={showNewGoal}
                />
            </div>
        );
    }

    if (currentForm === 'photoGoal'){
        return (
            <div className={'NewGoal'}>
                <PhotoNewGoal
                    setShowGoal={setShowGoal}
                    showNewGoal={showNewGoal}
                    setCurrentForm={setCurrentForm}
                />
            </div>
        )
    }
};

export default NewGoal;