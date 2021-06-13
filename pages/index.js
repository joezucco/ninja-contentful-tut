import { createClient } from 'contentful'
import ProductCard from '../components/ProductCard';

export async function getStaticProps() {
  
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'product' })

  return {
    props: {
      recipes: res.items
    }
  }

}

export default function Recipes({ recipes }) {
  console.log(recipes)
  return (
    <div className="recipe-list">
      {recipes.map(product => (
        <ProductCard key={product.sys.id} product={ product }/>
      ))}
    </div>
  )
}