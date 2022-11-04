import Title from '../components/Title';
import Headline from '../components/Headline';
import styled from 'styled-components';
import PricePlan from '../components/PricePlan';

const Pricing = ({ className }) => {
  return (
    <div className={className}>
      <Title title="Pricing" centered />
      <Headline boldText="Foost pricing has the most affordable pricing in the industry" />
      <div className="pricing-plans">
        <PricePlan title="PERSONAL" price={28} red />
        <PricePlan title="ACCELERATED" price={25} green />
        <PricePlan title="BUSINESS PREMIUM" price={19} blue />
      </div>
    </div>
  );
};

export default styled(Pricing)`
  text-align: center;
  padding: 4em 0;

  .pricing-plans {
    margin-top: 5em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1em;
  }
`;
