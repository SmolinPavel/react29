# HOOKS

- useState
- useEffect
- useRef
- useContext
- useCallback
- useMemo

// prop = 1
const MyComponent = ({ prop }) => {
useEffect(() => {
console.log('effect');

        return () => console.log('unmount');
    }, [prop])

}

// 1. Mount (first render) -> effect
// 2. Prop is updated from 1 to 2 -> unmount, effect
// 3. Component unmount -> unmount

// effect
// unmount
// effect
// unmount
