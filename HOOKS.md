# HOOKS

- useState ✅

const [state, setState] = useState();

- useEffect ✅

useEffect(() => {
// mount

     return () => console.log('willunmount')

}, [dep1, dep2])

- useRef ✅

// 1. DOM node (example - set input focus)
// 2. Keep values that are not on the screen

- useContext => lesson 9

- useCallback ✅

// Do not create new functions on each render

- useMemo ✅

// Do not calculate huge operations on each render
