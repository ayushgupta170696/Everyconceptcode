import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import PArentComponent from './components/PArentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyle.css'
import style from './appStyle.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import { Fragment } from 'react';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import withCounter from './components/withCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import Counter2 from './components/Counter2';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
     {/* <UserProvider value="Vishwas"> */}
     
     <MyComponent></MyComponent>
   {/*    <ComponentC></ComponentC>
     </UserProvider>  */}
  {/*     <Counter2 render={ (count, incrementCount) =>(
        <ClickCounterTwo count={count} incrementCount={incrementCount} />
      )}
      />
      <Counter2 render={ (count, incrementCount) =>(
        <HoverCounterTwo count={count} incrementCount={incrementCount} />
      )}
      />
     <ClickCounterTwo></ClickCounterTwo>
     <HoverCounterTwo></HoverCounterTwo>
     <User render={ (isLoggedIn) => isLoggedIn ? 'Vishwas' : 'Guest'}></User>
      <ClickCounter name='Vishwas'></ClickCounter>
      <HoverCounter></HoverCounter>
      <ErrorBoundary>
      <Hero heroName="Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Joker"></Hero>
      </ErrorBoundary>
      <PortalDemo></PortalDemo>
       <FRParentInput></FRParentInput>
      <FocusInput></FocusInput>
      <RefsDemo></RefsDemo>
      <ParentComp></ParentComp>
   <FragmentDemo></FragmentDemo>
     <LifecycleA></LifecycleA>
       <Form></Form>
       <h1 className='error'>Error</h1>
      <h1 className={style.success}>Success</h1>
    <Inline></Inline>
       <Stylesheet primary={true}/>
     <NameList></NameList>
      <UserGreeting></UserGreeting>
   }   <PArentComponent></PArentComponent>
      <EventBind></EventBind>
     <ClassClick/>
     <FunctionClick/>
     <Counter></Counter>
      <button>Action Button</button>
    <Greet name="Bruce" />
      <Greet name="Clark"></Greet>
  }
      <Welcome></Welcome>
      <Welcome name="guptaji"></Welcome>
<Hello></Hello> 
<Message/> */}
    </div>
  );
}

export default App;
