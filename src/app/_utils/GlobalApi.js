import { gql, request } from 'graphql-request'
 
 const MASTER_URL = "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/" +process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+ "/master";

 const getAllCourseList = async () => {
    const query =gql`
    query MyQuery {
        courseLists(first: 20, orderBy: createdAt_DESC) {
          name
          tagList
          description
          youtubeUrl
          totalChapter
          updatedBy {
            name
            id
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
          slug
        }
      }
    `
    const result = await request(MASTER_URL, query);
    return result;
 }

 const getCourseBySlug = async (courseId)=> {
     const query = gql `
     query MyQuery {
        courseList(where: {slug: "`+courseId+`"}) {
            sourceCode
            name
            tagList
            youtubeUrl
            banner {
              url
            }
            description
            totalChapter
            slug
            chapterList {
              ... on Chapter {
                id
                name
                tutVideo {
                  url
                }
              }
            }
          }
        }
     `
     const result = await request(MASTER_URL, query);
     return result;
 }

 export default {
    getAllCourseList,
    getCourseBySlug
 }