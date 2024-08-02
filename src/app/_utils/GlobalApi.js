import { gql, request } from 'graphql-request'
 
 const MASTER_URL = "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/" +process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+ "/master";

 const getAllCourseList = async () => {
    const query =gql`
    query MyQuery {
        courseLists {
          name
          tagList
          description
          youtubeUrl
          totalChapter
          updatedBy {
            name
          }
          sourceCode
          free
          chapterList {
            ... on Chapter {
              id
              name
            }
          }
          banner {
            url
          }
        }
      }
    `
    const result = await request(MASTER_URL, query);
    return result;
 }

 export default {
    getAllCourseList
 }