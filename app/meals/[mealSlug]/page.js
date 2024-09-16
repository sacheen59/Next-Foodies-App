export default function MealDetailPage({ params }) {
  return (
    <main>
      <h1>MealItem Detail page</h1>
      <p>{params.mealSlug}</p>
    </main>
  );
}
