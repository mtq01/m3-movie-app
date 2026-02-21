//npm install react-tabs before npm run dev on your command line
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { useState, useRef, useEffect } from "react";
//This is a default style sheet that comes with react-tabs. 
//import "react-tabs/style/react-tabs.css";
import "../styles/Filter.css";
import hamFilter from "../assets/icons/ham-filter.svg";

//This array is iterated in Filter component to dynamically create <Tab> buttons and <TabPanel>s.
//The order in the array determines the order of the tabs in the UI.
const categories = [
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Now Playing", value: "now_playing" },
  { label: "Popular", value: "popular" }
];

//onChange is the name of a prop that Filter component receives from its parent (MovieCards.jsx).
//Here we are passing the function setActiveCategory as a prop called onChange. In MovieCards.jsx we have onChange={setActiveCategory}.
//Filter doesn’t know what setActiveCategory does internally — it just calls it when a tab is clicked.
function Filter({ onChange }) {

  const [isOpen, setIsOpen] = useState(false);
  const tabListRef = useRef(null);
  const buttonRef  = useRef(null);
  //handelTabSelect function will be called when a tab, for example now_playing is clicked by user which is index = 2
  //const category = categories[2].value; -> "now_playing"
  //onChange(category); -> updates parent state to "now_playing"
  //React re-renders MovieCards -> only Now Playing movies are shown.
  const handleTabSelect = (index) => {
    const category = categories[index].value; 
    onChange(category);
    setIsOpen(false); // close menu after selection (mobile) 
  };

  // close mobile menu if click outside tab list or hamburger
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen) {
        if (
          tabListRef.current &&
          !tabListRef.current.contains(event.target) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target)
        ) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    //onSelect is a special event prop from the react-tabs library and it only works on <Tabs>.
    //call handleTabSelect whenever a tab is clicked (fires on tab click)
    <Tabs onSelect={handleTabSelect}>

      {/* Hamburger button (mobile only) */}
      <button 
        ref={buttonRef}
        className="filter-menu-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={hamFilter} alt="Filter menu" />
      </button>

      <TabList 
      ref={tabListRef}
      className={`react-tabs__tab-list ${isOpen ? "show-menu" : ""}`}>
        {/* .map() -> loops through the array and creates a <Tab> for each category. */}
        {categories.map((cat) => (
          <Tab key={cat.value}>{cat.label}</Tab>
        ))}
      </TabList>
        {/* .map() -> loops over the array and creates a <TabPanel> for each category. */}
      {categories.map((cat) => (
        <TabPanel key={cat.value} /> //TabPanel is self-closing tag because the content of it is rendered elsewhere - in MovieCards.jsx.
      ))}
    </Tabs>
  );
}

export default Filter;
