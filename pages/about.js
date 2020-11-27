// functional component
// WHEN TO USE :
// 1. for smaller components
// 2. reusable component
// 3. presentional components, partially right, we can use Hooks and specify state
const About = () => {
  const message = 'Hello World';
  return <h1>About - {message}</h1>;
};

// Class components for pages not resubale lot of state of lot of data
// class About extends React.Component {
//   render() {
//     return <h1>About class component</h1>;
//   }
// }

export default About;
