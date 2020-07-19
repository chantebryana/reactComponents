import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard />
            <CommentDetail avatar={faker.image.avatar()} author="Sam" time="Today at 18:00" comment="Nice blog post!" />
            <CommentDetail avatar={faker.image.avatar()} author="Alex" time="Today at 13:15" comment="Great thoughts" />
            <CommentDetail avatar={faker.image.avatar()} author="Janel" time="Today at 11:08" comment="Everything is wacky." />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));