export const Exercises = () => {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="card" style={{ width: "18rem" }}>
                <img src="" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Title</h5>
                    <p className="card-text">
                        Some text.
                    </p>

                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <a href="#" className="btn btn-primary">
                            Details
                        </a>
                        {/* <a href="#" className="btn btn-primary">
                            Edit
                        </a>
                        <a href="#" className="btn btn-danger">
                            Delete
                        </a> */}
                    </div>
                </div>
                {/* <a href="#" className="btn btn-primary">
                    Add to my program
                </a> */}
            </div>
        </div>
    );
};