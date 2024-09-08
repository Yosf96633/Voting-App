import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const PositionsList = () => {
  const darkmode = useSelector((state) => state.AdminTheme.Admin_dark_mode);
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await fetch('http://localhost/VOTING%20SYSTEM/get_positions.php');
        const data = await response.json();
        
        if (data.success) {
          setPositions(data.positions);
        } else {
          setMessage(data.message);
        }
      } catch (error) {
        setMessage('An error occurred while fetching positions');
      } finally {
        setLoading(false);
      }
    };

    fetchPositions();
  }, []);

  return (
    <div
      className={`${
        darkmode ? 'bg-gray-900 text-white' : 'bg-white text-black'
      } transition-colors duration-300 min-h-screen flex justify-center items-center py-8`}
    >
      {loading ? (
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      ) : message ? (
        <p className="text-red-600">{message}</p>
      ) : positions.length === 0 ? (
        <p className="text-2xl font-semibold">No positions available!</p>
      ) : (
        <div
          className={`border border-gray-400 h-[70vh] w-[70vw] max-sm:w-[90vw] max-sm:h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 ${darkmode ? 'scrollbar-track-gray-800' : 'scrollbar-track-slate-50'} p-8 rounded-[1rem]`}
        >
          <div
            className={`${
              darkmode ? 'bg-gray-900 text-white' : 'bg-white text-black'
            } transition-colors duration-300 grid grid-cols-3 p-4 font-semibold`}
          >
            <div className="col-span-1">Position ID</div>
            <div className="col-span-1 flex justify-center">Position Name</div>
            <div className="col-span-1 flex justify-center">Max Votes</div>
          </div>
          <ul className="divide-y divide-gray-400 overflow-y-auto">
            {positions.map((position) => (
              <li
                key={position.ID}
                className={`${
                  darkmode ? 'bg-gray-700 text-white' : 'bg-white text-black'
                } transition-colors duration-300 grid grid-cols-3 p-4 my-4 rounded shadow-md`}
              >
                <div className="col-span-1">{position.ID}</div>
                <div className="col-span-1 flex justify-center">
                  {position.position_name}
                </div>
                <div className="col-span-1 flex justify-center">
                  {position.max_vote}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PositionsList;
