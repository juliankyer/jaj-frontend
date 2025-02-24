import styled from 'styled-components';

const StyledParallax = styled.div`
.plx__img-wrapper {
  height: 700px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

.plx__img-wrapper--first {
  clip-path: polygon(0 0, 100% 0%, 100% 86%, 0% 100%);
  /* background-color: #15c3d1;  */
  background-image: url('/static/images/heroA.jpg');
  /* temp */
  /* height: 400px; */
}

.plx__img-wrapper--middle {
  clip-path: polygon(0 14%, 100% 0%, 100% 86%, 0% 100%);
  /* background-color: #15c3d1;  */
  background-image: url('/static/images/heroB.jpg');
  /* temp */
  /* height: 400px; */
}

.plx__img-wrapper--last {
  clip-path: polygon(0 14%, 100% 0%, 100% 100%, 0% 100%);
  background-color: #15c3d1; 
  color: #15c3d1; 
  background-image: url('/static/images/heroC.jpg');
  /* temp */
  /* height: 400px; */
}

.plx__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 25%;
  color: $text-01;

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    text-align: center;
  }

  .quote {
    font-style: italic;
    margin: 20px 0px;
  }
}
`;

const Parallax = () => {
  return (
    <StyledParallax>
      <div className='plx__img-wrapper plx__img-wrapper--first'>
        <span className='backgound-image' aria-label='image of blonde model with a glass of wine and diamond ring'></span>
      </div>

      <div className='plx__content'>
        <h3>Welcome to Your Bespoke Jeweler</h3>
        <p className='quote'>
          <i>"Maybe it's not about the happy ending. Maybe it's about the story.”</i>
        </p>
        <p>Every experience leaves a memory. The defining moments in life are what creates an ever lasting memory. Working with Jennifer Amy will create the high end personal experience that everyone dreams for, using her deep connections and hand selected pieces from a private jeweler.</p>
      </div>

      <div className='plx__img-wrapper plx__img-wrapper--middle'>
        <span className='backgound-image' aria-label='close-up of hand wearing a diamond ring on each finger'></span>
      </div>

      <div className='plx__content'>
        <h3>Just for You</h3>
        <p>Every story is different and every journey is unique. Trust Jennifer Amy Jewelry to help you create engagement and wedding rings to match your one-of-a-kind love.</p>
      </div>

      <div className='plx__img-wrapper plx__img-wrapper--last'>
        <span className='backgound-image' aria-label='model looking at her engagement ring'></span>
      </div>
    </StyledParallax>
  );
};

export default Parallax;