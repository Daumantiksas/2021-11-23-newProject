


const demoStorages = (data)=> {

    localStorage.setItem('books', JSON.stringify(data))
    const books =JSON.parse(localStorage.getItem('books'))
    console.log(books)
}



export default demoStorages;

