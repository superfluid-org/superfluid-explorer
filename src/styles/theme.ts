import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// Create a theme instance.
export const createSfTheme = (mode: 'light' | 'dark' = 'light') =>
  createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#0A6643'
      },
      secondary: {
        main: '#2323FF'
      },
      error: {
        main: red.A400
      },
      info: {
        main: 'rgba(0, 0, 0, 0.87)'
      },
      background:
        mode === 'light'
          ? {
              default: '#F7F8FA'
            }
          : {}
    },
    components: {
      MuiButtonBase: {
        // The properties to apply
        defaultProps: {
          disableRipple: true // No more ripple, on the whole application!
        }
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: '8px'
          }
        }
      },
      MuiTable: {
        styleOverrides: {
          root: {
            borderRadius: '7px',
            border: `1px solid ${
              mode === 'light'
                ? 'rgba(224, 224, 224, 1)'
                : 'rgba(81, 81, 81, 1)'
            }`,
            borderCollapse: 'initial'
          }
        }
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            // This makes sortable column headings visible when table header is hovered:
            '&:hover .MuiTableSortLabel-root:not(.Mui-active):not(:hover) .MuiTableSortLabel-icon':
              {
                opacity: 0.5
              }
          }
        }
      },
      MuiTableBody: {
        styleOverrides: {
          root: {
            position: 'relative',
            // This removes border bottom from last row of the table.
            'tr:last-of-type td': { border: 0 }
          }
        }
      },
      MuiTableCell: {
        styleOverrides: {
          body: {
            padding: '0 16px',
            height: '52px',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
          },
          footer: {
            padding: '0 8px',
            height: '56px',
            borderTop: `1px solid ${
              mode === 'light'
                ? 'rgba(224, 224, 224, 1)'
                : 'rgba(81, 81, 81, 1)'
            }`,
            borderBottom: 'initial'
          }
        }
      }
    },
    shape: {
      borderRadius: 7
    }
  })
