import React from 'react'
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Article from './Article'

const TabContainer = props => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const Main = (props) => {
  const { currentTab } = props

  return(
    <div className='Main'>
      {props.articles &&
        <React.Fragment>
          {currentTab === 'ca' && <TabContainer>Canada</TabContainer>}
          {currentTab === 'us' && <TabContainer>USA</TabContainer>}
          {currentTab === 'sr' && <TabContainer>Search Results</TabContainer>}
          {currentTab === 'br' && <TabContainer>Brazil</TabContainer>}
          {currentTab === 'pt' && <TabContainer>Portugal</TabContainer>}
        </React.Fragment>
      }

      {!props.articles && 
        <TabContainer>Select a tab</TabContainer>
      }

      {props.articles && props.articles.map((item, key) =>
        <Article item={item} key={key} />
      )}
      
      {props.loading &&
        <LinearProgress />
      }
    </div>
  )
}

export default Main