import React from 'react';
import BrowseContainer from '../containers/browse';
import useContent from '../hooks/use-content';
import selectionFilter from '../utils/selection-filter';

const Browse = () => {
  const { series } = useContent('series');
  const { films } = useContent('films')

  const slides = selectionFilter({ series, films });


  return (
    <div>
      <BrowseContainer slides={slides}></BrowseContainer>
    </div>
  );
}

export default Browse;
