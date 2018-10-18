export default theme => ({
  Wrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    overflow: 'auto',
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.grey[200],
  },
  content: {
    flex: 1,
    overflow: 'auto',
    padding: '0px',
    overflowY: 'hidden',
  },
  toolbar: {
    backgroundColor: theme.palette.common.white,
  },
  DragWidget: {
    backgroundColor: theme.palette.common.white,
    justifyContent: 'space-between',
  },
  title: {
    display: 'grid',
    gridTemplateRows: '1fr',
  },
  settingIcon: {
    textAlign: 'right',
  },
  button: {
    flex: 1,
    justifyContent: 'space-between',
  },
})
