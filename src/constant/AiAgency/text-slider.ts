export interface ITextSlide {
  id: number;
  text: string;
  suffix: string;
}

export interface TextSliderData {
  items: ITextSlide[];
}
const textSliderData: TextSliderData = {
  items: [
    {
      id: 1,
      text: `Unlock the Power of Learning`,
      suffix: `Explore. Discover. Grow.`,
    },
    {
      id: 2,
      text: `Learning Made Brilliant`,
      suffix: `Unlock the Power of Learning`,
    },
    {
      id: 3,
      text: `Explore. Discover. Grow.`,
      suffix: `Learning Made Brilliant`,
    },
   
   
  ],
};

export default textSliderData;
