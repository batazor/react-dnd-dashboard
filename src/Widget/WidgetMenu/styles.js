export default theme => ({
  BoxTitle: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    marginTop: '1em',
  },
  wrapper: {
    background: theme.palette.secondary.main,
  },
  WidgetCard: {
    margin: '1.5em 2em 0em 1.5em',
    '&:hover': { cursor: 'move' },
    '&:active': { cursor: 'grabbing' },
  },
  Box: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    overflow: 'auto',
  },
  Toolbar: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gridTemplateRows: 'auto auto',
  },
  Card: {
    background: theme.palette.secondary.main,
    display: 'grid',
    gridTemplateColumns: '3em 1fr',
    alignItems: 'center',
    color: theme.palette.secondary.dark,
    border: `1px ${theme.palette.secondary.dark} solid`,
    padding: '0.8em 0',
  },
  IconList: {
    display: 'flex !important',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BoxColumn: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    maxHeight: '30vh',
    overflow: 'auto',
  },
  isDragClassName: {
    background: '#f5d25d',
    width: '237.33px',
    margin: 'auto',
    height: '44px',
  },
})
