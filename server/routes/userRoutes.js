import express from 'express'
import { getUserCourseProgress, userEnrolledCourses, getUserData, purchaseCourse, updateUserCourseProgress, addUserRating } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.get('/data', getUserData)
userRouter.get('/enrolled-courses', userEnrolledCourses)
userRouter.post('/purchase', purchaseCourse)

userRouter.post('/update-course-progress', updateUserCourseProgress)
userRouter.post('/get-user-progress', getUserCourseProgress)
userRouter.post('/add-rating', addUserRating)

export default userRouter;