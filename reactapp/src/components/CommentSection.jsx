import React, { useState } from 'react';

const CommentSection = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const submitComment = (event) => {
        event.preventDefault();

        if (name.trim() === '' || comment.trim() === '') {
            return;
        }

        const newComment = { name, comment };
        setComments([...comments, newComment]);
        setName('');
        setComment('');
    };

    return (
        <div id="commentsSection">
            {comments.map((c, index) => (
                <div key={index}>
                    <strong>{c.name}:</strong> {c.comment}
                </div>
            ))}

            <form id="commentForm" onSubmit={submitComment}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                        id="comment"
                        className="form-control"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-outline-dark primary btn-outline-dark btn-multiple">
                    Submit Comment
                </button>
            </form>
        </div>
    );
};

export default CommentSection;
