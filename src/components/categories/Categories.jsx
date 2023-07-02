import { useCategories } from "./queries";

export default function Categories() {
  const { data, isLoading, error } = useCategories({
    limit: 10,
  });
  return (
    <>
      <div>
        {data?.data?.map((categories) => (
          <p key={categories.id}>{categories}</p>
        ))}
      </div>
    </>
  );
}
