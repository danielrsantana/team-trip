import { mergeResolvers } from 'merge-graphql-schemas';
import CategoryResolver from './category.resolver';
import HelloResolver from './hello.resolver';

const resolvers = [CategoryResolver, HelloResolver];

export default mergeResolvers(resolvers);
