import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

const SearchPage = ({ params: { term } }: Props) => {
  if (!term) return notFound();

  const termToUse = decodeURI(term);

  return <main></main>;
};

export default SearchPage;
