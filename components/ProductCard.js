import Link from "next/link";

export default function ProductCard({ product }) {
  const { title, slug, cookingTime, thumbnail } = product.fields;

  return (
    <div className="card">
      <div className="featured">{/* image - thumb */}</div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Takes approx {cookingTime} mins to make</p>
        </div>
      </div>
      <div className="actions">
        <Link href={"/recipes/" + slug}>
          <a>Cook this</a>
        </Link>
      </div>
    </div>
  );
}
