import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

import { typeDefs as bookmarkedBookmarkablesTypeDefs } from './bookmarkedBookmarkables';
import { typeDefs as channelsTypeDefs } from './channels';
import { typeDefs as workspacesTypeDefs } from './workspaces';

export const User = gql`
  type User implements Node & Actor {
    id: ID!

    username: String!
    usernameIdentifier: String!

    email: Email!
    unverifiedEmail: Email

    firstName: String
    lastName: String

    workspaces(
      first: NonNegativeInt
      after: Cursor
      last: NonNegativeInt
      before: Cursor

      role: WorkspaceMembershipRole
    ): UserWorkspaceConnection!

    channels(
      workspaceId: ID!
      type: ChannelType

      first: NonNegativeInt
      after: Cursor
      last: NonNegativeInt
      before: Cursor
    ): UserChannelConnection!

    bookmarkedBookmarkables(
      workspaceId: ID!

      first: NonNegativeInt
      after: Cursor
      last: NonNegativeInt
      before: Cursor
    ): UserBookmarkedBookmarkableConnection!

    settings: UserSettings!

    isViewer: Boolean!
  }
`;

const typeDefs: ReadonlyArray<DocumentNode> = [
  User,
  ...workspacesTypeDefs,
  ...channelsTypeDefs,
  ...bookmarkedBookmarkablesTypeDefs,
];

export default typeDefs;
