import React from 'react';

type Props = {
  children: JSX.Element | string | undefined | null;
  className: string;
};

function OutlinedBox({ children, className }: Props): JSX.Element {
  return (
    <div
      className={`border-2 border-solid border-gray-900 dark:border-gray-50 rounded-lg px-6 py-3 ${className}`}
    >
      {children}
    </div>
  );
}

export default OutlinedBox;
