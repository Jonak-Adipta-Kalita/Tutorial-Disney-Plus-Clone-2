import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

const SearchPage = ({ params: { term: paramTerms } }: Props) => {
  if (!paramTerms) return notFound();

  const term = decodeURI(paramTerms);

  return <main></main>;
};

export default SearchPage;
