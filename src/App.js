import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';

function Hello() {
    return (
        <div>Hello world</div>
    )
}

// this is accepts a single property object argument with data and returns a react elements
// this is a function element because they are literally javascript function
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

// same as above.
// Classes have some additional features  => soon
class Welcome1 extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}

function App() {

    const comment = {date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
            name: 'Hello Kitty',
            avatarUrl: 'https://placekitten.com/g/64/64',
        },
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
                <Hello/>
                <Welcome name="Paige"/>
                <Comment1 author={comment.author} date={comment.date} text={comment.text} />
                <Clock/>
            </header>
        </div>
    );
}

function formatDate(date) {
    return date.toLocaleString()
}


// Simplify this Comment function to Comment1
function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                     src="{props.author.avatarUrl}"
                     alt="{props.author.name}"/>
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}

// simplified from Comment
function Comment1(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}

function Avatar(props) {
    return <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name} />
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}

// PROPS are READ-ONLY
// Never modify its ows props
// This is pure
function sum(a,b) {
    return a+b
}

// This is impure because it changes its own input
function withdraw(account, amount) {
    account.total -= amount
}
// All react components must act like pure functions with respect to their props.


export default App;
