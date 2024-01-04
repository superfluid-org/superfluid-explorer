import { Alert, Button } from '@mui/material'
import { SerializedError } from '@reduxjs/toolkit'
import { FC, ReactElement } from 'react'

interface Props {
  error: SerializedError
  retry?: () => void
}

const QueryError: FC<Props> = ({ error, retry }): ReactElement => {
  return (
    <>
      <Alert sx={{ m: 1 }} severity="error">
        {error.message}
      </Alert>
      {retry && (
        <Button variant="contained" onClick={() => retry()}>
          Try again?
        </Button>
      )}
    </>
  )
}

export default QueryError
