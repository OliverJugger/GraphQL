import User from "../../../server/models/User";
import Article from "../../../server/models/Article";
import Comment from "../../../server/models/Comment";

export default {
  Query: {
    comment: async (parent, { _id }, context, info) => {
      return await Comment.findOne({ _id }).exec();
    },
    comments: async (parent, args, context, info) => {
      const res = await Comment.find({})
        .populate()
        .exec();

      return res.map(u => ({
        _id: u._id.toString(),
        body : u.body,
        article : u.article,
        author: u.author
      }));
    }
  },
  Mutation: {
    createComment: async (parent, { comment }, context, info) => {
      const newComment = await new Comment({
        body: comment.body,
        article : comment.article,
        author: comment.author
      });

      return new Promise((resolve, reject) => {
        newComment.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    updateComment: async (parent, { _id, comment }, context, info) => {
      return new Promise((resolve, reject) => {
        Comment.findByIdAndUpdate(_id, { $set: { ...comment } }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteComment: (parent, { _id }, context, info) => {
      return new Promise((resolve, reject) => {
        Comment.findByIdAndDelete(_id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  },
  Comment: {
    article: async ({ article }, args, context, info) => {
      return await Article.findById(article);
    },
    author: async ({ author }, args, context, info) => {
      return await User.findById(author);
    }
  }
};
