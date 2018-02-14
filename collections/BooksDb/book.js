import { Mongo } from 'meteor/mongo';

Books = new Meteor.Collection('Books');
BorrowedBooks = new Meteor.Collection('BorrowedBooks');
WishList = new Meteor.Collection('WishList');
