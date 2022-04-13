/* eslint-disable import/no-anonymous-default-export */
import { GraphQLClient } from "graphql-request";

export default async ({ body }, res) => {
  const graphcms = new GraphQLClient(process.env.GRAPH_CMS_ENDPOINT, {
    headers: {
      authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });

  await graphcms.request(
    `
        mutation($slug: String!){
            updateBlog(where: {slug: $slug}, data: {likes: $likes}) 
            id, 
            title,
        }
      `,
    {
      slug: body.slug,
      likes: body.likes,
    }
  );

  await graphcms.request(
    `
        mutation: publishBlog($slug: String) {
            publishBlog(where: {slug: $slug}, to: PUBLISHED) {
                slug
            }
        }
      `,
    {
      slug: body.slug,
    }
  );

  res.status(201).json({ slug: body.slug });
};
