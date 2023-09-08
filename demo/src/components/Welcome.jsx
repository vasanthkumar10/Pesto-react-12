export function Welcome(props) {
  // props => properties(obj) coming from parent
  //   console.log("props", props);
  return (
    <h1>
      Welcome {props.name} to Pesto. Your age is {props.age}
    </h1>
  );
}
