const SolutionButton = ({name}) => {
  return <button onClick={() => alert(`${name} clicked`)}>{name}</button>
}

export default SolutionButton