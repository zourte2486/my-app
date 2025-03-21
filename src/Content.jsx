


const Content = () => {
  const handleClick = () => {
    alert("You clicked me!");
    
  }
  const handleClicks = (event) => {
    console.log(event.type);
  }



  return <>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(event) => handleClicks(event)}>Click me</button>
  </>

  
};

export default Content;
