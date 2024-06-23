import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CodeSnippetSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: 'javascript',
  },
});

const SubHeadingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  codeSnippets: [CodeSnippetSchema],
});

const TopicSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  readTime: {
    type: Number,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  subHeadings: [SubHeadingSchema],
});

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  topics: [TopicSchema],
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
