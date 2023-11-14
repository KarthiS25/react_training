

const Content = () => {
  const handleNameChange = () => {
    const names = ['Karthi', 'Mani', 'Vinith'];
    const int = Math.floor(Math.random() * 3);
    return names[int]; 
  }

  return (
    <div style={{ marginTop: "140px" }}>
      <p>
        Hello {handleNameChange()}
      </p>
    </div>
  
  )
}

export default Content