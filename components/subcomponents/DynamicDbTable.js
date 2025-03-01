import styles from "../../styles/DynamicDbTable.module.css";

export default function DynamicDbTable({
  columnNames,
  rowData,
  onDeleteRow,
  selectedRow,
}) {
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this row?")) {
      onDeleteRow(id);
    }
  };

  const handleSelectRow = (id) => {
    if (selectedRow) {
      selectedRow(id);
    }
  };

  return (
    <div className={styles.tableContainer}>
      {columnNames.length > 0 && rowData.length > 0 ? ( // Ensure rowData exists
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Select</th>
              {columnNames.map((col) => (
                <th key={col}>{col}</th>
              ))}
              {onDeleteRow && <th>Delete</th>}
            </tr>
          </thead>
          <tbody>
            {rowData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>
                  <button
                    className={styles.selectButton}
                    onClick={() => handleSelectRow(row.id)}
                  >
                    Select
                  </button>
                </td>
                {columnNames.map((col) => (
                  <td key={col} className={styles.tdWrapAll}>
                    {row[col] !== null && row[col] !== undefined
                      ? row[col]
                      : "-"}
                    {/* Ensure data is not undefined/null */}
                  </td>
                ))}
                {onDeleteRow && (
                  <td>
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleDelete(row.id)}
                    >
                      X
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
// import styles from "../../styles/DynamicDbTable.module.css";

// export default function DynamicDbTable({ columnNames, rowData, onDeleteRow }) {
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this row?")) {
//       onDeleteRow(id);
//     }
//   };

//   return (
//     <div className={styles.tableContainer}>
//       {columnNames.length > 0 ? (
//         <table className={styles.table}>
//           <thead>
//             <tr>
//               {columnNames.map((col) => (
//                 <th key={col}>{col}</th>
//               ))}
//               {onDeleteRow && <th>Delete</th>}
//             </tr>
//           </thead>
//           <tbody>
//             {rowData.map((row, rowIndex) => (
//               <tr key={rowIndex}>
//                 {columnNames.map((col) => (
//                   <td key={col} className={"tdWrapAll"}>
//                     {row[col]}
//                   </td>
//                 ))}
//                 {onDeleteRow && (
//                   <td>
//                     <button
//                       className={styles.deleteButton}
//                       onClick={() => handleDelete(row.id)}
//                     >
//                       X
//                     </button>
//                   </td>
//                 )}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No data available</p>
//       )}
//     </div>
//   );
// }
