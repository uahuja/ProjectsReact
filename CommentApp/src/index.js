import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetails'
import ApprovalCard from './ApprovalCard';
import faker from 'faker';


const App = () =>
{
    return (
        <div className="ui container comments">


<ApprovalCard> 
    <div>
        <h3>WARNING !!</h3>
        Are you sure you want to do this
    </div>

 </ApprovalCard>

            <ApprovalCard> 
                <CommentDetails author="Sam" time="Today at 6:00PM" content="Nice Job" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails author="Udit" time="Today at 9:00PM" content="Nice Job Done" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails author="Saumya" time="Yesterday at 12:00PM" content="Nice" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails author="Upasana" time="Today at 6:00AM" content="Nice Job Done It" avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    )  
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)


