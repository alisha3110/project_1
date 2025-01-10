import React, { useState } from "react";
import CommonInput from "./CommonInput";

const Table = ({ headers, rows, actions, columnWidths = [], sortKey }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Sort rows dynamically if a sortKey is provided
  const sortedRows = sortKey
    ? rows.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return -1;
        if (a[sortKey] > b[sortKey]) return 1;
        return 0;
      })
    : rows;

  // Filter rows based on search query
  const filteredRows = sortedRows.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const sanitizeAndTruncate = (htmlContent, maxLength = 50) => {
    // Strip HTML tags and truncate text
    const plainText = htmlContent.replace(/<\/?[^>]+(>|$)/g, "");
    return plainText.length > maxLength
      ? plainText.slice(0, maxLength) + "..."
      : plainText;
  };

  return (
    <div className="overflow-x-auto">
      {/* Search Input */}
      <div className="flex items-center justify-between">
        <CommonInput
          type="text"
          hideLabel={true}
          name="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search here..."
          customClass="py-1 px-2 !h-auto !max-w-[300px] mt-2"
        />
        <p className="text-xs text-gray-600 min-w-[150px] text-right">
          Showing {filteredRows.length} of {rows.length} rows
        </p>
      </div>

      {/* Table */}
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            {headers.map((header, index) => (
              <th
                key={index}
                style={{ width: columnWidths[index] || "auto" }}
                className="px-4 py-3 text-left font-semibold text-sm lg:text-base"
              >
                {header}
              </th>
            ))}
            {actions && (
              <th className="px-4 py-3 text-center font-semibold text-sm lg:text-base">
                Action
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {filteredRows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${
                rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100 transition-colors duration-200`}
            >
              {Object.entries(row).map(([key, value], cellIndex) => (
                <td
                  key={cellIndex}
                  style={{ width: columnWidths[cellIndex] || "auto" }}
                  className="px-4 py-3 text-gray-700 text-sm lg:text-base"
                >
                  {key === "content"
                    ? sanitizeAndTruncate(value.toString())
                    : value}
                </td>
              ))}
              {actions && (
                <td className="flex px-4 py-3 text-center">
                  {actions.map((action, actionIndex) => (
                    <button
                      key={actionIndex}
                      className={
                        "px-3 py-1 mx-2 text-xs font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700" +
                          action.className || ""
                      }
                      onClick={() => action.onClick(row, action.type)}
                    >
                      {action.label}
                    </button>
                  ))}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
