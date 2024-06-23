import express from 'express';
import { addCourse, updateCourse, deleteCourse } from '../controllers/courseController';

const router = express.Router();

router.post('/', addCourse);
router.put('/:courseId', updateCourse);
router.delete('/:courseId', deleteCourse);

export default router;
