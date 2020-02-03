import { buildSchema } from 'graphql';
import { mergeTypes } from 'merge-graphql-schemas';
import CategoryType from './category.type';
import CreditType from './credit.type';
import ExpenseType from './expense.type';
import TripType from './trip.type';
import UserType from './user.type';
import HelloType from './hello.type';

const types = [CategoryType, CreditType, ExpenseType, TripType, UserType, HelloType];

const mergedTypes = mergeTypes(types, { all: true });

export default buildSchema(mergedTypes);
