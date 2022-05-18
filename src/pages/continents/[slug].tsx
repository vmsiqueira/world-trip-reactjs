import { GetServerSideProps } from "next";

interface ContinentProps {
  // add more props
  continent: {
    slug: string;
  }
}

export default function Continent({ continent }: ContinentProps) {
  return <h1>{continent.slug}</h1>
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  const continent = {
    slug
  }

  return {
    props: {
      continent
    }
  }
}