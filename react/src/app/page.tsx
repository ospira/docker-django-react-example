export default async function Home() {


  const dataRequest = await fetch(`${process.env.DJANGO_API}/someAPI`)
  const data = await dataRequest.json()
  console.log({data})

  return (
    <div className="min-h-screen w-full p-8 sm:p-12 font-[family-name:var(--font-geist-sans)]">
      {data}
    </div>
  );
}
