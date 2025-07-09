import React from 'react';
import styles from './FormatsTable.module.css';

interface TableCellLink {
  text: string;
  href: string;
  external?: boolean;
}

type TableCell = string | TableCellLink;

interface FormatsTableProps {
  title: string;
  headers: string[];
  rows: TableCell[][];
}

export default function FormatsTable({ title, headers, rows }: FormatsTableProps): React.JSX.Element {
  return (
    <div className={styles.tableSection}>
      <h4>{title}</h4>
      <table className={styles.formatsTable}>
        <tbody>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>
                  {typeof cell === 'string' ? (
                    cell
                  ) : (
                    <a href={cell.href} target={cell.external ? '_blank' : undefined} rel={cell.external ? 'noopener noreferrer' : undefined}>
                      {cell.text}
                    </a>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 