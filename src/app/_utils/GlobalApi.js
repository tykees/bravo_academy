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
          chapterLists {
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
            chapterLists {
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

 const enrollToCourse= async(courseId, email,)=> {
  const query=gql`
  mutation MyMutation {
    createUserEnrollCourse(
      data: {courseId: "`+courseId+`", userEmail: "`+email+`", courseList: {connect: {slug: "`+courseId+`"}}}
    ) {
      id
    }
    publishManyUserEnrollCoursesConnection {
      edges {
        node {
          id
        }
      }
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result;
 }

 const checkUserEnrolledToCourses= async (courseId, email)=> {
  const query=gql`
  query MyQuery {
    userEnrollCourses(where: {courseId: "`+courseId+`", userEmail: "`+email+`"}) {
      id
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result;
 }

 export default {
    getAllCourseList,
    getCourseBySlug,
    enrollToCourse,
    checkUserEnrolledToCourses
 }