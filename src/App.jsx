// import Counter from "./components/Counter.jsx";
// import Todo from "./components/Todo.jsx";
// import Meals from "./components/Meals.jsx";
// import Calculator from "./components/Calculator.jsx";
// import ToggleBackgroundColor from "./components/ToggleBackgroundColor.jsx";
// import HiddenSearchBar from './components/HiddenSearchBar';
// import Testimonials from "./components/Testimonials.jsx";
import {accordionData} from './utils/content.js'
import Accordion from "./components/Accordion";

const App = () => {
    return (
        <div>
            {/*// <Counter/>*/}
            {/*// <Todo/>*/}
            {/*// <Meals/>*/}
            {/*// <Calculator/>*/}
            {/*// <ToggleBackgroundColor/>*/}
            {/*// <HiddenSearchBar/>*/}
            {/*// <Testimonials/>*/}
            <div className="accordion">
                {accordionData.map(({title, content}) => (
                    // eslint-disable-next-line react/jsx-key
                    <Accordion title={title} content={content}/>
                ))}
            </div>
        </div>
    );
};
export default App
