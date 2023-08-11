import express from "express"
import { } from "../controller/userController"
import {image} from "../config/multer"
import { createPost, getAllPost, getUserPost, unVotePost, viewVotedPost, votePost } from "../controller/postController"

const router = express.Router()

router.route("/:userID/create-post").post(image, createPost)

router.route("/get-all-post").get(getAllPost)
router.route("/:userID/get-post").get(getUserPost)

router.route("/:userID/:postID/vote-post").post(votePost)
router.route("/:userID/:postID/:likeID/unvote-post").post(unVotePost)

router.route("/:postID/view-vote-post").get(viewVotedPost)

export default router