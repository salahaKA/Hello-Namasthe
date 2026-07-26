<!-- Namste React -->

CDN -Content Delivery Network

<!-- Parcel -->

- Dev Build
- Local SErver
- HMR - Hot MODULE Replacement
- FWA - File Watcing Algorithm : Written in C++
- Faster build because of Caching
- Img optimization
- MInification
- Bundle: Mundlers are make execution faster
- Minified
- Compressing
- Consistent Hashing -
- Code splitting
- Differential Bundling
- Tree Shing Algo
- Error andling
- REmoved unused code- Tree Shaking

- Lazy loading: Load in lazy mode
- HTTPS

- Diff dev and production bundles

<!-- Short NOte -->

<!-- React Element -->

- Whenever we write code for developers, we need to use framework like AntD or MUI for developer friendly and clean and humon redable

- JS Engine cannot understand React code.It can understand Ecmascript JS. => Parcel doing this all tings before going to JS Engine it will transpiled(Encrypted) from JSX to React code , and React rendered in HTML DOM element. => Parcel doing this with babel package inside parcel.

Parcel + Babel Job
JSX code -> React element (done by babel) -> HTML DOM Element (Done by ReactDOM) => ten JS engine can understand becauseit has DOM

JSX and HTML are different.
In JSX the attribute name are all written in camelCase and the class is className.

H>W
How to add Img, Anchor etc tag in JSX and their properties

If JSX in multiple line, We have to wrap it inside ()

Formate Extension GOood in React => Prettier and Bracket Pair Colorization Toggler

Others-> ES Lint,Better Comment

<!-- REACT Components -->

Everything in React is a Components
tERE ARE TWO TYPE OF cOMPONENTS IN REACT => cLASSBASED COMPONENTS AND fUNCTIONAL BASED COMPONENTS
There are two type of components in React => Class based (OLD) and Funtional based (NEW) component.

React FUnctional Component

- Normal JS fumction wic return piece of JSX. And can reuse anywhere. Also we can call other component iside.
- JSX can Nested also
- Wecan use component inside component=> Component combosition: Like Header, Nav, Footer and Title inside Main Component
  -We can also put React element inside React Component
- We can also use JS elements iside JSX by using {}, elps dynaming UI by passing props as variable
- Prevents cross side scripting, avoid rendering maliciousdata from API

<!-- PART 1 -->
