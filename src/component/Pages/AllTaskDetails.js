import React from 'react';
import { Link } from 'react-router-dom';

const AllTaskDetails = ({ alldata, i }) => {
    const { _id, data } = alldata;
    console.log(alldata)
    return (
        <>
            <tr className="hover text-center">
                <th>{i + 1}</th>
                <td>{data.slice(0, 15) + "..."}</td>
                <td><Link to={`/SingleTask/${_id}`} className="btn btn-sm  btn-info">see details</Link></td>
            </tr>
        </>
    );
};

export default AllTaskDetails;