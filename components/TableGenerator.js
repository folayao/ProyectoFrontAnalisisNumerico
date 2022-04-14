import React from 'react';

const TableGenerator = ({headers,table}) => {
  return (
    <>
      <table class='tg'>
        {headers.forEach((headItem) => {
          return (
            <>
              <thead>
                <tr>
                  <th class='tg-0lax'>{headItem}</th>
                </tr>
              </thead>
            </>
          );
        })}
        <tbody>
          <tr>
            <td class='tg-0lax'></td>
            <td class='tg-0lax'></td>
            <td class='tg-0lax'></td>
            <td class='tg-0lax'></td>
            <td class='tg-0lax'></td>
            <td class='tg-0lax'></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableGenerator;
