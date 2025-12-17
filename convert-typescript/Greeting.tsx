import React from 'react';

// Define an interface for the props to ensure type safety
interface GreetingProps {
  name: string; // The name must be a string
}

// Use React.FC (Function Component) with the GreetingProps interface
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;