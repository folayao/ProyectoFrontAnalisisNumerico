import React from 'react';

const TableGenerator = ({ headers, table }) => {
  return (
    <>
      <table class='tg'>
        <thead>
          <tr>
            {headers.map((headItem) => {
              console.log(headItem);
              return (
                <>
                  <th className='tg-0lax'>{headItem}</th>
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
                        <td className='tg-0lax'>{ite}</td>
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
