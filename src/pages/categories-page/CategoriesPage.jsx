import { useCategories } from "../../components/categories/queries";

import "./CategoriesPage.scss";

export default function CategoriesPage() {
  const { data, isLoading, error } = useCategories({
    limit: 10,
  });

  return (
    <>
      <div className="categories-page">
        {data?.data?.map((categories) => (
          <>
            <div>
              <>
                <img
                  width={300}
                  height={300}
                  src={categories.image}
                  alt="image"
                />
              </>
              <>
                <p key={categories.id}>{categories.name}</p>
              </>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
