
export const MyProgram = () => {
    return (
        <>
            <div className="text-center">
                <h1>My program</h1>
            </div>
            <div className="card mx-auto" style={{ maxWidth: 500 }}>
                <div className="card-body border">
                Squats
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-primary me-md-2 btn-sm" type="button">Details</button>
                        <button className="btn btn-danger btn-sm" type="button">Delete</button>
                    </div>
                </div> 
            </div>
        </>
    );
};