'use client'

import { FiChevronDown, FiChevronUp } from "react-icons/fi"

export type SortConfig = {
  key: string,
  direction: 'asc' | 'desc',
}

export type Column = {
  key: string,
  label: string,
  sortable?: boolean,
}

type TableHeaderProps = {
  columns: Column[],
  sortConfig: SortConfig,
  onSort: (key: string) => void,
}

export default function TableHeader({
  columns,
  sortConfig,
  onSort,
}: TableHeaderProps) {

  return (
    <thead className="border-b border-border">
      <tr>
        {columns.map((column) => (
          <th 
            key={column.key}
            onClick={() => column.sortable && onSort(column.key)}
            className={`p-4 text-left ${column.sortable ? 'cursor-pointer hover:bg-muted/50' : ''}`}
          >
            <div className="flex items-center gap-2">
              {column.label}
              {column.sortable && (
                (sortConfig.key === column.key && sortConfig.direction === 'asc')
                ? <FiChevronUp
                    size={16}
                    className={sortConfig.key === column.key ? 'opacity-100' : 'opacity-40'}
                  />
                : <FiChevronDown
                    size={16}
                    className={sortConfig.key === column.key ? 'opacity-100' : 'opacity-40'}
                  />
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  )
}
