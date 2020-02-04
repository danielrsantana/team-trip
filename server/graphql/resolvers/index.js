import { mergeResolvers } from 'merge-graphql-schemas';
import CategoryResolver from './category.resolver';
import CreditResolver from './credit.resolver';
import ExpenseResolver from './expense.resolver';
import TripResolver from './trip.resolver';
import UserResolver from './user.resolver';

const resolvers = [CategoryResolver, CreditResolver, ExpenseResolver, TripResolver, UserResolver];

export default mergeResolvers(resolvers);
