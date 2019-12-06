- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components give you access to lifecycle methods within the component like componentDidMount, componentDidUpdate, etc which 
can be used to accomplish specific tasks at certain points during a users interaction with the component or simply as a result
of changing state.

- [ ] Name three lifecycle methods and their purposes.

componentDidMount - a method that runs when the component mounts to the DOM. Can be used similarly to a useEffect hook with an empty dependency array- firing a single time during the components life.

componentDidUpdate - a method that runs when the component re-renders. Can be used similarly to a useEffect hook with no dependency or a variable dependency array- firing every time the component updates after its initial render. 

componentWillUnmount - a method that runs once a component is about to be unmounted from the DOM. this method allows you to get rid of all the event listeners that the component has added to the DOM to free up user memory and prevent reoccuring instances of the same event listener being added repeatedly.

- [ ] What is the purpose of a custom hook?
Custom hooks give developers more freedom interacting with state. Developers can throw in custom tasks to be done when a hook is called that regular hooks do not contain, all while maintaining the usefulness of state-based behavior. 


- [ ] Why is it important to test our apps?
Testing apps likely saves a TON of time down the line. We didn't really learn a whole lot about it so my perspective on this is a bit limited, but as one becomes more proficient at writing tests that are specific for use cases the actual tests themselves will help specifically point out what exact function of the app is not working and provide a description of why, and what it should be doing instead. This could save a ton of headaches down the line in the case of new developers changing things on an existing project and accidentally breaking it or simply with the existing devs tweaking something and causing a break. 