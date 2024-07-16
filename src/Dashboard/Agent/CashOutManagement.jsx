
const CashOutManagement = () => {
    return (
        <div>
            <h1 className="lg:text-7xl text-3xl text-center border-b-4 font-bold p-7">Cash-Out Management</h1>

            <div className="overflow-x-auto mt-4 text-black">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-300 text-black">
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Transaction ID</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CashOutManagement;