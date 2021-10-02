import { useEffect, useState } from 'react';

const SearchComponents = () => {
  const [category, setCategory] = useState('all categories');

  useEffect(() => {
    // fetch components for given category
  }, [category]);

  return (
    <select onChange={e => setCategory(e.target.value)}>
      <option value="all categories">all categories</option>
      <option value="tables">tables</option>
      <option value="chairs">chairs</option>
      <option value="dishes">dishes</option>
      <option value="drinks">drinks</option>
      <option value="people">people</option>
    </select>
  )
}

export default SearchComponents;
