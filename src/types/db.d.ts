import { Comment, Post, Subreddit, User, Vote } from "@prisma/client"

export type ExtendedPost = Postst & {
    subreddit: Subreddit,
    votes: Vote[],
    author: User,
    comments: Comment[],
}