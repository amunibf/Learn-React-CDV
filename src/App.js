import React, { Component } from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import IndexAsKey from './components/IndexAsKey';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import HoverCounter from './components/HoverCounter';
import ClickCounter from './components/ClickCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counteer from './components/Counteer';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';




class App extends Component {

  render() {
    return (
      <div className="App">
        <PostForm/>
        <PostList/>
        {/* <UserProvider value='Munib'> */}
          <ComponentC/>
        {/* </UserProvider> */}
        <Counteer>
          {(count, incrementCount)=>(<ClickCounterTwo count={count} incrementCount={incrementCount}/>)}
        </Counteer>
        <Counteer >
          {(count, incrementCount)=>(<HoverCounterTwo count={count} incrementCount={incrementCount}/>)}
        </Counteer>
        <User render={(isLoggedIn)=> isLoggedIn ? 'Ahmad Munib Fikry' : 'Guest'}/>
        <ClickCounter nama='Munibe'/>
        <HoverCounter nama='Hanane'/>
        <ErrorBoundary>
          <Hero heroName='Joker'/>
        </ErrorBoundary>       
        <ErrorBoundary>
          <Hero heroName= 'Superman'/>
        </ErrorBoundary>       
        <ErrorBoundary>
          <Hero heroName= 'Batman'/>
        </ErrorBoundary>       
        <PortalDemo/>
        <FRParentInput />
        {/* <FocusInput/> */}
        {/* <RefsDemo/> */}
        <ParentComp/>
        <Table/>
        <FragmentDemo/>
        <LifecycleA/>
        <Form/>
        <Inline/>
        <Stylesheet primary={true} />
        <IndexAsKey/>
        <NameList/>
        <UserGreeting />
        <ParentComponent />
        <EventBind />
        <ClassClick />
        <FunctionClick />
        <Counter />
        <Message />
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <Greet name="Bruce" heroName="Batman">
            <p>This is children props</p>
          </Greet>
          <Greet name="Doni" heroName="Superman">
            <button>Action</button>          
          </Greet>
          <Greet name="Rizk" heroName="Deadpool"/>
          <Welcome name="Bruce" heroName="Batman"/>
          <Welcome name="Doni" heroName="Superman"/>
          <Welcome name="Rizk" heroName="Deadpool"/>
          <Hello />
        </header>
      </div>
    );
  }
}

export default App;