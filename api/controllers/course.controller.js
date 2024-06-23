import Course from '../models/Course';
import { errorHandler } from '../utils/error';

export const addCourse = async (req, res, next) => {
  const { title, topics } = req.body;

  try {
    const newCourse = new Course({
      title,
      topics,
    });

    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    next(errorHandler(400, error.message));
  }
};

export const updateCourse = async (req, res, next) => {
  const { courseId } = req.params;
  const { title, topics } = req.body;

  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      { title, topics },
      { new: true }
    );

    if (!updatedCourse) {
      return next(errorHandler(404, 'Course not found'));
    }

    res.status(200).json(updatedCourse);
  } catch (error) {
    next(errorHandler(400, error.message));
  }
};

export const deleteCourse = async (req, res, next) => {
  const { courseId } = req.params;

  try {
    const deletedCourse = await Course.findByIdAndDelete(courseId);

    if (!deletedCourse) {
      return next(errorHandler(404, 'Course not found'));
    }

    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    next(errorHandler(400, error.message));
  }
};
