import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import SearchIcon from '@material-ui/icons/Search'
import Flag from 'react-world-flags'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles({
  container: {
    margin: 10
  },
  paper: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
});

const MyFlag = (props) => (
  <Flag code={ props.code } height="24" />
)

const Header = (props) => {
  const classes = useStyles();
  return (
    <div className="Header">
      <Container maxWidth='sm'>
        <form className={classes.container} noValidate autoComplete="off" onSubmit={props.submitSearch}>
          <Paper className={classes.paper}>
            <InputBase
              className={classes.input}
              label="Keyword or Phrase Search"
              placeholder="Keyword or Phrase Search"
              inputProps={{ 'aria-label': 'Keyword or Phrase Search' }}
              onChange={props.changeQuery}
            />
            <Divider className={classes.divider} />
            <IconButton className={classes.iconButton} aria-label="Search" color="secondary" type="submit">
              <SearchIcon />
            </IconButton>
          </Paper>
        </form>
      </Container>

      <AppBar position="static">
        <Tabs value={props.currentTab} onChange={props.changeTab} centered scrollButtons="auto">
          <Tab value="ca" label="Canada" icon={<MyFlag code='ca'/>} />
          <Tab value="us" label="USA" icon={<MyFlag code='us'/>} />
          <Tab value="sr" label="Search Results" icon={<SearchIcon />} />
          <Tab value="br" label="Brazil" icon={<MyFlag code='br'/>} />
          <Tab value="pt" label="Portugal" icon={<MyFlag code='pt'/>} />
        </Tabs>
      </AppBar>
    </div>
  )
}
export default Header