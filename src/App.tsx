import { useEffect, useState } from 'react'
import './App.css'
import { CoffeeProps } from './types/coffee.type';
import Card from './components/Card';
import Introduction from './components/Introduction';
import Link from './components/Link';

function App() {
  const [data,setData] = useState<CoffeeProps[] | null>(null);
  const [filter,setFilter] = useState<string>('all');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
    .then(response => response.json())
    .then(data => {
    console.log(data);
    setData(data);
  })
  .catch(error => {
    console.log(error)
  })
  }, []);

  const handleClickAll = () => {
    setFilter('all');
  }

  const handleClickAvailable = () => {
    setFilter('available');
  }

  const filteredCoffee = data?.filter(coffee => {
    if(filter === 'all') return coffee;
    if(filter === 'available') return coffee.available
  })
  
  return (
    <div className='bg-body'>
      <div className="container-xl">
        <Introduction />
        <div className="container-btn">
          <Link name='All Products' handleClick={handleClickAll}/>
          <Link name='Available Now' handleClick={handleClickAvailable}/>
        </div>
        <div className="container-list-coffee">
        {filteredCoffee ? filteredCoffee.map((coffee)=>(
          <Card key={coffee.id} name={coffee.name} popular={coffee.popular ? <span className='popular-tag'>Popular</span>:''} price={coffee.price} image={coffee.image} rating={coffee.rating} votes={coffee.votes} available={coffee.available} />
        )):'Error'}
        </div>

      </div>
    </div>
  )
}

export default App
