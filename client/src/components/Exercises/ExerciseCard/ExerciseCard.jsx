import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../contexts/authContext"

export const ExerciseCard = ({
    imageUrl,
    name,
    _id,
}) => {
    const { isAuth } = useContext(AuthContext);

    const [likesCount, setLikesCount] = useState(0);
    const [dislikesCount, setDislikesCount] = useState(0);

    const [likeActive, setLikeActive] = useState(false);
    const [dislikeActive, setDislikeActive] = useState(false);

    const likeClick = () => {
        if (likeActive) {
            setLikeActive(false);
            setLikesCount(likesCount - 1);
        } else {
            setLikeActive(true);
            setLikesCount(likesCount + 1);
            if (dislikeActive) {
                setDislikeActive(false);
                setLikesCount(likesCount + 1);
                setDislikesCount(dislikesCount - 1);
            }
        }
    };

    const dislikeClick = () => {
        if (dislikeActive) {
            setDislikeActive(false);
            setDislikesCount(dislikesCount - 1);
        } else {
            setDislikeActive(true);
            setDislikesCount(dislikesCount + 1);
            if (likeActive) {
                setLikeActive(false);
                setDislikesCount(dislikesCount + 1);
                setLikesCount(likesCount - 1);
            }
        }
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={imageUrl} alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    To see more information about the exercise, press the details button.
                </p>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Link to={`${_id}/details`} className="btn btn-primary">
                        Details
                    </Link>
                </div>
                {isAuth && (
                    <div className="d-grid gap-2 d-md-flex">
                        <button className="btn btn-primary btn-sm" type="button" onClick={likeClick}>Like: {likesCount}</button>
                        <button className="btn btn-danger btn-sm" type="button" onClick={dislikeClick}>Dislike: {dislikesCount}</button>
                    </div>
                )}
            </div>

        </div>
    );
};
