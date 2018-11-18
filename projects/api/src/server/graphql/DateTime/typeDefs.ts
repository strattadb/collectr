import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const DateTime = gql`
  """
  The \`DateTime\` scalar type represents a
  date-time string at UTC, such as 2007-12-03T10:15:30Z,
  compliant with the \`date-time\` format outlined in section 5.6 of
  the RFC 3339 profile of the ISO 8601 standard for representation
  of dates and times using the Gregorian calendar.
  """
  scalar DateTime
`;

const typeDefs: ReadonlyArray<DocumentNode> = [DateTime];

export default typeDefs;
