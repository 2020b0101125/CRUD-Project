import PropTypes from "prop-types";
function Table(props) {
  const custom = {
    display: props.hidden ? "none" : "block", // Hide the table when `hidden` is true
  };
  return (
    <div style={custom} className="Tables">
      <table className="table">
        <thead>
          <tr>
            <th>user_id</th>
            <th>user_name</th>
            <th>user_designation_id</th>
            <th>user_role</th>
            <th>user_contact</th>
            <th>user_email</th>
          </tr>
        </thead>
        <tbody>
          {props.tableContent.map((row, index) => (
            <tr key={index}>
              <td>{row.user_id}</td>
              <td>{row.user_name}</td>
              <td>{row.user_designation_id}</td>
              <td>{row.user_role}</td>
              <td>{row.user_contact}</td>
              <td>{row.user_email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  tableContent: PropTypes.arrayOf(
    PropTypes.shape({
      user_id: PropTypes.string.isRequired,
      user_name: PropTypes.string.isRequired,
      user_designation_id: PropTypes.string.isRequired,
      user_role: PropTypes.string.isRequired,
      user_contact: PropTypes.string.isRequired,
      user_email: PropTypes.string.isRequired,
    })
  ).isRequired,
  hidden: PropTypes.number.isRequired,
};

export default Table;
