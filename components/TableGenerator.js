import React from 'react';

const TableGenerator = ({ headers, table }) => {
  return (
    <>
      <table className='tg'>
        <thead>
          <tr>
            {headers.map((headItem) => {
              return (
                <>
                  <th key={headItem} className='tg-0lax'>{headItem}</th>
                </>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {table.map((t) => {
            return (
              <>
                <tr>
                  {t.map((ite) => {
                    return (
                      <>
                        <td key={ite+"td"} className='tg-0lax'>{ite}</td>
                      </>
                    );
                  })}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableGenerator;
