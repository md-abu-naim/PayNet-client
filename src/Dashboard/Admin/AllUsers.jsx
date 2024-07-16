
const AllUsers = () => {
    return (
        <div>
            <h1 className="lg:text-7xl text-3xl text-center border-b-4 font-bold p-7">All Users</h1>
            <div className="overflow-x-auto mt-4 text-black">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-300 text-black">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;