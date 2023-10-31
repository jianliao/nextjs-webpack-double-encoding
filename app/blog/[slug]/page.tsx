export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}

export function generateStaticParams() {
  return [
    { slug: '111' },
    { slug: '222' },
    { slug: '333' },
  ];
}