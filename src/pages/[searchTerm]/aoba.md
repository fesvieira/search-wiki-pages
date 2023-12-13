```typescript
import { GetServerSideProps, InferGetStaticPropsType } from "next";
import { FC } from "react";

const Aoba: FC<InferGetStaticPropsType<typeof getServerSideProps>> = ({
  searchParam
}) => {
  return (
    <div>
      <p>{searchParam}</p>
    </div>
  );
};

export default Aoba;

export const getServerSideProps = (async (ctx) => {
  // Adicionar alguma lógica fodase
  const results = await getWikiData(ctx.params?.slug);

  console.log(ctx.params);

  return {
    props: {
      searchParam: results
    }
  };
}) satisfies GetServerSideProps<{
  searchParam: string;
}>;

```