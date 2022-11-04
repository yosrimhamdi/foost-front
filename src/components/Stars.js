import styled from 'styled-components';

const Stars = ({ className }) => {
  return (
    <div className={className}>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
    </div>
  );
};

export default styled(Stars)`
  color: #f6b91c;
  letter-spacing: 0.2rem;
`;
