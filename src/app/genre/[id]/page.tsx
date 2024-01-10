import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

const GenrePage = ({ params: { id }, searchParams: { genre } }: Props) => {
  if (!id || !genre) return notFound();

  return <main></main>;
};

export default GenrePage;
