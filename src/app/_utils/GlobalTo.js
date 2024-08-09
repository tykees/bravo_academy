import { gql } from 'graphql-request';
import { request } from 'graphql-request';

const MASTER_URL = "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/" +process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+ "/master";

const GlobalApi = {
  enrollToCourse: async (courseId, email) => {
    try {
      // Mutation to create the course enrollment
      const createMutation = gql`
        mutation CreateUserEnrollCourse($courseId: String!, $email: String!) {
          createUserEnrollCourse(
            data: { courseId: $courseId, userEmail: $email, courseList: { connect: { slug: $courseId } } }
          ) {
            id
          }
        }
      `;

      // Execute the creation mutation
      const createResult = await request(MASTER_URL, createMutation, { courseId, email });
      const newEnrollmentId = createResult.createUserEnrollCourse.id;

      console.log('Created enrollment ID:', newEnrollmentId);

      // Mutation to publish the newly created enrollment
      const publishMutation = gql`
        mutation PublishUserEnrollCourse($id: ID!) {
          publishUserEnrollCourse(where: { id: $id }) {
            id
          }
        }
      `;

      // Execute the publication mutation
      const publishResult = await request(MASTER_URL, publishMutation, { id: newEnrollmentId });
      console.log('Published enrollment ID:', publishResult.publishUserEnrollCourse.id);

      return publishResult;
    } catch (error) {
      console.error('Error enrolling course:', error);
      throw error;
    }
  },
};

export default GlobalApi;
