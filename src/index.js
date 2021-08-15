import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ComponentDetails from './CommentDetails';
import faker from 'faker'
import ApprovalCard from './ApprovalCard'

ReactDOM.render(
  <div className="ui container comments">
    <ApprovalCard><div>
      <h4>!Warning</h4>
          Are you sure you want to do this ?
    </div></ApprovalCard>
    <ApprovalCard> <ComponentDetails author="Ram" timeAgo="Today at 4pm" content="Hi I m Ram" avatar={faker.image.avatar()} />

    </ApprovalCard>

    <ApprovalCard><ComponentDetails author="Mohan" timeAgo="Today at 6pm" content="Hi I m Mohan" avatar={faker.image.avatar()} /></ApprovalCard>

    <ApprovalCard> <ComponentDetails author="Anil" timeAgo="Today at 8pm" content="Hi I am Anil" avatar={faker.image.avatar()} /></ApprovalCard>




  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
